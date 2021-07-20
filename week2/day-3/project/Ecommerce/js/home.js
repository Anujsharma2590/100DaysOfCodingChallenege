function slideshow() {
    
    const arr = ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.technotification.com%2F2018%2F04%2Ftop-5-best-websites-to-learn-web-development.html&psig=AOvVaw2dNzSII9CYCB9o1ZBOIqTs&ust=1626432329579000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLid2eLy5PECFQAAAAAdAAAAABAD', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kenzie.academy%2Fblog%2Feverything-you-need-to-know-about-a-career-in-web-development%2F&psig=AOvVaw2dNzSII9CYCB9o1ZBOIqTs&ust=1626432329579000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLid2eLy5PECFQAAAAAdAAAAABAJ'];

    let div = document.getElementById('slideshow');

    let img = document.getElementById('img');
    img.src = arr[0];
    div.append(img);
    let i = 0;

    setInterval(function () {
        if (i==arr.length-1) {
            i = 0;
        }
        img.src = arr[i];
        i++;
    }, 3000);
}

slideshow();