export default function TitleCard({
    name,
    clanTag,
}: {
    name: string;
    clanTag?: string;
}) {
    return (
        <div tw="flex justify-center items-center relative w-full px-8 py-8 bg-black bg-opacity-80 rounded-2xl">
            {/* <img
                tw="bg-gray-900 h-16 w-16"
                style={{ objectFit: "contain" }}
                src="https://picsum.photos/200/300"
            /> */}
            <div tw="flex flex-row items-center">
                {/* <span tw="text-large opacity-0">{clanTag}</span> */}
                <span tw="text-white px-2 text-large pt-2">{name}</span>
                <span tw="text-gray-400 text-large pt-2">{clanTag}</span>
            </div>
            {/* <div tw="h-16 w-16" /> */}
        </div>
    );
}
