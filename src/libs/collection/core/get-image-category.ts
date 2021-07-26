const getImageCategory = (imageUrl: string): string | undefined => {
  const url = new URL(imageUrl);
  const pathnameParts = url.pathname.split('/');

  let category: string | undefined;
  while (pathnameParts.length > 0 && !category) {
    category = pathnameParts.pop();
  }

  return category;
};

export default getImageCategory;
