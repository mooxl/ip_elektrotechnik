import type { Page } from "@/types";

const url = import.meta.env.DEV
  ? "http://payload:3001"
  : `${import.meta.env.PAYLOAD_URL}`;

export const getPages = async () =>
  (await (await fetch(`${url}/api/pages`)).json()).docs as Page[];

export const getImageSrc = (src: string) => `${url}/media/${src}`;
