// =================================
// CONFIGURACIÓN COMPLETA - HABLANDIS TEST DE ESPAÑOL
// =================================

/**
 * Configuración para conectar con Airtable
 */

const AIRTABLE_CONFIG = {
    // 🔧 MISMOS DATOS QUE INGLÉS (YA FUNCIONAN)
    apiToken: 'patySknPPBjipirTG.5eb66357ee49c95daad4046b60ac6fc70009d66804e65963bdb4d7ad02c90a2f',
    baseId: 'appvXqjRdinq686ey',
    tableName: 'Resultados de Test de Nivel'
};

// =================================
// 🔧 CONFIGURACIÓN reCAPTCHA v2 - USANDO SITE KEY QUE FUNCIONA
// =================================

const RECAPTCHA_CONFIG = {
    // 🔧 ⭐ SITE KEY QUE YA FUNCIONA EN INGLÉS ⭐
    siteKey: '6LdSA3orAAAAAM8tvQxUOqdHOfSp_dWZakH7uXnx',  // CAMBIADO: era 6LcqmngrAAAAADrOlsQ_WWUZ9oOu-BZtnG6yki8z
    action: 'submit_test'
};

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
// FUNCIÓN PARA VERIFICAR RECAPTCHA v2 - NUEVA
// =================================

/**
 * Ejecuta la verificación de reCAPTCHA v2
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
        
        // Para reCAPTCHA v2, usamos getResponse() en lugar de execute()
        logDebug('🔄 Obteniendo respuesta reCAPTCHA v2...');
        
        if (window.recaptchaWidgetId !== undefined) {
            const token = grecaptcha.getResponse(window.recaptchaWidgetId);
            
            if (token) {
                logDebug('✅ reCAPTCHA v2 token obtenido exitosamente');
                return token;
            } else {
                logDebug('❌ Usuario no completó reCAPTCHA v2');
                return null;
            }
        } else {
            logDebug('❌ Widget reCAPTCHA v2 no está renderizado');
            return null;
        }
    } catch (error) {
        console.error('❌ Error en reCAPTCHA v2:', error);
        return null;
    }
}

// =================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// =================================

// Validar configuraciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    logDebug('🚀 Inicializando configuraciones ESPAÑOL...');
    
    const validation = validateAllConfigs();
    
    if (validation.overall) {
        logDebug('✅ Todas las configuraciones están completas');
    } else {
        console.warn('⚠️ Hay configuraciones incompletas. Revisa la consola para más detalles.');
    }
});

// =================================
// CONFIGURACIÓN reCAPTCHA v2 CALLBACK
// =================================

// Callback global para reCAPTCHA v2
window.onRecaptchaLoad = function() {
    console.log('✅ reCAPTCHA v2 script loaded and ready');
    window.recaptchaReady = true;
    window.dispatchEvent(new CustomEvent('recaptchaReady'));
};

// =================================
// EXPORTAR CONFIGURACIONES
// =================================

// Las configuraciones están disponibles globalmente
// AIRTABLE_CONFIG, RECAPTCHA_CONFIG, executeRecaptcha(), validateAllConfigs()
