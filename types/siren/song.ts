export interface Song {
  /**
   * Song ID
   */
  id: string;

  /**
   * Song name
   */
  title: string;

  /**
   * Song album ID
   */
  albumId: string;

  /**
   * mp3 url
   */
  sourceUrl: string;

  /**
   * If song has lyrics, this will be the url
   */
  lyricUrl?: string;

  /**
   * Maybe never used
   */
  mvUrl?: string;

  /**
   * Maybe never used
   */
  mvCoverUrl?: string;

  /**
   * Song artists
   * Almost always only one artist
   */
  artists: string[];
}
