import React from 'react';
import "./common.css";

function Calendar() {
    return (
      <div className="carousel-container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img src="https://i.insider.com/55afb50e2acae717448b6598?width=1000&format=jpeg&auto=webp" alt="Los Angeles" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="item">
              <img src="https://ed.stanford.edu/sites/default/files/news_images/krumboltz-lac.jpg" alt="Chicago" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="item">
              <img src="https://dailyutahchronicle.com/wp-content/uploads/2017/10/professorrating-900x598.jpg" alt="New york" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="item">
              <img src="https://miro.medium.com/max/740/1*pQJcLGv6TXejEE76Mbf_7A.jpeg" alt="New york" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="carousel-text">
            <div className="quote-container">
                <div className="quote">
                    ''Teaching is the highest form of understanding.''
                </div>
                <div className="quote-author">-Aristotle</div>
            </div>
            <div className="slogan">Top instructors from around the world teach millions of
             students on Coursezz. For your better future come and join us.</div>
        </div>
      </div>
    );
}

export default Calendar;