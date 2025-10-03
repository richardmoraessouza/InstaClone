import styles from "./Styles.module.css"

function Home() {
    return (
        <>
        <main className={styles.main_container}>
            <div className={styles.banner_container}>
                <img src="/image/banner2.png" alt="Crie uma conta no Instagram" />
            </div>
            <div className={styles.form_container}>
                <div className={styles.form_box}>
                    <img src="/image/logo_instagram.png" alt="Instagram" />
                    <form action="" className={styles.login_form}>
                        <input type="text" name="username" id="" placeholder="Número de telefone, usuário ou e-mail"/>
                        <input type="password" name="password" id="senha" />
                        <input type="submit" value="Entrar" />
                    </form>
                    <div className={styles.separator}>
                        <div className={styles.line}>
                            <span>Ou</span>
                        </div>
                    </div>
                    <div className={styles.other_links}>
                        <div className={styles.facebook_login}>
                            <a href="">
                                <img src="/image/logo_facebook.svg" alt="Facebook Login" />
                                <span>Entrar com o Facebook</span>
                            </a>
                        </div>
                        <div className={styles.forgot_pass}>
                            <a href="#">Esqueceu a senha?</a>

                        </div>
                    </div>
                </div>
                <div className={styles.register_container}>
                    <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
                </div>
                <div className={styles.get_app_container}>
                    <p>Obtenha o aplicativo.</p>
                    <a href="">
                        <img src="/image/apple_btn.png" alt="Apple Store" />
                    </a>
                    <a href="">
                        <img src="/image/gplay_btn.png" alt="Google Play" />
                    </a>
                </div>
            </div>
        </main>
        <footer>
            <nav>
                <ul className={styles.footer_links}>
                    <li><a href="#">Meta</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Ajuda</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Privacidade</a></li>
                    <li><a href="#">Termos</a></li>
                    <li><a href="#">Principais contas</a></li>
                    <li><a href="#">Hashtags</a></li>
                    <li><a href="#">Localizações</a></li>
                    <li><a href="#">Instagram Lite</a></li>
                </ul>
            </nav>
            <p className={styles.copy_right}>&copy; 2022 Instagram from Meta</p>
        </footer>
        </>
    )
}
export default Home