<script>
    import Button from "../component/Button.svelte";

    let srcbgLoginPage = "./images/images-lg-page/bg-loginPage.png";
    let srcIconPerson = "./images/images-lg-page/icon-person.png";
    let srcIconEmail = "./images/images-lg-page/icon-email.png";
    let srcIconPassword = "./images/images-lg-page/icon-password.png";

    let username;
    let password;
    
    /* show-hide password */
    const togglePassword = () => {
        let showPassword = document.getElementById("password");
        showPassword.type =
            showPassword.type == "password" ? "text" : "password";
    };

    async function loginUser() {
        const response = await fetch(
            "https://api.davinciboardgame.com/users/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            }
        );
        const data = await response.json();
        console.log(data);
    }
</script>

<div class="srcbgLoginPage" style={`background-image: url(${srcbgLoginPage});`}>
    <div class="login-bg">
        <div class="login-content">
            <img src={srcIconPerson} class="icon-person" alt="Person Icon" />
            <div class="email">
                <img src={srcIconEmail} class="icon-email" alt="Email Icon" />
                <input
                    type="email"
                    name="e-mail"
                    minlength="10"
                    maxlength="24"
                    size="24"
                    placeholder="Email ID"
                    autocomplete="on"
                    required
                    value={username}
                />
            </div>
            <div class="line" />
            <div class="password">
                <img
                    src={srcIconPassword}
                    class="icon-password"
                    alt="Password Icon"
                />
                <input
                    name="password"
                    id="password"
                    type="password"
                    size="21"
                    placeholder="Password"
                    minlength="4"
                    maxlength="18"
                    required
                    value={password}
                />
                <i
                    id="eye-icon"
                    class="circular eye link icon"
                    on:click={() => {
                        togglePassword();
                    }}
                />
            </div>
            <div class="line" />
            <div class="remember-forgot">
                <div class="remember">
                    <input type="checkbox" />
                    <p class="rememberme-text">Remember me</p>
                </div>
                <p class="forgot-text">Forgot Password?</p>
            </div>

            <a href="#/home">
                <Button size="button-size-big">LOGIN</Button>
            </a>
        </div>
    </div>
</div>

<style>
    .srcbgLoginPage {
        display: flex;
        height: 100%;
        max-width: 1440px;
        max-height: 1440px;
    }

    .login-bg {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 550px;
        width: 420px;
        background: #ffffff;
        border-radius: 30px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
        margin: auto;
    }

    .login-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 80%;
        margin-bottom: 10px;
    }

    .icon-person {
        width: 45%;
        height: 32%;
        opacity: 0.6;
    }

    .email,
    .password {
        display: flex;
        align-items: baseline;
        width: 90%;
    }

    .icon-email,
    .icon-password {
        height: 50%;
        width: 6%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .icon-password {
        height: 70%;
    }

    #eye-icon {
        position: relative;
        right: 10px;
    }

    input[type="email"],
    #password {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: #000000;
        margin-left: 30px;
        outline: 0;
    }

    .line {
        width: 90%;
        height: 1.2px;
        background: rgba(5, 5, 5, 0.5);
        position: relative;
        bottom: 18px;
    }

    .remember-forgot {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        bottom: 5px;
    }

    .remember {
        display: flex;
        align-items: flex-start;
        width: 80%;
    }

    input[type="checkbox"] {
        box-shadow: 0 0 0 3px #1c87c9;
        width: 15px;
        height: 15px;
        background: #ffffff;
        cursor: pointer;
    }

    .rememberme-text,
    .forgot-text {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 14px;
        color: #000000;
        padding-left: 6px;
    }

    .forgot-text {
        font-style: italic;
        text-align: right;
        width: 90%;
        cursor: pointer;
    }

    .forgot-text:hover {
        font-weight: 700;
    }
</style>
