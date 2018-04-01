
$(document).ready(function() {
  $(".btn").click(function() {
    console.log('Click');
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    var facts = ["Grape fact: The average person eats eight pounds of grapes per year",
    "Veggie fact: The fear of vegetables is called Lachanophobia",
    "Apple fact: There are more than 7,000 varieties of apples grown in the world",
    "Banana fact: Bananas are actually radioactive",
    "Bird fact: Bird's saliva is actually an expensive delicacy",
    "Coco fact: Chocolate is as healthy as fruit",
    "Happy meal fact: McDonald's sells 75 hamburgers every second every day",
    "Tomato fact: Tomatoes are fruit. The confusion arose after the 1890s when the US supreme court named them a vegetable for taxation purposes",
    "Liquid tomato fact: Ketchup was sold in the 1830's as medicine",
    "Cereal fact: Kellogg's Corn Flakes was first introduced to reduce dyspepsia and masturbation",
    "Beef fact: Beef prices usually rise when there is a drought",
    "Coca cola fact: Before 1903, cocaine was one of the ingredient for Coca-Cola",
    "Chicken fact: Chicken contains 266% more fat than it did 40 years ago",
    "Yogurt fact: Yogurt was created by accident after farmers were trying to find a way to store milk",
    "Orange juice fact: Store orange juice is actually made from the by product of oranges",
    "Bread fact: Bread is the most wasted food in the world",
    "Milk fact: Around 5.9 million glasses of milk are poured down the sink every year",
    "Plastic bottle fact: Annual consumption of plastic bottles is set to top half a trillion by 2021 globally",
    "Water fact: Only 3% of the total water covering the earth is freshwater",
    "Potato fact: August 19th is National Potato Day",
    "Potato fact: Potatoes contain 80% of water",
    "Bagel fact: Bagels originate in the Jewish communities of Poland",
    "Ramen fact: The first noodles ever consumed in space were instant ramen noodles",
    "Ramen fact: It would cost you only about US$150 a year if you ate ramen for every meal",
    "Giraffe fact: Giraffe's meat steak can be better than steak or venison",
    "Onion fact: Hold a slice of bread in your mouth to advoid crying while cutting onions",
    "Corn fact: Corn is a member of the grass family",
    "Potato fact: Potatoes were the first food to be grown in space",
    "Broccoli fact: Broccoli was once considered 'exotic' in home gardens",
    "Radish fact: Radishes were paid as 'wages' to the Ancient Egyptian labourers who built the Pyramids",
    "Beet fact: Dying your hair with beets is a great way to add a temporary reddish tint to your strands, without dealing with any chemicals",
    "Candy fact: A dentist invented cotton candy"];
    var str = facts[getRandomInt(31)];
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
