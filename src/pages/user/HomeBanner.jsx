import React from 'react'

export default function HomeBanner() {
  return (
    <div>
        <div className="carousel w-full h-80">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://www.rvrentacar.com/wp-content/uploads/2024/04/Untitled-design-10.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://onroadz.com/wp-content/uploads/2020/11/Self-Drive-Car-Offers.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://www.dollar.com/Images/1/9/8/%7B19828918-6976-4907-9343-2C6F210F6775%7D997EF5886468F3E677315D768E56C9282DEA66D469A6A937E31A33C2E3E5D829.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}

