import type { LinkButtonVariant } from "@components/LinkButton.astro";

export const MAIN_NAV = [
  { href: "/", label: "Home", icon: "mdi:home-outline" },
  { href: "/about", label: "About", icon: "mdi:search" },
  { href: "/projects", label: "Projects", icon: "mdi:source-branch" },
] as const;

export const ABOUT_NAV = [
  {
    href: "/about",
    label: "About",
    icon: "mdi:search",
    variant: "warning",
    headingClass: "text-warning-300",
  },
  {
    href: "/about/likes",
    label: "Likes",
    icon: "mdi:like-outline",
    variant: "danger",
    headingClass: "text-danger-500",
  },
  {
    href: "/about/links",
    label: "Links",
    icon: "mdi:notebook-outline",
    variant: "success",
    headingClass: "text-success-500",
  },
  {
    href: "/about/skill",
    label: "Skill",
    icon: "mdi:computer",
    variant: "primary",
    headingClass: "text-primary-300",
  },
] as const satisfies readonly {
  href: string;
  label: string;
  icon: string;
  variant: LinkButtonVariant;
  headingClass: string;
}[];
