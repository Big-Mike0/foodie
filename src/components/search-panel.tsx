interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex border rounded-full overflow-hidden w-full max-w-xl">
        <input
          type="text"
          placeholder="Search article, news or recipe..."
          className="flex-1 px-4 py-3 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="bg-black text-white px-6">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;