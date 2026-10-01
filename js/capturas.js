document.addEventListener("DOMContentLoaded", () => {

    const contenedor =
        document.getElementById("capturasPokemon");

    const capturados =
        JSON.parse(
            localStorage.getItem("pokemonCapturados")
        ) || [];


    /* =========================
       POKÉMON NORMALES
    ========================= */

   const pokemonNormales =
    pokemon.filter(p => {

        // Las Mega Evoluciones van aparte
        if (p.esMega) {
            return false;
        }

        // Si otro Pokémon tiene esta forma como
        // forma regional, no cuenta
        const esFormaRegional =
            pokemon.some(
                otroPokemon =>
                    otroPokemon.formasRegionales &&
                    otroPokemon.formasRegionales.includes(p.id)
            );

        // Si otro Pokémon tiene esta forma como
        // forma especial, no cuenta
        const esFormaEspecial =
            pokemon.some(
                otroPokemon =>
                    otroPokemon.formasEspeciales &&
                    otroPokemon.formasEspeciales.includes(p.id)
            );

        // Solo cuentan los Pokémon normales
        return !esFormaRegional && !esFormaEspecial;

    });

    const pokemonCapturados =
        pokemonNormales.filter(p =>
            capturados.includes(p.id)
        );


    /* =========================
       MEGA EVOLUCIONES
    ========================= */

    const megaPokemon =
        pokemon.filter(p => p.esMega);

    const megaCapturados =
        megaPokemon.filter(p =>
            capturados.includes(p.id)
        );


    /* =========================
       PORCENTAJES
    ========================= */

    const porcentajePokemon =
        pokemonNormales.length > 0
            ? (
                pokemonCapturados.length /
                pokemonNormales.length
            ) * 100
            : 0;


    const porcentajeMega =
        megaPokemon.length > 0
            ? (
                megaCapturados.length /
                megaPokemon.length
            ) * 100
            : 0;


    /* =========================
       TARJETAS
    ========================= */

    function crearTarjeta(p) {

        return `
            <div
                class="resultado"
                onclick="location.href='pokemon.html?id=${encodeURIComponent(p.id)}'"
            >

                <img
                    src="${p.imagen}"
                    alt="${p.nombre}"
                >

                <div class="resultado-info">

                    <span class="numero">
                        #${String(p.numero).padStart(3, "0")}
                    </span>

                    <h3>
                        ${p.nombre}
                    </h3>

                    <p>
                        ${p.tipos.join(" / ")}
                    </p>

                </div>

            </div>
        `;
    }


    /* =========================
       HTML COMPLETO
    ========================= */

    let html = `

        <!-- =====================
             POKÉMON NORMALES
        ====================== -->

        <section class="estadisticas-capturas">

            <h3>
                Pokémon capturados
            </h3>

            <div class="numero-capturas">

                <strong>
                    ${pokemonCapturados.length}
                </strong>

                /
                ${pokemonNormales.length}

            </div>

            <p>
                Has capturado el
                <strong>
                    ${porcentajePokemon.toFixed(1)}%
                </strong>
                de los Pokémon.
            </p>

            <div class="barra-progreso">

                <div
                    class="progreso"
                    style="width: ${porcentajePokemon}%"
                ></div>

            </div>

        </section>


        <section class="lista-capturas">

            <button
                class="boton-desplegable"
                onclick="toggleCapturas('listaPokemon')"
            >

                <span>
                    📖 Ver Pokémon capturados
                    (${pokemonCapturados.length})
                </span>

                <span id="flecha-listaPokemon">
                    ▼
                </span>

            </button>


            <div
                id="listaPokemon"
                class="contenido-desplegable"
                style="display: none;"
            >

                ${
                    pokemonCapturados.length === 0

                    ? `

                        <p class="sin-capturas">
                            Todavía no has capturado ningún Pokémon.
                        </p>

                    `

                    : `

                        <div class="resultados">

                            ${pokemonCapturados
                                .map(p => crearTarjeta(p))
                                .join("")}

                        </div>

                    `
                }

            </div>

        </section>


        <!-- =====================
             MEGA EVOLUCIONES
        ====================== -->

        <section class="estadisticas-capturas">

            <h3>
                Mega Evoluciones capturadas
            </h3>

            <div class="numero-capturas">

                <strong>
                    ${megaCapturados.length}
                </strong>

                /
                ${megaPokemon.length}

            </div>

            <p>
                Has capturado el
                <strong>
                    ${porcentajeMega.toFixed(1)}%
                </strong>
                de las Mega Evoluciones.
            </p>

            <div class="barra-progreso">

                <div
                    class="progreso"
                    style="width: ${porcentajeMega}%"
                ></div>

            </div>

        </section>


        <section class="lista-capturas">

            <button
                class="boton-desplegable"
                onclick="toggleCapturas('listaMega')"
            >

                <span>
                    ⭐ Ver Mega Evoluciones
                    (${megaCapturados.length})
                </span>

                <span id="flecha-listaMega">
                    ▼
                </span>

            </button>


            <div
                id="listaMega"
                class="contenido-desplegable"
                style="display: none;"
            >

                ${
                    megaCapturados.length === 0

                    ? `

                        <p class="sin-capturas">
                            Todavía no has capturado ninguna Mega Evolución.
                        </p>

                    `

                    : `

                        <div class="resultados">

                            ${megaCapturados
                                .map(p => crearTarjeta(p))
                                .join("")}

                        </div>

                    `
                }

            </div>

        </section>

    `;


    contenedor.innerHTML = html;

});


/* =========================
   ABRIR / CERRAR LISTAS
========================= */

function toggleCapturas(id) {

    const contenido =
        document.getElementById(id);

    const flecha =
        document.getElementById(
            "flecha-" + id
        );


    if (contenido.style.display === "none") {

        contenido.style.display = "block";

        flecha.textContent = "▲";

    } else {

        contenido.style.display = "none";

        flecha.textContent = "▼";

    }

}