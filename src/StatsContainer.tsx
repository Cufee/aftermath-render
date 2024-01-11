import Spacer from "./Spacer.tsx";
import TitleCard from "./TitleCard.tsx";
import StatsCard from "./StatsCard.tsx";
import { RenderProps } from "./types.d.ts";

export default function StatsContainer({
    nickname,
    clanTag,
    cards,
}: RenderProps) {
    return (
        <div tw="flex flex-col w-full relative p-4 relative">
            <TitleCard name={nickname} clanTag={clanTag} />
            <Spacer size="4" direction="horizontal" />
            {cards.map((card, i) => (
                <div tw="flex flex-col">
                    {i !== 0 && <Spacer size="4" direction="horizontal" />}
                    <StatsCard blocks={card.blocks} title={card.title} />
                </div>
            ))}
        </div>
    );
}
