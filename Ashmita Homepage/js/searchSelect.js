$("select").each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children("option").length;

  $this.addClass("select-hidden");
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next("div.select-styled");
  $styledSelect.text($this.children("option").eq(0).text());

  var $list = $("<ul />", {
    class: "select-options",
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $("<li />", {
      text: $this.children("option").eq(i).text(),
      rel: $this.children("option").eq(i).val(),
    }).appendTo($list);
  }

  var $listItems = $list.children("li");

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $("div.select-styled.active")
      .not(this)
      .each(function () {
        $(this).removeClass("active").next("ul.select-options").hide();
      });
    $(this).toggleClass("active").next("ul.select-options").toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    $list.hide();
    // console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass("active");
    $list.hide();
  });
});

// fixed search
const stickySearchBtn = document.querySelector(".sticky-search");

const searchForm = document.querySelector(".sticky-form");

const searchBox = document.querySelector(".searchIcon");

const myForm = document.querySelector(".myForm");

searchBox.addEventListener("click", function (e) {
  const click = e.target.closest(".searchIcon");
  console.log(click, e.target);
  if (click.classList.contains("searchIcon")) {
    console.log("hey");
    myForm.classList.toggle("show");
  }
});

let targetSearch;

stickySearchBtn.addEventListener("click", function (e) {
  e.preventDefault();

  targetSearch = e.target.closest(".sticky-search");
  // console.log(targetSearch);
  // console.log(targetSearch.contains("sticky-search"));
  if (targetSearch.classList.contains("sticky-search")) {
    searchForm.classList.toggle("show");
  }
});

document.addEventListener("click", function (e) {
  const click = e.target.closest(".sticky-search");

  // console.log(click);

  if (!click) return searchForm.classList.remove("show");
  searchForm.classList.toggle("show");
});

// another
// fixing navigation overflow
// const navContainer = document.querySelector(".section-nav");
// const check = document.querySelector("#check");
// const navBtn = document.querySelector(".nav-btn");

// function immediateImplement(width) {
//   if (width.matches) {
//     console.log("I am here");
//     navBtn.classList.remove("sticky");
//   }
// }

// const widthTracker = window.matchMedia("(max-width: 1150px)");
// immediateImplement(widthTracker);
// widthTracker.addListener(immediateImplement);

// check.addEventListener("click", function (e) {
//   console.log(check.checked);
//   if (check.checked) {
//     return (navContainer.style.overflow = "visible");
//   }
//   navContainer.style.overflow = "hidden";
// });
