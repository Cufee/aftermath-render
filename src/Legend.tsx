export default function Legend({ labels }: { labels: string[] }) {
    return (
        <div tw="flex flex-row items-center w-full">
            {labels.map((label) => (
                <LegendLabel label={label} />
            ))}
        </div>
    );
}

function LegendLabel({ label }: { label: string }) {
    return (
        <div
            tw="rounded-xl flex flex-grow items-center justify-center"
            style={{ flexBasis: "1/4" }}
        >
            <span tw="text-small text-gray-400">{label}</span>
        </div>
    );
}
