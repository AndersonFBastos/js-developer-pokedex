
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const conteudo = document.getElementById('conteudo')
const loadHomeButton = document.getElementById('loadHome')

function pokemonDetalhes(pokemon) {
    return `
         <section class="content ${pokemon.type}">
            <div class="nome">${pokemon.name}</div>
            <div class="numero">#${pokemon.number}</div>
            <ol class="tipos">
                ${pokemon.types.map((type) => `<li class="tipo ${type}">${type}</li>`).join('')}
            </ol>
            <div  class="imagem">
                <img
                    src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>

            <div class="about">
                <div class="titulo-about">About</div>
                <ol class="itens">
                    <li class="label">Species</li>
                    <li class="value">Seed</li>
                </ol>
                <ol class="itens">
                    <li class="label">Height</li>
                    <li class="value">${pokemon.height}</li>
                </ol>
                <ol class="itens">
                    <li class="label">Weight</li>
                    <li class="value">${pokemon.weight}</li>
                </ol>
                <ol class="itens">
                    <li class="label">Abilities</li>
                    <li class="value">${pokemon.abilities}</li>
                </ol>
                <div class="titulo-about">Breeding</div>
                <ol class="itens">
                    <li class="label">Gender</li>
                    <li class="value">87.5% 12.5%</li>
                </ol>
                <ol class="itens">
                    <li class="label">Egg Groups</li>
                    <li class="value">Monster</li>
                </ol>
                <ol class="itens">
                    <li class="label">Egg Cycle</li>
                    <li class="value">Grass</li>
                </ol>
            </div>
        </section>
        `
}

function loadPokemon() {
    pokeApi.getPokemon(id).then((pokemon) => {
        const newHtml = pokemonDetalhes(pokemon)
        conteudo.innerHTML += newHtml
    })
}

loadPokemon()

loadHomeButton.addEventListener('click', () => {
    window.location.href = 'index.html'
})
