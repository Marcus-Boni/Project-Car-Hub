"use client";

import { ShowMoreProps } from "@/types";
import { useNavigation } from "./hooks";
import { CustomButton } from "./CustomButton";

export const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const { handleNavigation } = useNavigation(pageNumber);

  return (
    <div className="flex-center mt-10 w-full gap-5 ">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
