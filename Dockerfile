# Use Bun as the base image
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb to install dependencies
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Expose the application's port (default)
EXPOSE 55015

# Set environment variables for database configuration and port
ENV DATABASE_PATH=/app/db
ENV PORT=55015

# Create the database directory
RUN mkdir -p /app/db

# Start the application
CMD ["bun", "run", "dev"]
