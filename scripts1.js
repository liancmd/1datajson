function tampilData(){

    $(document).ready(function() {
        $.getJSON('data.json', function(data){
            $.each(data, function(i, item){
                $('#daftar-barang').append('<div class="col-md-4"><div class="card mb-5"><div class="card-body"><h4 class="card-title">Name: '+item.name+'</h4><h4 class="card-text">Tipe: '+item.type+'</h4><h4 class="card-text">Tags: '+item.tags+'</h4><h4 class="card-text">Purchased: '+item.purchased_at+'</h4><h4 class="card-text">Room id: '+item.placement.room_id+'</h4><h4 class="card-text">Placement: '+item.placement.name+'</h4></div></div></div>')
            })
        })
    })

}

tampilData();



$('.nav-link').on('click',function(){
    $('.nav-link').removeClass('active')
    $(this).addClass('active')

    let kategori = $(this).html();
    $('h1').html(kategori)

    if(kategori == 'Home'){
        tampilData();
        return;
    }

    $.getJSON('data.json', function(data){

        let content ='';

        $.each(data, function(i, item){

            if(item.type == kategori.toLowerCase()){

                content += '<div class="col-md-4"><div class="card mb-5"><div class="card-body"><h4 class="card-title">Name: '+item.name+'</h4><h4 class="card-text">Tipe: '+item.type+'</h4><h4 class="card-text">Tags: '+item.tags+'</h4><h4 class="card-text">Purchased: '+item.purchased_at+'</h4><h4 class="card-text">Room id: '+item.placement.room_id+'</h4><h4 class="card-text">Placement: '+item.placement.name+'</h4></div></div></div>'

                $('#daftar-barang').html(content);

            } else if (item.placement.name == kategori){

                content += '<div class="col-md-4"><div class="card mb-5"><div class="card-body"><h4 class="card-title">Name: '+item.name+'</h4><h4 class="card-text">Tipe: '+item.type+'</h4><h4 class="card-text">Tags: '+item.tags+'</h4><h4 class="card-text">Purchased: '+item.purchased_at+'</h4><h4 class="card-text">Room id: '+item.placement.room_id+'</h4><h4 class="card-text">Placement: '+item.placement.name+'</h4></div></div></div>'

                $('#daftar-barang').html(content);

            } else if (item.tags[2] == kategori.toLowerCase()){

                content += '<div class="col-md-4"><div class="card mb-5"><div class="card-body"><h4 class="card-title">Name: '+item.name+'</h4><h4 class="card-text">Tipe: '+item.type+'</h4><h4 class="card-text">Tags: '+item.tags+'</h4><h4 class="card-text">Purchased: '+item.purchased_at+'</h4><h4 class="card-text">Room id: '+item.placement.room_id+'</h4><h4 class="card-text">Placement: '+item.placement.name+'</h4></div></div></div>'

                $('#daftar-barang').html(content);

            }else if (item.purchased_at == kategori){
                content += '<div class="col-md-4"><div class="card mb-5"><div class="card-body"><h4 class="card-title">Name: '+item.name+'</h4><h4 class="card-text">Tipe: '+item.type+'</h4><h4 class="card-text">Tags: '+item.tags+'</h4><h4 class="card-text">Purchased: '+item.purchased_at+'</h4><h4 class="card-text">Room id: '+item.placement.room_id+'</h4><h4 class="card-text">Placement: '+item.placement.name+'</h4></div></div></div>'

                $('#daftar-barang').html(content);

            }

        })

    
    })
})
