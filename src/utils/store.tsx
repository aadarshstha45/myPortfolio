import { create } from "zustand";

type ProjectState = {
  displayCount: number;
  setDisplayCount: () => void;
};

const useProjectStore = create<ProjectState>((set) => ({
  displayCount: 2,
  setDisplayCount: () =>
    set((state) => {
      return { displayCount: state.displayCount + 3 };
    }),
}));

type ExperienceState = {
  displayCount: number;
  setDisplayCount: () => void;
};

const useExperienceStore = create<ExperienceState>((set) => ({
  displayCount: 3,
  setDisplayCount: () =>
    set((state) => {
      return { displayCount: state.displayCount + 3 };
    }),
}));

export { useProjectStore, useExperienceStore };
