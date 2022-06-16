export interface AlbumRes {
  code: number;
  msg: string;
  data: AlbumResData;
}

export interface AlbumResData {
  cid: string;
  name: string;
  intro: string;
  belong: string;
  coverUrl: string;
  coverDeUrl: string;
  songs: AlbumResDataSong[];
}

export interface AlbumResDataSong {
  cid: string;
  name: string;
  artistes: string[];
}
