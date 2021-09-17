<script>
    export let buttonName;
    export let buttonSizeBig;
    export let buttonSizeMedium;
</script>

<main>
    <button
        class="btn"
        class:button-size-big={buttonSizeBig}
        class:button-size-medium={buttonSizeMedium}
        >{buttonName}
    </button>
</main>

<style>
    .btn {
        background: #da475d;
        border-radius: 15px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        height: 50px;
        width: 136px;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.1em;
        color: #ffffff;
        cursor: pointer;
    }

    .button-size-medium {
        height: 60px;
        width: 175px;
        border-radius: 15px;
        line-height: 34px;
    }

    .button-size-big {
        height: 54px;
        width: 326px;
    }

    .btn:hover {
        background: rgba(218, 71, 93, 0.5);
    }
</style>
