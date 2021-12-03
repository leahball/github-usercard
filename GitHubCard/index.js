import axios  from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/leahball')
.then(res => {
  console.log(res);
})
.catch(error => {
  console.error(error)
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(data) {

//instantiating the elements
const userCard = document.createElement('div');
const image = document.createElement('img');
const cardInfo = document.createElement('div');
const name = document.createElement('h3');
const userName = document.createElement('p');
const userLocation = document.createElement('p');
const profileP = document.createElement('p');
const profileLink = document.createElement('p');
const userFollowers = document.createElement('p');
const userFollowing = document.createElement('p');
const userBio = document.createElement('p');

//setting classnames, attributes and content
userCard.classList.add('card');
image.src = data.avatar_url;
cardInfo.classList.add('card-info');
name.classList.add('name');
name.textContent = data.name || data.login;
userName.classList.add('username');
userName.textContent = data.login;
userLocation.textContent = `Location: ${data.location}`;
profileP.textContent = `Profile: `;
profileLink.textContent = data.html_url;
profileLink.setAttribute('href', data.html_url);
userFollowers.textContent = `Followers: ${data.followers}`;
userFollowing.textContent = `Following: ${data.following}`;
userBio.textContent = `Bio: ${data.bio}`;

//Build Structure
userCard.appendChild(image);
userCard.appendChild(cardInfo);
cardInfo.appendChild(name);
cardInfo.appendChild(userName);
cardInfo.appendChild(userLocation);
cardInfo.appendChild(profileP);
profileP.appendChild(profileLink);
cardInfo.appendChild(userFollowers);
cardInfo.appendChild(userFollowing);
cardInfo.appendChild(userBio);

return userCard;

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
