$(function() {


    $('.button_print').click(function(){
        $('.main').print({
        addGlobalStyles : true,
        mediaPrint : true
        });
    });

    //timeline action
    $('.info_timeline ul li').mouseenter(function(){
        $(this).addClass('curr');
        $(this).parent().addClass('focus');
        var s_id = $(this).attr('id');
        $('.info_content').addClass('over')
        $('.'+s_id).addClass('curr');
    });
    $('.info_timeline ul li').mouseleave(function(){
        $(this).removeClass('curr');
        $(this).parent().removeClass('focus');
        $('.info_content').removeClass('over')
        $('.info_content .desc').removeClass('curr');
    }); 

    //banner
    $('.carousel').carousel({
        interval: false,
        wrap: true
    });

});

function soundhelp(){
    $('.sound_help').show().transition({
        opacity: 1,
        bottom: '-10px'
    },500);
}
function soundhelpClose(){
    $('.sound_help').transition({
        opacity: 0,
        bottom: '-360px'
    },500,function(){
        $(this).hide();
    });
}
function byebye(){
    $('.bye').show().transition({
        opacity: 1
    },1000,function(){
        $('body').addClass('of');
    });
}
