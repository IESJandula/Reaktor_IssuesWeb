const BASE_URL = "http://localhost:8888/incidencias";

// Función para obtener las incidencias
export const obtenerIncidencias = async () => {
  try {
    const response = await fetch(`${BASE_URL}/listarIncidenciasOrdenadas`);
    if (!response.ok) {
      throw new Error("Error al obtener las incidencias");
    }
    const data = await response.json();
    return data;
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
