import { Link } from "react-router-dom";

const LessonCard = ({lesson}) => {
    const {id,name,image,price,shortDescription} = lesson;
  return (
    <div>
        <div className="card bg-base-100 shadow-xl">
  <figure className="rounded-none"><img  src={image} alt={name} /></figure>
  <div className="card-body">
    <h2 className="card-title font-semibold">{name}</h2>
    <p>{shortDescription}</p>
    <p>Price: ${price}</p>
    <Link to={`/lessonsDetails/${id}`} className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default LessonCard;