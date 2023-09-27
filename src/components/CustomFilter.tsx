"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { useFilter } from "./hooks";

export const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const { selected, setSelected, handleUpdateParams } = useFilter(options);
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e, title);
        }}
      >
        <div className="relative z-10 w-fit">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron up down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none px-4 py-2 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
