# 🚗 A Comprehensive Car Marketplace Platform  

A modern, responsive, and feature-rich **Car Marketplace Platform** built with **React**, **Clerk Authentication**, and **Tailwind CSS**, enabling users to browse, search, and list cars seamlessly.  

🌐 **Live Demo:** [car-marketplace-two.vercel.app](https://car-marketplace-two.vercel.app)  
📂 **GitHub Repository:** [Car-Marketplace](https://github.com/rayan239/Car-Marketplace)  

---

## 📖 Table of Contents
- [Introduction](#-introduction)  
- [Objectives](#-objectives)  
- [Literature Review](#-literature-review)  
- [Project Outcomes](#-project-outcomes)  
- [Tech Stack](#-tech-stack)  
- [Environmental Setup](#-environmental-setup)  
- [Project Features](#-project-features)  
- [Project Implementation](#-project-implementation)  
- [Future Work](#-future-work)  
- [Conclusion](#-conclusion)  
- [References](#-references)  

---

## 📌 Introduction  
This project is a **Car Marketplace Website** where users can:  
- Explore cars  
- Search by categories  
- View detailed listings  
- List cars for sale  
- Contact the marketplace team  

It combines a **clean UI** with **smooth navigation** and all essential marketplace features, aiming to deliver a **user-friendly online car shopping and listing experience**.  

---

## 🎯 Objectives  
- Develop a **responsive and visually appealing** car marketplace website  
- Provide **search and filter system** for efficient car discovery  
- Enable users to **list cars with details and categories**  
- Implement **secure authentication** and user profiles using Clerk  
- Add **contact form** for customer inquiries  
- Provide **financial calculation tools** for buyers  
- Ensure **responsive design** across all devices  

---

## 📚 Literature Review  
Inspired by platforms like **CarGurus, Cars.com, AutoTrader**:  
- **✅ Features considered:** listing structure, search functionality, authentication, responsive design, price comparison.  
- **⚠️ Limitations in existing platforms:**  
  - Cluttered with ads  
  - Complicated search options  
  - Lack of modern UI/animations  
  - No modern auth like Clerk  
  - Limited messaging & financial tools  

---

## 🏆 Project Outcomes  
- **Modern React-based Interface** – Responsive, aesthetic UI with Tailwind CSS  
- **Advanced Search System** – Multi-criteria search & category filters  
- **Real-time Messaging** – Chat via SendBird API  
- **Financial Calculator** – Built-in loan calculator  
- **Secure Authentication** – Clerk-based login/signup with social logins  
- **Image Upload System** – Firebase-powered storage  
- **Database Management** – PostgreSQL with Drizzle ORM  

---

## ⚙️ Tech Stack  

### 🎨 Frontend  
- **React 18** + React Router  
- **Tailwind CSS** (custom design system)  
- **Vite** (build tool)  
- React Hook Form  
- Sonner (toast notifications)  

### 🛠 Backend & Database  
- **PostgreSQL**  
- **Drizzle ORM**  
- **Clerk** (Authentication)  

### 📡 APIs & Services  
- SendBird (Real-time messaging)  
- Firebase (Image storage)  

### 🔧 Development Tools  
- VS Code  
- Git / GitHub  
- React Icons  

---

## 🖥 Environmental Setup  

### ✅ Prerequisites  
- Node.js (v16 or higher)  
- PostgreSQL Database  
- npm or yarn package manager  

### ⚡ Installation  
```bash
# Clone the repository
git clone <repository-url>
cd car-marketplace

# Install dependencies
npm install
🔑 Environment Variables

Create a .env file in the project root:

VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
VITE_DRIZZLE_DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
VITE_FIREBASE_API_KEY=xxxxxxxx
VITE_SENBIRD_APP_ID=xxxxxxxx
VITE_SENDBIRD_API_TOKEN=xxxxxxxx

▶️ Run the App
npm run dev

🚀 Project Features

Header & Navigation – Simple, intuitive navigation bar

Hero Section – Highlighted landing section

Category Section – Browse cars by type & fuel

Most Searched Cars – Popular vehicle highlights

Listing Details Page – Full car details

Add Listing Page – Users can post their own cars

Search & Filter – Multi-criteria search

Contact Page – Direct messaging form

Profile Page – User’s listings & history

Financial Calculator – Loan estimation tool

Responsive Design – Mobile & desktop friendly

🔨 Project Implementation

Clerk Authentication – Handles login, signup & profile states

Search Component – Query parameterized search

My Listings – Fetch & manage user listings (Edit/Delete)

Add Listing – Multi-step form + Firebase image uploads

Financial Calculator – Amortization formula for loan calculation

🔮 Future Work

Payment gateway for premium listings

Advanced filtering (price, mileage, location)

Real-time buyer–seller chat

Progressive Web App (PWA) deployment

Email & push notifications

Vehicle history reports

Multi-language support

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

🌐 RUET CSE Faculty Profile

