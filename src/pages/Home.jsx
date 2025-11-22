import { Circle, NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";
import MainCategory from "../components/MainCategory";
import FeaturedPost from "../components/FeaturedPost";
import PostList from "../components/PostList";
import Container from "../utils/Container";

const Home = () => {
  return (
    <Container>
      <div className="mt-5 flex flex-col gap-7 mb-10">
        {/* BREADCRUMB */}
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <span>.</span>
          <span className="text-blue-800">Blogs and Articles</span>
        </div>
        {/* INTRODUCTION */}
        <div className="flex items-center justify-between gap-16">
          <div>
            <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="mt-8 text-md md:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              maiores voluptas distinctio ad id cupiditate placeat rem, animi
              sit optio, sint deleniti expedita temporibus ex voluptates itaque,
              aut esse voluptatem!
            </p>
          </div>
          <Link to="/write" className="hidden md:block">
            <div className="border-2 border-gray-600 rounded-md text-center p-8 md:p-10 lg:p-15 xl:p-17 flex items-center justify-center hover:bg-gray-100 transition-all">
              <span className="text-gray-800">
                <NotebookPen size={64} />
              </span>
            </div>
          </Link>
        </div>
        {/* MAIN CATEGORY */}
        <MainCategory />
        {/* FEATURED POSTS */}
        <FeaturedPost />
        {/* Post List */}
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </Container>
  );
};

export default Home;
