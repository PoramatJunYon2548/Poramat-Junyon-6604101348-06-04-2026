require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

(async () => {
  const prisma = new PrismaClient();
  try {
    const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
    console.log('Tasks:', tasks);
  } catch (e) {
    console.error('Prisma error', e);
  } finally {
    await prisma.$disconnect();
  }
})();
