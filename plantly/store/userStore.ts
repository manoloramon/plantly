import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type userStore = {
    hasFinishedOnboarding: boolean;
    tooggleHasOnboarded: () => void;
}

export const useUserStore = create(
    persist<userStore>(
        (set) => ({
            hasFinishedOnboarding: false,
            tooggleHasOnboarded: () => set((state) => ({ hasFinishedOnboarding: !state.hasFinishedOnboarding }))
        }),
        {
            name: 'plantly-user-store',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);