<script>
    import CreateTable from "../component/CreateTable.svelte";
    import Button from "../component/Button.svelte";

    let srcbgHomePage = "./images/images-homepage/bg-homePage.png";
    let showCreateTablePopUp = false;
    let buttonSizeMedium = true;

    export const toggleCreateTablePopUp = () => {
        showCreateTablePopUp = !showCreateTablePopUp;
    };
</script>

<CreateTable {showCreateTablePopUp} on:click={toggleCreateTablePopUp} />
<div class="srcbgHomePage" style={`background-image: url(${srcbgHomePage});`}>
    <ul>
        <li>
            <a class="home" href="#/home">Home</a>
            <a class="logOut" href="#/">Log Out</a>
        </li>
    </ul>

    <div class="showTables-bg">
        <div class="showTables-content">
            <div class="horizontal-1">
                <h3>Date</h3>
                <input
                    name="date"
                    type="date"
                    required
                    value="11/08/2012"
                    size="200"
                />
            </div>
            <div class="login-line-1" />

            <div class="horizontal-2">
                <div class="vertical-1">
                    <div class="horizontal-3">
                        <h3>Active Table</h3>
                        <input
                            name="active-table"
                            type="text"
                            autocomplete="on"
                            required
                            value="0"
                            size="3"
                        />
                    </div>
                    <div class="login-line-2" />

                    <div class="horizontal-3">
                        <h3>Active Customer</h3>
                        <input
                            name="active-customer"
                            type="text"
                            autocomplete="on"
                            required
                            value="0"
                            size="2"
                        />
                    </div>
                    <div class="login-line-2" />
                </div>

                <div class="vertical-2">
                    <div class="horizontal-3">
                        <h3>Total Table</h3>
                        <input
                            name="total-table"
                            type="text"
                            autocomplete="on"
                            required
                            value="0"
                            size="3"
                        />
                    </div>
                    <div class="login-line-2" />

                    <div class="horizontal-3">
                        <h3>Total Customer</h3>
                        <input
                            name="total-customer"
                            type="text"
                            autocomplete="on"
                            required
                            value="0"
                            size="3"
                        />
                    </div>
                    <div class="login-line-2" />
                </div>
            </div>

            <div class="horizontal-1">
                <h3>Who's at cafe?</h3>
                <label>
                    <select class="personnel">
                        <option value="" />
                        <option value="Esra">Esra</option>
                        <option value="Zeyneb">Zeyneb</option>
                    </select>
                    <!-- <div class="personnel-bg">
                        <button class="personnel-close"
                            ><img
                                class="close"
                                src="./images/images-homepage/close.svg"
                                alt="close"
                            />
                        </button>
                    </div> -->
                    <img
                        class="arrow"
                        src="./images/images-homepage/iconArrow.svg"
                        alt="option-arrow"
                    />
                </label>
            </div>
            <div class="login-line-1" />
        </div>

        <div class="button" on:click={toggleCreateTablePopUp}>
            <Button {buttonSizeMedium}>
                <span slot="buttonName">Add Table</span>
            </Button>
        </div>
    </div>
</div>

<style>
    .srcbgHomePage {
        display: flex;
        flex-direction: column;
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
        margin-top: 649px;
        margin-bottom: 124px;
        margin-left: 277px;
    }

    .showTables-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 389px;
        width: 775px;
    }

    .horizontal-1,
    .horizontal-2,
    .horizontal-3 {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .vertical-1,
    .vertical-2 {
        display: flex;
        flex-direction: column;
        width: 332px;
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
        cursor: pointer;
    }

    select {
        position: relative;
        left: 25px;
        appearance: none;
        min-width: 545px;
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

    .login-line-1,
    .login-line-2 {
        width: 100%;
        height: 2px;
        background: rgba(5, 5, 5, 0.5);
        margin-bottom: 48px;
    }

    .login-line-2 {
        margin-bottom: 42px;
    }

    /* .personnel-bg {
        position: relative;
        bottom: 12px;
        display: flex;
        background: #e6e6e6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 45px;
        padding: 10px;
        text-align: left;
    }

    .personnel-close {
        background: #da475d;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        z-index: 2;
    } */

    .button {
        position: relative;
        left: 300px;
    }

    /* button:hover {
        color: rgba(255, 255, 255, 0.5);
    } */
</style>
