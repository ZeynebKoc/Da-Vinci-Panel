<script>
    export let size = "default";
</script>

<button class={size} on:click>
    <slot />
</button>

<style>
    button {
        background: #da475d;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        letter-spacing: 0.1em;
        color: #ffffff;
        cursor: pointer;
    }

    .default {
        height: 50px;
        width: 136px;
        border-radius: 15px;
        line-height: 29px;
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
        border-radius: 15px;
        line-height: 29px;
    }

    button:hover {
        background: rgba(218, 71, 93, 0.5);
    }
</style>
