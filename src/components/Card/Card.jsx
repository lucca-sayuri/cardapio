import getImageUrl from "../../utils/getImageUrl";

export default function Card({name, desc, image}) {
    return (
        <>
            <div className="overflow-hidden w-40 bg-stone-50 rounded-lg shadow-lg text-left min-w-54">
                <img src={getImageUrl(image)} alt={name} />
                <div className="px-4 py-3">
                    <h2 className="text-md">{name}</h2>
                    <p className="mt-2 text-sm">{desc}</p>
                </div>
            </div>
        </>
    );
}
