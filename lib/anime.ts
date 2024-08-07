
export interface Anime {
  node: {
    id: number,
    title: string,
    main_picture: {
      medium: string,
      large: string,
    },
    alternative_titles: {} | null,
    start_date: string | null,
    end_date: string | null,
    synopsis: string | null,
    mean: number | null,
    rank: number | null,
    popularity: number | null,
    num_list_users: number,
    num_scoring_users: number,
    nsfw: string | null,
    genres: [{}],
    created_at: string,
    updated_at: string,
    media_type: string,
    status: string,
    my_list_status: {} | null,
    num_episodes: number,
    start_season: {} | null,
    broadcast: {} | null,
    source: string | null,
    average_episode_duration: number | null,
    rating: string | null,
    studios: [{}]
  }
}

export const getAnimeById = async (anime_id: string | undefined | string[]) => {
  const response = await fetch(`https://api.myanimelist.net/v2/anime/${anime_id}`,
    {
      headers: {
        "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID || "",
      },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch anime.');
  }

  const data = await response.json();
      
  console.log(data);
  return data;
}

export const getSeasonalAnime = async () => {
  try {

    const response = await fetch("https://api.myanimelist.net/v2/anime/season/2024/summer",
      {
        headers: {
          "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID || "",
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch seasonal anime.');
      }
      
      const data = await response.json();

      return data.data;
  } catch (error) {
    console.error(error);
  }
}