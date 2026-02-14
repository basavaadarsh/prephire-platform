# PrepHire - Professional Recruitment & Preparation Platform

PrepHire is a modern Single Page Application (SPA) designed to help individuals prepare for their careers and connect with hiring opportunities. Build with React and Bootstrap, the platform offers a smooth, fluid user experience with instant navigation.
 
## 🏢 About PrepHire   

PrepHire is dedicated to bridging the gap between education and employment. We empower candidates by providing them with the tools, guidance, and resources necessary to excel in the competitive job market. Our mission is to facilitate a seamless transition from preparation to performance, ensuring every individual has the opportunity to get hired by top-tier companies.

## 📖 About This Project 

This project is a high-performance frontend application built on a modern stack. It features a fully integrated client-side routing system and a responsive UI built with Bootstrap. The architecture is designed to be modular and scalable, allowing for rapid development of new features while maintaining a consistent professional aesthetic.

## 🚀 Key Features

- **Single Page Application (SPA)**: Ultra-fast, no-reload navigation using React Router.
- **Premium UI/UX**: Professional, responsive design powered by **Bootstrap**.
- **Vibrant Branding**: Custom Navbar and Footer with a dedicated blue-and-white theme.
- **Optimized Performance**: Built with Vite 7 for lightning-fast development and optimized production builds.
- **Scalable Architecture**: Well-organized directory structure ready for feature expansion.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/) (SPA)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/)
- **Bundler**: [Vite 7](https://vite.dev/)
- **Icons**: Lucide-inspired SVG components.

## 📁 Project Structure

```text
prephire-platform/
├── public/                 # Static assets
└── src/
    ├── assets/             # Images and design assets
    ├── components/
    │   └── layout/         # Core layout components
    │       ├── Navbar.jsx  # Main navigation with SPA routing
    │       └── Footer.jsx  # Multi-column footer with integrated links
    ├── pages/              # Main page components
    │   ├── Home.jsx        # Landing page
    │   ├── About.jsx       # Mission and company details
    │   ├── Services.jsx    # Professional offerings
    │   ├── Careers.jsx     # Opportunities
    │   ├── Contact.jsx     # Contact information
    │   ├── Courses.jsx     # Educational content
    │   ├── JobBoard.jsx    # Recruitment portal
    │   ├── Login.jsx       # Authentication
    │   ├── Signup.jsx      # Registration
    │   ├── PrivacyPolicy.jsx 
    │   └── TermsOfService.jsx
    ├── App.jsx             # Main routing logic and layout
    ├── index.css           # Global styles and custom branding
    └── main.jsx            # Application entry point
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

The `src/pages` directory contains the core components for the platform. The SPA routing is managed in `src/App.jsx`. All styling is handled via Bootstrap classes and the custom branding utilities defined in `src/index.css`.

---
*Developed by the PrepHire Team*
