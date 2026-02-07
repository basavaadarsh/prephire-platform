# PrepHire - Professional Recruitment & Preparation Platform

PrepHire is a modern web application designed to help individuals prepare for their careers and connect with hiring opportunities. This project provides the foundational layout and structure for the platform.

## 🏢 About PrepHire

PrepHire is dedicated to bridging the gap between education and employment. We empower candidates by providing them with the tools, guidance, and resources necessary to excel in the competitive job market. Our mission is to facilitate a seamless transition from preparation to performance, ensuring every individual has the opportunity to get hired by top-tier companies.

## 📖 About This Project

This codebase serves as the initial frontend scaffold for the PrepHire web platform. It includes a custom-designed, responsive navigation system, a comprehensive footer, and a suite of placeholder pages that outline the platform's future features. The project is designed with modularity in mind, allowing the development team to easily integrate new functionalities and content as the platform evolves.

## 🚀 Key Features

- **Premium UI/UX**: Modern and responsive design tailored for professional engagement.
- **Vibrant Branding**: Custom Navbar and Footer featuring a clean blue-and-white theme.
- **Optimized Performance**: Built with Vite and Tailwind CSS v4 for lightning-fast development and production builds.
- **Ready for Scale**: Organized project structure with placeholder pages for internal teams to begin implementation.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Bundler**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Vite Plugin Integration)
- **Icons**: Lucide-inspired SVG components.

## 📁 Project Structure

```text
my-react-app/
├── public/                 # Static assets
└── src/
    ├── assets/             # Images and design assets
    ├── components/
    │   └── layout/         # Core layout components
    │       ├── Navbar.jsx  # Main navigation bar with auth & dropdowns
    │       └── Footer.jsx  # Multi-column footer with contact & social
    ├── pages/              # Main page placeholders
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── ...             # Careers, Privacy, Terms, etc.
    │   └── services/       # Service-specific sub-pages
    │       ├── MockInterviews.jsx
    │       ├── ResumeReview.jsx
    │       └── ...
    ├── App.jsx             # Main application entry point
    ├── index.css           # Global styles and Tailwind imports
    └── main.jsx            # React DOM mounting
```

## 🏗️ Getting Started

Follow these steps to set up the project locally:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📝 Note for Developers

The `src/pages` directory contains placeholder components for each section of the website. These were created to provide a starting point for developers (interns/employees) to implement the specific logic and UI for each page while maintaining the overall project structure.

---
*Developed by the PrepHire Team*
