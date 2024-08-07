import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Anime, getSeasonalAnime } from "@/lib/anime";
import Image from "next/image";

export default async function Home() {

  const seasonalAnime = await getSeasonalAnime();
  console.log(seasonalAnime);
  console.log(seasonalAnime[0].node)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  );
}
