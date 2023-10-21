/**
 * Finds the element with the given id and scrolls it into view.
 * @param id
 */
export function scrollIntoView(id: string) {
  const element = document.getElementById(id);

  if (element) {
    // set URL to include hash
    window.history.pushState({}, "", `#${id}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
