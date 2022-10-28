const database = {
    entries: [
        {
            id: 1,
            date: "10/21/2022",
            title: "Georgia Daze",
            mood: 4,
            content: "So many things to say because nature is beautiful. There were sunrises, sunsets, stars, moon, hiking. Leaves were turning and it was beautiful.",
            tags: "mountains, Georgia, sunset, Nature", 
            photo: {
                exists: true,
                img: "/photos/IMG_9092.png"
            }
        },
        {id: 2,
            date: "10/21/2022",
            title: "Georgia Daze",
            mood: 4,
            content: "So many things to say because nature is beautiful. There were sunrises, sunsets, stars, moon, hiking. Leaves were turning and it was beautiful.",
            tags: "mountains, Georgia, sunset, Nature", 
            photo: {
                exists: true,
                img: "/photos/IMG_9092.png"
            }
        },
        {id: 1,
            date: "10/21/2022",
            title: "Georgia Daze",
            mood: 4,
            content: "So many things to say because nature is beautiful. There were sunrises, sunsets, stars, moon, hiking. Leaves were turning and it was beautiful.",
            tags: "mountains, Georgia, sunset, Nature", 
            photo: {
                exists: true,
                img: "/photos/IMG_9092.png"
            }
        }
    ]
} 

export const getEntries = () => {
    return database.entries.map(entries => ({...entries}))
}