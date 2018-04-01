
$(document).ready(function() {
  $(".btn").click(function() {
    console.log('Click');
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    var facts = ["The average person eats eight pounds of grapes per year",
    "The fear of vegetables is called Lachanophobia",
    "There are more than 7,000 varieties of apples grown in the world",
    "Bananas are actually radioactive",
    "Bird's saliva is actually an expensive delicacy",
    "Chocolate is as healthy as fruit",
    "McDonald's sells 75 hamburgers every second every day",
    "Tomatoes are fruit",
    "Ketchup was sold in the 1830's as medicine",
    "Kellogg's Corn Flakes was first indtroced to reduce dyspepsia and masturbation"];
    var str = "Fun fact: " + facts[getRandomInt(9)];
    var result = str.fontsize(7);
    document.getElementById("line").innerHTML = result;
    //document.getElementById("demo").innerHTML = "YOU CLICKED ME!";




    // $.ajax({
    //         url:"http://localhost:8000/fact",
    //         type: "get",
    //         data: {
    //
    //         },
    //         success: function(response) {
    //           alert("success");
    //         },
    //         failure: function(response) {
    //           alert("failed");
    //         },
    //       });
});
  });
