window.onload = async () => {
    await loadRecipes();
}

async function loadRecipes() {
    const uri = "http://localhost:3000/recipes";
    const config = {
        method: "get",
        mode: "cors"
    }

    const response = await fetch(uri, config);
    const json = await response.json();
    console.log(response);
    console.log(json);

    renderRecipes(json.data);

    // fetch(uri, config)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((json) => {
    //         //do something with the JSON
    //     })
}

function renderRecipes(recipes) {
    /* <section class="recipe">
                <h2>Title</h2>
                <p>Instructions</p>
            </section> */

    /* 
        <section class="recipe">
            <h2>Title</h2>
            <p>Instructions</p>
        </section>
    */

    const list = document.querySelector("#recipe-list");

    for (const recipe of recipes) {
        console.log(recipe);
        const section = document.createElement("section");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        h2.textContent = recipe.name;
        p.textContent = recipe.instructions;
        section.className = "recipe";

        section.appendChild(h2);
        section.appendChild(p);

        list.appendChild(section);
    }
}