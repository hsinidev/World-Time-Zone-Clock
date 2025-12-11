import React, { useState, useCallback, useEffect } from 'react';
import { Clock, ClockCardSkeleton } from './components/Clock';
import { AddClockForm } from './components/AddClockForm';
import { fetchAllTimes, fetchAvailableTimezones } from './services/timeService';
import { WorldTimeApiResponse } from './types';
import { DEFAULT_TIMEZONES } from './data/timezones';
import { InfoModal } from './components/InfoModal';
import { legalContent } from './data/legal';
import { SeoArticle } from './components/SeoArticle';

const App: React.FC = () => {
  const [timezones, setTimezones] = useState<string[]>([]);
  const [allTimezones, setAllTimezones] = useState<string[]>([]);
  const [initialData, setInitialData] = useState<Map<string, PromiseSettledResult<WorldTimeApiResponse>>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [featuredTimezone, setFeaturedTimezone] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const openModal = (page: keyof typeof legalContent) => {
    setModalContent(legalContent[page]);
  };
  const closeModal = () => {
      setModalContent(null);
  };

  useEffect(() => {
    const loadInitialData = async () => {
        setIsLoading(true);
        try {
            const available = await fetchAvailableTimezones();
            setAllTimezones(available);
        } catch (error) {
            console.error("Could not load available timezones for search.", error);
        }

        const results = await fetchAllTimes(DEFAULT_TIMEZONES);
        const dataMap = new Map<string, PromiseSettledResult<WorldTimeApiResponse>>();
        DEFAULT_TIMEZONES.forEach((tz, index) => {
            dataMap.set(tz, results[index]);
        });
        
        setInitialData(dataMap);
        setTimezones(DEFAULT_TIMEZONES);
        setIsLoading(false);
    };
    loadInitialData();
  }, []);

  const addTimezone = useCallback((timezone: string) => {
    if (timezone) {
      setFeaturedTimezone(timezone);
    }
  }, []);

  const removeTimezone = useCallback((timezoneToRemove: string) => {
    setTimezones(prevTimezones => prevTimezones.filter(tz => tz !== timezoneToRemove));
  }, []);
  
  const removeFeaturedTimezone = useCallback(() => {
    setFeaturedTimezone(null);
  }, []);

  const handleRefresh = useCallback(async () => {
      const zonesToRefresh = [...timezones];
      if(featuredTimezone) {
        zonesToRefresh.push(featuredTimezone);
      }

      if (zonesToRefresh.length === 0) return;

      setIsRefreshing(true);
      const results = await fetchAllTimes(zonesToRefresh);
      const dataMap = new Map<string, PromiseSettledResult<WorldTimeApiResponse>>();
      zonesToRefresh.forEach((tz, index) => {
          dataMap.set(tz, results[index]);
      });
      
      if (featuredTimezone) {
        setFeaturedTimezone(null);
        setTimeout(() => setFeaturedTimezone(featuredTimezone), 0);
      }

      setInitialData(new Map(dataMap));
      setIsRefreshing(false);
  }, [timezones, featuredTimezone]);


  return (
    <div className="min-h-screen text-gray-100 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col min-h-[calc(100vh-4rem)]">
        
        {/* Main Content Card */}
        <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 md:p-10 shadow-2xl mb-12">
            <header className="text-center mb-10 md:mb-14">
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 drop-shadow-lg tracking-tight">
                World Time Zone Clock
            </h1>
            <p className="mt-4 text-xl text-gray-300 font-light max-w-2xl mx-auto">
                Real-time synchronization for the global citizen.
            </p>
            </header>
            
            <main>
            <div className="max-w-3xl mx-auto">
                <AddClockForm 
                    onAddTimezone={addTimezone} 
                    availableTimezones={allTimezones}
                />
            </div>

            {featuredTimezone && (
                <div className="max-w-sm mx-auto mt-8 transform transition-all hover:scale-105" key={featuredTimezone}>
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-30"></div>
                        <Clock
                            timezone={featuredTimezone}
                            onRemove={removeFeaturedTimezone}
                            initialData={initialData.get(featuredTimezone)}
                        />
                    </div>
                </div>
            )}

            <div className="flex justify-center mt-10">
                <button 
                    type="button" 
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-teal-500 text-teal-400 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-label="Refresh all times"
                >
                    <i className={`fas fa-sync-alt ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`}></i>
                    <span>{isRefreshing ? 'Syncing...' : 'Sync All Clocks'}</span>
                </button>
            </div>

            <hr className="my-12 border-gray-700/50" />
            
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {DEFAULT_TIMEZONES.map(tz => <ClockCardSkeleton key={tz} />)}
                </div>
            ) : timezones.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {timezones.map(timezone => (
                    <Clock 
                        key={timezone} 
                        timezone={timezone} 
                        onRemove={removeTimezone}
                        initialData={initialData.get(timezone)}
                    />
                ))}
                </div>
            ) : (
                <div className="text-center mt-16 p-10 bg-gray-800/30 rounded-2xl border border-dashed border-gray-600">
                    <i className="fas fa-globe-americas fa-3x text-gray-600 mb-4 animate-pulse"></i>
                    <h2 className="text-2xl font-semibold text-gray-400">Your dashboard is empty</h2>
                    <p className="text-gray-500 mt-2">Search above to add your first city.</p>
                </div>
            )}
            </main>
        </div>

        {/* SEO Article Component */}
        <SeoArticle />

        {/* Footer */}
        <footer className="mt-auto text-center py-8 text-gray-500 text-sm bg-gray-900/80 backdrop-blur-md rounded-t-2xl border-t border-gray-800 w-full">
            <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-3 mb-6 font-medium">
                <button onClick={() => openModal('about')} className="hover:text-teal-400 transition-colors">About</button>
                <a href="https://doodax.com/blog" className="hover:text-teal-400 transition-colors">Blog</a>
                <button onClick={() => openModal('contact')} className="hover:text-teal-400 transition-colors">Contact</button>
                <button onClick={() => openModal('guide')} className="hover:text-teal-400 transition-colors">Guide</button>
                <button onClick={() => openModal('privacy')} className="hover:text-teal-400 transition-colors">Privacy Policy</button>
                <button onClick={() => openModal('terms')} className="hover:text-teal-400 transition-colors">Terms of Service</button>
                <button onClick={() => openModal('dmca')} className="hover:text-teal-400 transition-colors">DMCA</button>
            </div>

            <div className="flex flex-col items-center gap-2">
                <p>&copy; {new Date().getFullYear()} Doodax.com. All rights reserved.</p>
                <p className="text-gray-400">
                    Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-400 hover:text-white transition-colors">HSINI MOHAMED</a>
                </p>
            </div>
        </footer>
      </div>
      {modalContent && (
        <InfoModal title={modalContent.title} onClose={closeModal}>
            {modalContent.content}
        </InfoModal>
      )}
    </div>
  );
};

export default App;