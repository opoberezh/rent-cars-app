import { Route,  Routes } from "react-router-dom";
import  AppLayout  from "./AppLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorit";
import Nav  from "../components/Nav/Nav";



 const App = () => {
  return (

    <>
         <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Nav to="/" />} />
        </Route>
      </Routes>
    </>
     );
};
export default App;