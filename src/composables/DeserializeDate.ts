// yyyy-MM-ddの形式の文字列からDateオブジェクトを返します
export function deserializeDate(dateString: string) {
  const firstHyphenIndex = dateString.indexOf("-");
  const secondHyphenIndex = dateString.indexOf("-", firstHyphenIndex + 1);
  const year = parseInt(dateString.substring(0, firstHyphenIndex));
  const month = parseInt(dateString.substring(firstHyphenIndex + 1, secondHyphenIndex)) - 1;
  const day = parseInt(dateString.substring(secondHyphenIndex + 1));

  return new Date(year, month, day);
}
