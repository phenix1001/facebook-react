import React from "react";
import CreateStory from "./CreateStory";
import Story from "./Story";
import './Stories.css'

import images from "./Images";

function Stories(){

    return(
        <div className="scrollbar-x">
            <div className="stories-section">
                <CreateStory story={images.megumi1} />
                <Story userpfp={images.megumi1} username='Your story' story={images.nature1}/>
                <Story userpfp={images.ronaldo2} username='Ronaldo' story={images.ronaldo1}/>
                <Story userpfp={images.levi9} username='Ossama' story={images.musicsCover}/>
                <Story userpfp={images.itadori1} username='Kaori' story={images.weird1}/>
                <Story userpfp={images.genos1} username='Genos' story={images.opmanga3}/>
                <Story userpfp={images.floppa1} username='Floppa' story={images.makima1}/>
            </div>
        </div>
    )
}

export default Stories