export const generateList = (count: number, item: any): any[] => {
  const properties: any[] = [];

  for (let i = 1; i <= count; i++) {
    properties.push(item);
  }

  return properties;
};
