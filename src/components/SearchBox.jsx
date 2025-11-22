import { Search } from "lucide-react"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handelKeyPress = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value;
      if(location.pathname === "/posts") {
        setSearchParams({...Object.fromEntries(searchParams), search: query});
      } else {
        navigate(`/posts?search=${query}`);
      }
    }
  }

  return (
    <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
        <Search/>
        <input type="text" placeholder="Search..." className="bg-transparent outline-none border-none flex-grow text-sm" onKeyDown={handelKeyPress}/>
    </div>
  )
}

export default SearchBox