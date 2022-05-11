import React from 'react';

const DisplayBox = (props) => {
  const {allBoxes} = props
  return(
    <div>
      {
        allBoxes.map((box, index) => {
          return(
            <div key={index}
            //ading style to the boxes so they show
            style = {{        backgroundColor:box.color, 
              width: '100px', 
              height: '100px', 
              display:'inline-block'
            }}>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayBox;