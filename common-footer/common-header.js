 document.addEventListener("DOMContentLoaded", function () {
  const header = `
     <div class="main-menu menu-width">
                <!-- Brand Logo -->
                <div class="logo-box">
                    <!-- Brand Logo Light -->
                    <a href="index.html" class="logo-light">
                        <img src="assets/images/logo-light.png" alt="logo" class="logo-lg" height="50" width="200px">
                        <img src="assets/images/favicon.ico" alt="small logo" class="logo-sm" height="28">
                    </a>

                    <!-- Brand Logo Dark -->
                    <a href="index.html" class="logo-dark">
                        <img src="assets/images/logo-dark.png" alt="dark logo" class="logo-lg" height="70">
                        <img src="assets/images/logo-sm.png" alt="small logo" class="logo-sm" height="28">
                    </a>
                </div>

                <!--- Menu -->
                <div data-simplebar>
 <div data-simplebar>
                 <ul class="app-menu">

                    <li class="menu-title">Menu</li>

                    <li class="menu-item">
                        <a href="index.html" class="menu-link waves-effect waves-light">
                            <span class="menu-icon"><i class="bx bx-home-smile"></i></span>
                            <span class="menu-text"> Dashboards </span>
                        </a>
                    </li>
                   
                    <li class="menu-item">
    <a href="#menuHome" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
        <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
        <span class="menu-text"> Home </span>
        <span class="menu-arrow"></span>
    </a>
    
    <div class="collapse" id="menuHome">
        <ul class="sub-menu">
            <li class="menu-item">
                <a href="banner.html" class="menu-link">
                    <span class="menu-text">Banner</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="home-sectionb.html" class="menu-link">
                    <span class="menu-text">Section B</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="home-sectionC.html" class="menu-link">
                    <span class="menu-text">Section C</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="home-sectionD.html" class="menu-link">
                    <span class="menu-text">Section D</span>
                </a>
            </li>
        </ul>
    </div>
</li>
                    <li class="menu-item">
    <a href="#menuAbout" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
        <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
        <span class="menu-text"> About US </span>
        <span class="menu-arrow"></span>
    </a>
    
    <div class="collapse" id="menuAbout">
        <ul class="sub-menu">

        <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
            
            <li class="menu-item">
                <a href="about-sectionA.html" class="menu-link">
                    <span class="menu-text">Section A</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="about-sectionB.html" class="menu-link">
                    <span class="menu-text">Section B</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="about-sectionC.html" class="menu-link">
                    <span class="menu-text">Section C</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="home-sectionD.html" class="menu-link">
                    <span class="menu-text">Section D</span>
                </a>
            </li>
        </ul>
    </div>
</li>

<li class="menu-item">
    <a href="#menuteam" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
        <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
        <span class="menu-text"> Our Team</span>
        <span class="menu-arrow"></span>
    </a>
    
    <div class="collapse" id="menuteam">
        <ul class="sub-menu">

        <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
            
            <li class="menu-item">
                <a href="board-of-directors.html" class="menu-link">
                    <span class="menu-text">Board of Directors</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="staff-members.html" class="menu-link">
                    <span class="menu-text">Staff Members</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="medical-advisory-board.html" class="menu-link">
                    <span class="menu-text">Medical Advisory Board</span>
                </a>
            </li>
        </ul>
    </div>
</li>

                    <li class="menu-item">
                        <a href="#menuuExpagesa" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
                            <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
                            <span class="menu-text"> Common </span>
                            <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="menuuExpagesa">
                            <ul class="sub-menu">
                                
                                
                                
                                <li class="menu-item">
                                    <a href="social-media.html" class="menu-link">
                                        <span class="menu-text"> Social Media Links</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="contact-information.html" class="menu-link">
                                        <span class="menu-text"> Contact Information</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="address.html" class="menu-link">
                                        <span class="menu-text">Address</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="footer-card.html" class="menu-link">
                                        <span class="menu-text">Footer Card</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="footer.html" class="menu-link">
                                        <span class="menu-text">Footer</span>
                                    </a>
                                </li>

                                <li class="menu-item">
                                    <a href="error-page.html" class="menu-link">
                                        <span class="menu-text">404 Page</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </li>



                    <li class="menu-item">
    <a href="#menuteamm" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
        <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
        <span class="menu-text"> Remembering Children</span>
        <span class="menu-arrow"></span>
    </a>
    
    <div class="collapse" id="menuteamm">
        <ul class="sub-menu">

        <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
            
            <li class="menu-item">
                <a href="remembering-our-childrens.html" class="menu-link">
                    <span class="menu-text">Remembering Childrens</span>
                </a>
            </li>
        </ul>
    </div>
</li>


                    

                    <li class="menu-item">
    <a href="#menuteammm" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
        <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
        <span class="menu-text"> Our Stories</span>
        <span class="menu-arrow"></span>
    </a>
    
    <div class="collapse" id="menuteammm">
        <ul class="sub-menu">

        <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
            
            <li class="menu-item">
                <a href="our-stories.html" class="menu-link">
                    <span class="menu-text">Our Stories</span>
                </a>
            </li>
        </ul>
    </div>
</li>


                    


                    <li class="menu-item">
    <a href="#menuteammmm" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
        <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
        <span class="menu-text"> About MPS</span>
        <span class="menu-arrow"></span>
    </a>
    
    <div class="collapse" id="menuteammmm">
        <ul class="sub-menu">

        <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
            
            <li class="menu-item">
                <a href="about-mps.html" class="menu-link">
                    <span class="menu-text">About MPS</span>
                </a>
            </li>
        </ul>
    </div>
</li>


                     <li class="menu-item">
    <a href="#menuteammmmm" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
        <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
        <span class="menu-text"> Community Database</span>
        <span class="menu-arrow"></span>
    </a>
    
    <div class="collapse" id="menuteammmmm">
        <ul class="sub-menu">

        <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
            
            <li class="menu-item">
                <a href="community-resource-database.html" class="menu-link">
                    <span class="menu-text">Community Database</span>
                </a>
            </li>
        </ul>
    </div>
</li>

                    <li class="menu-item">
                        <a href="#menuBecome" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
                            <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
                            <span class="menu-text">Become a Member</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="menuBecome">
                            <ul class="sub-menu">
                            <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>

                                <li class="menu-item">
                                    <a href="become-member-sectionA.html" class="menu-link">
                                        <span class="menu-text"> Section A</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="become-member-sectionB.html" class="menu-link">
                                        <span class="menu-text">Section B</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="become-member-sectionC.html" class="menu-link">
                                        <span class="menu-text">Section C</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>


                    <li class="menu-item">
                        <a href="#menuBecomee" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
                            <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
                            <span class="menu-text">News and Events</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="menuBecomee">
                            <ul class="sub-menu">
                            <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
                                <li class="menu-item">
                                    <a href="all-news-events.html" class="menu-link">
                                        <span class="menu-text"> All News Events</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="news-events-add.html" class="menu-link">
                                        <span class="menu-text">Add News Events</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>



                    <li class="menu-item">
                        <a href="#menuBecomeer" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
                            <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
                            <span class="menu-text">New Diagnosis</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="menuBecomeer">
                            <ul class="sub-menu">
                            <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
                                <li class="menu-item">
                                    <a href="new-diagnosis.html" class="menu-link">
                                        <span class="menu-text">New Diagnosis</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </li>



                     <li class="menu-item">
                        <a href="#menuBecomeerr" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
                            <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
                            <span class="menu-text">We Care</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="menuBecomeerr">
                            <ul class="sub-menu">
                            <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
                                <li class="menu-item">
                                    <a href="we-care.html" class="menu-link">
                                        <span class="menu-text">We Care</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </li>


                    <li class="menu-item">
                        <a href="#menuBecomeerrr" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
                            <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
                            <span class="menu-text">Education Center</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="menuBecomeerrr">
                            <ul class="sub-menu">
                            <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
                                <li class="menu-item">
                                    <a href="educational-center.html" class="menu-link">
                                        <span class="menu-text">Education Center</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </li>



                    

                    <li class="menu-item">
                        <a href="#menuBecomeee" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
                            <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
                            <span class="menu-text">Clinical Trails</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="menuBecomeee">
                            <ul class="sub-menu">
                            <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
                                <li class="menu-item">
                                    <a href="clinical-trials-sectionA.html" class="menu-link">
                                        <span class="menu-text"> Section A</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="clinical-trials-sectionB.html" class="menu-link">
                                        <span class="menu-text">Section B</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>


                    <li class="menu-item">
                        <a href="#menuBecomeeee" data-bs-toggle="collapse" class="menu-link waves-effect waves-light">
                            <span class="menu-icon"><i class="mdi mdi-file-cloud-outline"></i></span>
                            <span class="menu-text">MPS Programs</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="menuBecomeeee">
                            <ul class="sub-menu">
                            <li class="menu-item">
                <a href="home-header.html" class="menu-link">
                    <span class="menu-text">Header</span>
                </a>
            </li>
                                <li class="menu-item">
                                    <a href="family-support.html" class="menu-link">
                                        <span class="menu-text"> Family Support</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="education-awareness.html" class="menu-link">
                                        <span class="menu-text">Education & Awareness</span>
                                    </a>
                                </li>

                                <li class="menu-item">
                                    <a href="resource.html" class="menu-link">
                                        <span class="menu-text">Research</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>



                </ul>
            </div>            </div>
            </div>
  `;

  document.getElementById("header").innerHTML = header;
});

