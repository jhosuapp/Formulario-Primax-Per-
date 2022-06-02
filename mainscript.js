const getAllFieldsOfForm = document.querySelectorAll('.form__primax-go input');
const getFormOfPrimaxGo = document.querySelector('.form__primax-go');

const expresionesRegulares = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    dni: /^\d[a-zA-Z0-9.]{7,15}$/,
    telefono: /^[a-zA-Z0-9\s.+-]{5,14}$/,
    placa: /^[a-zA-Z0-9\s]{2,14}$/,
    direccion: /^[a-zA-Z0-9\s#_.+-]{5,40}$/,
}

const validarEnvio = {
    nombre: false,
    apellido: false,
    correo: false,
    dni: false,
    telefono: false,
    placa: false,
    direccion: false,
    selects: false
}

const inputEvento = (e)=>{
    switch (e.target.name){
        case "nombre":
            validarCampo(expresionesRegulares.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresionesRegulares.apellido, e.target, 'apellido');
        break;
        case "dni":
            validarCampo(expresionesRegulares.dni, e.target, 'dni');
        break;
        case "telefono":
            validarCampo(expresionesRegulares.telefono, e.target, 'telefono')
        break;
        case "placa":
            validarCampo(expresionesRegulares.placa, e.target, 'placa')
        break;
        case "correo":
            validarCampo(expresionesRegulares.correo, e.target, 'correo')
        break;
        case "direccion":
            validarCampo(expresionesRegulares.direccion, e.target, 'direccion')
        break;
    }
}

const validarCampo = (exp, tar, clas) => {
    if(exp.test(tar.value)){
        document.querySelector(`.form__primax-go__bloque--${clas}`).classList.add('bien');
        document.querySelector(`.form__primax-go__bloque--${clas}`).classList.remove('mal');
        validarEnvio[clas] = true;
    }else{
        document.querySelector(`.form__primax-go__bloque--${clas}`).classList.remove('bien');
        document.querySelector(`.form__primax-go__bloque--${clas}`).classList.add('mal');
        validarEnvio[clas] = false;
    }
}


getAllFieldsOfForm.forEach((data)=>{
    data.addEventListener('blur', inputEvento);
    data.addEventListener('keyup', inputEvento);
});


//VALIDACION SELECTS

const getAllSelectsPrimaxGo = document.querySelectorAll('.form__primax-go__select');

getAllSelectsPrimaxGo.forEach((data)=>{
    data.addEventListener('change', ()=>{  
        var getParentOfSelect = data.parentNode;
        getParentOfSelect.classList.add('bien-select');
    });
});





getFormOfPrimaxGo.addEventListener('submit', (e)=>{
    e.preventDefault();

    const getCheckOfTerms = document.querySelector('#terminos');

    const getValidationForSelects = document.querySelectorAll('.bien-select');
    console.log(validarEnvio.selects);
    if(getValidationForSelects.length == "5"){
        console.log(validarEnvio.selects);
        validarEnvio.selects = true;
    }

    if(getCheckOfTerms.checked && validarEnvio.selects && validarEnvio.nombre && validarEnvio.apellido && validarEnvio.dni && validarEnvio.telefono && validarEnvio.correo && validarEnvio.placa && validarEnvio.direccion){

        document.querySelector('.form__primax-go__bloque--enviado').classList.add('active');
        
    }else{
        var getMensajeWrong = document.querySelector('.form__primax-go__bloque-validacion');

        getMensajeWrong.classList.add('active');

        setTimeout(()=>{
            getMensajeWrong.classList.remove('active');
        },3000);
    }
});

const getSelectDepartamentos = document.querySelector('#departamento');


