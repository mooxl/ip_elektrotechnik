import type { Page } from "@/types";

const url = import.meta.env.DEV
  ? "http://payload:3001"
  : `${import.meta.env.PAYLOAD_URL}`;

export const getPages = async () =>
  (await (await fetch(`${url}/api/pages?limit=1000`)).json()).docs as Page[];

export const getImageSrc = (src: string) => {
  if (import.meta.env.DEV) {
    src = src.replace("localhost", "payload");
  }
  return src;
};
