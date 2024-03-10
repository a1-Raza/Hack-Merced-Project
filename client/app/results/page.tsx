import React from 'react'
import Image from 'next/image'

import "./prompts.css";

export default function Results() {
  return (
    <>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <header>
        <h1>HackMerced IX</h1>
        <img src="/gold-orbit.png" alt="Globe picture" style={{ width: "100%", maxWidth: "60px", position: "absolute", top: "0", right: "65px", marginTop: "6px" }} />
      </header>

      <div id="promptText">
        Analysis Results
      </div>

      <div id="resultsItems">
        <div id="imageStack">
          <Image src="https://i.imgur.com/LLcSfJ7.jpeg"
            alt="Earth Engine Image" width={250} height={250}></Image>
          <Image src="https://i.imgur.com/LLcSfJ7.jpeg"
            alt="Earth Engine Image" width={250} height={250}></Image>
        </div>
        <div id="gptOutput">
          Jiohg hufhre jgg ewwupewu. hufew ijoef feuegeregr.
        </div>
      </div>
    </>
  )
}