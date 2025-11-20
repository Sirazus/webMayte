/**
 * Base de datos de artículos del blog
 * Soporte para multilenguaje (ES/EN)
 */
const articlesData = [
    {
        id: 1,
        date: "18 NOV 2024",
        image: "https://images.unsplash.com/photo-1579684453423-f84321ef6b7d?w=800",
        category: "aesthetic",
        es: {
            title: "Odontología Digital: Del diseño al resultado",
            excerpt: "Descubre cómo herramientas como el escáner intraoral y el DSD mejoran la previsibilidad.",
            categoryLabel: "Estética Avanzada",
            readMore: "Leer Artículo",
            content: `<h2 class="text-3xl display-font font-bold mb-6">El futuro es hoy</h2><p class="text-gray-600 leading-relaxed mb-4">La odontología digital ha abierto una nueva era. Herramientas como el escáner intraoral permiten visualizar el resultado antes de empezar.</p>`
        },
        en: {
            title: "Digital Dentistry: From Design to Result",
            excerpt: "Discover how tools like intraoral scanners and DSD improve predictability.",
            categoryLabel: "Advanced Aesthetics",
            readMore: "Read Article",
            content: `<h2 class="text-3xl display-font font-bold mb-6">The Future is Now</h2><p class="text-gray-600 leading-relaxed mb-4">Digital dentistry has opened a new era. Tools like intraoral scanners allow us to visualize the result before starting.</p>`
        }
    },
    {
        id: 2,
        date: "10 NOV 2024",
        image: "https://images.unsplash.com/photo-1598256989800-b308130ec089?w=800",
        category: "health",
        es: {
            title: "Sedación consciente y pacientes ansiosos",
            excerpt: "El miedo al dentista afecta a millones. Exploramos técnicas seguras para controlar la ansiedad.",
            categoryLabel: "Salud Preventiva",
            readMore: "Leer Artículo",
            content: `<h2 class="text-3xl display-font font-bold mb-6">Sin miedo</h2><p class="text-gray-600 leading-relaxed">Existen técnicas seguras como la sedación consciente inhalatoria para que tu visita sea placentera.</p>`
        },
        en: {
            title: "Conscious Sedation and Anxious Patients",
            excerpt: "Fear of the dentist affects millions. We explore safe techniques to control anxiety.",
            categoryLabel: "Preventive Health",
            readMore: "Read Article",
            content: `<h2 class="text-3xl display-font font-bold mb-6">No Fear</h2><p class="text-gray-600 leading-relaxed">There are safe techniques such as inhalational conscious sedation to make your visit pleasant.</p>`
        }
    },
    {
        id: 3,
        date: "05 NOV 2024",
        image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800",
        category: "health",
        es: {
            title: "Primeros dientes, grandes cuidados",
            excerpt: "La salud bucal infantil es clave para el desarrollo. Prevención desde la primera infancia.",
            categoryLabel: "Salud Preventiva",
            readMore: "Leer Artículo",
            content: `<h2 class="text-3xl display-font font-bold mb-6">Prevención temprana</h2><p class="text-gray-600 leading-relaxed">La limpieza debe comenzar con la erupción del primer diente. El uso de flúor es fundamental.</p>`
        },
        en: {
            title: "First Teeth, Great Care",
            excerpt: "Children's oral health is key to development. Prevention from early childhood.",
            categoryLabel: "Preventive Health",
            readMore: "Read Article",
            content: `<h2 class="text-3xl display-font font-bold mb-6">Early Prevention</h2><p class="text-gray-600 leading-relaxed">Cleaning should begin with the eruption of the first tooth. The use of fluoride is fundamental.</p>`
        }
    },
    {
        id: 4,
        date: "28 OCT 2024",
        image: "https://images.unsplash.com/photo-1601581874834-3b6065645e45?w=800",
        category: "aesthetic",
        es: {
            title: "Blanqueamiento dental seguro: Mitos y Realidades",
            excerpt: "Abordamos las claves para realizarlo de forma segura y la evidencia científica reciente.",
            categoryLabel: "Estética Avanzada",
            readMore: "Leer Artículo",
            content: `<h2 class="text-3xl display-font font-bold mb-6">La verdad sobre el color</h2><p class="text-gray-600 leading-relaxed">No todos los blanqueamientos son iguales. El control profesional es la única garantía.</p>`
        },
        en: {
            title: "Safe Dental Whitening: Myths and Facts",
            excerpt: "We address the keys to doing it safely and recent scientific evidence.",
            categoryLabel: "Advanced Aesthetics",
            readMore: "Read Article",
            content: `<h2 class="text-3xl display-font font-bold mb-6">The Truth About Color</h2><p class="text-gray-600 leading-relaxed">Not all whitenings are equal. Professional control is the only guarantee.</p>`
        }
    },
    {
        id: 5,
        date: "15 OCT 2024",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
        category: "rehab",
        es: {
            title: "Odontología mínimamente invasiva",
            excerpt: "Tratar lo necesario, conservar lo sano. Menor pérdida de estructura dental.",
            categoryLabel: "Rehabilitación Funcional",
            readMore: "Leer Artículo",
            content: `<h2 class="text-3xl display-font font-bold mb-6">Menos es más</h2><p class="text-gray-600 leading-relaxed">Gracias a la adhesión, hoy podemos restaurar dientes sin necesidad de tallados agresivos.</p>`
        },
        en: {
            title: "Minimally Invasive Dentistry",
            excerpt: "Treat what is necessary, preserve what is healthy. Less loss of tooth structure.",
            categoryLabel: "Functional Rehab",
            readMore: "Read Article",
            content: `<h2 class="text-3xl display-font font-bold mb-6">Less is More</h2><p class="text-gray-600 leading-relaxed">Thanks to adhesion, today we can restore teeth without the need for aggressive grinding.</p>`
        }
    },
    {
        id: 6,
        date: "02 OCT 2024",
        image: "https://images.unsplash.com/photo-1522336572468-97a06e8ef876?w=800",
        category: "aesthetic",
        es: {
            title: "Armonización orofacial integral",
            excerpt: "Equilibrio entre dientes, encías y rasgos. Toxina botulínica y ácido hialurónico.",
            categoryLabel: "Estética Avanzada",
            readMore: "Leer Artículo",
            content: `<h2 class="text-3xl display-font font-bold mb-6">Más allá de los dientes</h2><p class="text-gray-600 leading-relaxed">La sonrisa no termina en los dientes. Los labios y el marco facial son esenciales.</p>`
        },
        en: {
            title: "Integral Orofacial Harmonization",
            excerpt: "Balance between teeth, gums, and features. Botulinum toxin and hyaluronic acid.",
            categoryLabel: "Advanced Aesthetics",
            readMore: "Read Article",
            content: `<h2 class="text-3xl display-font font-bold mb-6">Beyond Teeth</h2><p class="text-gray-600 leading-relaxed">The smile does not end at the teeth. Lips and the facial frame are essential.</p>`
        }
    }
];

/**
 * Textos estáticos de la interfaz (UI)
 */
const uiTranslations = {
    es: {
        back: "Volver a Inicio",
        "hero-subtitle": "Evidencia Científica & Actualidad",
        "hero-title-1": "Diario",
        "hero-title-2": "Clínico",
        "filter-all": "Todos",
        "filter-aesthetic": "Estética",
        "filter-health": "Salud",
        "filter-rehab": "Rehabilitación"
    },
    en: {
        back: "Back to Home",
        "hero-subtitle": "Scientific Evidence & News",
        "hero-title-1": "Clinical",
        "hero-title-2": "Journal",
        "filter-all": "All",
        "filter-aesthetic": "Aesthetics",
        "filter-health": "Health",
        "filter-rehab": "Rehabilitation"
    }
};