export const useScrolling = () => {
  const toggleScrolling = (disable) => {
    document.body.style.overflow = disable ? 'hidden' : '';
  };

  return { toggleScrolling };
}
