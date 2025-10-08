// Supermarket data structure
const supermarketData = {
    1: {
        name: "Hortifruti",
        items: ["Frutas", "Verduras", "Legumes", "Temperos Frescos"]
    },
    2: {
        name: "Padaria",
        items: ["Pães", "Bolos e Tortas", "Salgados"]
    },
    3: {
        name: "Açougue",
        items: ["Carnes Bovinas", "Carnes Suínas", "Aves", "Carnes Especiais"]
    },
    4: {
        name: "Frios e Laticínios",
        items: ["Queijos", "Presuntos e Mortadelas", "Iogurtes", "Leite", "Manteiga e Margarina", "Requeijão"]
    },
    5: {
        name: "Mercearia Salgada",
        items: ["Arroz", "Feijão", "Macarrão", "Óleo e Azeite", "Molhos", "Temperos Secos", "Enlatados", "Farinha"]
    },
    6: {
        name: "Mercearia Doce",
        items: ["Açúcar", "Café", "Achocolatado", "Biscoitos e Bolachas", "Chocolates", "Doces e Sobremesas", "Cereais Matinais"]
    },
    7: {
        name: "Bebidas",
        items: ["Refrigerantes", "Sucos", "Águas", "Cervejas", "Vinhos", "Destilados"]
    },
    8: {
        name: "Congelados",
        items: ["Sorvetes", "Pizzas Congeladas", "Lasanhas e Pratos Prontos", "Vegetais Congelados", "Carnes Congeladas"]
    },
    9: {
        name: "Higiene Pessoal",
        items: ["Sabonetes", "Shampoos e Condicionadores", "Cremes Dentais", "Desodorantes", "Papel Higiênico", "Absorventes"]
    },
    10: {
        name: "Limpeza",
        items: ["Detergentes", "Sabão em Pó", "Amaciantes", "Desinfetantes", "Esponjas e Panos", "Sacos de Lixo"]
    },
    11: {
        name: "Bebê",
        items: ["Fraldas", "Lenços Umedecidos", "Papinhas", "Leite em Pó Infantil"]
    },
    12: {
        name: "Pet Shop",
        items: ["Ração para Cães", "Ração para Gatos", "Petiscos", "Areia Higiênica"]
    },
    13: {
        name: "Utilidades Domésticas",
        items: ["Copos e Pratos Descartáveis", "Papel Alumínio", "Filme PVC", "Velas", "Pilhas e Baterias"]
    },
    14: {
        name: "Eletrônicos",
        items: ["Fones de Ouvido", "Carregadores", "Cabos USB"]
    },
    15: {
        name: "Bazar",
        items: ["Panelas", "Talheres", "Organizadores", "Toalhas"]
    }
};

// Initialize the supermarket grid
function initSupermarket() {
    const grid = document.getElementById('supermarketGrid');

    Object.keys(supermarketData).forEach(sectorNumber => {
        const sector = supermarketData[sectorNumber];
        const card = createSectorCard(sectorNumber, sector);
        grid.appendChild(card);
    });
}

// Create a sector card element
function createSectorCard(sectorNumber, sector) {
    const card = document.createElement('div');
    card.className = 'sector-card';

    card.innerHTML = `
        <div class="sector-number">Setor ${sectorNumber}</div>
        <div class="sector-name">${sector.name}</div>
        <div class="sector-count">${sector.items.length} ${sector.items.length === 1 ? 'item' : 'itens'}</div>
    `;

    card.addEventListener('click', () => openModal(sectorNumber, sector));

    return card;
}

// Open modal with sector details
function openModal(sectorNumber, sector) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalList = document.getElementById('modalList');

    modalTitle.textContent = `Setor ${sectorNumber} - ${sector.name}`;

    modalList.innerHTML = '';
    sector.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalList.appendChild(li);
    });

    modal.classList.add('show');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

