import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const LessonDetails = () => {
  const [lesson, setLesson] = useState({});
  const { id } = useParams();
  const lessonData = useLoaderData();

  useEffect(() => {
    const lessonMatched = lessonData.find((lesson) => lesson.id === Number(id));
    setLesson(lessonMatched);
    console.log(lessonMatched);
  }, [id, lessonData]);

  const handleBook = () => {
    Swal.fire({
      title: "Lesson Booked",
      text: "Successfully Book the lesson",
      icon: "Success",
      confirmButtonText: "ok",
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="container mx-auto px-4 md:px-10">
        <div className="card-body px-10 mx-10">
          <h2 className="card-title">{lesson.name}</h2>
          <p>{lesson.shortDescription}</p>
        </div>
        <figure>
          <img className="w-3/4 h-[500px]" src={lesson.image} alt="Shoes" />
        </figure>
        <div>
          <p className="mt-6 p-10 m-10">{lesson.largeDescription}</p>
        </div>
        <div className="mx-10 px-10 mb-10">
          <h3 className="mx-10 px-10 text-2xl">
            Lesson Availavility
          </h3>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Day</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{lesson.name}</td>
                  <td>{lesson.day}</td>
                  <td>{lesson.creditDuration}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center">
        <Link onClick={handleBook} className="card-actions justify-center my-14 w-1/2">
          <button className="btn btn-primary w-full">Book Now</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
