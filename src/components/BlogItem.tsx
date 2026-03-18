import type { Recipe } from "../types/recipe";

const BlogItem = ({ recipe }: { recipe: Recipe }) => {
  const avatar = `https://i.pravatar.cc/150?img=${recipe.id}`;
  const author = `Chef ${recipe.userId}`;

  const date = new Date(
    Date.now() - recipe.id * 100000000
  ).toDateString();

  return (
    <div className="flex gap-5 items-start mb-10">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-48 h-32 object-cover rounded-xl flex-shrink-0"
      />

      <div className="flex-1 text-left">
        <h2 className="text-lg font-semibold leading-tight line-clamp-2">
          {recipe.name}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {recipe.instructions[0]?.slice(0, 100)}...
        </p>

        <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
          <img
            src={avatar}
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};
export default BlogItem;