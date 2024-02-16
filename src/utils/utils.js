export const calculateManaCost = (cards) => {
  if (!cards.length) return 0;
  let count = 0;
  const totalManaCost = cards.reduce((total, card) => {
    if (!card.types.includes("Land")) {
      count++;
      return total + card.cmc;
    } else return total;
  }, 0);

  return totalManaCost / count;
};
