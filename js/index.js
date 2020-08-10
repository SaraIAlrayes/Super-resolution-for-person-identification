// About section
$(".about-title").click(function() {
  // Active class
  $(".about-title").removeClass("active");
  $(this).addClass("active");

  // Active class content
  if ($(this).text() == "Problem statment") {
    $(".problem-statment").css("display", "inline");
    $(".proposed-solution").css("display", "none");
  } else {
    $(".problem-statment").css("display", "none");
    $(".proposed-solution").css("display", "inline");
  }
});

// Network layers
$(".input-layer-container").click(function() {
  $(".input-layer-title").css("display", "inline");
  $(".hidden-layers-title").css("display", "none");
  $(".output-layer-title").css("display", "none");
  $(".input-layer-description").css("display", "inline");
  $(".hidden-layers-description").css("display", "none");
  $(".output-layer-description").css("display", "none");
});

$(".hidden-layers-container").click(function() {
  $(".hidden-layers-title").css("display", "inline");
  $(".input-layer-title").css("display", "none");
  $(".output-layer-title").css("display", "none");
  $(".hidden-layers-description").css("display", "inline");
  $(".input-layer-description").css("display", "none");
  $(".output-layer-description").css("display", "none");
});

$(".output-layer-container").click(function() {
  $(".output-layer-title").css("display", "inline");
  $(".input-layers-title").css("display", "none");
  $(".hidden-layers-title").css("display", "none");
  $(".output-layer-description").css("display", "inline");
  $(".input-layers-description").css("display", "none");
  $(".hidden-layers-description").css("display", "none");
});

// Network section header
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 250,
      "density": {
        "enable": true
      },

    },
    "color": {
      "value": ["#09968c"]
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 1,
        "sync": false
      }
    },
    "shape": {
      "type": "circle"
    },
    "size": {
      "value": 2.5,
      "random": true
    },
    "line_linked": {
      "enable": true
    },
    "move": {
      "enable": true,
      "speed": 2,
      "random": true,
      "direction": "none",
      "straight": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true
      }
    },
    "modes": {
      "push": {
        "particles_nb": 1
      }
    }
  }
});

// Result animation on scroll
var chartFirstTime = true;
$(document).on('scroll', function() {
  var viewport = {
    top: $(window).scrollTop(),
    left: $(window).scrollLeft()
  };
  viewport.right = viewport.left + $(window).width();
  viewport.bottom = viewport.top + $(window).height();
  var bounds = $('.results-container').offset();
  bounds.right = bounds.left + $('.results-container').outerWidth();
  bounds.bottom = bounds.top + $('.results-container').outerHeight();
  if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
    if (chartFirstTime) {
      chartFirstTime = false;
      $(".result-fig-container").css("animation", "donutfade 2s");
      $(".psnr-segment").css("animation", "psnr-chart 4s");
      $(".ssim-segment").css("animation", "ssim-chart 4s");
      $(".reco-segment").css("animation", "reco-chart 4s");
      $(".chart-data").css("animation", "donutfadelong 2s")
    }
  }
});

// Member's email copy
$('.member-email').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(this).text()).select();
  document.execCommand("copy");
  $temp.remove();
	$('<p class="copy-msg">Copied successfully to clipboard!</p>').insertAfter(this).delay(3000).fadeOut();
});
