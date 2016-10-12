$(document).ready(function(){
  

   $('.btn').click(function(){
       var data = window.$mobileAdmin;
       var str='';
       $.each(data.mainMenuList,function(key, value){
           str+='<li><a href="'+value["url"]+'" target="'+value["target"]+'" ><span>'+value["name"]+'</span></a></li>';
       });
       $('.navi').html(str);
    });

});
