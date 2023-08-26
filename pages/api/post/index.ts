import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "@/lib/prisma";

// POST /api/post
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = req.body
  const result = await prisma.forms.create({
    data: {
      userId: userId,
    },
    select: {
      id: true
    }
  });
  debugger;
  res.redirect(307, `/${userId}/${result.id}/form1`);
}

