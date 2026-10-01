function buscarPokemon() {

    const texto =
        document
            .getElementById("busqueda")
            .value
            .toLowerCase()
            .trim();


    const resultados =
        document.getElementById("resultados");


    resultados.innerHTML = "";


    if (texto === "") {

        return;

    }


    const encontrados =
        pokemon.filter(p => {

            return (

                p.nombre
                    .toLowerCase()
                    .includes(texto)

                ||

                String(p.numero) === texto

                ||

                p.tipos.some(
                    tipo =>
                        tipo
                            .toLowerCase()
                            .includes(texto)
                )

            );

        });


    if (encontrados.length === 0) {

        resultados.innerHTML = `
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


    encontrados.forEach(p => {

        const tarjeta =
            document.createElement("div");


        tarjeta.className =
            "resultado";


        tarjeta.style.cursor =
            "pointer";


        tarjeta.onclick = function () {

            window.location.href =
                "pokemon.html?id=" +
                encodeURIComponent(p.id);

        };


        tarjeta.innerHTML = `

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


        resultados.appendChild(tarjeta);

    });

}


/* =========================
   BOTÓN BUSCAR
========================= */

const botonBuscar =
    document.getElementById("botonBuscar");


if (botonBuscar) {

    botonBuscar.addEventListener(
        "click",
        buscarPokemon
    );

}


/* =========================
   BUSCAR CON ENTER
========================= */

const campoBusqueda =
    document.getElementById("busqueda");


if (campoBusqueda) {

    campoBusqueda.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                buscarPokemon();

            }

        }
    );

}