let sections = document.querySelectorAll('section');


document.addEventListener('scroll', (e) => {

  var scrollPostion = document.documentElement.scrollTop;
  
  sections.forEach(section => {
    if ( scrollPostion >= section.offsetTop -  section.offsetHeight * .10 && 
      scrollPostion < section.offsetTop + section.offsetHeight * .10) {
        
        let currentId = section.attributes.id.value;
        removeActiveClass();
        addActiveClass(currentId);
      }
  })

})
let removeActiveClass = function () {

  document.querySelectorAll('.nav-item .nav-link').forEach(link => {

    link.classList.remove("active");
  })
};
let addActiveClass = function (id) {
  let selector = `.nav-item a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};


new Glide('.glide',{
  type:'carousel',
  perView: 5,
  focusAt: 'center',
  gap: 30,
  autoplay: 2000,
  controls: 'center',
  breakpoints: {
    1200: {
      perView: 4
    },
    992: {
      perView: 3
    },
    768: {
      perView: 2
    },
    576: {
      perView: 2,
      gap: 30,
    }
  }
}).mount()

new Glide('.our-team',{
  type:'carousel',
  perView: 3,
  gap: 30,
  breakpoints: {
    1200: {
      perView: 3
    },
    992: {
      perView: 2
    },
    768: {
      perView: 1
    },
    576: {
      perView: 1
    }
  }
}).mount()

new Glide('.our-blog',{
  type:'carousel',
  perView: 2,
  gap: 20,
  breakpoints: {
    1200: {
      perView: 2,
      gap: 20,
    },
    992: {
      perView: 2,
      gap: 20,
    },
    768: {
      perView: 1,
      gap: 20,
    },
    576: {
      perView: 1
    }
  }
}).mount()

new Glide('.our-price',{
  type:'carousel',
  perView: 3,
  gap: 30,
  breakpoints: {
    1200: {
      perView: 3
    },
    992: {
      perView: 2
    },
    768: {
      perView: 1
    },
    576: {
      perView: 1
    }
  }
}).mount()

new Glide('.our-testmonial',{
  type:'carousel',
  perView: 1,
  focusAt: 'center',
  autoplay: 3000,
  breakpoints: {
    1200: {
      perView: 1
    },
    992: {
      perView: 1
    },
    768: {
      perView: 1
    },
    576: {
      perView: 1
    }
  }
}).mount()

const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} );
