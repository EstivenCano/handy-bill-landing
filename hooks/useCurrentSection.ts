import { create } from 'zustand';

interface CurrentSectionState {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const useCurrentSection = create<CurrentSectionState>((set) => ({
  currentSection: 'home',
  setCurrentSection: (section: string) => set({ currentSection: section }),
}));
