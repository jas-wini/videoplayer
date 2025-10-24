const formatDuration = (duration) => {
  if (!duration) return;
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;

  const formatted = [
    hours > 0 ? hours : null,
    String(minutes).padStart(hours ? 2 : 1, "0"),
    String(seconds).padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");

  return formatted;
};

export default formatDuration;
