import React from "react";
import Image from "next/image";
import { getDetailArticle } from "@/blogAPI";

const Article = async ({ params }: { params: { id: string } }) => {
  const detailArticle = await getDetailArticle(params.id);
  console.log(detailArticle);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        width={1280}
        height={300}
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
        alt=""
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
    </div>
  );
};

export default Article;
