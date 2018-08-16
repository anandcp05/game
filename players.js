$(document).ready(function(){
var playerpoint1;
var playerpointtotal1=0;
var playerpoint2;
var playerpointtotal2=0;
var playerpoint3;
var playerpointtotal3=0;
var playerpoint4;
var playerpointtotal4=0;
var playerpoint5;
var playerpointtotal5=0;
var playerpoint6;
var playerpointtotal6=0;
var playerpoint7;
var playerpointtotal7=0;
var playerpoint8;
var playerpointtotal8=0;
var playerpoint9;
var playerpointtotal9=0;
var rounds=1;
    $("#playerpoint1").change(function(){
        console.log("hello");
	playerpoint1=$("#playerpoint1").val();
	playerpointtotal1=parseInt(playerpointtotal1)+parseInt(playerpoint1);
	$("#playertotalpoint1").val(playerpointtotal1);
	rounds=rounds+1;
        $("#round").val(rounds);
        $("#playerpoint1").val("");
    });
	
     $("#playerpoint2").change(function(){
	playerpoint2=$("#playerpoint2").val();
	playerpointtotal2=parseInt(playerpointtotal2)+parseInt(playerpoint2);
	$("#playertotalpoint2").val(playerpointtotal2);
	$("#playerpoint2").val("");
    });
     $("#playerpoint3").change(function(){
	playerpoint3=$("#playerpoint3").val();
	playerpointtotal3=parseInt(playerpointtotal3)+parseInt(playerpoint3);
	$("#playertotalpoint3").val(playerpointtotal3);
	$("#playerpoint3").val("");
    });
    	
	 $("#playerpoint4").change(function(){
	playerpoint4=$("#playerpoint4").val();
	playerpointtotal4=parseInt(playerpointtotal4)+parseInt(playerpoint4);
	$("#playertotalpoint4").val(playerpointtotal4);
	$("#playerpoint4").val("");
    });
	 $("#playerpoint5").change(function(){
	playerpoint5=$("#playerpoint5").val();
	playerpointtotal5=parseInt(playerpointtotal5)+parseInt(playerpoint5);
	$("#playertotalpoint5").val(playerpointtotal5);
	$("#playerpoint5").val("");
    });
	 $("#playerpoint6").change(function(){
	playerpoint6=$("#playerpoint6").val();
	playerpointtotal6=parseInt(playerpointtotal6)+parseInt(playerpoint6);
	$("#playertotalpoint6").val(playerpointtotal6);
	$("#playerpoint6").val("");
    });
	 $("#playerpoint7").change(function(){
	playerpoint7=$("#playerpoint7").val();
	playerpointtotal7=parseInt(playerpointtotal7)+parseInt(playerpoint7);
	$("#playertotalpoint7").val(playerpointtotal7);
	$("#playerpoint7").val("");
    });
	 $("#playerpoint8").change(function(){
	playerpoint8=$("#playerpoint8").val();
	playerpointtotal8=parseInt(playerpointtotal8)+parseInt(playerpoint8);
	$("#playertotalpoint8").val(playerpointtotal8);
	$("#playerpoint8").val("");
    });
	 $("#playerpoint9").change(function(){
	playerpoint9=$("#playerpoint9").val();
	playerpointtotal9=parseInt(playerpointtotal9)+parseInt(playerpoint9);
	$("#playertotalpoint9").val(playerpointtotal9);
	$("#playerpoint9").val("");
    });

});
