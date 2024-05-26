# Link Sharing

Welcome to LinkSharing, the ultimate platform for managing and sharing your digital presence with ease. Whether you're an influencer, a professional, or just someone who loves to keep all their social links in one place, LinkSharing is designed for you.

# Table of Contents

1. [Getting Started](#getting-started)
2. [Convex Setup](#Convex-Setup)
3. [Clerk Setup](#Clerk-Setup)
4. [Features](#features)
5. [Environment](#environment)
6. [Dependencies](#dependencies)
7. [Interface Images/GIFs](#interface-imagesgifs)

## Getting Started

1. Clone this repo: `git clone https://github.com/CShum28/link-sharing`.
2. Copy the .env file `.env.example`
3. Update the .env file with your Convex and Clerk credentials. Open .env in your favorite text editor and replace the placeholder values as needed.
4. Ensure that you are using node version 12 or later: `node -v`.
5. Install the dependencies: `npm i`.
6. Run the Next.js development server (default should be port 3000): `npm run dev`
7. In a separate terminal, navigate to the project directory and start the Convex development server: `npx convex dev`
8. The app should launch automatically in your default browser.

## Convex Setup

You will require Convex to use this application; please ensure that it is set up [here](https://www.convex.dev/start).

## Clerk Setup

You will require Clerk to use this application; please ensure that it is set up [here](https://clerk.com/docs/quickstarts/nextjs).

## Features

1. Centralized Profile: Create a single profile to showcase all your social media accounts, websites, and contact information.
2. Customizable Links: Personalize your links with custom names and colors to match your brand.
3. Easy Sharing: Share your profile with a simple link. Perfect for networking, marketing, and personal use.
4. Secure and Private: Your data is secure with us. Manage your links with confidence knowing your privacy is our priority.
5. Real-time Updates: Update your profile and links on-the-go, and see the changes reflect instantly.

Get started today and simplify your online presence with LinkSharing!

## Environment

- Node V12.22.xx or higher

## Dependencies

- Clerk/nextjs v4.29.9
- Clsx v2.1.1
- Convex v1.10.0
- Lucide-react v0.378.0
- React v18.0.0
- Tailwindcss v3.3.0
- Typescript v5.0.0

## Images

### Blank Preview

!['Blank Links'](https://github.com/CShum28/link-sharing/blob/main/my-app/public/Preview/mobile-blank-links.png)

!['Blank Profile'](https://github.com/CShum28/link-sharing/blob/main/my-app/public/Preview/mobile-blank-profile.png)

!['Blank Preview'](https://github.com/CShum28/link-sharing/blob/main/my-app/public/Preview/mobile-blank-preview.png)

!['Blank Profile'](https://github.com/CShum28/link-sharing/blob/main/my-app/public/Preview/tablet-desktop-blank-profile.png)

### Filled Preview

!['Filled Links'](https://github.com/CShum28/link-sharing/blob/main/my-app/public/Preview/tablet-desktop-filled-links.png)

!['Filled Tablet / Desktop Profile'](https://github.com/CShum28/link-sharing/blob/main/my-app/public/Preview/tablet-desktop-filled-profile.png)

!['Filled Preview'](https://github.com/CShum28/link-sharing/blob/main/my-app/public/Preview/tablet-desktop-filled-preview.png)
