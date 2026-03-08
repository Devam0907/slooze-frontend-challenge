# Slooze Frontend Challenge

This project is a Front-End implementation for the Slooze Take Home Challenge.  
It demonstrates role-based access control, responsive UI, and a product management interface.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS

## Features

### Authentication
- Login system with role-based access
- Users can log in as **Manager** or **Store Keeper**

### Role-Based Access Control
- **Manager**
  - Dashboard access
  - View products
- **Store Keeper**
  - View products only

### Dashboard
- Responsive statistics cards
- Displays product insights
- Accessible only to Manager

### Product Management
- Product listing table
- Displays product name and price

### UI Enhancements
- Light / Dark Mode Toggle
- Responsive layout for mobile, tablet, and desktop

## Project Structure

src/
app/
login/
dashboard/
products/

components/
Sidebar.tsx
Navbar.tsx
ProductTable.tsx

context/
ThemeContext.tsx

utils/
roleGuard.ts

## Installation & Run Locally

Clone the repository

git clone https://github.com/Devam0907/slooze-frontend-challenge.git

Navigate to the project folder

cd slooze-frontend

Install dependencies

npm install

Run the development server

npm run dev

Open in browser

http://localhost:3000/login

## Demo Login

Manager Access  
Click **Login as Manager**

Store Keeper Access  
Click **Login as Store Keeper**

## Future Improvements

- GraphQL API integration
- Add / Edit product functionality
- Authentication with backend
- Toast notifications

## Author

Devam Prajapati

GitHub  
https://github.com/Devam0907
