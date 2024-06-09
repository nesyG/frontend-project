document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            name: "SPARKLING TRIPLE CITRUS & MINT MOCKTAIL",
            image: "../public/images/image1.jpg",
            icons: [
                "../public/images/lemon-icon.png",
                "../public/images/orange-icon.png",
                "../public/images/leaf-icon.png",
                "../public/images/berry-icon.png"
            ]
        },
        {
            name: "MANGOSPARKLING TRIPLE CITRUS & MINT MOCKTAIL BULLET",
            image: "../public/images/image2.jpg",
            icons: [
                "../public/images/lemon-icon.png",
                "../public/images/orange-icon.png",
                "../public/images/leaf-icon.png",
                "../public/images/berry-icon.png"
            ]
        },
        {
            name: "SPARKLING TRIPLE CITRUS & MINT MOCKTAIL",
            image: "../public/images/image3.jpg",
            icons: [
                "../public/images/lemon-icon.png",
                "../public/images/orange-icon.png",
                "../public/images/leaf-icon.png",
                "../public/images/berry-icon.png"
            ]
        },
    ];

    const recipeContainer = document.getElementById('recipe-container');

    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('recipe__wrapper');

        const iconsDiv = document.createElement('div');
        iconsDiv.classList.add('recipe__icons');

        recipe.icons.forEach((icon, iconIndex) => {
            const iconDiv = document.createElement('div');
            iconDiv.classList.add('recipe__icon');

            const img = document.createElement('img');
            img.src = icon;
            img.alt = `Icon ${iconIndex + 1}`;

            if ((index === 0 && iconIndex === 0) || (index === 1 && (iconIndex === 1 || iconIndex === 2)) || (index === 2 && iconIndex === 3)) {
                img.style.opacity = '1';
            } else {
                img.style.opacity = '0';
            }

            iconDiv.appendChild(img);
            iconsDiv.appendChild(iconDiv);
        });

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('recipe__image');

        const recipeImg = document.createElement('img');
        recipeImg.src = recipe.image;
        recipeImg.alt = recipe.name;

        imageDiv.appendChild(recipeImg);

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('recipe__details');

        const name = document.createElement('h3');
        name.classList.add('recipe__name');
        name.textContent = recipe.name;

        detailsDiv.appendChild(name);

        wrapperDiv.appendChild(iconsDiv);
        wrapperDiv.appendChild(imageDiv);
        recipeDiv.appendChild(wrapperDiv);
        recipeDiv.appendChild(detailsDiv);

        recipeContainer.appendChild(recipeDiv);
    });
});


