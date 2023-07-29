/*import React, { useEffect, useState } from "react";
import axios from "axios";*/
import Card from "./Card";
import { Film } from "./HeadTypes";

export default function Filmslist({ Films }) {
  return (
    <>
      <section className="bg-black text-white">
        <div className="ml-20 pb-20">
          <h1 className="text-4xl font-semibold pt-20">Categories</h1>
          <div className="flex mt-8 ">
            <button className="border-none bg-redflix p-2 rounded-full font-semibold pl-10 pr-10 mr-5">
              Action
            </button>
            <button className="border-none bg-redflix p-2 rounded-full font-semibold pl-10 pr-10 mr-5">
              Comedy
            </button>
            <button className="border-none bg-redflix p-2 rounded-full font-semibold pl-10 pr-10 mr-5">
              Thriller
            </button>
            <button className="border-none bg-redflix p-2 rounded-full font-semibold pl-10 pr-10 mr-5">
              Animation
            </button>
          </div>
          <div className="grid grid-cols-10 gap-4 mt-14 align-middle w-11/12">
            {Films.map((film:Film) =>
              film ? <Card key={film.id.toString()} film={film} /> : ""
            )}
          </div>
        </div>
      </section>
    </>
  );
}
