
   //   var backend_url = "https://neptune-us-east.cerescloud.io/scream/api/v1";
var backend_url = "http://127.0.0.1:8099/v1";
//var backend_url = "http://13.236.9.55:9000/api/v1";
  //    var token = localStorage.getItem("neptune.token");
var token = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjpmYWxzZSwiYWNjb3VudGlkIjoiOTEyOWM2OTYtYzU4Ni00ZTNjLTkyOWEtZDBlM2E5ZTQ2YTI3IiwiZXhwIjoxNTIyMzE3NzkxLCJpYXQiOjE1MjIyMzEzOTEsIm5hbWUiOiJncmlmZmluX3NyY2IiLCJ1dWlkIjoiOTEyOWM2OTYtYzU4Ni00ZTNjLTkyOWEtZDBlM2E5ZTQ2YTI3In0.QkY_igk84p1c9dV5zHdroiDPucZDJzA3od_gotW7wXHvkXice2zlTKGQzKZxzRg2L3X2CTchWhbVTVWnyol8HYjMkrNSmDs7vj5uQgVK4k8G_WzsmWDshEEtpPc8OeCAtuzh2luSQybcNTOvrpyaVkt6A5rVaCI9ysowp4YTuaf3Scanwyhnp5kPf3Mgey1OjWw2MJSQN1xleGmuT6qb5TzjNAIoyKGkUaEVK5i31sspB-gkuSqKEMmEFrPLuWRQgM05bYEyxyUupzEgtzAvkbKhQeFMrUdbq5XA7u0Ba1Ezxn_LsKHaO10VS-aiGkU94rKU3NCW6386qzb-VLYtXg";
/*      if( token == null|| token == "" || token== "undefined"|| typeof(token) == "undefined" ){
                location.href = "https://neptune-us-east.cerescloud.io/login";
        }
        var decodedtoken = jwt_decode(token);
         if(decodedtoken =="false"||decodedtoken.exp< Date.parse(new Date())/1000){
             location.href = "https://neptune-us-east.cerescloud.io/login";
         }else{
             $("#loggin_name").text(decodedtoken.name);
         }*/

       var auth = "bearer " + token;
       document.getElementById("nav_alert").onclick = function () {
         location.href = "/alert";
       };
       document.getElementById("nav_watch").onclick = function () {
         location.href = "/watch";
       };
       document.getElementById("nav_relay").onclick = function () {
           location.href = "/relay";
       };
       document.getElementById("nav_api").onclick = function () {
           location.href = "/api_check";
       };
       document.getElementById("nav_condition_elasticsearch").onclick = function () {
           location.href = "/condition_elasticsearch";
       };
       document.getElementById("nav_condition_prometheus").onclick = function () {
           location.href = "/condition_prometheus";
       };
       document.getElementById("nav_notification_email").onclick = function () {
           location.href = "/notification_email";
       };
       document.getElementById("nav_notification_webhook").onclick = function () {
           location.href = "/notification_webhook";
       };
       document.getElementById("nav_member").onclick = function () {
           location.href = "/member";
       };
       document.getElementById("nav_datasource").onclick = function () {
           location.href = "/datasource";
       };
       document.getElementById("nav_pagerduty_v1").onclick = function () {
           location.href = "/pagerduty_v1";
       }; 
       document.getElementById("nav_pagerduty_v2").onclick = function () {
           location.href = "/pagerduty_v2";
       }; 

