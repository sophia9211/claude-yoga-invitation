# PLAN.md - Yoga Website Project Roadmap

## Project Vision

A modern, user-friendly yoga studio website that enables seamless class booking, instructor discovery, and member management.

---

## Phase 1: Foundation & Core Setup

**Goal**: Establish project infrastructure and basic pages

### 1.1 Project Initialization
- [x] Initialize Next.js 14 project with TypeScript
- [x] Configure Tailwind CSS
- [x] Set up ESLint and Prettier
- [x] Configure Prisma with PostgreSQL
- [x] Create base folder structure
- [x] Set up environment variables

### 1.2 Database Schema Design
- [x] Design and create Prisma schema:
  - `User` - Members and admins
  - `Instructor` - Yoga instructors
  - `ClassType` - Types of yoga (Hatha, Vinyasa, etc.)
  - `ClassSchedule` - Weekly class schedule
  - `Booking` - Class reservations
  - `Membership` - Membership plans

### 1.3 Layout & Navigation
- [x] Create responsive Header component
- [x] Create Footer component
- [x] Implement mobile navigation menu
- [x] Design consistent page layout wrapper

---

## Phase 2: Core Features (MVP)

### 2.1 Class Schedule & Booking System ⭐
**Priority: HIGH**

#### Class Schedule Display
- [ ] Create weekly timetable view component
- [ ] Implement day/week view toggle
- [ ] Show class details (time, instructor, type, spots)
- [ ] Display available spots count
- [ ] Add filter by class type
- [ ] Add filter by instructor

#### Booking System
- [ ] Implement class booking API
- [ ] Create booking confirmation flow
- [ ] Add cancellation functionality
- [ ] Set cancellation policy (e.g., 24hrs before)
- [ ] Send booking confirmation email
- [ ] Handle waitlist for full classes

### 2.2 Class Introduction ⭐
**Priority: HIGH**

- [ ] Create class types listing page
- [ ] Design individual class type detail page
- [ ] Include for each class type:
  - [ ] Description and benefits
  - [ ] Difficulty level indicator (Beginner/Intermediate/Advanced)
  - [ ] Duration (e.g., 60 min, 75 min, 90 min)
  - [ ] Suitable participants info
  - [ ] What to bring/prepare
  - [ ] Sample class images

#### Class Types to Include:
| Type | Difficulty | Description |
|------|------------|-------------|
| Hatha | Beginner | Gentle, foundational poses |
| Vinyasa | Intermediate | Flow-based, dynamic movement |
| Ashtanga | Advanced | Rigorous, set sequence |
| Yin | All Levels | Deep stretching, long holds |
| Restorative | Beginner | Relaxation-focused |
| Power Yoga | Intermediate | Strength-building |
| Prenatal | Specialized | For expecting mothers |

### 2.3 Instructor Profiles ⭐
**Priority: HIGH**

- [ ] Create instructors listing page
- [ ] Design individual instructor profile page
- [ ] Include for each instructor:
  - [ ] Professional photo
  - [ ] Biography
  - [ ] Certifications (RYT-200, RYT-500, etc.)
  - [ ] Years of experience
  - [ ] Specialties
  - [ ] Teaching philosophy
  - [ ] Schedule/classes taught

### 2.4 Pricing Information ⭐
**Priority: HIGH**

- [ ] Create pricing page
- [ ] Display pricing options:
  | Type | Description |
  |------|-------------|
  | Drop-in | Single class |
  | Class Pack | 5/10/20 class bundles |
  | Monthly Unlimited | Unlimited monthly access |
  | Annual Membership | Best value, yearly plan |
- [ ] Highlight popular/recommended options
- [ ] Add comparison table
- [ ] Integrate Stripe payment system
- [ ] Implement secure checkout flow

### 2.5 Location & Contact ⭐
**Priority: HIGH**

- [ ] Create contact page
- [ ] Embed Google Maps
- [ ] Display studio address
- [ ] Add parking information
- [ ] Show public transit options
- [ ] List contact methods:
  - [ ] Phone number
  - [ ] Email address
  - [ ] Contact form
- [ ] Display business hours
- [ ] Add studio photos gallery

---

## Phase 3: Authentication & Member Features

### 3.1 Authentication System
- [ ] Set up NextAuth.js
- [ ] Implement email/password login
- [ ] Add social login (Google, optional)
- [ ] Create registration flow
- [ ] Implement password reset
- [ ] Add email verification

### 3.2 Member Dashboard (My Page)
- [ ] Create member dashboard layout
- [ ] Show upcoming bookings
- [ ] Display booking history
- [ ] Show attendance statistics
- [ ] Display remaining sessions (for packages)
- [ ] Show membership status and expiry
- [ ] Add profile edit functionality

---

## Phase 4: Nice-to-Have Features

### 4.1 Reviews & Testimonials
- [ ] Create testimonials section on homepage
- [ ] Allow members to leave reviews
- [ ] Display rating averages
- [ ] Add review moderation for admin

### 4.2 Blog / Yoga Tips
- [ ] Create blog listing page
- [ ] Design blog post template
- [ ] Add categories (Tips, Lifestyle, Poses, etc.)
- [ ] Implement admin blog editor
- [ ] Add social sharing buttons

### 4.3 Online Class Videos
- [ ] Create video library section
- [ ] Implement video player
- [ ] Separate free vs. premium content
- [ ] Track viewing history
- [ ] Add progress tracking

