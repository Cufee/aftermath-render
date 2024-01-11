export default function TitleCard({
    name,
    clanTag,
}: {
    name: string;
    clanTag?: string;
}) {
    return (
        <div tw="flex justify-center items-center relative w-full px-4 py-4">
            <img
                tw="bg-gray-900 h-16 w-16 rounded-full"
                style={{ objectFit: "cover" }}
                src="https://picsum.photos/200/300"
            />
            <div tw="flex flex-col">
                <span tw="text-white ml-2 text-large">{name}</span>
                <span tw="text-gray-400 ml-2 text-medium">{clanTag}</span>
            </div>
        </div>
    );
}
