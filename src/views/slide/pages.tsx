import { motion, Reorder, useMotionValue } from "framer-motion";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "~components/context-menu";
import useSlideStore from "~store/useSlide";
import { styled } from "~style";
import { Page } from "~types";

const Box = styled(motion.div, {
  width: 200,
  height: 120,
  border: "2px solid $gray300",
  backgroundColor: "$gray500",
  borderRadius: 10,
  margin: "$3 0",
  cursor: "pointer",
  transition: "border-color .2s ease-in",
  "&.active": {
    borderColor: "DarkGray",
    borderWidth: 2,
  },
});

type ItemProps = {
  item: Page;
};
const Item = ({ item }: ItemProps) => {
  const y = useMotionValue(0);
  const { selectedPage, setSelectedPage } = useSlideStore((state) => state);

  const onClick = () => {
    setSelectedPage(item);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Reorder.Item onClick={onClick} value={item} id={item.id}>
          <Box className={`${selectedPage?.id === item.id && "active"}  }`}> {item.title}</Box>
        </Reorder.Item>
      </ContextMenuTrigger>

      <ContextMenuContent sideOffset={5} align="end">
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem>Foward</ContextMenuItem>
        <ContextMenuItem>Remove</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

function Pages() {
  const pages = useSlideStore((state) => state.pages);
  const setPages = useSlideStore((state) => state.setPages);

  return (
    <Reorder.Group
      axis="y"
      className="no-scrollbar gradient"
      style={{ maxWidth: 210, height: 800, overflowY: "auto", scrollbarWidth: "none" }}
      values={pages}
      layoutScroll
      onReorder={(newOrder) => {
        setPages(newOrder);
      }}
    >
      {pages.map((item, index) => (
        <Item key={item.id} item={item} />
      ))}
    </Reorder.Group>
  );
}

export default Pages;
