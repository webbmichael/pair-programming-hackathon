import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./DinderCard.scss";

function DinderCard() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://cdn.vox-cdn.com/thumbor/wDvmcj9eEin57A1Nww0yBM1jASc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22386618/1229901940.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&fit=crop",
    },

    {
      name: "Mark Zuckerburg",
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-944363520-1523442806.jpg",
    },
  ]);

  return (
    <div>
      <h1>Dinder Cards</h1>
      <div className="TinderCardContainder">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div style={{ backgroundImage: `url(${person.url})` }} class="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default DinderCard;
