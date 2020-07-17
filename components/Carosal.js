const Carosal = (props) => {
        return (
<div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

    <div className="carousel-inner" role="listbox">
        <div className="item active">
            <img src={props.images.img2}  alt="New York" width="1200" height="700"/>
            <div className="carousel-caption">
                <h3>Ooty Trip 2017 Team Hurreh !</h3>
            </div>      
        </div>

        <div className="item">
            <img src={props.images.img1} alt="Chicago" width="1200" height="700" />
            <div className="carousel-caption">
                <h3>Hurreh Team Outing To Ooty</h3>
            </div>      
        </div>

        <div className="item">
            <img src={props.images.img3}  alt="Los Angeles" width="1200" height="700" />
            <div className="carousel-caption">
                <h3>Hum chale BAZAAR</h3>
            </div>      
        </div>
    </div>

    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>
);
};

 export default Carosal;