import { _var } from "./variables.js";

const data = [
    {
        id: 3201,
        Name: 'Sakthivel J',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3202,
        Name: 'Ananya R',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3203,
        Name: 'Rohit K',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3204,
        Name: 'Meera S',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3205,
        Name: 'Arjun V',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3206,
        Name: 'Priya D',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3207,
        Name: 'Karthik M',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3208,
        Name: 'Neha T',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3209,
        Name: 'Vikram N',
        imgSrc: './static/profile.jpg'
    },
    {
        id: 3210,
        Name: 'Divya P',
        imgSrc: './static/profile.jpg'
    }
]
let checked_items_Array = [];

main() // Function call

function main() { // Script logics starts here;
    appendData();
    Events();
}

function Events() {
    _var.select_div().addEventListener('click', (event) => {
        if (_var.select_div().classList.contains('show')) {
            document.querySelector('.users-list-container').classList.remove('show');
            _var.select_div().classList.remove('show');
        } else {
            document.querySelector('.users-list-container').classList.add('show');
            _var.select_div().classList.add('show');
        }
    })

    _var.search_input().addEventListener('input', handle_search);

    _var.all_checkboxes().forEach(item => {
        item.addEventListener('change', (e) => {
            if (e.target.checked) {
                e.target.classList.add('item_checked');
                checked_items_Array.push(e.target.id);
            } else {
                e.target.classList.remove('item_checked')
                checked_items_Array = checked_items_Array.filter(item => item != e.target.id)
            }
            handle_header()
        })
    })
    _var.add_users_btn().addEventListener('click', handleSave)
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
    ).join('') + `<span class="no-records">No Records Found</span>`;

    list_UL.innerHTML = html;
}

function handle_header() {
    if (_var.selected_checkboxes().length > 2) {
        _var.drop_down_input().textContent = `${_var.selected_checkboxes().length} users selected`;
    } else {
        _var.drop_down_input().textContent = 'Select Users';
        // _var.user_count().classList.remove('show');
        // _var.user_count().textContent = ``;
    }
    if (!(_var.selected_checkboxes().length <= 5)) alert('Maximum 5 Users Only')
}

function handleSave(event) {
    if (_var.selected_checkboxes().length > 0) {
        if (_var.selected_checkboxes().length > 2) {
            _var.user_count().classList.add('show');
            _var.user_count().textContent = `+ ${_var.selected_checkboxes().length - 2} more`;
        }

    }
}

function handle_search(event) {
    let search_key;
    let all_list_items = document.querySelectorAll('li');
    if (_var.search_input().value !== '') {
        search_key = _var.search_input().value;
        let filtered_data = data.filter(item => item.Name.toLocaleLowerCase().includes(search_key.toLocaleLowerCase()));
        all_list_items.forEach(item => item.style.display = 'none');
        if (filtered_data.length == 0) {
            document.querySelector('.no-records').textContent = 'No Records Found';
            document.querySelector('.no-records').classList.add('active');
        } else {
            document.querySelector('.no-records').textContent = '';
            document.querySelector('.no-records').classList.remove('active');
        }
        filtered_data.map(item => {
            document.querySelector(`#${CSS.escape(item.id)}`).closest('li').style.display = 'flex';
        })
    } else {
        all_list_items.forEach(item => item.style.display = 'flex');
    }
}