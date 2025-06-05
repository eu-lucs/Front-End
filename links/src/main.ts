import './style.css'

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const app = document.querySelector<HTMLDivElement>("#app")!

app.innerHTML = `<h1>Olá, usuário ${id}!`