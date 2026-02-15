import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  level: number; // 1: Pujangga, 2: Dalang
  xp: number;
  flowers: number; // Lives
  streak: number;
  tokens: number;
  setLevel: (level: number) => void;
  addXP: (amount: number) => void;
  setFlowers: (amount: number) => void;
}

export const useStore = create<UserState>()(
  persist(
    (set) => ({
      level: 2,
      xp: 2450,
      flowers: 5,
      streak: 12,
      tokens: 1240,
      setLevel: (level) => set({ level }),
      addXP: (amount) => set((state) => ({ xp: state.xp + amount })),
      setFlowers: (flowers) => set({ flowers }),
    }),
    {
      name: "njogjani-storage",
    },
  ),
);
