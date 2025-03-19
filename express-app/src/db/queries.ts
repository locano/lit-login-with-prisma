import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient()
  .$extends(withAccelerate());

// A `main` function so that we can use async/await
async function main() {

  const user1Email = `ludwing238@prisma.io`;
  const user2Email = `hireX@prisma.io`;

  // Seed the database with users
  const user1 = await prisma.users.create({
    data: {
      email: user1Email,
      name: 'Ludwing',
      password: 'loginTemplate2025!'
    }
  });
  const user2 = await prisma.users.create({
    data: {
      email: user2Email,
      name: 'hirex',
      password: 'loginTemplate2025!'
    }
  });

  console.log(
    `Created users: ${user1.name} and ${user2.name}`,
  );

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
