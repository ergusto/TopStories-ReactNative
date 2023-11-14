import { NYTClient } from "./client";

export async function getTopStories(section: string) {
  return await NYTClient.get(`topstories/v2/${section}.json`)
}