getSelectDepartamentos.addEventListener("change", function () {
    var tomarAtribute = this.value;
    var selectProvincia = document.querySelector('#provincia');
    var getAllElementsOfProvincia = document.querySelectorAll('#provincia option');

    function reUseFor(){
        arrayProvincias.forEach((data)=>{
            var createOptionForProvincias = document.createElement('option');
            createOptionForProvincias.textContent = data;
            createOptionForProvincias.setAttribute('value', data);

            selectProvincia.append(createOptionForProvincias);
            getAllElementsOfProvincia.forEach((data)=>{
                data.remove();
            });
        });
    }

    switch (tomarAtribute){   
        case 'Amazonas':
            var arrayProvincias = ["CHACHAPOYAS", "BAGUA", "BONGARA", "CONDORCANQUI", "LUYA", "RODRIGUEZ DE MENDOZA", "UTCUBAMBA"];
            reUseFor();
        break; 
        case 'Ancash':
            var arrayProvincias = ["HUARAZ", "AIJA", "ASUNCION", "BOLOGNESI", "CARHUAZ", "CARLOS FERMIN FITZCARRAL", "CORONGO", "HUARMEY", "HUAYLAS", "MARISCAL LUZURIAGA", "OCROS", "PALLASCA", "POMABAMBA", "RECUAY", "SANTA", "SIHUAS", "YUNGAY"];
            reUseFor();
        break;
        case 'Apurimac':
            var arrayProvincias = ["ABANCAY", "ANDAHUAYLAS", "ANTABAMBA", "COTABAMBAS", "CHINCHEROS", "GRAU"];
            reUseFor();
        break;
        case 'Arequipa':
            var arrayProvincias = ["AREQUIPA", "CAMANA", "CARAVELI", "CASTILLA", "CAYLLOMA", "CONDESUYOS", "ISLAY", "LA UNION"];
            reUseFor();
        break;
        case 'Ayacucho':
            var arrayProvincias = ["HUAMANGA", "CANGALLO", "HUANCA SANCOS", "HUANTA", "LA MAR", "LUCANAS", "PARINACOCHAS", "PAUCAR DEL SARA SARA", "SUCRE", "VICTOR FAJARDO", "VILCAS HUAMAN"];
            reUseFor();
        break;
        case 'Cajamarca':
            var arrayProvincias = ["CAJAMARCA", "CELENDIN", "CHOTA", "CONTUMAZA", "CUTERVO", "HUALGAYOC", "JAEN", "SAN IGNACIO", "SAN MARCOS", "SAN MIGUEL", "SAN PABLO"];
            reUseFor();
        break;
        case 'Callao':
            var arrayProvincias = ["CALLAO"];
            reUseFor();
        break;
        case 'Cusco':
            var arrayProvincias = ["CUSCO", "ACOMAYO", "ANTA", "CALCA", "CANAS", "CANCHIS", "CHUMBIVILCAS", "ESPINAR", "LA CONVENCION", "PARURO", "PAUCARTAMBO", "QUISPICANCHI", "URUBAMBA"];
            reUseFor();
        break;
        case 'Huancavelica':
            var arrayProvincias = ["HUANCAVELICA", "ACOBAMBA", "ANGARAES", "CASTROVIRREYNA", "CHURCAMPA", "HUAYTARA", "TAYACAJA"];
            reUseFor();
        break;
        case 'Huanuco':
            var arrayProvincias = ["HUANUCO", "AMBO", "DOS DE MAYO", "HUAMALIES", "LEONCIO PRADO", "MARAÑON", "PACHITEA", "PUERTO INCA", "LAURICOCHA", "YAROWILCA"];
            reUseFor();
        break;
        case 'Ica':
            var arrayProvincias = ["ICA", "CHINCHA", "NASCA", "PALPA", "PISCO"];
            reUseFor();
        break;
        case 'Junín':
            var arrayProvincias = ["HUANCAYO", "CONCEPCION", "CHANCHAMAYO", "JAUJA", "JUNIN", "SATIPO", "TARMA", "YAULI", "CHUPACA"];
            reUseFor();
        break;
        case 'La Libertad':
            var arrayProvincias = ["TRUJILLO", "ASCOPE", "BOLIVAR", "CHEPEN", "OTUZCO", "PACASMAYO", "PATAZ", "SANCHEZ CARRION", "SANTIAGO DE CHUCO", "GRAN CHIMU", "VIRU"];
            reUseFor();
        break;
        case 'Lambayeque':
            var arrayProvincias = [ "CHICLAYO", "FERREÑAFE", "LAMBAYEQUE"];
            reUseFor();
        break;
        case 'Lima':
            var arrayProvincias = ["LIMA", "BARRANCA", "CAJATAMBO", "CANTA", "CAÑETE", "HUARAL", "HUAROCHIRI", "HUAURA", "OYON", "YAUYOS"];
            reUseFor();
        break;
        case 'Loreto':
            var arrayProvincias = ["MAYNAS", "ALTO AMAZONAS", "LORETO", "MARISCAL RAMON CASTILLA", "REQUENA", "UCAYALI", "DATEM DEL MARAÑON", "PUTUMAYO"];
            reUseFor();
        break;
        case 'Madre de Dios':
            var arrayProvincias = ["TAMBOPATA", "MANU"];
            reUseFor();
        break;
        case 'Moquegua':
            var arrayProvincias = ["MARISCAL NIETO", "GENERAL SANCHEZ CERRO", "ILO"];
            reUseFor();
        break;
        case 'Pasco':
            var arrayProvincias = ["PASCO", "DANIEL ALCIDES CARRION", "OXAPAMPA"];
            reUseFor();
        break;
        case 'Piura':
            var arrayProvincias = ["PIURA", "AYABACA", "HUANCABAMBA", "MORROPON", "PAITA", "SULLANA", "SECHURA"];
            reUseFor();
        break;
        case 'Puno':
            var arrayProvincias = ["PUNO", "AZANGARO", "CARABAYA", "CHUCUITO", "EL COLLAO", "HUANCANE", "LAMPA", "MELGAR", "MOHO", "SAN ANTONIO DE PUTINA", "SAN ROMAN", "SANDIA", "YUNGUYO"];
            reUseFor();
        break;
        case 'San Martín':
            var arrayProvincias = ["MOYOBAMBA", "BELLAVISTA", "EL DORADO", "HUALLAGA", "LAMAS", "MARISCAL CACERES", "PICOTA", "RIOJA", "SAN MARTIN", "TOCACHE"];
            reUseFor();
        break;
        case 'Tacna':
            var arrayProvincias = ["TACNA", "CANDARAVE", "TARATA"];
            reUseFor();
        break;
        case 'Tumbes':
            var arrayProvincias = ["TUMBES", "ZARUMILLA"];
            reUseFor();
        break;
        case 'Ucayali':
            var arrayProvincias = ["CORONEL PORTILLO", "ATALAYA", "PADRE ABAD", "PURUS"];
            reUseFor();
        break;
        }
    },false
);


