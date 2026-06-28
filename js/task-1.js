const categoriesList = document.querySelector("ul#categories");
const items = categoriesList.querySelectorAll("li.item");
console.log(items.length);

for (const item of items) {
    console.log(
        item.querySelector("h2").textContent,
        item.querySelectorAll("li").length
    );
}
