import React from "react";
import CardProductDetail from "@/components/ui/card/CardProductDetail";
import { ProductType } from "@/lib/definition";

type PropsType = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ENDPOINT = "https://store.istad.co/api/products/";

async function getData(id: string) {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  return data;
}

const Page = async (props: PropsType) => {
  let data = await getData(props.params.id);
  return (
    <div className="relative w-full h-screen mt-[-80px] pt-[30px] flex justify-center items-center bg-gray-50">
      <CardProductDetail
        name={data.name}
        price={data.price}
        image={data.image}
        seller={data.seller}
        desc={data.desc}
      />
    </div>
  );
};

export default Page;