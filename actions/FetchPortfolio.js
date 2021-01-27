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
