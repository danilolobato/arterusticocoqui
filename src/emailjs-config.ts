// Configuración de EmailJS
// Para usar este formulario, necesitas:
// 1. Crear una cuenta en https://www.emailjs.com/
// 2. Crear un servicio de email (Gmail)
// 3. Crear una plantilla de email
// 4. Obtener tu Public Key
// 5. Reemplazar los valores en App.tsx

export const emailjsConfig = {
  serviceId: 'service_default', // Reemplazar con tu Service ID
  templateId: 'template_default', // Reemplazar con tu Template ID
  publicKey: 'YOUR_PUBLIC_KEY' // Reemplazar con tu Public Key
};

// Plantilla sugerida para EmailJS:
/*
Nuevo mensaje desde Arte Rustico Coqui

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Servicio: {{service}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde la página web de Arte Rustico Coqui.
*/