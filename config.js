/* Conexión a la nube (Supabase).
   Datos de Supabase → Project Settings → API Keys / Data API:
     - url:     "Project URL" (sin /rest/v1 al final)
     - anonKey: clave pública ("sb_publishable_..." o la "anon public")
   Es pública a propósito: solo permite leer el catálogo; para modificarlo
   el servidor exige iniciar sesión como administrador.
   NUNCA pongas aquí la clave "secret" ni la "service_role". */
window.VALERIANO_CLOUD = {
  url: "https://yavbevetsmngjxhmidau.supabase.co",
  anonKey: "sb_publishable_8xfeTXJPrjK7AOlgY-kG1g_luW4vV5p",
};
