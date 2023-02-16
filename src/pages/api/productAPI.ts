import { IProduct } from "../../interfaces";
import axios, { AxiosResponse } from "axios";
import { baseURL } from "../../constants";

export const api = axios.create({
  baseURL,
});

export const listProducts = async (page: number, limit: number) => {
  try {
    const { data }: AxiosResponse = await api.get<IProduct>(
      `produto/lista?page=${page}&limit=${limit}`
    );
    return data;
  } catch (error) {
    return error;
  }
};
