export interface SongsRes {
  code: number;
  msg: string;
  data: SongsResData;
}

export interface SongsResData {
  list: SongsResDataList[];
  autoplay: null;
}

export interface SongsResDataList {
  cid: string;
  name: string;
  albumCid: string;
  artists: string[];
}
