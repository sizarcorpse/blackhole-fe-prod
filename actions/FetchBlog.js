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
    `${publicRuntimeConfig.ROOT_API_URL}/categories/list`
  );
  const data = await response.json();
  return data;
};

export const getCategoryDetails = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const category = context.query.slug;
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/categories/${category}`
  );
  const data = await response.json();
  return data;
};

export const getASingleBlogPost = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const slug = context.query.slug;
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/blogs?slug=${slug}`
  );
  const data = await response.json();

  return data[0];
};

export const getBlogPostsBySearch = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const slug = context.query.slug;
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/blogs?title_contains=${slug}&_sort=commentsCount:DESC&_limit=12`
  );
  const data = await response.json();

  return data;
};

export const getBlogShownInHome = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/blogs?showOnHome=true`
  );
  const data = await response.json();
  return data;
};
