export const _var = {
    select_div: () => document.querySelector('.select-input_div'),
    drop_down_input: () => document.querySelector('#drop-down'),
    cancel_btn: () => document.querySelector('#cancel-btn'),
    clear_all_btn: () => document.querySelector('#clear-all'),
    add_users_btn: () => document.querySelector('#add-users'),
    all_checkboxes: () => document.querySelectorAll(`input[type="checkbox"]`),
    selected_checkboxes: () => document.querySelectorAll(`input[type='checkbox']:checked`),
    user_count: () => document.querySelector('#user-count'),
    search_input: () => document.querySelector('#search'),
}