const endpoint = 'http://3.89.180.15:8000/recipe';

async function loadRecipe() {
    const contentDiv = document.getElementById('recipe-content');
    contentDiv.innerHTML = '<p class="loading">Cargando receta...</p>';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        const data = await response.json();

        let html = '<div class="section"><h2>Ingredientes</h2><ul>';
        data.ingredients.forEach(ingredient => {
            html += `<li>${ingredient}</li>`;
        });
        html += '</ul></div>';

        html += '<div class="section"><h2>Instrucciones</h2><ol>';
        data.instructions.forEach(instruction => {
            html += `<li>${instruction}</li>`;
        });
        html += '</ol></div>';

        contentDiv.innerHTML = html;
    } catch (error) {
        contentDiv.innerHTML = '<p class="error">Error al cargar la receta. Verifica que el servidor esté ejecutándose.</p>';
        console.error('Error:', error);
    }
}

// Cargar la receta al cargar la página
window.onload = loadRecipe;