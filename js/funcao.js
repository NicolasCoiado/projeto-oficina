$(function(){
    $.getJSON("js/automoveis.json", function(data){

        document.getElementById("click").onclick = function filtrar(){

        for(var i=0; i< data['automoveis'].length; i++){

                var marca = data['automoveis'][i]['MARCA'];
                var nome = data['automoveis'][i]['CARRO'];
                var select = document.getElementById("filters");
                var valueFilter = select.options[select.selectedIndex].value;
                var input = document.getElementById("search").value;
        
                console.log(input)

                $("#TableData").append("<tr>");
                if(marca == valueFilter){
                    if(nome == input){
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['MARCA']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CARRO']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CAMBER_DIANTEIRO_MIN']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CAMBER_DIANTEIRO_MAX']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CASTER_DIANTEIRO_MIN']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CASTER_DIANTEIRO_MAX']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CONVERGENCIA_DIANTEIRO_MIN']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CONVERGENCIA_DIANTEIRO_MAX']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CAMBER_TRASEIRA_MIN']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CAMBER_TRASEIRA_MAX']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN']+"</td>");
                        $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX']+"</td>");
                    }else{
                        if(input == ''){
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['MARCA']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CARRO']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CAMBER_DIANTEIRO_MIN']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CAMBER_DIANTEIRO_MAX']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CASTER_DIANTEIRO_MIN']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CASTER_DIANTEIRO_MAX']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CONVERGENCIA_DIANTEIRO_MIN']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CONVERGENCIA_DIANTEIRO_MAX']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CAMBER_TRASEIRA_MIN']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CAMBER_TRASEIRA_MAX']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN']+"</td>");
                            $("#TableData").append("<td scope='col'>"+data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX']+"</td>");
                        }else{

                        }
                    }
                }
                $("#TableData").append("</tr>");
            }
        }   

    });
});
