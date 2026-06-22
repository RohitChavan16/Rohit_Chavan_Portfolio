# Rohit Chavan Portfolio

A modern, interactive personal portfolio website built to showcase professional experience, projects, and technical skills. It features hardware-accelerated 3D graphics, fluid animations, and a custom backend for processing contact inquiries.

## Live Demo

<p align="center">
  <a href="https://rohit-chavan-eta.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit-blue?style=for-the-badge&logo=vercel" alt="Live Demo"/>
  </a>
  <a href="https://github.com/RohitChavan16/Rohit_Chavan_Portfolio" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub Repo"/>
  </a>
</p>


## About the Project

This portfolio was built to serve as a comprehensive, interactive resume that goes beyond static text. It solves the problem of presenting technical projects and skills in an engaging format while providing a direct, reliable channel for person to get in touch. The main user-facing functionality includes navigating through an animated experience timeline, viewing detailed project cards, interacting with 3D elements, and utilizing an embedded portfolio assistant for quick answers.

## Features

- **Interactive UI**: Fluid layout transitions and scroll-based reveals.
- **Project Showcase & Experience**: Detailed sections highlighting past work and professional history.
- **Contact Form**: Functional backend integration to securely store user inquiries.
- **Portfolio Assistant**: A custom rule-based interactive chatbot that answers common questions about my resume and skills.
- **Animations**: Complex declarative animations for UI elements and page transitions.
- **Responsive Design**: Optimized layouts across mobile, tablet, and desktop viewports.
- **3D Elements**: Interactive WebGL components integrated seamlessly into the DOM.

## Tech Stack

### Frontend
- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion

### Backend
- Next.js API Routes (Serverless)

### Database
- MongoDB (Native Node.js Driver)

### Deployment
- Vercel (Recommended)

### Libraries & Tools
- React Three Fiber & Drei (3D rendering)
- Zod (Schema validation)
- Lucide React & React Icons
- TypeScript

## Architecture Overview

The application follows a standard full-stack Next.js architecture:
- **Presentation**: The frontend is statically generated and hydrated on the client where necessary, leveraging React Server Components for performance. Client-side interactivity is handled via Framer Motion and React Three Fiber.
- **API Layer**: The `app/api/contact` route serves as the ingestion point for the contact form, enforcing structural typing before data persistence.
- **Data Persistence**: A singleton connection pool connects the serverless API to a MongoDB Atlas cluster to store incoming messages.

## Engineering Decisions

- **Why Next.js**: Chosen for its robust App Router, which simplifies routing and allows API routes to live alongside the frontend code, reducing repository complexity.
- **Why MongoDB**: Provides a flexible, document-based schema that perfectly fits storing varied contact form submissions without requiring strict migrations.
- **Why Zod**: Implemented at the API boundary to strictly validate incoming contact payloads, guaranteeing that malformed or malicious data never reaches the database.
- **Why React Three Fiber**: Allows for the integration of Three.js within a declarative React paradigm, making it easier to manage 3D object state alongside standard DOM elements.
- **TypeScript**: Adopted globally to catch errors at compile-time and enforce strict data contracts between the frontend forms and the backend API.

## Project Structure

- `app/` - Contains the Next.js App Router structure, including pages, layouts, and backend `api/` routes.
- `components/` - Reusable UI components, 3D elements, and the interactive chatbot.
- `lib/` - Core utilities, including MongoDB connection logic and Zod validation schemas.
- `public/` - Static assets like images, fonts, and the site manifest.
- `docs/` - System architecture and engineering documentation.

## Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/RohitChavan16/Rohit_Chavan_Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory and add the following keys:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   MONGODB_DB_NAME=portfolio
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## About the Developer

**Rohit Chavan** 

**Links:**
- [Portfolio](https://rohitchavan.com)
- [GitHub](https://github.com/RohitChavan16)
- [LinkedIn](https://linkedin.com/in/rohit-chavan16)