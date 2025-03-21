window.onload = async () => {
    await loadRecipes();

    // handle the form submit
    document.querySelector("button").onclick = handleForm;
}

async function handleForm(event) {
    console.log("Clicked");
    // stops the form the default behavior
    event.preventDefault();

    // read our form values
    const newRecipe = {
        name: document.querySelector("#name").value,
        ingredients: document.querySelector("#ingredients").value,
        cookingTime: document.querySelector("#cookingTime").value,
        instructions: document.querySelector("#instructions").value,
    }
    console.log(newRecipe);
    console.log(JSON.stringify(newRecipe));

    // make a Post request to the server
    const uri = "http://localhost:3000/recipes";
    const config = {
        method: "post",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe)
    }

    const response = await fetch(uri, config);
    const json = await response.json();

    console.log(json);
}

async function loadRecipes() {
    const uri = "http://localhost:3000/recipes";
    const config = {
        method: "get",
        mode: "cors"
    }

    const response = await fetch(uri, config);
    const json = await response.json();
    // console.log(response);
    // console.log(json);

    const list = document.querySelector("#recipe-list");
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
        renderRecipe(recipe);
    }
    const table = document.querySelector("#recipe-table");
    const headers = ["Name", "Ingredients", "Cook Time", "Instructions"];

    //create headers
    let tr = document.createElement("tr");
    for (const header of headers) {
        const td = document.createElement("td");
        td.textContent = header;

        tr.appendChild(td);
    }
    table.appendChild(tr);

    //create the rows
    for (const recipe of recipes) {
        const row = document.createElement("tr");

        const values = [recipe.name, recipe.ingredients, recipe.cookingTime, recipe.instructions];

        for (const value of values) {
            addCell(row, value);
        }

        table.appendChild(row);
    }
}

function renderRecipe(recipe) {
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

function addCell(row, value) {
    const td = document.createElement("td");
    td.textContent = value;
    row.appendChild(td);


    // addCell(tr, recipe.name);
    // addCell(tr, recipe.instructions);
    // addCell(tr, recipe.cookTime);
    // addCell(tr, recipe.instructions);


    // const td = document.createElement("td");
    // td.textContent = recipe.name;
    // tr.appendChild(td);
    // const td2 = document.createElement("td");
    // td.textContent = recipe.name;
    // tr.appendChild(td);
    // const td3 = document.createElement("td");
    // td.textContent = recipe.name;
    // tr.appendChild(td);
    // const td4 = document.createElement("td");
    // td.textContent = recipe.name;
    // tr.appendChild(td);
}

function addCell(row, value) {
    const td = document.createElement("td");
    td.textContent = value;
    row.appendChild(td);
}
