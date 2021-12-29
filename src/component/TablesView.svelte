<script>
    import storeData from "../stores/storeData";
    let srcbgTableView = "./images/images-table-view/bg-table-view.png";
    $: tables = $storeData.tables;
</script>

{#each tables as table (table.id)}
    <div
        class="srcbgTableView"
        style={`background-image: url(${srcbgTableView});`}
    >
        <div class="srcbgTableView-bg">
            <form class="srcbgTableView-content">
                <div class="table-number">
                    <h2>MASA {table.tableName}</h2>
                </div>
                <select class="personnel">
                    <option />
                </select>

                <div class="content-section">
                    <div>
                        <div class="horizontal">
                            <div class="vertical">
                                <h3>Start</h3>
                                <input
                                    name="name"
                                    type="time"
                                    required
                                    value={table.start}
                                />
                                <div class="line" />
                            </div>

                            <div class="vertical">
                                <h3>Finish</h3>
                                <input
                                    name="name"
                                    type="time"
                                    required
                                    value={table.finish}
                                />
                                <div class="line" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Current Game</h3>
                        <input
                            name="name"
                            type="text"
                            autocomplete="on"
                            required
                            placeholder="Harry Potter: Hogwats Battle"
                            bind:value={table.currentGame}
                        />
                        <div class="line" />
                    </div>

                    <div>
                        <h3>Player Count</h3>
                        <input
                            name="name"
                            type="number"
                            required
                            size="3"
                            placeholder="0"
                            value={table.playerCount}
                        />
                        <div class="line" />
                    </div>
                </div>
            </form>
        </div>
    </div>
{/each}

<style>
    .srcbgTableView {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 400px;
        min-width: 29%;
        margin-top: 50px;
        margin-left: 3%;
    }

    @media only screen and (max-width: 1000px) {
        .srcbgTableView {
            width: 75%;
            margin: 25px auto;
        }
    }

    .srcbgTableView-bg {
        display: flex;
        justify-content: center;
        background: #ffffff;
        border-radius: 45px;
        box-shadow: 4px 4px 4px rgb(0 0 0 / 50%);
        opacity: 0.9;
        height: 80%;
        width: 80%;
    }

    .srcbgTableView-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: auto;
        height: 80%;
        width: 80%;
    }

    .content-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 90%;
        height: 90%;
    }

    .horizontal {
        display: flex;
        justify-content: space-between;
    }

    .vertical {
        display: flex;
        flex-direction: column;
        width: 40%;
    }

    .table-number {
        display: flex;
        justify-content: center;
    }

    h2 {
        display: flex;
        justify-content: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #da475d;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-transform: uppercase;
    }

    h3 {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }

    input[type="time"],
    input[type="text"],
    input[type="number"] {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
        background: none;
        border: none;
        outline: none;
        width: 100%;
        position: relative;
        bottom: 10px;
    }

    select {
        position: relative;
        bottom: 25px;
        background: none;
        border: none;
        outline: none;
    }

    .line {
        height: 1px;
        background: #000000;
    }
</style>
