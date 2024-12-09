const validation = (input) => {
    let errors = {};
    let regex = /\d/;

    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)) {
        errors.email = "No es una direccíon de email válida";
    }
    if (!input.email.length) {
        errors.email = "Este campo no puede estar vacío";
    }
    if (input.email.length > 35) {
        errors.email = "No puede tener mas de 35 caracteres"
    }
    if (!regex.test(input.password)) {
        errors.password = "Debe tener al menos un número"
    }
    if (input.password.length < 6 || input.password.length > 20) {
        errors.password = "El password debe estar entre 6 y 20 caracteres"
    }


    return errors;
}

export default validation;