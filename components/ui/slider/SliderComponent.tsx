"use client";

import { Carousel } from "flowbite-react";
import React from "react";

export default function SliderComponent() {
  return (
    <div className="h-full sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
      <Carousel
        className="h-full"
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        <div className="flex h-full items-center justify-center bg-[url('https://i.pinimg.com/564x/f4/69/c5/f469c5247cba80f5a23b2cae7a5c8093.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="flex h-full items-center justify-center bg-[url('https://i.pinimg.com/736x/e7/b8/16/e7b8165d5762409d496970db90724d85.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="flex h-full items-center justify-center bg-[url('https://i.pinimg.com/564x/b7/22/fa/b722fa76d90115071fdee96f27250416.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="flex h-full items-center justify-center bg-[url('https://i.pinimg.com/564x/54/9d/11/549d11e876cc5e1409573367bebbb91b.jpg')] bg-cover bg-center bg-no-repeat"></div>
      </Carousel>
    </div>
  );
}
