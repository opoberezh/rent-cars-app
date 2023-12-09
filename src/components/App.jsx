import { Route,  Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Favorites from "./Pages/Favorit";
import Nav  from "./Nav/Nav";



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