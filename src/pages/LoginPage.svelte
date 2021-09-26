<script>
    import Button from "../component/Button.svelte";
    let buttonSizeBig = true;

    let srcbgLoginPage = "./images/images-lg-page/bg-loginPage.png";
    let srcIconPerson = "./images/images-lg-page/icon-person.png";
    let srcIconEmail = "./images/images-lg-page/icon-email.png";
    let srcIconPassword = "./images/images-lg-page/icon-password.png";

    /* show-hide password */
    const togglePassword = () => {
        let showPassword = document.getElementById("password");
        showPassword.type =
            showPassword.type == "password" ? "text" : "password";
    };
    /* show-hide password */
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
                />
            </div>
            <div class="login-line-1" />
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
                />
                <i
                    class="circular eye link icon"
                    on:click={() => {
                        togglePassword();
                    }}
                />
            </div>
            <div class="login-line-2" />
            <div class="remember-forgot">
                <div class="remember">
                    <input type="checkbox" />
                    <p class="rememberme-text">Remember me</p>
                </div>
                <p class="forgot-text">Forgot Password?</p>
            </div>

            <Button {buttonSizeBig}>
                <span slot="buttonName">LOGIN</span>
            </Button>
        </div>
    </div>
</div>

<style>
    .srcbgLoginPage {
        display: flex;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
    }

    .login-bg {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 550px;
        width: 420px;
        background: #ffffff;
        border-radius: 30px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
        margin-left: 510px;
        margin-top: 40px;
    }

    .login-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 432px;
        margin-bottom: 40px;
    }

    .icon-person {
        width: 165px;
        height: 155px;
        opacity: 0.6;
    }

    .email {
        display: flex;
        align-items: center;
        position: relative;
        bottom: 10px;
        width: 296px;
    }

    .icon-email {
        height: 11px;
        width: 17px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .password {
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;
        width: 296px;
    }

    .icon-password {
        height: 20px;
        width: 17px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    input[type="email"] {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: #000000;
        padding-left: 30px;
        outline: 0;
    }

    #password {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: #000000;
        padding-left: 30px;
        outline: 0;
    }

    .login-line-1 {
        width: 296px;
        height: 1.2px;
        background: rgba(5, 5, 5, 0.5);
        position: relative;
        bottom: 24px;
    }
    .login-line-2 {
        width: 296px;
        height: 1.2px;
        background: rgba(5, 5, 5, 0.5);
        position: relative;
        bottom: 9px;
    }

    .remember-forgot {
        display: flex;
        width: 350px;
        position: relative;
        bottom: 8px;
        width: 332px;
    }

    .remember {
        display: flex;
        align-items: center;
        width: 190px;
    }

    input[type="checkbox"] {
        box-shadow: 0 0 0 3px #1c87c9;
        width: 15px;
        height: 15px;
        background: #ffffff;
        cursor: pointer;
    }

    .rememberme-text {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 14px;
        color: #000000;
        padding-left: 6px;
    }

    .forgot-text {
        font-family: "Montserrat", sans-serif;
        font-style: italic;
        font-weight: 300;
        font-size: 14px;
        color: #000000;
        padding-left: 40px;
        width: 200px;
    }

    .forgot-text:hover {
        font-weight: 700;
    }
</style>
