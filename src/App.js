import logo from './logo.svg';
import './App.css';
import Recette from "./components/Recette/Recette";
import DrawerAppBar from "./components/Menu/Menu"

const App = () => {
  return (
    <><DrawerAppBar></DrawerAppBar>
      <Recette></Recette>
    </>
  );
}

export default App;