// Event listeners
document.getElementById('closeModal').addEventListener('click', closeModal);

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Product to sector mapping for grocery list analysis
const productMapping = {
    // Setor 1 - Hortifruti
    'frutas': 1, 'fruta': 1, 'maçã': 1, 'maça': 1, 'banana': 1, 'laranja': 1, 'uva': 1, 'morango': 1, 'melancia': 1, 'melão': 1, 'mamão': 1, 'abacaxi': 1, 'pera': 1, 'manga': 1, 'limão': 1,
    'verduras': 1, 'verdura': 1, 'alface': 1, 'rúcula': 1, 'rucula': 1, 'couve': 1, 'espinafre': 1, 'agrião': 1, 'acelga': 1,
    'legumes': 1, 'legume': 1, 'tomate': 1, 'cebola': 1, 'batata': 1, 'cenoura': 1, 'abobrinha': 1, 'berinjela': 1, 'pimentão': 1, 'pimentao': 1, 'brocolis': 1, 'brócolis': 1, 'couve-flor': 1,
    'temperos frescos': 1, 'salsa': 1, 'cebolinha': 1, 'coentro': 1, 'manjericão': 1, 'manjericao': 1,

    // Setor 2 - Padaria
    'pães': 2, 'pães': 2, 'pao': 2, 'pão': 2, 'pão francês': 2, 'pao frances': 2, 'pão de forma': 2, 'baguete': 2, 'bisnaga': 2,
    'bolos': 2, 'bolo': 2, 'torta': 2, 'tortas': 2,
    'salgados': 2, 'salgado': 2, 'coxinha': 2, 'pastel': 2, 'esfiha': 2, 'empada': 2,

    // Setor 3 - Açougue
    'carnes bovinas': 3, 'carne': 3, 'carne bovina': 3, 'picanha': 3, 'alcatra': 3, 'filé': 3, 'file': 3, 'costela': 3, 'patinho': 3, 'moída': 3, 'moida': 3,
    'carnes suínas': 3, 'carne suína': 3, 'porco': 3, 'lombo': 3, 'pernil': 3, 'linguiça': 3, 'linguica': 3, 'bacon': 3,
    'aves': 3, 'frango': 3, 'peito de frango': 3, 'coxa': 3, 'sobrecoxa': 3, 'asa': 3, 'chester': 3, 'peru': 3,
    'carnes especiais': 3, 'cordeiro': 3, 'cabrito': 3,

    // Setor 4 - Frios e Laticínios
    'queijos': 4, 'queijo': 4, 'mussarela': 4, 'prato': 4, 'minas': 4, 'parmesão': 4, 'parmesao': 4, 'provolone': 4,
    'presunto': 4, 'mortadela': 4, 'presuntos': 4,
    'iogurtes': 4, 'iogurte': 4, 'yogurt': 4,
    'leite': 4, 'leite integral': 4, 'leite desnatado': 4,
    'manteiga': 4, 'margarina': 4,
    'requeijão': 4, 'requeijao': 4, 'catupiry': 4,

    // Setor 5 - Mercearia Salgada
    'arroz': 5,
    'feijão': 5, 'feijao': 5,
    'macarrão': 5, 'macarrao': 5, 'massa': 5, 'espaguete': 5, 'penne': 5,
    'óleo': 5, 'oleo': 5, 'azeite': 5,
    'molhos': 5, 'molho': 5, 'molho de tomate': 5, 'catchup': 4, 'ketchup': 5, 'mostarda': 5, 'maionese': 5,
    'temperos secos': 5, 'sal': 5, 'pimenta': 5, 'alho': 5, 'orégano': 5, 'oregano': 5, 'cominho': 5,
    'enlatados': 5, 'atum': 5, 'sardinha': 5, 'milho': 5, 'ervilha': 5, 'seleta': 5,
    'farinha': 5, 'farinha de trigo': 5, 'fubá': 5, 'fuba': 5,

    // Setor 6 - Mercearia Doce
    'açúcar': 6, 'açucar': 6, 'acucar': 6,
    'café': 6, 'cafe': 6,
    'achocolatado': 6, 'nescau': 6, 'toddy': 6,
    'biscoitos': 6, 'biscoito': 6, 'bolacha': 6, 'bolachas': 6, 'cream cracker': 6,
    'chocolates': 6, 'chocolate': 6, 'bombom': 6, 'barra de chocolate': 6,
    'doces': 6, 'doce': 6, 'sobremesas': 6, 'sobremesa': 6, 'gelatina': 6, 'pudim': 6,
    'cereais': 6, 'cereal': 6, 'sucrilhos': 6, 'granola': 6, 'aveia': 6,

    // Setor 7 - Bebidas
    'refrigerantes': 7, 'refrigerante': 7, 'coca': 7, 'coca-cola': 7, 'guaraná': 7, 'guarana': 7, 'fanta': 7, 'sprite': 7,
    'sucos': 7, 'suco': 7,
    'águas': 7, 'água': 7, 'agua': 7,
    'cervejas': 7, 'cerveja': 7,
    'vinhos': 7, 'vinho': 7,
    'destilados': 7, 'vodka': 7, 'whisky': 7, 'cachaça': 7, 'cachaca': 7, 'gin': 7,

    // Setor 8 - Congelados
    'sorvetes': 8, 'sorvete': 8, 'picolé': 8, 'picole': 8,
    'pizzas congeladas': 8, 'pizza': 8, 'pizza congelada': 8,
    'lasanhas': 8, 'lasanha': 8, 'pratos prontos': 8,
    'vegetais congelados': 8, 'legumes congelados': 8,
    'carnes congeladas': 8,

    // Setor 9 - Higiene Pessoal
    'sabonetes': 9, 'sabonete': 9, 'sabão': 9, 'sabao': 9,
    'shampoos': 9, 'shampoo': 9, 'xampu': 9, 'condicionador': 9, 'condicionadores': 9,
    'cremes dentais': 9, 'creme dental': 9, 'pasta de dente': 9, 'escova de dente': 9,
    'desodorantes': 9, 'desodorante': 9,
    'papel higiênico': 9, 'papel higienico': 9,
    'absorventes': 9, 'absorvente': 9,

    // Setor 10 - Limpeza
    'detergentes': 10, 'detergente': 10,
    'sabão em pó': 10, 'sabao em po': 10,
    'amaciantes': 10, 'amaciante': 10,
    'desinfetantes': 10, 'desinfetante': 10, 'água sanitária': 10, 'agua sanitaria': 10, 'alvejante': 10,
    'esponjas': 10, 'esponja': 10, 'panos': 10, 'pano': 10,
    'sacos de lixo': 10, 'saco de lixo': 10,

    // Setor 11 - Bebê
    'fraldas': 11, 'fralda': 11,
    'lenços umedecidos': 11, 'lenço': 11, 'lenco': 11,
    'papinhas': 11, 'papinha': 11,
    'leite em pó infantil': 11, 'nan': 11, 'aptamil': 11,

    // Setor 12 - Pet Shop
    'ração para cães': 12, 'ração': 12, 'racao': 12, 'ração cachorro': 12, 'ração cão': 12,
    'ração para gatos': 12, 'ração gato': 12,
    'petiscos': 12, 'petisco': 12,
    'areia higiênica': 12, 'areia': 12, 'areia gato': 12,

    // Setor 13 - Utilidades Domésticas
    'copos descartáveis': 13, 'copo descartavel': 13, 'copo descartável': 13, 'pratos descartáveis': 13, 'prato descartavel': 13,
    'papel alumínio': 13, 'papel aluminio': 13, 'alumínio': 13, 'aluminio': 13,
    'filme pvc': 13, 'papel filme': 13,
    'velas': 13, 'vela': 13,
    'pilhas': 13, 'pilha': 13, 'baterias': 13, 'bateria': 13,

    // Setor 14 - Eletrônicos
    'fones de ouvido': 14, 'fone': 14, 'fone de ouvido': 14,
    'carregadores': 14, 'carregador': 14,
    'cabos usb': 14, 'cabo': 14, 'cabo usb': 14,

    // Setor 15 - Bazar
    'panelas': 15, 'panela': 15,
    'talheres': 15, 'talher': 15, 'garfo': 15, 'faca': 15, 'colher': 15,
    'organizadores': 15, 'organizador': 15,
    'toalhas': 15, 'toalha': 15,
};

