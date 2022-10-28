import { getEntries } from "./database.js";

const entriesArray = getEntries()

export const entriesHTML = () => {
    let entryHTMLString = ``

    //use .forEach to generate HTML representation of businesses
    entriesArray.forEach(
        // This function will be invoked on each iteration
        (entryObject) => {
            entryHTMLString += `<article class="journal_entries">
            <h3 id="area">${entryObject.title}</h3>
            </article>`  
        }
    )
    return entryHTMLString
}

// export const entriesHTML = () => {
//     let entriesHTMLString = `<article class="journal_entries">`

//     for (const entry of entries) {
//         entriesHTMLString += `<h3 id="area">${entry.title}</h3>`
//     }
//     entriesHTMLString += `</article>`
//     return entriesHTMLString
// }
