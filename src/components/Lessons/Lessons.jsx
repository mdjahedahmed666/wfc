import { useEffect, useState } from "react"
import Lessoncard from "../LessonCard/Lessoncard";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  useEffect(()=>{
    fetch('yogaData.json')
    .then(res => res.json())
    .then(data => setLessons(data))
  },[])
  return (
    <div className="container mx-auto px-4 md:px-32 my-10">
      <div>
        <h2 className="text-center mb-4 text-3xl">All the lesson that we provide</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map(lesson =><Lessoncard key={lesson.id} lesson={lesson}></Lessoncard>)}
      </div>
    </div>
  )
}

export default Lessons