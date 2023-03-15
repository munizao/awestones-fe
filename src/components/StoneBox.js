import React from 'react';
import './StoneBox.css';
// const stoneIcons = [];

function importAll(r) {
  return r.keys().map(r);
}

const stoneIconSrcs = importAll(require.context('../assets', false, /stone[0-5]\.svg$/));
console.log(stoneIconSrcs);

const stoneIsMatch = (room, active, stone) => {
  if (room && room.state && active) {
    room.state.matches.forEach((matchStone) => {
      if (matchStone === stone) {
        return true;
      }
    });
  }
  return false;
}

const StoneBox = ({children, stones, room, active}) => {
  return (
    <div>
      {children}
      <ul className={"StoneList"}>
        {stones.map((stone, i) => 
          <li key={i}>
            {stone} × <img className={stoneIsMatch(room, active, i) ? "Match" : null} 
            onClick={() => {
              room.send("select-stone", i);
            }}
            src={stoneIconSrcs[i]} 
            alt={"TODO"}/>
          </li>
        )}
      </ul>
    </div>
  );
}

export default StoneBox;