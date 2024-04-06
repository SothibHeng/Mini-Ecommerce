'use client'

import { configuration } from "@/components/flowbite-config";
import CardProductComponent from "@/components/ui/card/CardProduct";
import { ProductType } from "@/lib/definition";
import { Pagination } from "flowbite-react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const baseUrl = "https://store.istad.co/api/products/";

export default function Home() {

  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10); // Default per page value
  const router = useRouter();

  useEffect(() => {
    fetchProducts(baseUrl + `?page=${currentPage}&page_size=${perPage}`);
  }, [currentPage, perPage]);

  const fetchProducts = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProducts(data.results);
      setTotalPages(Math.ceil(data.total / perPage));
    } catch (error) {
      console.error(error);
    }
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <main className="">
      <div className="max-w-screen-xl h-96 mx-auto flex justify-between">
        <div className="w-[800px] h-full">
          <h1 className="text-5xl font-semibold text-center mt-36">Finding the coolest product here with Amazom</h1>
          
        </div>
        <div className="w-[460px] h-full grid place-content-center">
          <img className="w-[300px]" src="jacket.png" alt="" />
        </div>
      </div>

      {/* fetch data */}
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-100">
      {/* <div className="w-full  flex flex-row justify-center mt-2">
        <h1 className="p-10 mt-6 text-2xl font-bold">All product</h1>
      </div> */}
      <div className="h-auto py-4 px-2  w-[90%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-12">
        {products.map((product: any, index: number) => (
          <CardProductComponent
            key={index}
            onClick={() => router.push(`/${product.id}`)}
            name={product.name}
            image={product.image}
            price={product.price}
          />         
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center my-4 p-10">
        <Pagination
          theme={configuration.pagination}
          layout="pagination"
          className="h-[40px]"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
        <div className="flex items-center mx-0 md:mx-4 mt-4">
          <label htmlFor="perPage" className="mr-2 text-gray-500">
            Carts:
          </label>
          <select
            className="rounded-xl h-[40px]"
            id="perPage"
            value={perPage}
            onChange={handlePerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
    </div>
    </main>
  );
}

