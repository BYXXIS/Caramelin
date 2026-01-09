const productos = [
    {
        nombre: "Espejo LED Profesional",
        precio: "S/ 89.90",
        precioAnterior: "S/ 109.90",
        categoria: "Belleza & Maquillaje",
        descripcion: "Espejo de aumento con iluminación LED ajustable de 360°, ideal para un maquillaje perfecto en cualquier condición de luz. Incluye 3 modos de luz (día, oficina, noche) y espejo con aumento 10X para detalles precisos. Perfecto para profesionales y amantes del maquillaje.",
        imagenes: [
           "1.jpg",
            "img/espejo2.jpg",
            "img/espejo3.jpg",
            "img/espejo4.jpg"
        ],
        caracteristicas: [
            "✨ 3 modos de iluminación LED (blanco, cálido, natural)",
            "📏 Espejo con aumento 10X para precisión",
            "⚡ Carga USB tipo C - dura hasta 8 horas",
            "💎 Base antideslizante de silicona",
            "📦 Incluye estuche protector premium",
            "🎛️ Botón táctil con memoria de preferencias",
            "🔋 Batería de litio recargable"
        ]
    },
    {
        nombre: "Organizador Multiusos Premium",
        precio: "S/ 45.00",
        precioAnterior: "S/ 59.90",
        categoria: "Hogar & Organización",
        descripcion: "Organizador modular con múltiples compartimentos diseñado para almacenar cosméticos, accesorios o artículos de oficina. Fabricado en plástico ABS de alta calidad, resistente al agua y fácil de limpiar. Sistema apilable para maximizar espacio.",
        imagenes: [
            "1.jpg",
            "img/organizador2.jpg",
            "img/organizador3.jpg",
            "img/organizador4.jpg"
        ],
        caracteristicas: [
            "🗃️ 6 compartimentos diferentes (grandes, medianos, pequeños)",
            "🎨 Material plástico ABS premium - libre de BPA",
            "🧼 Fácil de limpiar - resistente al agua",
            "🔗 Sistema modular apilable",
            "🌈 4 colores disponibles (blanco, negro, rosa, azul)",
            "📏 Medidas: 30x20x15 cm",
            "🏷️ Etiquetas removibles para organización"
        ]
    },
    {
        nombre: "Cepillo Facial Eléctrico Sonic",
        precio: "S/ 25.00",
        precioAnterior: "S/ 34.90",
        categoria: "Cuidado Personal",
        descripcion: "Cepillo facial eléctrico con tecnología sónica y cerdas suaves de silicona médica para una limpieza profunda sin irritar la piel. Ideal para remover impurezas, maquillaje y mejorar la textura de la piel. Incluye 2 cabezales intercambiables.",
        imagenes: [
            "1.jpg",
            "img/cepillo2.jpg",
            "img/cepillo3.jpg",
            "img/cepillo4.jpg"
        ],
        caracteristicas: [
            "🌀 2 velocidades ajustables (suave, intensivo)",
            "💧 Resistente al agua IPX7 - uso en ducha",
            "🔋 Batería recargable - 30 días de autonomía",
            "🔄 4 cabezales incluidos (limpieza, masaje, exfoliación)",
            "⏰ Timer inteligente de 2 minutos (30 segundos por zona)",
            "📱 App compatible para seguimiento de rutina",
            "🧳 Estuche de viaje incluido"
        ]
    },
    {
        nombre: "Set de Brochas Profesional",
        precio: "S/ 65.00",
        precioAnterior: "S/ 79.90",
        categoria: "Maquillaje",
        descripcion: "Set completo de 12 brochas profesionales para maquillaje. Cerdas sintéticas suaves y densas, ideales para productos líquidos y en polvo. Incluye estuche organizador y guía de uso.",
        imagenes: [
            "img/brochas1.jpg",
            "img/brochas2.jpg",
            "img/brochas3.jpg"
        ],
        caracteristicas: [
            "🎨 12 brochas diferentes para todas las técnicas",
            "✨ Cerdas sintéticas hipoalergénicas",
            "💼 Estuche organizador con cierre",
            "📖 Guía de uso ilustrada",
            "🧼 Fáciles de limpiar y mantener",
            "🎁 Presentación ideal para regalo"
        ]
    },
    {
        nombre: "Lámpara de Noche LED",
        precio: "S/ 35.00",
        categoria: "Hogar & Decoración",
        descripcion: "Lámpara de noche con sensor de movimiento y 16 colores LED. Control remoto incluido. Perfecta para habitación, pasillo o como luz ambiental.",
        imagenes: [
            "img/lampara1.jpg",
            "img/lampara2.jpg"
        ],
        caracteristicas: [
            "🌈 16 colores LED intercambiables",
            "📱 Control remoto incluido",
            "👣 Sensor de movimiento automático",
            "🔋 Opción con batería o enchufe",
            "⏰ Timer programable de 1-6 horas",
            "✨ Brillo regulable"
        ]
    }
];

