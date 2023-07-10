import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import { useBlogPost } from "@docusaurus/theme-common/internal";

export default function BlogPostItemWrapper(props) {
  const test = useBlogPost();
  console.log(test);
  return (
    <>
      <BlogPostItem {...props} />
      <div className="p-4 mt-5 flex flex-row gap-5">
        <img
          className="rounded-full h-16"
          src="/img/dylan.jpeg"
          alt="Dylan Huang"
        />
        <div>
          <h5>Dylan Huang</h5>
          <p className="text-sm">
            Dylan is a Co-Founder of Konfig and passionate software nerd. He
            built API tooling at C3.ai and a viral web application with over
            210,000 unique users.
          </p>
        </div>
      </div>
    </>
  );
}
