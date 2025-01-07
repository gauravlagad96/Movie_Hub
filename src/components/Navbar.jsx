import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

    return (
        <nav className="text-white bg-gray-800 ">
            <div className="flex items-center justify-between p-4">
                {/* Logo */}
                <h1 className="text-lg font-bold">MovieDB</h1>

                {/* Hamburger Menu for Small Screens */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white sm:hidden focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12" // Close icon
                                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                            }
                        />
                    </svg>
                </button>

                {/* Links for Larger Screens */}
                <div className="hidden gap-4 sm:flex">
                    <Link to="/" className="hover:underline">
                        Popular
                    </Link>
                    <Link to="/top-rated" className="hover:underline">
                        Top Rated
                    </Link>
                    <Link to="/upcoming" className="hover:underline">
                        Upcoming
                    </Link>
                </div>

                {/* Search Component */}
                <div className="hidden sm:block">
                    <Search />
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="flex flex-col gap-4 p-4 bg-gray-700 sm:hidden">
                    <Link
                        to="/"
                        className="hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Popular
                    </Link>
                    <Link
                        to="/top-rated"
                        className="hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Top Rated
                    </Link>
                    <Link
                        to="/upcoming"
                        className="hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Upcoming
                    </Link>
                    <Search />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
