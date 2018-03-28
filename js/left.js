
$(function(){

    $.ajax({
        type:"get",
        url: '../mock/list.json',
        success:function(data){
            console.log("data",data);
        }
    })
    var some=Array.from($(".conent").children());
    if(some.length>=5){
        
    }
    console.log("some",some);

    //实现滚动
    $('.myscroll').myScroll({
        speed:50, //数值越大，速度越慢
        rowHeight: 26 //li的高度
    });
    //状态颜色
    console.log($(".myscroll span"));
    if($(".myscroll span").text()==11){
        $(".myscroll span").addClass("red");
    }else{
        $(".myscroll span").addClass("yellow");
    }
})