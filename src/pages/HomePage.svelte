<script>
    let srcbgHomePage = "./images/images-homepage/bg-homePage.png";
</script>

<div class="srcbgHomePage" style={`background-image: url(${srcbgHomePage});`}>
    <ul>
        <li>
            <a class="home" href="#/home">Home</a>
            <a class="logOut" href="#/">Log Out</a>
        </li>
    </ul>
</div>

<style>
    .srcbgHomePage {
        display: flex;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
    }
    ul {
        display: flex;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
    }
    li {
        display: flex;
        margin-top: 40px;
    }
    a {
        display: flex;
        color: #ffffff;
        cursor: pointer;
        padding-left: 50px;
    }
    a:hover {
        color: rgba(255, 255, 255, 0.5);
    }
</style>
