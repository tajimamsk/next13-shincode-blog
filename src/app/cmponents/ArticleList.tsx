import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleListProps = {
  artilces: Article[];
};
const ArticleList = ({ artilces }: ArticleListProps) => {
  return (
    <div>
      {artilces.map((article) => (
        <article className="shadow my-4" key={article.id}>
          <Link href={`articles/${article.id}`} className="hover:opacity-75">
            <Image
              width={1280}
              height={300}
              src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
              alt=""
            />
          </Link>
          <div className="bg-white flex flex-col justify-start pb-6">
            <Link href="#" className="text-blue-700 pb-4 font-bold">
              Technology
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
            >
              {article.title}
            </Link>
            <p className="text-sm pb-3 text-slate-900 ">{article.createdAt}</p>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 pb-6"
            >
              {article.content}
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-pink-800 hover:text-black-"
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
