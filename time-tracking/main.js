const options = document.querySelectorAll('li');
changeOption(options[0]);
for(const option of options){
    option.addEventListener('click', () => changeOption(option));
}
function changeOption(option) {
    if(option.getAttribute('class') !== 'active') {
        if(document.querySelector('.active')) {
            document.querySelector('.active').removeAttribute('class');
        }
        option.setAttribute('class', 'active');
        removeData();
        fetch('data.json').then(response => response.json()).then(json => printData(json, option.textContent));
    }
}
function printData(jsonFile, option) {
    const stats = document.querySelectorAll('.stats .content');
    for(let i = 0; i < 6; i++) {
        const current = document.createElement('strong');
        const previous = document.createElement('p');
        const container = document.createElement('div');
        container.setAttribute('class', 'flex');
        current.textContent = `${jsonFile[i].timeframes[option.toLowerCase()].current}hrs`;
        previous.textContent = `Last ${option} - ${jsonFile[i].timeframes[option.toLowerCase()].previous}hrs`;
        container.appendChild(current);
        container.appendChild(previous);
        stats[i].appendChild(container);
    }
}
/*
function removeData() {
    const stats = document.querySelectorAll('.content .flex');
    for(const stat of stats) {
        stat.remove();
    }
}
*/