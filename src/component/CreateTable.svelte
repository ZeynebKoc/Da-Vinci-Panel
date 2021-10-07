<script>
    import storeData from "../stores/storeData";
    import Button from "./Button.svelte";
    let srcbgCreateTable = "./images/images-create-table/bg-create-table.png";
    /* pop up variables */
    export let showCreateTablePopUp;

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
        showCreateTablePopUp = false;
    };
</script>

{#if showCreateTablePopUp}
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
                                type="text"
                                placeholder=" 00"
                                required
                                bind:value={tableName}
                            />
                        </div>
                        <div class="login-line-1" />
                        <h4>Table name is required</h4>
                    </div>

                    <div class="content-section">
                        <div class="horizontal">
                            <h3>Player Count</h3>
                            <input
                                name="name"
                                type="text"
                                required
                                size="3"
                                placeholder="0"
                                bind:value={playerCount}
                            />
                        </div>
                        <div class="login-line-1" />
                    </div>

                    <div class="content-section">
                        <div class="horizontal">
                            <div class="vertical">
                                <div class="horizontal">
                                    <h3>Start</h3>
                                    <input
                                        name="name"
                                        type="time"
                                        bind:value={start}
                                        required
                                    />
                                </div>
                                <div class="login-line-2" />
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
                                <div class="login-line-2" />
                            </div>
                        </div>
                    </div>

                    <div class="buttons">
                        <div on:click>
                            <Button>CANCEL</Button>
                        </div>
                        <Button>CREATE</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
{/if}

<style>
    .bg-alpha {
        z-index: 2;
        position: fixed;
        height: 100%;
        display: flex;
        justify-content: center;
        width: 1440px;
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
        background: #ffffff;
        border-radius: 45px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
        height: 414px;
        width: 636px;
    }

    .createTables-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 383px;
        align-items: stretch;
    }

    .content-section {
        height: 97px;
    }

    .horizontal {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .vertical {
        display: flex;
        flex-direction: column;
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
        bottom: 25px;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #da475d;
    }

    input[type="time"],
    input[type="text"] {
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

    .login-line-1 {
        width: 555px;
        height: 1px;
        background: rgba(5, 5, 5, 0.5);
        position: relative;
        bottom: 6px;
    }

    .login-line-2 {
        width: 239px;
        height: 1px;
        background: rgba(5, 5, 5, 0.5);
        position: relative;
        bottom: 4px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        width: 555px;
        position: relative;
        bottom: 5px;
    }
</style>
