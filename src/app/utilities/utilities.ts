export const scrollToElement = (
  id: string,
  block: ScrollLogicalPosition | undefined
) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: block });
  }
};