document.addEventListener("DOMContentLoaded", function () {
  const footer = `
    <footer
    class="footer-wrapper footer-layout1 bg2 space-top space-md-top footer-padding-space"
    data-bg-src="/assets/my-img/footer.jpg" 
    style="background-image: url('assets/my-img/footer.jpg');">
            <div class="container">
                <div
                    class="widget-area space-bottom space-md-bottom paddding-bottomm">
                    <div
                        class="row align-items-start justify-content-center justify-content-lg-between">
                        <div
                            class="col-lg-4 col-md-10 text-md-center text-lg-start">
                            <div class="widget footer-widget">
                                <div class="vs-widget-about text-center-md">
                                    <div class="foter-logo">
                                        <a href="index.html">
                                            <img src="assets/my-img/logo.png"
                                                alt="Footer Logo" />
                                        </a>
                                    </div>
                                    <p class="footer-text">
                                        WCF Hospital, T. Nagar delivers trusted women’s, maternity, pediatric, and advanced healthcare services with over 25 years.
                                    </p>
                                    <div class="footer-social">
                                        <a target="_blank" href="https://www.facebook.com/tnagarwcf#"><i
                                                class="fab fa-facebook-f"></i></a>
                                        <a target="_blank" href="https://www.youtube.com/channel/UC6mZ-xksliGog6Scqc4RrlA"><i
                                                class="fab fa-youtube"></i></a>
                                        <a target="_blank" href="https://www.instagram.com/wcftnagar"><i
                                                class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="widget widget_nav_menu footer-widget">
                                <p class="widget_title">Useful Links</p>
                                <div class="menu-all-pages-container">
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="specialities.html">Spealities</a></li>
                                        <li><a href="blog.html">Blogs</a></li>
                                        <li><a href="video.html">Videos</a></li>
                                        <li><a href="academy.html">Join Academy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="widget widget_nav_menu footer-widget">
                                <p class="widget_title">Our Services</p>
                                <div class="menu-all-pages-container">
                                    <ul>
                                        <li><a href="womens-health-surgical-services.html">Fertility & Women’s Health</a></li>
                                        <li><a href="maternity-care.html">Maternity & Pregnancy Care</a></li>
                                        <li><a href="specialized-children-care.html">Newborn & Pediatric Care</a></li>
                                        <li><a href="critical-care-services.html">Diagnostics & Support</a></li>
                                        <li><a href="general-laparoscopic-surgery.html">General & Laparoscopic Surgery</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div
                                class="widget widget_nav_menu footer-widget paddingg-footer padding-l">
                                <p class="widget_title">Contact Us</p>
                                <p class="info-footer">
                                    <i class="fas fa-envelope"></i><a
                                        href="mailto:wcfhospital@gmail.com">wcfhospital@gmail.com</a>
                                </p>
                                <p class="info-footer">
                                    <i class="fas fa-phone-alt"></i><a
                                        href="tel:+918939397777">+91 89393 97777</a>
                                </p>

                                <p class="info-footer">
                                    <i class="fas fa-location"></i><a
                                        href="tel:+56923162156">North Usman Road, <br> T Nagar, Chennai - 600 017</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright bg-theme">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 text-center text-lg-start">
                            <p class="mb-0 link-inherit fw-light text-white py-10 footerrr">
                                &copy; 2026 <a href="index.html">WFC Hospital</a>. All
                                Rights Reserved.
                            </p>
                        </div>
                        <div class="col-lg-6 text-start text-md-end">
                            <p class="mb-0 link-inherit fw-light text-white footerrr">
                                Designed By <a href="https://impinfo.in" target="_blank">Imperial Info Systems</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Scroll To Top -->
        <a href="#" class="scrollToTop scroll-btn"><i
                class="far fa-arrow-up"></i></a>

    `;

  document.getElementById("footer").innerHTML = footer;
});
document.addEventListener("DOMContentLoaded", function () {
  const footer = `
    <footer
    class="footer-wrapper footer-layout1 bg2 space-top space-md-top footer-padding-space"
    data-bg-src="/assets/my-img/footer.jpg" 
    style="background-image: url('assets/my-img/footer.jpg');">
            <div class="container">
                <div
                    class="widget-area space-bottom space-md-bottom paddding-bottomm">
                    <div
                        class="row align-items-start justify-content-center justify-content-lg-between">
                        <div
                            class="col-lg-4 col-md-10 text-md-center text-lg-start">
                            <div class="widget footer-widget">
                                <div class="vs-widget-about text-center-md">
                                    <div class="foter-logo">
                                        <a href="index.html">
                                            <img src="assets/my-img/logo.png"
                                                alt="Footer Logo" />
                                        </a>
                                    </div>
                                    <p class="footer-text">
                                        MoM & BabY Hospital, T. Nagar delivers trusted women’s, maternity, pediatric, and advanced healthcare services for 25 years.
                                    </p>
                                    <div class="footer-social">
                                        <a target="_blank" href="https://www.facebook.com/tnagarwcf#"><i
                                                class="fab fa-facebook-f"></i></a>
                                        <a target="_blank" href="https://www.youtube.com/channel/UC6mZ-xksliGog6Scqc4RrlA"><i
                                                class="fab fa-youtube"></i></a>
                                        <a target="_blank" href="https://www.instagram.com/wcftnagar"><i
                                                class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="widget widget_nav_menu footer-widget">
                                <p class="widget_title">Useful Links</p>
                                <div class="menu-all-pages-container">
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="specialities.html">Spealities</a></li>
                                        <li><a href="blog.html">Blogs</a></li>
                                        <li><a href="video.html">Videos</a></li>
                                        <li><a href="academy.html">Join Academy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="widget widget_nav_menu footer-widget">
                                <p class="widget_title">Our Services</p>
                                <div class="menu-all-pages-container">
                                    <ul>
                                        <li><a href="womens-health-surgical-services.html">Fertility & Women’s Health</a></li>
                                        <li><a href="maternity-care.html">Maternity & Pregnancy Care</a></li>
                                        <li><a href="specialized-children-care.html">Newborn & Pediatric Care</a></li>
                                        <li><a href="critical-care-services.html">Diagnostics & Support</a></li>
                                        <li><a href="general-laparoscopic-surgery.html">General & Laparoscopic Surgery</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div
                                class="widget widget_nav_menu footer-widget paddingg-footer padding-l">
                                <p class="widget_title">Contact Us</p>
                                <p class="info-footer">
                                    <i class="fas fa-envelope"></i><a
                                        href="mailto:wcfhospital@gmail.com">wcfhospital@gmail.com</a>
                                </p>
                                <p class="info-footer">
                                    <i class="fas fa-phone-alt"></i><a
                                        href="tel:+918939397777">+91 89393 97777</a>
                                </p>

                                <p class="info-footer">
                                    <i class="fas fa-location"></i>North Usman Road, <br> T Nagar, Chennai - 600 017
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright bg-theme">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 text-center text-lg-start">
                            <p class="mb-0 link-inherit fw-light text-white py-10 footerrr">
                                &copy; 2026 <a href="index.html">MoM & BabY Hospital</a>. All
                                Rights Reserved.
                            </p>
                        </div>
                        <div class="col-lg-6 text-start text-md-end">
                            <p class="mb-0 link-inherit fw-light text-white footerrr">
                                Designed By <a href="https://dodoinfotech.com/" target="_blank">Dodo Infotech</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Scroll To Top -->
        <a href="#" class="scrollToTop scroll-btn"><i
                class="far fa-arrow-up"></i></a>

    `;

  document.getElementById("footer").innerHTML = footer;
});

