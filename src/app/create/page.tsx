import { redirect } from "next/navigation";

import { getServerAuthSession } from "~/server/auth";
import MainLayout from "../_components/MainLayout";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/api/auth/login");
  }

  return (
    <main className="">
      <MainLayout title="Create Invitation">
        {/* TODO: Add invitation form code here */}
      </MainLayout>
    </main>
  );
}
