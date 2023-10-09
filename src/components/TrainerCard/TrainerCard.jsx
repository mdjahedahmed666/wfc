import { FaFacebook,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa';

const TrainerCard = ({trainer}) => {
    const {trainerName,trainerPhotoURL,name} = trainer;
  return (
    <div>
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-48">
    <img src={trainerPhotoURL} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{trainerName}</h2>
    <p>He is the trainer of {name}</p>
    <div className="card-actions text-xl gap-4">
    <FaFacebook/>
    <FaInstagram/>
    <FaTwitter/>
    <FaYoutube/>
    </div>
  </div>
</div>
    </div>
  )
}

export default TrainerCard