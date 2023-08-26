import { Suspense } from "react";
import Table from "@/components/table";
import TablePlaceholder from "@/components/table-placeholder";

export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h6 className="py-4 max-w-xl mx-auto w-full bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-left font-medium tracking-tight text-transparent">
        Select User:
      </h6>
      <Suspense fallback={<TablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <Table />
      </Suspense>
    </main>
  );
}
