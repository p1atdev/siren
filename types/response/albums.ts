export interface AlbumsRes {
  code: number;
  msg: string;
  data: AlbumsResData[];
}

export interface AlbumsResData {
  cid: string;
  name: string;
  coverUrl: string;
  artistes: string[];
}
