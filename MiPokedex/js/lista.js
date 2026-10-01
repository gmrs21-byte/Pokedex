function mostrarLista(lista) {

    const contenedor =
        document.getElementById("listaPokemon");

    contenedor.innerHTML = "";

    if (lista.length === 0) {

        contenedor.innerHTML = `
            <div class="mensaje-inicial">

                <h3>
                    No se ha encontrado ningún Pokémon
                </h3>

                <p>
                    Prueba con otro nombre, número o tipo.
                </p>

            </div>
        `;

        return;
    }


    lista.forEach(p => {

        const idPokemon =
            p.id || p.nombre.toLowerCase();


        const capturados =
            JSON.parse(
                localStorage.getItem("pokemonCapturados")
            ) || [];


        const estaCapturado =
            capturados.includes(idPokemon);


        const tarjeta =
            document.createElement("div");


        tarjeta.className =
            "resultado";


        tarjeta.onclick = function () {

            abrirPokemon(idPokemon);

        };


        tarjeta.innerHTML = `

            <button
                class="pokeball ${estaCapturado ? "capturado" : ""}"
                onclick="capturarPokemon(event, '${idPokemon}')"
                title="${
                    estaCapturado
                        ? "Pokémon capturado"
                        : "Capturar Pokémon"
                }"
            >

                <span></span>

            </button>


            <img
                src="${p.imagen}"
                alt="${p.nombre}"
            >


            <h3>

                #${String(p.numero).padStart(3, "0")}

                ${p.nombre}

            </h3>


            <p>

                ${p.tipos.join(" / ")}

            </p>


            <p>

                🌍 ${p.region}

            </p>

        `;


        contenedor.appendChild(tarjeta);

    });

}



/* =========================
   ABRIR POKÉMON
========================= */

function abrirPokemon(id) {

    window.location.href =
        "pokemon.html?id=" +
        encodeURIComponent(id);

}



/* =========================
   CAPTURAR POKÉMON
========================= */

function capturarPokemon(event, id) {

    event.stopPropagation();


    let capturados =
        JSON.parse(
            localStorage.getItem("pokemonCapturados")
        ) || [];


    if (capturados.includes(id)) {

        capturados =
            capturados.filter(
                pokemonId =>
                    pokemonId !== id
            );

    } else {

        capturados.push(id);

    }


    localStorage.setItem(
        "pokemonCapturados",
        JSON.stringify(capturados)
    );


    actualizarLista();

}



/* =========================
   LISTA FILTRADA
========================= */

let listaFiltrada = [];



function actualizarLista() {

    const input =
        document.getElementById("filtroPokemon");


    const filtroTipo =
        document.getElementById("filtroTipo");


    const orden =
        document.getElementById("ordenPokemon");


    const texto =
        input
            ? input.value.toLowerCase().trim()
            : "";


    const tipo =
        filtroTipo
            ? filtroTipo.value
            : "Todos";


    /*
     * FILTRAMOS LOS POKÉMON
     */

    listaFiltrada =
        pokemon.filter(p => {


            /*
             * =========================
             * OCULTAR FORMAS REGIONALES
             * =========================
             */

            const esFormaRegional =
                pokemon.some(
                    otroPokemon =>

                        otroPokemon.formasRegionales &&

                        otroPokemon.formasRegionales.includes(
                            p.id
                        )
                );


            if (esFormaRegional) {

                return false;

            }



            /*
             * =========================
             * OCULTAR FORMAS ESPECIALES
             * =========================
             */

            const esFormaEspecial =
                pokemon.some(
                    otroPokemon =>

                        otroPokemon.formasEspeciales &&

                        otroPokemon.formasEspeciales.includes(
                            p.id
                        )
                );


            if (esFormaEspecial) {

                return false;

            }



            /*
             * =========================
             * BUSCAR
             * =========================
             */

            const coincideTexto =

                p.nombre
                    .toLowerCase()
                    .includes(texto)

                ||

                String(p.numero) === texto

                ||

                p.tipos.some(
                    t =>
                        t.toLowerCase() === texto
                );



            /*
             * =========================
             * FILTRO DE TIPO
             * =========================
             */

            const coincideTipo =

                tipo === "Todos"

                ||

                p.tipos.includes(tipo);



            return (
                coincideTexto &&
                coincideTipo
            );

        });



    /*
     * =========================
     * ORDENAR
     * =========================
     */

    if (orden) {


        if (orden.value === "numero") {

            listaFiltrada.sort(
                (a, b) =>
                    a.numero - b.numero
            );

        }


        if (orden.value === "nombre") {

            listaFiltrada.sort(
                (a, b) =>
                    a.nombre.localeCompare(
                        b.nombre,
                        "es"
                    )
            );

        }

    }



    /*
     * =========================
     * MOSTRAR
     * =========================
     */

    mostrarLista(listaFiltrada);

}



/* =========================
   CONTROLES
========================= */

const campoBusqueda =
    document.getElementById(
        "filtroPokemon"
    );


const campoTipo =
    document.getElementById(
        "filtroTipo"
    );


const campoOrden =
    document.getElementById(
        "ordenPokemon"
    );



if (campoBusqueda) {

    campoBusqueda.addEventListener(
        "input",
        actualizarLista
    );

}



if (campoTipo) {

    campoTipo.addEventListener(
        "change",
        actualizarLista
    );

}



if (campoOrden) {

    campoOrden.addEventListener(
        "change",
        actualizarLista
    );

}



/* =========================
   MOSTRAR LISTA AL ABRIR
========================= */

actualizarLista();