// Sector colors
const sectorColors = {
    1: '#FF6B6B', 2: '#4ECDC4', 3: '#45B7D1', 4: '#FFA07A', 5: '#98D8C8',
    6: '#F7DC6F', 7: '#BB8FCE', 8: '#85C1E2', 9: '#F8B739', 10: '#52BE80',
    11: '#EC7063', 12: '#AF7AC5', 13: '#5DADE2', 14: '#48C9B0', 15: '#F39C12'
};

// Analyze grocery list
function analyzeGroceryList() {
    const input = document.getElementById('groceryListInput').value.trim();

    if (!input) {
        alert('Por favor, digite sua lista de compras!');
        return;
    }

    const items = input.split('\n').map(item => item.trim().toLowerCase()).filter(item => item);
    const sectorsFound = {};
    const unmatchedItems = [];

    // Match each item to a sector
    items.forEach(item => {
        let matched = false;

        for (const [keyword, sectorId] of Object.entries(productMapping)) {
            if (item.includes(keyword) || keyword.includes(item)) {
                if (!sectorsFound[sectorId]) {
                    sectorsFound[sectorId] = {
                        name: supermarketData[sectorId].name,
                        items: []
                    };
                }
                sectorsFound[sectorId].items.push(item);
                matched = true;
                break;
            }
        }

        if (!matched) {
            unmatchedItems.push(item);
        }
    });

    displayResults(sectorsFound, unmatchedItems);
}

