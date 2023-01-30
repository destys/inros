//========================================================================================================================================================

// Акции

try {

    const selectors = document.querySelectorAll('.item-windows-catalog__sales');

    const date = new Date();

    let dayOfWeek = date.getDay();

    if (dayOfWeek === 0) {

        dayOfWeek = 7;

    }

    date.setDate(date.getDate() + (7 - date.getDay()));

    date.setHours(23, 59, 59);

    const dateString = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();

    selectors.forEach(selector => {

        selector.innerHTML = `Акция до ${dateString}`;

    });

} catch (error) {

    throw error;

}


const selector = document.querySelector('.adv-windows-credit .adv-windows-credit__text');

if (selector) {
    const date = new Date().getMonth();
    let fMonth;
    switch (date) { case 0: fMonth = "январе"; break; case 1: fMonth = "феврале"; break; case 2: fMonth = "марте"; break; case 3: fMonth = "апреле"; break; case 4: fMonth = "мае"; break; case 5: fMonth = "июне"; break; case 6: fMonth = "июле"; break; case 7: fMonth = "августе"; break; case 8: fMonth = "сентябре"; break; case 9: fMonth = "октябре"; break; case 10: fMonth = "ноябре"; break; case 11: fMonth = "декабре"; break; };
    selector.innerHTML = `человек стали нашими клиентами в ${fMonth}`;
}
