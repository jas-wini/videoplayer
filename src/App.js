import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  
  return (
    <div>
      <CategoryProvider>
        <Home />
      </CategoryProvider>
    </div>
  );
}

export default App;
