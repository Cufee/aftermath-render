import { JSX } from "preact";

import { Spacer } from "./Spacer.tsx";
import { BlockProps } from "./types.d.ts";

export interface StatsCardProps {
    title: string | JSX.Element;
    blocks: BlockProps[];
}

export default function StatsCard({ title, blocks }: StatsCardProps) {
    return (
        <div tw="flex flex-col bg-gray-800 p-4 pb-2 justify-center items-center rounded-2xl">
            <div tw="flex text-small text-gray-300">{title}</div>
            <Spacer size="2" direction="horizontal" />
            <BlockSet blocks={blocks} />
        </div>
    );
}

function Block({ session, career }: BlockProps) {
    return (
        <div
            tw="flex flex-col items-center flex-grow items-center"
            style={{ flexBasis: "1/4" }}
        >
            <div tw="pt-2 pb-1 bg-gray-900 rounded-xl text-large text-white w-full flex">
                <span tw="mx-auto">{session}</span>
            </div>
            {career && <Spacer size="1" direction="horizontal" />}
            {career && (
                <div tw="flex">
                    <span tw="text-medium text-gray-300 m-auto">{career}</span>
                </div>
            )}
        </div>
    );
}

function BlockSet({ blocks }: { blocks: BlockProps[] }) {
    return (
        <div tw="flex flex-row w-full">
            {blocks.map((block, i) => (
                <div tw="flex flex-row flex-grow">
                    {i !== 0 && <Spacer size="2" />}
                    <Block session={block.session} career={block.career} />
                </div>
            ))}
        </div>
    );
}
