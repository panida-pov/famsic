import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import SignIn from "../components/SignIn/SignIn";
import Playlists from "../components/Playlists/Playlists";
import CreatePlaylist from "../components/CreatePlaylist/CreatePlaylist"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>} >
    <Route index element={<Playlists/>}></Route>
    <Route path="create-playlist" element={<CreatePlaylist/>}></Route>
    <Route path="sign-in" element={<SignIn/>}></Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
