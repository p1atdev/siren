import { getAlbum, getAlbums } from "../../utils/mod.ts";
import { assertEquals, assertNotEquals } from "../../deps.ts";

Deno.test("fetch all albums", async () => {
  const albums = await getAlbums();

  assertNotEquals(albums.length, 0);
});

Deno.test("fetch a specific album", async () => {
  const album = await getAlbum("2462");

  assertEquals(album.title, "危机合约渊默行动OST");
});
