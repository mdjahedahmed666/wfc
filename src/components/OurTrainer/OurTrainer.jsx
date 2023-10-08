import { useEffect, useState } from "react";
import TrainerCard from "../TrainerCard/TrainerCard";


const OurTrainer = () => {
    const [trainer, setTrainer] = useState([]);
  useEffect(()=>{
    fetch('/yogaData.json')
    .then(res => res.json())
    .then(data => setTrainer(data))
    
  },[])
  return (
    <div className="container mx-auto px-4 md:px-32 my-10">
        <div>
        <h2 className="text-center mb-4 text-3xl">Our Trainer</h2>
        <p className="mb-2 text-center">You can choose your trainer. All of them are very professional</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/4 text-blue-600 mb-8">
          <hr className="w-1/3 text-2xl mx-auto" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {trainer.map((trainer,index) =><TrainerCard key={index} trainer={trainer}></TrainerCard>)}
      </div>
        
    </div>
  )
}

export default OurTrainer