
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Timetable = (lesson) => {
  console.log(lesson);
  const lessonData = useLoaderData();
  const handleBook = () => {
    Swal.fire({
      title: "Lesson Booked",
      text: "Successfully booked the lesson",
      icon: "success",
      confirmButtonText: "Ok",
    });
    const existingLesson = JSON.parse(localStorage.getItem("bookedLesson")) || []
    const alreadyBooked = existingLesson.some((bookedLesson) => bookedLesson.id == lesson.id);
    if (!alreadyBooked){
existingLesson.push(lesson);
localStorage.setItem("bookedLesson", JSON.stringify(existingLesson));
    }
  };
  return (
    <div className="container mx-auto px-4 md:px-16 text-center mt-10">
      <h2 className="text-2xl font-bold">Lesson will be start every weekend at 9 o'clock in the morning</h2>
      <div className="overflow-x-auto mt-10 w-1/2 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Day</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            {lessonData.map((lesson, index) => (
              <tr onClick={() =>handleBook(lesson)} key={index}>
                <th>{lesson.id}</th>
                <td>{lesson.name}</td>
                <td>{lesson.day}</td>
                <td>{lesson.creditDuration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
