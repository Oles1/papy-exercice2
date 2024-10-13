// import HobbieItem from "./HobbieItem";
import "./HobbieForm.css";
import HobbieItemsList from "./HobbieItemsList";
import HobbieItem from "./HobbieItem";
import Card from "../UI/Card";
// import { useState } from "react";

export default function HobbieForm() {
  const hobbieList = [
    {
      id: "1",
      title: "Photography",
      description:
        "Capturing moments through a camera, whether it's landscapes, portraits, or street photography. It allows for creative expression and can be done anywhere.",
    },
    {
      id: "2",
      title: "Cooking/Baking",
      description:
        "Experimenting with recipes and creating delicious meals or baked goods. It's a practical hobby that can also be a fun way to explore different cultures through their cuisine.",
    },
    {
      id: "3",
      title: "Reading",
      description:
        "Immersing yourself in books, whether fiction or non-fiction. It's a great way to relax, learn new things, and expand your imagination",
    },
    {
      id: "4",
      title: "Hiking",
      description:
        "Exploring nature trails and enjoying the outdoors. It's a great way to stay fit and experience the beauty of nature.",
    },
    {
      id: "5",
      title: "Painting/Drawing",
      description:
        "Creating art using various mediums like watercolors, acrylics, or pencils. It's a wonderful way to express creativity and improve your artistic skills.",
    },
    {
      id: "6",
      title: "Knitting/Crocheting",
      description:
        "Crafting items like scarves, blankets, or sweaters using yarn. It's a calming activity that results in handmade, personalized items.",
    },
    {
      id: "7",
      title: "Playing a Musical Instrument",
      description:
        "Learning to play instruments like the guitar, piano, or violin. It's a fulfilling hobby that can also be a great way to entertain others.",
    },
    {
      id: "8",
      title: "Yoga",
      description:
        "Practicing physical postures, breathing exercises, and meditation. It promotes physical health, mental clarity, and relaxation.",
    },
    {
      id: "9",
      title: "Traveling",
      description:
        "Exploring new places, cultures, and cuisines. It broadens your perspective and provides unforgettable experiences.",
    },
    {
      id: "10",
      title: "Bird Watching",
      description:
        "Observing and identifying different bird species in their natural habitat. It's a peaceful hobby that can be done in your backyard or while traveling.",
    },
  ];
  //I will need to use map here to loop through the hobbieList array instead of manually like below

  // console.log(hobbieList.title);
  // const [title, setHobbie] = useState(hobbieList.title);

  const addHobbieHandler = (e) => {
    e.preventDefault();
    const sel = e;
    // const sel = e.selectedItems;
    console.log(sel);
  };

  return (
    <Card papy={HobbieItem}>
      <form className="hobbieForm card" onSubmit={addHobbieHandler}>
        <HobbieItemsList items={hobbieList} />
        <div className="button">
          <button type="submit">Add Hobbie</button>
        </div>
        <p></p>
      </form>
    </Card>
  );
}
