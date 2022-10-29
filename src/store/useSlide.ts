import create from "zustand";
import { Page } from "~types";

type Store = {
  pages: Page[];
  setPages: (pages: Page[]) => void;
  selectedPage: Page | null;
  setSelectedPage: (page: Page) => void;
  addPage: (page: Page) => void;
  removePage: (page: Page) => void;
};

const useSlideStore = create<Store>((set) => ({
  pages: [
    {
      id: "1",
      title: "page 1",
      items: [],
    },
    {
      id: "2",
      title: "page 2",
      items: [],
    },
    {
      id: "3",
      title: "page 3",
      items: [],
    },
  ],
  selectedPage: null,
  setSelectedPage: (page) => set({ selectedPage: page }),
  setPages: (pages) => set({ pages }),
  removePage: (page) => {
    set((state) => ({
      pages: state.pages.filter((p) => p.id !== page.id),
    }));
  },
  addPage: (page) => {
    set((state) => ({
      pages: [...state.pages, page],
    }));
  },
}));

export default useSlideStore;
