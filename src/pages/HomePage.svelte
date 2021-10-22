<script>
    import storeData from "../stores/storeData";
    import ShowTables from "../component/ShowTables.svelte";
    import CreateTable from "../component/CreateTable.svelte";
    import TableView from "../component/TableView.svelte";

    let srcbgHomePage = "./images/images-homepage/bg-homePage.png";
    /* pop up variable */
    $: showCreateTablePopUp = $storeData.showCreateTablePopUp;
</script>

{#if showCreateTablePopUp}
<CreateTable />
{/if}
<div class="srcbgHomePage" style={`background-image: url(${srcbgHomePage});`}>
    <ul>
        <li><a class="home" href="#/home">Home</a></li>
        <li><a class="logOut" href="#/">Log Out</a></li>
    </ul>
    <ShowTables />
</div>
<div class="table-view-place">
    <TableView />
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
    .table-view-place {
        display: flex;
        flex-wrap: wrap;
        max-width: 1440px;
    }
</style>
