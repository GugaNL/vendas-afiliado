import { ICategory } from "../../interfaces";
import axios, { AxiosResponse } from "axios";
import { baseURL } from "../../constants";

export const api = axios.create({
  baseURL,
});

export const listCategories = async () => {
  try {
    const { data }: AxiosResponse = await api.get<ICategory>(
      "categoria/lista"
    );
    return data;
  } catch (error) {
    return error;
  }
};
