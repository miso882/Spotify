import Footer from "../components/footer";
import Navicationbar from "../components/navbar";
import Searchbar from "../components/search";
import Home from "../components/homepage";

const Search = () => {

    return (
        <div className="flex">
            <Navicationbar />
            <div>
            <Searchbar />
            <Home />
            <Footer />
            </div>
        </div>
    )
} 

export default Search;