export interface SongRes {
  code: number;
  msg: string;
  data: SongResData;
}

export interface SongResData {
  cid: string;
  name: string;
  albumCid: string;
  sourceUrl: string;
  lyricUrl?: string;
  mvUrl?: string;
  mvCoverUrl?: string;
  artists: string[];
}
