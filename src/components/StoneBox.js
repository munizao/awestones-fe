import React from 'react';
// const stoneIcons = [];

function importAll(r) {
  return r.keys().map(r);
}

const stoneIconSrcs = importAll(require.context('../assets', false, /stone[0-5]\.svg$/));
console.log(stoneIconSrcs);

// [...Array(6).keys()].forEach(n => {
//   require('stone' + n + '.svg').then(icon => {
//     stoneIcons.push(icon);
//   })
// });

// import stone0 from '../assets/stone0.svg';

const StoneBox = (props) => {
  return (
    <div>
      {props.children}
      <ul>
        {props.stones.map((stone, i) => 
          <li key={i}>
            {stone} × <img src={stoneIconSrcs[i]} alt={"TODO"}/>
          </li>
        )}
      </ul>
    </div>
  );
}

export default StoneBox;