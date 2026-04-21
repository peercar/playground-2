# NestJS Microservice Template

A minimal, production-ready NestJS microservice template.


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