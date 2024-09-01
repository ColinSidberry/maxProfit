// if the array is less than or equal 1 return 0;
// maxProfit
// minPrice
// dynamic value prices[i] - min

const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  if (prices.length <= 1) return maxProfit;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }

    const profit = price - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), "5");
console.log(maxProfit([7, 6, 4, 3, 1]), "0");
