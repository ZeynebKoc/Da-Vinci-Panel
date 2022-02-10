import { writable } from "svelte/store";

const storeData = writable({
    tables: [],
    showCreateTablePopUp: false,
});

export default storeData;
