function compareBMI(markWeight, markHeight, johnWeight, johnHeight) {
  const markBMI = markWeight / (markHeight * markHeight);
  const johnBMI = johnWeight / (johnHeight * johnHeight);

  const isMarkHigher = markBMI > johnBMI;

  return isMarkHigher;
}

console.log(compareBMI(70, 1.85, 68, 1.87));
