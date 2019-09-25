function add_lighter(){
    app.dialog.prompt('Ingrese la referencia del encendedor', 'Nuevo encendedor', function(reference){
        if(!isNaN(parseInt(reference))){
            
            $.ajax({
                url: 'http://192.168.0.12:3000/api/lighter/id=123',
                dataType: "json",
                type: 'GET',
                contentType: "application/jsonp;charset=utf-8",
                crossDomain: true,
                success: function (data) {
                    console.log(data)
                }
            });

        }else{
            app.dialog.alert ('La referencia no debe ser un número', 'Problemas agregando encendedor')
        }
    });
}