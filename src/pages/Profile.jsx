import React from "react";
import './Profile.css';
import send from '../assets/send.svg'

const Profile = () => {
  return (
    <div id="profile">
      <main role="main">
        <div className="album py-5 bg-light">

        </div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="font-weight-bold display-4"><img src={send} width="60"></img> Contact Me</h1>
            <hr style={{ width: "50%" }} />
            <p className="lead text">Have a question? Just send me an email or send a message to my LinkedIn</p>
            {/* <p>
              <p className="btn btn-primary my-2 mr-2">Main call to action</p>
              <p className="btn btn-secondary my-2">Secondary action</p>
            </p> */}
          </div>
        </section>
        <section className="jumbotron text-right bg-white">

          <div className="container mb-4">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h1>Album example</h1>
              <p className="btn btn-primary my-2 mr-2">Main call to action</p>
              <p className="btn btn-secondary my-2">Secondary action</p> */}
            </div>
          </div>
        </section>



      </main>
    </div >
  )
};

export default Profile;