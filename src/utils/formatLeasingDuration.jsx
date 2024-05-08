const formatLeasingDuration = (duration) => {
  const numericValue = duration.split(" ")[0];
  return `${numericValue}M`;
};

export default formatLeasingDuration;
