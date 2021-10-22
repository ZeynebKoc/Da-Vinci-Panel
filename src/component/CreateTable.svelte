<script>
    import storeData from "../stores/storeData";
    import Button from "./Button.svelte";
    let srcbgCreateTable = "./images/images-create-table/bg-create-table.png";

    let tableName;
    let start;
    let finish;
    let playerCount;

    const handleSubmit = () => {
        const newTable = {
            tableName,
            start,
            finish,
            playerCount,
            id: Math.random(),
        };
        storeData.update((currentObject) => {
            return {
                ...currentObject,
                tables: [...currentObject.tables, newTable],
            };
        });
        toggleCreateTablePopUp();
        tableName = "";
        start = "";
        finish = "";
        playerCount = "";
    };

    const toggleCreateTablePopUp = () => {
        storeData.update((currentObject) => {
            return {
                ...currentObject,
                showCreateTablePopUp: false,
            };
        });
    };
</script>


    <div class="bg-alpha">
        <div
            class="srcbgCreateTable"
            style={`background-image: url(${srcbgCreateTable});`}
        >
            <div class="createTables-bg">
                <form
                    on:submit|preventDefault={handleSubmit}
                    class="createTables-content"
                >
                    <div class="content-section">
                        <div class="horizontal">
                            <h3>Name</h3>
                            <input
                                name="name"
                                type="number"
                                size="3"
                                placeholder=" 00"
                                required
                                bind:value={tableName}
                            />
                        </div>
                        <div class="line" />
                        <h4>Table name is required</h4>
                    </div>

                    <div class="content-section">
                        <div class="horizontal">
                            <h3>Player Count</h3>
                            <input
                                name="name"
                                type="number"
                                required
                                size="3"
                                placeholder="0"
                                bind:value={playerCount}
                            />
                        </div>
                        <div class="line" />
                    </div>

                    <div class="content-section">
                        <div class="horizontal">
                            <div class="vertical">
                                <div class="horizontal">
                                    <h3>Start</h3>
                                    <input
                                        name="name"
                                        type="time"
                                        required
                                        bind:value={start}
                                    />
                                </div>
                                <div class="line" />
                            </div>

                            <div class="vertical">
                                <div class="horizontal">
                                    <h3>Finish</h3>
                                    <input
                                        name="name"
                                        type="time"
                                        required
                                        bind:value={finish}
                                    />
                                </div>
                                <div class="line" />
                            </div>
                        </div>
                    </div>

                    <div class="buttons">
                        <div on:click={toggleCreateTablePopUp}>
                            <Button>CANCEL</Button>
                        </div>
                        <Button>CREATE</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>

<style>
    .bg-alpha {
        z-index: 2;
        position: fixed;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        max-width: 1440px;
        background: rgba(78, 77, 77, 0.67);
    }

    .srcbgCreateTable {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
        width: 750px;
        margin: auto;
    }

    .createTables-bg {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border-radius: 45px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
        height: 75%;
        width: 85%;
    }

    .createTables-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 85%;
        width: 85%;
    }

    .content-section {
        height: 25%;
        display: flex;
        flex-direction: column;
    }

    .horizontal {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .vertical {
        display: flex;
        flex-direction: column;
        width: 42%;
    }

    h3 {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }

    h4 {
        position: relative;
        bottom: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #da475d;
    }

    input[type="time"],
    input[type="number"] {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        background: none;
        border: none;
        outline: none;
        text-align: right;
    }

    .line {
        height: 1px;
        background: rgba(5, 5, 5, 0.5);
    }

    .buttons {
        display: flex;
        justify-content: space-between;
    }
</style>
