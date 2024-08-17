import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>hello world</main>
    </HydrateClient>
  );
}
