const BASE_URL = "http://localhost:8888/incidencias";

export const obtenerIncidencias = async (page = 0, size = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/listarIncidenciasOrdenadas?page=${page}&size=${size}`);
    if (!response.ok) {
      throw new Error("Error al obtener las incidencias");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener las incidencias:", error);
    throw error;
  }
};


// Función para enviar una modificación de la incidencia
export const enviarModificacion = async (incidencia) => {
  try {
    const response = await fetch(`${BASE_URL}/modificar_incidencia`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'text/plain; charset=UTF-8', 
      },
      body: JSON.stringify(incidencia),
    });
    if (!response.ok) {
      throw new Error("Error al enviar la solución");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al enviar la solución:", error);
    throw error;
  }
};

export default {
  methods: {
    validarYEnviar(incidencia) {
      if (!incidencia.comentario || incidencia.comentario.trim() === '') {
        alert('Por favor, ingresa un comentario antes de enviar.');
        return;
      }
      this.enviarModificacion(incidencia);
    }
  }
}
