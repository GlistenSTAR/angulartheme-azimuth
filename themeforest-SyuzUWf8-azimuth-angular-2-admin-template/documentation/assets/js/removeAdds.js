
$( document ).ready(function() {
       $('a[href="http://somee.com"]').each(function() {  
       $(this).parent('center').remove();    
    });


setTimeout(function(){
  
  $("div[style='height: 65px;']").remove();
  $("div[style='opacity: 0.9; z-index: 2147483647; position: fixed; left: 0px; bottom: 0px; height: 65px; right: 0px; display: block; width: 100%; background-color: #202020; margin: 0px; padding: 0px;']").remove();

     $("div[style='width: 100%; color: White; font-family: \"Helvetica Neue\", \"Lucida Grande\", \"Segoe UI\", Arial, Helvetica, Verdana, sans-serif; font-size: 11pt;']").remove();

      $("div[style='margin-right: auto; margin-left: auto; display: table;  padding:9px; font-size:13pt;']").remove();

    $("div[style='margin-right: auto; margin-left: auto; display: table; font-size: 9pt; ']").remove();

    $("div[onmouseover='S_ssac();']").remove();


}, 1000);



});