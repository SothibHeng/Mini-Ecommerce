"use client";

import { Card } from "flowbite-react";
type PropsType = {
  name: string;
  image: string;
  price: number;
  desc: string;
  seller: string;
};
export default function Component({
  name,
  image,
  price,
  desc,
  seller,
}: PropsType) {
  return (
    <section className="w-[800px] h-[400px] bg-pink-700 grid grid-cols-1 lg:grid-cols-2 place-items-center rounded-lg p-8">
      <img
        src={image}
        alt={name}
        className="mx-auto h-full object-cover object-center overflow-hidden"
      />
      <div className="text-center">
        <h5 className="text-2xl font-semibold text-gray-100 dark:text-gray-800">
          {name}
        </h5>
        <p className="mt-4 text-gray-200 dark:text-gray-800">{desc}</p>
      </div>
    </section>
  );
}