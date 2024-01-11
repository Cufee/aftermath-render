function Spacer({
    size,
    direction,
}: {
    size: string;
    direction?: "horizontal" | "vertical";
}) {
    return <div tw={`${direction === "horizontal" ? "h" : "w"}-${size}`} />;
}
export default Spacer;
