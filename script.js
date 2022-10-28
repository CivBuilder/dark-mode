goingDark = () => {
    let subHeadings = document.getElementsByTagName('h4');
    let paragraphs = document.getElementsByTagName('p');
    let mainHeading = document.getElementsByTagName('h1');

    for (let i = 0; i < subHeadings.length; ++i) {
        subHeadings[i].style.color = 'white';
    }
    for (let i = 0; i < paragraphs.length; ++i) {
        paragraphs[i].style.color = 'white';
    }
    mainHeading[0].style.color = 'white';
    document.body.style.backgroundColor = 'black';
};

goingLight = () => {
    let subHeadings = document.getElementsByTagName('h4');
    let paragraphs = document.getElementsByTagName('p');
    let mainHeading = document.getElementsByTagName('h1');

    for (let i = 0; i < subHeadings.length; ++i) {
        subHeadings[i].style.color = 'black';
    }
    for (let i = 0; i < paragraphs.length; ++i) {
        paragraphs[i].style.color = 'black';
    }
    mainHeading[0].style.color = 'black';
    document.body.style.backgroundColor = 'white';
};