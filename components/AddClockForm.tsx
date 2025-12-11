import React, { useState, useEffect, useRef } from 'react';

interface AddClockFormProps {
  onAddTimezone: (timezone: string) => void;
  availableTimezones: string[];
}

export const AddClockForm: React.FC<AddClockFormProps> = ({ onAddTimezone, availableTimezones }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const formRef = useRef<HTMLDivElement>(null);


  // Effect to handle clicks outside the form to close the suggestions dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 1 && availableTimezones.length > 0) {
      const filtered = availableTimezones
        .filter(tz => tz.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 7); // Limit suggestions for performance and UI clarity
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };
  
  const handleSuggestionClick = (timezone: string) => {
    onAddTimezone(timezone);
    setInputValue('');
    setSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTimezone(inputValue.trim());
      setInputValue('');
      setSuggestions([]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto" ref={formRef}>
        <div className="relative">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-4">
                <div className="relative flex-grow">
                    <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Search for a timezone (e.g., 'America/Chicago')"
                        className="w-full bg-gray-700 text-white rounded-md py-3 pl-12 pr-4 border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                        autoComplete="off"
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 shadow-md flex items-center gap-2"
                    aria-label="Add Timezone"
                >
                    <i className="fas fa-plus"></i>
                    <span>Add</span>
                </button>
            </form>

            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                    {suggestions.map(suggestion => (
                        <li 
                            key={suggestion}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-4 py-3 cursor-pointer hover:bg-teal-600/50 text-gray-300 transition-colors duration-150"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
};