

export const truncateText = (text, maxCount, replace = "...") =>
  text.length > maxCount
    ? `${text.substr(0, maxCount)}${replace}`
    : text;