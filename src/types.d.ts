import { JSX } from "preact";

export interface BlockProps {
  session: string;
  career?: string;
  label?: string;
}

export interface StatsCardProps {
  title: string | JSX.Element;
  blocks: BlockProps[];
}

export interface RenderProps {
  nickname: string;
  clanTag: string;
  cards: StatsCardProps[];
}
