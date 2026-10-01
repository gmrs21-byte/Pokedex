const parametros =
    new URLSearchParams(window.location.search);


const id =
    parametros.get("id");


const numero =
    Number(parametros.get("numero"));


let p;


/*
    Primero intentamos buscar por ID.

    Esto permite diferenciar:

    Venusaur       → venusaur
    Mega Venusaur  → mega-venusaur
*/


if (id) {

    p =
        pokemon.find(
            elemento => elemento.id === id
        );

}


/*
    Si no hay ID, utilizamos el número
    como método antiguo de compatibilidad.
*/


if (!p && numero) {

    p =
        pokemon.find(
            elemento => elemento.numero === numero
        );

}


const ficha =
    document.getElementById("fichaPokemon");


if (!p) {

    ficha.innerHTML = `

        <div class="mensaje-inicial">

            <h3>
                Pokémon no encontrado
            </h3>


            <button
                class="boton-buscar"
                onclick="location.href='lista.html'"
            >

                VOLVER A LA POKÉDEX

            </button>

        </div>

    `;

} else {


    /* TIPOS */

    const tiposHTML =
        p.tipos
            .map(tipo =>
                `<span class="tipo">${tipo}</span>`
            )
            .join("");


    /* HABILIDADES */

    const habilidadesHTML =
        p.habilidades
            .map(habilidad =>
                `<li>${habilidad}</li>`
            )
            .join("");

/* EVOLUCIONES */

function crearTarjetaEvolucion(idEvolucion) {

    const evolucion =
        pokemon.find(
            elemento =>
                elemento.id === idEvolucion
        );

    if (!evolucion) {
        return "";
    }

    const enlace =
        `pokemon.html?id=${encodeURIComponent(
            evolucion.id
        )}`;

    return `

        <div
            class="evolucion"
            onclick="location.href='${enlace}'"
        >

            <img
                src="${evolucion.imagen}"
                alt="${evolucion.nombre}"
            >

            <p>
                #${String(
                    evolucion.numero
                ).padStart(3, "0")}
            </p>

            <strong>
                ${evolucion.nombre}
            </strong>

        </div>

    `;
}


let evolucionesHTML = "";


/* MEWTWO */

if (
    p.id === "mewtwo" ||
    p.id === "mega-mewtwo-x" ||
    p.id === "mega-mewtwo-y"
) {

    evolucionesHTML = `

        <div class="linea-charizard">

            ${crearTarjetaEvolucion("mewtwo")}

            <div class="ramas-charizard">

                <div class="rama-charizard">

                    <span class="flecha-rama">
                        ↗
                    </span>

                    ${crearTarjetaEvolucion(
                        "mega-mewtwo-x"
                    )}

                </div>

                <div class="rama-charizard">

                    <span class="flecha-rama">
                        ↘
                    </span>

                    ${crearTarjetaEvolucion(
                        "mega-mewtwo-y"
                    )}

                </div>

            </div>

        </div>

    `;

}


/* CHARIZARD */

else if (
    p.id === "charmander" ||
    p.id === "charmeleon" ||
    p.id === "charizard" ||
    p.id === "mega-charizard-x" ||
    p.id === "mega-charizard-y"
) {
    evolucionesHTML = `

        <div class="linea-charizard">

            ${crearTarjetaEvolucion("charmander")}

            <span class="flecha-evolucion">
                ➜
            </span>

            ${crearTarjetaEvolucion("charmeleon")}

            <span class="flecha-evolucion">
                ➜
            </span>

            ${crearTarjetaEvolucion("charizard")}

            <div class="ramas-charizard">

                <div class="rama-charizard">

                    <span class="flecha-rama">
                        ↗
                    </span>

                    ${crearTarjetaEvolucion(
                        "mega-charizard-x"
                    )}

                </div>

                <div class="rama-charizard">

                    <span class="flecha-rama">
                        ↘
                    </span>

                    ${crearTarjetaEvolucion(
                        "mega-charizard-y"
                    )}

                </div>

            </div>

        </div>

    `;

}


/* RESTO DE POKÉMON */

else {

    evolucionesHTML =
        p.evoluciones
            .map((idEvolucion, indice) => {

                const evolucion =
                    pokemon.find(
                        elemento =>
                            elemento.id === idEvolucion
                    );

                if (!evolucion) {
                    return "";
                }

                const flecha =
                    indice > 0
                        ? `<span class="flecha-evolucion">➜</span>`
                        : "";

                const enlace =
                    `pokemon.html?id=${encodeURIComponent(
                        evolucion.id
                    )}`;

                return `

                    ${flecha}

                    <div
                        class="evolucion"
                        onclick="location.href='${enlace}'"
                    >

                        <img
                            src="${evolucion.imagen}"
                            alt="${evolucion.nombre}"
                        >

                        <p>
                            #${String(
                                evolucion.numero
                            ).padStart(3, "0")}
                        </p>

                        <strong>
                            ${evolucion.nombre}
                        </strong>

                    </div>

                `;

            })
            .join("");

}

    /* FICHA COMPLETA */

    ficha.innerHTML = `

        <section class="presentacion">

            <p class="pequeno">

                #${String(
                    p.numero
                ).padStart(3, "0")}

            </p>


            <h2>

                ${p.nombre}

            </h2>

        </section>



        <div class="resultado">


        <div class="imagen-pokemon">

  <button
    id="botonShiny"
    class="boton-shiny"
    onclick="cambiarShiny()"
    title="Cambiar a Shiny"
>
    ⭐
</button>

    <img
        id="imagenPokemon"
        src="${p.imagen}"
        alt="${p.nombre}"
        style="
            width: 300px;
            height: 300px;
            object-fit: contain;
        "
    >

</div>


            <div class="informacion">


                <h2>

                    #${String(
                        p.numero
                    ).padStart(3, "0")}

                    ${p.nombre}

                </h2>



                <div class="tipos">

                    ${tiposHTML}

                </div>

<p>

    <strong>
        Región:
    </strong>

    ${p.region}

</p>

                <p>

                    <strong>
                        Categoría:
                    </strong>

                    ${p.categoria}

                </p>



                <p>

                    <strong>
                        Altura:
                    </strong>

                    ${p.altura} m

                </p>



                <p>

                    <strong>
                        Peso:
                    </strong>

                    ${p.peso} kg

                </p>



                <p>

                    <strong>
                        Habilidades:
                    </strong>

                </p>


                <ul>

                    ${habilidadesHTML}

                </ul>



                <h3>

                    Estadísticas

                </h3>

<p class="total-estadisticas">
    <strong>
        Total:
    </strong>

    ${
        p.stats.ps +
        p.stats.ataque +
        p.stats.defensa +
        p.stats.ataqueEspecial +
        p.stats.defensaEspecial +
        p.stats.velocidad
    }
</p>

                <div class="estadisticas">


                    <div class="estadistica">

                        <span>
                            PS
                        </span>

                        <div class="barra-estadistica">

                            <div
                                class="relleno-estadistica"
                                style="
                                    width: ${(p.stats.ps / 255) * 100}%;
                                "
                            ></div>

                        </div>

                        <strong>
                            ${p.stats.ps}
                        </strong>

                    </div>



                    <div class="estadistica">

                        <span>
                            Ataque
                        </span>

                        <div class="barra-estadistica">

                            <div
                                class="relleno-estadistica"
                                style="
                                    width: ${(p.stats.ataque / 255) * 100}%;
                                "
                            ></div>

                        </div>

                        <strong>
                            ${p.stats.ataque}
                        </strong>

                    </div>



                    <div class="estadistica">

                        <span>
                            Defensa
                        </span>

                        <div class="barra-estadistica">

                            <div
                                class="relleno-estadistica"
                                style="
                                    width: ${(p.stats.defensa / 255) * 100}%;
                                "
                            ></div>

                        </div>

                        <strong>
                            ${p.stats.defensa}
                        </strong>

                    </div>



                    <div class="estadistica">

                        <span>
                            Ataque Especial
                        </span>

                        <div class="barra-estadistica">

                            <div
                                class="relleno-estadistica"
                                style="
                                    width: ${(p.stats.ataqueEspecial / 255) * 100}%;
                                "
                            ></div>

                        </div>

                        <strong>
                            ${p.stats.ataqueEspecial}
                        </strong>

                    </div>



                    <div class="estadistica">

                        <span>
                            Defensa Especial
                        </span>

                        <div class="barra-estadistica">

                            <div
                                class="relleno-estadistica"
                                style="
                                    width: ${(p.stats.defensaEspecial / 255) * 100}%;
                                "
                            ></div>

                        </div>

                        <strong>
                            ${p.stats.defensaEspecial}
                        </strong>

                    </div>



                    <div class="estadistica">

                        <span>
                            Velocidad
                        </span>

                        <div class="barra-estadistica">

                            <div
                                class="relleno-estadistica"
                                style="
                                    width: ${(p.stats.velocidad / 255) * 100}%;
                                "
                            ></div>

                        </div>

                        <strong>
                            ${p.stats.velocidad}
                        </strong>

                    </div>


                </div>


            </div>

        </div>



        <!-- EVOLUCIONES -->


        <div class="mensaje-inicial">

            <h3>

                Evoluciones

            </h3>


            <div class="evoluciones">

                ${evolucionesHTML}

            </div>

        </div>



             <!-- DESCRIPCIÓN -->


        <div class="mensaje-inicial">

            <h3>

                Descripción

            </h3>


            <p>

                ${p.descripcion}

            </p>

        </div>


       <!-- FORMAS REGIONALES -->

${
    p.formasRegionales && p.formasRegionales.length > 0
    ? `

        <div class="mensaje-inicial">

            <h3>
                🌍 Formas regionales
            </h3>

            <div class="evoluciones">

                ${p.formasRegionales.map(idForma => {

                    const forma =
                        pokemon.find(
                            elemento =>
                                elemento.id === idForma
                        );

                    if (!forma) return "";

                    /*
                     * Buscamos las evoluciones de esta
                     * forma regional.
                     *
                     * Ejemplo:
                     * Rattata de Alola
                     * → Raticate de Alola
                     */

                    const cadenaRegional = forma.evoluciones
                        ? forma.evoluciones
                            .map(idEvolucion => {

                                return pokemon.find(
                                    elemento =>
                                        elemento.id === idEvolucion
                                );

                            })
                            .filter(Boolean)
                        : [];

                    return `

                        <div
                            class="linea-charizard"
                        >

                            ${cadenaRegional
                                .map((evolucion, indice) => {

                                    const enlace =
                                        `pokemon.html?id=${encodeURIComponent(
                                            evolucion.id
                                        )}`;

                                    return `

                                        ${indice > 0
                                            ? `
                                                <span
                                                    class="flecha-evolucion"
                                                >
                                                    ➜
                                                </span>
                                            `
                                            : ""
                                        }

                                        <div
                                            class="evolucion"
                                            onclick="location.href='${enlace}'"
                                        >

                                            <img
                                                src="${evolucion.imagen}"
                                                alt="${evolucion.nombre}"
                                            >

                                            <p>
                                                #${String(
                                                    evolucion.numero
                                                ).padStart(3, "0")}
                                            </p>

                                            <strong>
                                                ${evolucion.nombre}
                                            </strong>

                                        </div>

                                    `;

                                })
                                .join("")}

                        </div>

                    `;

                }).join("")}

            </div>

        </div>

    `
    : ""
}


        <!-- FORMAS ESPECIALES -->

        ${
            p.formasEspeciales && p.formasEspeciales.length > 0
            ? `

                <div class="mensaje-inicial">

                    <h3>
                        ⭐ Formas especiales
                    </h3>

                    <div class="evoluciones">

                        ${p.formasEspeciales.map(idForma => {

                            const forma =
                                pokemon.find(
                                    elemento =>
                                        elemento.id === idForma
                                );

                            if (!forma) return "";

                            return `

                                <div
                                    class="evolucion"
                                    onclick="location.href='pokemon.html?id=${encodeURIComponent(forma.id)}'"
                                >

                                    <img
                                        src="${forma.imagen}"
                                        alt="${forma.nombre}"
                                    >

                                    <p>
                                        #${String(
                                            forma.numero
                                        ).padStart(3, "0")}
                                    </p>

                                    <strong>
                                        ${forma.nombre}
                                    </strong>

                                </div>

                            `;

                        }).join("")}

                    </div>

                </div>

            `
            : ""
        }


        <br>



        <button
            class="boton-buscar"
            onclick="location.href='lista.html'"
        >

            ← VOLVER A LA POKÉDEX

        </button>

    `;

}

let esShiny = false;


function cambiarShiny() {

    esShiny = !esShiny;

    const imagen =
        document.getElementById("imagenPokemon");

    const boton =
        document.getElementById("botonShiny");


    if (esShiny) {

        imagen.src = p.imagenShiny;

        boton.textContent = "🌟";

        boton.title = "Volver al Pokémon normal";

        boton.classList.add("shiny-activo");

    } else {

        imagen.src = p.imagen;

        boton.textContent = "⭐";

        boton.title = "Cambiar a Shiny";

        boton.classList.remove("shiny-activo");

    }

}