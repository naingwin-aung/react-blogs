import axios from "axios";

export const ListPostQueryOption = () => {
  return {
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  };
};

const fetchPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts`
  );
  return response.data;
};
