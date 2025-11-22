const PostSkeleton = () => {
  return (
    <div className="post-skeleton animate-pulse mb-8">
      <div className="flex gap-4">
        {/* Featured image skeleton */}
        <div className="w-1/3 h-[300px] bg-gray-300 rounded flex-shrink-0"></div>
        
        {/* Content skeleton */}
        <div className="space-y-3 w-2/3">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/5"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  )
}

export default PostSkeleton