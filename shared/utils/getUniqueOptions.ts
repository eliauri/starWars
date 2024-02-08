export const getUniqueOptions = (filterOption: string, data) => {
  const options = [
    "all",
    ...new Set(data?.results.map((item) => item[filterOption])),
  ];

  return options.map((item: string) => ({
    label: item,
    value: item,
  }));
};
