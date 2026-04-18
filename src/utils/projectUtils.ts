import type { Project } from "@src/type";

/**
 * 日付文字列をDateオブジェクトに変換
 * @param date 日付文字列（形式: YYYY/MM/DD）
 * @returns Dateオブジェクト
 */
function parseDate(date: string): Date {
  const [year, month, day] = date.split("/").map(Number);
  return new Date(year, month - 1, day);
}

/**
 * プロジェクトをソートする比較関数
 * ピン留めされたプロジェクトを優先し、その後作成日の降順でソート
 * @param a プロジェクトオブジェクト
 * @param a.frontmatter プロジェクトのfrontmatter
 * @param b プロジェクトオブジェクト
 * @param b.frontmatter プロジェクトのfrontmatter
 * @returns ソート順序
 */
export function sortProjects(
  a: { frontmatter: Project },
  b: { frontmatter: Project },
): number {
  const aPin = a.frontmatter.pin ?? false;
  const bPin = b.frontmatter.pin ?? false;

  // ピン留めされたプロジェクトを優先
  if (aPin && !bPin)
    return -1;
  if (!aPin && bPin)
    return 1;

  // 両方ピン留めされている、または両方ピン留めされていない場合は作成日でソート
  const aDate = parseDate(a.frontmatter.createdAt);
  const bDate = parseDate(b.frontmatter.createdAt);

  return bDate.getTime() - aDate.getTime();
}
