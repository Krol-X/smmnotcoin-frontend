export function randomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function formatNumberWithPadding(num: number, padding: number): string {
  const divider = Math.pow(10, padding)
  const formattedNum = num / divider
  return formattedNum.toFixed(padding)
}
