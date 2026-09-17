import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
       <header className="bg-brand-dark text-white shadow-md">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex gap-6 font-medium">
      <Link href="/" className="hover:text-brand-yellow transition-colors">
       Home
      </Link>
       <Link href="/courses" className="hover:text-brand-yellow transition-colors">
      Courses
       </Link>
       <Link href="/about" className="hover:text-brand-yellow transition-colors">
      About
    </Link>
  </nav>
</header>
        <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}