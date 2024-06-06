function validar() {
    var resultado_correo = validar_correo();
    var resultado_password = validar_password();
    var resultado_password_confirm = validar_password_confirm();
    var resultado_direccion = validar_direccion();
    var resultado_comuna= validar_comuna();
    var resultado_telefono = validar_telefono();
    var resultado_url = validar_url();
    var resultado_aficion = agregar_aficiones();

    var resultado = resultado_correo && resultado_password && resultado_password_confirm && resultado_direccion && resultado_comuna && resultado_telefono && resultado_url && resultado_aficion;

    return resultado;
}

function validar_correo() {
    var input_email = document.getElementById("correo");
    var div_error_correo = document.getElementById("error_correo");
    var correo = input_email.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    extension = arr_correo[arr_correo.length - 1];

    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3)) {
        div_error_correo.innerHTML = "";
        return true;
    } else {
        div_error_correo.innerHTML = "El correo electronico no tiene el formato correcto";
        div_error_correo.className = "text-danger small";
        return false;
    }
}

function validar_password() {
    var input_password = document.getElementById("input_password");
    var div_error_password = document.getElementById("error_password");
    var password = input_password.value;
    var letra = false;
    var digito = false;

    if (password.length < 3 || password.length > 6) {
        div_error_password.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
        div_error_password.className = "text-danger small";
        return false;
    } else if (password == "") {
        div_error_password.innerHTML = "La contraseña es obligatoria";
        div_error_password.className = "text-danger small";
        return false;
    }

    for (var i = 0; i < password.length; i++) {
        var input = password[i];
        if ((input >= "A" && input <= "Z") || (input >= "a" && input <= "z")) {
            letra = true;
        } else if (input >= '0' && input <= '9') {
            digito = true;
        }

        if (letra && digito) {
            break;
        }
    }

    if (!letra || !digito) {
        div_error_password.innerHTML = "La contraseña debe contener al menos una letra y un dígito";
        div_error_password.className = "text-danger small";
        return false;
    }

    div_error_password.innerHTML = "";
    return true;
}


function validar_password_confirm() {
    var input_password = document.getElementById("input_password");
    var input_password_confirm = document.getElementById("input_password_confirm");
    var div_error_password_confirm = document.getElementById("error_password_confirm");
    var password = input_password.value;
    var password_confirm = input_password_confirm.value;

    if (password== "") {
        div_error_password_confirm.innerHTML = "Tiene que ingresar una contraseña primero";
        div_error_password_confirm.className = "text-danger small";
        return false;
    } else if (password !== password_confirm) {
        div_error_password_confirm.innerHTML = "Las contraseñas no coinciden";
        div_error_password_confirm.className = "text-danger small";
        return false;
    } else {
        div_error_password_confirm.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input_direccion");
    var div_error_direccion = document.getElementById("error_direccion");
    var direccion = input_direccion.value;
    if (direccion == "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("comuna");
    var div_error_comuna = document.getElementById("error_comuna");
    var comuna = select_comuna.value;
    if (comuna == "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var input_telefono = document.getElementById("input_telefono");
    var div_error_telefono = document.getElementById("error_telefono");
    var telefono = input_telefono.value;
    var arr_telefono = telefono.split(" ");
    var codigo_pais = arr_telefono[0];
    var numero = arr_telefono[1];

    if (telefono == "") {
        div_error_telefono.innerHTML = "El teléfono es obligatorio";
        div_error_telefono.className = "text-danger small"
        return false;
    } 

    if (arr_telefono.length !== 2) {
        div_error_telefono.innerHTML = "El teléfono no tiene el formato correcto";
        div_error_telefono.className = "text-danger small";
        return false;
    }

    if (codigo_pais !== "+569") {
        div_error_telefono.innerHTML = 'El código del país debe ser "+569"';
        div_error_telefono.className = "text-danger small";
        return false;
    }

    if (numero.length !== 8 ) {
        div_error_telefono.innerHTML = "El número debe tener 8 dígitos";
        div_error_telefono.className = "text-danger small";
        return false;
    }

    for (var i = 0; i < numero.length; i++) {
        if (numero[i] < '0' || numero[i] > '9') {
            div_error_telefono.innerHTML = "El número debe contener solo dígitos";
            div_error_telefono.className = "text-danger small";
            return false;
        }
    }
    div_error_telefono.innerHTML = "";
    return true;
}

function validar_url() {
    var input_url = document.getElementById("input_url");
    var div_error_url = document.getElementById("error_url");
    var url = input_url.value;
    var pos_http = url.indexOf("http://")
    var pos_https = url.indexOf("https://")
    var pos_punto = url.lastIndexOf(".");
    var arr_url = url.split(".");
    extension = arr_url[arr_url.length - 1];
    if (pos_http > -1 && pos_punto > pos_http && (extension.length >= 2 && extension.length <= 4) || pos_https > -1 && pos_punto > pos_https && (extension.length >= 2 && extension.length <= 4) || url == "") {
        div_error_url.innerHTML = "";
        return true;     
    } else {
        div_error_url.innerHTML = "El formato de la url no es válido";
        div_error_url.className = "text-danger small";
        return false;
    }
}


function agregar_aficiones() {
    var input_aficiones = document.getElementById("input_aficiones");
    var div_error_aficion = document.getElementById("error_aficiones");
    var aficion = input_aficiones.value.trim();
    var button = document.createElement("button");
    button.innerText = "Eliminar";
    button.className = "btn btn-danger"
    button.onclick = function() {
        lista_aficiones.removeChild(li);
    };

    var lista_aficiones = document.getElementById("lista_aficiones");

    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.innerText = aficion;

    input_aficiones.value = "";
    div_error_aficion.innerHTML = "";

    var aficiones = lista_aficiones.getElementsByTagName("li");

    if (aficion == "") {
        div_error_aficion.innerHTML = "El campo de afición no puede estar vacío";
        div_error_aficion.className = "text-danger small";
    } else {
        lista_aficiones.appendChild(li);
        li.appendChild(button);
    }

    if (aficiones.length < 2) {
        div_error_aficion.innerHTML = "Debes ingresar al menos 2 aficiones";
        div_error_aficion.className = "text-danger small";
        return false;
    } else {
        div_error_aficion.innerHTML = "";
        return true;
    }

}
