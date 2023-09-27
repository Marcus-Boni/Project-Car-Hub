import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

export const useNavigation = (pageNumber: number) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", String(newLimit));

    router.push(newPathName, { scroll: false });
  };

  return { router, handleNavigation };
};
