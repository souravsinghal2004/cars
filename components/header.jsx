import React from "react";
import { Button } from "./ui/button";
import { Heart, CarFront, Layout, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";
import { Home  } from "lucide-react";
const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
  <header className="fixed top-0 w-full bg-white z-50 border-b shadow-sm h-20 grid grid-cols-3">
  
    {/* Logo Section */}
    <div className="pl-28">
      <Link href={isAdminPage ? "/admin" : "/"} className="flex items-center space-x-4">
        <Image
  unoptimized
  src="/logo.png"
  alt="Wheel-Deal Logo"
  width={200}
  height={80}
  className="h-20 w-auto object-contain"
/>

        {isAdminPage && (
          <span className="text-xl font-bold text-black">Admin</span>
        )}
      </Link>
    </div>

{/* wheeldeal */}
<div className="flex justify-center items-center   px-6 py-4 ">
  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-purple-500 hover:to-yellow-400 text-transparent bg-clip-text transition-all duration-700 ease-in-out">
    🚗 WheelDeal
  </h1>
</div>



    {/* Action Buttons */}
    <div className="flex items-center space-x-2 sm:space-x-4 justify-end pr-5">
      {isAdminPage ? (
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <Home size={18} className="md:hidden" />
            <ArrowLeft size={18} className="hidden md:block" />
            <span className="hidden md:inline">Back to App</span>
          </Button>
        </Link>
      ) : (
        <SignedIn>
          {!isAdmin && (
            <Link href="/reservations" className="flex items-center gap-2">
              <Button variant="outline">
                <CarFront size={18} />
                <span className="hidden md:inline">My Reservations</span>
              </Button>
            </Link>
          )}
          <a href="/saved-cars">
            <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-900">
              <Heart size={18} />
              <span className="hidden md:inline">Saved Cars</span>
            </Button>
          </a>
          {isAdmin && (
            <Link href="/admin">
              <Button variant="outline" className="flex items-center gap-2">
                <Layout size={18} />
                <span className="hidden md:inline">Admin Portal</span>
              </Button>
            </Link>
          )}
        </SignedIn>
      )}

      <SignedOut>
        {!isAdminPage && (
          <SignInButton forceRedirectUrl="/">
            <Button variant="outline">Login</Button>
          </SignInButton>
        )}
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
          }}
        />
      </SignedIn>
    </div>
  
</header>

  );
};

export default Header;