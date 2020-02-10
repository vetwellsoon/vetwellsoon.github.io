var navbar = React.createElement(
  "nav",
  { className: "navbar navbar-expand-lg bg-secondary text-uppercase fixed-top", id: "mainNav" },
  React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "a",
      { className: "navbar-brand js-scroll-trigger", href: "index.html", style: { fontFamily: '"Rubik", sans-serif' } },
      "Ziggy's world"
    ),
    React.createElement(
      "button",
      { className: "navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded", type: "button", "data-toggle": "collapse", "data-target": "#navbarResponsive", "aria-controls": "navbarResponsive", "aria-expanded": "false", "aria-label": "Toggle navigation" },
      "Menu",
      React.createElement("i", { className: "fas fa-bars" })
    ),
    React.createElement(
      "div",
      { className: "collapse navbar-collapse", id: "navbarResponsive" },
      React.createElement(
        "ul",
        { className: "navbar-nav ml-auto", style: { fontFamily: '"Rubik", sans-serif !important' } },
        React.createElement(
          "li",
          { className: "nav-item mx-0 mx-lg-1" },
          React.createElement(
            "a",
            { className: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger", href: "plans.html" },
            "View plans"
          )
        ),
        React.createElement(
          "li",
          { className: "nav-item mx-0 mx-lg-1" },
          React.createElement(
            "a",
            { className: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger", href: "faq.html" },
            "Faq"
          )
        ),
        React.createElement(
          "li",
          { id: "login-nav", className: "nav-item mx-0 mx-lg-1" },
          React.createElement(
            "a",
            { className: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger", href: "login.html" },
            "Login"
          )
        ),
        React.createElement(
          "li",
          { className: "nav-item mx-0 mx-lg-1" },
          React.createElement(
            "a",
            { className: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger", href: "#footer" },
            "Contact us"
          )
        ),
        React.createElement(
          "a",
          { href: "profile.html" },
          React.createElement("img", { id: "profileImg", style: { height: '3rem', borderRadius: '50%', marginRight: '1.5rem', display: 'none' }, src: "img/pug.jpg" })
        )
      )
    )
  )
);

var footer = React.createElement(
  "section",
  { style: { backgroundColor: '#C8C8C8' } },
  React.createElement(
    "footer",
    { className: "container py-5" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "a",
        { href: "dashboard.html" },
        React.createElement(
          "h5",
          { style: { marginRight: '3rem' } },
          "Dashboard"
        )
      ),
      React.createElement(
        "a",
        { href: "faq.html" },
        React.createElement(
          "h5",
          { style: { marginRight: '3rem' } },
          "FAQ"
        )
      ),
      React.createElement(
        "a",
        { href: "login.html" },
        React.createElement(
          "h5",
          { style: { marginRight: '3rem' } },
          "Login"
        )
      ),
      React.createElement(
        "a",
        { href: "plans.html" },
        React.createElement(
          "h5",
          { style: {} },
          "View Plans"
        )
      ),
      React.createElement(
        "div",
        { id: "contact", style: { position: 'absolute', right: '2rem' } },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h5",
            null,
            "Contact Us:"
          ),
          React.createElement(
            "p",
            null,
            React.createElement("i", { className: "icon-phone" }),
            " (123) 456-7890 - (123) 555-8890",
            React.createElement("br", null),
            React.createElement("i", { className: "icon-envelope-alt" }),
            " ",
            React.createElement(
              "a",
              { style: { textDecoration: 'underline' }, href: "mailto:RIdiculla@newportcapitalgroup.com?Subject=VetWellSoon" },
              "RIdiculla@newportcapitalgroup.com"
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "form-group row", style: { marginTop: '2rem' } },
      React.createElement(
        "label",
        { htmlFor: "staticEmail", className: "col-form-label" },
        React.createElement(
          "h5",
          null,
          "Subscribe to our newsletter "
        )
      ),
      React.createElement(
        "div",
        { className: "col-sm-4", style: { display: 'flex' } },
        React.createElement("input", { type: "text", className: "form-control", id: "staticEmail", defaultValue: "Email address" }),
        React.createElement(
          "button",
          { style: { backgroundColor: '#E25822', fontFamily: '"Oswald", sans-serif', fontSize: '20px', border: 'none', width: '150px', padding: 0, height: '38px', marginTop: '2px' }, type: "button", className: "btn btn-primary" },
          "Subscribe"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "footer-copyright text-center", style: { paddingTop: '1rem' } },
      "\xA9 2020 Copyright:",
      React.createElement(
        "a",
        { href: "https://mdbootstrap.com/education/bootstrap/" },
        " VetWellSoon"
      )
    )
  )
);

var exploreplan = React.createElement(
  "section",
  { style: { backgroundColor: '#E25822' }, className: "page-section bg-primary text-white mb-0", id: "about" },
  React.createElement(
    "div",
    { className: "container" },
    React.createElement("img", { style: { position: 'absolute', marginTop: '-160px', marginLeft: '900px', height: '400px' }, src: "img/orange-dog.png" }),
    React.createElement(
      "div",
      { style: { fontFamily: '"Oswald", sans-serif', color: 'white' }, className: "row" },
      React.createElement(
        "p",
        { style: { fontSize: '40px' } },
        "Find the plan that's right for you and your pet"
      )
    ),
    React.createElement(
      "div",
      { className: "mt-4" },
      React.createElement(
        "a",
        { className: "btn btn-xl btn-outline-light", style: { backgroundColor: 'white', color: 'black', fontFamily: '"Oswald", sans-serif', fontSize: '25px', fontWeight: 400, marginLeft: '-20px' }, href: "plans.html#find-plan" },
        "Explore plans >>"
      )
    )
  )
);

ReactDOM.render(navbar, document.getElementById('navbar'));

if (document.getElementById('exploreplan')) {
  ReactDOM.render(exploreplan, document.getElementById('exploreplan'));
}

if (document.getElementById('footer')) {
  ReactDOM.render(footer, document.getElementById('footer'));
}

if (localStorage.getItem("email")) {
  document.getElementById('profileImg').style.display = "block";
  document.getElementById('login-nav').style.display = "none";
}