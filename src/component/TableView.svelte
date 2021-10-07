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
                                <div class="login-line-2" />
                            </div>

                            <div class="vertical">
                                <h3>Finish</h3>
                                <input
                                    name="name"
                                    type="time"
                                    required
                                    value={table.finish}
                                />
                                <div class="login-line-2" />
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
                        <div class="login-line-1" />
                    </div>

                    <div>
                        <h3>Player Count</h3>
                        <input
                            name="name"
                            type="text"
                            required
                            size="3"
                            placeholder="0"
                            value={table.playerCount}
                        />
                        <div class="login-line-1" />
                    </div>
                </div>
            </form>
        </div>
    </div>
{/each}

<style>
    .srcbgTableView {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
        width: 425px;
        margin-bottom: 50px;
    }

    .srcbgTableView-bg {
        display: flex;
        justify-content: center;
        background: #ffffff;
        border-radius: 45px;
        box-shadow: 4px 4px 4px rgb(0 0 0 / 50%);
        opacity: 0.9;
        height: 325px;
        width: 345px;
    }

    .srcbgTableView-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 18px;
        height: 255px;
    }

    .content-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 220px;
    }

    .horizontal {
        display: flex;
        justify-content: space-between;
    }

    .vertical {
        display: flex;
        flex-direction: column;
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
    input[type="text"] {
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
        right: 20px;
        background: none;
        border: none;
        outline: none;
    }

    .login-line-1 {
        width: 288px;
        height: 1px;
        background: #000000;
    }

    .login-line-2 {
        height: 1px;
        width: 106px;
        background: #000000;
    }
</style>
