import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import { ListPostQueryOption } from "../queries/ListPostQueryOption";
import PostSkeleton from "../utils/PostSkeleton";
import ErrorSection from "../utils/ErrorSection";
import axios from "axios";

const LoadMorePostList = () => {
  // const {data, isPending, error} = useQuery(ListPostQueryOption());

  const fetchPosts = async (pageParam) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      params: {
        page: pageParam,
        limit: 5,
      },
    });
    return response.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  const allPosts = data?.pages.flatMap((page) => page.posts);

  if (status === "pending") {
    return (
      <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </>
    );
  }

  if (status === "error") {
    return <ErrorSection />;
  }

  return (
    <>
      <div className="flex flex-col gap-12 mb-8">
        {allPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetching}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};
export default PostList;
