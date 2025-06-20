import { create } from "zustand";
import { Mail, mails } from "@/components/mail/data";

type Config = {
  selected: Mail["id"] | null;
  setState: (newState: Partial<Config>) => void;
};

const useMailStore = create<Config>((set) => ({
  selected: mails[0].id,
  setState: (newState) => set((state) => ({ ...state, ...newState })),
}));

export function useMail(): [Pick<Config, "selected">, Config["setState"]] {
  const selected = useMailStore((state) => state.selected);
  const setState = useMailStore((state) => state.setState);
  return [{ selected }, setState];
}
