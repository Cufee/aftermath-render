import Spacer from "./Spacer.tsx";
import { BlockProps, StatsCardProps } from "./types.d.ts";

export default function StatsCard({ title, blocks }: StatsCardProps) {
    return (
        <div tw="flex flex-col bg-black bg-opacity-80 px-8 py-4 justify-center items-center rounded-2xl">
            <div tw="flex text-small text-gray-300">{title}</div>
            <Spacer size="1" direction="horizontal" />
            <BlockSet blocks={blocks} />
        </div>
    );
}

function Block({ session, career, label }: BlockProps) {
    return (
        <div
            tw="flex flex-col items-center flex-grow items-center"
            style={{ flexBasis: "1/4" }}
        >
            <div tw="rounded-xl w-full flex flex-col items-center relative">
                <span tw="text-large text-white">{session}</span>
                {career && (
                    <div tw="flex">
                        <span tw="text-medium text-gray-300 m-auto">
                            {career}
                        </span>
                    </div>
                )}
            </div>
            <span tw="text-small text-gray-400 pt-1">{label}</span>
        </div>
    );
}

function BlockSet({ blocks }: { blocks: BlockProps[] }) {
    return (
        <div tw="flex flex-row flex-wrap w-full">
            {blocks.map((block, i) => (
                <div tw="flex flex-row flex-grow">
                    {i !== 0 && <Spacer size="4" />}
                    <Block
                        session={block.session}
                        career={block.career}
                        label={block.label}
                    />
                </div>
            ))}
        </div>
    );
}
