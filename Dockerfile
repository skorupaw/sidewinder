# Use the official Bun image
FROM oven/bun:slim

# Set the working directory
WORKDIR /app

# Install Puppeteer dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgtk-3-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set Puppeteer to use bundled Chromium
ENV PUPPETEER_SKIP_DOWNLOAD=false

# Copy package.json and bun.lockb to install dependencies
COPY package.json bun.lockb .puppeteerrc.cjs ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Expose the application's port
EXPOSE 55015

# Set environment variables for database configuration and port
ENV DATABASE_PATH=/app/db
ENV PORT=55015

# Create the database directory
RUN mkdir -p /app/db

# Start the application
CMD ["bun", "run", "dev"]
