# Overview

This is a modern full-stack web application built with React and Express, designed to recreate a Linear-inspired interface with a focus on project management and product development tools. The application features a sophisticated dark-themed UI with blur effects and modern design patterns, implementing a complete frontend-backend architecture with PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client is built using React 18 with TypeScript and follows a component-based architecture:
- **UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **State Management**: TanStack Query (React Query) for server state management with custom query client configuration
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Organized into reusable UI components, page components, and custom hooks

## Backend Architecture
The server follows an Express.js-based REST API pattern:
- **Framework**: Express.js with TypeScript for type safety
- **API Design**: RESTful endpoints with /api prefix convention
- **Storage Layer**: Abstracted storage interface with in-memory implementation as default, designed for easy database integration
- **Development Setup**: Vite middleware integration for seamless full-stack development experience
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Management
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL configured for production with Neon Database serverless integration
- **Schema**: Centralized schema definitions in shared directory for consistency between client and server
- **Migrations**: Drizzle-kit for database migrations and schema synchronization
- **Validation**: Zod integration with Drizzle for runtime type validation

## Authentication & Authorization
Basic user management system is scaffolded with:
- User schema with username/password fields
- Storage interface methods for user CRUD operations
- Session management preparation (connect-pg-simple dependency included)

## Development Workflow
- **Type Safety**: Shared TypeScript configurations and types between client and server
- **Hot Reload**: Vite HMR for both frontend and backend development
- **Code Organization**: Monorepo structure with clear separation of client, server, and shared code
- **Path Aliases**: Configured import aliases for cleaner import statements

# External Dependencies

## Core Runtime Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database driver for production deployments
- **drizzle-orm**: Type-safe ORM for database operations
- **express**: Web application framework for the backend API
- **react**: Frontend framework for building user interfaces
- **@tanstack/react-query**: Data fetching and caching library for React

## UI & Design System
- **@radix-ui/react-***: Collection of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Utility for creating type-safe component variants
- **clsx**: Utility for conditionally joining CSS classes
- **lucide-react**: Icon library with React components

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **drizzle-kit**: Database migration and introspection tool
- **wouter**: Lightweight router for React applications

## Form Handling & Validation
- **react-hook-form**: Forms library with validation support
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: Schema validation library

## Additional Utilities
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generator
- **embla-carousel-react**: Carousel component for React