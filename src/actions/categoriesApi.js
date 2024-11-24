import axios from "@/utls/axios.config";

export const getCategories = async () => {
  const res = await axios.get(`/hero-categories`);

  return res;
};
