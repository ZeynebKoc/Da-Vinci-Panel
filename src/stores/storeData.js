import { writable } from "svelte/store";

const storeData = writable({
    tables: [],
});

export default storeData;
