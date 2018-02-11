/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"using strict";

$("#enterForm").on('click', () =>{
    var dist = $("#val").val();
	alert(dist);
    $.post("http://running-env.us-east-2.elasticbeanstalk.com", {distance:dist}).done(function(data){
            alert("complete");
            alert(data);
    }); 
});

//chart
TESTER = document.getElementById('chart');
Plotly.plot( TESTER, [{
x: [1, 2, 3, 4, 5],
y: [1, 2, 4, 8, 16] }], {
margin: { t: 0 } } );