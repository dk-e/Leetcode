function lengthOfLastWord(s: string): number {
  s = s.trim();
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      break;
    }
    count++;
  }
  return count;
}
