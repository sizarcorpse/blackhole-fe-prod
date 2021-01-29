import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

export const getPortfolioShownInHome = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/portfolios?isShowedInHome=true`
  );
  const data = await response.json();

  return data;
};

export const getAllPortfolio = async ({ context, page, limit }) => {
  const { publicRuntimeConfig } = getConfig();
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/portfolios/page?_page=${page}&_limit=${limit}`
  );
  const data = await response.json();

  return data;
};

export const getPortfolioByTag = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const tag = context.query.slug;
  const page = context.query.page
    ? (context.query.page = context.query.page)
    : (context.query.page = 1);
  const limit = 2;

  console.log(context.query);

  const response = await fetch(
    `${
      publicRuntimeConfig.ROOT_API_URL
    }/tags/${tag}?_page=${+page}&_limit=${limit}`
  );

  const data = await response.json();

  return data;
};
