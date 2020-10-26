const openProjectPage = (project) => {
    document.querySelector('.project').style.display = "block";  
    document.querySelector('.project').innerHTML = project;  
}
const closeProjectPage = () => {
    document.querySelector('.project').style.display = "none";
}
const eTickets = `
<div  class="square-out gray-secondary-in">
                    <div class="direction-row-between">
                        <a href="https://tatjama.github.io/e-ticket/" target = "_blank">
                            
                            <img class="circle-out gray-secondary-out " src="./images/drama.png" alt="drama"/>
                        </a>
                        <h2 id="project-header" class="text-gray-secondary-shadow-dark">
                            E-tickets
                        </h2>
                    </div>
                    <div id="project">
                        <h3>About:</h3>
                        <p>E-tickets is bilingual(English/Serbian) CRUD application that allow users to see, create and update information about 
                            performances, and to buy or to sell tickets for theatre. </p>
                        <h3>Technics:</h3>
                        <p> JavaScript, HTML, CSS, Sass, jQuery, session storage and local storage</p>                            
                        <h3>Credentials:</h3>
                        <p>Only registered users can use E-shop. To become register user, please go to signUp page and fill up form.
                            <br/>
                             You can, also,  use default user or admin credentials for demo purpose
                             <br/> 
                            <span>USER:</span> email: user@user.com, password: UserUser1, <br/>
                            <span>ADMIN:</span> email: admin@admin.com, password: AdminAdmin1
                        </p>
                        <h3>Avatars:</h3>
                        <ol>
                            <li> User 
                                <br/>
                                Default value: email: user@user.com, password: UserUser1
                                <ul>Can do:                                    
                                    <li>see information about performances</li>
                                    <li>sign up,</li>
                                    <li>sign in,</li>                                    
                                    <li>buy tickets on E-shop page,</li>
                                </ul>
                            </li>
                            <li> Admin
                                <br/>
                                Default value: email: admin@admin.com, password: AdminAdmin1
                                <ul>
                                    Can do:
                                    <li>all that user can do,</li>
                                    <li>sell tickets for performance</li>
                                    <li>add new performance,</li>
                                    <li>make entry for new tickets</li>
                                </ul>
                            </li>
                        </ol>
                        <h3>Descriptions - App pages:</h3>
                        <ol>
                            <li>SHOPPING CARD:
                                <ul>
                                    <li>
                                        Admin 
                                        <br/>have possibilities to filter performances by:
                                        <ul>
                                            <li> - type of performance : ballet, drama, opera, philharmonic,</li>
                                            <li> - type of scene: big scene and small scene,</li>
                                            <li> - the letters that are in the title of the play,</li>
                                            <li> - quantity of tickets: all tickets or only > 0 on stock - checkbox,</li>
                                            <li> - number of filtered plays - checkbox</li>
                                        </ul>                         
                                   You can use all filters or some of them.
                                    </li>
                                    <li>
                                        User 
                                        <br/>have possibilities to filter performances by:
                                        <br/>
                                        - type of performance: ballet, drama, opera, philharmonic    
                                   <br/>
                                           When you order tickets, go to the cart and pay. Then the purchased tickets are removed from the warehouse. If you try to order more tickets than are in stock, a warning message appears and you will not be allowed to do so.
                                   
                                    </li>
                                </ul>                                
                            </li>
                            <li>Entry page(only Admin)
                                <br/>
                                Adding new tickets - This option is enabled only for the admin.
                                <ul>
                                    <li>Go to ENTRY</li>
                                    <li>Fill the entry form:
                                        
                                        <ul>Validation:
                                            <li> - title - letters</li>
                                            <li> - author - letters</li>
                                            <li> - price - numbers</li>
                                            <li> - quantity - press button quantity - random number</li>
                                            <li> - scene - radio button - 2 options - small or large</li>
                                            <li> - image is randomly by type of performance</li>
                                        </ul>
                                    </li>
                                    <li>Press button ENTRY</li>
                                </ul>      
                                Congratulation!!! You added new performance on stock, and now you can sell it.

                            </li>
                            <li>SignUp Page 
                                <br>Validation on signUp page will not allow you to submit if information are not valid... 
                                Valid information * email -> something@something.xy 
                            </li>
                            <li>SignIn Page 
                                <br/>Information have to bi valid to submit. Submitting validate signIn form will redirect you to App
                                <br/>
                                Notice: if you are not logIn you are not allow to go to E-shop page, and only if you are  logIn
                                with admin credentials you can visit entry page to add new entry of tickets.                                
                            </li>
                      
                            <li>Landing page:
                                <br/>
                                <ul>
                                    <li>Language menu (choose English or Serbian)</li>
                                    <li>Responsive navigation menu hamburger</li>
                                    <li>E-shop -position:
                                        <br/>
                                    Responsive - inside hamburger menu
                                        <br/>
                                    Desk top - inside navigation menu on the top right
                                    </li>
                                    <li> Sections:
                                        <ul>
                                            <li>Links</li>
                                            <li>Text</li>
                                            <li>Premiere</li>
                                            <li>Reviews - slider left to right</li>
                                            <li>Location
                                                <ul>
                                                    <li>Gallery - slider with dots</li>
                                                    <li>Google map</li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li>Footer</li>
                                    <li>Credits for images and icons</li>
                                </ul>
                            </li>
                        </ol>
                        Thank you for reading!
                        <br/>Tanja
                    </div>
                    <br/>
                    <a href="#portfolio-container">
                        <button onclick="closeProjectPage()" class="up-dark color-gray-secondary">                        
                            Close                        
                        </button>
                </a>
                </div>
`
const bta = `
<div  class="square-out gray-secondary-in">
                    <div class="direction-row-between">
                        <a href = "https://business-travel-agency-react.vercel.app" target = "_blank">
                            
                            <img class="circle-out gray-secondary-out " src="./images/travel-and-tourism.png" alt="suites"/>
                        </a>
                        <h2 id="project-header" class="text-gray-secondary-shadow-dark">
                            Business travel agency
                        </h2>
                    </div>
                    <div id="project">
                        <h3>About:</h3>
                        <p>Business travel agency (bta) is application that allow users to see information, give feedback 
                            and see other users comments about accommodation, transport, local culture, food etc. in some city
                        </p>
                        <h3>Technics:</h3>
                        <p>React.js, JavaScript, HTML, CSS, JSX, sessionStorage, localStorage</p>                            
                        <h3>Credentials:</h3>
                        <p>App. starts with signIn page(only registered users can use App). To become register user, please go to 
                            signUp page and fill up form.
                            <br/>
                             You can, also,  use default user or admin credentials for demo purpose
                             <br/> 
                            <span>USER:</span> email: user@user.com, password: UserUser1, <br/>
                            <span>ADMIN:</span> email: admin@admin.com, password: AdminAdmin1 
                        </p>
                        <h3>Avatars:</h3>
                        <ol>
                            <li> User 
                                <br/>
                                Default value: email: user@user.com, password: UserUser1
                                <ul>Can do:
                                    <li>sign in,</li>
                                    <li>sign up,</li>
                                    <li>see information about hotels, restaurants, attractions, airports, providers(airplane, train, bus, rent a car)</li>
                                    <li>see other users comments,</li>
                                    <li>give feedback about hotels, restaurants, attractions, providers,</li>
                                    <li>see own comments,</li>
                                    <li>delete own comment</li>
                                </ul>
                            </li>
                            <li> Admin
                                <br/>
                                Default value: email: admin@admin.com, password: AdminAdmin1
                                <ul>
                                    Can do:
                                    <li>all that user can do,</li>
                                    <li>delete users comment ,</li>
                                    <li>add new provider,</li>
                                    <li>edit provider</li>
                                </ul>
                            </li>
                        </ol>
                        <h3>Descriptions - App pages:</h3>
                        <ol>
                            <li>SignUp Page 
                                <br>Validation on signUp page will not allow you to submit if information are not valid... 
                                Valid information * email -> something@something.xy * password -> Number, letter, Capital letter >=8 
                                Submitting validate form will redirect you to SignIn page
                            </li>
                            <li>SignIn Page 
                                <br/>Information have to bi valid to submit Submitting validate signIn form will redirect you to App
                                <br/>
                                Notice: if you are not logIn you are not allow to go to App pages, and if you are logIn you have to 
                                Sign out to visit SignIn and SignUp pages.
                            </li>
                            <li>
                                Home Page (user & admin) 
                                <br/>Select country, and than city from drop-down menu. Redirect to desire city page with information.
                            </li>
                            <li>  
                                Life...(user and admin) 
                                <br/>Press button "SHOW INFORMATION ABOUT CITY" => Menu:
                                <ul>
                                    <li>
                                        Restaurants 
                                        <ul>
                                            <li> - information (name, contact, info, description, image, rating)</li>
                                            <li> - see comments (user comments from API and App)</li>
                                            <li> - leave a comment (user to App)</li>
                                            <li> - delete a comment (admin - user comment from App)</li>
                                        </ul>  
                                    </li>
                                    <li>
                                        Hotels 
                                        <ul>
                                            <li> - information (name, contact, info, description, image, rating)</li>
                                            <li> - see comments (user comments from API and App)</li>
                                            <li> - leave a comment (user to App)</li>
                                            <li> - delete a comment (admin - user comment from App)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Attractions 
                                        <ul>
                                            <li> - information (name, contact, info, description, image, rating)</li>
                                            <li> - see comments (user comments from API and App)</li>
                                            <li> - leave a comment (user to App)</li>
                                            <li> - delete a comment (admin - user comment from App)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Airports - information (name, code, info)
                                    </li>
                                    <li>
                                        Select form => change city</li>                                    
                                </ul>
                            </li> 
                            <li>
                                Feedback (only user)
                                <ul>
                                    <li>My comments - See all your feedbacks- Delete your own comment</li>
                                    <li>Provider List - Providers - list - details - Leave comment (user to App)</li>
                                </ul> 
                            </li>
                            <li>
                                Providers (only admin)
                                <ul>
                                    <li>New Provider Form - add new provider</li>
                                    <li>Provider List - Providers - list - details - Edit - change information about provider</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <br/>
                    <a href="#portfolio-container">
                        <button onclick="closeProjectPage()" class="up-dark color-gray-secondary">                        
                            Close                        
                        </button>
                </a>
                </div>
`
