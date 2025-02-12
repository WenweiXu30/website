import "./assets/css/main.css";
import "./assets/css/noscript.css";

function Intro() {
  return (
    <div className="is-preload">
      <div id="wrapper" className="divided">
        <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
          <div className="content">
            <h1>Wenwei Xu</h1>
            <p className="major">Welcome to my landing page!</p>
          </div>
          <div className="image">
            <img src="images/banner.jpg" alt="Wenwei Xu" />
          </div>
        </section>

        <section
          className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
          id="first"
        >
          <div className="content">
            <h2>What I'm Doing Currently</h2>
            <p>Studying Computer Science at Georgia Institute of Technology.</p>
          </div>
          <div className="image">
            <img src="images/spotlight01.jpg" alt="Wenwei Xu" />
          </div>
        </section>

        <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h2>My Interests</h2>
            <p>LeetCode, Basketball, Video Games, Weightlifting.</p>
          </div>
          <div className="image">
            <img src="images/spotlight02.jpg" alt="Wenwei Xu" />
          </div>
        </section>

        <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h2>Skills</h2>
            <p>Experience in Python, C++, and Java.</p>
            <ul className="actions stacked">
              <li>
                <a
                  href="Resume.pdf"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </li>
            </ul>
          </div>
          <div className="image">
            <img src="images/spotlight03.jpg" alt="Wenwei Xu" />
          </div>
        </section>

        <section className="wrapper style1 align-center">
          <div className="inner">
            <h2>Contact Me</h2>
            <p></p>
            <div className="items style1 medium onscroll-fade-in">
              <section>
                <span className="icon brands style2 fa-linkedin-in"></span>
                <h3>LinkedIn</h3>
                <p>
                  <a
                    href="https://www.linkedin.com/in/wenwei-xu-bb0575271/"
                    target="_blank"
                  >
                    Wenwei Xu
                  </a>
                </p>
              </section>
              <section>
                <span className="icon brands style2 fa-github"></span>
                <h3>Github</h3>
                <p>
                  <a href="https://github.com/WenweiXu30" target="_blank">
                    WenweiXu30
                  </a>
                </p>
              </section>
              <section>
                <span className="icon brands style2 fa-instagram"></span>
                <h3>Instagram</h3>
                <p>
                  <a href="https://www.instagram.com/wenfishy/" target="_blank">
                    @wenfishy
                  </a>
                </p>
              </section>
              <section>
                <span className="icon brands style2 fa-discord"></span>
                <h3>Discord</h3>
                <p>@wunbe</p>
              </section>
              <section>
                <span className="icon solid style2 fa-phone"></span>
                <h3>Email</h3>
                <p>Unavailable</p>
              </section>
              <section>
                <span className="icon style2 fa-paper-plane"></span>
                <h3>Location</h3>
                <p>
                  <a
                    href="https://www.google.com/maps/place/New+York,+NY/@40.7167538,-74.1360193,11.13z/data=!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu"
                    target="_blank"
                  >
                    New York City
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
      <script src="./assets/js/jquery.min.js"></script>
      <script src="./assets/js/jquery.scrollex.min.js"></script>
      <script src="./assets/js/jquery.scrolly.min.js"></script>
      <script src="./assets/js/browser.min.js"></script>
      <script src="./assets/js/breakpoints.min.js"></script>
      <script src="./assets/js/util.js"></script>
      <script src="./assets/js/main.js"></script>
    </div>
  );
}

export default Intro;
