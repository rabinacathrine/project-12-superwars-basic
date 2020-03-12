const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(var i = 0; i < (players.length); i++)
    {
        if(i%2==0)
        detailedPlayers[i] =
        {
            name: players[i],
            strength: 100,
            image:"images/super-"+(i+1)+".png",
            type:"hero"
        }
        else
        detailedPlayers[i] =
        {
            name: players[i],
            strength: 100,
            image: "images/super-"+(i+1)+".png",
            type:"villian"
        }
    }
return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    // return Math.random(1,100);
    // function randomNumber(min, max) {  
    //     return Math.floor(Math.random() * (max - min) + min); 
    // }
    a=Math.floor(Math.random()*100)+1;
    return a;
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';
    for(var i =0;i<players.length;i++)
    {
        fragment =
        
    `<div class="player">
<img src="${players[i].image}" alt="">
<div class="name">${players[i].name}</div>
<div class="strength">${players[i].strength}</div>
</div>`
        
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}