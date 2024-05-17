import { Article } from "./types";

/**
 * 更新頻度が高いのでssrを使用
 * @see {@link https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating}
 */
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts/`, {
    cache: "no-store",
  });

  const articles = await res.json();
  return articles;
};

// export const getAllArticles = async (): Promise<Article[]> => {
//   const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" });

//   const articles = await res.json();
//   return articles;
// };
