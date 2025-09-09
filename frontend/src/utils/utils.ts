export const sleep = (milliseconds: number) =>
  new Promise((result) => setTimeout(result, milliseconds));
