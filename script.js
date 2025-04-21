document.addEventListener("DOMContentLoaded", () => {
    const botonAñadir = document.getElementById("botonAñadir");
    const inputTarea = document.getElementById("newtarea");
    const listaTareas = document.getElementById("listaTareas");

    botonAñadir.addEventListener("click", () => {
        const tareaTexto = inputTarea.value.trim();

        if (tareaTexto !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = tareaTexto;
            
            // Botón para eliminar tarea
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "❌";
            botonEliminar.addEventListener("click", () => {
                nuevaTarea.remove();
            });

            nuevaTarea.appendChild(botonEliminar);
            listaTareas.appendChild(nuevaTarea);

            // Limpiar el campo de texto
            inputTarea.value = "";
        }
    });
    inputTarea.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            botonAñadir.click();
        }
    });
});