import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = () => {
    const [query, setQuery] = useState(""); // Store user input
    const navigate = useNavigate(); // Use navigate hook

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent page reload
        if (!query.trim()) {
            alert("Please enter a movie name.");
            return; // Exit if the query is empty
        }

        // Pass the query to the search results page
        navigate(`/search-results?query=${encodeURIComponent(query)}`);

        // Clear the input field
        setQuery("");
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    );
};
//c
export default Search;
