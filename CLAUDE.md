# CLAUDE.md - AI Assistant Guide for claude-yoga-invitation

This document provides guidance for AI assistants working on this repository.

## Project Overview

**Repository**: claude-yoga-invitation
**Status**: New project (initializing)
**Purpose**: Yoga class invitation system

## Repository Structure

```
claude-yoga-invitation/
├── CLAUDE.md           # AI assistant guidelines (this file)
└── .git/               # Git repository metadata
```

> **Note**: This is a newly initialized repository. Structure will evolve as the project develops.

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

When code is added to this project, follow these conventions:

1. **File Organization**:
   - Keep related files grouped in logical directories
   - Use clear, descriptive file names
   - Separate concerns (e.g., components, utilities, services)

2. **Code Quality**:
   - Write self-documenting code with meaningful variable names
   - Add comments only where logic is non-obvious
   - Follow DRY (Don't Repeat Yourself) principles
   - Keep functions focused and single-purpose

3. **Security**:
   - Never commit secrets, API keys, or credentials
   - Use environment variables for sensitive configuration
   - Validate all user inputs
   - Be mindful of OWASP Top 10 vulnerabilities

### Testing

- Write tests for new functionality
- Ensure existing tests pass before committing
- Test edge cases and error conditions

## AI Assistant Instructions

### Before Making Changes

1. **Read first**: Always read existing files before modifying them
2. **Understand context**: Review related files to understand patterns
3. **Plan the work**: Use TodoWrite to track multi-step tasks
4. **Avoid over-engineering**: Make only necessary changes

### When Writing Code

1. **Keep it simple**: Minimum complexity needed for the task
2. **Match existing patterns**: Follow conventions already in the codebase
3. **Don't add unnecessary features**: Only implement what's requested
4. **Security first**: Avoid introducing vulnerabilities

### After Making Changes

1. **Verify changes**: Test that modifications work as expected
2. **Check for regressions**: Ensure nothing else broke
3. **Commit incrementally**: Make small, focused commits
4. **Update documentation**: Keep docs in sync with code changes

## Common Commands

```bash
# Git operations
git status                      # Check working tree status
git add <file>                  # Stage specific files
git commit -m "message"         # Commit changes
git push -u origin <branch>     # Push to remote

# Development (add project-specific commands as they're established)
# npm install                   # Install dependencies
# npm run dev                   # Start development server
# npm test                      # Run tests
# npm run build                 # Build for production
```

## Project-Specific Notes

### Yoga Invitation Features (Planned)

The system is expected to handle:
- Yoga class scheduling and management
- Invitation creation and distribution
- RSVP tracking and management
- User notifications

### Architecture Decisions

Document architectural decisions here as they are made:

1. (To be determined as project develops)

## Troubleshooting

### Common Issues

1. **Push fails with 403**: Ensure branch name matches the required pattern (e.g., `claude/` prefix with correct session ID)

2. **Network errors on git operations**: Retry with exponential backoff

3. **Merge conflicts**: Review conflicting changes carefully, preserve intended functionality

## Contact & Resources

- **Repository**: sophia9211/claude-yoga-invitation
- **Issues**: Report bugs and feature requests via GitHub Issues

---

*Last updated: 2026-01-29*
