import Sidebar from "../components/sidebar";

export default function Package() {
  return (
    <div>
      <input id="menu-switch" type="checkbox"></input>
      <nav id="menu" role="navigation">
        <div className="package__menu--brand">
          {" "}
          <div className="logo">
            <img src="/images/sysl-logo.png" />
            <span className="logo__title">API Catalog</span>
          </div>
        </div>
        <div>
            <Sidebar />
        </div>
      </nav>
      <div className="page-wrap">
        <label
          htmlFor="menu-switch"
          id="menu-toggle"
          className="menu-toggle"
        ></label>
        <div className="container" role="main">
          <article>
            <h2>Package</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sem nec porttitor fringilla. Vivamus molestie sollicitudin dolor ut interdum. Integer rutrum viverra diam, mattis sagittis ligula ullamcorper id. Aliquam lorem orci, lacinia at sem in, ullamcorper rutrum lorem. Nam posuere facilisis nunc vel finibus. Pellentesque quam nisl, porttitor quis nunc ut, ultrices sagittis tellus. Nunc molestie dignissim sem at ullamcorper. Cras commodo sollicitudin lorem, eget varius urna. Morbi aliquam vel arcu et placerat. Mauris eget nunc faucibus, pretium purus gravida, dictum lectus. Curabitur congue arcu quis mi fermentum feugiat. Vestibulum et risus dui. Donec faucibus venenatis mi, sed pretium.
            </p>
            
          </article>
        </div>
      </div>
      <div className="search-sidebar">
        <div className="search__field">
          <input
            className="search__input"
            type="text"
            name="search"
            id="search"
            placeholder=" "
          />
          <label className="search__label" htmlFor="search">
            Search...
          </label>
        </div>
      </div>
    </div>
  );
}
