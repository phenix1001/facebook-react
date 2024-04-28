import React from "react"
import './Posts.css'
import Post from "./Post"
import SepLine from "../SepLine/SepLine"
import images from "./Images"
import FriendsSuggestions from "./FriendsSuggestions"

function Posts(){

    return(
        <>

            <Post 
                username='Asta愛.'
                userpfp={images.megumi1}
                date='52m'
                // vIcon='d-none'
                audience={images.earth}
                status={images.verified}
                post={images.opinion1}
                StReact={images.love}
                NdReact={images.haha}
                RdReact={images.care}
                reach='52'
                comments='3'
                shares='2'
                c_s='d-block'
            />

            <SepLine />

            <Post
                username='Cristiano Ronaldo'
                userpfp={images.ronaldo2}
                date='2d'
                audience={images.earth}
                status={images.verified}
                post={images.ronaldo2}
                StReact={images.like}
                NdReact={images.love}
                RdReact={images.care}
                reach='7.3M'
                comments='12.1K'
                shares='3K'
                c_s='d-block'
            />

            <SepLine />

            <Post
                username='Az Ossama'
                userpfp={images.levi9}
                date='1d'
                audience={images.earth}
                status={images.verified}
                post={images.tsrbisa1}
                StReact={images.haha}
                NdReact={images.care}
                RdReact={images.like}
                reach='27'
                comments='11'
                shares='4'
                c_s='d-block'
            />

            <SepLine />

            <Post
                username='Leo Messi'
                userpfp={images.messi1}
                date='28m'
                audience={images.earth}
                status={images.verified}
                post={images.messi2}
                StReact={images.like}
                NdReact={images.love}
                RdReact={images.haha}
                reach='143K'
                comments='1.3K'
                shares='2K'
                c_s='d-block'
            />

            <SepLine />

            <Post 
                username='Syc'
                userpfp={images.syc1}
                date='2h'
                audience={images.earth}
                status={images.verified}
                post={images.syc1}
                StReact={images.care}
                NdReact={images.love}
                RdReact={images.like}
                reach='4.3K'
                comments='1.2K'
                shares='134'
                c_s='d-block'
            />

            <SepLine />

            <Post 
                username='Kenji'
                userpfp={images.kishibe1}
                vIcon='d-none'
                date='2h'
                audience={images.earth}
                status={images.verified}
                post={images.jjk1}
                StReact={images.haha}
                NdReact={images.sad}
                RdReact={images.angry}
                reach='4.3K'
                comments='1.2K'
                shares='134'
                c_s='d-block'
            />

            <SepLine />

            <Post 
                username='Aymen Djeffal'
                userpfp={images.artisan2}
                date='14m'
                vIcon='d-none'
                audience={images.earth}
                status={images.verified}
                post={images.artisan1}
                StReact={images.love}
                NdReact={images.care}
                RdReact={images.haha}
                reach='2K'
                comments='102'
                shares='24'
                c_s='d-block'
            />

            <SepLine />

            <Post 
                username='Didin Clash'
                userpfp={images.didin1}
                date='50m'
                
                audience={images.earth}
                status={images.verified}
                post={images.didinchan}
                StReact={images.love}
                NdReact={images.care}
                RdReact={images.haha}
                reach='1.6K'
                comments='177'
                shares='54'
                c_s='d-block'
            />
        </>
    )
}

export default Posts
