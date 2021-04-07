import Head from 'next/head'
import SideNav from './SideNav'

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"></script>
    </Head>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="index.html">Mezidia</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" target="_blank"
                        href="https://github.com/mezidia/Basics-Of-Software-Development-On-.Net">Repository</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Labs
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="Lab1.html">Lab1</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="Lab2.html">Lab2</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="Lab3.html">Lab3</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="Lab4.html">Lab4</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="Lab5.html">Lab5</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="Lab6.html">Lab6</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="Lab7.html">Lab7</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="Lab8.html">Lab8</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="Lab9.html">Lab9</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <nav className="d-none d-md-block sidebar">
              <div className='sidebar-sticky'>
                <SideNav />
              </div> 
            </nav>
          </div>
        </div>
      </div>
    <div>
        {children}
    </div>
    </>
  )
}

export default Layout
