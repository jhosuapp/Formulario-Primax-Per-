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

    if(getValidationForSelects.length == "7"){

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

    // selectProvincia.classList.remove('display-none');

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
            var arrayProvincias = ["Provincia", "CHACHAPOYAS", "BAGUA", "BONGARA", "CONDORCANQUI", "LUYA", "RODRIGUEZ DE MENDOZA", "UTCUBAMBA"];
            reUseFor();
        break; 
        case 'Ancash':
            var arrayProvincias = ["Provincia", "HUARAZ", "AIJA", "ASUNCION", "BOLOGNESI", "CARHUAZ", "CARLOS FERMIN FITZCARRAL", "CORONGO", "HUARMEY", "HUAYLAS", "MARISCAL LUZURIAGA", "OCROS", "PALLASCA", "POMABAMBA", "RECUAY", "SANTA", "SIHUAS", "YUNGAY"];
            reUseFor();
        break;
        case 'Apurimac':
            var arrayProvincias = ["Provincia", "ABANCAY", "ANDAHUAYLAS", "ANTABAMBA", "AYMARAES", "COTABAMBAS", "CHINCHEROS", "GRAU"];
            reUseFor();
        break;
        case 'Arequipa':
            var arrayProvincias = ["Provincia", "AREQUIPA", "CAMANA", "CARAVELI", "CASTILLA", "CAYLLOMA", "CONDESUYOS", "ISLAY", "LA UNION"];
            reUseFor();
        break;
        case 'Ayacucho':
            var arrayProvincias = ["Provincia", "HUAMANGA", "CANGALLO", "HUANCA SANCOS", "HUANTA", "LA MAR", "LUCANAS", "PARINACOCHAS", "PAUCAR DEL SARA SARA", "SUCRE", "VICTOR FAJARDO", "VILCAS HUAMAN"];
            reUseFor();
        break;
        case 'Cajamarca':
            var arrayProvincias = ["Provincia", "CAJAMARCA", "CELENDIN", "CHOTA", "CONTUMAZA", "CUTERVO", "HUALGAYOC", "JAEN", "SAN IGNACIO", "SAN MARCOS", "SAN MIGUEL", "SAN PABLO"];
            reUseFor();
        break;
        case 'Callao':
            var arrayProvincias = ["Provincia", "CALLAO"];
            reUseFor();
        break;
        case 'Cusco':
            var arrayProvincias = ["Provincia", "CUSCO", "ACOMAYO", "ANTA", "CALCA", "CANAS", "CANCHIS", "CHUMBIVILCAS", "ESPINAR", "LA CONVENCION", "PARURO", "PAUCARTAMBO", "QUISPICANCHI", "URUBAMBA"];
            reUseFor();
        break;
        case 'Huancavelica':
            var arrayProvincias = ["Provincia", "HUANCAVELICA", "ACOBAMBA", "ANGARAES", "CASTROVIRREYNA", "CHURCAMPA", "HUAYTARA", "TAYACAJA"];
            reUseFor();
        break;
        case 'Huanuco':
            var arrayProvincias = ["Provincia", "HUANUCO", "AMBO", "DOS DE MAYO", "HUAMALIES", "LEONCIO PRADO", "MARAÑON", "PACHITEA", "PUERTO INCA", "LAURICOCHA", "YAROWILCA"];
            reUseFor();
        break;
        case 'Ica':
            var arrayProvincias = ["Provincia", "ICA", "CHINCHA", "NASCA", "PALPA", "PISCO"];
            reUseFor();
        break;
        case 'Junín':
            var arrayProvincias = ["Provincia", "HUANCAYO", "CONCEPCION", "CHANCHAMAYO", "JAUJA", "JUNIN", "SATIPO", "TARMA", "YAULI", "CHUPACA"];
            reUseFor();
        break;
        case 'La Libertad':
            var arrayProvincias = ["Provincia", "TRUJILLO", "ASCOPE", "BOLIVAR", "CHEPEN", "OTUZCO", "PACASMAYO", "PATAZ", "SANCHEZ CARRION", "SANTIAGO DE CHUCO", "GRAN CHIMU", "VIRU"];
            reUseFor();
        break;
        case 'Lambayeque':
            var arrayProvincias = ["Provincia",  "CHICLAYO", "FERREÑAFE", "LAMBAYEQUE"];
            reUseFor();
        break;
        case 'Lima':
            var arrayProvincias = ["Provincia", "LIMA", "BARRANCA", "CAJATAMBO", "CANTA", "CAÑETE", "HUARAL", "HUAROCHIRI", "HUAURA", "OYON", "YAUYOS"];
            reUseFor();
        break;
        case 'Loreto':
            var arrayProvincias = ["Provincia", "MAYNAS", "ALTO AMAZONAS", "LORETO", "MARISCAL RAMON CASTILLA", "REQUENA", "UCAYALI", "DATEM DEL MARAÑON", "PUTUMAYO"];
            reUseFor();
        break;
        case 'Madre de Dios':
            var arrayProvincias = ["Provincia", "TAMBOPATA", "MANU"];
            reUseFor();
        break;
        case 'Moquegua':
            var arrayProvincias = ["Provincia", "MARISCAL NIETO", "GENERAL SANCHEZ CERRO", "ILO"];
            reUseFor();
        break;
        case 'Pasco':
            var arrayProvincias = ["Provincia", "PASCO", "DANIEL ALCIDES CARRION", "OXAPAMPA"];
            reUseFor();
        break;
        case 'Piura':
            var arrayProvincias = ["Provincia", "PIURA", "AYABACA", "HUANCABAMBA", "MORROPON", "PAITA", "SULLANA", "SECHURA"];
            reUseFor();
        break;
        case 'Puno':
            var arrayProvincias = ["Provincia", "PUNO", "AZANGARO", "CARABAYA", "CHUCUITO", "EL COLLAO", "HUANCANE", "LAMPA", "MELGAR", "MOHO", "SAN ANTONIO DE PUTINA", "SAN ROMAN", "SANDIA", "YUNGUYO"];
            reUseFor();
        break;
        case 'San Martín':
            var arrayProvincias = ["Provincia", "MOYOBAMBA", "BELLAVISTA", "EL DORADO", "HUALLAGA", "LAMAS", "MARISCAL CACERES", "PICOTA", "RIOJA", "SAN MARTIN", "TOCACHE"];
            reUseFor();
        break;
        case 'Tacna':
            var arrayProvincias = ["Provincia", "TACNA", "CANDARAVE", "TARATA"];
            reUseFor();
        break;
        case 'Tumbes':
            var arrayProvincias = ["Provincia", "TUMBES", "ZARUMILLA"];
            reUseFor();
        break;
        case 'Ucayali':
            var arrayProvincias = ["Provincia", "CORONEL PORTILLO", "ATALAYA", "PADRE ABAD", "PURUS"];
            reUseFor();
        break;
        }
    },false
);


