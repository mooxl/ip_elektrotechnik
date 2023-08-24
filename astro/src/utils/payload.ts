import type { Page, Post } from "@/types";

const url = import.meta.env.DEV
  ? "http://payload:3001"
  : `${import.meta.env.PAYLOAD_URL}`;

export const getPages = async () =>
  (await (await fetch(`${url}/api/pages?limit=1000`)).json()).docs as Page[];
export const getPosts = async () =>
  (await (await fetch(`${url}/api/posts?limit=1000[]`)).json()).docs as Post[];

export const getImageSrc = (src: string) => {
  if (import.meta.env.DEV) {
    src = src.replace("localhost", "payload");
  }
  return src;
};
