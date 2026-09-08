const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {

    menu.classList.toggle("show");

});


// ================================
// MENÚ ACTIVO
// ================================

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Ocultar menú móvil
        menu.classList.remove("show");

    });

});


// ================================
// BOTONES DE CURSOS
// ================================

const courseButtons = document.querySelectorAll(".course-bottom button");

courseButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "¡Excelente! Próximamente podrás comenzar este curso."
        );

    });

});


// ================================
// ACTIVIDADES
// ================================

const activityButtons = document.querySelectorAll(".activity-card button");

activityButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "La actividad estará disponible próximamente."
        );

    });

});


// ================================
// FILTRO DE ANALÍTICA
// ================================

const periodFilter = document.getElementById("periodFilter");

periodFilter.addEventListener("change", () => {

    const selected = periodFilter.value;

    if (selected === "3") {

        alert("Mostrando datos de los últimos 3 meses.");

    } else if (selected === "6") {

        alert("Mostrando datos de los últimos 6 meses.");

    } else {

        alert("Mostrando datos del último año.");

    }

});


// ================================
// BOTÓN INICIAR SESIÓN
// ================================

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {

    alert(
        "Aquí colocaremos posteriormente el formulario de inicio de sesión."
    );

});


// ================================
// EDITAR PERFIL
// ================================

const editProfile = document.querySelector(".profile .primary-btn");

editProfile.addEventListener("click", () => {

    alert(
        "Aquí podremos agregar posteriormente la edición del perfil."
    );

});
