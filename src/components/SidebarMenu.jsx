import SearchBox from "./SearchBox";

const SidebarMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Search Box */}
      <div>
        <div className="font-medium">Search</div>
        <div className="mt-3">
          <SearchBox />
        </div>
      </div>

      {/* Filters */}
      {/* <div className="flex flex-col gap-3">
        <div className="font-medium">Filters</div>
        <label htmlFor="newest" className="flex items-center gap-2">
          <input type="checkbox" id="newest" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
          <span>Newest</span>
        </label>
        <label htmlFor="most_popular" className="flex items-center gap-2">
          <input type="checkbox" id="most_popular" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
          <span>Most Popular</span>
        </label>
        <label htmlFor="trending" className="flex items-center gap-2">
          <input type="checkbox" id="trending" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
          <span>Trending</span>
        </label>
        <label htmlFor="oldest" className="flex items-center gap-2">
          <input type="checkbox" id="oldest" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
          <span>Oldest</span>
        </label>
      </div> */}

      <div className="flex flex-col gap-3">
        <div className="font-medium">Filters</div>
        <label
          htmlFor="newest"
          class="flex items-center gap-2 border border-transparent transition-all duration-100 px-3 py-2 rounded-lg cursor-pointer hover:border hover:border-blue-400 hover:bg-blue-200 has-[:checked]:border-blue-400 has-[:checked]:bg-blue-200 hover:text-blue-800 has-[:checked]:text-blue-800"
        >
          <input type="checkbox" id="newest" class="appearance-none peer" name="sort_options" />
          <span>
            Newest
          </span>
        </label>

        <label
          htmlFor="most_popular"
          class="flex items-center gap-2 border border-transparent transition-all duration-100 px-3 py-2 rounded-lg cursor-pointer hover:border hover:border-blue-400 hover:bg-blue-200 has-[:checked]:border-blue-400 has-[:checked]:bg-blue-200 hover:text-blue-800 has-[:checked]:text-blue-800"
        >
          <input type="checkbox" id="most_popular" class="appearance-none peer" name="sort_options" />
          <span>Most Popular</span>
        </label>
        <label
          htmlFor="trending"
          class="flex items-center gap-2 border border-transparent transition-all duration-100 px-3 py-2 rounded-lg cursor-pointer hover:border hover:border-blue-400 hover:bg-blue-200 has-[:checked]:border-blue-400 has-[:checked]:bg-blue-200 hover:text-blue-800 has-[:checked]:text-blue-800"
        >
          <input type="checkbox" id="trending" class="appearance-none peer" name="sort_options" />
          <span>Trending</span>
        </label>
        <label
          htmlFor="oldest"
          class="flex items-center gap-2 border border-transparent transition-all duration-100 px-3 py-2 rounded-lg cursor-pointer hover:border hover:border-blue-400 hover:bg-blue-200 has-[:checked]:border-blue-400 has-[:checked]:bg-blue-200 hover:text-blue-800 has-[:checked]:text-blue-800"
        >
          <input type="checkbox" id="oldest" class="appearance-none peer" name="sort_options" />
          <span>Oldest</span>
        </label>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-3">
        <div className="font-medium">Categories</div>
        <div className="underline cursor-pointer">All</div>
        <div className="underline cursor-pointer">Web Design</div>
        <div className="underline cursor-pointer">Development</div>
        <div className="underline cursor-pointer">Database</div>
      </div>
    </div>
  );
};

export default SidebarMenu;
