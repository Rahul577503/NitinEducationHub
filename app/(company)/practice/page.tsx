import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import Link from "next/link";
import Image from "next/legacy/image";

const Banner =
  "https://img.freepik.com/free-photo/prism-spectrum-light-rainbow-refraction_23-2148771736.jpg?t=st=1709200618~exp=1709204218~hmac=ce3446a5aafbd58c6860ea1314c5d875ee819559a7cc60763689701f84e5fb75&w=1800";

interface FrontMatter {
  title: string;
  date: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<{ meta: FrontMatter; slug: string }> = ({
  meta,
  slug,
}) => (
  <div className="max-w-[300px] min-h-[200px] flex p-4 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <Link href={`/practices/${slug}`} passHref>
      <div className="flex-1">
        <Image
          src={meta.image}
          alt={meta.title}
          height={200}
          width={300}
          className="rounded-md"
        />
        <h3 className="mb-2 mt-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {meta.title}
        </h3>
        <p className="font-normal text-[10px] text-gray-700 dark:text-gray-400">
          {meta.date}
        </p>
        <p className="font-normal text-[14px] text-gray-700 dark:text-gray-400">
          {meta.description}
        </p>
      </div>
    </Link>
  </div>
);
const Mdx: React.FC = () => {
  const blogDir = "practices";
  const files = fs.readdirSync(path.join(process.cwd(), blogDir));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const frontMatter = matter(fileContent) as GrayMatterFile<string> & {
      data: FrontMatter;
    };

    return {
      meta: frontMatter.data,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className=" text-gray-900 ">
      <div className="py-[60px]  ">
      <div className="relative w-full">
        <div className="overflow-hidden">
          <Image
            src={Banner}
            height={400}
            width={1280}
            layout="responsive"
            alt="Computer"
          />
        </div>
        <h1 className="absolute inset-0 flex justify-center items-center text-xl lg:text-2xl text-gray-200 font-bold">
          Learn And Practice Your Skills Here ...
        </h1>
      </div>
        <br />
        <div className="flex justify-center max-w-[1280px] mx-auto">
          <div className="py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} meta={blog.meta} slug={blog.slug} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mdx;
