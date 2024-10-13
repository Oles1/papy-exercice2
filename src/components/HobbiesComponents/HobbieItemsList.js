import HobbieItem from "./HobbieItem";

export default function HobbieItemsList(props) {
  return (
    <div>
      <HobbieItem
        id={props.items[0].id}
        title={props.items[0].title}
        description={props.items[0].description}
      />
      <HobbieItem
        id={props.items[1].id}
        title={props.items[1].title}
        description={props.items[1].description}
      />
      <HobbieItem
        id={props.items[2].id}
        title={props.items[2].title}
        description={props.items[2].description}
      />
      <HobbieItem
        id={props.items[3].id}
        title={props.items[3].title}
        description={props.items[3].description}
      />
      <HobbieItem
        id={props.items[4].id}
        title={props.items[4].title}
        description={props.items[4].description}
      />
      <HobbieItem
        id={props.items[5].id}
        title={props.items[5].title}
        description={props.items[5].description}
      />
      <HobbieItem
        id={props.items[6].id}
        title={props.items[6].title}
        description={props.items[6].description}
      />
      <HobbieItem
        id={props.items[7].id}
        title={props.items[7].title}
        description={props.items[7].description}
      />
      <HobbieItem
        id={props.items[8].id}
        title={props.items[8].title}
        description={props.items[8].description}
      />
      <HobbieItem
        id={props.items[9].id}
        title={props.items[9].title}
        description={props.items[9].description}
      />
      {/* 
     I need to explore this code factoring later
      {props.items.map((hobbie) => (
        <div key={hobbie.id}>
          <label>
            <input type="checkbox" value={hobbie.title} /> {hobbie.title}
          </label>
          <p>{hobbie.description}</p>
          <hr></hr>
          <br />
        </div>
      ))} */}
    </div>
  );
}
