import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import SignIn from "../components/SignIn/SignIn";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>} >
    <Route index element={<SignIn/>}></Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
