import Image from "./Image"

const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className="flex items-center gap-2">
            <Image src="/userImg.jpeg" className="w-12 h-12 rounded-full object-cover"/>
            <span className="font-medium">John Doe</span>
            <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse perspiciatis, accusantium consequuntur aspernatur odio adipisci earum repudiandae iste hic quos quas facere ipsum harum, libero cupiditate porro odit, quisquam itaque.
        </p>
    </div>
  )
}

export default Comment