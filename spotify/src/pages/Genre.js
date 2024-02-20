import Genres from '../components/genres';
import Footer from "../components/footer";
import Topbar from "../components/topbar";
import Navicationbar from "../components/navbar";

const Genre = () => {

    return (
        <div className="flex">
            <Navicationbar />
            <div>
            <Topbar />
            <Genres />
            <Footer />
            </div>
        </div>  
    )
} 

export default Genre;