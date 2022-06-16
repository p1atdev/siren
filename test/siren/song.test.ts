import { getSong, getSongs } from "../../utils/mod.ts";
import { assertEquals, assertNotEquals } from "../../deps.ts";

Deno.test("fetch all songs", async () => {
  const songs = await getSongs();

  assertNotEquals(songs.length, 0);
});

Deno.test("fetch a specific song", async () => {
  const song = await getSong("306846");

  assertEquals(song.title, "Your Star");
});
