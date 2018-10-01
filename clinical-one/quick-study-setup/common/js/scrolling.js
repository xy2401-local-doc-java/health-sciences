var printVersion = GetURLParameter('print');
// Create the virtual CSS classes for full-screen and half screen elements.
if (printVersion) {
  $('link[href="scrolling.css"]').attr('href', 'print.css');
  throw new Error("Print version!");
}

// Global ScrollMagic Controller
var controller = new ScrollMagic.Controller({}); //addIndicators: true

$(function () {
  var resized = function () {
    var windowH = $(window).height();
    $(".full-screen").height(windowH);
    $(".half-screen").height(windowH / 2);
  };
  $(window).resize(resized);
  resized();
});

// Adding popups

var closeDialogWindowOnOverlayClick = function (event) {
  var closeButton = $(".ui-dialog:visible").find(".ui-dialog-titlebar-close");
  closeButton.trigger("click");
}

$(function () {
  $(".popup").hide();
  $(".displayPopup").each(function () {
    var triggerElement = $(this);
    triggerElement.css('cursor', 'pointer');
    var modalElement = $("#" + triggerElement.attr("data-popup"));

    modalElement.dialog({
      modal: true,
      autoOpen: false,
      resizeable: false,
      width: "auto",
      show: {
        effect: "fade",
        duration: 400
      },
      hide: {
        effect: "fade",
        duration: 200
      },
      close: function () {
        $(".ui-widget-overlay").unbind("click", closeDialogWindowOnOverlayClick);
      },
      open: function () {
        $(".ui-widget-overlay").bind("click", closeDialogWindowOnOverlayClick);
      }
    });
    modalElement.on("click", function () {
      modalElement.dialog("close");
    });
    triggerElement.on("click", function () {
      modalElement.dialog("open");
    });
  });

});

function jumpTo(element) {
  closeDialogWindowOnOverlayClick();
  var targetElement = $("#" + element);
  $('html, body').animate({
    scrollTop: targetElement.offset().top - ($(window).height() / 6)
  }, 1000, function () {
    new TimelineMax({})
      .to(targetElement, .5, { scale: 1.1 }, 0)
      .to(targetElement, .5, { scale: 1 }, 2)
      .play();
  });
}

$(function () {
  // Title animation.
  var title_anim = new TimelineMax({})
    
    .from("#scrollDown", 0.5, { opacity: 0 })
    .to("#jumpingArrow", 1, { y: "+=20", ease: Bounce.easeOut, repeat: -1, yoyo: true });
  //Title Scene triggers title animation at top of the page:
  new ScrollMagic.Scene({
    offset: 0
  }).setTween(title_anim).addTo(controller);

  new ScrollMagic.Scene({
    offset: 40
  }).setTween(
    new TweenMax.to("#scrollDown", 1, { opacity: 0 })).addTo(controller);
  //Each of the section elements with the .anim class appears into view.
  $("section.anim").each(function () {
    var anim = new TimelineMax({})
      .from(this, .5, { opacity: 0 })
      .from($(this).find("h2"), .5, { opacity: 0, x: -100 });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1.0
    }).setTween(anim).addTo(controller);
  });

  //Each of the section elements with the .anim class appears into view.
  $("section.anim2").each(function () {
    var anim = new TimelineMax({})
      .from(this, .5, { opacity: 0 })
      .from($(this).find("h2"), .5, { opacity: 0, x: -100 });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.90
    }).setTween(anim).addTo(controller);
  });

  //Animations for each of the .white_box elements that are not .ignore 
  $(".white_box:not(.ignore)").each(function () {
    //Get all highlights
    var whiteBox = $(this);
    var highlights = {};
    whiteBox.find("[data-highlight]").each(function () {
      var elem = $(this);
      if (!highlights[elem.attr("data-highlight")]) {
        highlights[elem.attr("data-highlight")] = [];
      }
      highlights[elem.attr("data-highlight")].push(elem);
    });

    var anim = new TimelineMax({})
      .from(whiteBox.find("h3"), .25, { opacity: 0, x: -100 })
      .from(this, .25, { opacity: 0 });
    whiteBox.find("img.img_right").each(function () {
      anim.from(this, 0.25, { opacity: 0, scale: 2 });
    });


    //Animation when a white_box comes into view
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.90
    }).setTween(anim).addTo(controller);

    //Animate Highlights

    scene.on("enter", function () {
      var highAnim = new TimelineMax({});
      highAnim.delay(2);
      for (var index in highlights) {
        var label = "h" + index;
        highAnim.to(highlights[index], 1, { scale: 1.5, opacity: .2 }, label);
        highAnim.to(highlights[index], .8, { scale: 1, opacity: 1 });
      }
      highAnim.play();
    });
  });

});

function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1];
    }
  }
}
