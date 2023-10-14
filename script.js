const contents = document.querySelectorAll('.contents');
const icon= document.querySelectorAll('.list button i');
const list = document.querySelectorAll('.list');
let prevFocused = 0;
let prevClicked = 2;

function focused(i) {
    contents[prevFocused].className = 'contents';

    contents[i].className = `contents bg-${i+1}`;

    prevFocused = i
    console.log(`Focused!: ${i}`);
}

function clicked(i) {
    list[prevClicked].className = 'list';
    icon[prevClicked].className = 'bi bi-chevron-down';

    list[i].className = 'list active';
    icon[i].className = 'bi bi-chevron-up'

    prevClicked = i
    console.log(`Clicked!: ${i}`);
}

clicked(prevClicked);
