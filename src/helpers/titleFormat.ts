export const titleFormatSmallScreen = (str: string): string => {
  let formatedTitle = str;
  const splitTitle = str.split('');

  if (splitTitle.length > 10) {
    formatedTitle = splitTitle.slice(0, 10).join('') + ' ...';
  }

  return formatedTitle;
};

export const titleFormatLargeScreen = (str: string): string => {
  let formatedTitle = str;
  const splitTitle = str.split('');

  if (splitTitle.length > 10) {
    formatedTitle = splitTitle.slice(0, 19).join('') + ' ...';
  }

  return formatedTitle;
};
