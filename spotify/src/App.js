import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import Artiste from './pages/Artiste';
import Albums from './pages/Album';
import DetailArtiste from './pages/DetailArtiste';
import DetailAlbum from './pages/DetailAlbum';
import Search from './pages/Search';
import Genre from './pages/Genre';
import DetailGenre from './pages/DetailGenre';

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/"
  },
  {
    element: <Artiste />,
    path: "/artists"
  },
  {
    element: <Albums />,
    path: "/albums"
  },
  {
    element: <DetailArtiste />,
    path: "/DetailArtiste/:id"
  },
  {
    element: <DetailAlbum />,
    path: "/DetailAlbum/:id"
  },
  {
    element: <Genre />,
    path: "/genres"
  },
  {
    element: <DetailGenre />,
    path: "/DetailGenre/:id",
  },
{
  element: <Search />,
  path: "/search"
},



]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;