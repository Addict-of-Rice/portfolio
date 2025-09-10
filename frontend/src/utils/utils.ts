export const sleep = (milliseconds: number) =>
  new Promise((result) => setTimeout(result, milliseconds));

export const openInNewTab = (link: string) => window.open(link, '_blank');
