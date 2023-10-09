import { useEffect, useState } from "react";

const BookedLesson = () => {
  const [bookedLesson, setBookedLesson] = useState([]);

  useEffect(() => {
    const storedBookedLesson =
      JSON.parse(localStorage.getItem("bookedLesson")) || [];
    setBookedLesson(storedBookedLesson);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 ">
      <div className="mt-10">
        <h2 className="text-center mb-10 text-2xl font-bold">Your lesson</h2>
      </div>
      <div className="grid lg:grid-cols-3 mb-14 gap-4">
        {bookedLesson.map((lesson, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl image-full mb-4"
          >
            <figure>
              <img src={lesson.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{lesson.name}</h2>
              <p>{lesson.shortDescription}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Course</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedLesson;
