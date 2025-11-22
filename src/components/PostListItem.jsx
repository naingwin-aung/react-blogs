import { Link } from "react-router-dom"
import Image from "./Image"
import { format } from "timeago.js"

const PostListItem = ({ post }) => {
  return (
    <div className='flex flex-col xl:flex-row gap-8 mb-8'>
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src={post.image} className="rounded-2xl object-cover"/>
        </div>
        {/* detail */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">
                {post?.title}
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className="text-blue-500">John Doe</Link>
                <span>on</span>
                <Link className="text-blue-500">Web Design</Link>
                <span>
                    {format(post?.createdAt)}
                </span>
            </div>
            <p>
                {post?.description}
            </p>
            <div>
                <Link to="/test" className="hover:underline text-sm text-blue-800">See more</Link>
            </div>
        </div>
    </div>
  )
}

export default PostListItem