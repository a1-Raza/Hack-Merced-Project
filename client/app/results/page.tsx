import React from 'react'
import Image from 'next/image'

export default function Results() {
  return (
    <>

    <div>
        <Image src="https://i.imgur.com/LLcSfJ7.jpeg"
            alt="Earth Engine Image" width={500} height={500}></Image>
    </div>

    <div>
        <Image src="https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/thumbnails/9bf6d9a64ebf8bc75e056589c53f8d19-e3171f791f0cd7cd25e7f944bae65c73:getPixels"
            alt="Earth Engine Image" width={500} height={500}></Image>
    </div>

    </>
  )
}