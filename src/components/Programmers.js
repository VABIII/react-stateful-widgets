/*
PROGRAMMERS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif

This component keeps track of a list of pioneers in the field of programming on the one hand,
and the id of the currently featured programmer on the other. That's two slices of state!
We can only feature one awesome programmer at a time.

Find comments below to help you along.
*/

import React, { useState } from 'react';

// Use this variable ONLY to initialize a slice of state!
// There is something in the JSX right now breaking this rule...
export const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
];

export default function Programmers() {
    const [programmers, set_programmers] = useState("");
    const [programmers_list, set_programmers_list] = useState(listOfAwesome)

  const getNameOfFeatured = () => {
    // Leave this for last!
    // This is NOT an event handler but a helper function. See its usage inside the JSX.
    // It's going to utilize both slices of state to return the _name_ of the featured dev.
    // The beauty of closures is that we can "see" both slices of state from this region
    // of the program, without needing to inject the information through arguments.
    return programmers.name

  };

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: !programmers ? "royalblue" : "gold"
  };

  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {
          programmers_list.map((dev, i) =>

            <div className='programmer' key={dev.id}>
                {/*{console.log(dev, i)}*/}
              {dev.name} <button onClick={() => set_programmers(dev)  }>Feature</button>

            </div>
          )
        }
      </div>
        {console.log(programmers)}
      <div id='featured' style={style}>
        {
            programmers ? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳` : 'Pick an awesome programmer'
        }
      </div>
    </div>
  );
}
