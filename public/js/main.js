console.log('JS loaded!');

// STEP 0: Trigger the LOAD
$(document).ready(function() {
  loadBlabs();
});


function loadBlabs() {

  //  Step 1: Make and INDEX request
  $.ajax({
    method: "GET",
    url:    "/blabs"
  })
  .then(
    function(data) { console.log("Success: ", data); },
    function(err)  { console.log("Failure: ", err); }
  );
}




