import { _var } from "./variables.js";

const data = [
    {
        id: 1,
        Name: 'Sakthivel J',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 2,
        Name: 'Ananya R',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3,
        Name: 'Rohit K',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 4,
        Name: 'Meera S',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 5,
        Name: 'Arjun V',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 6,
        Name: 'Priya D',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 7,
        Name: 'Karthik M',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 8,
        Name: 'Neha T',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 9,
        Name: 'Vikram N',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 10,
        Name: 'Divya P',
        imgSrc: './static/profile.jpg'
    }
]


main() // Function call

function main() { // Script logics starts here;
    appendData();
    Events();
}

function Events() {
    _var.drop_down_input().addEventListener('focus', () => {
        document.querySelector('.select-input_div').classList.add('active');
        document.querySelector('.users-list').classList.add('show')
        document.querySelector('.cta-btns').style.display = 'block';
    })
}
function appendData() {
    const list_UL = document.querySelector('.users-list-ul');
    const html = data.map(item =>
        `<li class='users-list__item'>
            <img src='${item.imgSrc}' alt='profile-image' class='profile-img' />
            <span class='users-list__item__name'>${item.Name}</span>
            <span class='users-list__span'>
                <input type='checkbox' id='${item.id}' class='checkBox' />
            </span>
        </li>`
    ).join('');
    list_UL.innerHTML = html;
}