const contenedor = document.getElementById("productos-lista");

// Mostrar productos en la página
function mostrarProductos() {
    contenedor.innerHTML = "";
    productos.forEach(p => {
        const productoHTML = `
            <div class="producto" onclick="abrirModal('${p.nombre}')">
                <img src="${p.imagenes[0]}" alt="${p.nombre}" loading="lazy">
                <div class="producto-info">
                    <span class="producto-categoria">${p.categoria}</span>
                    <h3>${p.nombre}</h3>
                    <div class="precio-container">
                        <span class="precio">${p.precio}</span>
                        ${p.precioAnterior ? `<span class="precio-anterior">${p.precioAnterior}</span>` : ''}
                    </div>
                    <span class="ver-detalles">Ver detalles →</span>
                </div>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
}

// Abrir modal con información del producto
function abrirModal(nombre) {
    const producto = productos.find(p => p.nombre === nombre);
    
    if (!producto) {
        console.error('Producto no encontrado:', nombre);
        return;
    }
    
    // Imagen principal
    const imgPrincipal = document.getElementById("modal-img-principal");
    imgPrincipal.src = producto.imagenes[0];
    imgPrincipal.alt = producto.nombre;
    
    // Miniaturas
    const miniaturasContainer = document.getElementById("miniaturas");
    miniaturasContainer.innerHTML = "";
    
    producto.imagenes.forEach((img, index) => {
        const miniatura = document.createElement("img");
        miniatura.src = img;
        miniatura.alt = `${producto.nombre} - Vista ${index + 1}`;
        miniatura.className = "miniatura";
        if (index === 0) miniatura.classList.add("activa");
        
        miniatura.onclick = () => {
            // Cambiar imagen principal
            imgPrincipal.src = img;
            
            // Quitar clase activa de todas las miniaturas
            document.querySelectorAll(".miniatura").forEach(m => {
                m.classList.remove("activa");
            });
            
            // Agregar clase activa a la miniatura clickeada
            miniatura.classList.add("activa");
        };
        
        miniaturasContainer.appendChild(miniatura);
    });
    
    // Información del producto
    document.getElementById("modal-nombre").textContent = producto.nombre;
    document.getElementById("modal-categoria").textContent = producto.categoria;
    document.getElementById("modal-precio").textContent = producto.precio;
    
    // Precio anterior
    const precioAnterior = document.getElementById("modal-precio-anterior");
    if (producto.precioAnterior) {
        precioAnterior.textContent = producto.precioAnterior;
        precioAnterior.style.display = "inline";
    } else {
        precioAnterior.style.display = "none";
    }
    
    // Descripción
    document.getElementById("modal-descripcion").textContent = producto.descripcion;
    
    // Características
    const caracteristicasContainer = document.getElementById("modal-caracteristicas");
    caracteristicasContainer.innerHTML = "";
    
    producto.caracteristicas.forEach(caracteristica => {
        const div = document.createElement("div");
        div.className = "caracteristica";
        div.innerHTML = `
            <span class="caracteristica-icon">✓</span>
            <span>${caracteristica}</span>
        `;
        caracteristicasContainer.appendChild(div);
    });
    
    // Botón de WhatsApp
    const mensaje = `Hola, quiero más información sobre: ${producto.nombre} (${producto.precio})`;
    const whatsappBtn = document.getElementById("modal-whatsapp");
    whatsappBtn.href = "https://wa.me/51958991667?text=" + encodeURIComponent(mensaje);
    
    // Mostrar modal
    document.getElementById("modal-producto").style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevenir scroll en fondo
}

// Cerrar modal
function cerrarModal() {
    document.getElementById("modal-producto").style.display = "none";
    document.body.style.overflow = "auto"; // Restaurar scroll
}

// Cerrar modal al hacer clic fuera del contenido
document.getElementById("modal-producto").addEventListener("click", function(e) {
    if (e.target === this) {
        cerrarModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && document.getElementById("modal-producto").style.display === "flex") {
        cerrarModal();
    }
});

// Inicializar
document.addEventListener("DOMContentLoaded", function() {
    mostrarProductos();
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});