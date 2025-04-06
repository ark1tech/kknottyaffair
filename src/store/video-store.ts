import { create } from "zustand";

interface VideoStore {
  shouldPlay: boolean;
  setShouldPlay: (play: boolean) => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  shouldPlay: false,
  setShouldPlay: (play) => set({ shouldPlay: play }),
}));
