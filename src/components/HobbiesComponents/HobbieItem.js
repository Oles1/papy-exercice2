import "./HobbieItem.css";
import Card from "../UI/Card";
import { useState } from "react";

/* HobbieItem will need to access id, Title for label and Description for <p> */
/* Need to pass the input Value to the array collection */
const HobbieItem = (props) => {
  const [selectedItems, setSelectedItems] = useState([]);
  function inputClickHandler(e) {
    // console.log(props.id);
    const { value, checked } = e.target;
    // console.log("value: " + value);

    //adapted from https://www.youtube.com/watch?v=YTE2YcBR098

    if (checked) {
      setSelectedItems((pre) => {
        return [...pre, value];
      });

      // return selectedItems;
    } else {
      setSelectedItems((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(selectedItems);
    };
  }
  console.log(selectedItems);
  return (
    <Card className="hobbieItem">
      <input
        type="checkbox"
        id={props.id}
        name={props.title}
        value={props.title}
        onChange={inputClickHandler}
      />
      <label htmlFor={props.id}>{props.title}</label>
      <p>{props.description}</p>
    </Card>
  );
};
export default HobbieItem;
//ressource:
//https://www.javatpoint.com/how-to-get-all-checked-checkbox-value-in-javascript
