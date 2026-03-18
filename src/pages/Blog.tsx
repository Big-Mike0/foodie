import { useEffect, useState } from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "../components/navbar";
import SearchBar from "../components/search-panel";
import BlogItem from "../components/BlogItem";
import Sidebar from "../components/Sidebar";
import type { Recipe } from "../types/recipe";

const Blog = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setError("Failed to load recipes");
        setLoading(false);
      });
  }, []);

  const filtered = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filtered.slice(startIndex, endIndex);

  return (
    <div>
      <Navbar />

      <div className="text-center mt-10 px-4">
        <h1 className="text-4xl font-bold">Blog & Article</h1>
        <p className="text-gray-500 mt-2">
          Discover delicious recipes and food inspiration
        </p>

        <div className="mt-6">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-8">Loading recipes...</div>
          ) : filtered.length > 0 ? (
            <>
              {currentItems.map((recipe) => (
                <BlogItem key={recipe.id} recipe={recipe} />
              ))}
              {totalPages > 1 && (
                <div className="flex justify-end items-center gap-2 mt-12 mb-8">
                  <button
                    onClick={() =>
                      setCurrentPage(Math.max(1, currentPage - 1))
                    }
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border text-gray-600 disabled:opacity-40"
                  >
                    ‹
                  </button>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .slice(
                        Math.max(0, currentPage - 3),
                        Math.min(totalPages, currentPage + 2)
                      )
                      .map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg border flex items-center justify-center text-sm transition ${
                            currentPage === page
                              ? "bg-black text-white border-black"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    {currentPage + 2 < totalPages && (
                      <span className="px-2 text-gray-500">...</span>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      setCurrentPage(
                        Math.min(totalPages, currentPage + 1)
                      )
                    }
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border text-gray-600 disabled:opacity-40"
                  >
                    ›
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">No recipes found</div>
          )}
        </div>
        <Sidebar recipes={recipes} />
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-20 mb-16">
        <div className="bg-[#E7F3F5] rounded-3xl p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Deliciousness to your inbox
          </h2>

          <p className="text-gray-500 max-w-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim
          </p>
          <div className="flex w-full max-w-md bg-white rounded-full overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-1 px-4 py-3 outline-none text-sm"
            />
            <button className="bg-black text-white px-6 text-sm">
              Subscribe
            </button>
          </div>
          <img
            src="/image/plate.png"
            alt=""
            className="absolute left-0 bottom-0 w-32 hidden md:block"
          />
          <img
            src="/image/Photo-plate.png"
            alt=""
            className="absolute right-0 bottom-0 w-32 hidden md:block"
          />
        </div>
      </div>

      <div className="pt-20" />

      <div className="relative">
        <img
          src="/image/Foodieland..png"
          alt="Foodieland"
          className="h-6 w-auto position absolute bottom-16 z-10 left-4"
        />

        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-end gap-6">
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetuipiscing elit,
          </p>
          <nav className="flex items-center gap-8 text-sm text-gray-700 font-medium ml-auto mr-6">
            <a href="#" className="hover:text-black transition">Recipes</a>
            <a href="#" className="hover:text-black transition">Blog</a>
            <a href="#" className="hover:text-black transition">Contact</a>
            <a href="#" className="hover:text-black transition">About us</a>
          </nav>
        </div>
      </div>

    </div>
  );
};

export default Blog;