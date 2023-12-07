import './Nav3.css'
import { Link } from 'react-router-dom';


import images from "./Images";

function Nav3(){

    return(
        <div className="nav-3">
            <button style={{backgroundImage:`url(${images.megumi1})`}}></button>
            <button>What's on your mind?</button>
            <button style={{backgroundImage:`url(${images.addpic})`}}></button>
        </div>
    )
}

export default Nav3