import '../css/style.css';
import './plugins';
import locations from './store/location';
import formUi from './views/form';




document.addEventListener('DOMContentLoaded', () => {
    initApp();

    // Events

    // Handlers
    async function initApp() {
        await locations.init();
        formUi.setAutocompleteData(locations.shortCitiesList);
    }
})