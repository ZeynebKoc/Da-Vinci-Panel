<script>
    import CreateTable from "../component/CreateTable.svelte";
    import TableView from "../component/TableView.svelte";
    import Button from "../component/Button.svelte";

    let srcbgHomePage = "./images/images-homepage/bg-homePage.png";
    /* pop up variable */
    let showCreateTablePopUp = false;

    let getDate = new Date();
    $: date = new Date(getDate.getTime() - getDate.getTimezoneOffset() * 60000)
        .toISOString()
        .split("T")[0];
    let activeTable = "";
    let activeCustomer = "";
    let totalTable = "";
    let totalCustomer = "";
    let whosAtCafe = "";

    let tables = [
        {
            tableName: "",
            start: "",
            finish: "",
            playerCount: "",
            id: 1,
        },
    ];
    /* pop up function */
    export const toggleCreateTablePopUp = () => {
        showCreateTablePopUp = !showCreateTablePopUp;
    };

    const addTable = (e) => {
        const table = e.detail;
        tables = [table, ...tables];
    };
</script>

<CreateTable {showCreateTablePopUp} on:click={toggleCreateTablePopUp} />
<div class="srcbgHomePage" style={`background-image: url(${srcbgHomePage});`}>
    <ul>
        <li><a class="home" href="#/home">Home</a></li>
        <li><a class="logOut" href="#/">Log Out</a></li>
    </ul>
    <form class="showTables-bg">
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
                            type="text"
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
                            type="text"
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
                            type="text"
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
                            type="text"
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
        <div class="button" on:click={toggleCreateTablePopUp}>
            <Button size="button-size-medium">Add Table</Button>
        </div>
    </form>
</div>
<div class="table-view-place">
    <TableView on:addTable={addTable} />
</div>

<style>
    .srcbgHomePage {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1440px;
        background: #e5e5e5;
        background-repeat: no-repeat;
    }

    /* navbar */
    ul {
        display: flex;
        justify-items: flex-start;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
    }

    li {
        margin-top: 40px;
    }

    a {
        padding-left: 50px;
        color: #ffffff;
        cursor: pointer;
    }

    a:hover {
        color: rgba(255, 255, 255, 0.5);
    }

    /* show tables */
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
    input[type="text"],
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

    /* show tables */
    .table-view-place {
        display: flex;
        flex-wrap: wrap;
        max-width: 1440px;
    }
</style>
