function showText() {
    const showAllText = document.getElementById('resum');
    const hiddenSeeMore = document.getElementById('see-more')   

    showAllText.style.height;
    if(showAllText.style.height == '110px') {
        showAllText.style.height = '485px';
        hiddenSeeMore.style.display = 'none';
    } else {
        showAllText.style.height = '110px';
        hiddenSeeMore.style.display = 'inline';
    }
}

function showAreaHidden() {
    const areaHidden = document.getElementById('section-hidden');
    const hidderSection = document.getElementById('section4-hidden');

    hidderSection.style.display = 'none';
    areaHidden.style.display = 'block';
}

function hidderSection() {
    const hidderSection2 = document.getElementById('section-hidden');
    const showSection2 = document.getElementById('section-hidden-2');

    hidderSection2.style.display = 'none';
    showSection2.style.display = 'block'
}

function backSection() {
    const backSection = document.getElementById('section-hidden');
    const hidderSection2 = document.getElementById('section-hidden-2');

    backSection.style.display = 'block';
    hidderSection2.style.display = 'none';

}

function showComments() {
    const hiddenComments = document.getElementById('section-hidden-3');
       
    hiddenComments.style.display;
    if(hiddenComments.style.display == 'none') {
        hiddenComments.style.display = 'block';
    } else {
        hiddenComments.style.display = 'none';
    }
}