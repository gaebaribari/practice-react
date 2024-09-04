import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = useState({
        x:0,
        y:0
    });

    const getPosition = (e)=>{
        setPosition({
            x:e.clientX,
            y:e.clientY,
        })
        console.log(position);
    };

  return (
    <div className='container' onMouseMove={getPosition}>
      <div className='pointer' style={{left:position.x,top:position.y}}/>
    </div>
  );
}


/*
그걸 받아와
setPosition으로 pointer인 애도 그렇게 해  
 */