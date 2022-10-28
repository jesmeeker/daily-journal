import { entriesHTML } from "./Entries.js"

const mainContainer = document.querySelector("#journal")

const applicationHTML = `${entriesHTML()}`
    



// const asideContainer = document.querySelector("#guests")

// const guestHTML = 
// `
// <section class="guests">
//     <section>
//     <h2>Guests</h2>
//         ${currentGuestsList()}
// </section>
// </section>`

// const servicesContainer = document.querySelector("#services")

// const servicesHTML = 
// `<ul class="comma-list"><div class="services"> Park Services: </div>${serviceString()}
// </ul>

// `


mainContainer.innerHTML = applicationHTML
// asideContainer.innerHTML = guestHTML
// servicesContainer.innerHTML = servicesHTML

