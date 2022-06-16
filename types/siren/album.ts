import { Song } from "../mod.ts";

export interface Album {
  /**
   * Album ID
   */
  id: string;
  /**
   * Album name
   */
  title: string;

  /**
   * Description of the album
   */
  description: string;

  /**
   * The game name that the album belongs to
   */
  belong: string;

  /**
   * The cover image URL of the album
   */
  coverUrl: string;

  /**
   * The banner image URL of the album
   */
  bannerUrl: string;

  /**
   * The songs of the album
   */
  songs: Song[];
}
