const resp = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

const res = await resp.json();

console.log(res);
