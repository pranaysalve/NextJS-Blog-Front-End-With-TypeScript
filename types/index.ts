import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ICollectionResponse<T> {
  date: T;
  meta: IResourceMeta;
}

export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IArticle {
  id: number;
  attributes: IArticleAttributes;
  createdAt: string;
  author: IAuther;
}

export interface IArticleAttributes {
  Title: string;
  Body: string | MDXRemoteSerializeResult;
  Slug: string;
  Image: IImageData;
  // category:
}

export interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}

export interface IAuther {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
  filters: any;
  populate: any;
  sort: any;
  pagination: {
    page: number;
    pageSize: number;
  };
}
