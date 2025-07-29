

function Footer() {
 return(
   <>
   <footer    className="ranna-bg-dark">
            <div className="container">
                <div className="footer-logo">
                    <a href="index.html"><img src="assets/img/logo-light.png" className="img-fluid" alt="footer-logo"/></a>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li><a href="#">FACEBOOK</a></li>
                        <li><a href="#">TWITTER</a></li>
                        <li><a href="#">INSTAGRAM</a></li>
                        <li><a href="#">PINTEREST</a></li>
                        <li><a href="#">GOOGLEPLUS</a></li>
                        <li><a href="#">YOUTUBE</a></li>
                    </ul>
                </div>
                <div className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></div>
            </div>
        </footer>
       

      <div id="search" className="search-wrap">
        <button type="button" className="close">×</button>
        <form className="search-form">
            <input type="search" id="ooooo" value="" placeholder="Type here........" />
            <button type="submit" className="search-btn"><i className="flaticon-search"></i></button>
        </form>
    </div>
    
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="title-default-bold mb-none">Login</div>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <form className="login-form">
                        <input className="main-input-box" type="text" placeholder="User Name" />
                        <input className="main-input-box" type="password" placeholder="Password" />
                        <div className="inline-box mb-5 mt-4">
                            <div className="checkbox checkbox-primary">
                                <input id="modal-checkbox" type="checkbox"/>
                                <label for="modal-checkbox">Remember Me</label>
                            </div>
                            <label className="lost-password"><a href="#">Lost your password?</a></label>
                        </div>
                        <div className="inline-box mb-5 mt-4">
                            <button className="btn-fill" type="submit" value="Login">Login</button>
                            <a href="#" className="btn-register"><i className="fas fa-user"></i>Register Here!</a>
                        </div>
                    </form>
                    <label>Login connect with your Social Network</label>
                    <div className="login-box-social">
                        <ul>
                            <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#" className="google"><i className="fab fa-google-plus-g"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
   </>

 )


}
export default Footer; 