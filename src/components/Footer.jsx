import './Footer.css'
const Myfooter = () => {
  return (
    <footer className="homefooter">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      <div className="left">
        <img src="fullLogo.png" alt="logo" />
      </div>
      <div className="right">
        <div className="footericons">
          <i className="fab fa-telegram"></i>
          <a href="https://t.me/oneFundSupport" target="_blank" rel="noopener noreferrer">
          <p>Customer Service</p></a>          
        </div>
        <p>Copyright © 2021. All rights reserved.</p>
        <div className='footerterms'><a href=''>Terms of Service</a>|<a href="">Privacy Policy</a></div>
      </div>
    </footer>
  );
}

export default Myfooter
