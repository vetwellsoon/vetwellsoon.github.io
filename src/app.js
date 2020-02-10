const navbar = (
  <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="index.html" style={{fontFamily: '"Rubik", sans-serif'}}>Ziggy's world</a>
      <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto" style={{fontFamily: '"Rubik", sans-serif !important'}}>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="plans.html">View plans</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="faq.html">Faq</a>
          </li>
          <li id="login-nav" className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="login.html">Login</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="mailto:RIdiculla@newportcapitalgroup.com?Subject=VetWellSoon">Contact us</a>
          </li>
          <img id="profileImg" style={{height: '3rem', borderRadius: '50%', marginRight: '1.5rem', display: 'none'}} src="img/pug.jpg" />
        </ul>
      </div>
    </div>
  </nav>
);

const footer = (
  <section style={{backgroundColor: '#C8C8C8'}}>
    <footer className="container py-5">
      <div className="row">
        <a href="dashboard.html"><h5 style={{marginRight: '3rem'}}>Dashboard</h5></a>
        <a href="faq.html">
          <h5 style={{marginRight: '3rem'}}>FAQ</h5>
        </a>
        <a href="#"><h5 style={{marginRight: '3rem'}}>LOGIN</h5></a>
        <a href="mailto:RIdiculla@newportcapitalgroup.com?Subject=VetWellSoon"><h5 style={{}}>CONTACT US</h5></a>
      </div>
      <div className="form-group row" style={{marginTop: '2rem'}}>
        <label htmlFor="staticEmail" className="col-form-label">
          <h5>Subscribe to our newsletter </h5>
        </label>
        <div className="col-sm-4" style={{display: 'flex'}}>
          <input type="text" className="form-control" id="staticEmail" defaultValue="Email address" />
          <button style={{backgroundColor: '#E25822', fontFamily: '"Oswald", sans-serif', fontSize: '20px', border: 'none', width: '150px', padding: 0, height: '38px', marginTop: '2px'}} type="button" className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </footer>
  </section>
)

const exploreplan = (
  <section style={{backgroundColor: '#E25822'}} className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
      <img style={{position: 'absolute', marginTop: '-160px', marginLeft: '900px', height: '400px'}} src="img/orange-dog.png" />
      {/* About Section Content */}
      <div style={{fontFamily: '"Oswald", sans-serif', color: 'white'}} className="row">
        <p style={{fontSize: '40px'}}>Find the plan that's right for you and your pet</p>
      </div>
      {/* About Section Button */}
      <div className="mt-4">
        <a className="btn btn-xl btn-outline-light" style={{backgroundColor: 'white', color: 'black', fontFamily: '"Oswald", sans-serif', fontSize: '25px', fontWeight: 400, marginLeft: '-20px'}} href="#">
          Explore plans &gt;&gt;
        </a>
      </div>
    </div>
  </section>
)

ReactDOM.render(navbar, document.getElementById('navbar'));

if (document.getElementById('exploreplan')) {
  ReactDOM.render(exploreplan, document.getElementById('exploreplan'));
}

ReactDOM.render(footer, document.getElementById('footer'));

if (localStorage.getItem("email")) {
  document.getElementById('profileImg').style.display = "block";
  document.getElementById('login-nav').style.display = "none";
}

document.getElementById('profileImg').onclick = function(){
  document.getElementById('profileImg').style.display = "none";
  document.getElementById('login-nav').style.display = "block";
  localStorage.removeItem("email");
}
