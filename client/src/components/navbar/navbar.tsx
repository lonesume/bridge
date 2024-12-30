import { SignedIn, UserButton, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-0">
      <nav className="fixed top-0 left-0 right-0 w-full px-10 py-5 flex justify-between items-center z-10 bg-transparent">
        <Link to="/" className="text-white text-2xl font-sans no-underline">
          Bridge
        </Link>

        {/* Hamburger menu button - only visible on mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/about"
            className="text-white no-underline hover:text-gray-200"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="text-white no-underline hover:text-gray-200"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-white no-underline hover:text-gray-200"
          >
            Contact
          </Link>

          <SignedIn>
            <Link
              to="/chat"
              className="text-white no-underline hover:text-gray-200"
            >
              Chat
            </Link>
            <div className="h-8">
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Link
              to="/sign-in"
              className="text-white no-underline hover:text-gray-200"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="text-white no-underline hover:text-gray-200"
            >
              Sign Up
            </Link>
          </SignedOut>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm py-4">
            <div className="flex flex-col items-center gap-4">
              <Link
                to="/about"
                className="text-white no-underline hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="text-white no-underline hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-white no-underline hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <SignedIn>
                <Link
                  to="/chat"
                  className="text-white no-underline hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Chat
                </Link>
                <div className="h-8">
                  <UserButton />
                </div>
              </SignedIn>
              <SignedOut>
                <Link
                  to="/sign-in"
                  className="text-white no-underline hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="text-white no-underline hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </SignedOut>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
