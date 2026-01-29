# CLAUDE.md - AI Assistant Guide for Yoga Website

This document provides guidance for AI assistants working on this repository.

## Project Overview

**Repository**: claude-yoga-invitation
**Status**: In Development
**Purpose**: Full-featured yoga studio website with class booking system

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL with Prisma ORM |
| Authentication | NextAuth.js |
| Payment | Stripe |
| Deployment | Vercel |

## Repository Structure

```
claude-yoga-invitation/
├── CLAUDE.md               # AI assistant guidelines (this file)
├── PLAN.md                 # Project roadmap and feature planning
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── (public)/       # Public pages (home, classes, instructors)
│   │   ├── (auth)/         # Authentication pages (login, register)
│   │   ├── (member)/       # Member-only pages (my-page, bookings)
│   │   ├── admin/          # Admin dashboard
│   │   └── api/            # API routes
│   ├── components/         # Reusable React components
│   │   ├── ui/             # Base UI components
│   │   ├── layout/         # Layout components (header, footer)
│   │   ├── booking/        # Booking-related components
│   │   └── class/          # Class-related components
│   ├── lib/                # Utility functions and configurations
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   └── styles/             # Global styles
├── prisma/
│   └── schema.prisma       # Database schema
├── public/                 # Static assets (images, icons)
└── tests/                  # Test files
```

## Development Guidelines

### Git Workflow

1. **Branch Naming**: Use descriptive branch names prefixed appropriately:
   - `feature/` - New features
   - `fix/` - Bug fixes
   - `docs/` - Documentation updates
   - `claude/` - AI assistant working branches

2. **Commit Messages**: Write clear, concise commit messages:
   - Use imperative mood ("Add feature" not "Added feature")
   - Keep the first line under 72 characters
   - Reference issues when applicable

3. **Push Protocol**:
   - Always use `git push -u origin <branch-name>`
   - Retry failed pushes with exponential backoff (2s, 4s, 8s, 16s)

### Code Standards

1. **File Organization**:
   - Keep related files grouped in logical directories
   - Use clear, descriptive file names
   - Separate concerns (components, utilities, services)

2. **TypeScript**:
   - Use strict type checking
   - Define interfaces for all data structures
   - Avoid `any` type - use proper typing

3. **React/Next.js**:
   - Use functional components with hooks
   - Prefer Server Components where possible
   - Use Client Components only when needed (interactivity, hooks)

4. **Styling**:
   - Use Tailwind CSS utility classes
   - Create reusable component variants
   - Follow mobile-first responsive design

5. **Security**:
   - Never commit secrets, API keys, or credentials
   - Use environment variables for sensitive configuration
   - Validate all user inputs (server-side)
   - Implement proper authentication checks
   - Be mindful of OWASP Top 10 vulnerabilities

### Database

- Define schema changes in `prisma/schema.prisma`
- Run `npx prisma migrate dev` to create migrations
- Run `npx prisma generate` after schema changes
- Use Prisma Client for all database operations

### Testing

- Write tests for new functionality
- Ensure existing tests pass before committing
- Test edge cases and error conditions

## Common Commands

```bash
# Development
npm install                 # Install dependencies
npm run dev                 # Start development server (localhost:3000)
npm run build               # Build for production
npm run start               # Start production server

# Database
npx prisma migrate dev      # Run migrations in development
npx prisma studio           # Open Prisma Studio (DB GUI)
npx prisma generate         # Generate Prisma Client

# Testing
npm test                    # Run tests
npm run test:watch          # Run tests in watch mode

# Linting
npm run lint                # Run ESLint
npm run lint:fix            # Fix linting issues

# Git operations
git status                  # Check working tree status
git add <file>              # Stage specific files
git commit -m "message"     # Commit changes
git push -u origin <branch> # Push to remote
```

## Environment Variables

Create a `.env.local` file with:

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Stripe
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Optional: Email service
EMAIL_SERVER="smtp://..."
EMAIL_FROM="noreply@yourdomain.com"
```

## AI Assistant Instructions

### Before Making Changes

1. **Read first**: Always read existing files before modifying them
2. **Understand context**: Review related files to understand patterns
3. **Plan the work**: Use TodoWrite to track multi-step tasks
4. **Check PLAN.md**: Refer to the project plan for feature details

### When Writing Code

1. **Keep it simple**: Minimum complexity needed for the task
2. **Match existing patterns**: Follow conventions already in the codebase
3. **Don't add unnecessary features**: Only implement what's requested
4. **Security first**: Avoid introducing vulnerabilities
5. **Mobile-first**: Always consider responsive design

### After Making Changes

1. **Verify changes**: Test that modifications work as expected
2. **Check for regressions**: Ensure nothing else broke
3. **Commit incrementally**: Make small, focused commits
4. **Update documentation**: Keep docs in sync with code changes

## Troubleshooting

### Common Issues

1. **Push fails with 403**: Ensure branch name matches the required pattern (e.g., `claude/` prefix with correct session ID)

2. **Network errors on git operations**: Retry with exponential backoff

3. **Prisma errors**: Run `npx prisma generate` after pulling schema changes

4. **Build errors**: Clear `.next` folder and rebuild

## Contact & Resources

- **Repository**: sophia9211/claude-yoga-invitation
- **Issues**: Report bugs and feature requests via GitHub Issues
- **Plan**: See PLAN.md for detailed feature roadmap

---

*Last updated: 2026-01-29*
