
function task_change_color() {
    color = ['red', 'yellow', 'green'];
    let count = 0;
    document.querySelector('.task1').addEventListener('mouseover', function () {
        event.target.style.backgroundColor = color[count];
        count++;
        if (count == color.length) {
            count = 0;
        }
    })
    document.querySelector('.task1').addEventListener('mouseout', function () {
        event.target.style.backgroundColor = 'rgb(158, 16, 187)'
    })
}
task_change_color();

function task_secret() {
    document.querySelector('.task2').addEventListener('mouseover', function () {
        event.target.style.backgroundColor = 'yellow';
        event.target.style.borderColor ='black';
        document.querySelector('p').innerText = 'Хочеш знати який?';
        document.querySelector('p').style.color = 'black'
    })
    document.querySelector('.task2').addEventListener('mousedown', function () {
        event.target.style.backgroundColor = 'black';
        event.target.style.borderColor ='yellow';
        document.querySelector('p').innerText = 'А я тобі не скажу!';
        document.querySelector('p').style.color = 'white'
    })
    document.querySelector('.task2').addEventListener('mouseout', function () {
        event.target.style.backgroundColor = 'rgb(158, 16, 187)';
        event.target.style.borderColor ='orange';
        document.querySelector('p').innerText = 'У мене є секрет!';
        document.querySelector('p').style.color = 'blue'
    })
    document.querySelector('.task2').addEventListener('mouseup', function () {
        event.target.style.backgroundColor = 'yellow';
        event.target.style.borderColor ='black';
        document.querySelector('p').innerText = 'Хочеш знати який?';
        document.querySelector('p').style.color = 'black'
    })
}
task_secret();

function task_url () {
    document.querySelector('.task3').addEventListener('mousedown', function () {
        let url = prompt('Введіть адресу картинки');
        event.target.style.backgroundImage = 'url("' + url + '")';
        event.target.style.backgroundSize = 'contain'
    })
}
task_url();

function task_text () {
    document.querySelector('ol').addEventListener('mousedown', function () {
        let color_text = event.target.innerText;
        event.target.style.color = color_text;
    })
}
task_text();
