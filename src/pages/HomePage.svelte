<script>
    import storeData from "../stores/storeData";
    import SummaryPanel from "../component/SummaryPanel.svelte";
    import CreateTable from "../component/CreateTable.svelte";
    import TablesView from "../component/TablesView.svelte";

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
    <SummaryPanel />
</div>
<div class="table-view-place">
    <TablesView />
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
