This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Making of something imp.
Rohit Chavan

---

## 🌟 Features

- **Modern UI/UX**: Built with Next.js App Router and Framer Motion for buttery-smooth animations.
- **Dynamic Skill Showcase**: Interactive skill cards with glowing effects and hover states.
- **Contact Form**: Functional contact form powered by MongoDB to store inquiries.
- **Responsive Design**: Fully responsive layout that looks great on mobile, tablet, and desktop.
- **AI Portfolio Chatbot**: Integrated conversational AI to answer questions about the portfolio.

## 💻 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Database**: MongoDB (Mongoose/Native Driver)
- **Icons**: Lucide React & Devicons
- **Validation**: Zod
- **Language**: TypeScript

## 🔑 Environment Variables

To run this project locally, create a `.env.local` file in the root directory and add the following variables (refer to `.env.example`):

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=portfolio
```

## 🚀 Deployment

This project is fully optimized for production deployment on platforms like Vercel, Netlify, or Render.

1. **Vercel (Recommended)**: 
   - Push your code to GitHub.
   - Import the project into Vercel.
   - Add the Environment Variables (`MONGODB_URI`, `MONGODB_DB_NAME`).
   - Click **Deploy**.

2. **Manual Build**:
   ```bash
   npm run build
   npm run start
   ```

## 🛡️ Production Readiness

- Passed strict TypeScript compilation checks.
- ESLint configured and passing.
- Optimized images and fonts (using `next/font`).
- Secure API routes with Zod validation and Try/Catch error handling.