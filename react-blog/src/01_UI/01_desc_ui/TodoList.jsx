const person = {
    name: "Virat Kohli",
    theme: {
        backgroundColor: black,
        color: "pink",
    },
}

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}' Todos</h1>
            <img
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Nearing Hundrendth Hundred</li>
                <li>Top Batsman in the World</li>
                <li>Highest Centuries in Run Chasing</li>
            </ul>
        </div>
    )
}
