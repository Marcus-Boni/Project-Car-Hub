"use client";

import Image from "next/image";
import { SearchButton } from "./SearchButton";
import { SearchManufacturer } from "./SearchManufacturer";

import { useManufacturer } from "./hooks";

export const SearchBar = () => {
  const { manufacturer, setManufacturer, handleSearch, model, setModel } =
    useManufacturer();
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute ml-4 h-[20px] w-[20px]"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};
