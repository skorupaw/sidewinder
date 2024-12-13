# Use the official Puppeteer image
FROM ghcr.io/puppeteer/puppeteer:latest

# Switch to root user to avoid permission issues
USER root

# Enable corepack 
RUN npm install -g corepack

# Set the working directory
WORKDIR /app

# Copy only necessary files for dependency installation
COPY package.json .puppeteerrc.cjs pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN corepack enable pnpm && \
    pnpm config set store-dir /pnpm-store && \
    pnpm install --frozen-lockfile

# Copy the rest of the application code
# Use .dockerignore to prevent node_modules and other unnecessary files from being copied
COPY . ./

# Expose the application's port
EXPOSE 55015

# Set environment variables for database configuration and port
ENV DATABASE_PATH=/app/db
ENV PORT=55015

# Set correct permissions
RUN chown -R node:node /app

# Start the application
CMD ["pnpm", "run", "dev"]
