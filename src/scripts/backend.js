import "parsleyjs";

$(function () {
  teamFilter();
  libraryFilter();
  eventFilter();
  bafFilter();
  faqFilter();
  publicFilter();
  showMore();
});

function showMore() {
  $(document).on("click", "[data-type=show_more_click]", function (e) {
    let thisObj = $(this),
      path = window.location.pathname,
      pathArr = path.split("/"),
      url = thisObj.attr("data-url"),
      tags = thisObj.attr("data-tags"),
      container = thisObj.parents("[data-type-container=main-items-container]"),
      itemsContainer = container.find("[data-container=items]");

    console.log("show more");

    if (tags) {
      tags = JSON.parse(tags);
    }

    if (url) {
      thisObj.remove();

      $.ajax({
        method: "POST",
        url: url,
        data: {
          ajax: 1,
          tags: tags,
        },
      }).done(function (r) {
        let responsePageNav = $(r).find("[data-type=show_more_click]"),
          itemsResponse = $(r).find("[data-type=item]");

        if (pathArr[2] == "library") {
          let itemsContainerLib = $(document).find("[data-container=items]");

          console.log(itemsContainerLib);
          console.log($(r));

          itemsContainerLib.append($(r));
          if (responsePageNav) {
            itemsContainerLib.after(responsePageNav);
          }
        } else if (pathArr[2] == "events") {
          let itemsContainerEv = $(document).find("[data-container=items]");

          console.log(itemsContainerEv);
          console.log($(r));

          itemsContainerEv.append($(r));
          if (responsePageNav) {
            itemsContainerEv.after(responsePageNav);
          }
        } else {
          itemsContainer.append(itemsResponse);
        }

        if (responsePageNav) {
          itemsContainer.after(responsePageNav);
        }

        window.scroller.update();
      });
    }
  });
}

function teamFilter() {
  console.log("teamFilter");
  $("[data-type=js-team-filter-tag]").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");

    ajaxTeamList();
  });

  $("[data-type=js-team-filter-clear]").on("click", function (e) {
    e.preventDefault();

    $("[data-type=js-team-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      }
    });

    ajaxTeamList();
  });

  function ajaxTeamList() {
    let tags = [],
      teamList = $("[data-type=js-team-list]");

    $("[data-type=js-team-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        tags[tags.length] = $(this).attr("data-id");
      }
    });

    console.log(tags);

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        tags: tags,
      },
    }).done(function (a) {
      teamList.html(a);
    });
  }
}

function eventFilter() {
  // state (список id тэгов (data-id)) - здесь актуальная информация по текущим выбранных тэгам фильтра
  let state = [];

  // обработка клика по тэгу/сбросу (делегирование от window)
  $(window).on("click", (event) => {
    if (
      $(event.target).closest("[data-type=js-event-filter-tag]").length !== 0
    ) {
      const tag = $(event.target).closest("[data-type=js-event-filter-tag]");
      const tag_id = tag.data("id");

      if (inState(tag_id)) {
        state = state.filter((id) => id !== tag_id);

        $(`[data-type=js-event-filter-tag][data-id="${tag_id}"]`).removeClass(
          "active"
        );
      } else {
        state.push(tag_id);

        $(`[data-type=js-event-filter-tag][data-id="${tag_id}"]`).addClass(
          "active"
        );
      }

      ajaxEvent();
    } else if (
      $(event.target).closest("[data-type=js-event-filter-clear]").length !== 0
    ) {
      state = [];

      $("[data-type=js-event-filter-tag]").removeClass("active");

      ajaxEvent();
    }
  });

  // отправка state -> получение, обновление labraryList
  function ajaxEvent() {
    let eventList = $("[data-type=js-event-list]");

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        tags: state,
      },
    }).done(function (a) {
      eventList.html(a);
    });
  }

  // проверка: id в state?
  function inState(id) {
    for (let i = 0; i < state.length; i++) {
      if (state[i] === id) return true;
    }

    return false;
  }
}

