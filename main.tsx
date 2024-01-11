import { svg2png, initialize } from "npm:svg2png-wasm@1.1.0";
import satori from "satori";

import { Spacer } from "./src/Spacer.tsx";
import StatsContainer from "./src/StatsContainer.tsx";
import TitleCard from "./src/TitleCard.tsx";
import StatsCard from "./src/StatsCard.tsx";
import Legend from "./src/Legend.tsx";

await initialize(Deno.readFile("./svg2png.wasm"));
const fontData = Deno.readFileSync("./font.ttf");

const overviewBlocks = [
    {
        session: "000",
        career: "15000",
    },
    {
        session: "9000",
        career: "99999",
    },
    {
        session: "00.00%",
        career: "100.00%",
    },
    {
        session: "00.00%",
        career: "100.00%",
    },
];

const extendedBlocks = [
    [
        {
            session: "000",
            career: "15000",
        },
        {
            session: "9000",
            career: "99999",
        },
        {
            session: "00.00%",
            career: "100.00%",
        },
        {
            session: "00.00%",
            career: "100.00%",
        },
    ],
    [
        {
            session: "0",
            career: "1",
        },
        {
            session: "9000",
            career: "99999",
        },
        {
            session: "00.00%",
            career: "100.00%",
        },
        {
            session: "99999",
            career: "9999",
        },
    ],
];

const slimBlocks = [
    [
        {
            session: "0",
        },
        {
            session: "9000",
        },
        {
            session: "00.00%",
        },
        {
            session: "00.00%",
        },
    ],
    [
        {
            session: "000",
        },
        {
            session: "9000",
        },
        {
            session: "00.00%",
        },
        {
            session: "00.00%",
        },
    ],
];

const now = new Date();

const svg = await satori(
    <StatsContainer>
        <TitleCard name="HisRoyalFakenessLongName" clanTag="_RGN_" />
        <Spacer size="4" direction="horizontal" />
        <StatsCard title="Regular Battles" blocks={overviewBlocks} />
        <Spacer size="4" direction="horizontal" />
        <StatsCard title="Rating Battles" blocks={extendedBlocks[1]} />
        {extendedBlocks.map((blocks) => (
            <div tw="flex flex-col">
                <Spacer size="4" direction="horizontal" />
                <StatsCard blocks={blocks} title="Some Tank" />
            </div>
        ))}
        {slimBlocks.map((blocks) => (
            <div tw="flex flex-col">
                <Spacer size="4" direction="horizontal" />
                <StatsCard blocks={blocks} title="Some Tank" />
            </div>
        ))}
        <Spacer size="2" direction="horizontal" />
        <Legend labels={["Battles", "Avg. Damage", "Winrate", "Accuracy"]} />
    </StatsContainer>,
    {
        width: 500,
        fonts: [
            {
                name: "ReadexPro",
                data: fontData,
                weight: 400,
                style: "normal",
            },
        ],
        tailwindConfig: {
            theme: {
                extend: {
                    fontSize: {
                        large: "24px",
                        medium: "18px",
                        small: "14px",
                    },
                },
            },
        },
        // debug: true,
    }
);

const pngData = await svg2png(svg, { scale: 1 });
Deno.writeFileSync("./test.png", pngData);

console.log("Done in " + (new Date().getTime() - now.getTime()) + "ms");
