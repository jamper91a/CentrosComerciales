/*Esta pagina se encarga de mostrar informacion de un local en especifico*/
$(document).ready(function()
{
    $(function()
      {
          getBanner(null,"../");
          var parametros=getUrlVars();
          getInfoLocal(parametros["idLocal"]);
      }
     );
    $("#comoLlegar").click(
        function(e)
        {
            redirigir("4a.html");
        }
    );
    $("#promociones").click(
        function(e)
        {
        }
    );
    $("#informacionCentroComercial").click(
        function(e)
        {
        }
    );
    $("#masInformacion").click(
        function(e)
        {
        }
    );
});

function getInfoLocal(idLocal)
{
    var url="";
    var datos={
        idLocal:idLocal
    };
    var xml=ajax(url,datos);
    if(xml!=null)
    {
        $("",xml).each(function()
        {
            var logo,local,piso,seccion,horario,descripcion;

            $("#logo").attr("src",logo);
            $("#local").text(local);
            $("#piso").text(piso);
            $("#seccion").text(seccion);
            $("#horario").text(horario);
            $("#descripcion").text(descripcion);
        });
    }
    
}