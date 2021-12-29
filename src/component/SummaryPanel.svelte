<script>
    import storeData from "../stores/storeData";
    import Button from "../component/Button.svelte";
    /* we get the current date */
    let getDate = new Date();
    $: date = new Date(getDate.getTime() - getDate.getTimezoneOffset() * 60000)
        .toISOString()
        .split("T")[0];

    $: tables = $storeData.tables;

    let activeTable;
    let activeCustomer;
    $: totalTable = tables.length;
    $: totalCustomer = calculateTotalCustomer(tables);

    const calculateTotalCustomer = (tables) => {
        let total = 0;
        tables.forEach((table) => {
            total += table.playerCount;
        });
        return total;
    };
    let whosAtCafe;

    /* pop up function */
    const toggleCreateTablePopUp = () => {
        storeData.update((currentObject) => {
            return {
                ...currentObject,
                showCreateTablePopUp: true,
            };
        });
    };
</script>

<div class="showTables-bg">
    <div class="showTables-content">
        <div class="horizontal">
            <h3>Date</h3>
            <input name="date" type="date" size="200" bind:value={date} />
        </div>
        <div class="line" />

        <div class="horizontal">
            <div class="vertical">
                <div class="horizontal">
                    <h3>Active Table</h3>
                    <input
                        name="active-table"
                        type="number"
                        size="3"
                        placeholder="0"
                        readonly="readonly"
                        value={activeTable}
                    />
                </div>
                <div class="line" />

                <div class="horizontal">
                    <h3>Active Customer</h3>
                    <input
                        name="active-customer"
                        type="number"
                        size="2"
                        placeholder="0"
                        readonly="readonly"
                        value={activeCustomer}
                    />
                </div>
                <div class="line" />
            </div>

            <div class="vertical">
                <div class="horizontal">
                    <h3>Total Table</h3>
                    <input
                        name="total-table"
                        type="number"
                        size="3"
                        placeholder="0"
                        readonly="readonly"
                        value={totalTable}
                    />
                </div>
                <div class="line" />
                <div class="horizontal">
                    <h3>Total Customer</h3>
                    <input
                        name="total-customer"
                        type="number"
                        size="3"
                        placeholder="0"
                        readonly="readonly"
                        value={totalCustomer}
                    />
                </div>
                <div class="line" />
            </div>
        </div>

        <div class="horizontal">
            <h3>Who's at cafe?</h3>
            <label>
                <select class="personnel" bind:value={whosAtCafe}>
                    <option value="" />
                    <option value="Esra">Esra</option>
                    <option value="Zeyneb">Zeyneb</option>
                </select>
                <img
                    class="arrow"
                    src="./images/images-homepage/iconArrow.svg"
                    alt="option-arrow"
                />
            </label>
        </div>
        <div class="line" />
    </div>
    <div class="button">
        <Button on:click={toggleCreateTablePopUp} size="button-size-medium"
            >Add Table</Button
        >
    </div>
</div>

<style>
    .showTables-bg {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border-radius: 45px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
        height: 566px;
        width: 886px;
        margin: 649px auto 124px auto;
    }

    .showTables-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 70%;
        width: 90%;
    }

    .horizontal {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .vertical {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 170px;
        width: 45%;
    }

    h3 {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 28px;
        line-height: 34px;
        color: #000000;
    }

    input[type="date"],
    input[type="number"],
    select {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 28px;
        line-height: 34px;
        color: #000000;
        background: none;
        border: none;
        outline: none;
        text-align: right;
        width: 35%;
    }

    select {
        position: relative;
        left: 25px;
        appearance: none;
        width: 545px;
        cursor: pointer;
    }

    option {
        padding: 10px;
        text-align: left;
    }

    .arrow {
        position: relative;
        right: 7px;
        top: 5px;
        pointer-events: none;
    }

    .line {
        position: relative;
        bottom: 25px;
        height: 2px;
        background: rgba(5, 5, 5, 0.5);
    }

    .button {
        position: relative;
        left: 300px;
    }
</style>
