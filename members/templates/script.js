let originalLink = "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fa4rnzmugfig81.jpg%3Fwidth%3D1284%26format%3Dpjpg%26auto%3Dwebp%26s%3Dd09686872f8647da0a20fd49d543a38488d11f09";

// Decoding URL
let decodedLink = decodeURIComponent(originalLink);

// Replacing 'preview' with 'i'
let modifiedLink = decodedLink.replace('preview', 'i');

// Removing everything after .jpg or .png
modifiedLink = modifiedLink.split(/\.jpg|\.png/)[0] + '.jpg';

console.log(modifiedLink);
