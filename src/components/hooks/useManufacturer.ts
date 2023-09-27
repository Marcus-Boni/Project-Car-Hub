import { useState, FormEvent } from "react";
import { manufacturers } from "../../constants";
import { useRouter } from "next/navigation";

export const useManufacturer = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [query, setQuery] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar!");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, {scroll: false});
  };

  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter(({ car }) =>
          car
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return {
    manufacturer,
    setManufacturer,
    handleSearch,
    query,
    setQuery,
    model,
    setModel,
    filteredManufactures
  };
};
