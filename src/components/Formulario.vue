<script setup>
import { ref } from 'vue';
import { IncidenciaService } from '../services/IncidenciaService.js'; 

// El objeto reactivo ahora solo tiene los campos necesarios
const incidencia = ref({
  numeroAula: '',
  correoDocente: '',
  fechaInicio: '', 
  descripcionIncidencia: ''
});

// Manejar el envío del formulario
// const enviarFormulario = async () => {
//   try {
//     // Llamar al servicio para enviar los datos
//     const response = await IncidenciaService.crearIncidencia(incidenciaJson);
//     console.log(response);  // Muestra la respuesta del servidor
//   } catch (error) {
//     alert('Ocurrió un error al registrar la incidencia');
//     console.error(error);
//   }
// };
const enviarFormulario = async () => {
  const incidenciaJson = {
    numeroAula: incidencia.value.numeroAula,
    correoDocente: incidencia.value.correoDocente,
    fechaInicio: incidencia.value.fechaInicio,
    descripcionIncidencia: incidencia.value.descripcionIncidencia,
  };

 
  try {
    const message = await IncidenciaService.crearIncidencia(incidenciaJson);
    alert(message); 
    console.log('Respuesta del servidor:', message);
  } catch (error) {
    alert(`Ocurrió un error: ${error.message}`);
    console.error('Error al registrar la incidencia:', error);
    
  }
};

</script>

<template>
  <div class="contenedor-formulario">
    <h1>Registro de Incidencias</h1>
    <form @submit.prevent="enviarFormulario"> 
      <div class="cajas-formulario">
        <label for="numeroAula">Número de Aula <span class="required">*</span></label>
        <input
          type="text"
          id="numeroAula"
          v-model="incidencia.numeroAula"
          placeholder="Tu respuesta"
          required
        />
      </div>

      <div class="cajas-formulario">
        <label for="correoDocente">Correo del Docente <span class="required">*</span></label>
        <input
          type="email"
          id="correoDocente"
          v-model="incidencia.correoDocente"
          placeholder="Tu correo"
          required
        />
      </div>

      <div class="cajas-formulario">
        <label for="fechaInicio">Fecha de Inicio <span class="required">*</span></label>
        <input
          type="date"
          id="fechaInicio"
          v-model="incidencia.fechaInicio"
          required
        />
      </div>

      <div class="cajas-formulario">
        <label for="descripcionIncidencia">Descripción de Incidencia <span class="required">*</span></label>
        <textarea
          id="descripcionIncidencia"
          v-model="incidencia.descripcionIncidencia"
          placeholder="Tu respuesta"
          required
        ></textarea>
      </div>

      <div class="cajas-formulario">
        <button type="submit">Crear Incidencia</button>
      </div>

    </form>
  </div>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.contenedor-formulario {
    background: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
}

.contenedor-formulario h1 {
    padding-bottom: 20px ;
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: #007bff;
    font-weight: bold;
}

.cajas-formulario {
    margin-bottom: 15px;
}

.cajas-formulario label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.cajas-formulario input,
.cajas-formulario textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
}

.cajas-formulario input:focus,
.cajas-formulario textarea:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.cajas-formulario textarea {
    resize: vertical;
    height: 100px;
}

.cajas-formulario button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.cajas-formulario button:hover {
    background-color: #0056b3;
}

.required {
    color: red;
}

@media (max-width: 768px) {
    body {
        padding: 20px;
    }

    .contenedor-formulario  {
        width: 100%;
        padding: 15px;
    }

    .cajas-formulario label {
        font-size: 14px;
    }

    .cajas-formulario input,
    .cajas-formulario textarea {
        font-size: 12px;
        padding: 8px;
    }

    .cajas-formulario button {
        font-size: 14px;
        padding: 8px;
    }
}

@media (max-width: 480px) {
    .contenedor-formulario  {
        padding: 10px;
    }

    .cajas-formulario label {
        font-size: 12px;
    }

    .cajas-formulario input,
    .cajas-formulario textarea {
        font-size: 10px;
        padding: 6px;
    }

    .cajas-formulario button {
        font-size: 12px;
        padding: 6px;
    }
}
</style>
