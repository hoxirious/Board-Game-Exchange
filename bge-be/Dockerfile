FROM node:latest

RUN npm i -g pnpm
# Set the working directory in the container

WORKDIR /app/be

# Copy the package.json and package-lock.json files to the container
COPY package.json pnpm-lock.yaml nodemon.json tsconfig.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build

# Expose port 8000
EXPOSE 8000

# Expose port 8080
EXPOSE 8080

# Command to run the application
CMD ["pnpm", "start"]
