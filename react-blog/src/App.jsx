import { getImageUrl } from "./01_UI/02_jsx/Utils"

function Profile({
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize = 40,
}) {
    return (
        <div>
            <h2>{name}</h2>
            <img className="avatar" src={getImageUrl(imageId)} alt={name} />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b>({awards.join(", ")})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovery}
                </li>
            </ul>
        </div>
    )
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile
                imageId="szV5sdG"
                name="Maria Skłodowska-Curie"
                profession="physicist and chemist"
                discovery="polonium (chemical element)"
                awards={[
                    "Nobel Prize in Physics",
                    "Nobel Prize in Chemistry",
                    "Davy Medal",
                    "Matteucci Medal",
                ]}
            />
            <Profile
                imageId="YfeOqp2"
                name="Katsuko Saruhashi"
                profession="geochemist"
                discovery="a method for measuring carbon dioxide in seawater"
                awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
            />
        </div>
    )
}
