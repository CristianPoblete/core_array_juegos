const videojuegos = Object.freeze([
    { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },
    { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },
    { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },
    { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },
    { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },
    { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },
    { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },
    { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },
    { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },
    { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },
    { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },
    { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },
    { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },
    { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },
    { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },
    { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },
    { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },
    { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },
    { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },
    { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },
    { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },
    { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },
    { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }
]);



// Un conjunto de videojuegos cuyo número de identificación es divisible uniformemente por 3.

let divisiblePorTres = (videojuego) => videojuego.id % 3 === 0;

console.log(videojuegos.filter(divisiblePorTres));

// Un conjunto de videojuegos que pertenecen al género «acción-RPG».

let filtrarGeneroAccionRPG = (videojuego) => videojuego.genero === 'acción-RPG';

console.log(videojuegos.filter(filtrarGeneroAccionRPG));

// Un conjunto de videojuegos que tienen más de un género.

let filtrarGeneros = (videojuegos) => {
    return videojuegos.filter(juego => juego.genero.includes('-'));
};
let juegosFiltrados = filtrarGeneros(videojuegos);
console.log(juegosFiltrados);

// Una lista con los nombres de los videojuegos.

let soloNombres = videojuegos.map(juego => juego.nombre);

console.log(soloNombres);


// Una lista con los nombres de los videojuegos con un número de identificación superior a 19.

let superiorADiecinueve = videojuegos.filter((numero) => {
    return numero.id > 19;
});

console.log(superiorADiecinueve);

// Una lista con los nombres de los videojuegos cuyo único género es «shooter».

let filtroShooter = videojuegos.filter((juego) => {
    return juego.genero === 'shooter';

});

console.log(filtroShooter);

// Una lista que contenga solo el primer género de todos los videojuegos cuyo segundo género es «aventura».

const aventuraComoSegundoGenero = videojuegos.filter(game => {
    const generos = game.genero.split('-');
    return generos.length === 2 && generos[1].trim() === "aventura";
  });
  
  console.log(aventuraComoSegundoGenero);

  
// Un conteo del número de videojuegos que son del género «party».

const juegosParty = videojuegos.filter(game => game.genero === "party");
const numeroJuegosParty = juegosParty.length;

console.log(`Número de videojuegos del género "party": ${numeroJuegosParty}`);


// Una lista con todos los videojuegos excepto aquellos cuyo número de identificación sea múltiplo de 5.

const juegosNoMultiplosDe5 = videojuegos.filter(game => game.id % 5 !== 0);

console.log("Videojuegos cuyo ID no es múltiplo de 5:");
juegosNoMultiplosDe5.forEach(game => {
  console.log(`ID: ${game.id}, Nombre: ${game.nombre}`);
});


// Una lista con todos los videojuegos y para el videojuego con el número de identificación 5, se cambia su género por «otro».

const videojuegosModificados = videojuegos.map(game => {
    if (game.id === 5) {
      return { ...game, genero: "otro" };
    }
    return game;
  });
  
  console.log("Lista de videojuegos (con el género del juego ID 5 cambiado a 'otro'):");
  videojuegosModificados.forEach(game => {
    console.log(`ID: ${game.id}, Nombre: ${game.nombre}, Género: ${game.genero}, Plataforma: ${game.plataforma}`);
  });