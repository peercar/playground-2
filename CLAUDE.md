# NestJS Microservice Template for Peercar

This repository serves as a template for creating NestJS microservices for the Peercar project.

## Template Overview

This is a minimal, production-ready NestJS microservice template with:
- Core NestJS setup with TypeScript
- pnpm as package manager for efficient dependency management
- Docker support with multi-stage builds
- Health check endpoints
- Global validation and error handling
- Logging interceptor
- Code quality tools (ESLint, Prettier)
- Testing setup (Jest)

## Usage

When creating a new microservice:

1. Use this template as a starting point
2. Clone and rename according to your microservice purpose
3. Update `package.json` with the new service name
4. Modify the `.env.example` with service-specific variables
5. Run `pnpm install` to install dependencies
6. Start building your domain-specific modules

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run start:dev
```

## Next Steps

Refer to the [README.md](README.md) for detailed setup and usage instructions.
