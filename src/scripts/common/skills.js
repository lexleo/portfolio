if (window.location.href.endsWith('about.html')) {

  class Skill {
    constructor(width, height, container, percent) {
      this.s = Snap(container);
      const radius = width / 3;
      const cx = width / 2;
      const cy = height / 2;
      this.length = 2 * radius * Math.PI;
      this.percent = percent;

      this.s.attr({
        width,
        height
      });

      this.bgCircle = this.createCircle(cx, cy, radius, {
        fill: 'none',
        stroke: '#ccc',
        strokeWidth: 15
      });

      this.baseCircle = this.createCircle(cx, cy, radius, {
        fill: 'none',
        stroke: '#10c1a8',
        strokeWidth: 15,
        strokeDasharray: this.length,
        strokeDashoffset: this.length
      });

      this.baseCircle.transform(`r-90, ${cx} ${cy}`);
    }

    createCircle(cx, cy, radius, attr) {
      const circle = this.s.circle(cx, cy, radius);
      circle.attr(attr);
      return circle;
    }

    draw() {
      Snap.animate(
        this.length,
        (1 - this.percent) * this.length,
        val => {
          this.baseCircle.attr({
            strokeDashoffset: val
          });
        },
        700,
        mina.easeinout
      );
    }
  }

  const html = new Skill(150, 150, '#html', 0.75);
  const css = new Skill(150, 150, '#css', 0.65);
  const js = new Skill(150, 150, '#js', 0.46);
  const python = new Skill(150, 150, '#php', 0.55);
  const node = new Skill(150, 150, '#node', 0.29);
  const mysql = new Skill(150, 150, '#mysql', 0.5);
  const git = new Skill(150, 150, '#git', 0.45);
  const webpack = new Skill(150, 150, '#bower', 0.1);
  const gulp = new Skill(150, 150, '#gulp', 0.5);
  const mongo = new Skill(150, 150, '#mongo', 0.23);


  document.addEventListener("DOMContentLoaded", function(event) {
    
    var animationDone = false;

    let height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;


    function animateSkills() {
      if (!animationDone && (window.pageYOffset > (height / 2))) {
          html.draw();
          css.draw();
          js.draw();
          setTimeout(()=>{
            python.draw();
            node.draw();
            mysql.draw();  
            mongo.draw();            
          }, 500);
          setTimeout(()=>{
            git.draw();
            webpack.draw();
            gulp.draw();
          }, 1000);
          animationDone = true;
        }
    }

  window.addEventListener('scroll', animateSkills);

  });


}

