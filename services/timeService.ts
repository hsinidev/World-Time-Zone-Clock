import { WorldTimeApiResponse, TimeApiIoResponse } from '../types';

// Swapped to the new timeapi.io endpoint as requested
const API_URL = 'https://timeapi.io/api/Time/current/zone?timeZone=';

// Helper to create a timezone abbreviation from the full timezone name
const createAbbreviation = (name: string): string => {
    // This creates a simple abbreviation, e.g., "America/New_York" -> "A/NY"
    return name.split('/').map(part => part.match(/\b(\w)/g)?.join('')).join('/') || 'N/A';
};

// Maps the response from the new timeapi.io endpoint to our app's internal WorldTimeApiResponse interface
const mapTimeApiIoResponse = (data: TimeApiIoResponse): WorldTimeApiResponse => {
    return {
        // Map new fields to the old expected structure
        datetime: data.dateTime,
        timezone: data.timeZone,
        dst: data.dstActive,
        
        // Create/default other fields as they aren't provided by the new API
        abbreviation: createAbbreviation(data.timeZone),
        utc_offset: 'N/A', // Not provided by this specific endpoint
        utc_datetime: '', // Not provided
        client_ip: '',
        day_of_week: new Date(data.dateTime).getDay(),
        day_of_year: 0, 
        dst_from: null,
        dst_offset: 0,
        dst_until: null,
        raw_offset: 0,
        unixtime: Math.floor(new Date(data.dateTime).getTime() / 1000),
        week_number: 0,
    };
};

/**
 * Fetches the current time for a single timezone.
 */
export const fetchTime = async (timezone: string): Promise<WorldTimeApiResponse> => {
  let response;
  try {
    response = await fetch(`${API_URL}${timezone}`);
  } catch (error) {
    console.error('Fetch API call failed:', error);
    throw new Error('Failed to fetch. Please check your network connection.');
  }

  if (!response.ok) {
    let errorText;
    try {
      // The error response from this endpoint is often plain text
      errorText = await response.text();
    } catch (e) {
      errorText = response.statusText; // Fallback
    }
    // Prepending status makes it more informative, e.g., "API Error (400): The timeZone..."
    throw new Error(`API Error (${response.status}): ${errorText}`);
  }

  const data: TimeApiIoResponse = await response.json();
  return mapTimeApiIoResponse(data);
};

/**
 * Fetches the current time for multiple timezones concurrently.
 */
export const fetchAllTimes = async (timezones: string[]): Promise<PromiseSettledResult<WorldTimeApiResponse>[]> => {
    const promises = timezones.map(timezone => fetchTime(timezone));
    return Promise.allSettled(promises);
};

/**
 * Fetches the complete list of available IANA timezones from the API.
 */
export const fetchAvailableTimezones = async (): Promise<string[]> => {
    try {
        const response = await fetch('https://timeapi.io/api/TimeZone/AvailableTimeZones');
        if (!response.ok) {
            throw new Error(`API Error (${response.status}): Failed to fetch available timezones.`);
        }
        const data: string[] = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch available timezones:', error);
        // It's better to throw the error to let the caller handle it,
        // for instance, by showing an error message to the user.
        throw error;
    }
};
