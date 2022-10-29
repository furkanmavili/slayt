export type TextComponent = {
  text: string;
  width: number;
  fontSize: number;
  color: string;
  fontFamily: string;
  fontWeight: string;
};

export type ImageComponent = {
  src: string;
  width: number;
  height: number;
};

export type Item = {
  id: string;
  x: number;
  y: number;
  type: TextComponent | ImageComponent;
};

export type Page = {
  id: string;
  title: string;
  items: Item[];
};

export type Slide = {
  id: string;
  name: string;
  pages: Page[];
  createdAt: string;
  updatedAt: string;
};
