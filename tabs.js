   
   
//    primeiro tabs trabalhos 

function openModal(element) {
    const imgSrc = element.querySelector('img').src;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imgSrc;
    document.getElementById('imageModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

function selectTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-pane').forEach(tab => {
        tab.classList.add('hidden');
        tab.classList.remove('show', 'active');
    });

    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.remove('hidden');
    selectedTab.classList.add('show', 'active');

    // Update active tab button
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-[#F20530]', 'bg-red-100', 'border-b-2', 'border-[#F20530]');
        link.classList.add('text-gray-600', 'hover:bg-blue-50');
    });

    const activeLink = document.getElementById(tabId + '-tab');
    activeLink.classList.add('text-[#F20530]', 'bg-red-100', 'border-b-2', 'border-[#F20530]');
    activeLink.classList.remove('hover:bg-blue-50');
}

// Initialize default tab
selectTab('nav-home');

   
   
   
   
//    segundo  tabs planos 
const nav1Btn = document.getElementById('nav1Btn');
const nav2Btn = document.getElementById('nav2Btn');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');

// Inicializa a visibilidade das seções
nav1.classList.remove('hidden'); // Mostra nav1
nav2.classList.add('hidden'); // Esconde nav2
nav1Btn.classList.add('active', 'text-[#F20530]', 'bg-red-100', 'border-b-2', 'border-[#F20530]'); // Adiciona classes ativas ao nav1Btn
nav2Btn.classList.remove('active', 'text-[#F20530]', 'bg-red-100', 'border-b-2', 'border-[#F20530]'); // Remove classes ativas do nav2Btn

nav1Btn.addEventListener('click', () => {
    nav1.classList.remove('hidden');
    nav2.classList.add('hidden');
    nav1Btn.classList.add('active', 'text-[#F20530]', 'bg-red-100', 'border-b-2', 'border-[#F20530]');
    nav2Btn.classList.remove('active', 'text-[#F20530]', 'bg-red-100', 'border-b-2', 'border-[#F20530]');
});

nav2Btn.addEventListener('click', () => {
    nav1.classList.add('hidden');
    nav2.classList.remove('hidden');
    nav2Btn.classList.add('active', 'text-[#F20530]', 'bg-red-100', 'border-b-2', 'border-[#F20530]');
    nav1Btn.classList.remove('active', 'text-[#F20530]', 'bg-red-100', 'border-b-2', 'border-[#F20530]');
});


