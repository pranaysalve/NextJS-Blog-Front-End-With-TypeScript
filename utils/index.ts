import { IArticle } from "types";
import { serialize } from "next-mdx-remote/serialize";
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return date;
};

export const capitalizeFirstLetter = (slug: string) => {
  return makeCategory(slug).charAt(0).toUpperCase() + slug.slice(1);
};
export const makeCategory = (slug: string) => {
  if (typeof slug === "string") {
    return slug.split("-").join("  ");
  }
  return "";
};

export const debounce = (fx: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout;
  const debounced = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fx.apply(this, args);
    }, timeout);
  };
  return debounced;
};

export const serializedMarkDown = async (item: IArticle) => {
  console.log(item);
  const body = await serialize(item.attributes.Body);
  return {
    ...item,
    attributes: {
      ...item.attributes,
      body: body,
    },
  };
};
