// --- DATOS DE LOS DESTINOS ---
const destinationsData = [
    // América
    { id: 1, name: "México", continent: "América", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/mexico.jpeg", description: "Explora las ruinas mayas y aztecas, disfruta de la vibrante gastronomía y relájate en sus playas paradisíacas." },
    { id: 2, name: "Argentina", continent: "América", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/argentina.webp", description: "Descubre la pasión del tango en Buenos Aires, los glaciares de la Patagonia y la majestuosidad de los Andes." },
    { id: 3, name: "Canadá", continent: "América", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/canada.jpeg", description: "Un país de inmensas bellezas naturales, desde las Montañas Rocosas hasta las ciudades cosmopolitas como Toronto y Vancouver." },
    { id: 4, name: "Perú", continent: "América", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/peru.jpeg", description: "Viaja en el tiempo en la antigua ciudad inca de Machu Picchu y maravíllate con la rica historia y paisajes andinos." },
    { id: 5, name: "Costa Rica", continent: "América", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/costa rica.jpeg", description: "Un paraíso de ecoturismo con selvas tropicales, volcanes y playas con una biodiversidad asombrosa." },
    
    // Europa
    { id: 6, name: "Francia", continent: "Europa", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/francia.jpeg", description: "Sumérgete en el arte y la cultura de París, explora los viñedos de Borgoña y disfruta de la Costa Azul." },
    { id: 7, name: "Italia", continent: "Europa", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/italia.jpeg", description: "Visita la Roma histórica, navega por los canales de Venecia y degusta la auténtica pizza en Nápoles." },
    { id: 8, name: "España", continent: "Europa", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/españa.jpeg", description: "Descubre la arquitectura de Gaudí en Barcelona, la pasión del flamenco en Sevilla y las playas soleadas de la costa española." },
    { id: 9, name: "Grecia", continent: "Europa", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/grecia.jpeg", description: "Maravíllate con las antiguas ruinas de Atenas y las icónicas casas blancas y azules de las islas Cícladas." },
    { id: 10, name: "Suiza", continent: "Europa", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/suiza.jpeg", description: "Ideal para amantes de la naturaleza con sus Alpes impresionantes, lagos cristalinos y pintorescos pueblos de montaña." },
    
    // Asia
    { id: 11, name: "Japón", continent: "Asia", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/japon.jpeg", description: "Experimenta la fusión entre la tradición milenaria y la modernidad de Tokio, visita templos ancestrales y admira los cerezos en flor." },
    { id: 12, name: "Tailandia", continent: "Asia", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/tailandia.jpeg", description: "Conocida como la 'Tierra de las Sonrisas', ofrece templos dorados, playas idílicas y una exquisita gastronomía." },
    { id: 13, name: "India", continent: "Asia", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/india.jpeg", description: "Un país de contrastes, desde el icónico Taj Mahal hasta las bulliciosas calles de Delhi y los retiros de yoga." },
    { id: 14, name: "Vietnam", continent: "Asia", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/vietnam.jpeg", description: "Explora la mágica Bahía de Ha Long, las bulliciosas ciudades como Hanói y la historia de la guerra de Vietnam." },
    { id: 15, name: "Nepal", continent: "Asia", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/nepal.jpeg", description: "Hogar de la cordillera del Himalaya, es un destino de ensueño para los amantes del senderismo y el montañismo." },

    // África
    { id: 16, name: "Egipto", continent: "África", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/egipto.jpeg", description: "Descubre las pirámides de Giza, los templos milenarios de Luxor y navega por el legendario río Nilo." },
    { id: 17, name: "Marruecos", continent: "África", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/marruecos.jpeg", description: "Piérdete en los zocos de Marrakech, explora las ciudades imperiales y pasa una noche en el desierto del Sahara." },
    { id: 18, name: "Kenia", continent: "África", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/kenia.jpeg", description: "Ideal para safaris de vida salvaje, donde podrás ver a los 'Cinco Grandes' en su hábitat natural." },
    { id: 19, name: "Sudáfrica", continent: "África", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/sudafrica.jpeg", description: "Visita la vibrante Ciudad del Cabo, explora el Parque Nacional Kruger y descubre la historia de Nelson Mandela." },
    { id: 20, name: "Tanzania", continent: "África", image: "https://tiendacloud01paolareyes.blob.core.windows.net/imagenespaola/tanzania.jpeg", description: "Hogar del famoso cráter del Ngorongoro y del Monte Kilimanjaro, ofrece safaris y playas de ensueño en Zanzíbar." },

    // Oceanía
    { id: 21, name: "Australia", continent: "Oceanía", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Un continente de contrastes, con la icónica Ópera de Sídney, la Gran Barrera de Coral y el misterioso interior." },
    { id: 22, name: "Nueva Zelanda", continent: "Oceanía", image: "https://www.hola.com/horizon/landscape/0ec5f5a0e7bc-nueva-zelanda.jpg", description: "Conocida por sus paisajes cinematográficos, ofrece montañas, fiordos, géiseres y una cultura maorí única." },
    { id: 23, name: "Fiyi", continent: "Oceanía", image: "https://images.unsplash.com/photo-1579264670959-286d7b06f1ae?q=80&w=914&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Un archipiélago de más de 300 islas con playas de arena blanca, aguas turquesas y arrecifes de coral perfectos para bucear." },
    { id: 24, name: "Polinesia Francesa", continent: "Oceanía", image: "https://images.unsplash.com/photo-1618272180148-f004c3dc857d?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Hogar de la icónica isla de Bora Bora con sus bungalows sobre el agua, montañas volcánicas y lagunas cristalinas." },
    { id: 25, name: "Papúa Nueva Guinea", continent: "Oceanía", image: "https://globalfishingwatch.org/wp-content/uploads/Papua_New_Guinea.jpg", description: "Un destino para los aventureros con selvas vírgenes, una rica diversidad cultural y el impresionante Sendero de Kokoda." }
];

// --- DATOS DE LOS PAQUETES DE VIAJE ---
const packagesData = [
    { id: 1, name: "Aventura Extrema en los Andes", image: "https://images.unsplash.com/photo-1504198188-02d216d26732?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "7 días", price: "Desde $1,500 USD" },
    { id: 2, name: "Relajación Total en las Islas Griegas", image: "https://images.unsplash.com/photo-1601633513364-7541b6c00d46?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "4 días", price: "Desde $1,200 USD" },
    { id: 3, name: "Explorador Urbano en Tokio", image: "https://images.unsplash.com/photo-1540959733332-eab4decd6469?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "5 días", price: "Desde $1,800 USD" },
];

// Obtener los contenedores del DOM
const destinationsContainer = document.getElementById('destinations-items');
const packagesContainer = document.querySelector('.paquetes-container');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderDestinations(category) {
    let destinationsToRender = [];
    if (category === "all") {
        destinationsToRender = destinationsData;
    } else {
        destinationsToRender = destinationsData.filter(destination => destination.continent === category);
    }

    // Limpia el contenedor antes de renderizar
    destinationsContainer.innerHTML = '';

    if (!destinationsToRender || destinationsToRender.length === 0) {
        destinationsContainer.innerHTML = '<p class="text-center w-100">No hay datos disponibles para este continente.</p>';
        return;
    }

    // Crea y agrega las tarjetas de destino
    destinationsToRender.forEach(destination => {
        const cardHtml = `
            <div class="card destination-card">
                <img src="${destination.image}" class="card-img-top" alt="${destination.name}">
                <div class="card-body">
                    <h5 class="card-title">${destination.name}</h5>
                    <p class="card-text">${destination.description}</p>
                </div>
            </div>
        `;
        destinationsContainer.innerHTML += cardHtml;
    });
}

function renderPackages() {
    // Limpia el contenedor antes de renderizar
    packagesContainer.innerHTML = '';
    
    if (!packagesData || packagesData.length === 0) {
         packagesContainer.innerHTML = '<p class="text-center w-100">No hay paquetes disponibles.</p>';
        return;
    }

    // Crea y agrega las tarjetas de paquetes
    packagesData.forEach(pkg => {
        const cardHtml = `
            <div class="card package-card">
                <img src="${pkg.image}" class="card-img-top" alt="${pkg.name}">
                <div class="card-body">
                    <h5 class="card-title">${pkg.name}</h5>
                    <p class="card-text">
                        Duración: ${pkg.duration}<br>
                        Costo: ${pkg.price}
                    </p>
                </div>
            </div>
        `;
        packagesContainer.innerHTML += cardHtml;
    });
}

// Event listeners para los botones de filtrado
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.category || button.dataset.continent;
        renderDestinations(category);
    });
});

// Renderizar todos los destinos y los paquetes al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations('all');
    renderPackages();
});
