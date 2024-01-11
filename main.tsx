import satori from "satori";
import { svg2png, initialize } from "svg2png";

import Spacer from "./src/Spacer.tsx";
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
        label: "Battles",
    },
    {
        session: "9000",
        career: "99999",
        label: "Avg. Damage",
    },
    {
        session: "00.00%",
        career: "100.00%",
        label: "Winrate",
    },
    {
        session: "00.00%",
        career: "100.00%",
        label: "Accuracy",
    },
];

const extendedBlocks = [
    [
        {
            session: "000",
            career: "15000",
            label: "Battles",
        },
        {
            session: "9000",
            career: "99999",
            label: "Avg. Damage",
        },
        {
            session: "00.00%",
            career: "100.00%",
            label: "Winrate",
        },
        {
            session: "00.00%",
            career: "100.00%",
            label: "Accuracy",
        },
    ],
    [
        {
            session: "0",
            career: "1",
            label: "Battles",
        },
        {
            session: "9000",
            career: "99999",
            label: "Avg. Damage",
        },
        {
            session: "00.00%",
            career: "100.00%",
            label: "Winrate",
        },
        {
            session: "99999",
            career: "9999",
            label: "Accuracy",
        },
    ],
];

const slimBlocks = [
    [
        {
            session: "0",
            label: "Battles",
        },
        {
            session: "9000",
            label: "Avg. Damage",
        },
        {
            session: "00.00%",
            label: "Winrate",
        },
        {
            session: "00.00%",
            label: "Accuracy",
        },
    ],
    [
        {
            session: "000",
            label: "Battles",
        },
        {
            session: "9000",
            label: "Avg. Damage",
        },
        {
            session: "00.00%",
            label: "Winrate",
        },
        {
            session: "00.00%",
            label: "Accuracy",
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

Deno.writeTextFileSync("./test.svg", svg);

const pngData = await svg2png(svg, { scale: 1 });
Deno.writeFileSync("./test.png", pngData);

console.log("Done in " + (new Date().getTime() - now.getTime()) + "ms");
