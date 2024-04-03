// code your solution here
function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
}
// 1. made function  called superbowlWin that takes in an array of objects (called records). Each object represents a

