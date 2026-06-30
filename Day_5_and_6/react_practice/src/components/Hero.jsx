import React from 'react'

const Hero = () => {
  return (
    <section className="h-full">
  <div className="flex h-full items-center">
    {/* Left */}
    <div className="flex flex-col justify-around h-full  gap-18">
      <div className="main-text">
        <h1 className="text-8xl font-bold uppercase font-mono tracking-widE">Porsche 911</h1>
        <p className="text-2xl font-light tracking-wide">Sports Car Together</p>
      </div>
      <div className="middle-text">
        <p className="text-lg tracking-wide font-extraight">Sports Car with The World's Best Quality <br/>and Performance</p>
      </div>
      <div className="lower-button">
        <button type="button" className="border-2 px-10 py-3 rounded-lg text-lg">check the prices</button>
      </div>
    </div>

    {/* Right */}
    <div>
      ...
    </div>
  </div>

  {/* Slider */}
  <div>
    ...
  </div>
</section>
  )
}

export default Hero