export function capitalizarPrimeraLetra(texto = '') {
    const limpio = texto.trim(); // Elimina espacios al inicio y al final
    if (!limpio) return limpio; // Retorna vacío si el texto es solo espacios
    return limpio.charAt(0).toUpperCase() + limpio.slice(1).toLowerCase();
}