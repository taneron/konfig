import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}
function useAuthors() {
  const {
    metadata: { authors },
  } = useBlogPost();
  return authors;
}

export default function BlogPostItem({ children, className }) {
  const containerClassName = useContainerClassName();
  const authors = useAuthors();
  console.log(authors);
  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
      {authors.map(({ key, name, github, linkedin, imageURL, bio }) => {
        return (
          <div key={key} className="p-4 mt-5 flex flex-row gap-5">
            <img className="rounded-full h-16" src={imageURL} alt={name} />
            <div>
              <div className="flex flex-row gap-2 items-center mb-2">
                <span className="font-semibold">{name}</span>
                {github && (
                  <a className="text-xs" href={github} target="_blank">
                    GitHub
                  </a>
                )}
                {linkedin && (
                  <a className="text-xs" href={linkedin} target="_blank">
                    LinkedIn
                  </a>
                )}
              </div>
              <p className="text-sm">{bio}</p>
            </div>
          </div>
        );
      })}
    </BlogPostItemContainer>
  );
}