function libraryFilter() {
  // state (список id тэгов (data-id)) - здесь актуальная информация по текущим выбранных тэгам фильтра
  let state = [];

  // обработка клика по тэгу/сбросу (делегирование от window)
  $(window).on("click", (event) => {
    if (
      $(event.target).closest("[data-type=js-library-filter-tag]").length !== 0
    ) {
      const tag = $(event.target).closest("[data-type=js-library-filter-tag]");
      const tag_id = tag.data("id");

      if (inState(tag_id)) {
        state = state.filter((id) => id !== tag_id);

        $(`[data-type=js-library-filter-tag][data-id="${tag_id}"]`).removeClass(
          "active"
        );
      } else {
        state.push(tag_id);

        $(`[data-type=js-library-filter-tag][data-id="${tag_id}"]`).addClass(
          "active"
        );
      }

      ajaxLib();
    } else if (
      $(event.target).closest("[data-type=js-library-filter-clear]").length !==
      0
    ) {
      state = [];

      $("[data-type=js-library-filter-tag]").removeClass("active");

      ajaxLib();
    }
  });

  // отправка state -> получение, обновление labraryList
  function ajaxLib() {
    let libraryList = $("[data-type=js-library-list]");

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        tags: state,
      },
    }).done(function (a) {
      libraryList.html(a);
    });
  }

  // проверка: id в state?
  function inState(id) {
    for (let i = 0; i < state.length; i++) {
      if (state[i] === id) return true;
    }

    return false;
  }
}

function bafFilter() {
  console.log("bafFilter");
  $("[data-type=js-baf-filter-tag]").on("click", function (e) {
    e.preventDefault();
    console.log("bafFilter click tag");
    $(this).toggleClass("active");

    ajaxbafList();
  });

  $("[data-type=js-baf-filter-clear]").on("click", function (e) {
    console.log("bafFilter click tag");
    e.preventDefault();

    $("[data-type=js-baf-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      }
    });

    ajaxbafList();
  });

  function ajaxbafList() {
    console.log("bafFilter ajax");
    let tags = [],
      bafList = $("[data-type=js-baf-list]");

    $("[data-type=js-baf-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        tags[tags.length] = $(this).attr("data-id");
      }
    });

    console.log(tags);

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        tags: tags,
      },
    }).done(function (a) {
      bafList.html(a);
    });
  }
}

function faqFilter() {
  console.log("faqFilter");
  $("[data-type=js-faq-filter-tag]").on("click", function (e) {
    e.preventDefault();
    console.log("faqFilter click tag");
    $(this).toggleClass("active");

    ajaxfaqList();
  });

  $("[data-type=js-faq-filter-clear]").on("click", function (e) {
    console.log("faqFilter click tag");
    e.preventDefault();

    $("[data-type=js-faq-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      }
    });

    ajaxfaqList();
  });

  function ajaxfaqList() {
    console.log("faqFilter ajax");
    let tags = [],
      faqList = $("[data-type=js-faq-list]");

    $("[data-type=js-faq-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        tags[tags.length] = $(this).attr("data-id");
      }
    });

    console.log(tags);

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        tags: tags,
      },
    }).done(function (a) {
      faqList.html(a);
    });
  }
}

function publicFilter() {
  console.log("publicFilter");
  $("[data-type=js-public-filter-tag]").on("click", function (e) {
    e.preventDefault();
    console.log("publicFilter click tag");
    $(this).toggleClass("active");

    ajaxpublicList();
  });

  $("[data-type=js-public-filter-clear]").on("click", function (e) {
    console.log("publicFilter click tag");
    e.preventDefault();

    $("[data-type=js-public-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      }
    });

    ajaxpublicList();
  });

  function ajaxpublicList() {
    console.log("publicFilter ajax");
    let tags = [],
      publicList = $("[data-type=js-public-list]");

    $("[data-type=js-public-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        tags[tags.length] = $(this).attr("data-id");
      }
    });

    console.log(tags);

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        tags: tags,
      },
    }).done(function (a) {
      publicList.html(a);
    });
  }
}
