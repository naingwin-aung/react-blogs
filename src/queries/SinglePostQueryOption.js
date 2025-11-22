import axios from "axios";

export const SinglePostQueryOption = (slug) => {
  return {
    queryKey: ["posts", slug],
    queryFn: () => fetchPost(slug),
  };
};

const fetchPost = async (slug) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts/${slug}`
  );
  return response.data;
};
