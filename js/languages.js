// =================================
// SISTEMA BILINGÜE - HABLANDIS TEST DE ESPAÑOL
// =================================

/**
 * Traducciones para la interfaz del test
 * Las preguntas del test permanecen en español
 */

const TRANSLATIONS = {
    ESP: {
        // Selector de idioma
        languageSelector: {
            spanish: "ESP",
            english: "ENG"
        },
        
        // Página de inicio
        startPage: {
            title: "Test de Nivel de Español",
            subtitle: "Evalúa tu nivel de español con nuestro test completo de gramática y vocabulario",
            info: "40 preguntas • 15 minutos • Resultados inmediatos",
            startButton: "Iniciar Test"
        },
        
        // Barra de progreso
        progress: {
            question: "Pregunta",
            of: "de",
            completed: "completado"
        },
        
        // Navegación de preguntas
        navigation: {
            previous: "Anterior",
            next: "Siguiente",
            finish: "Finalizar"
        },
        
        // Formulario de datos
        studentForm: {
            title: "¡Casi terminamos!",
            subtitle: "Completa tus datos para recibir los resultados",
            fields: {
                firstName: {
                    label: "Nombre *",
                    placeholder: "Tu nombre"
                },
                lastName: {
                    label: "Apellidos *",
                    placeholder: "Tus apellidos"
                },
                email: {
                    label: "Email *",
                    placeholder: "tu@email.com"
                },
                city: {
                    label: "Ciudad",
                    placeholder: "Tu ciudad"
                },
                howFoundUs: {
                    label: "¿Cómo nos has conocido?",
                    options: {
                        placeholder: "Selecciona una opción",
                        browser: "Búsqueda en navegador",
                        social: "Redes sociales", 
                        friends: "Por amigos",
                        ads: "Por anuncios",
                        walking: "Paseando",
                        other: "De otra forma"
                    }
                },
                purpose: {
                    label: "¿Para qué necesitas aprender español?",
                    options: {
                        placeholder: "Selecciona una opción",
                        work: "Trabajo",
                        studies: "Estudios",
                        business: "Negocios",
                        culture: "Cultura"
                    }
                },
                frequency: {
                    label: "¿Qué frecuencia de curso piensas que necesitas?",
                    options: {
                        placeholder: "Selecciona una opción",
                        daily: "Clase diaria",
                        weekly: "Una por semana",
                        biweekly: "Dos por semana"
                    }
                }
            },
            dataProtection: {
                title: "Protección de Datos:",
                text: "En cumplimiento de lo establecido en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal y sus reglamentos de desarrollo, Hablandis - Centro Internacional de idiomas, marca registrada de LA PLAYA ESCUELA DE ESPAÑOL S.L. informa al firmante del presente test de nivel que los datos de carácter personal proporcionados a través del mismo quedarán incorporados a un fichero para su tratamiento automatizado con la finalidad de prestar y ofrecer nuestros servicios. El titular y responsable de dicho fichero es LA PLAYA ESCUELA DE ESPAÑOL S.L. El titular de los datos podrá ejercer los derechos de acceso, cancelación o rectificación mediante comunicación escrita dirigida al responsable y titular del fichero, remitida a info@hablandis.com"
            },
            recaptcha: {
                text: "Este formulario está protegido por reCAPTCHA de Google",
                privacy: "Política de Privacidad",
                terms: "Términos de Servicio"
            },
            buttons: {
                back: "Volver",
                submit: "Enviar Resultados",
                sending: "Guardando..."
            }
        },
        
        // Página de resultados
        results: {
            title: "¡Test Completado!",
            yourLevel: "Tu Nivel:",
            levels: {
                A1: "A1 - Principiante",
                A2: "A2 - Elemental", 
                B1: "B1 - Intermedio",
                B2: "B2 - Intermedio Alto"
            },
            score: "respuestas correctas",
            percentage: "de aciertos",
            savedData: "Datos Guardados:",
            fields: {
                name: "Nombre:",
                email: "Email:",
                city: "Ciudad:",
                howFoundUs: "Cómo nos conoció:",
                purpose: "Propósito:",
                frequency: "Frecuencia:"
            },
            successMessage: "Tus resultados han sido guardados exitosamente. Pronto recibirás más información en tu email.",
            newTestButton: "Realizar Nuevo Test"
        }
    },
    
    ENG: {
        // Language selector
        languageSelector: {
            spanish: "ESP",
            english: "ENG"
        },
        
        // Start page
        startPage: {
            title: "Spanish Level Test",
            subtitle: "Evaluate your Spanish level with our complete grammar and vocabulary test",
            info: "40 questions • 15 minutes • Instant results",
            startButton: "Start Test"
        },
        
        // Progress bar
        progress: {
            question: "Question",
            of: "of",
            completed: "completed"
        },
        
        // Question navigation
        navigation: {
            previous: "Previous",
            next: "Next", 
            finish: "Finish"
        },
        
        // Student form
        studentForm: {
            title: "Almost done!",
            subtitle: "Complete your details to receive the results",
            fields: {
                firstName: {
                    label: "Name *",
                    placeholder: "Your name"
                },
                lastName: {
                    label: "Last Name *", 
                    placeholder: "Your last name"
                },
                email: {
                    label: "Email *",
                    placeholder: "your@email.com"
                },
                city: {
                    label: "City",
                    placeholder: "Your city"
                },
                howFoundUs: {
                    label: "How did you find us?",
                    options: {
                        placeholder: "Select an option",
                        browser: "Browser search",
                        social: "Social media",
                        friends: "Through friends", 
                        ads: "Through ads",
                        walking: "Walking around",
                        other: "Other way"
                    }
                },
                purpose: {
                    label: "Why do you need to learn Spanish?", 
                    options: {
                        placeholder: "Select an option",
                        work: "Work",
                        studies: "Studies",
                        business: "Business",
                        culture: "Culture"
                    }
                },
                frequency: {
                    label: "What course frequency do you think you need?",
                    options: {
                        placeholder: "Select an option",
                        daily: "Daily class",
                        weekly: "Once a week", 
                        biweekly: "Twice a week"
                    }
                }
            },
            dataProtection: {
                title: "Data Protection:",
                text: "In compliance with Organic Law 15/1999, of December 13, on the Protection of Personal Data and its development regulations, Hablandis - International Language Center, registered trademark of LA PLAYA ESCUELA DE ESPAÑOL S.L. informs the signatory of this level test that the personal data provided through it will be incorporated into a file for automated processing for the purpose of providing and offering our services. The owner and responsible for said file is LA PLAYA ESCUELA DE ESPAÑOL S.L. The data owner may exercise the rights of access, cancellation or rectification through written communication addressed to the responsible and owner of the file, sent to info@hablandis.com"
            },
            recaptcha: {
                text: "This form is protected by Google reCAPTCHA",
                privacy: "Privacy Policy",
                terms: "Terms of Service"
            },
            buttons: {
                back: "Back",
                submit: "Submit Results",
                sending: "Saving..."
            }
        },
        
        // Results page
        results: {
            title: "Test Completed!",
            yourLevel: "Your Level:",
            levels: {
                A1: "A1 - Beginner",
                A2: "A2 - Elementary",
                B1: "B1 - Intermediate", 
                B2: "B2 - Upper Intermediate"
            },
            score: "correct answers",
            percentage: "accuracy",
            savedData: "Saved Data:",
            fields: {
                name: "Name:",
                email: "Email:",
                city: "City:",
                howFoundUs: "How found us:",
                purpose: "Purpose:",
                frequency: "Frequency:"
            },
            successMessage: "Your results have been saved successfully. You will receive more information in your email soon.",
            newTestButton: "Take New Test"
        }
    }
};

