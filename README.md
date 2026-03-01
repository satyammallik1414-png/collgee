# Elite University - Modern College Website

A professional, full-stack college website built with React, Tailwind CSS, Framer Motion, Node.js, Express, and MongoDB.

## Features

### Frontend
- Modern, responsive design with glassmorphism effects
- Smooth animations with Framer Motion
- Dynamic hero section with typing animation
- Interactive course cards with 3D hover effects
- Animated statistics counters
- Event listings and testimonials
- Placement highlights
- Mobile-responsive navigation

### Backend
- RESTful API with Express.js
- MongoDB database with Mongoose ODM
- User authentication with JWT
- Application submission system
- Course management
- Event registration
- Contact form handling
- Input validation and error handling

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Express Validator

## Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)

### Setup

1. Clone the repository
```bash
git clone <repository-url>
cd college-website
```

2. Install dependencies
```bash
npm run install-all
```

3. Configure environment variables
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI and other settings
```

4. Start MongoDB (if running locally)
```bash
mongod
```

5. Run the application
```bash
# From root directory
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
college-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Faculty.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Placements.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Application.js
│   │   ├── Course.js
│   │   ├── Event.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── applications.js
│   │   ├── courses.js
│   │   ├── events.js
│   │   └── contact.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user

### Applications
- POST `/api/applications` - Submit application
- GET `/api/applications` - Get all applications
- GET `/api/applications/:id` - Get application by ID
- PATCH `/api/applications/:id/status` - Update application status

### Courses
- GET `/api/courses` - Get all courses
- GET `/api/courses/:id` - Get course by ID
- POST `/api/courses` - Create course
- PUT `/api/courses/:id` - Update course
- DELETE `/api/courses/:id` - Delete course

### Events
- GET `/api/events` - Get all events
- GET `/api/events/:id` - Get event by ID
- POST `/api/events` - Create event
- POST `/api/events/:id/register` - Register for event

### Contact
- POST `/api/contact` - Submit contact form
- GET `/api/contact` - Get all messages

## Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist folder
```

### Backend (Heroku/Railway/Render)
```bash
cd backend
# Set environment variables
# Deploy using platform CLI or Git
```

## License

MIT

## Author

Elite University Development Team
