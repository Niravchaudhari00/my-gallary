import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import About from "./page/about/About";
import Blog from "./page/blog/Blog";
import Category from "./page/blog/Category";
import Tags from "./page/blog/Tags";

function App() {
  const { fetchPost, loading } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const getLocationPathName = (pathName: string[]) => {
    return pathName[location.pathname.split("/").length - 1].replace("-", " ");
  };

  useEffect(() => {
    const page = Number(searchParams.get("page")) ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = getLocationPathName(location.pathname.split("/"));
      fetchPost(page, tag);
    } else if (location.pathname.includes("categories")) {
      const category = getLocationPathName(location.pathname.split("/"));
      fetchPost(page, null, category);
    } else {
      fetchPost(page);
    }
  }, [location.pathname, location.search]);

  return (
    <>
      <LoadingBar color={"#f11946"} progress={loading} />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/tags/:tag" element={<Tags />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