// =================================
// FUNCIONES DEL SISTEMA BILINGÜE
// =================================

// Variable global para el idioma actual
let currentLanguage = 'ESP';

/**
 * Cambiar el idioma actual
 * @param {string} lang - 'ESP' o 'ENG'
 */
function setLanguage(lang) {
    if (lang === 'ESP' || lang === 'ENG') {
        currentLanguage = lang;
        localStorage.setItem('hablandis_language', lang);
        updateLanguageUI();
    }
}

/**
 * Obtener el idioma actual
 * @returns {string} 'ESP' o 'ENG'
 */
function getCurrentLanguage() {
    return currentLanguage;
}

/**
 * Obtener texto traducido
 * @param {string} path - Ruta del texto (ej: 'startPage.title')
 * @returns {string} Texto traducido
 */
function t(path) {
    const keys = path.split('.');
    let result = TRANSLATIONS[currentLanguage];
    
    for (const key of keys) {
        if (result && result[key]) {
            result = result[key];
        } else {
            console.warn(`Traducción no encontrada: ${path} para idioma ${currentLanguage}`);
            return path; // Devolver la clave si no se encuentra
        }
    }
    
    return result;
}

/**
 * Actualizar la UI del selector de idioma
 */
function updateLanguageUI() {
    // Actualizar botones del selector
    const espButton = document.querySelector('[data-lang="ESP"]');
    const engButton = document.querySelector('[data-lang="ENG"]');
    
    if (espButton && engButton) {
        // Remover clases activas
        espButton.classList.remove('active');
        engButton.classList.remove('active');
        
        // Agregar clase activa al idioma actual
        if (currentLanguage === 'ESP') {
            espButton.classList.add('active');
        } else {
            engButton.classList.add('active');
        }
    }
}

/**
 * Inicializar sistema bilingüe
 */
function initLanguageSystem() {
    // Recuperar idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('hablandis_language') || 'ESP';
    setLanguage(savedLanguage);
    
    // Configurar eventos de los botones de idioma
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-lang')) {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
            
            // Si hay una función para actualizar el contenido, llamarla
            if (typeof updatePageContent === 'function') {
                updatePageContent();
            }
        }
    });
}

// =================================
// AUTO-INICIALIZACIÓN
// =================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSystem();
});

// =================================
// UTILIDADES ADICIONALES
// =================================

/**
 * Crear selector de idioma HTML
 * @returns {string} HTML del selector
 */
function createLanguageSelector() {
    return `
        <div class="language-selector">
            <button class="lang-btn" data-lang="ESP">ESP</button>
            <button class="lang-btn" data-lang="ENG">ENG</button>
        </div>
    `;
}

/**
 * Obtener configuración de idioma para Airtable
 * @returns {object} Datos de idioma para guardar
 */
function getLanguageDataForAirtable() {
    return {
        "Idioma Interfaz": currentLanguage === 'ESP' ? 'Español' : 'English',
        "Language Interface": currentLanguage === 'ESP' ? 'Spanish' : 'English'
    };
}
