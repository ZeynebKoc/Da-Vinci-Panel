<script>
    import Button from "./Button.svelte";

    let srcbgCreateTable = "./images/images-create-table/bg-create-table.png";

    export let showCreateTablePopUp;
    export let closeCreateTablePopUp;
</script>

{#if showCreateTablePopUp}
    <main class:closeCreateTablePopUp>
        <div class="bg-alpha">
            <div
                class="srcbgCreateTable"
                style={`background-image: url(${srcbgCreateTable});`}
            >
                <div class="createTables-bg">
                    <div class="createTables-content">
                        <div class="content-section">
                            <div class="horizontal">
                                <h3>Name</h3>
                                <input
                                    name="name"
                                    type="text"
                                    autocomplete="on"
                                    required
                                    value=""
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
                                    autocomplete="on"
                                    required
                                    value="0"
                                    size="3"
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
                                        />
                                    </div>
                                    <div class="login-line-2" />
                                </div>
                            </div>
                        </div>

                        <div class="buttons">
                            <div on:click>
                                <Button>
                                    <span slot="buttonName">CANCEL</span>
                                </Button>
                            </div>
                            <Button>
                                <span slot="buttonName">CREATE</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
{/if}

<style>
    main {
        position: fixed;
        z-index: 2;
    }
    .bg-alpha {
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
        margin-top: 230px;
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
