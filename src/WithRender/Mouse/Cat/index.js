import React from 'react';
function Cat(props) {
    const mouse = props.mouse
    return ( 
        <div>

            <img style={{ position: 'absolute', left: mouse.x, top: mouse.y }} src = "https://thumbs.gfycat.com/NeglectedWideBuckeyebutterfly.webp"/>
        </div>
     );
}

export default Cat;