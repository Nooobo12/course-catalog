import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to the Course Catalog</h1>
      <p className="text-lg text-gray-600">
        Explore our comprehensive curriculum built for Advanced Web Technologies.
      </p>
      <div>
        <Link
          href="/courses"
          className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}