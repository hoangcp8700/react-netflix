export const groupBy = (items, key) =>
  items.reduce(
    (acc, cur) => ({
      ...acc,
      [cur[key]]: [...(acc[cur[key]] || []), cur],
    }),
    {}
  )
