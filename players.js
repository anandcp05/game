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

var playername1;
var playername2;
var playername3;
var playername4;
var playername5;
var playername6;
var playername7;
var playername8;
var playername9;



    $("#playerpoint1").change(function(){
        console.log("hello111");
	playername1=$("#playername1").val();
	playerpoint1=$("#playerpoint1").val();
	playerpointtotal1=parseInt(playerpointtotal1)+parseInt(playerpoint1);
	$("#playertotalpoint1").val(playerpointtotal1);
	rounds=rounds+1;
        $("#round").val(rounds);
        
	$("#tblplayername1").html(playername1);
	$("#trplayerpoint1").append('<td>'+parseInt(playerpoint1)+'</td>');
	$("#playerpoint1").val("");

    });
	
     $("#playerpoint2").change(function(){
	playername2=$("#playername2").val();
	playerpoint2=$("#playerpoint2").val();
	playerpointtotal2=parseInt(playerpointtotal2)+parseInt(playerpoint2);
	$("#playertotalpoint2").val(playerpointtotal2);
	$("#tblplayername2").html(playername2);
	$("#trplayerpoint2").append('<td>'+parseInt(playerpoint2)+'</td>');
	$("#playerpoint2").val("");
    });
     $("#playerpoint3").change(function(){
	playername3=$("#playername3").val();
	playerpoint3=$("#playerpoint3").val();
	playerpointtotal3=parseInt(playerpointtotal3)+parseInt(playerpoint3);
	$("#playertotalpoint3").val(playerpointtotal3);
	$("#tblplayername3").html(playername3);
	$("#trplayerpoint3").append('<td>'+parseInt(playerpoint3)+'</td>');
	$("#playerpoint3").val("");
    });
    	
	 $("#playerpoint4").change(function(){
	playername4=$("#playername4").val();
	playerpoint4=$("#playerpoint4").val();
	playerpointtotal4=parseInt(playerpointtotal4)+parseInt(playerpoint4);
	$("#playertotalpoint4").val(playerpointtotal4);
	$("#tblplayername4").html(playername4);
	$("#trplayerpoint4").append('<td>'+parseInt(playerpoint4)+'</td>');
	$("#playerpoint4").val("");
    });
	 $("#playerpoint5").change(function(){
	playername5=$("#playername5").val();
	playerpoint5=$("#playerpoint5").val();
	playerpointtotal5=parseInt(playerpointtotal5)+parseInt(playerpoint5);
	$("#playertotalpoint5").val(playerpointtotal5);
	$("#tblplayername5").html(playername5);
	$("#trplayerpoint5").append('<td>'+parseInt(playerpoint5)+'</td>');
	$("#playerpoint5").val("");
    });
	 $("#playerpoint6").change(function(){
	playername6=$("#playername6").val();
	playerpoint6=$("#playerpoint6").val();
	playerpointtotal6=parseInt(playerpointtotal6)+parseInt(playerpoint6);
	$("#playertotalpoint6").val(playerpointtotal6);
	$("#tblplayername6").html(playername6);
	$("#trplayerpoint6").append('<td>'+parseInt(playerpoint6)+'</td>');
	$("#playerpoint6").val("");
    });
	 $("#playerpoint7").change(function(){
	playername7=$("#playername7").val();
	playerpoint7=$("#playerpoint7").val();
	playerpointtotal7=parseInt(playerpointtotal7)+parseInt(playerpoint7);
	$("#playertotalpoint7").val(playerpointtotal7);
	$("#tblplayername7").html(playername7);
	$("#trplayerpoint7").append('<td>'+parseInt(playerpoint7)+'</td>');
	$("#playerpoint7").val("");
    });
	 $("#playerpoint8").change(function(){
	playername8=$("#playername8").val();
	playerpoint8=$("#playerpoint8").val();
	playerpointtotal8=parseInt(playerpointtotal8)+parseInt(playerpoint8);
	$("#playertotalpoint8").val(playerpointtotal8);
	$("#tblplayername8").html(playername8);
	$("#trplayerpoint8").append('<td>'+parseInt(playerpoint8)+'</td>');
	$("#playerpoint8").val("");
    });
	 $("#playerpoint9").change(function(){
	playername9=$("#playername9").val();
	playerpoint9=$("#playerpoint9").val();
	playerpointtotal9=parseInt(playerpointtotal9)+parseInt(playerpoint9);
	$("#playertotalpoint9").val(playerpointtotal9);
	$("#tblplayername9").html(playername9);
	$("#trplayerpoint9").append('<td>'+parseInt(playerpoint9)+'</td>');
	$("#playerpoint9").val("");
    });

});
