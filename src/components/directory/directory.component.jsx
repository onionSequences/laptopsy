import { useState } from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: "Office Laptops",
      imageUrl:
        "https://5.imimg.com/data5/NS/NJ/GLADMIN-47225094/hp-elitebook-x360-1020-g2-laptops-500x500.png",
      id: 1,
      linkUrl: "office-laptops",
    },
    {
      title: "Gaming Laptops",
      imageUrl:
        "https://i.pinimg.com/originals/d9/4b/9d/d94b9d1975cedb2ba8586ab49e72c1bf.png",
      id: 2,
      linkUrl: "gaming-laptops",
    },
    {
      title: "2-in-1 Laptops",
      imageUrl:
        "https://www.geckocovers.com/files/thumbnails/v20t10c1-4-keyboard.1000x1000x0.jpg",
      id: 3,
      linkUrl: "2-in-1-laptops",
    },
  ]);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