// Global state for checked items
let checkedItems = new Set();
let allItems = [];

// Display analysis results
function displayResults(sectorsFound, unmatchedItems) {
    const resultsSection = document.getElementById('resultsSection');
    const sectorsContainer = document.getElementById('sectorsToVisit');
    const unmatchedSection = document.getElementById('unmatchedItems');
    const unmatchedList = document.getElementById('unmatchedList');

    // Clear previous results
    sectorsContainer.innerHTML = '';
    unmatchedList.innerHTML = '';
    allItems = [];

    // Load saved checked items from localStorage
    loadCheckedItems();

    // Sort sectors by ID
    const sortedSectors = Object.keys(sectorsFound).sort((a, b) => a - b);

    if (sortedSectors.length === 0 && unmatchedItems.length === 0) {
        resultsSection.classList.add('hidden');
        alert('Nenhum item foi reconhecido. Tente adicionar mais detalhes!');
        return;
    }

    // Show results section
    resultsSection.classList.remove('hidden');

    // Display sectors
    sortedSectors.forEach(sectorId => {
        const sector = sectorsFound[sectorId];
        const card = document.createElement('div');
        card.className = 'result-sector-card';
        card.dataset.sectorId = sectorId;
        card.style.setProperty('--sector-color', sectorColors[sectorId]);
        card.style.setProperty('--sector-color-dark', adjustBrightness(sectorColors[sectorId], -20));

        const itemsListHtml = sector.items.map((item, index) => {
            const itemId = `sector-${sectorId}-item-${index}`;
            allItems.push(itemId);
            const isChecked = checkedItems.has(itemId);
            return `<li data-item-id="${itemId}" class="${isChecked ? 'checked' : ''}">${item}</li>`;
        }).join('');

        card.innerHTML = `
            <div class="result-sector-number">Setor ${sectorId}</div>
            <div class="result-sector-name">${sector.name}</div>
            <ul class="result-sector-items">${itemsListHtml}</ul>
        `;

        sectorsContainer.appendChild(card);

        // Add click listeners to items
        const itemElements = card.querySelectorAll('.result-sector-items li');
        itemElements.forEach(itemEl => {
            itemEl.addEventListener('click', () => toggleItem(itemEl, card));
        });

        // Check if sector is completed
        updateSectorCompletion(card);
    });

    // Display unmatched items
    if (unmatchedItems.length > 0) {
        unmatchedSection.classList.remove('hidden');
        unmatchedItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            unmatchedList.appendChild(li);
        });
    } else {
        unmatchedSection.classList.add('hidden');
    }

    // Update progress
    updateProgress();

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Helper function to adjust color brightness
function adjustBrightness(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}

