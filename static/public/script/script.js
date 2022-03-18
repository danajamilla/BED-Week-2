// drag and drop
const section = document.querySelector('section')

console.log(section)

section.addEventListener ('dragstart', (event) => { 
 console.log (event)                          
 })

section.addEventListener ('dragdrop', (event) => { 
 console.log (event)                          
 })