# Franchise Website – React Assignment

A modern, responsive franchise business website built using **React** and **Tailwind CSS**.  
This project demonstrates clean UI/UX design, component-based architecture, and custom JavaScript logic without relying on external UI or slider libraries.

---

## 🚀 Live Demo

(Deployed using Vercel)

---

## 🛠 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **React Router DOM**
- **Lucide Icons**
- **Google Apps Script** (for form data storage)
- **Google Sheets** (as database)

---

## 📌 Features Overview

### 1. Hero Sections

- Bold, modern hero sections with dark theme and amber accent colors
- Clear CTAs for better user engagement
- Responsive typography and layout

---

### 2. Comprehensive Franchise Support (Tabs Section)

- Custom-built tab system using React state
- Tabs:
  - Pre-Opening Support
  - Ongoing Support
  - Marketing Support
- Each tab displays structured cards with icons and descriptions
- Fully reusable and data-driven (content separated into a data file)

---

### 3. Testimonials Section (Custom JavaScript Slider)

- Built **without any external slider libraries**
- Features:
  - Image
  - Name
  - Location
  - Review text
  - Dynamic star rating
- Smooth **fade in / fade out** animation
- Next / Previous buttons
- Auto-play functionality
- Dot indicators for navigation

👉 This slider satisfies both:

- **Testimonials Section**
- **Custom JavaScript Slider requirement**

---

### 4. FAQs Section (Accordion)

- Custom accordion using React state
- Smooth open / close animations
- Only one FAQ opens at a time
- Clean UI with clear visual hierarchy

---

### 5. Contact Page + Form

- Separate Contact route for clean UX
- Fields included:
  - Name
  - Email
  - Phone
  - City
  - Message / Note
- Proper spacing, labels, and focus states
- Fully responsive layout

---

### 6. Google Sheets Integration (No Backend Server)

- Form data is sent directly to **Google Sheets**
- Implemented using **Google Apps Script**
- Features:
  - POST request from frontend
  - Automatic row insertion in Sheet
  - Success message after submission
  - Form reset after submit
- No backend server used (HTML + JS only)

---

### 7. Footer

- Modern, multi-column footer layout:
  - Website Logo
  - Quick Links
  - Franchise Benefits
  - Contact Information
  - Policies
- Fully responsive
- Clean spacing and color hierarchy

---

### 8. Routing & UX Enhancements

- React Router for navigation
- Custom `ScrollToTop` component:
  - Ensures every route opens from the top
- Consistent dark theme across all pages

---

## 🎨 Design System

- **Theme:** Dark UI
- **Primary Accent:** Amber (amber-400 → amber-700)
- **Text Colors:**
  - Headings: White
  - Body text: Gray-300 / Gray-400
- Subtle animations and hover interactions
- Focus on readability and modern SaaS-style design

---

## 📂 Project Structure (Simplified)

src/
│
├── components/  
│ ├── Hero
│ ├── FranchiseTabs
│ ├── TestimonialsSection
│ ├── FaqsSection
│ ├── Footer
│ └── ScrollToTop
| ├── Contact/
| ├── ContactHero
| ├── ContactForm
│
├── data/
│ └── franchiseTabsData.js
│
├── pages/
│ ├── HomePage.jsx
│ └── ContactPage.jsx
│
├── App.jsx
└── main.jsx

---

## 🧠 Key Learnings & Highlights

- Built reusable, data-driven UI components
- Implemented custom slider and accordion logic
- Managed UI state effectively using React hooks
- Integrated third-party services without a backend
- Focused on real-world UX and clean architecture

---

## 📄 Note on Google Apps Script Warning

During deployment, Google may show an **unverified app warning**.  
This is expected for demo/assignment projects and does not affect functionality.

---

## 👤 Author

**Shubham Singh**  
Frontend Developer (React)

---

## ✅ Conclusion

This project showcases both **UI/UX sensibility 70-80%** and **strong frontend logic**, following real-world development practices suitable for production-level applications.
