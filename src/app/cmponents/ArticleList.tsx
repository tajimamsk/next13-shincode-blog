import { Article } from "@/types";
import React from "react";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  artilces: Article[];
};

const ArticleList = ({ artilces }: ArticleListProps) => {
  return (
    <div>
      {artilces.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
