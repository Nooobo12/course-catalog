import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Available Courses</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}