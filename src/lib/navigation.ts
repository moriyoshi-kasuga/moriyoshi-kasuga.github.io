// "/" は完全一致、それ以外は配下のページも含めて現在地とみなす
export function isCurrentSection(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
