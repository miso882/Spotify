import Artistes from "../components/artiste";
import Footer from "../components/footer";
import Topbar from "../components/topbar";
import Navicationbar from "../components/navbar";

const Artiste = () => {

    return (
        <div className="flex">
            <Navicationbar />
            <div>
            <Topbar />
            <Artistes />
            <Footer />
            </div>
        </div>
    )
} 

export default Artiste;