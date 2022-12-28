export function factorial(num: number): number {
  // --- end condition
  if (num <= 1) {
    return 1;
  }

  // --- Compose the full solution by dividing it to small parts
  return factorial(num - 1) * num;
}

export function reverseString(str: string): string {
  // --- end condition
  if (str.length <= 1) {
    return str;
  }

  // --- Compose the full solution by dividing it to small parts
  const lastChar = str[str.length - 1];
  const stringWithoutLastChar = str.slice(0, str.length - 1);
  return `${lastChar}${reverseString(stringWithoutLastChar)}`;
}
/**
 * given ABC ==> [ABC , ACB , BCA , BAC , CAB , CBA]
 * @param str
 */
export function permutation(str: string): string[] {
  let pertubation: string[] = [];

  if (str.length == 0) {
    return [];
  }

  if (str.length == 1) {
    return [str];
  }

  for (const c of str) {
    const strWithoutC = str.replace(c, "");
    const pertubationShort : string[] = permutation(strWithoutC);
    pertubationShort.forEach((shortStr) => pertubation.push(`${c}${shortStr}`));
  }

  return pertubation;
}