### 4.4 Events & Workshops
- [ ] Create events listing page
- [ ] Design event detail page
- [ ] Implement event registration
- [ ] Add event calendar view
- [ ] Send event reminders

### 4.5 Mobile Optimization
- [ ] Ensure full mobile responsiveness
- [ ] Optimize touch interactions
- [ ] Test on various devices
- [ ] Improve mobile booking experience
- [ ] Add PWA capabilities (optional)

---

## Phase 5: Admin Dashboard

### 5.1 Admin Features
- [ ] Create admin authentication
- [ ] Build dashboard overview
- [ ] Manage class schedules
- [ ] Manage instructors
- [ ] View/manage bookings
- [ ] Member management
- [ ] View payment reports
- [ ] Content management (blog, events)

---

## Technical Requirements

### Performance
- [ ] Implement image optimization
- [ ] Add lazy loading
- [ ] Optimize Core Web Vitals
- [ ] Implement caching strategies
- [ ] Add loading skeletons

### SEO
- [ ] Add meta tags to all pages
- [ ] Implement structured data (JSON-LD)
- [ ] Create sitemap.xml
- [ ] Set up robots.txt
- [ ] Add Open Graph tags

### Accessibility
- [ ] Ensure WCAG 2.1 AA compliance
- [ ] Add proper ARIA labels
- [ ] Ensure keyboard navigation
- [ ] Test with screen readers
- [ ] Maintain sufficient color contrast

### Security
- [ ] Implement CSRF protection
- [ ] Add rate limiting
- [ ] Secure API endpoints
- [ ] Validate all inputs
- [ ] Implement proper auth checks

---

## Database Schema Overview

```prisma
// prisma/schema.prisma

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  password      String?
  name          String?
  phone         String?
  role          Role      @default(MEMBER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  bookings      Booking[]
  membership    Membership?
}

model Instructor {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  bio           String?
  photo         String?
  certifications String[]
  specialties   String[]
  yearsExp      Int?
  classes       ClassSchedule[]
}

model ClassType {
  id            String    @id @default(cuid())
  name          String    @unique
  description   String
  difficulty    Difficulty
  duration      Int       // in minutes
  suitableFor   String?
  imageUrl      String?
  schedules     ClassSchedule[]
}

model ClassSchedule {
  id            String    @id @default(cuid())
  classType     ClassType @relation(fields: [classTypeId], references: [id])
  classTypeId   String
  instructor    Instructor @relation(fields: [instructorId], references: [id])
  instructorId  String
  dayOfWeek     DayOfWeek
  startTime     String    // "09:00"
  endTime       String    // "10:00"
  maxCapacity   Int
  bookings      Booking[]
}

model Booking {
  id            String    @id @default(cuid())
  user          User      @relation(fields: [userId], references: [id])
  userId        String
  classSchedule ClassSchedule @relation(fields: [classId], references: [id])
  classId       String
  date          DateTime
  status        BookingStatus @default(CONFIRMED)
  createdAt     DateTime  @default(now())
}

model Membership {
  id            String    @id @default(cuid())
  user          User      @relation(fields: [userId], references: [id])
  userId        String    @unique
  type          MembershipType
  startDate     DateTime
  endDate       DateTime?
  sessionsLeft  Int?      // for class packs
  status        MembershipStatus @default(ACTIVE)
}

enum Role {
  MEMBER
  INSTRUCTOR
  ADMIN
}

enum Difficulty {
  BEGINNER
  INTERMEDIATE
  ADVANCED
  ALL_LEVELS
}

enum DayOfWeek {
  MONDAY
  TUESDAY
  WEDNESDAY
  THURSDAY
  FRIDAY
  SATURDAY
  SUNDAY
}

enum BookingStatus {
  CONFIRMED
  CANCELLED
  ATTENDED
  NO_SHOW
}

enum MembershipType {
  DROP_IN
  PACK_5
  PACK_10
  PACK_20
  MONTHLY
  ANNUAL
}

enum MembershipStatus {
  ACTIVE
  EXPIRED
  CANCELLED
}
```

---

## Milestones & Timeline

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Foundation & Core Setup | ✅ Completed |
| Phase 2 | Core Features (MVP) | 🔲 Not Started |
| Phase 3 | Authentication & Member Features | 🔲 Not Started |
| Phase 4 | Nice-to-Have Features | 🔲 Not Started |
| Phase 5 | Admin Dashboard | 🔲 Not Started |

### Legend
- 🔲 Not Started
- 🟡 In Progress
- ✅ Completed

---

## Design Guidelines

### Color Palette (Suggested)
```css
:root {
  --primary: #5B7C6C;      /* Sage green - calm, natural */
  --secondary: #8B5A2B;    /* Warm brown - earthy */
  --accent: #D4A574;       /* Soft gold - warmth */
  --background: #FAF8F5;   /* Off-white - clean */
  --text: #2D3436;         /* Dark gray - readability */
  --light: #E8E4DF;        /* Light gray - subtle */
}
```

### Typography
- **Headings**: Serif font (e.g., Playfair Display) for elegance
- **Body**: Sans-serif font (e.g., Inter, Lato) for readability
- **Sizes**: Responsive scaling with clamp()

### UI Principles
- Clean, minimalist design
- Plenty of white space
- High-quality imagery
- Smooth transitions and animations
- Clear call-to-action buttons
- Intuitive navigation

---

## Notes

- Focus on mobile-first development
- Prioritize booking flow UX
- Consider adding Korean language support if needed
- Plan for scalability (multiple studio locations)

---

*Last updated: 2026-01-29*
