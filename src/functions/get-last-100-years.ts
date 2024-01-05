// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getLast100Years = (): Record<string, any>[] => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => ({
    value: currentYear - index,
  }));
  return years;
};
