import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import LatestNews from "../../components/LatestNews/LatestNews"
import Lessons from "../../components/Lessons/Lessons"
import OurTrainer from "../../components/OurTrainer/OurTrainer"


const Home = () => {
  return (
    <div>
      <Banner/>
      <Lessons/>
      <LatestNews/>
      <OurTrainer/>
      <Footer/>
    </div>
  )
}

export default Home