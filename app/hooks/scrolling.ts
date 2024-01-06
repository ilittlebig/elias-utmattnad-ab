export const useScrolling = () => {
  const toggleScrolling = (disable: boolean) => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = disable ? "hidden" : "";
  };

  return { toggleScrolling };
}
