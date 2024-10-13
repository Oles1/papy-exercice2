import { useState } from "react";

export default function Skills() {
  const [checkedValues, setValue] = useState([]);
  const handleChange = (event) => {
    const { value, checked } = event.target;
    // console.log(value);
    if (checked) {
      setValue((pre) => [...pre, value]);
    } else {
      setValue((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
    }
  };
  console.log(checkedValues);
  return (
    <div>
      <h1>Skills</h1>
      <input type="checkbox" value="PHP" onChange={handleChange} /> PHP
      <br />
      <input type="checkbox" value="JS" onChange={handleChange} /> JS
      <br />
      <input type="checkbox" value="React" onChange={handleChange} /> React
      <br />
      <input type="checkbox" value="Java" onChange={handleChange} /> Java
      <br />
    </div>
  );
}
