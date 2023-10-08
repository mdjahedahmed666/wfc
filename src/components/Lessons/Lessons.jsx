import { useEffect, useState } from "react";
import LessonCard from "../LessonCard/LessonCard";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    fetch("yogaData.json")
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-32 my-10">
      <div>
        <h2 className="text-center mb-5 text-3xl">Lesson we provide</h2>
        <p className="mb-6 text-center">
          We train our client with high standard, you will feel calm and quiet
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/4 text-blue-600 mb-8">
          <hr className="w-1/3 text-2xl mx-auto" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson}></LessonCard>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
