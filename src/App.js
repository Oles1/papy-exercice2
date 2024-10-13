import "./App.css";
import HobbieForm from "./components/HobbiesComponents/HobbieForm";
import Header from "./components/Header/Header";
import NewHobbieCard from "./components/NewHobbies/NewHobbieCard";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="App">
      <Header />
      <HobbieForm />
      {/* <NewHobbieCard /> */}
      {/* <Skills /> */}
    </div>
  );
}

export default App;
