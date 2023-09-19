import Properties from "../../components/Properties/Properties"
import Featured from "../../components/featured/Featured"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Brows by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <Properties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home