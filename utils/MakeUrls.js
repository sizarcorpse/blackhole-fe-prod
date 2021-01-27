import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const MakeUrls = (image) => {
  // if (!image) {
  //   return "/vercel.svg";
  // }
  if (image.url.indexOf("/") === 0) {
    return `${publicRuntimeConfig.ROOT_API_URL}${image.url}`;
  }
  return image.url;
};
