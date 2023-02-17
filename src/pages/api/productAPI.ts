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

export const listProductsIframe = async (page: number, limit: number, idsToExclude: Array<number>) => {
  try {
    const { data }: AxiosResponse = await api.post<IProduct>(
      `produto/lista-iframe?page=${page}&limit=${limit}`, {
        idsToExclude
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const listProductsByTitle = async (page: number, limit: number, title: string) => {
  try {
    const { data }: AxiosResponse = await api.post<IProduct>(
      `produto/lista-titulo?page=${page}&limit=${limit}`, {
        title
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};