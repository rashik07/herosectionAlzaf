import React from "react";
import Sidebar from "./_components/Sidebar";
import Slider from "./_components/Slider";
import { getCategories } from "@/actions/categoriesApi";

const page = async () => {
  const categories = await getCategories();

  return (
    <div className="flex">
      <Sidebar categories={categories?.data} />

      <Slider />
    </div>
  );
};

export default page;
