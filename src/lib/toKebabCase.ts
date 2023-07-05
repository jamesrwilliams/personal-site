export const toKebabCase = (str: string) => {

  // WARNING: This is not a drop in replacement solution, and
  // it might not work for some edge cases. Test your code!
  // Regex explained: https://regexr.com/5c55v
  const re = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g;

  return (String(str ?? '').match(re) || []).map(x => x.toLowerCase()).join('-');
}
