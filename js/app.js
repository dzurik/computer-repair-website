(function () {
  // Responsive Menu
  const navSlide = () => {
    const navMobile = document.querySelector(".nav-mobile");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    navMobile.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("nav-active");

      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      // Nav Mobile Animation
      navMobile.classList.toggle("toggle");
    });
  };

  navSlide();

  // Menu Scroll fixed

  const navigation = document.getElementById("navigation");
  const placeholder = document.getElementById("navigation-placeholder");
  const navLinks = document.querySelector(".nav-links");
  const navActive = document.querySelector(".nav-active");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navigation.style.position = "fixed";
      placeholder.style.display = "block";
      navigation.style.backgroundColor = "#3c3c3c";
      navLinks.style.backgroundColor = "#3c3c3c";
      navLinks.style.maxHeight = "calc(100vh - 8.5rem)";
    } else {
      navigation.style.position = "relative";
      placeholder.style.display = "none";
      navigation.style.backgroundColor = "#eaeaea";
      navLinks.style.backgroundColor = "#eaeaea";
      navLinks.style.maxHeight = "calc(100vh - 12.5rem)";
    }
  });

  // Under Banner Skewed

  const bannerDownSkewed = () => {
    const skewed = document.querySelector(".underbanner-skewed");

    window.addEventListener("scroll", () => {
      const value = 0 - window.scrollY / 60;
      if (value > -7.5) {
        skewed.style.transform = `skewY(${value}deg)`;
      } else {
        skewed.style.transform = `skewY(-7.5deg)`;
      }
    });
  };

  bannerDownSkewed();

  // About Skewed

  const aboutSkewed = () => {
    const skewed = document.querySelector(".about-skewed");

    window.addEventListener("scroll", () => {
      const value = -65 + window.scrollY / 60;

      if (value > -7.5) {
        skewed.style.transform = `skewY(${value}deg)`;
      } else {
        skewed.style.transform = `skewY(-7.5deg)`;
      }
    });
  };

  aboutSkewed();

  const scrollActiveNav = () => {
    let mainNavLinks = document.querySelectorAll(".nav-link");

    const throttle = (fn, delay) => {
      let last = 0;
      return (...args) => {
        const now = new Date().getTime();
        if (now - last < delay) {
          return;
        }
        last = now;
        return fn(...args);
      };
    };

    window.addEventListener(
      "scroll",
      throttle((e) => {
        let fromTop = window.scrollY;
        mainNavLinks.forEach((link) => {
          let section = document.querySelector(link.hash);

          if (
            section.offsetTop - 100 <= fromTop &&
            section.offsetTop + section.offsetHeight - 100 > fromTop
          ) {
            link.classList.add("current");
          } else {
            link.classList.remove("current");
          }
        });
      }, 100)
    );
  };

  scrollActiveNav();

  // CTA Skewed

  const ctaSkewed = () => {
    const cta = document.querySelector("#cta");

    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY;

      const value = -30 + window.scrollY / 60;

      if (cta.offsetTop - 1200 >= fromTop) {
        cta.style.transform = `skewY(-7.5deg)`;
      } else if (
        cta.offsetTop - (cta.offsetHeight + 400) >= fromTop &&
        cta.offsetTop - 1200 <= fromTop
      ) {
        cta.style.transform = `skewY(${value}deg)`;
      } else if (cta.offsetTop >= fromTop) {
        cta.style.transform = `skewY(0)`;
      } else {
        cta.style.transform = `skewY(0)`;
      }
    });
  };

  ctaSkewed();

  // Scroll Animations

  const scrollAnimations = () => {
    let nav = document.querySelector("#navigation");
    let banner = document.querySelector("#banner");
    let underBanner = document.querySelector("#underbanner");

    let servicesSection = document.querySelector("#service");
    let services = document.querySelector(".services");

    //let sectionCta = document.querySelector('#cta');
    let ctaH2 = document.querySelector("#cta h2");
    let ctaButton = document.querySelector(".cta-btn");

    let sectionOffers = document.querySelector("#offers");
    let offer = document.querySelectorAll(".offer");
    let offerImage = document.querySelector(".offer-image");
    let offerBubble = document.querySelectorAll(".offer-bubble");

    //let sectionAbout = document.querySelector('#about');
    let aboutLeft = document.querySelector(".about-left");
    let aboutRight = document.querySelector(".about-right");

    window.addEventListener("scroll", () => {
      let headerHeight =
        nav.offsetHeight + banner.offsetHeight + underBanner.offsetHeight;

      // Service section animation
      if (services.classList.contains("an-DownUp")) {
      } else if (headerHeight / 1.5 < pageYOffset) {
        services.classList.add("an-DownUp");
      }

      // CTA section animation
      if (
        ctaH2.classList.contains("an-Opacity") &&
        ctaButton.classList.contains("an-RightIn")
      ) {
      } else if (
        headerHeight / 3 + servicesSection.offsetHeight <
        pageYOffset
      ) {
        ctaH2.classList.add("an-Opacity");
        ctaButton.classList.add("an-RightIn");
      }

      // Offer section animation
      if (offerImage.classList.contains("an-RightIn2")) {
      } else if (
        headerHeight / 3 + servicesSection.offsetHeight <
        pageYOffset
      ) {
        offer.forEach((e) => {
          e.classList.add("an-LeftIn");
        });

        offerImage.classList.add("an-RightIn2");

        offerBubble.forEach((e) => {
          e.classList.add("an-OpacityDelay");
        });
      }

      // About section animation
      if (
        aboutLeft.classList.contains("an-Grow") &&
        aboutRight.classList.contains("an-Grow")
      ) {
      } else if (
        headerHeight +
          servicesSection.offsetHeight +
          sectionOffers.offsetHeight / 2 <
        pageYOffset
      ) {
        aboutLeft.classList.add("an-Grow");
        aboutRight.classList.add("an-Grow");
      }
    });
  };

  scrollAnimations();
})();
