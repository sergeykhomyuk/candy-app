const capitalize = (value: string): string => {
  if (!value) {
    return value;
  }

  const capitalizedValue = value[0].toUpperCase() + value.slice(1);

  return capitalizedValue;
};

export default capitalize;
