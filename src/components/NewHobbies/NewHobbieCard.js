import "./NewHobbieCard.css";
import SelectedHobbies from "./SelectedHobbies";

//this is where I react to user input. Want to enter value and save it.
//Inside of NewHobbieCard, I should have a SelectedNewHobbies component in which I pass all the selected hobbies. Instead of HobbieForm
const NewHobbie = (props) => {
  return (
    <div className="newHobbieCard">
      <SelectedHobbies papy={props.selectedItems} />
    </div>
  );
};
export default NewHobbie;
