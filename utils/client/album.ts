import { getSong, sendSirenRequest } from "../mod.ts";
import { Album, AlbumRes, AlbumsRes } from "../../types/mod.ts";

/**
 * Get album
 * @param id The id of the song
 */
export const getAlbum = async (id: string): Promise<Album> => {
  const res: AlbumRes = await sendSirenRequest({ path: `/album/${id}/detail` });

  const songs = await Promise.all(res.data.songs.map(async (song) => {
    return await getSong(song.cid);
  }));

  const album: Album = {
    id: res.data.cid,
    title: res.data.name,
    description: res.data.intro,
    belong: res.data.belong,
    coverUrl: res.data.coverUrl,
    bannerUrl: res.data.coverDeUrl,
    songs: songs,
  };

  return album;
};

/**
 * Get all albums
 */
export const getAlbums = async () => {
  const res: AlbumsRes = await sendSirenRequest({ path: "/albums" });

  const albums = await Promise.all(
    res.data.map(async (album) => {
      return await getAlbum(album.cid);
    }),
  );

  return albums;
};
