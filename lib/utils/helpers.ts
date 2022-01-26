export const toCamelCase = (string: string) => {
  // this helper for API  that returns 1-2 words in string
  if (string.toLowerCase().includes('rain')) return 'rain'
  if (string.toLowerCase().includes('snow')) return 'snow'
  if (string.toLowerCase().includes('drizzle')) return 'rain'
  if (string.toLowerCase().includes('thunderstrom')) return 'thunderstrom'
  const description = string.split(' ');
  if (description.length === 1) return description[0].toLowerCase()
  const upperCasedPart =
    description[1].slice(0, 1).toUpperCase() + description[1].slice(1);
  const weatherTag = description[0] + upperCasedPart;

  return weatherTag;
};
