import { OptionProps } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

export const useFilter = (options: OptionProps[]) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (
    e: { title: string; value: string },
    title: string
  ) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName, { scroll: false });
  };

  return {
    selected,
    setSelected,
    handleUpdateParams
  };
};
