import { useQuery } from "@tanstack/react-query";
import { getTopStories } from "../../lib/api/topStories";

export const useGetTopStories = (category: string) => {
  return useQuery({
    queryKey: ['topStories', category],
    queryFn: async () => await getTopStories(category)
  })
}
