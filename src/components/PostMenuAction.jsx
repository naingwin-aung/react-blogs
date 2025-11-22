import { Save, Trash2 } from "lucide-react"

const PostMenuAction = () => {
  return (
    <div className=''>
        <h1>Actions</h1>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
            <Save></Save>
            Save this post
        </div>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
            <Trash2/>
            Delete this post
        </div>
    </div>
  )
}

export default PostMenuAction