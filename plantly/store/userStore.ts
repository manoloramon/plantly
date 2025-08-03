import { create } from 'zustand';

type userStore = {
    hasFinishedOnboarding: boolean;
    tooggleHasOnboarded: () => void;
}

export const useUserStore = create<userStore>((set) => ({
    hasFinishedOnboarding: false,
    tooggleHasOnboarded: () => set((state) => ({ hasFinishedOnboarding: !state.hasFinishedOnboarding }))
}));