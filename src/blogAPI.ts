import { notFound } from "next/navigation";
import { Article } from "./types";

/**
 * 更新頻度が高いのでssrを使用
 * @see {@link https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating}
 */
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts/`, {
    cache: "no-store",
  });

  /**
   * err
   */
  if (!res.ok) {
    throw new Error("エラーが発生しました！");
  }

  /**
   * loading
   */
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = await res.json();
  return articles;
};

/**
 * そこそこの更新　isrを使用
 * @param id
 * @returns
 */
export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    notFound();
  }

  /**
   * err
   */
  if (!res.ok) {
    throw new Error("エラーが発生しました！");
  }

  /**
   * loading
   */
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const article = await res.json();
  return article;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDateTime = new Date().toISOString();
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDateTime }),
  });

  /**
   * err
   */
  if (!res.ok) {
    throw new Error("エラーが発生しました！");
  }

  /**
   * loading
   */
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const newArticle = await res.json();
  return newArticle;
};
export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  /**
   * err
   */
  if (!res.ok) {
    throw new Error("エラーが発生しました！");
  }

  /**
   * loading
   */
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const deleteArticle = await res.json();
  return deleteArticle;
};
