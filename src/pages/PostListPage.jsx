import { useState } from "react";
import PostList from "../components/PostList";
import SidebarMenu from "../components/SidebarMenu";
import { useSearchParams } from "react-router-dom";
import Container from "../utils/Container";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      <div className="mt-5 mb-10">
        <h1 className="text-2xl font-medium">Development Blog</h1>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-blue-800 font-medium text-sm text-white px-4 py-2 rounded-lg mt-6 md:hidden cursor-pointer"
        >
          {open ? "Close" : "Filter or Search"}
        </button>
        <div className="flex flex-col-reverse md:flex-row mt-5 md:mt-10 lg:gap-5">
          <div className="w-full md:w-3/4">
            <PostList searchParams={searchParams} />
          </div>
          <div
            className={`${
              open ? "block" : "hidden"
            } md:block w-full md:w-1/4 mb-8 md:mb-0 p-4 border border-gray-200 rounded-2xl h-max md:sticky md:top-5`}
          >
            <SidebarMenu />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostListPage;
