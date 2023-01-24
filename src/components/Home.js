import { createContext, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card/Card";
import Draggable from "react-draggable";
import { useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import  AddCard  from "./AddCard";

export const ThemeContext = createContext(null);
function Home() {
  const [show, setshow] = useState(true);
  const [freeMode, setfreeMode] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [showAddCard,setShowAddCard] = useState(false);
  const [currentId, setcurrentId] = useState(null)
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
   
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div  className="Wrap" id={theme}>
      <Navbar isMobile={isMobile} show={show} setshow={setshow}
      toggleTheme={toggleTheme} theme={theme}
        />
      <Sidebar
        show={show}
        setshow={setshow}
        isMobile={isMobile}
        setfreeMode={setfreeMode}
        mode={freeMode}
      />
      <div className="Main">
      <Card isMobile={isMobile} show={show} free={freeMode} setShowAddCard={setShowAddCard} currentId={currentId} setcurrentId={setcurrentId}/>
      </div>
      <AddCard showAddCard={showAddCard} setShowAddCard={setShowAddCard} currentId={currentId} setcurrentId={setcurrentId}/>
      <div className="add" onClick={()=>setShowAddCard(true)}>
         <span >+</span>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default Home;
