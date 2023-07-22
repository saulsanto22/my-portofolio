//event saat link di klik
$('.page-scroll').on('click', function(e){

    //ambil isi hreff 
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 100         
    }, 1000, easeInOutExpo);

    e.preventDefault();

});