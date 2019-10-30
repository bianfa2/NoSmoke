var achievements = [];

function look_achievements(){    

    for(var i = 0; i < indexLighters; i++){
        $.ajax({
            url: 'http://34.69.242.97:3000/api/achievement/id='+localStorage.getItem(i),
            dataType: "json",
            type: 'GET',
            contentType: "application/jsonp;charset=utf-8",
            crossDomain: true,
            success: function (data) {                   
                if(!achievements.length || data.length < achievements.length){
                    achievements = [...data];       
                    show_achievements();             
                }                
            }
        });
    }

}

function show_achievements(){
    // console.log(achievements);
    document.getElementById('achievements').textContent="";
    for(const k in achievements){
        $('#achievements').append(
          `<li onclick="show_description(${k})">
            <div class="item-content">
              <div class="item-media"><img src="${achievements[k].medalla}" width="40" alt=""></div>
              <div class="item-inner">
                <div class="item-title">${achievements[k].nombre}</div>
              </div>
            </div>
          </li>`);
    }
}

function show_description(item){
    app.dialog.alert(achievements[item].descripcion,achievements[item].nombre);
}