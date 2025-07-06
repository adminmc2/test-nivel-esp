// =================================
// NETLIFY FUNCTION: verify-and-save.js - reCAPTCHA v2 ESPAÑOL
// =================================

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    console.log('🚀 [NETLIFY FUNCTION] Iniciando verificación reCAPTCHA v2 ESPAÑOL...');
    
    // Solo permitir POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Método no permitido' })
        };
    }
    
    try {
        // Parsear datos del formulario
        const data = JSON.parse(event.body);
        console.log('📊 [STEP 1] Datos recibidos del frontend');
        
        // STEP 1: Verificar reCAPTCHA v2 con Google
        console.log('🛡️ [STEP 2] Verificando reCAPTCHA v2 con Google...');
        
        const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: data.recaptchaToken,
                remoteip: event.headers['client-ip'] || event.headers['x-forwarded-for']
            })
        });
        
        const recaptchaResult = await recaptchaResponse.json();
        console.log('🔍 [STEP 2] Resultado reCAPTCHA v2:', recaptchaResult);
        
        // Verificar que reCAPTCHA v2 fue exitoso
        if (!recaptchaResult.success) {
            console.log('❌ [ERROR] reCAPTCHA v2 falló:', recaptchaResult['error-codes']);
            return {
                statusCode: 400,
                body: JSON.stringify({ 
                    error: 'Verificación reCAPTCHA falló',
                    details: recaptchaResult['error-codes']
                })
            };
        }
        
        console.log('✅ [STEP 2] reCAPTCHA v2 verificado exitosamente');
        
        // STEP 2: Enviar a Airtable (ADAPTADO PARA ESPAÑOL)
        console.log('📤 [STEP 3] Enviando datos a Airtable...');
        
        const airtableData = {
            records: [{
                fields: {
                    "Nombre del estudiante": data.firstName,
                    "Apellidos del estudiante": data.lastName,
                    "Email": data.email,
                    "Ciudad": data.city || "",
                    "Canal de adquisición": data.howFoundUs || "",
                    "Propósito": data.learningPurpose || "",
                    "Tipo de test de nivel": "Test de nivel español",  // CAMBIADO DE INGLÉS
                    "Idioma": "Español",  // CAMBIADO DE INGLÉS
                    "Puntuación": data.score,
                    "Porcentaje": data.percentage,
                    "Nivel CEFR": data.level,
                    "Fecha de realización": new Date().toISOString().split('T')[0],
                    "Respuestas detalladas": data.detailedAnswers || JSON.stringify(data.answers, null, 2)
                    // ✅ SIN campos reCAPTCHA problemáticos
                }
            }]
        };
        
        const airtableResponse = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(airtableData)
        });
        
        if (!airtableResponse.ok) {
            const errorText = await airtableResponse.text();
            console.log('❌ [ERROR] Error Airtable:', errorText);
            return {
                statusCode: 500,
                body: JSON.stringify({ 
                    error: 'Error guardando en Airtable',
                    details: errorText
                })
            };
        }
        
        const airtableResult = await airtableResponse.json();
        console.log('✅ [STEP 3] Datos guardados en Airtable exitosamente');
        console.log('🎉 [SUCCESS] Proceso ESPAÑOL completado exitosamente');
        
        // Respuesta exitosa
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            body: JSON.stringify({ 
                success: true,
                message: 'Datos guardados exitosamente con reCAPTCHA v2 - ESPAÑOL',
                recordId: airtableResult.records[0].id
            })
        };
        
    } catch (error) {
        console.log('💥 [ERROR CRÍTICO]:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Error interno del servidor',
                details: error.message
            })
        };
    }
};
