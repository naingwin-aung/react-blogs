import axios from "axios";

export const ListPostInfiniteQueryOption = (searchParams = null) => {
  return {
    queryKey: ["posts", searchParams?.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.has_more ? pages.length + 1 : undefined,
  };
};

const fetchPosts = async (pageParam, searchParams = null) => {
  const searchParamsObj = searchParams ? Object.fromEntries([...searchParams]) : {};

  const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: {
      page: pageParam,
      limit: 15,
      ...searchParamsObj,
    },
  });
  return response.data.data;
};
