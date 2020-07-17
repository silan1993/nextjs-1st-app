const Contact = (props) => {
    return (
        <div id="contact" className="container">
            <h3 className="text-center">Contact</h3>
            <div className="row">
                <div className="col-md-4">
                    <p><span className="glyphicon glyphicon-map-marker">Cuttack Odisha, INDIA</span></p>
                    <p><span className="glyphicon glyphicon-phone">Phone: +91 9066364784</span></p>
                    <p><span className="glyphicon glyphicon-envelope">Email: subhrajyoti34@gmail.com</span></p>	   
                </div>
                <div className="col-md-8">
                    <a href="https://www.facebook.com/subhra.jyoti.79" target="_blank"> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJhN_N4cmqZXDQa_dRUh8dHGDl1Ew4Q3ES9_FLBQPnoxcTSs&s" className="img-circle" alt="Cinque Terre" width="60" height="60" /> </a>
                    <a href="https://twitter.com/silan19031993" target="_blank"> 
                        <img src="https://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s320/Twitter+logo+2012.png" className="img-circle" alt="Cinque Terre" width="60" height="60" /> </a>
                    <a href="https://www.linkedin.com/in/subhrajyoti-mishra-a6504a82?trk=nav_responsive_tab_profile" target="_blank"> 
                        <img src="https://image.flaticon.com/icons/png/512/174/174857.png" className="img-circle" alt="Cinque Terre" width="60" height="60" /> </a>
                </div>
            </div>
        </div>
    );
};

 export default Contact;