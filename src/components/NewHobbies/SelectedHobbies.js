import HobbieItem from "../HobbiesComponents/HobbieItem";
export default function SelectedHobbies(props) {
  return (
    <div>
      <HobbieItem papy={props.selectedItems} />
      <p>{props.selectedItems}</p>
    </div>
  );
}
