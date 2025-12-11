import React from 'react';

// Using React.createElement to ensure compatibility within the TS file structure provided.
const linkStyle = 'text-teal-400 hover:underline transition-colors';
const sectionHeader = 'text-xl font-semibold mb-2 mt-4 text-teal-300';
const paragraph = 'mb-4 text-gray-300 leading-relaxed';

export const legalContent = {
  about: {
    title: 'About Doodax World Clock',
    content: React.createElement(React.Fragment, null,
      React.createElement('p', { className: paragraph }, 'Welcome to Doodax.com, the premier destination for real-time global time synchronization. In an increasingly connected world, knowing "when" matters just as much as knowing "where".'),
      React.createElement('p', { className: paragraph }, "Our mission is to bridge the gap between time zones for remote teams, international travelers, forex traders, and global citizens. We believe in precision, aesthetics, and usability."),
      React.createElement('p', { className: paragraph }, 'Developed with the latest web technologies, this dashboard ensures that you are always in sync with the world. Powered by robust APIs and a passion for design by HSINI MOHAMED.'),
      React.createElement('p', { className: paragraph }, 'For official inquiries, please contact us at ', React.createElement('a', { href: 'mailto:hsini.web@gmail.com', className: linkStyle }, 'hsini.web@gmail.com'), '.')
    ),
  },
  contact: {
    title: 'Contact Information',
    content: React.createElement(React.Fragment, null,
      React.createElement('p', { className: paragraph }, 'We value your feedback and are here to assist with any inquiries regarding the Doodax World Clock.'),
      React.createElement('h3', { className: sectionHeader }, 'General Support'),
      React.createElement('p', { className: paragraph }, 'For bug reports, feature requests, or general questions, please email us directly.'),
      React.createElement('h3', { className: sectionHeader }, 'Business Inquiries'),
      React.createElement('p', { className: paragraph }, 'If you are interested in advertising or partnerships, please reach out to our administration team.'),
      React.createElement('div', { className: 'mt-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600' },
        React.createElement('strong', { className: 'block text-white mb-1' }, 'Primary Contact:'),
        React.createElement('a', { href: 'mailto:hsini.web@gmail.com', className: 'text-xl text-teal-400 font-bold' }, 'hsini.web@gmail.com')
      )
    ),
  },
  guide: {
    title: 'User Guide & Documentation',
    content: React.createElement(React.Fragment, null,
      React.createElement('p', { className: paragraph }, 'Navigate the global time landscape with ease using our comprehensive dashboard.'),
      React.createElement('h3', { className: sectionHeader }, '1. Adding a New Clock'),
      React.createElement('p', { className: paragraph }, 'Locate the search bar at the top of the interface. Begin typing the name of a city, country, or timezone (e.g., "London" or "Asia/Tokyo"). Select your desired location from the dropdown menu to instantly add it to your dashboard.'),
      React.createElement('h3', { className: sectionHeader }, '2. Managing Your Clocks'),
      React.createElement('p', { className: paragraph }, 'Your dashboard displays a grid of clocks. The most recently added clock is often featured at the top. To remove a clock, hover over the card and click the "X" icon in the top-right corner.'),
      React.createElement('h3', { className: sectionHeader }, '3. Refreshing Data'),
      React.createElement('p', { className: paragraph }, 'While the clocks tick in real-time locally, you can resynchronize with the server by clicking the "Refresh All" button. This ensures network latency or system sleep has not affected accuracy.')
    ),
  },
  privacy: {
    title: 'Privacy Policy',
    content: React.createElement(React.Fragment, null,
      React.createElement('p', { className: paragraph }, 'Last Updated: October 2023'),
      React.createElement('p', { className: paragraph }, "At Doodax.com, accessible from https://doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Doodax.com and how we use it."),
      React.createElement('h3', { className: sectionHeader }, 'Log Files'),
      React.createElement('p', { className: paragraph }, 'Doodax.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.'),
      React.createElement('h3', { className: sectionHeader }, 'Cookies and Web Beacons'),
      React.createElement('p', { className: paragraph }, 'We do not use cookies to track personal user behavior. Local Storage may be used solely to persist your timezone preferences locally on your device.'),
      React.createElement('h3', { className: sectionHeader }, 'Consent'),
      React.createElement('p', { className: paragraph }, 'By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions. For any privacy-related questions, contact ', React.createElement('a', { href: 'mailto:hsini.web@gmail.com', className: linkStyle }, 'hsini.web@gmail.com'), '.')
    ),
  },
  terms: {
    title: 'Terms of Service',
    content: React.createElement(React.Fragment, null,
      React.createElement('h3', { className: sectionHeader }, '1. Acceptance of Terms'),
      React.createElement('p', { className: paragraph }, 'By accessing this website we assume you accept these terms and conditions. Do not continue to use Doodax.com if you do not agree to take all of the terms and conditions stated on this page.'),
      React.createElement('h3', { className: sectionHeader }, '2. License'),
      React.createElement('p', { className: paragraph }, "Unless otherwise stated, Doodax.com and/or its licensors own the intellectual property rights for all material on Doodax.com. All intellectual property rights are reserved. You may access this from Doodax.com for your own personal use subjected to restrictions set in these terms and conditions."),
      React.createElement('h3', { className: sectionHeader }, '3. Hyperlinking to our Content'),
      React.createElement('p', { className: paragraph }, 'Organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.'),
      React.createElement('h3', { className: sectionHeader }, '4. Disclaimer'),
      React.createElement('p', { className: paragraph }, "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Doodax.com will not be liable for any errors in time data provided by third-party APIs.")
    ),
  },
  dmca: {
    title: 'DMCA Policy',
    content: React.createElement(React.Fragment, null,
      React.createElement('p', { className: paragraph }, 'Doodax.com respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights of any person or entity.'),
      React.createElement('p', { className: paragraph }, 'If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to ', React.createElement('a', { href: 'mailto:hsini.web@gmail.com', className: linkStyle }, 'hsini.web@gmail.com'), ', with the subject line: "Copyright Infringement" and include in your claim a detailed description of the alleged infringement.'),
      React.createElement('p', { className: paragraph }, 'You may be held accountable for damages (including costs and attorneys fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through the Service.')
    ),
  },
};