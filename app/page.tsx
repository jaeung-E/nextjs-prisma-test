import Button from "@/src/components/Button";
import { PrismaClient } from "@prisma/client";

async function Home() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
      </ul>
      <Button />
    </>
  );
}

export default Home;
