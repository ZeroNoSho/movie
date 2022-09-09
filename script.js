//awal mula
awal();

//dark and light mode
$("#dark").on("click", function () {
  $("body").toggleClass("dark");
  $(".form-control").toggleClass("dark");
  $(".list").toggleClass("dark");
  $(".modal-content").toggleClass("dark");
  $(".modal-body").toggleClass("dark");
  $(".card").toggleClass("card1");
});

//year sistem
$(".year").on("click", function () {
  $.ajax({
    url: "https://api.themoviedb.org/3/discover/movie?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&sort_by=popularity.desc&year=" + $(this).data("year") + "&with_watch_monetization_types=flatrate",
    success: (r) => {
      const movies4 = r.results;
      let cards4 = "";
      const nama1 = $(this).data("year");
      movies4.forEach((n) => {
        cards4 += showCard(n);
      });
      $(".moviecontainer").html(cards4);
      $(".modal-detail-buttom").on("click", function () {
        $.ajax({
          url: "https://api.themoviedb.org/3/discover/movie?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&sort_by=popularity.desc&year=" + nama1 + "&with_watch_monetization_types=flatrate",
          success: (r) => {
            const modal = r.results;
            let cards1 = "";
            modal.forEach((r, i) => {
              if (modal[i].id == $(this).data("id")) {
                $.ajax({
                  url: "gen.json",
                  success: (r) => {
                    let arr = $(this).data("genre").split(",");

                    r.forEach((e, i) => {
                      if (e.id == arr[0]) {
                        $(".editgen").before(`<li class="list editgen"><strong>Genre: </strong>${e.name_gen}</li>`);
                      }
                    });
                  },
                  error: () => {
                    console.log(e.responseText);
                  },
                });
                cards1 += showModal(r);
              }
            });
            $(".modal-body").html(cards1);
          },
          error: () => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: () => {
      console.log(e.responseText);
    },
  });
});

//popular sistem
$(".popular").on("click", function () {
  $.ajax({
    url: "https://api.themoviedb.org/3/" + $(this).data("popular") + "/popular?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&language=en-US&page=1",
    success: (r) => {
      const movies = r.results;
      let cards = "";
      const nama3 = $(this).data("popular");
      movies.forEach((n) => {
        cards += showCard(n);
      });
      $(".moviecontainer").html(cards);
      $(".modal-detail-buttom").on("click", function () {
        $.ajax({
          url: "https://api.themoviedb.org/3/" + nama3 + "/popular?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&language=en-US&page=1",
          success: (r) => {
            const modal = r.results;
            let cards1 = "";
            modal.forEach((r, i) => {
              if (modal[i].id == $(this).data("id")) {
                $.ajax({
                  url: "gen.json",
                  success: (r) => {
                    let arr = $(this).data("genre").split(",");

                    r.forEach((e, i) => {
                      if (e.id == arr[0]) {
                        $(".editgen").before(`<li class="list editgen"><strong>Genre: </strong>${e.name_gen}</li>`);
                      }
                    });
                  },
                  error: () => {
                    console.log(e.responseText);
                  },
                });
                cards1 += showModal(r);
              }
            });
            $(".modal-body").html(cards1);
          },
          error: () => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: () => {
      console.log(e.responseText);
    },
  });
});

//negara sistem
$(".negara").on("click", function () {
  $.ajax({
    url:
      "https://api.themoviedb.org/3/discover/movie?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=" +
      $(this).data("negara") +
      "&with_watch_monetization_types=flatrate",
    success: (r) => {
      const movies5 = r.results;
      let cards5 = "";
      const nama5 = $(this).data("negara");
      movies5.forEach((n) => {
        cards5 += showCard(n);
      });
      $(".moviecontainer").html(cards5);
      $(".modal-detail-buttom").on("click", function () {
        $.ajax({
          url:
            "https://api.themoviedb.org/3/discover/movie?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=" +
            nama5 +
            "&with_watch_monetization_types=flatrate",
          success: (r) => {
            const modal5 = r.results;
            let cards5 = "";
            modal5.forEach((r, i) => {
              if (modal5[i].id == $(this).data("id")) {
                $.ajax({
                  url: "gen.json",
                  success: (r) => {
                    let arr = $(this).data("genre").split(",");
                    r.forEach((e) => {
                      if (e.id == arr[0]) {
                        $(".editgen").before(`<li class="list editgen"><strong>Genre: </strong>${e.name_gen}</li>`);
                      }
                    });
                  },
                  error: () => {
                    console.log(e.responseText);
                  },
                });
                cards5 += showModal(r);
              }
            });
            $(".modal-body").html(cards5);
          },
          error: () => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: () => {
      console.log(e.responseText);
    },
  });
});

//gendre sistem
$(".Genreli").on("click", function () {
  $.ajax({
    url: "gen.json",
    success: (r) => {
      r.forEach((e) => {
        if (e.id == $(this).data("genre1")) {
          $.ajax({
            url: "https://api.themoviedb.org/3/discover/movie?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&sort_by=popularity.desc&with_genres=" + $(this).data("genre1") + "&with_watch_monetization_types=flatrate",
            success: (r) => {
              const movies3 = r.results;
              let cards3 = "";
              const nama = $(this).data("genre1");
              movies3.forEach((n) => {
                cards3 += showCard(n);
              });
              $(".moviecontainer").html(cards3);
              $(".modal-detail-buttom").on("click", function () {
                $.ajax({
                  url: "https://api.themoviedb.org/3/discover/movie?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&sort_by=popularity.desc&with_genres=" + nama + "&with_watch_monetization_types=flatrate",
                  success: (r) => {
                    const modal = r.results;
                    let cards1 = "";
                    modal.forEach((r, i) => {
                      if (modal[i].id == $(this).data("id")) {
                        $.ajax({
                          url: "gen.json",
                          success: (r) => {
                            r.forEach((e) => {
                              if (e.id == nama) {
                                $(".editgen").before(`<li class="list editgen"><strong>Genre: </strong>${e.name_gen}</li>`);
                              }
                            });
                          },
                          error: () => {
                            console.log(e.responseText);
                          },
                        });
                        cards1 += showModal(r);
                      }
                    });
                    $(".modal-body").html(cards1);
                  },
                  error: () => {
                    console.log(e.responseText);
                  },
                });
              });
            },
            error: () => {
              console.log(e.responseText);
            },
          });
        }
      });
    },
    error: () => {
      console.log(e.responseText);
    },
  });
});

//search sistem
$(".search-button").on("click", function () {
  $.ajax({
    url: "https://api.themoviedb.org/3/search/multi?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&query=" + $(".input-keyword").val(),
    success: (r) => {
      const movies = r.results;
      let cards = "";
      movies.forEach((n) => {
        cards += showCard(n);
      });
      $(".moviecontainer").html(cards);
      $(".modal-detail-buttom").on("click", function () {
        $.ajax({
          url: "https://api.themoviedb.org/3/search/multi?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&query=" + $(".input-keyword").val(),
          success: (r) => {
            const modal = r.results;
            let cards1 = "";
            modal.forEach((r, i) => {
              if (modal[i].id == $(this).data("id")) {
                $.ajax({
                  url: "gen.json",
                  success: (r) => {
                    let arr = $(this).data("genre").split(",");
                    r.forEach((e, i) => {
                      if (e.id == arr[0]) {
                        $(".editgen").before(`<li class="list editgen"><strong>Genre: </strong>${e.name_gen}</li>`);
                      }
                    });
                  },
                  error: () => {
                    console.log(e.responseText);
                  },
                });
                cards1 += showModal(r);
              }
            });
            $(".modal-body").html(cards1);
          },
          error: () => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: () => {
      console.log(m.responseText);
    },
  });
});

//home sistem
$(".home").on("click", function () {
  awal();
});

function awal() {
  $.ajax({
    url: "https://api.themoviedb.org/3/discover/movie?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&sort_by=vote_count.desc&page=1&with_watch_monetization_types=flatrate",
    success: (r) => {
      const movie6 = r.results;
      let card6 = "";
      movie6.forEach((e) => {
        card6 += showCard(e);
      });
      $(".moviecontainer").html(card6);
      $(".modal-detail-buttom").on("click", function () {
        $.ajax({
          url: "https://api.themoviedb.org/3/discover/movie?api_key=4c005f372aaa1ec6c34a5dd948ae0e6b&sort_by=vote_count.desc&page=1&with_watch_monetization_types=flatrate",
          success: (r) => {
            const modal = r.results;
            let cards1 = "";
            modal.forEach((r, i) => {
              if (modal[i].id == $(this).data("id")) {
                $.ajax({
                  url: "gen.json",
                  success: (r) => {
                    let arr = $(this).data("genre").split(",");
                    r.forEach((e, i) => {
                      if (e.id == arr[0]) {
                        $(".editgen").before(`<li class="list editgen"><strong>Genre: </strong>${e.name_gen}</li>`);
                      }
                    });
                  },
                  error: () => {
                    console.log(e.responseText);
                  },
                });
                cards1 += showModal(r);
              }
            });
            $(".modal-body").html(cards1);
          },
          error: () => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: () => {
      console.log(e.responseText);
    },
  });
}

function showCard(n) {
  return `<div class="col-md-3 my-3">
  <div class="card">
    <img src="https://image.tmdb.org/t/p/w220_and_h330_face${n.poster_path || n.known_for}" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">${n.original_title || n.name || n.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${n.first_air_date || n.release_date}</h6>
      <a href="#" class="btn btn1 btn-primary modal-detail-buttom" data-id="${n.id}" data-genre="${n.genre_ids}, 17" data-bs-toggle="modal" data-bs-target="#MovieDetailModal">Show Details</a>
    </div>
  </div>
</div>
`;
}

function showModal(r) {
  return `<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face${r.poster_path}" class="img-fluid" alt="" />
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list"><h4>${r.original_title || r.name || r.title}(${r.first_air_date || r.release_date})</h4></li>
        <li class="list editgen"><strong>country: </strong>${r.origin_country || r.original_language}</li>
        <li class="list"><strong>language: </strong>${r.original_language}</li>
        <li class="list"><strong>popularity: </strong>${r.popularity}</li>
        <li class="list"><strong>overview: </strong>${r.overview}</li>
      </ul>
    </div>
  </div>
</div>`;
}
