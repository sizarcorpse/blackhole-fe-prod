import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

export const getAllBlogPosts = async ({ context, page, limit }) => {
  const { publicRuntimeConfig } = getConfig();
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/blogs/page?_page=${page}&_limit=${limit}`
  );
  const data = await response.json();
  return data;
};

export const getCategoryList = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/category/list`
  );
  const data = await response.json();
  return data;
};
