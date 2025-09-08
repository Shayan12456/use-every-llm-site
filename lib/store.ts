import { create } from 'zustand';

type FeedbackState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useFeedbackStore = create<FeedbackState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
