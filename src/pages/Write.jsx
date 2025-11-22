import { useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import { createPostQueryOption } from "../queries/createPostQueryOption";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();

  const { isLoaded, isSignedIn } = useUser();

  const mutation = useMutation({
    ...createPostQueryOption(),
    onSuccess: (response) => {
      navigate(`/posts/${response.slug}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
    };

    mutation.mutate(data);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Please sign in to write a post.</div>;
  }

  return (
    <div className="mt-5 flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-8 flex-1"
      >
        <button
          type="button"
          className="w-max shadow-md rounded-xl text-sm text-gray-500 p-4"
        >
          Add a cover image
        </button>

        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-4xl font-medium outline-none"
          name="title"
        />

        <div className="flex items-center gap-4">
          <label htmlFor="">Choose a category:</label>
          <select
            name="category"
            id=""
            className="border border-gray-200 rounded-2xl p-2 outline-none shadow-sm"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          name="description"
          placeholder="A Short Description"
          className="w-full border border-gray-200 outline-none rounded-2xl p-4 h-[200px]"
        ></textarea>

        <div className="flex justify-end">
          <button type="submit" disabled={mutation.isPending} className="w-max bg-blue-800 text-white px-4 py-2 rounded-xl cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-400">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
