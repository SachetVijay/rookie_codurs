import { Email } from '@material-ui/icons';
import React from 'react';
import "./profile.css"

function Profile(){


    return(
        <div className="profile_page">
                <div className="profile_page_left">
                    <div className="profile_img">
                            <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                               <div className="profile_img_absolute">
                                   <h3>
                                       Hetu Patel
                                   </h3>
                               </div>
                    </div>
                    <div className="profile_dis">
                            <div className="profile_name">
                                <div>
                                <h2>Name</h2>
                                <h3>Patel Hetu</h3>
                                </div>
                                <div>
                                    <h2>Passing Year</h2>
                                    <h3>2024</h3>
                                </div>
                                <div>
                                    <h2>Phone No.</h2>
                                    <h3>9955445544</h3>
                                </div>
                                <div>
                                    <h2>Email</h2>
                                    <a href="#">hetu2002@gmail.com</a>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="profile_page_right">
                        <h2><i class="fas fa-user"></i> About</h2>
                        <div>
                            <h3>
                                Branch :
                            </h3>
                            <h4>
                                Computer Science and Enginearing
                            </h4>
                        </div>
                        <div>
                            <h3>Current Position :</h3>
                            <h4>
                                Software Enginear at Google
                            </h4>
                        </div>
                        <div>
                            <h3>
                                Research Field :
                            </h3>
                            <h4>
                                Machiene Learning, AstroLogy , Data Analytics and Artificial inteligence.
                            </h4>
                        </div>
                        <div>
                            <h3>Work Experience :</h3>
                            <h4>
                                5 Years
                            </h4>
                        </div>
                        <div>
                            <h3>
                                Projects During College :
                            </h3>
                            <h4>
                                ghjti, sdjfhsdf,sjhfjhsdf, asjf, ysagfjg, juagsfj ,jhavsdjfv ,jhagsgf.
                            </h4>
                        </div>
                        <div>
                            <h3>Worked in :</h3>
                            <h4>
                            Amazon,Apple, google, microsoft and Adobe.
                            </h4>
                        </div>

                </div>
        </div>
    )
}

export default Profile;