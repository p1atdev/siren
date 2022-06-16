import { sendSirenRequest } from "../mod.ts";
import { Song, SongRes, SongsRes } from "../../types/mod.ts";

/**
 * Get song
 * @param id The id of the song
 */
export const getSong = async (id: string): Promise<Song> => {
  const res: SongRes = await sendSirenRequest({ path: `/song/${id}` });

  const song: Song = {
    id: res.data.cid,
    title: res.data.name,
    albumId: res.data.albumCid,
    sourceUrl: res.data.sourceUrl,
    lyricUrl: res.data.lyricUrl,
    mvUrl: res.data.mvUrl,
    mvCoverUrl: res.data.mvCoverUrl,
    artists: res.data.artists,
  };

  return song;
};

/**
 * Get all songs
 */
export const getSongs = async () => {
  const res: SongsRes = await sendSirenRequest({ path: "/songs" });

  const songs: Song[] = await Promise.all(res.data.list.map(async (song) => {
    return await getSong(song.cid);
  }));

  return songs;
};
