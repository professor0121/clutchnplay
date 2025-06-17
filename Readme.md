# eSports Tournament Platform - Full Stack Next.js

## 📁 Project Structure

```
esports-tournament-platform/
├── frontend/                          # Next.js Frontend
│   ├── public/
│   │   ├── icons/
│   │   ├── images/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── app/                       # App Router (Next.js 13+)
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx               # Home page
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   ├── not-found.tsx
│   │   │   ├── (auth)/                # Route Groups
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── register/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── tournaments/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── create/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── [tournamentId]/
│   │   │   │   │       ├── page.tsx
│   │   │   │   │       ├── edit/
│   │   │   │   │       │   └── page.tsx
│   │   │   │   │       ├── brackets/
│   │   │   │   │       │   └── page.tsx
│   │   │   │   │       └── participants/
│   │   │   │   │           └── page.tsx
│   │   │   │   ├── teams/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── create/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── [teamId]/
│   │   │   │   │       ├── page.tsx
│   │   │   │   │       └── edit/
│   │   │   │   │           └── page.tsx
│   │   │   │   ├── profile/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── tournaments/           # Public tournament pages
│   │   │   │   ├── page.tsx
│   │   │   │   └── [tournamentId]/
│   │   │   │       ├── page.tsx
│   │   │   │       ├── leaderboard/
│   │   │   │       │   └── page.tsx
│   │   │   │       └── join/
│   │   │   │           └── page.tsx
│   │   │   ├── admin/                 # Admin routes
│   │   │   │   ├── page.tsx
│   │   │   │   ├── users/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [userId]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── tournaments/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── payments/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── games/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [gameSlug]/
│   │   │   │       └── page.tsx
│   │   │   └── api/                   # API Routes
│   │   │       ├── auth/
│   │   │       │   ├── login/
│   │   │       │   │   └── route.ts
│   │   │       │   ├── register/
│   │   │       │   │   └── route.ts
│   │   │       │   └── logout/
│   │   │       │       └── route.ts
│   │   │       ├── tournaments/
│   │   │       │   ├── route.ts
│   │   │       │   └── [tournamentId]/
│   │   │       │       ├── route.ts
│   │   │       │       ├── join/
│   │   │       │       │   └── route.ts
│   │   │       │       └── brackets/
│   │   │       │           └── route.ts
│   │   │       ├── teams/
│   │   │       │   ├── route.ts
│   │   │       │   └── [teamId]/
│   │   │       │       └── route.ts
│   │   │       ├── users/
│   │   │       │   ├── route.ts
│   │   │       │   └── [userId]/
│   │   │       │       └── route.ts
│   │   │       ├── payments/
│   │   │       │   ├── create-intent/
│   │   │       │   │   └── route.ts
│   │   │       │   └── webhook/
│   │   │       │       └── route.ts
│   │   │       └── notifications/
│   │   │           └── route.ts
│   │   ├── components/
│   │   │   ├── ui/                    # Reusable UI Components
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Table.tsx
│   │   │   │   ├── Tabs.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── Toast.tsx
│   │   │   │   └── LoadingSpinner.tsx
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── Navigation.tsx
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   ├── ProtectedRoute.tsx
│   │   │   │   └── AuthProvider.tsx
│   │   │   ├── tournament/
│   │   │   │   ├── TournamentCard.tsx
│   │   │   │   ├── TournamentList.tsx
│   │   │   │   ├── CreateTournamentForm.tsx
│   │   │   │   ├── TournamentBrackets.tsx
│   │   │   │   ├── Leaderboard.tsx
│   │   │   │   └── JoinTournamentModal.tsx
│   │   │   ├── team/
│   │   │   │   ├── TeamCard.tsx
│   │   │   │   ├── TeamList.tsx
│   │   │   │   ├── CreateTeamForm.tsx
│   │   │   │   └── TeamMembers.tsx
│   │   │   ├── admin/
│   │   │   │   ├── AdminStats.tsx
│   │   │   │   ├── UserManagement.tsx
│   │   │   │   └── TournamentManagement.tsx
│   │   │   └── common/
│   │   │       ├── GameIcon.tsx
│   │   │       ├── Avatar.tsx
│   │   │       ├── NotificationBell.tsx
│   │   │       └── SearchBar.tsx
│   │   ├── lib/
│   │   │   ├── auth.ts
│   │   │   ├── db.ts
│   │   │   ├── utils.ts
│   │   │   ├── validations.ts
│   │   │   ├── socket.ts
│   │   │   ├── payment.ts
│   │   │   └── email.ts
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useTournaments.ts
│   │   │   ├── useTeams.ts
│   │   │   ├── useSocket.ts
│   │   │   ├── useNotifications.ts
│   │   │   └── useLocalStorage.ts
│   │   ├── context/
│   │   │   ├── AuthContext.tsx
│   │   │   ├── SocketContext.tsx
│   │   │   ├── NotificationContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── types/
│   │   │   ├── auth.ts
│   │   │   ├── tournament.ts
│   │   │   ├── team.ts
│   │   │   ├── user.ts
│   │   │   ├── game.ts
│   │   │   └── api.ts
│   │   └── store/                     # State Management (Zustand/Redux)
│   │       ├── authStore.ts
│   │       ├── tournamentStore.ts
│   │       ├── teamStore.ts
│   │       └── notificationStore.ts
│   ├── .env.local
│   ├── .env.example
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── package.json
│   └── middleware.ts                  # Next.js Middleware for auth
│
├── backend/                           # Node.js Backend (Optional - for Socket.IO server)
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── tournamentController.js
│   │   │   ├── teamController.js
│   │   │   └── socketController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Tournament.js
│   │   │   ├── Team.js
│   │   │   ├── Match.js
│   │   │   └── Notification.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── tournaments.js
│   │   │   ├── teams.js
│   │   │   └── admin.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── validation.js
│   │   │   └── rateLimit.js
│   │   ├── utils/
│   │   │   ├── email.js
│   │   │   ├── payment.js
│   │   │   └── helpers.js
│   │   ├── socket/
│   │   │   ├── socketServer.js
│   │   │   └── socketHandlers.js
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── environment.js
│   │   └── app.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── shared/                            # Shared types and utilities
│   ├── types/
│   └── constants/
│
├── docs/                              # Documentation
│   ├── API.md
│   ├── DEPLOYMENT.md
│   └── DATABASE_SCHEMA.md
│
├── .gitignore
├── docker-compose.yml
├── README.md
└── package.json                       # Root package.json for monorepo

```

