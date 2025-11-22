import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import SearchBox from "../components/SearchBox";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import { SinglePostQueryOption } from "../queries/SinglePostQueryOption";
import ErrorSection from "../utils/ErrorSection";

const SinglePost = () => {
  const {slug} = useParams();
  const {isPending, data, error} = useQuery(SinglePostQueryOption(slug));

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorSection />;
  }

  return (
    <div className="flex flex-col gap-8 mt-5">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-500">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-500">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            praesentium deserunt cum iste alias saepe repellendus perspiciatis
            animi rerum dolores atque obcaecati nisi ex nulla enim rem, officiis
            dolor aut.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus temporibus vitae ab corporis. Sed impedit officiis voluptate perferendis quos eaque recusandae dignissimos, in placeat libero harum iure ad esse.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="/featured1.jpeg" className="rounded-2xl object-cover" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8 mt-5">
        {/* text */}
        <div className="lg:w-3/4 lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, fuga eaque, expedita, dignissimos cumque placeat iste
            perspiciatis recusandae porro qui voluptates quisquam nam. Magnam
            ratione vero pariatur! Consequatur, iste id.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            beatae, modi quod ducimus rem asperiores incidunt rerum a animi ad
            sint facilis maxime quidem hic cum, ut quo voluptas?
          </p>
        </div>
        {/* menu */}
        <div className="lg:w-1/4 px-4 py-6 h-max sticky top-5 border border-gray-200 rounded-2xl">
          <h1>Author</h1>
          <div className="flex flex-col gap-4 mt-3">
            <div className="flex items-center gap-4">
              <Image
                src="/userImg.jpeg"
                className="w-10 h-10 rounded-full object-cover"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni at
              dolorem officia quibusdam excepturi deserunt
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="/facebook.svg" className="w-8 h-8 object-cover" />
              </Link>
              <Link>
                <Image src="/instagram.svg" className="w-8 h-8 object-cover" />
              </Link>
            </div>
            <PostMenuAction />
            <div>
              <h1>Categories</h1>
              <div className="flex flex-col gap-2 text-sm mt-2">
                <Link className="text-blue-500">All</Link>
                <Link className="text-blue-500">Web Design</Link>
                <Link className="text-blue-500">Programming</Link>
                <Link className="text-blue-500">Marketing</Link>
              </div>
            </div>
            <div>
              <h1 className="mt-2">Search</h1>
              <div className="mt-3">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments */}
      <Comments />
    </div>
  );
};

export default SinglePost;
