/** @format */

// code your solution here
function superbowlWin(record) {
  const winRecord = records.find((record) => record.result === "W");
  return winRecord ? winRecord.year : undefined;
}
