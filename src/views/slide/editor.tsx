import useSlideStore from "~store/useSlide";

function Editor() {
  const selectedPage = useSlideStore((state) => state.selectedPage);
  return <div>{selectedPage?.title}</div>;
}

export default Editor;
