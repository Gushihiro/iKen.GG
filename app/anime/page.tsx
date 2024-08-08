
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Anime, getSeasonalAnime } from "@/lib/anime";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const seasonalAnime = await getSeasonalAnime();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-4 gap-3">
        {seasonalAnime.map((anime: { node: Anime }, i: number) => (
          <Card key={i}>
            <Link href={`/anime/${anime.node.id}`}>
              <CardHeader className="text-center h-2/6 text-xl dark:bg-slate-900 bg-slate-300 rounded-t">
                <h1>{anime.node.title}</h1>
              </CardHeader>
              <CardContent className="flex justify-center items-end h-4/6">
                <Image className="rounded" src={anime.node.main_picture.medium} width={200} height={200} alt={anime.node.title} />
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
