document.addEventListener('DOMContentLoaded', () => {

  setTimeout(typeThis, 500)

  /*
  Every time you add a new character, add the cursor span with it. Then, once you add the next character,
  remove the span you just added and add another one after the new character. When you are removing the words. Just
  remove the last part of the innerHTML right before the cursor, and the cursor will move accordingly.
   */

})
let things = ['golfer.', 'web developer.', 'programmer.']
let j = 0

function typeThis() {
  let i = 0

  if (j === things.length) {
    j = 0
    i = 0
    return
  }

  let type = document.querySelector('#typer')
  let typer = setInterval(() => {

    if (i < things[j].length) {
      type.innerHTML = type.innerHTML.substring(0, type.innerHTML.indexOf("<"))
      type.innerHTML += (things[j].charAt(i) + "<span class=\"cursor\">|</span>")
      i++
    } else {
      clearInterval(typer)

      // keeps last statement
      if (j < things.length - 1) {
        setTimeout(removeThis, 1000)
      }
    }

  }, 75)

}

function removeThis() {
  let type = document.querySelector('#typer')

  let remover = setInterval(() => {

    if (type.innerHTML.length > (7 + "<span class='cursor'>|</span>".length)) {
      type.innerHTML = type.innerHTML.substring(0, type.innerHTML.length - "<span class='cursor'>|</span>".length - 1)
      type.innerHTML += '<span class="cursor">|</span>'
    } else {
      clearInterval(remover)
      j++
      typeThis()
    }
  }, 50)
}

function clicked() {
  document.querySelector('.nav-links').classList.toggle('nav-active')
  document.querySelector('.burger').classList.toggle('toggle')
}
