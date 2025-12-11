# 🌍 World Time Zone Clock - Professional Dashboard

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-doodax.com-2ea44f?style=for-the-badge&logo=google-chrome)](https://doodax.com)

A high-performance, SEO-optimized web application designed for professionals, travelers, and remote teams. This application provides real-time synchronization of global time zones with a sleek, modern, galaxy-themed interface.

## ✨ Key Features

*   **Real-Time Synchronization**: Accurate time tracking for thousands of cities using the IANA timezone database.
*   **Immersive UI**: Fully responsive design with an animated, multi-colored galaxy background using pure CSS.
*   **Smart Search**: Intelligent autocomplete search system to find any timezone instantly.
*   **SEO Optimized**: Fully integrated Schema.org JSON-LD, Open Graph tags, and semantic HTML structure for maximum search engine visibility.
*   **Interactive Dashboard**: Add, remove, and manage clocks with a user-friendly drag-and-drop feel.
*   **Legal Compliance**: dedicated modals for Privacy Policy, Terms of Service, and DMCA compliance.

## 📂 Project Structure

```bash
.
├── components/          # Reusable React components
│   ├── AddClockForm.tsx # Search and add functionality
│   ├── Clock.tsx        # Individual clock card component
│   ├── InfoModal.tsx    # Accessible modal system
│   └── SeoArticle.tsx   # Long-form content component
├── data/               
│   ├── legal.ts         # Static content for legal pages
│   └── timezones.ts     # Default timezone configuration
├── services/
│   └── timeService.ts   # API integration logic (timeapi.io)
├── public/              # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── types.ts             # TypeScript interface definitions
├── App.tsx              # Main application entry point
├── index.html           # HTML template with styles & metadata
└── README.md            # Project documentation
```

## 🛠️ Technology Stack

*   **Frontend Library**: React 19
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS (Utility-first framework)
*   **Icons**: FontAwesome 6
*   **Data Source**: timeapi.io

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/world-clock.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Powered by <strong>HSINI MOHAMED</strong></p>
  <p>
    <a href="https://github.com/hsinidev">GitHub Profile</a>
  </p>
</div>