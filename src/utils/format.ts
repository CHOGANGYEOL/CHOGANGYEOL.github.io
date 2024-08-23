/**
 *
 * @param {Date} date
 * @param format - default : "yyyy-MM-dd"
 * - yyyy : 연
 * - MM : 월
 * - dd : 일
 * - D : 요일
 * - hh : 시
 * - mm : 분
 * - ss : 초
 * @return {string}
 */
export const formatDate = (
  date: Date | null,
  format = "yyyy-MM-dd"
): string => {
  if (!date) return "";

  const components: Record<string, string> = {
    yyyy: String(date.getFullYear()),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    dd: String(date.getDate()).padStart(2, "0"),
    D: ["일", "월", "화", "수", "목", "금", "토"][date.getDay()],
    hh: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };

  return format.replace(/yyyy|MM|dd|D|hh|mm|ss/g, (match) => components[match]);
};
