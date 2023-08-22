/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    posts: Post;
    users: User;
    media: Media;
  };
  globals: {};
}
export interface Page {
  id: string;
  title?: string;
  order?: number;
  description?: string;
  blocks?: (ContentBlock | HeadingBlock | FAQBlock)[];
  path?: string;
  breadcrumbss?: string;
  parent?: string | Page;
  breadcrumbs?: {
    doc?: string | Page;
    url?: string;
    label?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface ContentBlock {
  left?: (HeadingBlock | TextBlock | LinkBlock | ImageBlock)[];
  right?: (HeadingBlock | TextBlock | LinkBlock | ImageBlock)[];
  id?: string;
  blockName?: string;
  blockType: 'content';
}
export interface HeadingBlock {
  heading: string;
  typeHeading: 'mint' | 'underline' | 'brown';
  id?: string;
  blockName?: string;
  blockType: 'heading';
}
export interface TextBlock {
  text: string;
  id?: string;
  blockName?: string;
  blockType: 'text';
}
export interface LinkBlock {
  type: 'internal' | 'external';
  link?: string | Page;
  url?: string;
  label?: string;
  id?: string;
  blockName?: string;
  blockType: 'link';
}
export interface ImageBlock {
  image: string | Media;
  id?: string;
  blockName?: string;
  blockType: 'image';
}
export interface Media {
  id: string;
  alt?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    content?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface FAQBlock {
  faq?: {
    question: string;
    answer: string;
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'FAQ';
}
export interface Post {
  id: string;
  title?: string;
  hallo?: string;
  publishedDate?: string;
  content?: {
    [k: string]: unknown;
  }[];
  status?: 'draft' | 'published';
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
