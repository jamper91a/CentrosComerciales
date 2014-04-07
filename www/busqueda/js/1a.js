$(document).ready(function()
{
    /*Funciones autoejecutables*/
    (function()
     {
         //getCiudades();
         autocompletar();
     })();
    
    /*Function que se activa al cambiar un elemento del select ciudades*/
    $("#ciudades").change(function()
    {
        /*Obtengo el elemento seleccionado*/
        var idCiudad=$("#ciudades").val();
        getCentrosComercialesByCiudad(idCiudad);
    });
    /*Funcion que se activa al cambiar un elemento del select centros comerciales*/
    $("#centroscomerciales").change(function()
    {
        /*Obtengo el elemento seleccionado*/
        var idCentroComercial=$("#centroscomerciales").val();
        getCategoriasByCentroComercial(idCentroComercial);
    });
});
/*Se encarga de obtener las ciudades de la base de datos y mostrarlas en un select*/
function getCiudades()
{
    var url="";
    var datos={
    };
    var xml=ajax(url,datos);
    $("",xml).each(function()
    {
        var valor,texto;
        
        var html="<option value='"+valor+"'>"+texto+"</option>";
        $("#ciudades").append(html);
    });
}

function getCentrosComercialesByCiudad(idCiudad)
{
    log("busquedaTienda","getCentrosComercialesByCiudad","idCiudad: "+idCiudad);
    var url="";
    var datos={
        idCiudad:idCiudad
    };
    var xml=ajax(url,datos);
    $("",xml).each(function()
    {
        var valor,texto;
        
        var html="<option value='"+valor+"'>"+texto+"</option>";
        $("#centroscomerciales").append(html);
    });
}
function getCategoriasByCentroComercial(idCentroComercial)
{
    log("busquedaTienda","getCategoriasByCentroComercial","idCentroComercial: "+idCentroComercial);
    var url="";
    var datos={
        idCentroComercial:idCentroComercial
    };
    var xml=ajax(url,datos);
    $("",xml).each(function()
    {
        var valor,texto;
        
        var html="<option value='"+valor+"'>"+texto+"</option>";
        $("#categorias").append(html);
    });
}
/*Esta funcion va  a la vista 2a y le envia los parametros necesarios*/
function goTo2a()
{
    //Obtengo las variables a enviar
    var idCiudad,idCentroComercial,idCategoria
    idCiudad=$("#ciudades").val();
    idCentroComercial=$("#centroscomerciales").val();
    idCategoria= $("#categorias").val();
    
    //Redirijo
    $(location).attr("href","2a.html?idCiudad="+idCiudad+"&idCentroComercial="+idCentroComercial+"&idCategoria="+idCategoria);
}
/*Esta funcion se encarga de obtener los nombre de los locales para que se pueda ver la funcion de autocompletar*/
function autocompletar()
{
    var locales=[];
    locales.push("McDonals");
    locales.push("El Corral");
    locales.push("Exito");
    var url="";
    var datos={
        idCentroComercial:idCentroComercial
    };
    var xml=ajax(url,datos);
    $("",xml).each(function()
    {
        var texto;
        locales.push(texto);
    });
    
    
    $( "#locales" ).autocomplete({
    source: locales
    });
}
            