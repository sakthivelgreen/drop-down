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
let temporary_array = [];
let final_array = [];
main() // Function call

function main() { // Script logics starts here;
    appendData();
    Events();
}

function Events() {
    // Event drop down box
    _var.select_div().addEventListener('click', (event) => {
        if (!_var.select_div().classList.contains('show')) {
            document.querySelector('.users-list-container').classList.add('show');
            _var.select_div().classList.add('show');
            display_user_header()
            handle_checkboxes();
            handle_buttons();
        }
    })

    // Event Search
    _var.search_input().addEventListener('input', handle_search);

    // Event for All Checkboxes
    _var.all_checkboxes().forEach(item => {
        item.addEventListener('change', checkBox_Event)
    })

    // Button Click Events
    _var.add_users_btn().addEventListener('click', handle_save);
    _var.clear_all_btn().addEventListener('click', handle_clear);
    _var.cancel_btn().addEventListener('click', handle_cancel);

    // delete using icon
    _var.drop_down_input().addEventListener("click", (e) => {
        if (e.target.classList.contains('delete-icon')) {
            e.stopPropagation();
            let element = e.target.closest('span');
            let id = element.id.split('_')[1]
            final_array = final_array.filter(item_id => item_id !== id);
            temporary_array = [...final_array];
            element.remove();
            display_user_header();
            handle_checkboxes()
        }
    });
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

function checkBox_Event(e) {
    let target_Variable = e.target;
    e.preventDefault();
    if (target_Variable.checked) {
        target_Variable.classList.add('item_checked');
        if (!(temporary_array.includes(target_Variable.id))) {
            temporary_array.push(target_Variable.id);
        }
    } else {
        target_Variable.classList.remove('item_checked')
        temporary_array = temporary_array.filter(item => item != target_Variable.id)
    }
    if (!(temporary_array.length <= 5)) { target_Variable.checked = false; temporary_array.pop(); alert('Max User Limit: 5') }
    handle_buttons();
    handle_header();
}
function handle_header() {
    _var.user_count().classList.remove('show');
    if (temporary_array.length > 2) {
        _var.drop_down_input().textContent = `${temporary_array.length} users selected`;
    } else {
        _var.drop_down_input().textContent = 'Select Users';
    }
}

// for checkboxes
function handle_checkboxes() {
    if (final_array.length > 0) {
        temporary_array = [...final_array];
    }

    _var.all_checkboxes().forEach((value) => value.checked = false)

    temporary_array.forEach((item) => {
        const checkbox = document.querySelector(`#${CSS.escape(item)}`);
        if (checkbox) {
            checkbox.checked = true;
        } else {
            console.warn(`Checkbox with id ${item} not found`);
        }
    });
}

// for Done button
function handle_save(event) {
    if (temporary_array.length > 0) {
        final_array = [...temporary_array];
        document.querySelector('.users-list-container').classList.remove('show');
        _var.select_div().classList.remove('show');
        display_user_header();
    }
}
function display_user_header() {
    show_hide_count()
    if (final_array.length > 0) {
        _var.drop_down_input().textContent = '';
        let display_data = data.filter(item => final_array.includes(String(item.id)));
        let html = '';
        display_data.forEach((item, index) => {
            if (index < 2) {
                html += `<span id='U_${item.id}' class="selected-users">${item.Name} <i class="delete-icon fa-solid fa-xmark"></i></span>`;
            }
        })
        _var.drop_down_input().innerHTML = html;
    } else {
        handle_header()
    }
}
// for Clear all button
function handle_clear(event) {
    temporary_array = [];
    _var.selected_checkboxes().forEach(item => item.checked = false);
    _var.drop_down_input().textContent = 'Select Users';
    _var.user_count().classList.remove('show');
    handle_buttons();
}

// for Cancel Button
function handle_cancel(event) {
    document.querySelector('.users-list-container').classList.remove('show');
    _var.select_div().classList.remove('show');
    handle_checkboxes();
    display_user_header();
}

// for Count in header
function show_hide_count() {
    if (temporary_array.length > 2) {
        _var.user_count().classList.add('show');
        _var.user_count().textContent = `+ ${temporary_array.length - 2} more`;
    } else {
        _var.user_count().classList.remove('show');
        _var.user_count().textContent = ``;
    }
}
// for Buttons Enable and disable
function handle_buttons() {
    if (temporary_array.length > 0) {
        _var.clear_all_btn().disabled = false;
        _var.clear_all_btn().title = '';
        _var.add_users_btn().disabled = false;
        _var.add_users_btn().title = "";

    } else {
        _var.clear_all_btn().disabled = true;
        _var.clear_all_btn().title = 'No items to clear';
        _var.add_users_btn().disabled = true;
        _var.add_users_btn().title = "Select at least 1 user";
    }
}


// for search
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
