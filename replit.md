# Overview

This is a pixel-perfect React implementation of a Linear-inspired landing page, designed from comprehensive Figma specifications. The application features a sophisticated dark-themed UI with extensive blur effects, modern typography, and multiple product showcase sections. Built with modern web technologies and optimized for performance, it delivers a complete marketing website experience that matches the original Linear design system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client is built using React 18 with TypeScript following a component-based architecture:
- **UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with custom CSS variables implementing Linear's design system with dark theme (#08090a background)
- **Typography**: Roboto font family with precise font sizes, letter spacing, and line heights matching Figma specifications
- **State Management**: TanStack Query (React Query) for server state management with custom query client configuration
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Organized into specialized components for each landing page section with blur effects and animations

## Landing Page Sections
- **Hero Section**: Large heading with individual word blur effects, subtitle, and dual CTA buttons
- **Company Logos**: Grid of trusted company logos with hover animations and grayscale effects
- **Feature Cards**: Three showcase cards with rounded corners, background images, and glassmorphism effects
- **Product Features**: "Made for Modern Product Teams" section with feature highlights
- **Project Management**: "Set the Product Direction" with interactive project overview cards and status indicators
- **AI Integration**: "AI that works where you work" featuring agent selection interface
- **Final CTA**: "Plan the present, build the future" call-to-action section
- **Footer**: Comprehensive site navigation with multiple link sections

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

## Design System Implementation
- **Colors**: Dark theme with #08090a primary background, #f7f8f8 light text, and opacity variations for secondary elements
- **Typography**: Roboto font with specific weights (400, 600) and precise letter spacing (-1.82px for hero, -0.252px for subheadings)
- **Blur Effects**: Extensive use of blur filters and glassmorphism with backdrop-blur and opacity layers
- **Animations**: Smooth transitions, hover effects, and transform animations for interactive elements
- **Spacing**: Consistent padding, margins, and grid layouts following the Figma specification
- **Components**: Modular components for BlurredText, FeatureCards, ProjectManagement, AISection, and Footer

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