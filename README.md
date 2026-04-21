# NestJS Microservice Template

A minimal, production-ready NestJS microservice template for the Peercar project.

## Features

- **NestJS Framework** - Robust and scalable architecture
- **TypeScript** - Type-safe development
- **Docker Support** - Fully containerized with multi-stage builds
- **Health Checks** - Built-in health monitoring endpoints using @nestjs/terminus
- **Environment Configuration** - Centralized configuration management
- **Global Validation** - Request validation using class-validator
- **Error Handling** - Comprehensive exception filtering
- **Logging** - Request/response logging interceptor
- **Code Quality** - ESLint and Prettier pre-configured
- **Testing** - Jest configuration for unit and e2e tests

## Project Structure

```
.
├── src/
│   ├── common/
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   └── interceptors/
│   │       └── logging.interceptor.ts
│   ├── health/
│   │   ├── health.controller.ts
│   │   └── health.module.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── docker-compose.yml
├── Dockerfile
├── nest-cli.json
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+ (install with `corepack enable` or `npm install -g pnpm`)
- Docker (optional)

### Installation

1. Clone this template repository
2. Install dependencies:

```bash
pnpm install
```

3. Create environment file:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration

### Running the Application

#### Development Mode

```bash
pnpm run start:dev
```

#### Production Mode

```bash
pnpm run build
pnpm run start:prod
```

#### Using Docker

```bash
docker-compose up --build
```

## Available Scripts

- `pnpm run build` - Build the application
- `pnpm run start` - Start the application
- `pnpm run start:dev` - Start in development mode with hot-reload
- `pnpm run start:debug` - Start in debug mode
- `pnpm run start:prod` - Start in production mode
- `pnpm run lint` - Lint and fix code
- `pnpm run format` - Format code with Prettier
- `pnpm run test` - Run unit tests
- `pnpm run test:watch` - Run tests in watch mode
- `pnpm run test:cov` - Run tests with coverage
- `pnpm run test:e2e` - Run end-to-end tests

## API Endpoints

### Base Endpoint
- `GET /` - Returns service information

### Health Check
- `GET /health` - Health check endpoint with memory monitoring

## Configuration

Environment variables can be configured in the `.env` file:

- `NODE_ENV` - Environment (development/production)
- `PORT` - Application port (default: 3000)
- `SERVICE_NAME` - Name of the microservice
- `SERVICE_VERSION` - Version of the microservice

## Microservice Communication

This template includes `@nestjs/microservices` for building distributed systems. To add microservice communication:

1. Choose a transport layer (TCP, Redis, RabbitMQ, NATS, etc.)
2. Configure the microservice client/server in your module
3. Use the `@MessagePattern()` decorator for message-based communication

Example:

```typescript
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'get_data' })
  getData(data: any) {
    return { message: 'Data received', data };
  }
}
```

## Best Practices

1. **Module Organization** - Keep related features in separate modules
2. **DTOs** - Use Data Transfer Objects with class-validator for input validation
3. **Error Handling** - Use custom exceptions that extend HttpException
4. **Logging** - Use the built-in Logger for consistent logging
5. **Configuration** - Never hardcode values, use environment variables
6. **Testing** - Write unit tests for services and e2e tests for controllers
7. **Docker** - Use multi-stage builds to minimize image size

## Testing

```bash
# Unit tests
pnpm run test

# E2E tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov
```

## Extending This Template

### Adding a New Module

```bash
pnpm exec nest generate module <module-name>
pnpm exec nest generate controller <module-name>
pnpm exec nest generate service <module-name>
```

### Adding Database Support

Install TypeORM or Prisma:

```bash
# TypeORM
pnpm add @nestjs/typeorm typeorm pg

# Prisma
pnpm add @prisma/client
pnpm add -D prisma
```

### Adding Authentication

```bash
pnpm add @nestjs/passport passport @nestjs/jwt passport-jwt
pnpm add -D @types/passport-jwt
```

## Resources

This template is based on NestJS best practices for microservices architecture:

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Microservices](https://docs.nestjs.com/microservices/basics)
- [Best Practices for Building Microservices with NestJS](https://dev.to/ezilemdodana/best-practices-for-building-microservices-with-nestjs-p3e)
- [Build a Microservice Architecture with NestJS](https://www.telerik.com/blogs/build-microservice-architecture-nestjs)

## License

MIT
