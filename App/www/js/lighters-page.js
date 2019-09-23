function add_lighter(){
    app.dialog.prompt('Ingrese la referencia del encendedor', 'Nuevo encendedor', function(reference){
        if(!isNaN(parseInt(reference))){
            console.log("es un número");
        }else{
            app.dialog.alert ('La referencia no debe ser un número', 'Problemas agregando encendedor')
        }
    });
}