//========================================================================================================================================================

// Акции

try {

    const selectors = document.querySelectorAll('.item-windows-catalog__sales');
 
    const date = new Date();
 
    const dayOfWeek = date.getDay();
 
    if (dayOfWeek === 0) {
 
        dayOfWeek = 7;
 
    }
 
    date.setDate(date.getDate() + (7 - date.getDay()));
 
    date.setHours(23, 59, 59);
 
    const dateString = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();
 
    selectors.forEach(selector => {
 
        selector.innerHTML = `Акция до ${dateString}`;
 
    });
 
 } catch(error) {
 
    throw error;
 
 }