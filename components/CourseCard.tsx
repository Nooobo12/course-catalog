import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-3"
    >
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
        <span className="text-sm bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
          {credits} credits
        </span>
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="text-sm text-gray-500 font-medium">
        ❤ {likes} likes
      </div>
    </Link>
  );
}