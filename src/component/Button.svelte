<script>
    export let buttonName;
    export let buttonSize;
</script>

<main>
    <button class="btn" class:button-size={buttonSize}>{buttonName}</button>
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
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        letter-spacing: 0.1em;

        color: #ffffff;
        cursor: pointer;
    }
    .button-size {
        height: 100px;
        width: 605px;
        border-radius: 20px;
    }
    .btn:hover {
        background: rgba(218, 71, 93, 0.5);
    }
</style>
