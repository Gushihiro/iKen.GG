import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getAnimeById } from "@/lib/anime";
import Image from "next/image";

export default async function AnimeDetails({ params }: { params: { id: string }}) {
  
  const fetchedAnime = await getAnimeById(params.id);
  if (fetchedAnime) {
    console.log("fetched", fetchedAnime);
  }
  return (
    <Card>
      <CardHeader className="text-center h-2/6 text-xl dark:bg-slate-900 bg-slate-300 rounded-t">
        <h1>{fetchedAnime.title}</h1>
      </CardHeader>
      <CardContent className="flex justify-center items-end h-4/6">
        <Image className="rounded" src={fetchedAnime.main_picture.medium} width={200} height={200} alt={fetchedAnime.title} />
      </CardContent>
    </Card>
  )
}