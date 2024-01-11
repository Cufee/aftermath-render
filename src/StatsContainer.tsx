import { ComponentChildren } from "preact";

export default function StatsContainer({
    children,
}: {
    children: ComponentChildren;
}) {
    return (
        <div
            tw="flex flex-col w-full relative p-4 pb-2 relative"
            style={
                {
                    // backgroundImage: "url(https://picsum.photos/500/900)",
                    // backgroundPosition: "center",
                    // backgroundRepeat: "no-repeat",
                }
            }
        >
            {children}
        </div>
    );
}
