# eSports Tournament Platform - Project Structure

## 📁 Root Directory Structure

```
esports-tournament-platform/
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── common/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Notification.jsx
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── RegisterForm.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   ├── tournaments/
│   │   │   │   ├── TournamentCard.jsx
│   │   │   │   ├── TournamentForm.jsx
│   │   │   │   ├── TournamentBracket.jsx
│   │   │   │   └── TournamentLeaderboard.jsx
│   │   │   ├── teams/
│   │   │   │   ├── TeamCard.jsx
│   │   │   │   ├── TeamForm.jsx
│   │   │   │   └── TeamInvite.jsx
│   │   │   └── admin/
│   │   │       ├── AdminSidebar.jsx
│   │   │       ├── UserManagement.jsx
│   │   │       └── TournamentManagement.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Tournaments.jsx
│   │   │   ├── TournamentDetails.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Teams.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   └── admin/
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── ManageUsers.jsx
│   │   │       └── ManageTournaments.jsx
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useSocket.js
│   │   │   ├── useTournament.js
│   │   │   └── useNotification.js
│   │   ├── context/                 # React Context providers
│   │   │   ├── AuthContext.js
│   │   │   ├── SocketContext.js
│   │   │   └── NotificationContext.js
│   │   ├── services/                # API service functions
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── tournamentService.js
│   │   │   ├── teamService.js
│   │   │   └── paymentService.js
│   │   ├── utils/                   # Utility functions
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   ├── validation.js
│   │   │   └── formatters.js
│   │   ├── styles/                  # Global styles
│   │   │   ├── globals.css
│   │   │   └── components.css
│   │   ├── assets/                  # Static assets
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── logos/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                          # Node.js Backend
│   ├── src/
│   │   ├── controllers/             # Route controllers
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── tournamentController.js
│   │   │   ├── teamController.js
│   │   │   ├── matchController.js
│   │   │   ├── paymentController.js
│   │   │   └── adminController.js
│   │   ├── models/                  # Database models
│   │   │   ├── User.js
│   │   │   ├── Tournament.js
│   │   │   ├── Team.js
│   │   │   ├── Match.js
│   │   │   ├── Payment.js
│   │   │   └── Notification.js
│   │   ├── routes/                  # API routes
│   │   │   ├── auth.js
│   │   │   ├── users.js
│   │   │   ├── tournaments.js
│   │   │   ├── teams.js
│   │   │   ├── matches.js
│   │   │   ├── payments.js
│   │   │   └── admin.js
│   │   ├── middleware/              # Custom middleware
│   │   │   ├── auth.js
│   │   │   ├── validation.js
│   │   │   ├── errorHandler.js
│   │   │   ├── rateLimiter.js
│   │   │   └── roleCheck.js
│   │   ├── services/                # Business logic services
│   │   │   ├── authService.js
│   │   │   ├── tournamentService.js
│   │   │   ├── matchService.js
│   │   │   ├── paymentService.js
│   │   │   ├── emailService.js
│   │   │   └── notificationService.js
│   │   ├── utils/                   # Utility functions
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   ├── validation.js
│   │   │   ├── jwt.js
│   │   │   └── database.js
│   │   ├── config/                  # Configuration files
│   │   │   ├── database.js
│   │   │   ├── jwt.js
│   │   │   ├── email.js
│   │   │   ├── payment.js
│   │   │   └── socket.js
│   │   ├── sockets/                 # Socket.IO handlers
│   │   │   ├── index.js
│   │   │   ├── tournamentSocket.js
│   │   │   ├── matchSocket.js
│   │   │   └── notificationSocket.js
│   │   └── app.js
│   ├── package.json
│   └── server.js
│
├── shared/                          # Shared utilities (optional)
│   ├── constants.js
│   ├── types.js
│   └── validation.js
│
├── docs/                           # Documentation
│   ├── API.md
│   ├── SETUP.md
│   └── DEPLOYMENT.md
│
├── .gitignore
├── README.md
├── docker-compose.yml
└── package.json (root)
```

## 🔧 Technology Stack

### Frontend
- **React 18** with Vite for fast development
- **Tailwind CSS** for modern, responsive styling
- **React Router v6** for navigation
- **Axios** for API calls
- **Socket.IO Client** for real-time updates
- **React Hook Form** for form handling
- **React Query/SWR** for data fetching and caching

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM (or PostgreSQL with Sequelize)
- **Socket.IO** for real-time communication
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Multer** for file uploads
- **Nodemailer** for email notifications
- **Stripe/Razorpay** for payment processing

### DevOps & Tools
- **Docker** for containerization
- **Redis** for session storage and caching
- **PM2** for process management
- **NGINX** for reverse proxy
- **ESLint & Prettier** for code formatting

## 🎮 Supported Games Configuration

```javascript
// Game configurations with specific rules
const SUPPORTED_GAMES = {
  FREE_FIRE: {
    name: 'Free Fire',
    maxTeamSize: 4,
    tournamentTypes: ['Battle Royale', 'Clash Squad'],
    platforms: ['Mobile']
  },
  BGMI: {
    name: 'BGMI (Battlegrounds Mobile India)',
    maxTeamSize: 4,
    tournamentTypes: ['Classic', 'Arena'],
    platforms: ['Mobile']
  },
  COD_MOBILE: {
    name: 'Call of Duty: Mobile',
    maxTeamSize: 5,
    tournamentTypes: ['Multiplayer