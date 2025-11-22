import Comment from "./Comment"

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
      <h1 className="text-xl text-gray-500">Comments</h1>

      <div className="flex items-center justify-between gap-8 w-full">
        <textarea placeholder="Write a comments...." className="border border-gray-300 rounded-xl p-2 w-full outline-none"></textarea>
        <button className="bg-blue-800 px-4 py-2 text-white rounded-lg font-medium">Send</button>
      </div>

      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  )
}

export default Comments