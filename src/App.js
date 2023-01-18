import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
function App() {
  const [show, setshow] = useState(true);
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <>
      <button onClick={() => setshow(!show)}>click</button>
      <Sidebar show={show} setshow={setshow} isMobile={isMobile} />
    </>
  );
}

export default App;
