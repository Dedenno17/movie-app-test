export const titleFormat = (str: string): string => {
  let formatedTitle = str;
  const splitTitle = str.split('');

  if (splitTitle.length > 10) {
    formatedTitle = splitTitle.slice(0, 10).join('') + ' ...';
  }

  return formatedTitle;
};
