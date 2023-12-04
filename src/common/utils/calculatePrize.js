export const calculatePrize = (hit) => {
  let prize = 0;
  switch (hit) {
    case 2:
      prize = 600;
      break;
    case 3:
      prize = Math.pow(2, hit) * 400;
      break;
    case 4:
      prize = Math.pow(hit, hit) * 700;
      break;
    case 5:
      prize = Math.pow(hit, hit) * 1000;
      break;
    default:
      0;
  }
  return prize;
};
