import { LinkProps } from "expo-router";

export interface ICardLinkProps {
  title: string
  icon: React.ReactNode
  href: LinkProps['href'];
}