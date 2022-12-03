(function (){
    const burgerItem = document.querySelector(`.burger`);
    const menu = document.querySelector(`.menu`);
    const first = document.querySelector(`.burger_line_first`);
    const second = document.querySelector(`.burger_line_second`);
    const third = document.querySelector(`.burger_line_third`);
    const burgerClose = document.querySelector(`.burger_close`);
    const burgerClose2 = document.querySelector(`.close`);

        burgerItem.addEventListener(`click`, () => {
            menu.classList.add(`header_nav_active`);
            first.classList.add(`burger_line_first_active`);
            second.classList.add(`burger_line_second_active`);
            third.classList.add(`burger_line_third_active`);
            burgerClose.classList.add(`burger_close_active`);
        });
        burgerClose.addEventListener(`click`, () => {
            menu.classList.remove(`header_nav_active`);
            first.classList.remove(`burger_line_first_active`);
            second.classList.remove(`burger_line_second_active`);
            third.classList.remove(`burger_line_third_active`);
            burgerClose.classList.remove(`burger_close_active`);
        });
        burgerClose2.addEventListener(`click`, () => {
            menu.classList.remove(`header_nav_active`);
            first.classList.remove(`burger_line_first_active`);
            second.classList.remove(`burger_line_second_active`);
            third.classList.remove(`burger_line_third_active`);
            burgerClose.classList.remove(`burger_close_active`);
        });

}());