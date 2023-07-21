import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      email: "Jaueng22@naver.com",
      name: "JaeungE",
    },
  });

  res.json({ ok: true });
}
