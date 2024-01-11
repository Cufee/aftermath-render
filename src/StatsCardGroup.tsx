import Spacer from "./Spacer.tsx";
import StatsCard, { StatsCardProps } from "./StatsCard.tsx";

export default function StatsCardGroup({ cards }: { cards: StatsCardProps[] }) {
    return (
        <div tw="flex flex-col bg-gray-800 p-4 pb-2 justify-center items-center rounded-2xl">
            {cards.map((card) => (
                <div tw="flex flex-col">
                    <Spacer size="4" direction="horizontal" />
                    <StatsCard title={card.title} blocks={card.blocks} />
                </div>
            ))}
        </div>
    );
}
