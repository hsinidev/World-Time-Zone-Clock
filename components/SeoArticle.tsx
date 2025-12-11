import React, { useState } from 'react';

export const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="max-w-4xl mx-auto mt-16 mb-16 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-700/50 p-6 md:p-10 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        The Ultimate Guide to Global Time Management
      </h2>
      
      <div className={`prose prose-invert max-w-none text-gray-300 transition-all duration-500 overflow-hidden relative ${isExpanded ? 'max-h-full' : 'max-h-24'}`}>
        
        {/* Article Content */}
        <article>
          <p className="lead text-lg mb-4">
            In an era defined by digital connectivity, the concept of "local time" has become increasingly fluid. Whether you are a project manager coordinating a distributed team across three continents, a Forex trader watching the opening bells in London and Tokyo, or simply a friend trying to catch a loved one awake on the other side of the world, understanding and tracking global time zones is no longer a luxury—it is a necessity. Welcome to <strong>Doodax.com</strong>, your comprehensive solution for precision time tracking.
          </p>

          <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">Why Real-Time Zone Tracking Matters</h3>
          <p>
            The world operates on 24 primary time zones, but the reality is far more complex. With daylight saving time (DST) adjustments, half-hour offsets (like in India or parts of Australia), and political changes to time standards, doing the mental math is prone to error. A missed meeting due to a timezone miscalculation can cost businesses thousands of dollars, while a missed call to family can result in unnecessary worry.
          </p>
          <p>
            Our World Time Zone Clock eliminates this friction. By querying authoritative time databases in real-time, we provide millisecond-accurate data that accounts for every anomaly in the global time structure.
          </p>

          <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">Features That Define Doodax.com</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Latency-Free Updates:</strong> Unlike static tables, our clocks update dynamically.</li>
            <li><strong>Intelligent Search:</strong> Our search algorithm parses IANA database strings to help you find "New York" even if you just type "York".</li>
            <li><strong>Visual Clarity:</strong> The user interface is designed with high contrast and modern typography to ensure readability at a glance.</li>
            <li><strong>Privacy First:</strong> We do not track your location or store your data on external servers. Your dashboard preferences are yours alone.</li>
          </ul>

          <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">Optimizing Remote Workflows</h3>
          <p>
            The rise of remote work has decentralized the office. Tools like Doodax are essential for the "Asynchronous Work" model. By visualizing the overlap hours between London (GMT), New York (EST), and San Francisco (PST), managers can schedule "golden hour" meetings without forcing employees to wake up at 4 AM. This leads to better work-life balance and higher productivity.
          </p>

          <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">For the Global Traveler</h3>
          <p>
            Jet lag is disorienting enough without having to constantly reset your physical watch. Use our dashboard as your "home base" to keep track of time back home while you explore new horizons. The responsive design ensures that the experience is just as smooth on a mobile device in a Bali café as it is on a desktop in a Berlin coworking space.
          </p>

          <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">Frequently Asked Questions (FAQ)</h3>
          
          <div className="space-y-4 mt-4">
            <div>
              <strong className="text-white block">Q: How accurate is the time displayed?</strong>
              <p>A: We sync directly with atomic-clock synchronized API servers. The time displayed is accurate to within a few hundred milliseconds, depending on your internet latency.</p>
            </div>
            <div>
              <strong className="text-white block">Q: Does this account for Daylight Saving Time?</strong>
              <p>A: Yes. The system automatically detects DST rules for every specific region and adjusts the clock accordingly without manual input.</p>
            </div>
            <div>
              <strong className="text-white block">Q: Is Doodax.com free to use?</strong>
              <p>A: Absolutely. Our mission is to provide free, high-quality utilities to the global community.</p>
            </div>
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            Doodax.com is committed to continuous improvement. We regularly update our timezone databases to reflect political changes and geographic updates. Thank you for choosing us as your trusted timekeeping partner.
          </p>
        </article>

        {/* Gradient Overlay for collapsed state */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
        )}
      </div>

      <div className="text-center mt-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="group inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-teal-400 hover:text-teal-300 px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-teal-500/20 border border-gray-700"
        >
          <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
          <i className={`fas fa-chevron-down transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
        </button>
      </div>
    </section>
  );
};