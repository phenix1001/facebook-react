import React from "react"
import './RequestsSection.css'
import Request from "./Request"

import images from "./Images"

function RequestsSection(){


    return(
        <div className="requests-section">
            <Request
                Username='Asta愛.'
                UserPfp={images.megumi1}
                Date='51m'
                Mtl1={images.ayanami1}
                Mtl2={images.cat}
                MtlCount='2'
            />

            <Request
                Username='Kuroi愛'
                UserPfp={images.cmGirl1}
                Date='1d'
                Mtl1={images.ayanami3}
                Mtl2={images.goku2}
                MtlCount='32'
            />

            <Request
                Username='Az Ossama'
                UserPfp={images.syc1}
                Date='2d'
                Mtl1={images.artisan1}
                Mtl2={images.floppus}
                MtlCount='27'
            />
            
            <Request
                Username='Didin Clash'
                UserPfp={images.didinchan}
                Date='1y'
                Mtl1={images.floppa1}
                Mtl2={images.cat}
                MtlCount='5'
            />

            <Request
                Username='Aymen Djeffal'
                UserPfp={images.artisan2}
                Date='4d'
                Mtl1={images.messi1}
                Mtl2={images.floppus}
                MtlCount='102'
            />

            <Request
                Username='Floppa'
                UserPfp={images.floppa1}
                Date='3d'
                Mtl1={images.ronaldo1}
                Mtl2={images.genos1}
                MtlCount='42'
            />

            <Request
                Username='Kaori'
                UserPfp={images.itadori1}
                Date='5m'
                Mtl1={images.cgarou1}
                Mtl2={images.eren1}
                MtlCount='21'
            />

        </div>
    )
}

export default RequestsSection