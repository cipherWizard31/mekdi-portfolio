import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/Navbar/Navbar";
// import Footer from "./Footer/Footer"

export const metadata: Metadata = {
  title: "Mekdes Habte | Portfolio",
  description: "Created by Natan Yidnekachew",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen overflow-x-hidden">
        <NavBar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
