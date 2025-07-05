// =================================
// CONFIGURACIÓN COMPLETA - HABLANDIS TEST DE INGLÉS
// =================================

/**
 * Configuración para conectar con Airtable
 * 
 * INSTRUCCIONES AIRTABLE:
 * 1. Ve a https://airtable.com/api
 * 2. Selecciona tu base de datos
 * 3. Copia los valores necesarios:
 *    - API Token: Ve a Account > Developer hub > Personal access tokens
 *    - Base ID: Aparece en la URL de la API (empieza con 'app')
 *    - Table Name: El nombre exacto de tu tabla
 */

const AIRTABLE_CONFIG = {
    // 🔧 EDITA ESTOS VALORES CON TUS DATOS DE AIRTABLE
    apiToken: 'patySknPPBjipirTG.5eb66357ee49c95daad4046b60ac6fc70009d66804e65963bdb4d7ad02c90a2f',        // Ej: 'patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXX'
    baseId: 'appvXqjRdinq686ey',           // Ej: 'appXXXXXXXXXXXXXX' 
    tableName: 'Resultados de Test de Nivel'           // Ej: 'Resultados Test' o 'Test Results'
};

// =================================
// 🔧 CONFIGURACIÓN RÁPIDA - EDITA AQUÍ
// =================================

/**
 * ⭐ INSTRUCCIONES RÁPIDAS:
 * 
 * 1️⃣ AIRTABLE:
 *    - Ve a https://airtable.com/api
 *    - Copia tu API Token, Base ID y Table Name
 *    - Pégalos en AIRTABLE_CONFIG arriba
 * 
 * 2️⃣ RECAPTCHA:
 *    - Ve a https://www.google.com/recaptcha/admin
 *    - Crea sitio reCAPTCHA v3
 *    - Copia SOLO la "Site Key" (no la Secret Key)
 *    - Pégala en RECAPTCHA_CONFIG arriba
 *    - TAMBIÉN actualiza index.html línea 12
 * 
 * 3️⃣ EJEMPLO DE CONFIGURACIÓN COMPLETA:
 * 
 * const AIRTABLE_CONFIG = {
 *     apiToken: 'patABC123.DEF456GHI789JKL012MNO345PQR678STU901VWX234',
 *     baseId: 'appABC123DEF456GH',
 *     tableName: 'Resultados Test'
 * };
 * 
 * const RECAPTCHA_CONFIG = {
 *     siteKey: '6LdABC123DEF456GHI789JKL012MNO345PQR678STU',
 *     action: 'submit_test'
 * };
 * 
 * Y en index.html línea 12:
 * <script src="...api.js?render=6LdABC123DEF456GHI789JKL012MNO345PQR678STU"></script>
 */

const RECAPTCHA_CONFIG = {
    // 🔧 ⭐ REEMPLAZA ESTA LÍNEA CON TU SITE KEY REAL DE GOOGLE RECAPTCHA ⭐
    siteKey: '6LcqmngrAAAAADrOlsQ_WWUZ9oOu-BZtnG6yki8z',         // Ej: '6LdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    // 
    // 📋 PASOS PARA OBTENER TU SITE KEY:
    // 1. Ve a: https://www.google.com/recaptcha/admin
    // 2. Crea un sitio reCAPTCHA v3
    // 3. Copia SOLO la "Site Key" (NO la "Secret Key")
    // 4. Pégala arriba reemplazando 'TU_SITE_KEY_AQUI'
    // 5. TAMBIÉN actualiza el index.html línea 12 con la misma Site Key
    //
    action: 'submit_test'                // No cambies esto
};

// =================================
// CAMPOS QUE SE GUARDARÁN EN AIRTABLE
// =================================

/**
 * Estructura de datos que se envía a Airtable:
 * 
 * - Nombre: Nombre del estudiante
 * - Apellidos: Apellidos del estudiante
 * - Email: Email del estudiante
 * - Ciudad: Ciudad (opcional)
 * - Puntuación: Número de respuestas correctas
 * - Total Preguntas: Total de preguntas del test (39)
 * - Porcentaje: Porcentaje de aciertos
 * - Nivel: Nivel CEFR (A1, A2, B1, B2)
 * - Fecha: Fecha de realización del test
 * - Cómo nos conoció: Canal de adquisición
 * - Propósito: Para qué necesita aprender inglés
 * - Frecuencia: Frecuencia de clases deseada
 * - Protección Datos: Aceptación de cláusula de protección de datos
 * - Respuestas: JSON con todas las respuestas del test
 * - Verificado reCAPTCHA: Indica si pasó la verificación de reCAPTCHA
 */

// =================================
// CONFIGURACIÓN ADICIONAL
// =================================

// Habilitar logs para debugging (cambiar a false en producción)
const DEBUG_MODE = true;

// Función para logging
function logDebug(message, data = null) {
    if (DEBUG_MODE) {
        console.log(`[DEBUG] ${message}`, data);
    }
}

// =================================
// VALIDACIONES DE CONFIGURACIÓN
// =================================

// Validar configuración de Airtable
function validateAirtableConfig() {
    const required = ['apiToken', 'baseId', 'tableName'];
    const missing = required.filter(key => 
        !AIRTABLE_CONFIG[key] || AIRTABLE_CONFIG[key].includes('TU_')
    );
    
    if (missing.length > 0) {
        console.warn('⚠️ Configuración de Airtable incompleta. Faltan:', missing);
        console.warn('💡 Edita las claves en AIRTABLE_CONFIG al inicio del archivo');
        return false;
    }
    
    return true;
}

