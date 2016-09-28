$(document).ready(function(){
  

   $('.btn').click(function(){
        $.ajax({
            type:"GET",
            url:'./mobile-admin_ko.js',
            success:function(data){


                var _data = {
                  'addr' : data
                };
                console.log(_data['window.$mobileAdmin']);
            }
        })
    });
                  
});