// Toggle item checked state
function toggleItem(itemElement, sectorCard) {
    const itemId = itemElement.dataset.itemId;

    if (checkedItems.has(itemId)) {
        checkedItems.delete(itemId);
        itemElement.classList.remove('checked');
    } else {
        checkedItems.add(itemId);
        itemElement.classList.add('checked');
    }

    // Save to localStorage
    saveCheckedItems();

    // Update sector completion
    updateSectorCompletion(sectorCard);

    // Update progress
    updateProgress();
}

// Update sector completion status
function updateSectorCompletion(sectorCard) {
    const items = sectorCard.querySelectorAll('.result-sector-items li');
    const checkedCount = sectorCard.querySelectorAll('.result-sector-items li.checked').length;

    if (items.length > 0 && checkedCount === items.length) {
        sectorCard.classList.add('completed');
    } else {
        sectorCard.classList.remove('completed');
    }
}

// Update progress bar and text
function updateProgress() {
    const totalItems = allItems.length;
    const checkedCount = checkedItems.size;
    const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

    const progressText = document.getElementById('progressText');
    const progressPercentage = document.getElementById('progressPercentage');
    const progressFill = document.getElementById('progressFill');

    progressText.textContent = `${checkedCount} de ${totalItems} itens coletados`;
    progressPercentage.textContent = `${percentage}%`;
    progressFill.style.width = `${percentage}%`;

    if (percentage === 100 && totalItems > 0) {
        progressFill.classList.add('complete');
        // Show celebration message
        setTimeout(() => {
            if (checkedItems.size === totalItems) {
                alert('🎉 Parabéns! Você coletou todos os itens da sua lista!');
            }
        }, 500);
    } else {
        progressFill.classList.remove('complete');
    }
}

// Reset all checked items
function resetAllItems() {
    if (checkedItems.size === 0) {
        return;
    }

    if (!confirm('Tem certeza que deseja desmarcar todos os itens?')) {
        return;
    }

    checkedItems.clear();
    saveCheckedItems();

    // Update UI
    document.querySelectorAll('.result-sector-items li').forEach(item => {
        item.classList.remove('checked');
    });

    document.querySelectorAll('.result-sector-card').forEach(card => {
        card.classList.remove('completed');
    });

    updateProgress();
}

// Save checked items to localStorage
function saveCheckedItems() {
    localStorage.setItem('groceryCheckedItems', JSON.stringify([...checkedItems]));
}

// Load checked items from localStorage
function loadCheckedItems() {
    const saved = localStorage.getItem('groceryCheckedItems');
    if (saved) {
        try {
            checkedItems = new Set(JSON.parse(saved));
        } catch (e) {
            checkedItems = new Set();
        }
    }
}

// Event listener for analyze button
document.getElementById('analyzeButton').addEventListener('click', analyzeGroceryList);

// Event listener for reset button
document.getElementById('resetButton').addEventListener('click', resetAllItems);

// Allow Enter key to trigger analysis (Ctrl+Enter in textarea)
document.getElementById('groceryListInput').addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        analyzeGroceryList();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initSupermarket);