## 🔥 Key Features Structure

### Dynamic Routing Patterns (Next.js App Router)
- **Static Routes**: `/tournaments`, `/dashboard`
- **Dynamic Routes**: `/tournaments/[tournamentId]`, `/teams/[teamId]`
- **Nested Dynamic**: `/tournaments/[tournamentId]/matches/[matchId]`
- **Optional Catch-all**: `/games/[...slug]`
- **Route Groups**: `(auth)` for login/register layouts
- **Parallel Routes**: `@modal` for modal overlays

### Authentication & Authorization
- JWT tokens with refresh mechanism
- Role-based access control (Admin, Organizer, Player)
- Protected routes using middleware
- OAuth integration (Google, Discord)

### Real-time Features
- Socket.IO integration for live updates
- Real-time tournament brackets
- Live match results
- In-app notifications

### Payment Integration
- Stripe/Razorpay for entry fees
- Secure payment webhooks
- Tournament prize distribution

## 🚀 Getting Started

### Frontend Setup (Next.js)
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup (Node.js - Optional)
```bash
cd backend
npm install
npm run dev
```

### Environment Variables
Check `.env.example` files in both frontend and backend directories.

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand/Redux Toolkit
- React Hook Form + Zod
- Socket.IO Client

**Backend:**
- Node.js + Express
- MongoDB/PostgreSQL
- Socket.IO Server
- JWT Authentication
- Stripe/Razorpay
- Nodemailer

**Deployment:**
- Vercel (Frontend)
- Railway/DigitalOcean (Backend)
- MongoDB Atlas/Supabase

## 📱 Responsive Design
- Mobile-first approach
- PWA capabilities
- Dark/Light theme support
- Game-specific color schemes