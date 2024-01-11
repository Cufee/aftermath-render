import satori from "satori";
import { svg2png, initialize } from "svg2png";
import { RenderProps } from "./types.d.ts";
import StatsContainer from "./StatsContainer.tsx";

await initialize(Deno.readFile("./svg2png.wasm"));
const fontData = Deno.readFileSync("./fonts/regular.ttf");

export default async function (props: RenderProps, scale = 1, debug = false) {
    const svg = await satori(<StatsContainer {...props} />, {
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
        debug,
    } as any);
    return svg2png(svg, { scale });
}
