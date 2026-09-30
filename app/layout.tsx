import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-4 px-6 py-4 border-b border-slate-200">
          <Link href="/" className="px-3 py-2 rounded-md hover:bg-slate-100 font-medium">
            Home
          </Link>
          <Link href="/courses" className="px-3 py-2 rounded-md hover:bg-slate-100 font-medium">
            Courses
          </Link>
          <Link href="/about" className="px-3 py-2 rounded-md hover:bg-slate-100 font-medium">
            About
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}