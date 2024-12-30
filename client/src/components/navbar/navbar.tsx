import { SignedIn, UserButton, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="relative w-full h-0">
      <nav className="fixed top-0 left-0 right-0 w-full px-10 py-5 flex justify-between items-center z-10 bg-transparent">
        <Link to="/" className="text-white text-2xl font-sans no-underline">
          Bridge
        </Link>

        <div className="flex items-center gap-8">
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
      </nav>
    </div>
  );
}
