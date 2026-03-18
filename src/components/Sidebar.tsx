import type { Recipe } from "../types/recipe";

const Sidebar = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-6">
        Tasty Recipes
      </h2>
      {recipes.slice(0, 5).map((recipe) => (
        <div key={recipe.id} className="flex gap-3 mb-4 items-center">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-16 h-16 object-cover rounded-lg"
          />

          <p className="text-sm font-medium leading-tight">
            {recipe.name}
          </p>
        </div>
      ))}

      <div className="mt-10 relative rounded-2xl overflow-hidden h-[260px]">
        <img
          src="/image/Mask.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white font-semibold text-center w-[80%] text-sm md:text-base">
          Don't forget to eat healthy food
        </p>
        <img
          src="/image/01.png"
          alt=""
          className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-40"
        />
      </div>
    </div>
  );
};

export default Sidebar;