const getSelecForUseCities = document.querySelector('#provincia');
const getAllOptionsCities = document.querySelectorAll('#provincia option');
const getSelectCities = document.querySelector('#ciudad');

getSelecForUseCities.addEventListener("change", function () {
    var getAttributeSelec = this.value;
    const getOptionsOfSelectCities = document.querySelectorAll('#ciudad option');

    function reUseForProvincias(){
        arrayCiudades.forEach((data)=>{
            var createOptionForCiudades = document.createElement('option');
            createOptionForCiudades.textContent = data;
            createOptionForCiudades.setAttribute('value', data);

            getSelectCities.append(createOptionForCiudades);
            getOptionsOfSelectCities.forEach((data)=>{
                data.remove();
            });
        });
    }

    switch (getAttributeSelec){   
        case 'CHACHAPOYAS':
            var arrayCiudades = ['Distrito', 'CHACHAPOYAS', 'ASUNCION', 'BALSAS', 'CHETO', 'CHILIQUIN', 'GRANADA', 'LA JALCA', 'LEIMEBAMBA', 'LEVANTO', 'MAGDALENA', 'MARISCAL CASTILLA', 'MONTEVIDEO', 'OLLEROS', 'QUINJALCA', 'SONCHE'];
            reUseForProvincias();
        break;
        case 'BAGUA':
            var arrayCiudades = ['Distrito', 'ARAMANGO', 'COPALLIN', 'EL PARCO', 'LA PECA'];
            reUseForProvincias();
        break;
        case 'BONGARA':
            var arrayCiudades = ['Distrito', 'CHISQUILLA', 'CHURUJA', 'COROSHA', 'CUISPES', 'RECTA', 'SAN CARLOS', 'SHIPASBAMBA', 'VALERA'];
            reUseForProvincias();
        break;
        case 'CONDORCANQUI':
            var arrayCiudades = ['Distrito', 'NIEVA', 'EL CENEPA', 'RIO SANTIAGO'];
            reUseForProvincias();
        break;
        case 'LUYA':
            var arrayCiudades = ['Distrito', 'LAMUD', 'CAMPORREDONDO', 'COLCAMAR', 'CONILA', 'INGUILPATA', 'LONGUITA', 'LONYA CHICO', 'LUYA', 'MARIA', 'OCALLI', 'PROVIDENCIA', 'SAN CRISTOBAL', 'SAN FRANCISCO DEL YESO', 'SAN JERONIMO', 'SAN JUAN DE LOPECANCHA', 'SANTA CATALINA', 'SANTO TOMAS', 'TINGO'];
            reUseForProvincias();
        break;
        case 'RODRIGUEZ DE MENDOZA':
            var arrayCiudades = ['Distrito', 'CHIRIMOTO', 'COCHAMAL', 'LIMABAMBA', 'LONGAR', 'MARISCAL BENAVIDES', 'MILPUC', 'SANTA ROSA', 'TOTORA'];
            reUseForProvincias();
        break;
        case 'UTCUBAMBA':
            var arrayCiudades = ['Distrito', 'BAGUA GRANDE', 'CAJARURO', 'EL MILAGRO', 'YAMON'];
            reUseForProvincias();
        break;
        case 'HUARAZ':
            var arrayCiudades = ['Distrito', 'COLCABAMBA', 'HUANCHAY'];
            reUseForProvincias();
        break;
        case 'AIJA':
            var arrayCiudades = ['Distrito', 'HUACLLAN'];
            reUseForProvincias();
        break;
        case 'ASUNCION':
            var arrayCiudades = ['Distrito', 'ACOCHACA'];
            reUseForProvincias();
        break;
        case 'BOLOGNESI':
            var arrayCiudades = ['Distrito', 'ANTONIO RAYMONDI', 'CANIS', 'HUAYLLACAYAN', 'LA PRIMAVERA', 'SAN MIGUEL DE CORPANQUI '];
            reUseForProvincias();
        break;
        case 'CARHUAZ':
            var arrayCiudades = ['Distrito', 'AMASHCA', 'ATAQUERO', 'MARCARA', 'PARIAHUANCA', 'SHILLA', 'TINCO', 'YUNGAR'];
            reUseForProvincias();
        break;
        case 'CARLOS FERMIN FITZCARRAL':
            var arrayCiudades = ['Distrito', 'SAN LUIS'];
            reUseForProvincias();
        break;
        case 'CORONGO':
            var arrayCiudades = ['Distrito', 'CORONGO', 'ACO', 'YANAC'];
            reUseForProvincias();
        break;
        case 'HUARMEY':
            var arrayCiudades = ['Distrito', 'HUAYAN', 'MALVAS'];
            reUseForProvincias();
        break;
        case 'HUAYLAS':
            var arrayCiudades = ['Distrito', 'HUATA', 'HUAYLAS', 'SANTA CRUZ', 'YURACMARCA'];
            reUseForProvincias();
        break;
        case 'MARISCAL LUZURIAGA':
            var arrayCiudades = ['Distrito', 'LUCMA'];
            reUseForProvincias();
        break;
        case 'OCROS':
            var arrayCiudades = ['Distrito', 'OCROS', 'ACAS', 'CONGAS', 'LLIPA'];
            reUseForProvincias();
        break;
        case 'PALLASCA':
            var arrayCiudades = ['Distrito', 'HUANDOVAL', 'LACABAMBA', 'LLAPO', 'SANTA ROSA', 'TAUCA'];
            reUseForProvincias();
        break;
        case 'POMABAMBA':
            var arrayCiudades = ['Distrito', 'HUAYLLAN'];
            reUseForProvincias();
        break;
        case 'RECUAY':
            var arrayCiudades = ['Distrito', 'LLACLLIN', 'MARCA', 'PAMPAS CHICO', 'TAPACOCHA'];
            reUseForProvincias();
        break;
        case 'SANTA':
            var arrayCiudades = ['Distrito', 'COISHCO'];
            reUseForProvincias();
        break;
        case 'SIHUAS':
            var arrayCiudades = ['Distrito', 'SIHUAS', 'ALFONSO UGARTE', 'CASHAPAMPA'];
            reUseForProvincias();
        break;
        case 'YUNGAY':
            var arrayCiudades = ['Distrito', 'CASCAPARA', 'MATACOTO', 'MATACOTO', 'SHUPLUY'];
            reUseForProvincias();
        break;
        case 'ABANCAY':
            var arrayCiudades = ['Distrito', 'ABANCAY', 'CIRCA', 'LAMBRAMA', 'PICHIRHUA', 'PICHIRHUA', 'SAN PEDRO DE CACHORA', 'TAMBURCO'];
            reUseForProvincias();
        break;
        case 'ANDAHUAYLAS':
            var arrayCiudades = ['Distrito', 'CHIARA', 'HUANCARAY', 'PACOBAMBA', 'PAMPACHIRI', 'POMACOCHA', 'SAN ANTONIO DE CACHI', 'SAN JERONIMO', 'SAN MIGUEL DE CHACCRAMPA', 'TALAVERA', 'TUMAY HUARACA', 'JOSÉ MARÍA ARGUEDAS'];
            reUseForProvincias();
        break;
        case 'ANTABAMBA':
            var arrayCiudades = ['Distrito', 'ANTABAMBA', 'EL ORO',  'HUAQUIRCA',  'JUAN ESPINOZA MEDRANO ',  'OROPESA',  'PACHACONAS'];
            reUseForProvincias();
        break;
        case 'AYMARAES':
            var arrayCiudades = ['Distrito', 'CHALHUANCA',  'CAPAYA',  'CARAYBAMBA',  'COLCABAMBA',  'LUCRE',  'POCOHUANCA',  'SAN JUAN DE CHACÑA',  'TAPAIRIHUA',  'YANACA'];
            reUseForProvincias();
        break;
        case 'COTABAMBAS':
            var arrayCiudades = ['Distrito', 'HAQUIRA',  'MARA',  'CHALLHUAHUACHO'];
            reUseForProvincias();
        break;
        case 'CHINCHEROS':
            var arrayCiudades = ['Distrito', 'CHINCHEROS',  'ANCO-HUALLO',  'ONGOY',  'RANRACANCHA',  'ROCCHACC',  'EL PORVENIR',  'LOS CHANKAS'];
            reUseForProvincias();
        break;
        case 'GRAU':
            var arrayCiudades = ['Distrito', 'CHUQUIBAMBILLA',  'GAMARRA',  'MAMARA',  'PATAYPAMPA',  'SANTA ROSA',  'VILCABAMBA',  'VIRUNDO'];
            reUseForProvincias();
        break;
        case 'AREQUIPA':
            var arrayCiudades = ['Distrito', 'ALTO SELVA ALEGRE', 'LA JOYA', 'MIRAFLORES', 'MOLLEBAYA', 'POCSI', 'POLOBAYA', 'QUEQUEÑA', 'SAN JUAN DE SIGUAS', 'VITOR', 'YANAHUARA'];
            reUseForProvincias();
        break;
        case 'CAMANA':
            var arrayCiudades = ['Distrito', 'CAMANA', 'MARISCAL CACERES'];
            reUseForProvincias();
        break;
        case 'CARAVELI':
            var arrayCiudades = ['Distrito', 'ATICO', 'BELLA UNION', 'LOMAS', 'QUICACHA'];
            reUseForProvincias();
        break;
        case 'CASTILLA':
            var arrayCiudades = ['Distrito', 'ANDAGUA', 'CHOCO', 'PAMPACOLCA', 'TIPAN', 'VIRACO'];
            reUseForProvincias();
        break;
        case 'CAYLLOMA':
            var arrayCiudades = ['Distrito', 'CALLALLI', 'COPORAQUE', 'HUAMBO', 'HUANCA', 'LARI', 'LLUTA', 'MACA', 'MADRIGAL', 'SAN ANTONIO DE CHUCA', 'SIBAYO', 'TAPAY', 'TISCO', 'TUTI', 'YANQUE'];
            reUseForProvincias();
        break;
        case 'CONDESUYOS':
            var arrayCiudades = ['Distrito', 'ANDARAY', 'CHICHAS', 'IRAY'];
            reUseForProvincias();
        break;
        case 'ISLAY':
            var arrayCiudades = ['Distrito', 'DEAN VALDIVIA', 'ISLAY'];
            reUseForProvincias();
        break;
        case 'LA UNION':
            var arrayCiudades = ['Distrito', 'PAMPAMARCA', 'PUYCA', 'SAYLA', 'TAURIA', 'TOMEPAMPA'];
            reUseForProvincias();
        break;
        case 'HUAMANGA':
            var arrayCiudades = ['Distrito', 'AYACUCHO', 'CHIARA', 'PACAYCASA', 'QUINUA', 'SAN JOSE DE TICLLAS', 'SANTIAGO DE PISCHA', 'SOCOS', 'TAMBILLO', 'VINCHOS', 'ANDRES AVELINO CACERES DORREGARAY'];
            reUseForProvincias();
        break;
        case 'CANGALLO':
            var arrayCiudades = ['Distrito', 'CHUSCHI', 'LOS MOROCHUCOS', 'MARIA PARADO DE BELLIDO', 'PARAS', 'TOTOS'];
            reUseForProvincias();
        break;
        case 'HUANCA SANCOS':
            var arrayCiudades = ['Distrito', 'SANCOS', 'SANTIAGO DE LUCANAMARCA'];
            reUseForProvincias();
        break;
        case 'HUANTA':
            var arrayCiudades = ['Distrito', 'AYAHUANCO', 'HUAMANGUILLA', 'IGUAIN', 'LURICOCHA', 'SIVIA', 'CANAYRE', 'UCHURACCAY'];
            reUseForProvincias();
        break;
        case 'LA MAR':
            var arrayCiudades = ['Distrito', 'SAN MIGUEL', 'AYNA', 'CHUNGUI', 'LUIS CARRANZA', 'TAMBO', 'SAMUGARI'];
            reUseForProvincias();
        break;
        case 'LUCANAS':
            var arrayCiudades = ['Distrito', 'AUCARA', 'CHAVIÑA', 'HUAC-HUAS', 'LARAMATE', 'LEONCIO PRADO', 'LLAUTA', 'OCAÑA', 'OTOCA', 'SAISA', 'SAN PEDRO', 'SANTA ANA DE HUAYCAHUACHO'];
            reUseForProvincias();
        break;
        case 'PARINACOCHAS':
            var arrayCiudades = ['Distrito', 'CORACORA', 'CHUMPI', 'PUYUSCA'];
            reUseForProvincias();
        break;
        case 'PAUCAR DEL SARA SARA':
            var arrayCiudades = ['Distrito', 'PARARCA', 'SAN JAVIER DE ALPABAMBA'];
            reUseForProvincias();
        break;
        case 'SUCRE':
            var arrayCiudades = ['Distrito', 'QUEROBAMBA', 'CHALCOS', 'PAICO', 'SAN PEDRO DE LARCAY', 'SAN SALVADOR DE QUIJE', 'SANTIAGO DE PAUCARAY'];
            reUseForProvincias();
        break;
        case 'VICTOR FAJARDO':
            var arrayCiudades = ['Distrito', 'HUANCAPI', 'ALCAMENCA', 'ASQUIPATA', 'CANARIA', 'CAYARA', 'COLCA', 'HUAMANQUIQUIA', 'HUANCARAYLLA', 'HUAYA', 'SARHUA', 'VILCANCHOS'];
            reUseForProvincias();
        break;
        case 'VILCAS HUAMAN':
            var arrayCiudades = ['Distrito', 'ACCOMARCA', 'CONCEPCION', 'HUAMBALPA', 'VISCHONGO'];
            reUseForProvincias();
        break;
        case 'CAJAMARCA':
            var arrayCiudades = ['Distrito', 'LLACANORA', 'MATARA', 'NAMORA', 'SAN JUAN', 'CACHACHI', 'CONDEBAMBA', 'SITACOCHA'];
            reUseForProvincias();
        break;
        case 'CELENDIN':
            var arrayCiudades = ['Distrito', 'CHUMUCH', 'HUASMIN', 'JOSE GALVEZ', 'MIGUEL IGLESIAS', 'SOROCHUCO', 'SUCRE', 'LA LIBERTAD DE PALLAN'];
            reUseForProvincias();
        break;
        case 'CHOTA':
            var arrayCiudades = ['Distrito', 'CHOROPAMPA', 'COCHABAMBA', 'CONCHAN', 'LLAMA', 'MIRACOSTA', 'QUEROCOTO', 'SAN JUAN DE LICUPIS', 'TOCMOCHE', 'CHALAMARCA'];
            reUseForProvincias();
        break;
        case 'CONTUMAZA':
            var arrayCiudades = ['Distrito', 'CHILETE', 'CUPISNIQUE', 'GUZMANGO', 'SAN BENITO', 'SANTA CRUZ DE TOLED', 'TANTARICA', 'YONAN'];
            reUseForProvincias();
        break;
        case 'CUTERVO':
            var arrayCiudades = ['Distrito', 'PIMPINGOS', 'SAN ANDRES DE CUTERVO', 'SANTO DOMINGO DE LA CAPILLA', 'SOCOTA', 'TORIBIO CASANOVA'];
            reUseForProvincias();
        break;
        case 'HUALGAYOC':
            var arrayCiudades = ['Distrito', 'BAMBAMARCA'];
            reUseForProvincias();
        break;
        case 'JAEN':
            var arrayCiudades = ['Distrito', 'JAEN', 'BELLAVISTA', 'CHONTALI', 'HUABAL', 'POMAHUACA'];
            reUseForProvincias();
        break;
        case 'SAN IGNACIO':
            var arrayCiudades = ['Distrito', 'SAN IGNACIO', 'CHIRINOS', 'LA COIPA'];
            reUseForProvincias();
        break;
        case 'SAN MARCOS':
            var arrayCiudades = ['Distrito', 'PEDRO GALVEZ', 'CHANCAY', 'EDUARDO VILLANUEVA', 'GREGORIO PITA', 'JOSE SABOGAL'];
            reUseForProvincias();
        break;
        case 'SAN MIGUEL':
            var arrayCiudades = ['Distrito', 'BOLIVAR', 'NANCHOC', 'SAN SILVESTRE DE COCHAN'];
            reUseForProvincias();
        break;
        case 'SAN PABLO':
            var arrayCiudades = ['Distrito', 'SAN PABLO'];
            reUseForProvincias();
        break;
        case 'CALLAO':
            var arrayCiudades = ['Distrito', 'BELLAVISTA', 'CARMEN DE LA LEGUA REYNOSO', 'LA PERLA', 'LA PUNTA', 'VENTANILLA'];
            reUseForProvincias();
        break;
        case 'CUSCO':
            var arrayCiudades = ['Distrito', 'CCORCA', 'POROY', 'SAN JERONIMO', 'SAN SEBASTIAN', 'SANTIAGO', 'SAYLLA', 'WANCHAQ'];
            reUseForProvincias();
        break;
        case 'ACOMAYO':
            var arrayCiudades = ['Distrito', 'ACOMAYO', 'ACOPIA', 'ACOS', 'MOSOC LLACTA', 'POMACANCHI', 'RONDOCAN', 'SANGARARA'];
            reUseForProvincias();
        break;
        case 'ANTA':
            var arrayCiudades = ['Distrito', 'ANTA', 'ANCAHUASI', 'CACHIMAYO', 'CHINCHAYPUJIO', 'LIMATAMBO', 'MOLLEPATA', 'ZURITE'];
            reUseForProvincias();
        break;
        case 'CALCA':
            var arrayCiudades = ['Distrito', 'COYA', 'LARES', 'PISAC', 'SAN SALVADOR', 'TARAY', 'YANATILE'];
            reUseForProvincias();
        break;
        case 'CANAS':
            var arrayCiudades = ['Distrito', 'KUNTURKANKI', 'PAMPAMARCA', 'QUEHUE', 'TUPAC AMARU'];
            reUseForProvincias();
        break;
        case 'CANCHIS':
            var arrayCiudades = ['Distrito', 'SICUANI', 'CHECACUPE', 'COMBAPATA', 'MARANGANI', 'PITUMARCA', 'SAN PABLO', 'SAN PEDRO'];
            reUseForProvincias();
        break;
        case 'CHUMBIVILCAS':
            var arrayCiudades = ['Distrito', 'SANTO TOMAS', 'CAPACMARCA', 'CHAMACA', 'LIVITACA', 'LLUSCO', 'VELILLE'];
            reUseForProvincias();
        break;
        case 'ESPINAR':
            var arrayCiudades = ['Distrito', 'COPORAQUE', 'OCORURO', 'PALLPATA', 'SUYCKUTAMBO'];
            reUseForProvincias();
        break;
        case 'LA CONVENCION':
            var arrayCiudades = ['Distrito', 'ECHARATE', 'HUAYOPATA', 'QUELLOUNO', 'KIMBIRI', 'VILCABAMBA', 'PICHARI'];
            reUseForProvincias();
        break;
        case 'PARURO':
            var arrayCiudades = ['Distrito', 'PARURO', 'CCAPI', 'COLCHA', 'HUANOQUITE', 'OMACHA'];
            reUseForProvincias();
        break;
        case 'PAUCARTAMBO':
            var arrayCiudades = ['Distrito', 'PAUCARTAMBO', 'CAICAY', 'COLQUEPATA', 'HUANCARANI'];
            reUseForProvincias();
        break;
        case 'QUISPICANCHI':
            var arrayCiudades = ['Distrito', 'URCOS', 'ANDAHUAYLILLAS', 'CAMANTI', 'CCARHUAYO', 'CCATCA', 'CUSIPATA', 'HUARO', 'LUCRE', 'OCONGATE', 'OROPESA'];
            reUseForProvincias();
        break;
        case 'URUBAMBA':
            var arrayCiudades = ['Distrito', 'CHINCHERO', 'HUAYLLABAMBA', 'MACHUPICCHU', 'MARAS', 'YUCAY'];
            reUseForProvincias();
        break;
        case 'HUANCAVELICA':
            var arrayCiudades = ['Distrito', 'HUANCAVELICA', 'ACOBAMBILLA', 'CONAYCA', 'LARIA', 'MANTA', 'MARISCAL CACERES', 'MOYA', 'NUEVO OCCORO', 'PALCA', 'PILCHACA', 'VILCA', 'HUANDO'];
            reUseForProvincias();
        break;
        case 'ACOBAMBA':
            var arrayCiudades = ['Distrito', 'ACOBAMBA', 'ANDABAMBA', 'ANTA', 'MARCAS', 'PAUCARA', 'ROSARIO'];
            reUseForProvincias();
        break;
        case 'ANGARAES':
            var arrayCiudades = ['Distrito', 'LIRCAY', 'ANCHONGA', 'CHINCHO', 'CONGALLA', 'HUANCA-HUANCA', 'HUAYLLAY GRANDE', 'SANTO TOMAS DE PATA', 'SECCLLA'];
            reUseForProvincias();
        break;
        case 'CASTROVIRREYNA':
            var arrayCiudades = ['Distrito', 'CASTROVIRREYNA', 'ARMA', 'AURAHUA', 'CAPILLAS', 'CHUPAMARCA', 'SAN JUAN', 'SANTA ANA', 'TANTARA'];
            reUseForProvincias();
        break;
        case 'CHURCAMPA':
            var arrayCiudades = ['Distrito', 'CHINCHIHUASI', 'EL CARMEN', 'LOCROJA', 'PAUCARBAMBA', 'SAN MIGUEL DE MAYOCC', 'PACHAMARCA'];
            reUseForProvincias();
        break;
        case 'HUAYTARA':
            var arrayCiudades = ['Distrito', 'HUAYTARA', 'AYAVI', 'LARAMARCA', 'OCOYO', 'QUERCO', 'QUITO-ARMA', 'SAN FRANCISCO DE SANGAYAICO', 'SAN ISIDRO', 'SANTIAGO DE QUIRAHUARA', 'SANTO DOMINGO DE CAPILLAS', 'TAMBO'];
            reUseForProvincias();
        break;
        case 'TAYACAJA':
            var arrayCiudades = ['Distrito', 'ACOSTAMBO', 'ACRAQUIA', 'AHUAYCHA', 'COLCABAMBA', 'DANIEL HERNANDEZ', 'HUACHOCOLPA', 'HUARIBAMBA', 'SALCABAMBA', 'SALCAHUASI', 'TINTAY PUNCU', 'ANDAYMARCA', 'ROBLE', 'PICHOS', 'SANTIAGO DE TUCUMA'];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
        case '':
            var arrayCiudades = ['Distrito', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            reUseForProvincias();
        break;
    }

    },false
);