
  let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      // document ready
    }
  }, 100);

  // accordion view 
var accordions = bulmaAccordion.attach(); // accordions now contains an array of all Accordion instances

var accordions = document.getElementsByClassName("accordion"); 

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        var content = this.nextElementSibling;

        if(content.style.maxHeight) {
            //accordion is open, we need to close it
            content.style.maxHeight = null;
        } else {
            //accordion is closed 
            content.style.maxHeight = content.scrollHeight + "px";
            }
    }
}



// let queryData;
// let ready = false;

// $( document ).ready(function() {
//   console.log( "ready!" );
// });
// //query ncov-19.us api
// $.ajax({
//     url: "https://covid19-us-api.herokuapp.com/county",
//     method: "GET"
// }).then(function (response) {
//     queryData = response;
//     console.log(queryData);
//     getReady();
// })

// //display function for ajax query of Covid data
// function displayCounty(e) {

//     //locate info
//     const countyName = $(this).attr("id").replace(/_/g, " ").replace("1", "");
//     console.log(countyName);
//     const countyData = findCounty(countyName);
//     console.log(countyData);

//     //display info
//     const info = $("#info");
//     info.empty();
//     info.css("display", "block");

//     const name = $(`<h5>${countyData.county_name} County</h5>`);
//     info.append(name);
//     info.append($("<hr>"));

//     const confirmed = $(`<p>Confirmed cases: ${countyData.confirmed}</p>`);
//     info.append(confirmed);

//     const fatality = $(`<p>Fatality rate: ${countyData.fatality_rate}</p>`);
//     info.append(fatality);
// }

// //search queryData.message for a particular county
// function findCounty(needle) {
//     for (let item of queryData.message) {
//         if (item.county_name === needle) {
//             return item
//         }
//     }
// };

// //remove loading gif when ajax query is returned
// function getReady() {
//     ready = true;
//     $("#loading").css("display", "none");
//     $("path").on("click", displayCounty);
//     $("polyline").on("click", displayCounty);
//     $("polygon").on("click", displayCounty);

//     $("path").addClass("hover");
//     $("polyline").addClass("hover");
//     $("polygon").addClass("hover");


