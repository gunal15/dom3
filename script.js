var table=document.createElement("table");
table.setAttribute("class","table");

var thead=document.createElement("thead");
thead.setAttribute("class","thead-dark");


var tr=document.createElement("tr");

var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="First";

var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Middle";

var th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="Last";

tr.append(th1,th2,th3);
thead.append(tr);
table.append(thead);

document.body.append(table);

var tbody=document.createElement("tbody");
tbody.setAttribute("class","tbody");

var tr1=document.createElement("tr");

var td1=document.createElement("td");
td1.innerHTML="Mark";
var td2=document.createElement("td");
td2.innerHTML="Otto";
var td3=document.createElement("td");
td3.innerHTML="Gunal";



tr1.append(td1,td2,td3);
tbody.append(tr1);
table.append(tbody);

document.body.append(table);




