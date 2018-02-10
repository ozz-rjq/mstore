;(function(){
  var searchBtn = document.querySelector(".search-js");
  var searchInput = document.querySelector("input[name=search]");

  searchBtn.addEventListener("click", function(evt){
    evt.preventDefault();

    if (!searchInput.classList.contains("search-show")){
      searchInput.classList.add("search-show");
    } else{
      searchInput.classList.remove("search-show");
    }
  });
}());
