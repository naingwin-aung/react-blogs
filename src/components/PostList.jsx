import { useInfiniteQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import PostSkeleton from "../utils/PostSkeleton";
import ErrorSection from "../utils/ErrorSection";
import InfiniteScroll from "react-infinite-scroll-component";
import { ListPostInfiniteQueryOption } from "../queries/ListPostInfiniteQueryOption";

const PostList = ({ searchParams = null }) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(ListPostInfiniteQueryOption(searchParams));
  
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

  if (allPosts.length === 0) {
    return (
      <div className="text-center p-8 mt-10">
        <p className="text-xl font-semibold text-gray-700">
          No posts found! 😢
        </p>
        <p className="text-gray-500 mt-2">
          Try adjusting your search criteria or come back later.
        </p>
      </div>
    );
  }

  return (
    <>
      <InfiniteScroll
        dataLength={allPosts.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <>
            <PostSkeleton />
            <PostSkeleton />
          </>
        }
        endMessage={
          <p className="text-center text-gray-600 font-medium">
            All posts loaded!
          </p>
        }
      >
        {allPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </>
  );
};
export default PostList;
