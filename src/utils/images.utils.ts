export const getSmallImageUrl = (url: string) => {
  // add -sm before the extension
  return url.replace('.jpg', '-sm.jpg').replace('.png', '-sm.jpg');
};
