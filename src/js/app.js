import '../css/style.css';
import './plugins';
import locations from './store/location';
import formUi from './views/form';
import currencyUI from './views/currency';




document.addEventListener('DOMContentLoaded', () => {
    initApp();
    const form = formUi.form;

    // Events
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    })

    // Handlers
    async function initApp() {
        await locations.init();
        formUi.setAutocompleteData(locations.shortCitiesList);
    }

    async function onFormSubmit() {
        // собрать данные из input 
        const origin = locations.getCityCodeByKey(formUi.originValue);
        const destination = locations.getCityCodeByKey(formUi.destinationValue);
        const depart_date = formUi.departDateValue;
        const return_date = formUi.returnDateValue;
        const currency =  currencyUI.currencyValue;

        //данные надо преобразовать CODE, CODE, 2021-06, 2021-07

        console.log(origin, destination, depart_date, return_date );
        await locations.fetchTickets({
            origin,
            destination, 
            depart_date, 
            return_date,
            currency,
        });

    }
}) 