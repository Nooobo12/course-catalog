import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 bg-white p-8 border border-gray-200 rounded-xl shadow-sm">
      <div className="space-y-2">
        <span className="text-sm bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium">
          {course.credits} Credits
        </span>
        <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
      </div>
      <p className="text-gray-700 text-lg">{course.description}</p>
      
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <LikeButton initialLikes={course.likes} />
      </div>
    </div>
  );
}