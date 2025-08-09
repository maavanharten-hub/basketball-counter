let countHomeEl = document.getElementById("count-home")
let countGuestEl = document.getElementById("count-guest")

let countHome = 0
let countGuest = 0

function addHome1() {
  countHome += 1
  countHomeEl.textContent = countHome
}

function addHome2() {
  countHome += 2
  countHomeEl.textContent = countHome
}

function addHome3() {
  countHome += 3
  countHomeEl.textContent = countHome
}

function addGuest1() {
  countGuest += 1
  countGuestEl.textContent = countGuest
}

function addGuest2() {
  countGuest += 2
  countGuestEl.textContent = countGuest
}

function addGuest3() {
  countGuest += 3
  countGuestEl.textContent = countGuest
}

function newGame() {
  countHome = 0
  countGuest = 0
  countHomeEl.textContent = countHome
  countGuestEl.textContent = countGuest
}