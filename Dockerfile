FROM node:14

WORKDIR /app

# Install the correct pnpm major
RUN npm install -g pnpm@3

# Copy only manifests first for caching
COPY package.json pnpm-lock.yaml ./

# Install with old-style hoisting
RUN pnpm install --frozen-lockfile --shamefully-flatten

# Copy the rest of the project
COPY . .

CMD ["pnpm", "run", "dev"]
EXPOSE 3000