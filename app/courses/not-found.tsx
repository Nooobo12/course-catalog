import Link from "next/link";

export default function CourseNotFound() {
  return (
    <div className="py-12 text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Course not found</h2>
      <p className="text-gray-600">The course you are looking for does not exist.</p>
      <Link
        href="/courses"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
      >
        Back to Courses
      </Link>
    </div>
  );
}