import { UserButton, useUser, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <img src="/logo-2.svg" alt="car logo" width={150} height={150} />

      <ul className="hidden md:flex gap-16">
        <Link to="/">
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Shop
          </li>
        </Link>
        <Link to="/contact">
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Contact
          </li>
        </Link>
      </ul>
      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Link to={"/profile"}>
            <Button>Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <SignInButton>
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
}

export default Header;
