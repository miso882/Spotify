import Artistes from "../components/artiste";
import Footer from "../components/footer";
import Topbar from "../components/topbar";
import Navicationbar from "../components/navbar";
import Album from "../components/album";

const Albums = () => {

    return (
        <div className="flex">
            <Navicationbar />
            <div>
            <Topbar />
            <Album />
            <Footer />
            </div>
        </div>
    )
} 

export default Albums;