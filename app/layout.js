import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets:['latin']});

export const metadata = {
  title: "cars",
  description: "Find Your Dream Car",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} `}
      >

   <Header/>
        <main className="min-h-screen">{children}</main>

        <footer className="bg-blue-50 py-12 ">
          <div className="mx-auto px-4 text-center  container text-gray-600">
            <p>    Made with ❤️ by Sourav Singhal</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