// Validar configuración de reCAPTCHA
function validateRecaptchaConfig() {
    if (!RECAPTCHA_CONFIG.siteKey || RECAPTCHA_CONFIG.siteKey.includes('TU_')) {
        console.warn('⚠️ Configuración de reCAPTCHA incompleta: falta Site Key');
        console.warn('💡 Edita la siteKey en RECAPTCHA_CONFIG al inicio del archivo');
        console.warn('📋 También actualiza index.html línea 12 con la misma Site Key');
        return false;
    }
    
    return true;
}

// Validar que reCAPTCHA esté cargado
function isRecaptchaLoaded() {
    return typeof grecaptcha !== 'undefined';
}

// Función principal de validación
function validateAllConfigs() {
    const airtableValid = validateAirtableConfig();
    const recaptchaConfigValid = validateRecaptchaConfig();
    const recaptchaLoaded = isRecaptchaLoaded();
    
    logDebug('Estado de configuraciones:', {
        airtable: airtableValid ? '✅ Válida' : '❌ Incompleta',
        recaptchaConfig: recaptchaConfigValid ? '✅ Válida' : '❌ Incompleta',
        recaptchaLoaded: recaptchaLoaded ? '✅ Cargado' : '❌ No cargado'
    });
    
    return {
        airtable: airtableValid,
        recaptcha: recaptchaConfigValid && recaptchaLoaded,
        overall: airtableValid && recaptchaConfigValid
    };
}

// =================================
// FUNCIÓN PARA VERIFICAR RECAPTCHA
// =================================

/**
 * Ejecuta la verificación de reCAPTCHA v3
 * @returns {Promise<string|null>} Token de reCAPTCHA o null si falla
 */
async function executeRecaptcha() {
    try {
        if (!isRecaptchaLoaded()) {
            logDebug('❌ reCAPTCHA no está cargado');
            return null;
        }
        
        if (!validateRecaptchaConfig()) {
            logDebug('❌ Configuración de reCAPTCHA inválida');
            return null;
        }
        
        logDebug('🔄 Ejecutando reCAPTCHA...');
        const token = await grecaptcha.execute(RECAPTCHA_CONFIG.siteKey, {
            action: RECAPTCHA_CONFIG.action
        });
        
        if (token) {
            logDebug('✅ reCAPTCHA token generado exitosamente');
            return token;
        } else {
            logDebug('❌ No se pudo generar el token de reCAPTCHA');
            return null;
        }
    } catch (error) {
        console.error('❌ Error en reCAPTCHA:', error);
        return null;
    }
}

// =================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// =================================

// Validar configuraciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    logDebug('🚀 Inicializando configuraciones...');
    
    const validation = validateAllConfigs();
    
    if (validation.overall) {
        logDebug('✅ Todas las configuraciones están completas');
    } else {
        console.warn('⚠️ Hay configuraciones incompletas. Revisa la consola para más detalles.');
    }
    
    // Esperar a que reCAPTCHA se cargue completamente
    if (window.grecaptcha) {
        grecaptcha.ready(() => {
            logDebug('✅ reCAPTCHA está listo');
        });
    }
});

// =================================
// EJEMPLO DE ESTRUCTURA DE TABLA AIRTABLE
// =================================

/**
 * Crea una tabla en Airtable con estos campos EXACTOS:
 * 
 * Nombre: Single line text
 * Apellidos: Single line text
 * Email: Email
 * Ciudad: Single line text
 * Puntuación: Number
 * Total Preguntas: Number
 * Porcentaje: Number
 * Nivel: Single select (A1 - Principiante, A2 - Elemental, B1 - Intermedio, B2 - Intermedio Alto)
 * Fecha: Date
 * Cómo nos conoció: Single select (Búsqueda en navegador, Redes sociales, Por amigos, Por anuncios, Paseando, De otra forma)
 * Propósito: Single select (Trabajo, Estudios, Negocios, Cultura)
 * Frecuencia: Single select (Clase diaria, Una por semana, Dos por semana)
 * Protección Datos: Single line text
 * Respuestas: Long text
 * Verificado reCAPTCHA: Single line text
 */

// =================================
// EXPORTAR CONFIGURACIONES (para uso en otros archivos si es necesario)
// =================================

// Las configuraciones están disponibles globalmente
// AIRTABLE_CONFIG, RECAPTCHA_CONFIG, executeRecaptcha(), validateAllConfigs()

// =================================
// 📋 LISTA DE VERIFICACIÓN FINAL
// =================================

/**
 * ✅ ANTES DE USAR ESTE TEST, VERIFICA QUE HAYAS:
 * 
 * 1. ✅ Configurado AIRTABLE_CONFIG con tus datos reales
 * 2. ✅ Configurado RECAPTCHA_CONFIG con tu Site Key real  
 * 3. ✅ Actualizado index.html línea 12 con la misma Site Key
 * 4. ✅ Creado la tabla en Airtable con los campos exactos del ejemplo
 * 5. ✅ Probado que no hay errores en la consola del navegador (F12)
 * 
 * 🔍 PARA VERIFICAR:
 * - Abre tu sitio web
 * - Presiona F12 para abrir la consola
 * - Deberías ver: "✅ Todas las configuraciones están completas"
 * - Si ves errores, revisa los pasos anteriores
 * 
 * 📞 Si hay problemas:
 * - Revisa que las claves sean correctas
 * - Verifica que los nombres de campos en Airtable coincidan exactamente
 * - Asegúrate de tener permisos de escritura en Airtable
 */
