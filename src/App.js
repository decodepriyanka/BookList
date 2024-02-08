import { Route, Routes } from "react-router-dom";
import "./App.css";

// layouts
import RootLayout from "./layouts/RootLayout";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

import Books from "./pages/Books/Books";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="books" element={<BooksLayout />}> */}
          <Route path="books" element={<Books />} />
          {/* </Route> */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