// OPEN POPUP FROM ANY BUTTON
document.addEventListener("click", function (e) {
    const btn = e.target.closest(".open-appointment");
    
    if (btn) {
        e.preventDefault(); // 🔥 THIS FIXES YOUR ISSUE
        document.getElementById("appointmentPopup").style.display = "flex";
    }
});

// CLOSE POPUP
function closePopup() {
    document.getElementById("appointmentPopup").style.display = "none";
}

// CLOSE WHEN CLICK OUTSIDE
window.addEventListener("click", function (e) {
    const popup = document.getElementById("appointmentPopup");
    if (e.target === popup) {
        popup.style.display = "none";
    }
});



document.addEventListener("DOMContentLoaded", function () {
  const appointment = `
    <div id="appointmentPopup" class="popup-overlay">
  <div class="popup-box">
    <span class="close-btn" onclick="closePopup()">&times;</span>

    <h2 class="text-center pb-20">Book Appointment</h2>

    <form id="appointmentForm">
      <div class="form-group">
        <input type="text" name="name" placeholder="Full Name" required>
        <input type="number" name="age" placeholder="Age" required>
      </div>

      <div class="form-group">
        <input type="tel" name="phone" placeholder="Phone Number" required>
        <input type="email" name="email" placeholder="Email Address">
      </div>

      <div class="form-group">
        <select name="pregnant">
          <option value="">Are you pregnant?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <input type="text" name="weeks" placeholder="Weeks of Pregnancy">
      </div>

      <div class="form-group">
        <select name="department" required>
          <option value="">Select Department</option>
          <option>Obstetrics</option>
          <option>Gynecology</option>
          <option>Pediatrics</option>
          <option>Fertility / IVF</option>
          <option>General Consultation</option>
        </select>

        <select name="doctor">
          <option value="">Preferred Doctor</option>
          <option>Dr. Anitha</option>
          <option>Dr. Priya</option>
          <option>Dr. Kavya</option>
        </select>
      </div>

      <div class="form-group">
        <input type="date" name="date" required>
        <input type="time" name="time" required>
      </div>

      <textarea name="notes" placeholder="Health concerns..."></textarea>

      <button type="submit" class="submit-btn">Confirm Appointment</button>
    </form>
  </div>
</div>

    `;

  document.getElementById("appointment").innerHTML = appointment;


  function openPopup() {
  const popup = document.getElementById('appointmentPopup');
  popup.classList.add('active');
  // Prevent background scrolling when popup is open
  document.body.style.overflow = 'hidden'; 
}

function closePopup() {
  const popup = document.getElementById('appointmentPopup');
  popup.classList.remove('active');
  // Restore scrolling
  document.body.style.overflow = 'auto'; 
}

// Optional: Close popup if user clicks on the dark overlay
window.onclick = function(event) {
  const popup = document.getElementById('appointmentPopup');
  if (event.target == popup) {
    closePopup();
  }
}
});

//   const path = window.location.pathname;
//   let fileName = path.substring(path.lastIndexOf('/') + 1) || 'Home';
//   fileName = fileName.replace('.html', '');
//   document.title = fileName;