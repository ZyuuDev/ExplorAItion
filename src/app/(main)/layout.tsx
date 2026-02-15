"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLessonPage = pathname === "/lesson";

  return (
    <div className="flex flex-col min-h-screen">
      {!isLessonPage && <Navbar />}
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
