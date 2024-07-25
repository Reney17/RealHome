

# RealHome: A Real Estate Listing Platform

## Project Overview
RealHome is an online platform where real estate agents and homeowners can list properties for sale or rent. The website allows users to search for properties based on various criteria, view detailed information about each listing, and contact the listing agent or owner. This platform aims to simplify the real estate market by providing a seamless interface for both property listers and seekers.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)

## Features
- **User Registration and Login**: Secure registration and login functionality with role-based access control for agents and buyers/renters.
- **Property Listings**: CRUD (Create, Read, Update, Delete) operations for property listings, including photo and description uploads.
- **Search and Filter**: Advanced search functionality based on location, price range, property type, and other criteria.
- **Property Details Page**: Comprehensive details about each property, including images, descriptions, amenities, and agent contact information.
- **Interactive Map**: Integration of Google Maps API to display property locations.
- **Agent Profiles**: Detailed profiles for real estate agents with their contact information and listed properties.
- **Favorites and Wishlist**: Functionality for users to save their favorite properties and create a wishlist.
- **Mobile Responsiveness**: Fully responsive and functional on mobile devices.
- **Contact Form**: Integrated contact forms for users to directly reach out to agents or property owners.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS, React.js with Vite
- **Backend**: Node.js with Express.js
- **Database**: MongoDB, Prisma ORM
- **APIs**: Google Maps API, Email API
- **Hosting**: Vercel
- **Version Control**: Git and GitHub

## Installation
### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Clone the Repository
```bash
git clone https://github.com/your-username/realhome.git
cd realhome
```

### Install Dependencies
#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd backend
npm install
```

### Environment Variables
Create a `.env` file in the `backend` directory and add the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_API_KEY=your_email_api_key
```

### Run the Application
#### Frontend
```bash
cd frontend
npm run dev
```

#### Backend
```bash
cd backend
npm run dev
```

## Usage
1. Open your browser and navigate to `http://localhost:5173` for the frontend.
2. The backend API will be running at `http://localhost:5000`.
3. Register as a new user and log in.
4. Add, edit, or delete property listings.
5. Use the search and filter functionality to find properties.
6. View property details and contact agents or property owners.

## Folder Structure
```
realhome/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
├── README.md
└── .gitignore
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

