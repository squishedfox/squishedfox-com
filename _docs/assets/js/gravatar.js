// Load the gravatar profile
function loadData({entry}) {
    const aboutParagraph = document.querySelector('p#gravatar-about');
    const links = document.querySelector('div#gravatar-links');
    const image = document.querySelector('img#gravatar-image');
    const pronounSpan = document.querySelector('span#gravatar-pronoun');
    const {accounts, photos, urls, pronouns} = entry[0];

    pronounSpan.innerText = `(${pronouns})`;

    // set the accounts
    if (accounts?.length) {
        for (let i = 0; i < accounts.length; ++i) {
            const {iconUrl, name, url, display} = accounts[i];
            
            const imgTag = document.createElement('img');
            const anchorTag = document.createElement('a');
            
            imgTag.src = iconUrl; // set the image url
            imgTag.alt = name;
            
            anchorTag.href = url;
            anchorTag.title = display;
            anchorTag.target = "_blank";
            anchorTag.rel = "noopener noreferrer nofollow";
            
            anchorTag.appendChild(imgTag);
            links.appendChild(anchorTag);
        }
    }
    // set the accounts
    if (urls?.length) {
        for (let i = 0; i < urls.length; ++i) {
            const {value, title} = urls[i];
            const imgTag = document.createElement('img');
            const anchorTag = document.createElement('a');
            
            anchorTag.href = value;
            anchorTag.title = title;
            anchorTag.target = "_blank";
            anchorTag.rel = "noopener noreferrer nofollow";

            anchorTag.appendChild(imgTag);
            links.appendChild(anchorTag);
        }
    }
    const photo = photos[0];
    image.src = photo.value;
    image.alt = "Gravatar Image";
}