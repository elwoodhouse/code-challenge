import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function Page(params: { params: { user_id: string } }) {
  debugger;
  const user = await prisma.users.findUnique({
    where: {
      id: parseInt(params.params.user_id),
    },
    include: {
      forms: true,
    },
  });

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="flex items-center space-x-4 max-w-xl mx-auto w-full p-4">
        {user && <Image src={user.image} alt={user.name} width={48} height={48} className="rounded-full ring-1 ring-gray-900/5" />}
        <div className="space-y-1">
          <p className="font-medium leading-none">{user?.name}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <div className="divide-y divide-gray-900/5">
          {/* {user?.forms.map(user => (
            
          ))} */}
        </div>
      </div>
    </main>
  );
}
