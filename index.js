const gallery = document.querySelector('.gallery');

async function getData(tag) {
    const url = `https://api.unsplash.com/search/photos?query=${tag}&per_page=16&page=1&orientation=landscape&tag_mode=all&client_id=oaTV7VkY1wzRWhRRCry0x9U_Zjboux8v7ef17iOSnH0`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function getImages(tag) {
    const data = await getData(tag);
    let imgArr = [];
    for (i = 0; i < 12; i++) {
        imgArr.push(data.results[i].urls.regular);
    }
    return imgArr;
}

//getImages('batman').then(console.log);
function fillGallery(images) {
    images.forEach(element => {
        const img = document.createElement('img');
        img.classList.add('image')
        img.src = element;
        img.alt = `image`;
        gallery.append(img);
    });
}

getImages('batman').then(fillGallery);




