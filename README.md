🚗 Car Marketplace
A modern, responsive, and feature-rich car marketplace platform built with React, Clerk authentication, and Tailwind CSS, enabling users to browse, search, and list cars seamlessly.

https://img.shields.io/badge/React-18.2.0-blue https://img.shields.io/badge/Tailwind-CSS-38B2AC https://img.shields.io/badge/Auth-Clerk-8C5FF8 https://img.shields.io/badge/Database-PostgreSQL-336791

✨ Features
🔐 Secure Authentication - Clerk-based user management with social login options

🔍 Advanced Search System - Multi-criteria filtering with category-based browsing

📱 Responsive Design - Optimized experience across all devices

💰 Financial Calculator - Built-in tool for estimating monthly payments

🖼️ Image Upload System - Efficient handling of multiple vehicle images

💬 Real-time Messaging - Integrated chat functionality using SendBird API

📊 Personal Dashboard - Manage listings and view order history

🛠️ Tech Stack
Frontend: React 18, React Router, Tailwind CSS, Vite

Authentication: Clerk

Database: PostgreSQL with Drizzle ORM

Storage: Firebase Storage for images

Real-time Communication: SendBird API

Notifications: Sonner toast notifications

🚀 Quick Start
Prerequisites
Node.js (v16 or higher)

PostgreSQL database

npm or yarn package manager

Installation
Clone the repository:

bash
git clone https://github.com/rayan239/Car-Marketplace.git
cd Car-Marketplace
Install dependencies:

bash
npm install
Set up environment variables:
Create a .env file with the following variables:

env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_DRIZZLE_DATABASE_URL=your_database_connection_string
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_SENBIRD_APP_ID=your_sendbird_app_id
VITE_SENDBIRD_API_TOKEN=your_sendbird_api_token
Set up the database:

bash
npm run db:push
Start the development server:

bash
npm run dev
📁 Project Structure
text
src/
├── components/          # Reusable UI components
├── pages/              # Application pages
├── Shared/             # Utilities and services
├── config/             # Database configuration
└── index.css           # Global styles
🎯 Key Components
Header & Navigation
Navigation bar with logo, menu items, and authentication buttons that dynamically change based on user state.

Search Component
Interactive filtering system with dropdown selectors for vehicle type, manufacturer, and price range.

Category Browser
Grid layout displaying vehicle type categories with icons for easy navigation.

Car Listings
Responsive grid displaying vehicles with essential details and interactive elements.

Add Listing Form
Comprehensive multi-step form for submitting new vehicle listings with image upload capability.

Financial Calculator
Implements the standard amortization formula for calculating monthly loan payments:

text
M = P × (r(1+r)ⁿ) / ((1+r)ⁿ - 1)
🔑 API Integrations
Clerk: User authentication and management

SendBird: Real-time messaging between users

Firebase Storage: Image upload and storage

Drizzle ORM: Database operations with PostgreSQL

🌟 Live Demo
Check out the live application: car-marketplace-two.vercel.app

📈 Future Enhancements
Payment gateway integration for premium listings

Advanced filtering options (price range, mileage, location)

Real-time chat between buyers and sellers

Progressive Web App (PWA) support for offline functionality

Vehicle history reports integration

Multi-language support

Email and push notifications system

🤝 Contributing
We welcome contributions! Please feel free to submit a Pull Request.

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

✅ Conclusion

This project successfully implements a modern car marketplace with:

Secure authentication

Responsive UI

Intuitive navigation

Financial tools

It addresses gaps in existing platforms (ads, poor UX, lack of modern features) and establishes a scalable foundation for future enhancements.

📚 References

Clerk Documentation

React Official Docs

Tailwind CSS

👨‍🏫 Supervisor:
Md. Sozib Hossain
Lecturer, Dept. of CSE, RUET
📞 +880-1771905794
📧 sozibruet99@gmail.com
 | sozib.hossain@cse.ruet.ac.bd
