# 📚 Simply Books

**Simply Books** is a clean and user-friendly React app built with Firebase and Google Authentication. It helps users manage their personal library of authors and books, toggle book visibility (public/private), and view favorite authors and titles—all from a beautifully responsive interface.

## 🚀 Features

-  **Google Sign-In** via Firebase Authentication
-  **User Profile Page**
  - View your google profile picture and name
  - View favorite authors and (soon to come) books
-  **Author Management**
  - Add, edit, and delete authors
  - Favorite authors for quick access
  - View all books by a specific author
-  **Book Management**
  - Add, edit, and delete books
  - Mark books as **public** (visible to all users) or **private** (visible only to the user)
-  **Explore & Personal Collection**
  - Homepage shows public books from all users
  - “Your Books” page shows only private books created by the logged-in user
-  **Favorites**
  - Easily favorite authors and (soon) books
-  **Responsive Design** using Bootstrap & React-Bootstrap

## 🌐 Public vs Private Books

- **Public Books**: Visible to all users on the homepage
- **Private Books**: User-specific; only visible in "Your Books"

## 🛠️ Tech Stack

- **Frontend**: React (Next.js)
- **Styling**: Bootstrap & React-Bootstrap
- **Authentication**: Firebase (Google Auth)
- **Database**: Firebase Realtime Database

## 🧰 Getting Started

### 1. Clone the Repository

- git clone https://github.com/christophuff/simply-books.git
- cd simply-books

### 2.  Install Dependencies

- npm install

### 3. Add Firebase Configuration

- **Create a .env file** in the root and add:
  - NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
  - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
  - NEXT_PUBLIC_FIREBASE_DATABASE_URL=your-db-url
  - NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
  - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
  - NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

### 4. Run the App Locally

- npm run dev


#### Link to Loom Videos

https://www.loom.com/share/20a783838e1c415eb90e4bcf79c0a2cf?sid=35d20729-9a79-4f55-ae10-cfef1d930aa4

https://www.loom.com/share/df8cce41b86d47168f1609416ae0f7b5?sid=13cc21d8-4e4f-4210-b528-2554a0deae08
