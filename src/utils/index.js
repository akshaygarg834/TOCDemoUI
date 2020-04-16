// Compare Based on SequenceNo
const compareFunction = (item1, item2) => {
  if (item1.sequenceNO > item2.sequenceNO) return 1;
  return -1;
};

const getIconClassFromStatus = status => {
  switch (status) {
    case "COMPLETE":
      return "lens";
    case "IN_PROGRESS":
      return "timelapse";
    case "NOT_STARTED":
      return "panorama_fish_eye";
    default:
      return "panorama_fish_eye";
  }
};
export default {
  compareFunction,
  getIconClassFromStatus
};
