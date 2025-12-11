import React, { useState, useEffect } from 'react';
import { fetchTime } from '../services/timeService';
import { WorldTimeApiResponse } from '../types';

interface ClockProps {
  timezone: string;
  onRemove: (timezone: string) => void;
  initialData?: PromiseSettledResult<WorldTimeApiResponse>;
}

export const ClockCardSkeleton: React.FC = () => (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2 mb-6"></div>
        <div className="h-12 bg-gray-600 rounded w-full mb-4"></div>
        <div className="h-5 bg-gray-700 rounded w-5/6"></div>
    </div>
);

export const Clock: React.FC<ClockProps> = ({ timezone, onRemove, initialData }) => {
  const [time, setTime] = useState<Date | null>(null);
  const [timeData, setTimeData] = useState<WorldTimeApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getTimezoneCity = (tz: string) => tz.split('/').pop()?.replace(/_/g, ' ') || tz;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        let data: WorldTimeApiResponse;
        if (initialData) {
          if (initialData.status === 'fulfilled') {
            data = initialData.value;
          } else {
            throw initialData.reason;
          }
        } else {
          data = await fetchTime(timezone);
        }
        setTimeData(data);
        setTime(new Date(data.datetime));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };
    
    load();

  }, [timezone, initialData]);

  useEffect(() => {
    if (time) {
      const timerId = setInterval(() => {
        setTime(prevTime => new Date(prevTime!.getTime() + 1000));
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [time]);

  if (loading) {
    return <ClockCardSkeleton />;
  }

  if (error) {
    return (
      <div className="bg-red-900/50 border border-red-700 rounded-xl p-6 shadow-lg text-center flex flex-col justify-center items-center">
        <h3 className="font-bold text-red-300">{getTimezoneCity(timezone)}</h3>
        <p className="text-red-400 text-sm mt-2">{error}</p>
        <button onClick={() => onRemove(timezone)} className="mt-4 bg-red-600 hover:bg-red-700 text-white text-xs py-1 px-3 rounded-full">
            Remove
        </button>
      </div>
    );
  }

  if (!time || !timeData) {
    return null;
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-teal-500/20 hover:border-teal-500/50 relative group">
       <button 
        onClick={() => onRemove(timezone)} 
        className="absolute top-3 right-3 text-gray-500 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label={`Remove ${timezone} clock`}
      >
        <i className="fas fa-times-circle"></i>
      </button>

      <div className="text-left">
        <h2 className="text-2xl font-bold text-white">{getTimezoneCity(timezone)}</h2>
        <p className="text-sm text-gray-400 truncate">{timezone}</p>
      </div>

      <div className="my-4 text-center">
        <p className="text-5xl font-mono font-extrabold text-teal-300 tracking-wider">
          {time.toLocaleTimeString('en-US', { hour12: false })}
        </p>
      </div>

      <div className="text-center text-gray-400">
        <p className="font-medium">
          {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-xs mt-1">
          UTC {timeData.utc_offset} ({timeData.abbreviation})
        </p>
      </div>
    </div>
  );
};
