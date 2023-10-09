import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image, description, date, largeDescription, source } = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-72">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>
            {description}{" "}
            <span>
              <Link
                className="text-blue-500 text-lg"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                see more..
              </Link>
            </span>
          </p>
          <div className="card-actions text-xl gap-4">
            <p>{date}</p>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{largeDescription}</p>
          <p>
            Source: <span>{source}</span>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NewsCard;
