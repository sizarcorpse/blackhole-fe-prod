import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

export const getSearchPage = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/search-page`
  );
  const data = await response.json();
  return data;
};

export const getHomePage = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const response = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/home-page`);
  const data = await response.json();
  return data;
};
export const getBlogPage = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const response = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/blog-page`);
  const data = await response.json();
  return data;
};
export const getPortfolioPage = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/portfolio-page`
  );
  const data = await response.json();
  return data;
};
