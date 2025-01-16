const SearchBar = ({ search, setSearch }) => (
    <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."
        className="p-2 border rounded-md"
    />
);

export default SearchBar;
