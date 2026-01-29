import { PrismaClient } from '@prisma/client';

// Declare global type for PrismaClient to prevent multiple instances
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

/**
 * Prisma Client singleton for Next.js
 *
 * In development, the Next.js dev server hot-reloads and would create
 * a new PrismaClient instance on each reload. This causes connection
 * exhaustion issues. By storing the client on globalThis, we ensure
 * only one instance exists across hot-reloads.
 *
 * In production, we simply create a new PrismaClient instance.
 *
 * @see https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prevent-hot-reloading-from-creating-new-instances-of-prismaclient
 */
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
  });
};

// Use existing global instance or create a new one
const prisma = globalThis.prisma ?? prismaClientSingleton();

// In development, store the client on globalThis to prevent multiple instances
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export default prisma;

// Re-export types for convenience
export { PrismaClient };
