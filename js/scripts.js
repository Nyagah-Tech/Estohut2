// bussiness logic
var loca;
var houseFeatures=[];
var waterSource=[];
var electSource=[];
var houseftr=[];
var totalHouseftrPrice=0;
var totalElectPrice=0;
var bedroom="";
var electricity=[];
var totalElectPrice=0;
var waterp=[];
var totalWaterPrice=0;


function RentHouse(housefeatures,watersrc,electicitysrc,bedrooms){
    this.hse=housefeatures;
    this.watersrc=watersrc;
    this.elect=electicitysrc;
    this.rooms=bedrooms;
}
var hseFeaturePrice={
    inbuiltKitchenCabinet:2000,
    inbuiltWindrode:2000,
    laundryArea:3000,
    alarmResponse:3500,
    parking:3500,
    servantsQuarters:4000,
    garages:2500,
}
var waterPrice={
    interiorWater:3000,
    exteriorWater:2500,
    thirdPartyDelivery:1500,
    Unavailable:0,
}
var elecPrice={
    tokens:0,
    individualMeter:0,
    sharedMeter:2500,
    unavailable:0,
} 
var roomPrice={
    bedsitter:4000,
    oneBedroom:8000,
    twoBedroom:10000,
    threeBedroom:20000,
    fourBedroom:25000,
    fiveBedroom:35000,
}
// calculating prices
function getBedroomPrice(){
    if(bedroom==="bedsitter"){
        return roomPrice.bedsitter;
    }
    if(bedroom==="oneBedroom"){
        return roomPrice.oneBedroom;
    }
    else if(bedroom==="twoBedroom"){
        return roomPrice.twoBedroom;
    }
    else if(bedroom==="threeBedroom"){
        return roomPrice.threeBedroom;
    }
    else if(bedroom==="fourBedroom"){
        return roomPrice.fourBedroom;
    }
    else{
        return roomPrice.fiveBedroom;
    }
};
function getHouseFtr(){
    houseftr=[];
    totalHouseftrPrice=0;
    for(var i=0; i<houseFeatures.length; i++){
        houseftr.push(hseFeaturePrice[houseFeatures[i]])
    };
    for(var i=0; i<houseftr.length; i++){
       totalHouseftrPrice += houseftr[i];
    };
    return totalHouseftrPrice;
};
function getElectPrice(){
    electricity=[];
    totalElectPrice=0;
    for(var i=0; i<electSource.length; i++){
        electricity.push(elecPrice[electSource[i]])
    };
    for(var i=0; i<electricity.length; i++){
       totalElectPrice += electricity[i];
    }
    return totalElectPrice;
};
function getWaterPrice(){
    waterp=[];
    totalWaterPrice=0;
    for(var i=0; i<waterSource.length; i++){
        waterp.push(waterPrice[waterSource[i]])
    };
    for(var i=0; i<waterp.length; i++){
       totalWaterPrice +=waterp[i];
    }
    return totalWaterPrice;
};
// total rent
function rent(){
    return getBedroomPrice() + getElectPrice() + getWaterPrice() + getHouseFtr()
}
// fecthing inputs
function input(){
   loca=$("#Loc option:selected").val();
    $("input:checkbox[name='house']:checked").each(function(){
    houseFeatures.push($(this).val());
    });
    $("input:checkbox[name='water']:checked").each(function(){
    waterSource.push($(this).val());
    });
    $("input:checkbox[name='elec']:checked").each(function(){
    electSource.push($(this).val());
    });
    bedroom=$("#bed option:selected").val(); 
};
// resets all fields
function reset(){
    $("#Loc option:selected").val("null");
    $("input:checkbox[name='house']").prop('checked',false);
    $("#bed option:selected").val("blank"); 
    $("input:checkbox[name='water']").prop('checked',false);
    $("input:checkbox[name='elec']").prop('checked',false);

}
function contreset(){
    $("input[name='firstname'").val("");
}


// UI LOGIC

$(document).ready(function(){
    
    $("#final").submit(function(event){
        event.preventDefault();
        input();
           
        
    });
    $("#cont").click(function(){
        alert("Your comment has been received.")
    });
    $("#selection").click(function(){
        input();
        if(($("#Loc option:selected").val()==="null") || ($("#bed option:selected").val()==="blank")){
            alert("Please fill the location and number of bedrooms you want.")
        }else{
            $("#implement").append(
            '<ul>' +
            
            '<p><b>House features:</b></p>' +
            '<li>' +
            houseFeatures +
            '</li><br>' +
            '<p><b>Water sources:</b></p>' +
            '<li>' +
            waterSource +
            '</li>' +
            '<p><b>Electricity Sources:</b></p>' +
            '<li>' +
            electSource +
            '</li><br>' +
            '<p><b>Number of bedrooms</b></p>' +
            '<li>' +
            bedroom +
            '</li><br>' +
            '<li>' +
            '<p><b>Total amount = </b></p>' + rent() +
            '</li>' +
            '</ul>'     
        );
        }
       // Where you want to render the map.
var element = document.getElementById('osm-map');// Height has to be set. You can do this in CSS too.
element.style = 'height:300px;';// Create Leaflet map on map element.
var map = L.map(element);// Add OSM tile leayer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);// Target's GPS coordinates.
var target = L.latLng('47.50737', '19.04611');// Set map's center to target with zoom 14.
map.setView(target, 14);// Place a marker on the same location.
L.marker(target).addTo(map);
        
        reset();
    });

    
});
var names;
function calculator(){
    names=document.forms["myform"]["tpp"].value;
    if(names===""){
        alert("please field the fields provided below.")
    }else{
       alert(names + " "+ "your message has been recieved."); 
    }
    
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };


// ui/logic
// $(document).ready(function(){
//     $("#log").click(function(){
//         $("#log").toggle();
//         $("#hide").toggle();     
//     });
//     $("#show1").click(function(){
//         $("#show1").toggle();
//         $(".hide1").toggle();     
//     });
//     $(".house").click(function(){
//         $(".house").toggle();
//         $(".content1").toggle();
//     });
//     $("#submit").click(function(event){
//         event.preventDefault();
//         location=$("#locations option:selected").val();
//         alert(location)
//     });

// });
