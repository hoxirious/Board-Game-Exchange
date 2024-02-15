FROM node:latest

RUN npm i -g pnpm
# Set the working directory in the container

WORKDIR /app/fe

# Copy the package.json and package-lock.json files to the container
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

EXPOSE 3000

CMD ["pnpm" , "dev"]
