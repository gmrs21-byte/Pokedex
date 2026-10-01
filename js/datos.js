const pokemon = [

    {
        numero: 1,
        id: "bulbasaur",
        region: "Kanto",
        nombre: "Bulbasaur",
        tipos: ["Planta", "Veneno"],
        altura: 0.7,
        peso: 6.9,
        categoria: "Semilla",
        habilidades: ["Espesura"],

        stats: {
            ps: 45,
            ataque: 49,
            defensa: 49,
            ataqueEspecial: 65,
            defensaEspecial: 65,
            velocidad: 45
        },

        evoluciones: [
            "bulbasaur",
            "ivysaur",
            "venusaur",
            "mega-venusaur"
        ],

        formasRegionales: [],

        formasEspeciales: [],

        descripcion:
            "Bulbasaur lleva una semilla en su espalda desde que nace.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
    },


    {
        numero: 2,
        id: "ivysaur",
        region: "Kanto",
        nombre: "Ivysaur",
        tipos: ["Planta", "Veneno"],
        altura: 1.0,
        peso: 13.0,
        categoria: "Semilla",
        habilidades: ["Espesura"],

        stats: {
            ps: 60,
            ataque: 62,
            defensa: 63,
            ataqueEspecial: 80,
            defensaEspecial: 80,
            velocidad: 60
        },

        evoluciones: [
            "bulbasaur",
            "ivysaur",
            "venusaur",
            "mega-venusaur"
        ],

        formasRegionales: [],

        formasEspeciales: [],

        descripcion:
            "Cuando el bulbo de su espalda florece, desprende un aroma muy agradable.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png"
    },


    {
        numero: 3,
        id: "venusaur",
        region: "Kanto",
        nombre: "Venusaur",
        tipos: ["Planta", "Veneno"],
        altura: 2.0,
        peso: 100.0,
        categoria: "Semilla",
        habilidades: ["Espesura"],

        stats: {
            ps: 80,
            ataque: 82,
            defensa: 83,
            ataqueEspecial: 100,
            defensaEspecial: 100,
            velocidad: 80
        },

        evoluciones: [
            "bulbasaur",
            "ivysaur",
            "venusaur",
            "mega-venusaur"
        ],

        formasRegionales: [],

        formasEspeciales: [],

        descripcion:
            "La flor de su espalda absorbe energía solar y desprende un aroma muy agradable.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png"
    },


    {
        numero: 3,
        id: "mega-venusaur",
        region: "Kanto",
        nombre: "Mega Venusaur",
        esMega: true,
        tipos: ["Planta", "Veneno"],
        altura: 2.4,
        peso: 155.5,
        categoria: "Semilla",
        habilidades: ["Sebo"],

        stats: {
            ps: 80,
            ataque: 100,
            defensa: 123,
            ataqueEspecial: 122,
            defensaEspecial: 120,
            velocidad: 80
        },

        evoluciones: [
            "bulbasaur",
            "ivysaur",
            "venusaur",
            "mega-venusaur"
        ],

        formasRegionales: [],

        formasEspeciales: [],

        descripcion:
            "Mega Venusaur es la forma megaevolucionada de Venusaur.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10033.png"
    },


    {
        numero: 4,
        id: "charmander",
        region: "Kanto",
        nombre: "Charmander",
        tipos: ["Fuego"],
        altura: 0.6,
        peso: 8.5,
        categoria: "Lagartija",
        habilidades: ["Mar Llamas"],

        stats: {
            ps: 39,
            ataque: 52,
            defensa: 43,
            ataqueEspecial: 60,
            defensaEspecial: 50,
            velocidad: 65
        },

        evoluciones: [
            "charmander",
            "charmeleon",
            "charizard"
        ],

        formasRegionales: [],

        formasEspeciales: [],

        descripcion:
            "La llama de su cola indica su estado de ánimo.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png"
    },


    {
        numero: 5,
        id: "charmeleon",
        region: "Kanto",
        nombre: "Charmeleon",
        tipos: ["Fuego"],
        altura: 1.1,
        peso: 19.0,
        categoria: "Llama",
        habilidades: ["Mar Llamas"],

        stats: {
            ps: 58,
            ataque: 64,
            defensa: 58,
            ataqueEspecial: 80,
            defensaEspecial: 65,
            velocidad: 80
        },

        evoluciones: [
            "charmander",
            "charmeleon",
            "charizard"
        ],

        formasRegionales: [],

        formasEspeciales: [],

        descripcion:
            "Cuando se enfrenta a rivales fuertes, su llama se vuelve más intensa.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/5.png"
    },


    {
        numero: 6,
        id: "charizard",
        region: "Kanto",
        nombre: "Charizard",
        tipos: ["Fuego", "Volador"],
        altura: 1.7,
        peso: 90.5,
        categoria: "Llama",
        habilidades: ["Mar Llamas"],

        stats: {
            ps: 78,
            ataque: 84,
            defensa: 78,
            ataqueEspecial: 109,
            defensaEspecial: 85,
            velocidad: 100
        },

        evoluciones: [
            "charmander",
            "charmeleon"
        ],

        formasRegionales: [],

        formasEspeciales: [
            "charizard-gigamax"
        ],

        descripcion:
            "Pokémon que puede volar y lanzar poderosos ataques de fuego.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png"
    },


    {
        id: "mega-charizard-x",
        numero: 6,
        nombre: "Mega Charizard X",

        tipos: [
            "Fuego",
            "Dragón"
        ],

        region: "Kanto",

        altura: 1.7,

        peso: 110.5,

        categoria: "Pokémon Llama",

        habilidades: [
            "Garra Dura"
        ],

        descripcion:
            "Al megaevolucionar, Charizard adopta una forma de tipo Fuego y Dragón con un gran aumento de poder.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10034.png",

        stats: {
            ps: 78,
            ataque: 130,
            defensa: 111,
            ataqueEspecial: 130,
            defensaEspecial: 85,
            velocidad: 100
        },

        formasRegionales: [],

        formasEspeciales: [],

        esMega: true
    },


    {
        id: "mega-charizard-y",
        numero: 6,
        nombre: "Mega Charizard Y",

        tipos: [
            "Fuego",
            "Volador"
        ],

        region: "Kanto",

        altura: 1.7,

        peso: 100.5,

        categoria: "Pokémon Llama",

        habilidades: [
            "Sequía"
        ],

        descripcion:
            "Al megaevolucionar, Charizard adopta una forma más poderosa de tipo Fuego y Volador.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10035.png",

        stats: {
            ps: 78,
            ataque: 104,
            defensa: 78,
            ataqueEspecial: 159,
            defensaEspecial: 115,
            velocidad: 100
        },

        formasRegionales: [],

        formasEspeciales: [],

        esMega: true
    },


    {
        numero: 25,
        id: "pikachu",
        region: "Kanto",
        nombre: "Pikachu",
        tipos: ["Eléctrico"],
        altura: 0.4,
        peso: 6.0,
        categoria: "Ratón",
        habilidades: ["Electricidad Estática"],

        stats: {
            ps: 35,
            ataque: 55,
            defensa: 40,
            ataqueEspecial: 50,
            defensaEspecial: 50,
            velocidad: 90
        },

        evoluciones: [
    "pikachu",
    "raichu"
],

       formasRegionales: [],

        formasEspeciales: [],

        descripcion:
            "Puede acumular electricidad en las bolsas de sus mejillas.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png"
    },


    {
        numero: 150,
        id: "mewtwo",
        region: "Kanto",
        nombre: "Mewtwo",
        tipos: ["Psíquico"],
        altura: 2.0,
        peso: 122.0,
        categoria: "Genético",
        habilidades: ["Presión"],

        stats: {
            ps: 106,
            ataque: 110,
            defensa: 90,
            ataqueEspecial: 154,
            defensaEspecial: 90,
            velocidad: 130
        },

        evoluciones: [
            "mewtwo"
        ],

        formasRegionales: [],

        formasEspeciales: [],

        descripcion:
            "Un Pokémon creado mediante manipulación genética.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/150.png"
    },


    {
        numero: 384,
        id: "rayquaza",
        region: "Hoenn",
        nombre: "Rayquaza",
        tipos: ["Dragón", "Volador"],
        altura: 7.0,
        peso: 206.5,
        categoria: "Cielo",
        habilidades: ["Air Lock"],

        stats: {
            ps: 105,
            ataque: 150,
            defensa: 90,
            ataqueEspecial: 150,
            defensaEspecial: 90,
            velocidad: 95
        },

        evoluciones: [
            "rayquaza"
        ],

        formasRegionales: [],

        formasEspeciales: [],

        descripcion:
            "Vive en la capa de ozono y desciende ocasionalmente a la superficie.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/384.png"
    },


    {
        id: "meowth",
        numero: 52,
        nombre: "Meowth",

        tipos: ["Normal"],

        region: "Kanto",

        altura: 0.4,
        peso: 4.2,

        categoria: "Pokémon Gato Arañazo",

        habilidades: [
            "Recogida",
            "Experto"
        ],

        descripcion:
            "Meowth es un Pokémon de tipo Normal conocido por su aspecto felino.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/52.png",

        stats: {
            ps: 40,
            ataque: 45,
            defensa: 35,
            ataqueEspecial: 40,
            defensaEspecial: 40,
            velocidad: 90
        },

        evoluciones: [
    "meowth",
    "persian"
],

        formasRegionales: [
            "meowth-alola",
            "meowth-galar"
        ],

        formasEspeciales: []
    },


    {
        id: "meowth-alola",
        numero: 52,
        nombre: "Meowth de Alola",

        tipos: ["Siniestro"],

        region: "Alola",

        altura: 0.4,
        peso: 4.2,

        categoria: "Pokémon Gato Araña",

        habilidades: [
            "Recogida",
            "Experto"
        ],

        descripcion:
            "Este Meowth de Alola se acostumbró a vivir entre la realeza y desarrolló un carácter orgulloso y exigente.",

        imagen:
            "https://archives.bulbagarden.net/wiki/Special:Redirect/file/0052Meowth-Alola.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/10107.png",

        stats: {
            ps: 40,
            ataque: 35,
            defensa: 35,
            ataqueEspecial: 50,
            defensaEspecial: 40,
            velocidad: 90
        },

        evoluciones: [],

        formasRegionales: [],

        formasEspeciales: []
    },


    {
        id: "meowth-galar",
        numero: 52,
        nombre: "Meowth de Galar",

        tipos: ["Acero"],

        region: "Galar",

        altura: 0.4,
        peso: 7.5,

        categoria: "Pokémon Gato Araña",

        habilidades: [
            "Recogida",
            "Garra Dura"
        ],

        descripcion:
            "La vida entre un pueblo marinero y aguerrido de Galar hizo que el cuerpo de este Meowth se endureciera hasta adquirir partes de hierro.",

        imagen:
            "https://archives.bulbagarden.net/wiki/Special:Redirect/file/0052Meowth-Galar.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/10161.png",

        stats: {
            ps: 50,
            ataque: 65,
            defensa: 55,
            ataqueEspecial: 40,
            defensaEspecial: 40,
            velocidad: 40
        },

        evoluciones: [],

        formasRegionales: [],

        formasEspeciales: []
    },


    {
        id: "charizard-gigamax",

        numero: 6,

        nombre: "Charizard Gigamax",

        tipos: [
            "Fuego",
            "Volador"
        ],

        region: "Galar",

        altura: 28.0,

        peso: 0,

        categoria: "Pokémon Llama",

        habilidades: [
            "Mar Llamas"
        ],

        descripcion:
            "Charizard adopta esta forma gigantesca al usar el fenómeno Dinamax.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/6.png",

        stats: {
            ps: 78,
            ataque: 84,
            defensa: 78,
            ataqueEspecial: 109,
            defensaEspecial: 85,
            velocidad: 100
        },

        evoluciones: [],

        formasRegionales: [],

        formasEspeciales: [],

    esMega: false
    },


    {
        numero: 7,
        id: "squirtle",
        nombre: "Squirtle",
        tipos: ["Agua"],
        region: "Kanto",
        altura: 0.5,
        peso: 9.0,
        categoria: "Tortuguita",
        habilidades: ["Torrente"],

        stats: {
            ps: 44,
            ataque: 48,
            defensa: 65,
            ataqueEspecial: 50,
            defensaEspecial: 64,
            velocidad: 43
        },

        evoluciones: ["squirtle", "wartortle", "blastoise"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Se protege de los ataques con el caparazón y dispara agua a presión desde él.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png"
    },


    {
        numero: 8,
        id: "wartortle",
        nombre: "Wartortle",
        tipos: ["Agua"],
        region: "Kanto",
        altura: 1.0,
        peso: 22.5,
        categoria: "Tortuga",
        habilidades: ["Torrente"],

        stats: {
            ps: 59,
            ataque: 63,
            defensa: 80,
            ataqueEspecial: 65,
            defensaEspecial: 80,
            velocidad: 58
        },

        evoluciones: ["squirtle", "wartortle", "blastoise"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Su cola peluda almacena agua y le permite nadar con gran agilidad.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/8.png"
    },


    {
        numero: 9,
        id: "blastoise",
        nombre: "Blastoise",
        tipos: ["Agua"],
        region: "Kanto",
        altura: 1.6,
        peso: 85.5,
        categoria: "Armazón",
        habilidades: ["Torrente"],

        stats: {
            ps: 79,
            ataque: 83,
            defensa: 100,
            ataqueEspecial: 85,
            defensaEspecial: 105,
            velocidad: 78
        },

        evoluciones: ["squirtle", "wartortle", "blastoise"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Sus enormes cañones de agua pueden lanzar proyectiles con gran precisión.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png"
    },


    {
        numero: 10,
        id: "caterpie",
        nombre: "Caterpie",
        tipos: ["Bicho"],
        region: "Kanto",
        altura: 0.3,
        peso: 2.9,
        categoria: "Gusano",
        habilidades: ["Polvo Escudo"],

        stats: {
            ps: 45,
            ataque: 30,
            defensa: 35,
            ataqueEspecial: 20,
            defensaEspecial: 20,
            velocidad: 45
        },

        evoluciones: ["caterpie", "metapod", "butterfree"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Tiene un apetito enorme y devora hojas sin descanso.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10.png"
    },


    {
        numero: 11,
        id: "metapod",
        nombre: "Metapod",
        tipos: ["Bicho"],
        region: "Kanto",
        altura: 0.7,
        peso: 9.9,
        categoria: "Capullo",
        habilidades: ["Mudar"],

        stats: {
            ps: 50,
            ataque: 20,
            defensa: 55,
            ataqueEspecial: 25,
            defensaEspecial: 25,
            velocidad: 30
        },

        evoluciones: ["caterpie", "metapod", "butterfree"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Su cuerpo es muy blando y permanece protegido dentro de una dura coraza.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/11.png"
    },


    {
        numero: 12,
        id: "butterfree",
        nombre: "Butterfree",
        tipos: ["Bicho", "Volador"],
        region: "Kanto",
        altura: 1.1,
        peso: 32.0,
        categoria: "Mariposa",
        habilidades: ["Ojo Compuesto"],

        stats: {
            ps: 60,
            ataque: 45,
            defensa: 50,
            ataqueEspecial: 90,
            defensaEspecial: 80,
            velocidad: 70
        },

        evoluciones: ["caterpie", "metapod", "butterfree"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Agita sus alas para esparcir un polvo que puede producir distintos efectos.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/12.png"
    },


    {
        numero: 13,
        id: "weedle",
        nombre: "Weedle",
        tipos: ["Bicho", "Veneno"],
        region: "Kanto",
        altura: 0.3,
        peso: 3.2,
        categoria: "Oruga",
        habilidades: ["Polvo Escudo"],

        stats: {
            ps: 40,
            ataque: 35,
            defensa: 30,
            ataqueEspecial: 20,
            defensaEspecial: 20,
            velocidad: 50
        },

        evoluciones: ["weedle", "kakuna", "beedrill"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "El aguijón venenoso de su cabeza le sirve para defenderse.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/13.png"
    },


    {
        numero: 14,
        id: "kakuna",
        nombre: "Kakuna",
        tipos: ["Bicho", "Veneno"],
        region: "Kanto",
        altura: 0.6,
        peso: 10.0,
        categoria: "Capullo",
        habilidades: ["Mudar"],

        stats: {
            ps: 45,
            ataque: 25,
            defensa: 50,
            ataqueEspecial: 25,
            defensaEspecial: 25,
            velocidad: 35
        },

        evoluciones: ["weedle", "kakuna", "beedrill"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Permanece prácticamente inmóvil mientras prepara su evolución.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/14.png"
    },


    {
        numero: 15,
        id: "beedrill",
        nombre: "Beedrill",
        tipos: ["Bicho", "Veneno"],
        region: "Kanto",
        altura: 1.0,
        peso: 29.5,
        categoria: "Abeja Veneno",
        habilidades: ["Enjambre"],

        stats: {
            ps: 65,
            ataque: 90,
            defensa: 40,
            ataqueEspecial: 45,
            defensaEspecial: 80,
            velocidad: 75
        },

        evoluciones: ["weedle", "kakuna", "beedrill"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Ataca en grupo y utiliza sus tres aguijones venenosos para combatir.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/15.png"
    },


    {
        numero: 16,
        id: "pidgey",
        nombre: "Pidgey",
        tipos: ["Normal", "Volador"],
        region: "Kanto",
        altura: 0.3,
        peso: 1.8,
        categoria: "Pajarito",
        habilidades: ["Vista Lince"],

        stats: {
            ps: 40,
            ataque: 45,
            defensa: 40,
            ataqueEspecial: 35,
            defensaEspecial: 35,
            velocidad: 56
        },

        evoluciones: ["pidgey", "pidgeotto", "pidgeot"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Es muy común y suele encontrarse en zonas de hierba y bosques.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/16.png"
    },


    {
        numero: 17,
        id: "pidgeotto",
        nombre: "Pidgeotto",
        tipos: ["Normal", "Volador"],
        region: "Kanto",
        altura: 1.1,
        peso: 30.0,
        categoria: "Pájaro",
        habilidades: ["Vista Lince"],

        stats: {
            ps: 63,
            ataque: 60,
            defensa: 55,
            ataqueEspecial: 50,
            defensaEspecial: 50,
            velocidad: 71
        },

        evoluciones: ["pidgey", "pidgeotto", "pidgeot"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Controla un territorio extenso y ahuyenta a otros Pokémon de su zona.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/17.png"
    },


    {
        numero: 18,
        id: "pidgeot",
        nombre: "Pidgeot",
        tipos: ["Normal", "Volador"],
        region: "Kanto",
        altura: 1.5,
        peso: 39.5,
        categoria: "Pájaro",
        habilidades: ["Vista Lince"],

        stats: {
            ps: 83,
            ataque: 80,
            defensa: 75,
            ataqueEspecial: 70,
            defensaEspecial: 70,
            velocidad: 101
        },

        evoluciones: ["pidgey", "pidgeotto", "pidgeot"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Puede alcanzar velocidades de vuelo enormes y posee una gran visión.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/18.png"
    },


    {
        numero: 19,
        id: "rattata",
        nombre: "Rattata",
        tipos: ["Normal"],
        region: "Kanto",
        altura: 0.3,
        peso: 3.5,
        categoria: "Ratón",
        habilidades: ["Fuga", "Agallas"],

        stats: {
            ps: 30,
            ataque: 56,
            defensa: 35,
            ataqueEspecial: 25,
            defensaEspecial: 35,
            velocidad: 72
        },

        evoluciones: ["rattata", "raticate"],

       formasRegionales: [
    "rattata-alola"
],
        formasEspeciales: [],

        descripcion:
            "Tiene unos incisivos que crecen continuamente y necesita roer para mantenerlos.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/19.png"
    },


    {
        numero: 20,
        id: "raticate",
        nombre: "Raticate",
        tipos: ["Normal"],
        region: "Kanto",
        altura: 0.7,
        peso: 18.5,
        categoria: "Ratón",
        habilidades: ["Fuga", "Agallas"],

        stats: {
            ps: 55,
            ataque: 81,
            defensa: 60,
            ataqueEspecial: 50,
            defensaEspecial: 70,
            velocidad: 97
        },

        evoluciones: ["rattata", "raticate"],

       formasRegionales: [
    "raticate-alola"
],
        formasEspeciales: [],

        descripcion:
            "Sus grandes incisivos son capaces de atravesar materiales muy resistentes.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/20.png"
    },

{
    numero: 19,
    id: "rattata-alola",
    nombre: "Rattata de Alola",

    tipos: [
        "Siniestro",
        "Normal"
    ],

    region: "Alola",

    altura: 0.3,
    peso: 3.8,

    categoria: "Pokémon Ratón",

    habilidades: [
        "Fuga",
        "Agallas"
    ],

    stats: {
        ps: 30,
        ataque: 56,
        defensa: 35,
        ataqueEspecial: 25,
        defensaEspecial: 35,
        velocidad: 72
    },

    evoluciones: [
        "rattata-alola",
        "raticate-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Se adaptó a las condiciones de Alola y pasó a llevar una vida principalmente nocturna.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10091.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10091.png"
},

{
    numero: 20,
    id: "raticate-alola",
    nombre: "Raticate de Alola",

    tipos: [
        "Siniestro",
        "Normal"
    ],

    region: "Alola",

    altura: 0.7,
    peso: 25.5,

    categoria: "Pokémon Ratón",

    habilidades: [
        "Gula",
        "Agallas"
    ],

    stats: {
        ps: 75,
        ataque: 71,
        defensa: 70,
        ataqueEspecial: 40,
        defensaEspecial: 80,
        velocidad: 77
    },

    evoluciones: [
        "rattata-alola",
        "raticate-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Raticate de Alola almacena grandes cantidades de comida en su madriguera y suele vivir en colonias.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10092.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10092.png"
},

    {
        numero: 21,
        id: "spearow",
        nombre: "Spearow",
        tipos: ["Normal", "Volador"],
        region: "Kanto",
        altura: 0.3,
        peso: 2.0,
        categoria: "Pajarito",
        habilidades: ["Vista Lince"],

        stats: {
            ps: 40,
            ataque: 60,
            defensa: 30,
            ataqueEspecial: 31,
            defensaEspecial: 31,
            velocidad: 70
        },

        evoluciones: ["spearow", "fearow"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Tiene un carácter agresivo y puede perseguir a sus presas durante mucho tiempo.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/21.png"
    },


    {
        numero: 22,
        id: "fearow",
        nombre: "Fearow",
        tipos: ["Normal", "Volador"],
        region: "Kanto",
        altura: 1.2,
        peso: 38.0,
        categoria: "Pico",
        habilidades: ["Vista Lince"],

        stats: {
            ps: 65,
            ataque: 90,
            defensa: 65,
            ataqueEspecial: 61,
            defensaEspecial: 61,
            velocidad: 100
        },

        evoluciones: ["spearow", "fearow"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Sus largas alas le permiten mantenerse en el aire durante mucho tiempo.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/22.png"
    },


    {
        numero: 23,
        id: "ekans",
        nombre: "Ekans",
        tipos: ["Veneno"],
        region: "Kanto",
        altura: 2.0,
        peso: 6.9,
        categoria: "Serpiente",
        habilidades: ["Mudar", "Intimidación"],

        stats: {
            ps: 35,
            ataque: 60,
            defensa: 44,
            ataqueEspecial: 40,
            defensaEspecial: 54,
            velocidad: 55
        },

        evoluciones: ["ekans", "arbok"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "Se desplaza silenciosamente por la hierba y utiliza su lengua para detectar a sus presas.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/23.png"
    },


    {
        numero: 24,
        id: "arbok",
        nombre: "Arbok",
        tipos: ["Veneno"],
        region: "Kanto",
        altura: 3.5,
        peso: 65.0,
        categoria: "Cobra",
        habilidades: ["Mudar", "Intimidación"],

        stats: {
            ps: 60,
            ataque: 95,
            defensa: 69,
            ataqueEspecial: 65,
            defensaEspecial: 79,
            velocidad: 80
        },

        evoluciones: ["ekans", "arbok"],

        formasRegionales: [],
        formasEspeciales: [],

        descripcion:
            "La marca de su pecho cambia según su estado de ánimo y puede intimidar a sus enemigos.",

        imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",

        imagenShiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/24.png"
    },


    {
        numero: 27,
        id: "sandshrew",
        nombre: "Sandshrew",
        tipos: ["Tierra"],
        region: "Kanto",
        altura: 0.6,
        peso: 12,
        categoria: "Pokémon Ratón",
        habilidades: ["Velo Arena"],
        descripcion: "Su cuerpo está protegido por una piel dura que le permite resistir los golpes.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/27.png",
        stats: {
            ps: 50,
            ataque: 75,
            defensa: 85,
            ataqueEspecial: 20,
            defensaEspecial: 30,
            velocidad: 40
        },
        evoluciones: ["sandshrew", "sandslash"],
        formasRegionales: [
    "sandshrew-alola"
],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 28,
        id: "sandslash",
        nombre: "Sandslash",
        tipos: ["Tierra"],
        region: "Kanto",
        altura: 1,
        peso: 29.5,
        categoria: "Pokémon Ratón",
        habilidades: ["Velo Arena"],
        descripcion: "Sus afiladas garras y púas le permiten defenderse y desplazarse rápidamente.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/28.png",
        stats: {
            ps: 75,
            ataque: 100,
            defensa: 110,
            ataqueEspecial: 45,
            defensaEspecial: 55,
            velocidad: 65
        },
        evoluciones: ["sandshrew", "sandslash"],
        formasRegionales: [
    "sandslash-alola"
],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 29,
        id: "nidoran-f",
        nombre: "Nidoran♀",
        tipos: ["Veneno"],
        region: "Kanto",
        altura: 0.4,
        peso: 7,
        categoria: "Pokémon Venenopúas",
        habilidades: ["Punto Tóxico"],
        descripcion: "Aunque es pequeño, sus grandes orejas le permiten detectar sonidos lejanos.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/29.png",
        stats: {
            ps: 55,
            ataque: 47,
            defensa: 52,
            ataqueEspecial: 40,
            defensaEspecial: 40,
            velocidad: 41
        },
        evoluciones: ["nidoran-f", "nidorina", "nidoqueen"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 30,
        id: "nidorina",
        nombre: "Nidorina",
        tipos: ["Veneno"],
        region: "Kanto",
        altura: 0.8,
        peso: 20,
        categoria: "Pokémon Venenopúas",
        habilidades: ["Punto Tóxico"],
        descripcion: "Sus púas contienen veneno y se vuelven más peligrosas cuando se siente amenazada.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/30.png",
        stats: {
            ps: 70,
            ataque: 62,
            defensa: 67,
            ataqueEspecial: 55,
            defensaEspecial: 55,
            velocidad: 56
        },
        evoluciones: ["nidoran-f", "nidorina", "nidoqueen"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 31,
        id: "nidoqueen",
        nombre: "Nidoqueen",
        tipos: ["Veneno", "Tierra"],
        region: "Kanto",
        altura: 1.3,
        peso: 60,
        categoria: "Pokémon Taladro",
        habilidades: ["Punto Tóxico"],
        descripcion: "Su cuerpo está cubierto por una armadura resistente que le permite proteger a sus crías.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/31.png",
        stats: {
            ps: 90,
            ataque: 92,
            defensa: 87,
            ataqueEspecial: 75,
            defensaEspecial: 85,
            velocidad: 76
        },
        evoluciones: ["nidoran-f", "nidorina", "nidoqueen"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 32,
        id: "nidoran-m",
        nombre: "Nidoran♂",
        tipos: ["Veneno"],
        region: "Kanto",
        altura: 0.5,
        peso: 9,
        categoria: "Pokémon Venenopúas",
        habilidades: ["Punto Tóxico"],
        descripcion: "Sus grandes orejas captan sonidos lejanos y sus púas contienen veneno.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/32.png",
        stats: {
            ps: 46,
            ataque: 57,
            defensa: 40,
            ataqueEspecial: 40,
            defensaEspecial: 40,
            velocidad: 50
        },
        evoluciones: ["nidoran-m", "nidorino", "nidoking"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 33,
        id: "nidorino",
        nombre: "Nidorino",
        tipos: ["Veneno"],
        region: "Kanto",
        altura: 0.9,
        peso: 19.5,
        categoria: "Pokémon Venenopúas",
        habilidades: ["Punto Tóxico"],
        descripcion: "Es agresivo y sus cuernos pueden liberar un potente veneno.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/33.png",
        stats: {
            ps: 61,
            ataque: 72,
            defensa: 57,
            ataqueEspecial: 55,
            defensaEspecial: 55,
            velocidad: 65
        },
        evoluciones: ["nidoran-m", "nidorino", "nidoking"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 34,
        id: "nidoking",
        nombre: "Nidoking",
        tipos: ["Veneno", "Tierra"],
        region: "Kanto",
        altura: 1.4,
        peso: 62,
        categoria: "Pokémon Taladro",
        habilidades: ["Punto Tóxico"],
        descripcion: "Su enorme fuerza y su poderoso cuerno lo convierten en un peligroso combatiente.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/34.png",
        stats: {
            ps: 81,
            ataque: 102,
            defensa: 77,
            ataqueEspecial: 85,
            defensaEspecial: 75,
            velocidad: 85
        },
        evoluciones: ["nidoran-m", "nidorino", "nidoking"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 35,
        id: "clefairy",
        nombre: "Clefairy",
        tipos: ["Hada"],
        region: "Kanto",
        altura: 0.6,
        peso: 7.5,
        categoria: "Pokémon Hada",
        habilidades: ["Gran Encanto"],
        descripcion: "Se dice que aparece en noches de luna llena y que baila bajo la luz lunar.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
        stats: {
            ps: 70,
            ataque: 45,
            defensa: 48,
            ataqueEspecial: 60,
            defensaEspecial: 65,
            velocidad: 35
        },
        evoluciones: ["cleffa", "clefairy", "clefable"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 36,
        id: "clefable",
        nombre: "Clefable",
        tipos: ["Hada"],
        region: "Kanto",
        altura: 1.3,
        peso: 40,
        categoria: "Pokémon Hada",
        habilidades: ["Gran Encanto"],
        descripcion: "Sus grandes orejas le permiten escuchar sonidos muy lejanos y posee una naturaleza amable.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/36.png",
        stats: {
            ps: 95,
            ataque: 70,
            defensa: 73,
            ataqueEspecial: 95,
            defensaEspecial: 90,
            velocidad: 60
        },
        evoluciones: ["cleffa", "clefairy", "clefable"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 37,
        id: "vulpix",
        nombre: "Vulpix",
        tipos: ["Fuego"],
        region: "Kanto",
        altura: 0.6,
        peso: 9.9,
        categoria: "Pokémon Zorro",
        habilidades: ["Absorbe Fuego"],
        descripcion: "Nace con una sola cola que se divide a medida que crece.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/37.png",
        stats: {
            ps: 38,
            ataque: 41,
            defensa: 40,
            ataqueEspecial: 50,
            defensaEspecial: 65,
            velocidad: 65
        },
        evoluciones: ["vulpix", "ninetales"],
       formasRegionales: [
    "vulpix-alola"
],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 38,
        id: "ninetales",
        nombre: "Ninetales",
        tipos: ["Fuego"],
        region: "Kanto",
        altura: 1.1,
        peso: 19.9,
        categoria: "Pokémon Zorro",
        habilidades: ["Absorbe Fuego"],
        descripcion: "Se dice que sus nueve colas poseen poderes místicos.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/38.png",
        stats: {
            ps: 73,
            ataque: 76,
            defensa: 75,
            ataqueEspecial: 81,
            defensaEspecial: 100,
            velocidad: 100
        },
        evoluciones: ["vulpix", "ninetales"],
        formasRegionales: [
    "ninetales-alola"
],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 39,
        id: "jigglypuff",
        nombre: "Jigglypuff",
        tipos: ["Normal", "Hada"],
        region: "Kanto",
        altura: 0.5,
        peso: 5.5,
        categoria: "Pokémon Globo",
        habilidades: ["Gran Encanto"],
        descripcion: "Su canto tiene un efecto adormecedor que puede hacer que quienes lo escuchan se queden dormidos.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png",
        stats: {
            ps: 115,
            ataque: 45,
            defensa: 20,
            ataqueEspecial: 45,
            defensaEspecial: 25,
            velocidad: 20
        },
        evoluciones: ["igglybuff", "jigglypuff", "wigglytuff"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 40,
        id: "wigglytuff",
        nombre: "Wigglytuff",
        tipos: ["Normal", "Hada"],
        region: "Kanto",
        altura: 1,
        peso: 12,
        categoria: "Pokémon Globo",
        habilidades: ["Gran Encanto"],
        descripcion: "Su cuerpo es muy flexible y puede inflarse hasta alcanzar un tamaño considerable.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/40.png",
        stats: {
            ps: 140,
            ataque: 70,
            defensa: 45,
            ataqueEspecial: 85,
            defensaEspecial: 50,
            velocidad: 45
        },
        evoluciones: ["igglybuff", "jigglypuff", "wigglytuff"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 41,
        id: "zubat",
        nombre: "Zubat",
        tipos: ["Veneno", "Volador"],
        region: "Kanto",
        altura: 0.8,
        peso: 7.5,
        categoria: "Pokémon Murciélago",
        habilidades: ["Foco Interno"],
        descripcion: "Vive en cuevas oscuras y utiliza ondas ultrasónicas para orientarse.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/41.png",
        stats: {
            ps: 40,
            ataque: 45,
            defensa: 35,
            ataqueEspecial: 30,
            defensaEspecial: 40,
            velocidad: 55
        },
        evoluciones: ["zubat", "golbat", "crobat"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 42,
        id: "golbat",
        nombre: "Golbat",
        tipos: ["Veneno", "Volador"],
        region: "Kanto",
        altura: 1.6,
        peso: 55,
        categoria: "Pokémon Murciélago",
        habilidades: ["Foco Interno"],
        descripcion: "Sus afilados colmillos le permiten alimentarse de la sangre de otros Pokémon.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/42.png",
        stats: {
            ps: 75,
            ataque: 80,
            defensa: 70,
            ataqueEspecial: 65,
            defensaEspecial: 75,
            velocidad: 90
        },
        evoluciones: ["zubat", "golbat", "crobat"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 43,
        id: "oddish",
        nombre: "Oddish",
        tipos: ["Planta", "Veneno"],
        region: "Kanto",
        altura: 0.5,
        peso: 5.4,
        categoria: "Pokémon Hierbajo",
        habilidades: ["Clorofila"],
        descripcion: "Durante el día permanece enterrado para evitar el calor y por la noche busca alimento.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/43.png",
        stats: {
            ps: 45,
            ataque: 50,
            defensa: 55,
            ataqueEspecial: 75,
            defensaEspecial: 65,
            velocidad: 30
        },
        evoluciones: ["oddish", "gloom", "vileplume"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 44,
        id: "gloom",
        nombre: "Gloom",
        tipos: ["Planta", "Veneno"],
        region: "Kanto",
        altura: 0.8,
        peso: 8.6,
        categoria: "Pokémon Hierbajo",
        habilidades: ["Clorofila"],
        descripcion: "El olor de su flor puede resultar desagradable, pero algunos Pokémon se sienten atraídos por él.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/44.png",
        stats: {
            ps: 60,
            ataque: 65,
            defensa: 70,
            ataqueEspecial: 85,
            defensaEspecial: 75,
            velocidad: 40
        },
        evoluciones: ["oddish", "gloom", "vileplume"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 45,
        id: "vileplume",
        nombre: "Vileplume",
        tipos: ["Planta", "Veneno"],
        region: "Kanto",
        altura: 1.2,
        peso: 18.6,
        categoria: "Pokémon Flor",
        habilidades: ["Clorofila"],
        descripcion: "Cuanto más grandes son sus pétalos, más polen tóxico puede liberar.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/45.png",
        stats: {
            ps: 75,
            ataque: 80,
            defensa: 85,
            ataqueEspecial: 110,
            defensaEspecial: 90,
            velocidad: 50
        },
        evoluciones: ["oddish", "gloom", "vileplume"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 46,
        id: "paras",
        nombre: "Paras",
        tipos: ["Bicho", "Planta"],
        region: "Kanto",
        altura: 0.3,
        peso: 5.4,
        categoria: "Pokémon Hongo",
        habilidades: ["Efecto Espora"],
        descripcion: "Los hongos de su espalda crecen absorbiendo nutrientes del cuerpo de Paras.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/46.png",
        stats: {
            ps: 35,
            ataque: 70,
            defensa: 55,
            ataqueEspecial: 45,
            defensaEspecial: 55,
            velocidad: 25
        },
        evoluciones: ["paras", "parasect"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 47,
        id: "parasect",
        nombre: "Parasect",
        tipos: ["Bicho", "Planta"],
        region: "Kanto",
        altura: 1,
        peso: 29.5,
        categoria: "Pokémon Hongo",
        habilidades: ["Efecto Espora"],
        descripcion: "El hongo de su espalda ha crecido tanto que controla completamente a Parasect.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/47.png",
        stats: {
            ps: 60,
            ataque: 95,
            defensa: 80,
            ataqueEspecial: 60,
            defensaEspecial: 80,
            velocidad: 30
        },
        evoluciones: ["paras", "parasect"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 48,
        id: "venonat",
        nombre: "Venonat",
        tipos: ["Bicho", "Veneno"],
        region: "Kanto",
        altura: 1,
        peso: 30,
        categoria: "Pokémon Insecto",
        habilidades: ["Ojo Compuesto"],
        descripcion: "Sus grandes ojos funcionan como un radar y le permiten detectar pequeños movimientos.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/48.png",
        stats: {
            ps: 60,
            ataque: 55,
            defensa: 50,
            ataqueEspecial: 40,
            defensaEspecial: 55,
            velocidad: 45
        },
        evoluciones: ["venonat", "venomoth"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 49,
        id: "venomoth",
        nombre: "Venomoth",
        tipos: ["Bicho", "Veneno"],
        region: "Kanto",
        altura: 1.5,
        peso: 12.5,
        categoria: "Pokémon Polilla",
        habilidades: ["Polvo Escudo"],
        descripcion: "Sus alas pueden liberar escamas venenosas que se adhieren a sus enemigos.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/49.png",
        stats: {
            ps: 70,
            ataque: 65,
            defensa: 60,
            ataqueEspecial: 90,
            defensaEspecial: 75,
            velocidad: 90
        },
        evoluciones: ["venonat", "venomoth"],
        formasRegionales: [],
        formasEspeciales: [],
        esMega: false
    },

    {
        numero: 50,
        id: "diglett",
        nombre: "Diglett",
        tipos: ["Tierra"],
        region: "Kanto",
        altura: 0.2,
        peso: 0.8,
        categoria: "Pokémon Topo",
        habilidades: ["Velo Arena"],
        descripcion: "Vive bajo tierra y deja pequeños túneles al desplazarse.",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
        imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/50.png",
        stats: {
            ps: 10,
            ataque: 55,
            defensa: 25,
            ataqueEspecial: 35,
            defensaEspecial: 45,
            velocidad: 95
        },
        evoluciones: ["diglett", "dugtrio"],
        formasRegionales: [
    "diglett-alola"
],
        formasEspeciales: [],
        esMega: false
    },

{
    numero: 51,
    id: "dugtrio",
    nombre: "Dugtrio",
    tipos: ["Tierra"],
    region: "Kanto",
    altura: 0.7,
    peso: 33.3,
    categoria: "Pokémon Topo",
    habilidades: ["Velo Arena", "Trampa Arena"],
    descripcion: "Un trío de Diglett que trabaja en perfecta coordinación.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/51.png",
    stats: {
        ps: 35,
        ataque: 100,
        defensa: 50,
        ataqueEspecial: 50,
        defensaEspecial: 70,
        velocidad: 120
    },
    evoluciones: ["diglett", "dugtrio"],
   formasRegionales: [
    "dugtrio-alola"
],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 53,
    id: "persian",
    nombre: "Persian",
    tipos: ["Normal"],
    region: "Kanto",
    altura: 1.0,
    peso: 32.0,
    categoria: "Pokémon Gato",
    habilidades: ["Flexibilidad", "Experto"],
    descripcion: "Su elegante apariencia oculta un temperamento feroz.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/53.png",
    stats: {
        ps: 65,
        ataque: 70,
        defensa: 60,
        ataqueEspecial: 65,
        defensaEspecial: 65,
        velocidad: 115
    },
    evoluciones: ["meowth", "persian"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 54,
    id: "psyduck",
    nombre: "Psyduck",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 0.8,
    peso: 19.6,
    categoria: "Pokémon Pato",
    habilidades: ["Humedad", "Aclimatación"],
    descripcion: "Sufre continuamente dolores de cabeza que pueden despertar sus poderes psíquicos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/54.png",
    stats: {
        ps: 50,
        ataque: 52,
        defensa: 48,
        ataqueEspecial: 65,
        defensaEspecial: 50,
        velocidad: 55
    },
    evoluciones: ["psyduck", "golduck"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 55,
    id: "golduck",
    nombre: "Golduck",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 1.7,
    peso: 76.6,
    categoria: "Pokémon Pato",
    habilidades: ["Humedad", "Aclimatación"],
    descripcion: "Es un nadador excelente y puede moverse a gran velocidad bajo el agua.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/55.png",
    stats: {
        ps: 80,
        ataque: 82,
        defensa: 78,
        ataqueEspecial: 95,
        defensaEspecial: 80,
        velocidad: 85
    },
    evoluciones: ["psyduck", "golduck"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 56,
    id: "mankey",
    nombre: "Mankey",
    tipos: ["Lucha"],
    region: "Kanto",
    altura: 0.5,
    peso: 28.0,
    categoria: "Pokémon Mono Cerdo",
    habilidades: ["Espíritu Vital", "Irascible"],
    descripcion: "Tiene un carácter muy temperamental y se enfada con facilidad.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/56.png",
    stats: {
        ps: 40,
        ataque: 80,
        defensa: 35,
        ataqueEspecial: 35,
        defensaEspecial: 45,
        velocidad: 70
    },
    evoluciones: ["mankey", "primeape"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 57,
    id: "primeape",
    nombre: "Primeape",
    tipos: ["Lucha"],
    region: "Kanto",
    altura: 1.0,
    peso: 32.0,
    categoria: "Pokémon Mono Cerdo",
    habilidades: ["Espíritu Vital", "Irascible"],
    descripcion: "Se enfurece tanto que persigue a cualquiera que se interponga en su camino.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/57.png",
    stats: {
        ps: 65,
        ataque: 105,
        defensa: 60,
        ataqueEspecial: 60,
        defensaEspecial: 70,
        velocidad: 95
    },
    evoluciones: ["mankey", "primeape"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 58,
    id: "growlithe",
    nombre: "Growlithe",
    tipos: ["Fuego"],
    region: "Kanto",
    altura: 0.7,
    peso: 19.0,
    categoria: "Pokémon Perrito",
    habilidades: ["Intimidación", "Absorbe Fuego"],
    descripcion: "Es valiente y leal, y protege a su entrenador con gran determinación.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/58.png",
    stats: {
        ps: 55,
        ataque: 70,
        defensa: 45,
        ataqueEspecial: 70,
        defensaEspecial: 50,
        velocidad: 60
    },
    evoluciones: ["growlithe", "arcanine"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 59,
    id: "arcanine",
    nombre: "Arcanine",
    tipos: ["Fuego"],
    region: "Kanto",
    altura: 1.9,
    peso: 155.0,
    categoria: "Pokémon Legendario",
    habilidades: ["Intimidación", "Absorbe Fuego"],
    descripcion: "Es conocido por su majestuosidad y por correr a gran velocidad.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/59.png",
    stats: {
        ps: 90,
        ataque: 110,
        defensa: 80,
        ataqueEspecial: 100,
        defensaEspecial: 80,
        velocidad: 95
    },
    evoluciones: ["growlithe", "arcanine"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 60,
    id: "poliwag",
    nombre: "Poliwag",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 0.6,
    peso: 12.4,
    categoria: "Pokémon Renacuajo",
    habilidades: ["Absorbe Agua", "Humedad"],
    descripcion: "Su piel es tan fina que puede verse el patrón de sus órganos internos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/60.png",
    stats: {
        ps: 40,
        ataque: 50,
        defensa: 40,
        ataqueEspecial: 40,
        defensaEspecial: 40,
        velocidad: 90
    },
    evoluciones: ["poliwag", "poliwhirl", "poliwrath"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 61,
    id: "poliwhirl",
    nombre: "Poliwhirl",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 1.0,
    peso: 20.0,
    categoria: "Pokémon Renacuajo",
    habilidades: ["Absorbe Agua", "Humedad"],
    descripcion: "Puede vivir tanto en tierra como en agua gracias a su piel húmeda.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/61.png",
    stats: {
        ps: 65,
        ataque: 65,
        defensa: 65,
        ataqueEspecial: 50,
        defensaEspecial: 50,
        velocidad: 90
    },
    evoluciones: ["poliwag", "poliwhirl", "poliwrath"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 62,
    id: "poliwrath",
    nombre: "Poliwrath",
    tipos: ["Agua", "Lucha"],
    region: "Kanto",
    altura: 1.3,
    peso: 54.0,
    categoria: "Pokémon Renacuajo",
    habilidades: ["Absorbe Agua", "Humedad"],
    descripcion: "Su cuerpo musculoso le permite nadar largas distancias sin cansarse.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/62.png",
    stats: {
        ps: 90,
        ataque: 95,
        defensa: 95,
        ataqueEspecial: 70,
        defensaEspecial: 90,
        velocidad: 70
    },
    evoluciones: ["poliwag", "poliwhirl", "poliwrath"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 63,
    id: "abra",
    nombre: "Abra",
    tipos: ["Psíquico"],
    region: "Kanto",
    altura: 0.9,
    peso: 19.5,
    categoria: "Pokémon Psíquico",
    habilidades: ["Sincronía", "Foco Interno"],
    descripcion: "Duerme durante la mayor parte del día mientras mantiene sus poderes psíquicos activos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/63.png",
    stats: {
        ps: 25,
        ataque: 20,
        defensa: 15,
        ataqueEspecial: 105,
        defensaEspecial: 55,
        velocidad: 90
    },
    evoluciones: ["abra", "kadabra", "alakazam"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 64,
    id: "kadabra",
    nombre: "Kadabra",
    tipos: ["Psíquico"],
    region: "Kanto",
    altura: 1.3,
    peso: 56.5,
    categoria: "Pokémon Psíquico",
    habilidades: ["Sincronía", "Foco Interno"],
    descripcion: "Emite fuertes ondas psíquicas que pueden causar dolores de cabeza a quienes están cerca.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/64.png",
    stats: {
        ps: 40,
        ataque: 35,
        defensa: 30,
        ataqueEspecial: 120,
        defensaEspecial: 70,
        velocidad: 105
    },
    evoluciones: ["abra", "kadabra", "alakazam"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 65,
    id: "alakazam",
    nombre: "Alakazam",
    tipos: ["Psíquico"],
    region: "Kanto",
    altura: 1.5,
    peso: 48.0,
    categoria: "Pokémon Psíquico",
    habilidades: ["Sincronía", "Foco Interno"],
    descripcion: "Posee una inteligencia extraordinaria y utiliza sus poderes psíquicos para combatir.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/65.png",
    stats: {
        ps: 55,
        ataque: 50,
        defensa: 45,
        ataqueEspecial: 135,
        defensaEspecial: 95,
        velocidad: 120
    },
    evoluciones: ["abra", "kadabra", "alakazam"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 66,
    id: "machop",
    nombre: "Machop",
    tipos: ["Lucha"],
    region: "Kanto",
    altura: 0.8,
    peso: 19.5,
    categoria: "Pokémon Superpoder",
    habilidades: ["Agallas", "Indefenso"],
    descripcion: "Entrena constantemente para aumentar su fuerza física.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/66.png",
    stats: {
        ps: 70,
        ataque: 80,
        defensa: 50,
        ataqueEspecial: 35,
        defensaEspecial: 35,
        velocidad: 35
    },
    evoluciones: ["machop", "machoke", "machamp"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 67,
    id: "machoke",
    nombre: "Machoke",
    tipos: ["Lucha"],
    region: "Kanto",
    altura: 1.5,
    peso: 70.5,
    categoria: "Pokémon Superpoder",
    habilidades: ["Agallas", "Indefenso"],
    descripcion: "Su enorme fuerza física le permite levantar objetos extremadamente pesados.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/67.png",
    stats: {
        ps: 80,
        ataque: 100,
        defensa: 70,
        ataqueEspecial: 50,
        defensaEspecial: 60,
        velocidad: 45
    },
    evoluciones: ["machop", "machoke", "machamp"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 68,
    id: "machamp",
    nombre: "Machamp",
    tipos: ["Lucha"],
    region: "Kanto",
    altura: 1.6,
    peso: 130.0,
    categoria: "Pokémon Superpoder",
    habilidades: ["Agallas", "Indefenso"],
    descripcion: "Sus cuatro brazos le permiten realizar numerosos golpes en muy poco tiempo.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/68.png",
    stats: {
        ps: 90,
        ataque: 130,
        defensa: 80,
        ataqueEspecial: 65,
        defensaEspecial: 85,
        velocidad: 55
    },
    evoluciones: ["machop", "machoke", "machamp"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 69,
    id: "bellsprout",
    nombre: "Bellsprout",
    tipos: ["Planta", "Veneno"],
    region: "Kanto",
    altura: 0.7,
    peso: 4.0,
    categoria: "Pokémon Flor",
    habilidades: ["Clorofila"],
    descripcion: "Tiene un cuerpo flexible que utiliza para atrapar a sus presas.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/69.png",
    stats: {
        ps: 50,
        ataque: 75,
        defensa: 35,
        ataqueEspecial: 70,
        defensaEspecial: 30,
        velocidad: 40
    },
    evoluciones: ["bellsprout", "weepinbell", "victreebel"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 70,
    id: "weepinbell",
    nombre: "Weepinbell",
    tipos: ["Planta", "Veneno"],
    region: "Kanto",
    altura: 1.0,
    peso: 6.4,
    categoria: "Pokémon Matamoscas",
    habilidades: ["Clorofila"],
    descripcion: "Atrae a sus presas con un dulce aroma y las captura con sus movimientos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/70.png",
    stats: {
        ps: 65,
        ataque: 90,
        defensa: 50,
        ataqueEspecial: 85,
        defensaEspecial: 45,
        velocidad: 55
    },
    evoluciones: ["bellsprout", "weepinbell", "victreebel"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 71,
    id: "victreebel",
    nombre: "Victreebel",
    tipos: ["Planta", "Veneno"],
    region: "Kanto",
    altura: 1.7,
    peso: 15.5,
    categoria: "Pokémon Matamoscas",
    habilidades: ["Clorofila"],
    descripcion: "Vive en bosques y utiliza su aroma para atraer a sus presas hacia su interior.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/71.png",
    stats: {
        ps: 80,
        ataque: 105,
        defensa: 65,
        ataqueEspecial: 100,
        defensaEspecial: 70,
        velocidad: 70
    },
    evoluciones: ["bellsprout", "weepinbell", "victreebel"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 72,
    id: "tentacool",
    nombre: "Tentacool",
    tipos: ["Agua", "Veneno"],
    region: "Kanto",
    altura: 0.9,
    peso: 45.5,
    categoria: "Pokémon Medusa",
    habilidades: ["Cuerpo Puro", "Lodo Líquido"],
    descripcion: "Flota por el mar y utiliza sus tentáculos para defenderse.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/72.png",
    stats: {
        ps: 40,
        ataque: 40,
        defensa: 35,
        ataqueEspecial: 100,
        defensaEspecial: 100,
        velocidad: 70
    },
    evoluciones: ["tentacool", "tentacruel"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 73,
    id: "tentacruel",
    nombre: "Tentacruel",
    tipos: ["Agua", "Veneno"],
    region: "Kanto",
    altura: 1.6,
    peso: 55.0,
    categoria: "Pokémon Medusa",
    habilidades: ["Cuerpo Puro", "Lodo Líquido"],
    descripcion: "Puede extender sus numerosos tentáculos para atrapar a sus presas.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/73.png",
    stats: {
        ps: 80,
        ataque: 70,
        defensa: 65,
        ataqueEspecial: 80,
        defensaEspecial: 120,
        velocidad: 100
    },
    evoluciones: ["tentacool", "tentacruel"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 74,
    id: "geodude",
    nombre: "Geodude",
    tipos: ["Roca", "Tierra"],
    region: "Kanto",
    altura: 0.4,
    peso: 20.0,
    categoria: "Pokémon Roca",
    habilidades: ["Cabeza Roca", "Robustez"],
    descripcion: "Suele vivir en zonas montañosas y se confunde fácilmente con una roca.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/74.png",
    stats: {
        ps: 40,
        ataque: 80,
        defensa: 100,
        ataqueEspecial: 30,
        defensaEspecial: 30,
        velocidad: 20
    },
    evoluciones: ["geodude", "graveler", "golem"],
    formasRegionales: [
    "geodude-alola"
],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 74,
    id: "geodude-alola",
    nombre: "Geodude de Alola",

    tipos: [
        "Roca",
        "Eléctrico"
    ],

    region: "Alola",

    altura: 0.4,
    peso: 20.3,

    categoria: "Pokémon Roca",

    habilidades: [
        "Robustez",
        "Imán"
    ],

    stats: {
        ps: 40,
        ataque: 80,
        defensa: 100,
        ataqueEspecial: 30,
        defensaEspecial: 30,
        velocidad: 20
    },

    evoluciones: [
        "geodude-alola",
        "graveler-alola",
        "golem-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Geodude de Alola tiene partículas metálicas en su cuerpo que producen electricidad.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10109.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10109.png"
},

{
    numero: 75,
    id: "graveler",
    nombre: "Graveler",
    tipos: ["Roca", "Tierra"],
    region: "Kanto",
    altura: 1.0,
    peso: 105.0,
    categoria: "Pokémon Roca",
    habilidades: ["Cabeza Roca", "Robustez"],
    descripcion: "Se desplaza rodando por las montañas y puede provocar grandes desprendimientos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/75.png",
    stats: {
        ps: 55,
        ataque: 95,
        defensa: 115,
        ataqueEspecial: 45,
        defensaEspecial: 45,
        velocidad: 35
    },
    evoluciones: ["geodude", "graveler", "golem"],
    formasRegionales: [
    "graveler-alola"
],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 75,
    id: "graveler-alola",
    nombre: "Graveler de Alola",

    tipos: [
        "Roca",
        "Eléctrico"
    ],

    region: "Alola",

    altura: 1.0,
    peso: 110.0,

    categoria: "Pokémon Roca",

    habilidades: [
        "Robustez",
        "Imán"
    ],

    stats: {
        ps: 55,
        ataque: 95,
        defensa: 115,
        ataqueEspecial: 45,
        defensaEspecial: 45,
        velocidad: 35
    },

    evoluciones: [
        "geodude-alola",
        "graveler-alola",
        "golem-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Graveler de Alola contiene minerales magnéticos en su cuerpo que le permiten generar electricidad.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10110.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10110.png"
},

{
    numero: 76,
    id: "golem",
    nombre: "Golem",
    tipos: ["Roca", "Tierra"],
    region: "Kanto",
    altura: 1.4,
    peso: 300.0,
    categoria: "Megatón",
    habilidades: ["Cabeza Roca", "Robustez"],
    descripcion:
        "Su cuerpo está formado por rocas extremadamente resistentes. Puede rodar por las montañas a gran velocidad.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/76.png",
    stats: {
        ps: 80,
        ataque: 120,
        defensa: 130,
        ataqueEspecial: 55,
        defensaEspecial: 65,
        velocidad: 45
    },
    evoluciones: ["geodude", "graveler", "golem"],
   formasRegionales: [
    "golem-alola"
],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 76,
    id: "golem-alola",
    nombre: "Golem de Alola",

    tipos: [
        "Roca",
        "Eléctrico"
    ],

    region: "Alola",

    altura: 1.7,
    peso: 316.0,

    categoria: "Pokémon Megatón",

    habilidades: [
        "Robustez",
        "Imán"
    ],

    stats: {
        ps: 80,
        ataque: 120,
        defensa: 130,
        ataqueEspecial: 55,
        defensaEspecial: 65,
        velocidad: 45
    },

    evoluciones: [
        "geodude-alola",
        "graveler-alola",
        "golem-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Golem de Alola tiene rocas magnéticas en su cuerpo y puede lanzar grandes rocas cargadas de electricidad.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10111.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10111.png"
},

{
    numero: 77,
    id: "ponyta",
    nombre: "Ponyta",
    tipos: ["Fuego"],
    region: "Kanto",
    altura: 1.0,
    peso: 30.0,
    categoria: "Caballo Fuego",
    habilidades: ["Fuga", "Absorbe Fuego"],
    descripcion:
        "Al nacer tiene las patas débiles, pero se fortalecen mientras corre y salta.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/77.png",
    stats: {
        ps: 50,
        ataque: 85,
        defensa: 55,
        ataqueEspecial: 65,
        defensaEspecial: 65,
        velocidad: 90
    },
    evoluciones: ["ponyta", "rapidash"],
   formasRegionales: [
    "ponyta-galar"
],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 77,
    id: "ponyta-galar",
    nombre: "Ponyta de Galar",

    tipos: [
        "Psíquico"
    ],

    region: "Galar",

    altura: 0.8,
    peso: 24.0,

    categoria: "Pokémon Caballo Único Cuerno",

    habilidades: [
        "Fuga",
        "Anticipación"
    ],

    stats: {
        ps: 50,
        ataque: 85,
        defensa: 55,
        ataqueEspecial: 65,
        defensaEspecial: 65,
        velocidad: 90
    },

    evoluciones: [
        "ponyta-galar",
        "rapidash-galar"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Ponyta de Galar adquirió su aspecto actual tras pasar mucho tiempo expuesto a la energía de un bosque encantado.",

   imagen:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10162.png",

imagenShiny:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10162.png"
},

{
    numero: 78,
    id: "rapidash",
    nombre: "Rapidash",
    tipos: ["Fuego"],
    region: "Kanto",
    altura: 1.7,
    peso: 95.0,
    categoria: "Caballo Fuego",
    habilidades: ["Fuga", "Absorbe Fuego"],
    descripcion:
        "Corre a velocidades increíbles y su melena de fuego ondea mientras galopa.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/78.png",
    stats: {
        ps: 65,
        ataque: 100,
        defensa: 70,
        ataqueEspecial: 80,
        defensaEspecial: 80,
        velocidad: 105
    },
    evoluciones: ["ponyta", "rapidash"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 79,
    id: "slowpoke",
    nombre: "Slowpoke",
    tipos: ["Agua", "Psíquico"],
    region: "Kanto",
    altura: 1.2,
    peso: 36.0,
    categoria: "Atontado",
    habilidades: ["Despiste", "Ritmo Propio"],
    descripcion:
        "Es muy tranquilo y tarda bastante en reaccionar ante lo que ocurre a su alrededor.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/79.png",
    stats: {
        ps: 90,
        ataque: 65,
        defensa: 65,
        ataqueEspecial: 40,
        defensaEspecial: 40,
        velocidad: 15
    },
    evoluciones: ["slowpoke", "slowbro"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 80,
    id: "slowbro",
    nombre: "Slowbro",
    tipos: ["Agua", "Psíquico"],
    region: "Kanto",
    altura: 1.6,
    peso: 78.5,
    categoria: "Ermitaño",
    habilidades: ["Despiste", "Ritmo Propio"],
    descripcion:
        "La concha de Shellder que tiene en la cola ha cambiado su forma y le proporciona protección.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/80.png",
    stats: {
        ps: 95,
        ataque: 75,
        defensa: 110,
        ataqueEspecial: 100,
        defensaEspecial: 80,
        velocidad: 30
    },
    evoluciones: ["slowpoke", "slowbro"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 81,
    id: "magnemite",
    nombre: "Magnemite",
    tipos: ["Eléctrico", "Acero"],
    region: "Kanto",
    altura: 0.3,
    peso: 6.0,
    categoria: "Imán",
    habilidades: ["Imán", "Robustez"],
    descripcion:
        "Flota en el aire gracias a sus propiedades magnéticas y genera electricidad.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/81.png",
    stats: {
        ps: 25,
        ataque: 35,
        defensa: 70,
        ataqueEspecial: 95,
        defensaEspecial: 55,
        velocidad: 45
    },
    evoluciones: ["magnemite", "magneton"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 82,
    id: "magneton",
    nombre: "Magneton",
    tipos: ["Eléctrico", "Acero"],
    region: "Kanto",
    altura: 1.0,
    peso: 60.0,
    categoria: "Imán",
    habilidades: ["Imán", "Robustez"],
    descripcion:
        "Está formado por tres Magnemite unidos por una fuerte fuerza magnética.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/82.png",
    stats: {
        ps: 50,
        ataque: 60,
        defensa: 95,
        ataqueEspecial: 120,
        defensaEspecial: 70,
        velocidad: 70
    },
    evoluciones: ["magnemite", "magneton"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 83,
    id: "farfetchd",
    nombre: "Farfetch'd",
    tipos: ["Normal", "Volador"],
    region: "Kanto",
    altura: 0.8,
    peso: 15.0,
    categoria: "Pato Salvaje",
    habilidades: ["Vista Lince", "Intrépido"],
    descripcion:
        "Siempre lleva consigo un tallo que utiliza como arma y herramienta.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/83.png",
    stats: {
        ps: 52,
        ataque: 90,
        defensa: 55,
        ataqueEspecial: 58,
        defensaEspecial: 62,
        velocidad: 60
    },
    evoluciones: ["farfetchd"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 84,
    id: "doduo",
    nombre: "Doduo",
    tipos: ["Normal", "Volador"],
    region: "Kanto",
    altura: 1.4,
    peso: 39.2,
    categoria: "Ave Gemela",
    habilidades: ["Fuga", "Madrugar"],
    descripcion:
        "Sus dos cabezas piensan de manera independiente, pero ambas cooperan para sobrevivir.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/84.png",
    stats: {
        ps: 35,
        ataque: 85,
        defensa: 45,
        ataqueEspecial: 35,
        defensaEspecial: 35,
        velocidad: 75
    },
    evoluciones: ["doduo", "dodrio"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 85,
    id: "dodrio",
    nombre: "Dodrio",
    tipos: ["Normal", "Volador"],
    region: "Kanto",
    altura: 1.8,
    peso: 85.2,
    categoria: "Ave Triple",
    habilidades: ["Fuga", "Madrugar"],
    descripcion:
        "Sus tres cabezas representan diferentes emociones y pensamientos.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/85.png",
    stats: {
        ps: 60,
        ataque: 110,
        defensa: 70,
        ataqueEspecial: 60,
        defensaEspecial: 60,
        velocidad: 110
    },
    evoluciones: ["doduo", "dodrio"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 86,
    id: "seel",
    nombre: "Seel",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 1.1,
    peso: 90.0,
    categoria: "León Marino",
    habilidades: ["Sebo", "Hidratación"],
    descripcion:
        "Le encanta nadar en aguas frías y puede soportar temperaturas muy bajas.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/86.png",
    stats: {
        ps: 65,
        ataque: 45,
        defensa: 55,
        ataqueEspecial: 45,
        defensaEspecial: 70,
        velocidad: 45
    },
    evoluciones: ["seel", "dewgong"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 87,
    id: "dewgong",
    nombre: "Dewgong",
    tipos: ["Agua", "Hielo"],
    region: "Kanto",
    altura: 1.7,
    peso: 120.0,
    categoria: "León Marino",
    habilidades: ["Sebo", "Hidratación"],
    descripcion:
        "Su cuerpo está cubierto por una gruesa capa de grasa que lo protege del frío.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/87.png",
    stats: {
        ps: 90,
        ataque: 70,
        defensa: 80,
        ataqueEspecial: 70,
        defensaEspecial: 95,
        velocidad: 70
    },
    evoluciones: ["seel", "dewgong"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 88,
    id: "grimer",
    nombre: "Grimer",
    tipos: ["Veneno"],
    region: "Kanto",
    altura: 0.9,
    peso: 30.0,
    categoria: "Lodo",
    habilidades: ["Viscosidad", "Toque Tóxico"],
    descripcion:
        "Está formado por residuos contaminantes que se han transformado en una criatura viva.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/88.png",
    stats: {
        ps: 80,
        ataque: 80,
        defensa: 50,
        ataqueEspecial: 40,
        defensaEspecial: 50,
        velocidad: 25
    },
    evoluciones: ["grimer", "muk"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 89,
    id: "muk",
    nombre: "Muk",
    tipos: ["Veneno"],
    region: "Kanto",
    altura: 1.2,
    peso: 30.0,
    categoria: "Lodo",
    habilidades: ["Viscosidad", "Toque Tóxico"],
    descripcion:
        "Su cuerpo está compuesto por sustancias tóxicas y deja un rastro de contaminación.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/89.png",
    stats: {
        ps: 105,
        ataque: 105,
        defensa: 75,
        ataqueEspecial: 65,
        defensaEspecial: 100,
        velocidad: 50
    },
    evoluciones: ["grimer", "muk"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 90,
    id: "shellder",
    nombre: "Shellder",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 0.3,
    peso: 4.0,
    categoria: "Bivalvo",
    habilidades: ["Caparazón", "Encadenado"],
    descripcion:
        "Se protege cerrando su dura concha y puede utilizar su lengua para desplazarse.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/90.png",
    stats: {
        ps: 30,
        ataque: 65,
        defensa: 100,
        ataqueEspecial: 45,
        defensaEspecial: 25,
        velocidad: 40
    },
    evoluciones: ["shellder", "cloyster"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 91,
    id: "cloyster",
    nombre: "Cloyster",
    tipos: ["Agua", "Hielo"],
    region: "Kanto",
    altura: 1.5,
    peso: 132.5,
    categoria: "Bivalvo",
    habilidades: ["Caparazón", "Encadenado"],
    descripcion:
        "Su concha es extremadamente resistente y dispara púas para atacar.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/91.png",
    stats: {
        ps: 50,
        ataque: 95,
        defensa: 180,
        ataqueEspecial: 85,
        defensaEspecial: 45,
        velocidad: 70
    },
    evoluciones: ["shellder", "cloyster"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 92,
    id: "gastly",
    nombre: "Gastly",
    tipos: ["Fantasma", "Veneno"],
    region: "Kanto",
    altura: 1.3,
    peso: 0.1,
    categoria: "Gas",
    habilidades: ["Levitación"],
    descripcion:
        "Su cuerpo está compuesto casi por completo de gas y puede ocultarse entre la niebla.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/92.png",
    stats: {
        ps: 30,
        ataque: 35,
        defensa: 30,
        ataqueEspecial: 100,
        defensaEspecial: 35,
        velocidad: 80
    },
    evoluciones: ["gastly", "haunter", "gengar"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 93,
    id: "haunter",
    nombre: "Haunter",
    tipos: ["Fantasma", "Veneno"],
    region: "Kanto",
    altura: 1.6,
    peso: 0.1,
    categoria: "Gas",
    habilidades: ["Levitación"],
    descripcion:
        "Puede atravesar paredes y aparecer de repente para sorprender a sus víctimas.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/93.png",
    stats: {
        ps: 45,
        ataque: 50,
        defensa: 45,
        ataqueEspecial: 115,
        defensaEspecial: 55,
        velocidad: 95
    },
    evoluciones: ["gastly", "haunter", "gengar"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 94,
    id: "gengar",
    nombre: "Gengar",
    tipos: ["Fantasma", "Veneno"],
    region: "Kanto",
    altura: 1.5,
    peso: 40.5,
    categoria: "Sombra",
    habilidades: ["Levitación"],
    descripcion:
        "Se esconde entre las sombras y puede mimetizarse perfectamente con la oscuridad.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/94.png",
    stats: {
        ps: 60,
        ataque: 65,
        defensa: 60,
        ataqueEspecial: 130,
        defensaEspecial: 75,
        velocidad: 110
    },
    evoluciones: ["gastly", "haunter", "gengar"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 95,
    id: "onix",
    nombre: "Onix",
    tipos: ["Roca", "Tierra"],
    region: "Kanto",
    altura: 8.8,
    peso: 210.0,
    categoria: "Serpiente Roca",
    habilidades: ["Cabeza Roca", "Robustez"],
    descripcion:
        "Excava túneles bajo tierra y puede alcanzar una gran longitud.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/95.png",
    stats: {
        ps: 35,
        ataque: 45,
        defensa: 160,
        ataqueEspecial: 30,
        defensaEspecial: 45,
        velocidad: 70
    },
    evoluciones: ["onix"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 96,
    id: "drowzee",
    nombre: "Drowzee",
    tipos: ["Psíquico"],
    region: "Kanto",
    altura: 1.0,
    peso: 32.4,
    categoria: "Hipnosis",
    habilidades: ["Insomnio", "Alerta"],
    descripcion:
        "Puede utilizar sus poderes psíquicos para afectar los sueños de otras personas.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/96.png",
    stats: {
        ps: 60,
        ataque: 48,
        defensa: 45,
        ataqueEspecial: 43,
        defensaEspecial: 90,
        velocidad: 42
    },
    evoluciones: ["drowzee", "hypno"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 97,
    id: "hypno",
    nombre: "Hypno",
    tipos: ["Psíquico"],
    region: "Kanto",
    altura: 1.6,
    peso: 75.6,
    categoria: "Hipnosis",
    habilidades: ["Insomnio", "Alerta"],
    descripcion:
        "Utiliza un péndulo para inducir el sueño mediante sus poderes psíquicos.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/97.png",
    stats: {
        ps: 85,
        ataque: 73,
        defensa: 70,
        ataqueEspecial: 73,
        defensaEspecial: 115,
        velocidad: 67
    },
    evoluciones: ["drowzee", "hypno"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 98,
    id: "krabby",
    nombre: "Krabby",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 0.4,
    peso: 6.5,
    categoria: "Cangrejo",
    habilidades: ["Caparazón", "Corte Fuerte"],
    descripcion:
        "Vive cerca del agua y utiliza sus enormes pinzas para defenderse.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/98.png",
    stats: {
        ps: 30,
        ataque: 105,
        defensa: 90,
        ataqueEspecial: 25,
        defensaEspecial: 25,
        velocidad: 50
    },
    evoluciones: ["krabby", "kingler"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 99,
    id: "kingler",
    nombre: "Kingler",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 1.3,
    peso: 60.0,
    categoria: "Cangrejo",
    habilidades: ["Caparazón", "Corte Fuerte"],
    descripcion:
        "Una de sus pinzas se ha desarrollado enormemente y posee una fuerza extraordinaria.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/99.png",
    stats: {
        ps: 55,
        ataque: 130,
        defensa: 115,
        ataqueEspecial: 50,
        defensaEspecial: 50,
        velocidad: 75
    },
    evoluciones: ["krabby", "kingler"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 100,
    id: "voltorb",
    nombre: "Voltorb",
    tipos: ["Eléctrico"],
    region: "Kanto",
    altura: 0.5,
    peso: 10.4,
    categoria: "Pokémon Bola",
    habilidades: ["Estática", "Insonorizar"],
    descripcion:
        "Su aspecto es tan parecido al de una Poké Ball que puede confundirse fácilmente con una.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/100.png",
    stats: {
        ps: 40,
        ataque: 30,
        defensa: 50,
        ataqueEspecial: 55,
        defensaEspecial: 55,
        velocidad: 100
    },
    evoluciones: ["voltorb", "electrode"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 101,
    id: "electrode",
    nombre: "Electrode",
    tipos: ["Eléctrico"],
    region: "Kanto",
    altura: 1.2,
    peso: 66.6,
    categoria: "Pokémon Bola",
    habilidades: ["Estática", "Insonorizar"],
    descripcion: "Almacena grandes cantidades de electricidad y puede liberar toda esa energía de repente.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/101.png",
    stats: {
        ps: 60,
        ataque: 50,
        defensa: 70,
        ataqueEspecial: 80,
        defensaEspecial: 80,
        velocidad: 150
    },
    evoluciones: ["voltorb", "electrode"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 102,
    id: "exeggcute",
    nombre: "Exeggcute",
    tipos: ["Planta", "Psíquico"],
    region: "Kanto",
    altura: 0.4,
    peso: 2.5,
    categoria: "Pokémon Huevo",
    habilidades: ["Clorofila"],
    descripcion: "Aunque parecen huevos, en realidad son un grupo de semillas que actúan juntas.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/102.png",
    stats: {
        ps: 60,
        ataque: 40,
        defensa: 80,
        ataqueEspecial: 60,
        defensaEspecial: 45,
        velocidad: 40
    },
    evoluciones: ["exeggcute", "exeggutor"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 103,
    id: "exeggutor",
    nombre: "Exeggutor",
    tipos: ["Planta", "Psíquico"],
    region: "Kanto",
    altura: 2.0,
    peso: 120.0,
    categoria: "Pokémon Coco",
    habilidades: ["Clorofila"],
    descripcion: "Sus tres cabezas poseen personalidades diferentes y pueden pensar de forma independiente.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/103.png",
    stats: {
        ps: 95,
        ataque: 95,
        defensa: 85,
        ataqueEspecial: 125,
        defensaEspecial: 75,
        velocidad: 55
    },
    evoluciones: ["exeggcute", "exeggutor"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 104,
    id: "cubone",
    nombre: "Cubone",
    tipos: ["Tierra"],
    region: "Kanto",
    altura: 0.4,
    peso: 6.5,
    categoria: "Pokémon Solitario",
    habilidades: ["Cabeza Roca", "Pararrayos"],
    descripcion: "Utiliza un hueso como arma y protección.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/104.png",
    stats: {
        ps: 50,
        ataque: 50,
        defensa: 95,
        ataqueEspecial: 40,
        defensaEspecial: 50,
        velocidad: 35
    },
    evoluciones: ["cubone", "marowak"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 105,
    id: "marowak",
    nombre: "Marowak",
    tipos: ["Tierra"],
    region: "Kanto",
    altura: 1.0,
    peso: 45.0,
    categoria: "Pokémon Osamenta",
    habilidades: ["Cabeza Roca", "Pararrayos"],
    descripcion: "Ha aprendido a manejar su hueso como un arma con gran precisión.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/105.png",
    stats: {
        ps: 60,
        ataque: 80,
        defensa: 110,
        ataqueEspecial: 50,
        defensaEspecial: 80,
        velocidad: 45
    },
    evoluciones: ["cubone", "marowak"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 106,
    id: "hitmonlee",
    nombre: "Hitmonlee",
    tipos: ["Lucha"],
    region: "Kanto",
    altura: 1.5,
    peso: 49.8,
    categoria: "Pokémon Patada",
    habilidades: ["Flexibilidad", "Audaz"],
    descripcion: "Sus piernas pueden estirarse y realizar poderosas patadas.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/106.png",
    stats: {
        ps: 50,
        ataque: 120,
        defensa: 53,
        ataqueEspecial: 35,
        defensaEspecial: 110,
        velocidad: 87
    },
    evoluciones: ["hitmonlee"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 107,
    id: "hitmonchan",
    nombre: "Hitmonchan",
    tipos: ["Lucha"],
    region: "Kanto",
    altura: 1.4,
    peso: 50.2,
    categoria: "Pokémon Puñetazo",
    habilidades: ["Vista Lince", "Puño Férreo"],
    descripcion: "Sus puños se mueven tan rápido que parecen auténticos proyectiles.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/107.png",
    stats: {
        ps: 50,
        ataque: 105,
        defensa: 79,
        ataqueEspecial: 35,
        defensaEspecial: 110,
        velocidad: 76
    },
    evoluciones: ["hitmonchan"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 108,
    id: "lickitung",
    nombre: "Lickitung",
    tipos: ["Normal"],
    region: "Kanto",
    altura: 1.2,
    peso: 65.5,
    categoria: "Pokémon Lametazo",
    habilidades: ["Despiste", "Ritmo Propio"],
    descripcion: "Su enorme lengua es mucho más larga que su propio cuerpo.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/108.png",
    stats: {
        ps: 90,
        ataque: 55,
        defensa: 75,
        ataqueEspecial: 60,
        defensaEspecial: 75,
        velocidad: 30
    },
    evoluciones: ["lickitung"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 109,
    id: "koffing",
    nombre: "Koffing",
    tipos: ["Veneno"],
    region: "Kanto",
    altura: 0.6,
    peso: 1.0,
    categoria: "Pokémon Gas",
    habilidades: ["Levitación"],
    descripcion: "Flota en el aire y libera gases tóxicos para defenderse.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/109.png",
    stats: {
        ps: 40,
        ataque: 65,
        defensa: 95,
        ataqueEspecial: 60,
        defensaEspecial: 45,
        velocidad: 35
    },
    evoluciones: ["koffing", "weezing"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 110,
    id: "weezing",
    nombre: "Weezing",
    tipos: ["Veneno"],
    region: "Kanto",
    altura: 1.2,
    peso: 9.5,
    categoria: "Pokémon Gas Venenoso",
    habilidades: ["Levitación"],
    descripcion: "Dos Koffing unidos pueden formar esta especie de Pokémon.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/110.png",
    stats: {
        ps: 65,
        ataque: 90,
        defensa: 120,
        ataqueEspecial: 85,
        defensaEspecial: 70,
        velocidad: 60
    },
    evoluciones: ["koffing", "weezing"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 111,
    id: "rhyhorn",
    nombre: "Rhyhorn",
    tipos: ["Tierra", "Roca"],
    region: "Kanto",
    altura: 1.0,
    peso: 115.0,
    categoria: "Pokémon Púas",
    habilidades: ["Cabeza Roca", "Pararrayos"],
    descripcion: "Su cuerpo resistente puede soportar fuertes impactos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/111.png",
    stats: {
        ps: 80,
        ataque: 85,
        defensa: 95,
        ataqueEspecial: 30,
        defensaEspecial: 30,
        velocidad: 25
    },
    evoluciones: ["rhyhorn", "rhydon"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 112,
    id: "rhydon",
    nombre: "Rhydon",
    tipos: ["Tierra", "Roca"],
    region: "Kanto",
    altura: 1.9,
    peso: 120.0,
    categoria: "Pokémon Taladro",
    habilidades: ["Cabeza Roca", "Pararrayos"],
    descripcion: "Puede atravesar roca sólida con su poderoso cuerno.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/112.png",
    stats: {
        ps: 105,
        ataque: 130,
        defensa: 120,
        ataqueEspecial: 45,
        defensaEspecial: 45,
        velocidad: 40
    },
    evoluciones: ["rhyhorn", "rhydon"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 113,
    id: "chansey",
    nombre: "Chansey",
    tipos: ["Normal"],
    region: "Kanto",
    altura: 1.1,
    peso: 34.6,
    categoria: "Pokémon Huevo",
    habilidades: ["Cura Natural", "Dicha"],
    descripcion: "Lleva siempre consigo un huevo que comparte con quienes están heridos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/113.png",
    stats: {
        ps: 250,
        ataque: 5,
        defensa: 5,
        ataqueEspecial: 35,
        defensaEspecial: 105,
        velocidad: 50
    },
    evoluciones: ["chansey"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 114,
    id: "tangela",
    nombre: "Tangela",
    tipos: ["Planta"],
    region: "Kanto",
    altura: 1.0,
    peso: 35.0,
    categoria: "Pokémon Enredadera",
    habilidades: ["Clorofila", "Defensa Hoja"],
    descripcion: "Su cuerpo está cubierto por una maraña de lianas azules.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/114.png",
    stats: {
        ps: 65,
        ataque: 55,
        defensa: 115,
        ataqueEspecial: 100,
        defensaEspecial: 40,
        velocidad: 60
    },
    evoluciones: ["tangela"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 115,
    id: "kangaskhan",
    nombre: "Kangaskhan",
    tipos: ["Normal"],
    region: "Kanto",
    altura: 2.2,
    peso: 80.0,
    categoria: "Pokémon Padre",
    habilidades: ["Madrugar", "Intrépido"],
    descripcion: "Protege con gran cuidado a la cría que lleva en su bolsa.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/115.png",
    stats: {
        ps: 105,
        ataque: 95,
        defensa: 80,
        ataqueEspecial: 40,
        defensaEspecial: 80,
        velocidad: 90
    },
    evoluciones: ["kangaskhan"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 116,
    id: "horsea",
    nombre: "Horsea",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 0.4,
    peso: 8.0,
    categoria: "Pokémon Dragón",
    habilidades: ["Nado Rápido", "Francotirador"],
    descripcion: "Expulsa agua por la boca con gran precisión.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/116.png",
    stats: {
        ps: 30,
        ataque: 40,
        defensa: 70,
        ataqueEspecial: 70,
        defensaEspecial: 25,
        velocidad: 60
    },
    evoluciones: ["horsea", "seadra"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 117,
    id: "seadra",
    nombre: "Seadra",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 1.2,
    peso: 25.0,
    categoria: "Pokémon Dragón",
    habilidades: ["Nado Rápido", "Francotirador"],
    descripcion: "Sus púas dorsales contienen veneno y utiliza su cola para nadar.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/117.png",
    stats: {
        ps: 55,
        ataque: 65,
        defensa: 95,
        ataqueEspecial: 95,
        defensaEspecial: 45,
        velocidad: 85
    },
    evoluciones: ["horsea", "seadra"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 118,
    id: "goldeen",
    nombre: "Goldeen",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 0.6,
    peso: 15.0,
    categoria: "Pokémon Pez",
    habilidades: ["Nado Rápido", "Pararrayos"],
    descripcion: "Su elegante cuerno puede utilizarse para atacar.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/118.png",
    stats: {
        ps: 45,
        ataque: 67,
        defensa: 60,
        ataqueEspecial: 35,
        defensaEspecial: 50,
        velocidad: 63
    },
    evoluciones: ["goldeen", "seaking"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 119,
    id: "seaking",
    nombre: "Seaking",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 1.3,
    peso: 39.0,
    categoria: "Pokémon Pez",
    habilidades: ["Nado Rápido", "Pararrayos"],
    descripcion: "Los machos construyen nidos entre las plantas acuáticas durante la época de reproducción.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/119.png",
    stats: {
        ps: 80,
        ataque: 92,
        defensa: 65,
        ataqueEspecial: 65,
        defensaEspecial: 80,
        velocidad: 68
    },
    evoluciones: ["goldeen", "seaking"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 120,
    id: "staryu",
    nombre: "Staryu",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 0.8,
    peso: 34.5,
    categoria: "Pokémon Estrella",
    habilidades: ["Iluminación", "Cura Natural"],
    descripcion: "Su núcleo central brilla intensamente por la noche.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/120.png",
    stats: {
        ps: 30,
        ataque: 45,
        defensa: 55,
        ataqueEspecial: 70,
        defensaEspecial: 55,
        velocidad: 85
    },
    evoluciones: ["staryu", "starmie"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 121,
    id: "starmie",
    nombre: "Starmie",
    tipos: ["Agua", "Psíquico"],
    region: "Kanto",
    altura: 1.1,
    peso: 80.0,
    categoria: "Pokémon Misterioso",
    habilidades: ["Iluminación", "Cura Natural"],
    descripcion: "Su núcleo central emite destellos de colores durante la noche.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/121.png",
    stats: {
        ps: 60,
        ataque: 75,
        defensa: 85,
        ataqueEspecial: 100,
        defensaEspecial: 85,
        velocidad: 115
    },
    evoluciones: ["staryu", "starmie"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 122,
    id: "mr-mime",
    nombre: "Mr. Mime",
    tipos: ["Psíquico", "Hada"],
    region: "Kanto",
    altura: 1.3,
    peso: 54.5,
    categoria: "Pokémon Barrera",
    habilidades: ["Insonorizar", "Filtro"],
    descripcion: "Es capaz de crear barreras invisibles utilizando sus poderes psíquicos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/122.png",
    stats: {
        ps: 40,
        ataque: 45,
        defensa: 65,
        ataqueEspecial: 100,
        defensaEspecial: 120,
        velocidad: 90
    },
    evoluciones: ["mr-mime"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 123,
    id: "scyther",
    nombre: "Scyther",
    tipos: ["Bicho", "Volador"],
    region: "Kanto",
    altura: 1.5,
    peso: 56.0,
    categoria: "Pokémon Mantis",
    habilidades: ["Enjambre", "Experto"],
    descripcion: "Utiliza sus afiladas guadañas para cortar incluso troncos gruesos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/123.png",
    stats: {
        ps: 70,
        ataque: 110,
        defensa: 80,
        ataqueEspecial: 55,
        defensaEspecial: 80,
        velocidad: 105
    },
    evoluciones: ["scyther"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 124,
    id: "jynx",
    nombre: "Jynx",
    tipos: ["Hielo", "Psíquico"],
    region: "Kanto",
    altura: 1.4,
    peso: 40.6,
    categoria: "Pokémon Forma Humana",
    habilidades: ["Despiste", "Alerta"],
    descripcion: "Utiliza movimientos rítmicos y poderes psíquicos para combatir.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/124.png",
    stats: {
        ps: 65,
        ataque: 50,
        defensa: 35,
        ataqueEspecial: 115,
        defensaEspecial: 95,
        velocidad: 95
    },
    evoluciones: ["jynx"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 125,
    id: "electabuzz",
    nombre: "Electabuzz",
    tipos: ["Eléctrico"],
    region: "Kanto",
    altura: 1.1,
    peso: 30.0,
    categoria: "Pokémon Eléctrico",
    habilidades: ["Electricidad Estática"],
    descripcion: "Absorbe electricidad de las centrales eléctricas y de otras fuentes.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/125.png",
    stats: {
        ps: 65,
        ataque: 83,
        defensa: 57,
        ataqueEspecial: 95,
        defensaEspecial: 85,
        velocidad: 105
    },
    evoluciones: ["electabuzz"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 126,
    id: "magmar",
    nombre: "Magmar",
    tipos: ["Fuego"],
    region: "Kanto",
    altura: 1.3,
    peso: 44.5,
    categoria: "Pokémon Escupefuego",
    habilidades: ["Cuerpo Llama"],
    descripcion: "Su cuerpo desprende un calor tan intenso que el aire a su alrededor tiembla.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/126.png",
    stats: {
        ps: 65,
        ataque: 95,
        defensa: 57,
        ataqueEspecial: 100,
        defensaEspecial: 85,
        velocidad: 93
    },
    evoluciones: ["magmar"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 127,
    id: "pinsir",
    nombre: "Pinsir",
    tipos: ["Bicho"],
    region: "Kanto",
    altura: 1.5,
    peso: 55.0,
    categoria: "Pokémon Escarabajo",
    habilidades: ["Corte Fuerte", "Rompe Moldes"],
    descripcion: "Sus enormes pinzas pueden atrapar y lanzar objetos pesados.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/127.png",
    stats: {
        ps: 65,
        ataque: 125,
        defensa: 100,
        ataqueEspecial: 55,
        defensaEspecial: 70,
        velocidad: 85
    },
    evoluciones: ["pinsir"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 128,
    id: "tauros",
    nombre: "Tauros",
    tipos: ["Normal"],
    region: "Kanto",
    altura: 1.4,
    peso: 88.4,
    categoria: "Pokémon Toro Bravo",
    habilidades: ["Intimidación", "Irascible"],
    descripcion: "Embiste con fuerza y utiliza sus tres colas para controlar su equilibrio.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/128.png",
    stats: {
        ps: 75,
        ataque: 100,
        defensa: 95,
        ataqueEspecial: 40,
        defensaEspecial: 70,
        velocidad: 110
    },
    evoluciones: ["tauros"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 129,
    id: "magikarp",
    nombre: "Magikarp",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 0.9,
    peso: 10.0,
    categoria: "Pokémon Pez",
    habilidades: ["Nado Rápido"],
    descripcion: "Es conocido por su poca capacidad de combate, pero puede evolucionar en un Pokémon poderoso.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/129.png",
    stats: {
        ps: 20,
        ataque: 10,
        defensa: 55,
        ataqueEspecial: 15,
        defensaEspecial: 20,
        velocidad: 80
    },
    evoluciones: ["magikarp", "gyarados"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 130,
    id: "gyarados",
    nombre: "Gyarados",
    tipos: ["Agua", "Volador"],
    region: "Kanto",
    altura: 6.5,
    peso: 235.0,
    categoria: "Pokémon Atrocidad",
    habilidades: ["Intimidación"],
    descripcion: "Cuando se enfurece puede destruir ciudades enteras.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/130.png",
    stats: {
        ps: 95,
        ataque: 125,
        defensa: 79,
        ataqueEspecial: 60,
        defensaEspecial: 100,
        velocidad: 81
    },
    evoluciones: ["magikarp", "gyarados"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 131,
    id: "lapras",
    nombre: "Lapras",
    tipos: ["Agua", "Hielo"],
    region: "Kanto",
    altura: 2.5,
    peso: 220.0,
    categoria: "Pokémon Transporte",
    habilidades: ["Absorbe Agua", "Caparazón"],
    descripcion: "Es conocido por transportar personas a través del mar.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/131.png",
    stats: {
        ps: 130,
        ataque: 85,
        defensa: 80,
        ataqueEspecial: 85,
        defensaEspecial: 95,
        velocidad: 60
    },
    evoluciones: ["lapras"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 132,
    id: "ditto",
    nombre: "Ditto",
    tipos: ["Normal"],
    region: "Kanto",
    altura: 0.3,
    peso: 4.0,
    categoria: "Pokémon Transformación",
    habilidades: ["Flexibilidad"],
    descripcion: "Puede transformar todo su cuerpo para imitar a otros Pokémon.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/132.png",
    stats: {
        ps: 48,
        ataque: 48,
        defensa: 48,
        ataqueEspecial: 48,
        defensaEspecial: 48,
        velocidad: 48
    },
    evoluciones: ["ditto"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 133,
    id: "eevee",
    nombre: "Eevee",
    tipos: ["Normal"],
    region: "Kanto",
    altura: 0.3,
    peso: 6.5,
    categoria: "Pokémon Evolución",
    habilidades: ["Fuga", "Adaptable"],
    descripcion: "Su estructura genética le permite evolucionar de distintas maneras.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/133.png",
    stats: {
        ps: 55,
        ataque: 55,
        defensa: 50,
        ataqueEspecial: 45,
        defensaEspecial: 65,
        velocidad: 55
    },
    evoluciones: ["eevee"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 134,
    id: "vaporeon",
    nombre: "Vaporeon",
    tipos: ["Agua"],
    region: "Kanto",
    altura: 1.0,
    peso: 29.0,
    categoria: "Pokémon Burbuja",
    habilidades: ["Absorbe Agua"],
    descripcion: "Su cuerpo se ha adaptado para vivir cerca del agua.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/134.png",
    stats: {
        ps: 130,
        ataque: 65,
        defensa: 60,
        ataqueEspecial: 110,
        defensaEspecial: 95,
        velocidad: 65
    },
    evoluciones: ["eevee", "vaporeon"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 135,
    id: "jolteon",
    nombre: "Jolteon",
    tipos: ["Eléctrico"],
    region: "Kanto",
    altura: 0.8,
    peso: 24.5,
    categoria: "Pokémon Relámpago",
    habilidades: ["Absorbe Electricidad"],
    descripcion: "Su cuerpo puede generar electricidad a gran velocidad.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/135.png",
    stats: {
        ps: 65,
        ataque: 65,
        defensa: 60,
        ataqueEspecial: 110,
        defensaEspecial: 95,
        velocidad: 130
    },
    evoluciones: ["eevee", "jolteon"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 136,
    id: "flareon",
    nombre: "Flareon",
    tipos: ["Fuego"],
    region: "Kanto",
    altura: 0.9,
    peso: 25.0,
    categoria: "Pokémon Llama",
    habilidades: ["Absorbe Fuego"],
    descripcion: "Almacena aire caliente en su cuerpo y puede expulsarlo en forma de fuego.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/136.png",
    stats: {
        ps: 65,
        ataque: 130,
        defensa: 60,
        ataqueEspecial: 95,
        defensaEspecial: 110,
        velocidad: 65
    },
    evoluciones: ["eevee", "flareon"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 137,
    id: "porygon",
    nombre: "Porygon",
    tipos: ["Normal"],
    region: "Kanto",
    altura: 0.8,
    peso: 36.5,
    categoria: "Pokémon Virtual",
    habilidades: ["Calco", "Descarga"],
    descripcion: "Fue creado artificialmente utilizando tecnología avanzada.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/137.png",
    stats: {
        ps: 65,
        ataque: 60,
        defensa: 70,
        ataqueEspecial: 85,
        defensaEspecial: 75,
        velocidad: 40
    },
    evoluciones: ["porygon"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 138,
    id: "omanyte",
    nombre: "Omanyte",
    tipos: ["Roca", "Agua"],
    region: "Kanto",
    altura: 0.4,
    peso: 7.5,
    categoria: "Pokémon Espiral",
    habilidades: ["Nado Rápido", "Caparazón"],
    descripcion: "Un Pokémon fósil que vivió en los antiguos mares.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/138.png",
    stats: {
        ps: 35,
        ataque: 40,
        defensa: 100,
        ataqueEspecial: 90,
        defensaEspecial: 55,
        velocidad: 35
    },
    evoluciones: ["omanyte", "omastar"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 139,
    id: "omastar",
    nombre: "Omastar",
    tipos: ["Roca", "Agua"],
    region: "Kanto",
    altura: 1.0,
    peso: 35.0,
    categoria: "Pokémon Espiral",
    habilidades: ["Nado Rápido", "Caparazón"],
    descripcion: "Sus tentáculos le permiten atrapar a sus presas con facilidad.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/139.png",
    stats: {
        ps: 70,
        ataque: 60,
        defensa: 125,
        ataqueEspecial: 115,
        defensaEspecial: 70,
        velocidad: 55
    },
    evoluciones: ["omanyte", "omastar"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 140,
    id: "kabuto",
    nombre: "Kabuto",
    tipos: ["Roca", "Agua"],
    region: "Kanto",
    altura: 0.5,
    peso: 11.5,
    categoria: "Pokémon Molusco",
    habilidades: ["Nado Rápido", "Armadura Batalla"],
    descripcion: "Un Pokémon fósil que vivió en antiguos mares hace millones de años.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/140.png",
    stats: {
        ps: 30,
        ataque: 80,
        defensa: 90,
        ataqueEspecial: 55,
        defensaEspecial: 45,
        velocidad: 55
    },
    evoluciones: ["kabuto", "kabutops"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 141,
    id: "kabutops",
    nombre: "Kabutops",
    tipos: ["Roca", "Agua"],
    region: "Kanto",
    altura: 1.3,
    peso: 40.5,
    categoria: "Pokémon Molusco",
    habilidades: ["Nado Rápido", "Armadura Batalla"],
    descripcion: "Sus afiladas extremidades le permiten cortar a sus presas con facilidad.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/141.png",
    stats: {
        ps: 60,
        ataque: 115,
        defensa: 105,
        ataqueEspecial: 65,
        defensaEspecial: 70,
        velocidad: 80
    },
    evoluciones: ["kabuto", "kabutops"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 142,
    id: "aerodactyl",
    nombre: "Aerodactyl",
    tipos: ["Roca", "Volador"],
    region: "Kanto",
    altura: 1.8,
    peso: 59.0,
    categoria: "Pokémon Fósil",
    habilidades: ["Cabeza Roca", "Presión"],
    descripcion: "Un Pokémon prehistórico resucitado a partir de un fósil.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/142.png",
    stats: {
        ps: 80,
        ataque: 105,
        defensa: 65,
        ataqueEspecial: 60,
        defensaEspecial: 75,
        velocidad: 130
    },
    evoluciones: ["aerodactyl"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 143,
    id: "snorlax",
    nombre: "Snorlax",
    tipos: ["Normal"],
    region: "Kanto",
    altura: 2.1,
    peso: 460.0,
    categoria: "Pokémon Dormilón",
    habilidades: ["Inmunidad", "Sebo"],
    descripcion: "Puede pasar gran parte del día durmiendo después de comer grandes cantidades de comida.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/143.png",
    stats: {
        ps: 160,
        ataque: 110,
        defensa: 65,
        ataqueEspecial: 65,
        defensaEspecial: 110,
        velocidad: 30
    },
    evoluciones: ["snorlax"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 144,
    id: "articuno",
    nombre: "Articuno",
    tipos: ["Hielo", "Volador"],
    region: "Kanto",
    altura: 1.7,
    peso: 55.4,
    categoria: "Pokémon Congelación",
    habilidades: ["Presión"],
    descripcion: "Un Pokémon legendario que puede congelar el aire con sus alas.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/144.png",
    stats: {
        ps: 90,
        ataque: 85,
        defensa: 100,
        ataqueEspecial: 95,
        defensaEspecial: 125,
        velocidad: 85
    },
    evoluciones: ["articuno"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 145,
    id: "zapdos",
    nombre: "Zapdos",
    tipos: ["Eléctrico", "Volador"],
    region: "Kanto",
    altura: 1.6,
    peso: 52.6,
    categoria: "Pokémon Eléctrico",
    habilidades: ["Presión"],
    descripcion: "Un Pokémon legendario relacionado con las tormentas eléctricas.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/145.png",
    stats: {
        ps: 90,
        ataque: 90,
        defensa: 85,
        ataqueEspecial: 125,
        defensaEspecial: 90,
        velocidad: 100
    },
    evoluciones: ["zapdos"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 146,
    id: "moltres",
    nombre: "Moltres",
    tipos: ["Fuego", "Volador"],
    region: "Kanto",
    altura: 2.0,
    peso: 60.0,
    categoria: "Pokémon Llama",
    habilidades: ["Presión"],
    descripcion: "Un Pokémon legendario que parece estar envuelto en llamas.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/146.png",
    stats: {
        ps: 90,
        ataque: 100,
        defensa: 90,
        ataqueEspecial: 125,
        defensaEspecial: 85,
        velocidad: 90
    },
    evoluciones: ["moltres"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 147,
    id: "dratini",
    nombre: "Dratini",
    tipos: ["Dragón"],
    region: "Kanto",
    altura: 1.8,
    peso: 3.3,
    categoria: "Pokémon Dragón",
    habilidades: ["Mudar"],
    descripcion: "Cambia de piel constantemente mientras crece.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/147.png",
    stats: {
        ps: 41,
        ataque: 64,
        defensa: 45,
        ataqueEspecial: 50,
        defensaEspecial: 50,
        velocidad: 50
    },
    evoluciones: ["dratini", "dragonair", "dragonite"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 148,
    id: "dragonair",
    nombre: "Dragonair",
    tipos: ["Dragón"],
    region: "Kanto",
    altura: 4.0,
    peso: 16.5,
    categoria: "Pokémon Dragón",
    habilidades: ["Mudar"],
    descripcion: "Se dice que puede cambiar el clima utilizando sus poderes misteriosos.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/148.png",
    stats: {
        ps: 61,
        ataque: 84,
        defensa: 65,
        ataqueEspecial: 70,
        defensaEspecial: 70,
        velocidad: 70
    },
    evoluciones: ["dratini", "dragonair", "dragonite"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 149,
    id: "dragonite",
    nombre: "Dragonite",
    tipos: ["Dragón", "Volador"],
    region: "Kanto",
    altura: 2.2,
    peso: 210.0,
    categoria: "Pokémon Dragón",
    habilidades: ["Foco Interno"],
    descripcion: "Es capaz de volar alrededor del mundo en poco tiempo.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/149.png",
    stats: {
        ps: 91,
        ataque: 134,
        defensa: 95,
        ataqueEspecial: 100,
        defensaEspecial: 100,
        velocidad: 80
    },
    evoluciones: ["dratini", "dragonair", "dragonite"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 151,
    id: "mew",
    nombre: "Mew",
    tipos: ["Psíquico"],
    region: "Kanto",
    altura: 0.4,
    peso: 4.0,
    categoria: "Pokémon Nueva Especie",
    habilidades: ["Sincronía"],
    descripcion: "Se dice que contiene el código genético de todos los Pokémon.",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    imagenShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/151.png",
    stats: {
        ps: 100,
        ataque: 100,
        defensa: 100,
        ataqueEspecial: 100,
        defensaEspecial: 100,
        velocidad: 100
    },
    evoluciones: ["mew"],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: false
},

{
    numero: 9,
    id: "mega-blastoise",
    region: "Kanto",
    nombre: "Mega Blastoise",

    esMega: true,

    tipos: [
        "Agua"
    ],

    altura: 1.6,
    peso: 101.1,

    categoria: "Marisco",

    habilidades: [
        "Megadisparador"
    ],

    stats: {
        ps: 79,
        ataque: 103,
        defensa: 120,
        ataqueEspecial: 135,
        defensaEspecial: 115,
        velocidad: 78
    },

    evoluciones: [
        "squirtle",
        "wartortle",
        "blastoise",
        "mega-blastoise"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Blastoise aumenta enormemente la potencia de sus ataques gracias a los cañones de su cuerpo.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10036.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10036.png"
},

{
    numero: 15,
    id: "mega-beedrill",
    nombre: "Mega Beedrill",
    tipos: [
        "Bicho",
        "Veneno"
    ],
    region: "Kanto",
    altura: 1.4,
    peso: 40.5,
    categoria: "Pokémon Abeja",
    habilidades: [
        "Adaptable"
    ],
    descripcion:
        "Al megaevolucionar, sus aguijones se vuelven todavía más peligrosos y aumenta enormemente su velocidad.",
    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10040.png",
    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10040.png",
    stats: {
        ps: 65,
        ataque: 150,
        defensa: 40,
        ataqueEspecial: 15,
        defensaEspecial: 80,
        velocidad: 145
    },
    evoluciones: [],
    formasRegionales: [],
    formasEspeciales: [],
    esMega: true
},

{
    numero: 18,
    id: "mega-pidgeot",
    region: "Kanto",
    nombre: "Mega Pidgeot",

    esMega: true,

    tipos: [
        "Normal",
        "Volador"
    ],

    altura: 2.2,
    peso: 50.5,

    categoria: "Pájaro",

    habilidades: [
        "Vista Lince"
    ],

    stats: {
        ps: 83,
        ataque: 80,
        defensa: 80,
        ataqueEspecial: 135,
        defensaEspecial: 80,
        velocidad: 121
    },

    evoluciones: [
        "pidgey",
        "pidgeotto",
        "pidgeot",
        "mega-pidgeot"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Pidgeot posee unas alas mucho más poderosas que le permiten alcanzar velocidades extraordinarias.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10073.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10073.png"
},

{
    numero: 65,
    id: "mega-alakazam",
    region: "Kanto",
    nombre: "Mega Alakazam",

    esMega: true,

    tipos: [
        "Psíquico"
    ],

    altura: 1.2,
    peso: 48.0,

    categoria: "Psi",

    habilidades: [
        "Rastro"
    ],

    stats: {
        ps: 55,
        ataque: 50,
        defensa: 65,
        ataqueEspecial: 175,
        defensaEspecial: 105,
        velocidad: 150
    },

    evoluciones: [
        "abra",
        "kadabra",
        "alakazam",
        "mega-alakazam"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Alakazam concentra toda su energía en su extraordinario poder psíquico.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10037.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10037.png"
},

{
    numero: 80,
    id: "mega-slowbro",
    region: "Kanto",
    nombre: "Mega Slowbro",

    esMega: true,

    tipos: [
        "Agua",
        "Psíquico"
    ],

    altura: 2.0,
    peso: 120.0,

    categoria: "Cangrejo Ermitaño",

    habilidades: [
        "Caparazón"
    ],

    stats: {
        ps: 95,
        ataque: 75,
        defensa: 180,
        ataqueEspecial: 130,
        defensaEspecial: 80,
        velocidad: 30
    },

    evoluciones: [
        "slowpoke",
        "slowbro",
        "mega-slowbro"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Slowbro queda prácticamente protegido por el caparazón que lo envuelve.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10071.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10071.png"
},

{
    numero: 94,
    id: "mega-gengar",
    region: "Kanto",
    nombre: "Mega Gengar",

    esMega: true,

    tipos: [
        "Fantasma",
        "Veneno"
    ],

    altura: 1.4,
    peso: 40.5,

    categoria: "Sombra",

    habilidades: [
        "Sombra Trampa"
    ],

    stats: {
        ps: 60,
        ataque: 65,
        defensa: 80,
        ataqueEspecial: 170,
        defensaEspecial: 95,
        velocidad: 130
    },

    evoluciones: [
        "gastly",
        "haunter",
        "gengar",
        "mega-gengar"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Gengar puede desaparecer parcialmente en las sombras y posee un enorme poder especial.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10038.png"
},

{
    numero: 115,
    id: "mega-kangaskhan",
    region: "Kanto",
    nombre: "Mega Kangaskhan",

    esMega: true,

    tipos: [
        "Normal"
    ],

    altura: 2.2,
    peso: 100.0,

    categoria: "Padres",

    habilidades: [
        "Vínculo Parental"
    ],

    stats: {
        ps: 105,
        ataque: 125,
        defensa: 100,
        ataqueEspecial: 60,
        defensaEspecial: 100,
        velocidad: 100
    },

    evoluciones: [
        "kangaskhan",
        "mega-kangaskhan"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "El vínculo entre Kangaskhan y su cría aumenta enormemente durante la megaevolución.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10039.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10039.png"
},

{
    numero: 127,
    id: "mega-pinsir",
    region: "Kanto",
    nombre: "Mega Pinsir",

    esMega: true,

    tipos: [
        "Bicho",
        "Volador"
    ],

    altura: 1.7,
    peso: 59.0,

    categoria: "Escarabajo",

    habilidades: [
        "Piel Celeste"
    ],

    stats: {
        ps: 65,
        ataque: 155,
        defensa: 120,
        ataqueEspecial: 65,
        defensaEspecial: 90,
        velocidad: 105
    },

    evoluciones: [
        "pinsir",
        "mega-pinsir"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Pinsir desarrolla unas enormes alas y unos cuernos todavía más poderosos.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10040.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10040.png"
},

{
    numero: 130,
    id: "mega-gyarados",
    region: "Kanto",
    nombre: "Mega Gyarados",

    esMega: true,

    tipos: [
        "Agua",
        "Siniestro"
    ],

    altura: 6.5,
    peso: 305.0,

    categoria: "Atrocidad",

    habilidades: [
        "Mold Breaker"
    ],

    stats: {
        ps: 95,
        ataque: 155,
        defensa: 109,
        ataqueEspecial: 70,
        defensaEspecial: 130,
        velocidad: 81
    },

    evoluciones: [
        "magikarp",
        "gyarados",
        "mega-gyarados"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Gyarados adquiere una forma mucho más agresiva y poderosa.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10041.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10041.png"
},

{
    numero: 142,
    id: "mega-aerodactyl",
    region: "Kanto",
    nombre: "Mega Aerodactyl",

    esMega: true,

    tipos: [
        "Roca",
        "Volador"
    ],

    altura: 2.1,
    peso: 79.0,

    categoria: "Fósil",

    habilidades: [
        "Garra Dura"
    ],

    stats: {
        ps: 80,
        ataque: 135,
        defensa: 85,
        ataqueEspecial: 70,
        defensaEspecial: 95,
        velocidad: 150
    },

    evoluciones: [
        "aerodactyl",
        "mega-aerodactyl"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Aerodactyl recupera características de su aspecto prehistórico y aumenta enormemente su velocidad.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10042.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10042.png"
},

{
    numero: 150,
    id: "mega-mewtwo-x",
    region: "Kanto",
    nombre: "Mega Mewtwo X",

    esMega: true,

    tipos: [
        "Psíquico",
        "Lucha"
    ],

    altura: 2.3,
    peso: 127.0,

    categoria: "Genético",

    habilidades: [
        "Impasible"
    ],

    stats: {
        ps: 106,
        ataque: 190,
        defensa: 100,
        ataqueEspecial: 154,
        defensaEspecial: 100,
        velocidad: 130
    },

    evoluciones: [
        "mewtwo",
        "mega-mewtwo-x",
        "mega-mewtwo-y"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Mewtwo X desarrolla una enorme fuerza física y adopta el tipo Lucha.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10043.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10043.png"
},

{
    numero: 150,
    id: "mega-mewtwo-y",
    region: "Kanto",
    nombre: "Mega Mewtwo Y",

    esMega: true,

    tipos: [
        "Psíquico"
    ],

    altura: 1.5,
    peso: 33.0,

    categoria: "Genético",

    habilidades: [
        "Insomnio"
    ],

    stats: {
        ps: 106,
        ataque: 150,
        defensa: 70,
        ataqueEspecial: 194,
        defensaEspecial: 120,
        velocidad: 140
    },

    evoluciones: [
        "mewtwo",
        "mega-mewtwo-x",
        "mega-mewtwo-y"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Mewtwo Y concentra su poder en sus capacidades psíquicas y su enorme velocidad.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10044.png"
},

{
    numero: 36,
    id: "mega-clefable",
    region: "Kanto",
    nombre: "Mega Clefable",

    esMega: true,

    tipos: [
        "Hada",
        "Volador"
    ],

    altura: 2.0,
    peso: 17.5,

    categoria: "Hada",

    habilidades: [
        "Espejo Mágico"
    ],

    stats: {
        ps: 95,
        ataque: 80,
        defensa: 93,
        ataqueEspecial: 135,
        defensaEspecial: 110,
        velocidad: 70
    },

    evoluciones: [
        "cleffa",
        "clefairy",
        "clefable",
        "mega-clefable"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Clefable utiliza la energía de la megaevolución para elevarse y controlar la gravedad a su alrededor.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10278.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10278.png"
},

{
    numero: 121,
    id: "mega-starmie",
    region: "Kanto",
    nombre: "Mega Starmie",

    esMega: true,

    tipos: [
        "Agua",
        "Psíquico"
    ],

    altura: 1.1,
    peso: 80.0,

    categoria: "Misterioso",

    habilidades: [
        "Potencia"
    ],

    stats: {
        ps: 60,
        ataque: 140,
        defensa: 105,
        ataqueEspecial: 130,
        defensaEspecial: 105,
        velocidad: 120
    },

    evoluciones: [
        "staryu",
        "starmie",
        "mega-starmie"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Starmie adquiere movimientos más parecidos a los de los humanos y aumenta enormemente su poder.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10280.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10280.png"
},

{
    numero: 71,
    id: "mega-victreebel",
    region: "Kanto",
    nombre: "Mega Victreebel",

    esMega: true,

    tipos: [
        "Planta",
        "Veneno"
    ],

    altura: 4.5,
    peso: 125.5,

    categoria: "Atrapamoscas",

    habilidades: [
        "Revés"
    ],

    stats: {
        ps: 80,
        ataque: 125,
        defensa: 85,
        ataqueEspecial: 135,
        defensaEspecial: 95,
        velocidad: 70
    },

    evoluciones: [
        "bellsprout",
        "weepinbell",
        "victreebel",
        "mega-victreebel"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Victreebel produce una cantidad enorme de ácido que aumenta todavía más su peligrosidad.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10279.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10279.png"
},

{
    numero: 149,
    id: "mega-dragonite",
    region: "Kanto",
    nombre: "Mega Dragonite",

    esMega: true,

    tipos: [
        "Dragón",
        "Volador"
    ],

    altura: 2.2,
    peso: 210.0,

    categoria: "Dragón",

    habilidades: [
        "Multiescamas"
    ],

    stats: {
        ps: 91,
        ataque: 124,
        defensa: 115,
        ataqueEspecial: 145,
        defensaEspecial: 125,
        velocidad: 100
    },

    evoluciones: [
        "dratini",
        "dragonair",
        "dragonite",
        "mega-dragonite"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Mega Dragonite aumenta enormemente sus poderes y lleva su naturaleza bondadosa hasta el extremo.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10281.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10281.png"
},

{
    numero: 173,
    id: "cleffa",
    region: "Johto",
    nombre: "Cleffa",

    tipos: [
        "Hada"
    ],

    altura: 0.3,
    peso: 3.0,

    categoria: "Estrella",

    habilidades: [
        "Gran Encanto",
        "Muro Mágico"
    ],

    stats: {
        ps: 50,
        ataque: 25,
        defensa: 28,
        ataqueEspecial: 45,
        defensaEspecial: 55,
        velocidad: 15
    },

    evoluciones: [
        "cleffa",
        "clefairy",
        "clefable",
        "mega-clefable"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Cleffa es un Pokémon pequeño cuya forma recuerda a una estrella.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/173.png",

    esMega: false
},

{
    numero: 26,
    id: "raichu",
    region: "Kanto",
    nombre: "Raichu",

    tipos: ["Eléctrico"],

    altura: 0.8,
    peso: 30.0,

    categoria: "Ratón",

    habilidades: [
        "Electricidad Estática"
    ],

    stats: {
        ps: 60,
        ataque: 90,
        defensa: 55,
        ataqueEspecial: 90,
        defensaEspecial: 80,
        velocidad: 110
    },

    evoluciones: [
    "pikachu",
    "raichu"
],

   formasRegionales: [
    "raichu-alola"
],

    formasEspeciales: [],

    descripcion:
        "Raichu almacena electricidad en sus mejillas y puede descargar potentes cantidades de energía.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/26.png"
},

{
    numero: 26,
    id: "raichu-alola",
    nombre: "Raichu de Alola",

    tipos: [
        "Eléctrico",
        "Psíquico"
    ],

    region: "Alola",

    altura: 0.7,
    peso: 21.0,

    categoria: "Pokémon Ratón",

    habilidades: [
        "Cola Surf"
    ],

    stats: {
        ps: 60,
        ataque: 85,
        defensa: 50,
        ataqueEspecial: 95,
        defensaEspecial: 85,
        velocidad: 110
    },

    evoluciones: [
        "raichu-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "La energía eléctrica que acumula le permite desplazarse por el aire sobre su cola.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10100.png"
},

{
    numero: 27,
    id: "sandshrew-alola",
    nombre: "Sandshrew de Alola",
    tipos: [
        "Hielo",
        "Acero"
    ],
    region: "Alola",

    altura: 0.7,
    peso: 40.0,

    categoria: "Ratón",

    habilidades: [
        "Manto Níveo"
    ],

    stats: {
        ps: 50,
        ataque: 75,
        defensa: 90,
        ataqueEspecial: 10,
        defensaEspecial: 35,
        velocidad: 40
    },

    evoluciones: [
        "sandshrew-alola",
        "sandslash-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Su cuerpo se ha adaptado al frío de las montañas de Alola y está cubierto por una resistente capa de hielo.",

    imagen:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10101.png",

imagenShiny:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10101.png"
},

{
    numero: 28,
    id: "sandslash-alola",
    nombre: "Sandslash de Alola",

    tipos: [
        "Hielo",
        "Acero"
    ],

    region: "Alola",

    altura: 1.2,
    peso: 55.0,

    categoria: "Pokémon Ratón",

    habilidades: [
        "Manto Níveo"
    ],

    stats: {
        ps: 75,
        ataque: 100,
        defensa: 120,
        ataqueEspecial: 25,
        defensaEspecial: 65,
        velocidad: 65
    },

    evoluciones: [
        "sandshrew-alola",
        "sandslash-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Sandslash de Alola tiene el cuerpo cubierto de hielo y unas garras adaptadas para desplazarse por terrenos nevados.",

   imagen:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10102.png",

imagenShiny:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10102.png"
},

{
    numero: 37,
    id: "vulpix-alola",
    nombre: "Vulpix de Alola",

    tipos: [
        "Hielo"
    ],

    region: "Alola",

    altura: 0.6,
    peso: 9.9,

    categoria: "Pokémon Zorro",

    habilidades: [
        "Manto Níveo"
    ],

    stats: {
        ps: 38,
        ataque: 41,
        defensa: 40,
        ataqueEspecial: 50,
        defensaEspecial: 65,
        velocidad: 65
    },

    evoluciones: [
        "vulpix-alola",
        "ninetales-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Vulpix de Alola vive en montañas nevadas y su cuerpo se ha adaptado al frío extremo.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10103.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10103.png"
},

{
    numero: 38,
    id: "ninetales-alola",
    nombre: "Ninetales de Alola",

    tipos: [
        "Hielo",
        "Hada"
    ],

    region: "Alola",

    altura: 1.1,
    peso: 19.9,

    categoria: "Pokémon Zorro",

    habilidades: [
        "Manto Níveo"
    ],

    stats: {
        ps: 73,
        ataque: 67,
        defensa: 75,
        ataqueEspecial: 81,
        defensaEspecial: 100,
        velocidad: 109
    },

    evoluciones: [
        "vulpix-alola",
        "ninetales-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Ninetales de Alola vive en montañas nevadas. Se dice que puede crear cristales de hielo y controlar el frío.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10104.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10104.png"
},

{
    numero: 50,
    id: "diglett-alola",
    nombre: "Diglett de Alola",

    tipos: [
        "Tierra",
        "Acero"
    ],

    region: "Alola",

    altura: 0.2,
    peso: 1.0,

    categoria: "Pokémon Topo",

    habilidades: [
        "Velo Arena",
        "Rizos Rebeldes"
    ],

    stats: {
        ps: 10,
        ataque: 55,
        defensa: 30,
        ataqueEspecial: 35,
        defensaEspecial: 45,
        velocidad: 90
    },

    evoluciones: [
        "diglett-alola",
        "dugtrio-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Diglett de Alola tiene tres mechones de pelo dorado que le ayudan a detectar cambios en el suelo.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10105.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10105.png"
},

{
    numero: 51,
    id: "dugtrio-alola",
    nombre: "Dugtrio de Alola",

    tipos: [
        "Tierra",
        "Acero"
    ],

    region: "Alola",

    altura: 0.7,
    peso: 66.6,

    categoria: "Pokémon Topo",

    habilidades: [
        "Velo Arena",
        "Rizos Rebeldes"
    ],

    stats: {
        ps: 35,
        ataque: 100,
        defensa: 60,
        ataqueEspecial: 50,
        defensaEspecial: 70,
        velocidad: 110
    },

    evoluciones: [
        "diglett-alola",
        "dugtrio-alola"
    ],

    formasRegionales: [],

    formasEspeciales: [],

    descripcion:
        "Dugtrio de Alola tiene una cabellera dorada que le sirve para protegerse y detectar lo que ocurre bajo tierra.",

    imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10106.png",

    imagenShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10106.png"
},

];