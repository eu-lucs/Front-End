import './style.css'
const select = document.getElementById('animalSelect') as HTMLSelectElement;
const image = document.getElementById('petImage') as HTMLImageElement;
const button = document.getElementById('fetchButton') as HTMLButtonElement;

async function fetchPet(animal: string) {
  try {
    if (animal === 'dog') {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      image.src = data.message;
    } else {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await res.json();
      image.src = data[0].url;
    }
  } catch {
    image.alt = 'Erro ao carregar imagem';
  }
}

button.addEventListener('click', () => fetchPet(select.value));
select.addEventListener('change', () => fetchPet(select.value));
