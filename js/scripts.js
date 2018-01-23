function Movie(title, times, price, bg) {
  this.title = title;
  this.times = times;
  this.price = price;
  this.bg = bg
}

function getMovies() {
  var movies = Array(0);
  movies.push(new Movie("Finding Nemo", ['3:00pm', '7:00pm', '9:00pm'],10, "nemo.jpg"));
  movies.push(new Movie("School of Rock", ['4:00pm', '8:00', '10:00PM'],10, "school-of-rock.jpg"));
  movies.push(new Movie("Twilight", ['5:00pm', '9:00', '11:00'],10, "twilight.jpg"));
  movies.push(new Movie("Monster House", ["3:00PM", "5:00PM", "8:00PM"],10,"monsterhouse.jpg"));
  return movies;
}


function makeHTML(movies) {
  movies.forEach(function(movie, index) {
    //<option value="rock"> School of Rock </option>
    $("#list").append("<option value='" + index + "'>" + movie.title + "</option>");
  });
}
var movies = getMovies();

$(document).ready(function() {

  makeHTML(movies);

  $(".info").submit(function(event) {
    event.preventDefault();

    var index = parseInt($("#list").val());
    var times = movies[index].times;
    $(".times").text("");
    times.forEach(function(time) {
      $(".times").append("<li>" + time + "</li>")
    });
    var age = $("input:radio[name=age]:checked").val();
    var price = movies[index].price;
    if (age === "under13") price -= 2;
    else if (age === "senior") price -= 4;
    $("#priceAge").append("<p>$" + price + "</p>");
    $('body').css('background-image', 'url(img/' + movies[index].bg + ')');
  });
});
