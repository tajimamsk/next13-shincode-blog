import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            width={1280}
            height={300}
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
          />
        </Link>
        <div className="bg-white flex flex-col justify-start pb-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            研修中
          </Link>
          <p className="text-sm pb-3 text-slate-900 ">
            Published on 2024/05/16
          </p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            illo voluptate et quisquam non ipsum, odio nam dolores suscipit ut.
            Commodi quidem consectetur, dolorem itaque et ab nemo voluptatibus
            repudiandae.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black-">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            width={1280}
            height={300}
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
          />
        </Link>
        <div className="bg-white flex flex-col justify-start pb-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            研修中
          </Link>
          <p className="text-sm pb-3 text-slate-900 ">
            Published on 2024/05/16
          </p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            illo voluptate et quisquam non ipsum, odio nam dolores suscipit ut.
            Commodi quidem consectetur, dolorem itaque et ab nemo voluptatibus
            repudiandae.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black-">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
