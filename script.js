
function showColorInfo(color) {
    // Criar elemento de informação
    const info = document.createElement('div');
    info.className = 'color-description modern-card';
    
    // Get color name using an array of common colors
    const colorName = getColorName(color);
    
    info.innerHTML = `
        <h3>Cor Selecionada</h3>
        <div class="color-preview" style="background-color: ${color}"></div>
        <p>Valor: ${color}</p>
        <p>Nome aproximado: ${colorName}</p>
        <p>Sugestão de uso: ${getColorUsageSuggestion(colorName)}</p>
    `;
    
    // Encontrar ou criar container
    let container = document.querySelector('.color-info-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'color-info-container';
        document.querySelector('.circle-container').after(container);
    }
    
    container.innerHTML = '';
    container.appendChild(info);
}

function getColorName(color) {
    // Simplified color naming logic
    const colors = {
        '#FF0000': 'Vermelho',
        '#00FF00': 'Verde',
        '#0000FF': 'Azul',
        '#FFFF00': 'Amarelo',
        '#FF00FF': 'Magenta',
        '#00FFFF': 'Ciano',
        '#FF7F00': 'Laranja'
    };
    return colors[color.toUpperCase()] || 'Cor personalizada';
}

function getColorUsageSuggestion(colorName) {
    const suggestions = {
        'Vermelho': 'Ótimo para chamadas à ação e alertas',
        'Verde': 'Ideal para feedback positivo e elementos naturais',
        'Azul': 'Perfeito para links e elementos corporativos',
        'Amarelo': 'Bom para destacar informações importantes',
        'Magenta': 'Útil para elementos decorativos e criativos',
        'Ciano': 'Adequado para elementos tecnológicos e modernos',
        'Laranja': 'Excelente para botões de call-to-action secundários'
    };
    return suggestions[colorName] || 'Pode ser usado de acordo com o contexto do design';
}

function loadHarmonyImages() {
    // This function is no longer needed
}