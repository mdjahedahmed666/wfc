
import { useLoaderData } from "react-router-dom";

const Timetable = () => {
  const lessonData = useLoaderData();
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
            {lessonData.map((l, index) => (
              <tr key={index}>
                <th>{l.id}</th>
                <td>{l.name}</td>
                <td>{l.day}</td>
                <td>{l.creditDuration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
