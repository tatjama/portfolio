const openProjectPage = (project) => {
    document.querySelector('.project').style.display = "block";  
    document.querySelector('.project').innerHTML = project;  
}
const closeProjectPage = () => {
    document.querySelector('.project').style.display = "none";
}
const fullfun = `
<div  class="square-out gray-secondary-in">
                    <div class="direction-row-between">
                        <a href="https://privatniboravak.com" target = "_blank">
                            
                            <img class="circle-out gray-secondary-out " src="./images/fullfun.webp" alt="rock, paper, scissors"/>
                        </a>
                        <h2 id="project-header" class="text-gray-secondary-shadow-dark">
                            Full Fun
                        </h2>
                    </div>
                    <div id="project">
                        <h3>About:</h3>
                        <p> Full Fun is a presentation website for extended day care for elementary school students
                        </p>
                        <h3>Technics:</h3>
                        <p>SEO, JavaScript, HTML, CSS, PHP.</p>                            
                        
                        
                        <h3>Tasks:</h3>
                        <ol>
                            <li>Responsive design</li>
                            <li>SEO 
                                <br/>The search engine optimization gave great results. Four months after the setup, the site came out on top for keywords
                            </li>
                            <li>Hosting                                                             
                            </li>
                            <li>E-mail server                              
                            </li>
                            <li> DNS</li>
                               
                             <li>Copywriting</li>
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
const rockPaperScissors = `
<div  class="square-out gray-secondary-in">
<div class="direction-row-between">
    <a href="https://tatjama.github.io/fem-rock-paper-scissors-master/" target = "_blank">
        
        <img class="circle-out gray-secondary-out " src="./images/rock.png" alt="rock, paper, scissors"/>
    </a>
    <h2 id="project-header" class="text-gray-secondary-shadow-dark">
        Rock-paper-scissors
    </h2>
</div>
<div id="project">
    <h3>About:</h3>
    <p> Rock-paper-scissors is advanced challenge game by 
        <a href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH" target="_blank">
            Frontend Mentor
        </a>. 
         <br/>
         Challenge is to build out this Rock, Paper, Scissors game and get it looking as close to the 
         design as possible. We can use any tools we like to help us complete the challenge.
    </p>
    <h3>Technics:</h3>
    <p> JavaScript, HTML, CSS, Session for keep score.</p>                            
    
    <h3>Avatar:</h3>                        
         Users should be able to:                               
            <ul>                                   
                <li>View the optimal layout for the game depending on their device's screen size,</li>
                <li>Play Rock, Paper, Scissors against the computer,</li>
                <li>Maintain the state of the score after refreshing the browser (optional),</li>                                    
                <li>Bonus: Play Rock, Paper, Scissors, Lizard, Spock against the computer (optional)</li>
            </ul>  
    <h3>Rules:</h3>
    If the player wins, they gain 1 point. If the computer wins, the player loses one point.
     <ul>
         <li>
            Original
            <ul>
                <li>Paper beats Rock</li>
                <li>Rock beats Scissors</li>
                <li>Scissors beats Paper</li>
            </ul>
         </li>
         <li>
             Bonus
             <ul>
                 <li>Scissors beats Paper</li>
                 <li>Paper beats Rock</li>
                 <li>Rock beats Lizard</li>
                 <li>Lizard beats Spock</li>
                 <li>Spock beats Scissors</li>
                 <li>Scissors beats Lizard</li>
                 <li>Paper beats Spock</li>
                 <li>Rock beats Scissors</li>
                 <li>Lizard beats Paper</li>
                 <li>Spock beats Rock </li>
             </ul>
         </li>                             
     </ul>   

    <h3>Descriptions - Challenge:</h3>
    <ol>
        <li>Layout
            <ul>The designs were created to the following widths:
                <li>
                    Mobile: 375px
                </li>
                <li> Desktop: 1366px
                </li>
            </ul>                                
        </li>

        <li>Colors, fonts etc get from the Frontend Mentor style file                                
        </li>
        <li>Design
            <br/>
            Task is to build out the project to the given designs.
            We can either choose the original designs for the simpler version or the bonus designs for the harder
             version, both mobile and desktop . 
            <br/>
            The designs are in JPG static format. This will mean that we need to use our best judgment for styles
             such as font-size, padding and margin. This should show how train is our eye to perceive differences in 
             spacings and sizes. 
             <h4>Example designs:</h4>
             <ul>
                 <li>Desktop design
                    <div class="direction-row">
                        <figure>
                            <img src="./images/desktop-rules-modal-bonus.jpg">
                            <figcaption>Rules - bonus</figcaption>
                        </figure>
                        <figure>
                            <img src="./images/desktop-step-1-bonus.jpg">
                            <figcaption>Start - bonus</figcaption>
                        </figure>
                        <figure>
                            <img src="./images/desktop-rules-modal.jpg">
                            <figcaption>Rules</figcaption>
                        </figure>
                        <figure>
                            <img src="images/desktop-step-1.jpg">
                            <figcaption>Start</figcaption>
                        </figure>
                    </div>

                 </li>
                 <li>Mobile design
                    <div class="direction-row">
                        <figure>
                            <img src="./images/mobile-rules-modal-bonus.jpg">
                            <figcaption>Rules - bonus</figcaption>
                        </figure>
                        <figure>
                            <img src="./images/mobile-step-1-bonus.jpg">
                            <figcaption>Start - bonus</figcaption>
                        </figure>
                        <figure>
                            <img src="./images/mobile-rules-modal.jpg">
                            <figcaption>Rules</figcaption>
                        </figure>
                        <figure>
                            <img src="images/mobile-step-1.jpg">
                            <figcaption>Start</figcaption>
                        </figure>
                    </div>

                 </li>
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
