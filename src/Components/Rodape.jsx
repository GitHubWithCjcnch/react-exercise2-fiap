import styles from "../css/Rodape.module.css"

export default function Rodape(){
     return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerDiv}>
                    <h2 className={styles.footerDivh2}>Entre em Contato</h2>
                    <p className={styles.footerDivp}>Email: thinkingfive10@gmail.com</p>
                </div>
                <p className={styles.footerText}>&copy; Todos os meus direitos reservados. 2023</p>
            </footer>
        </>
     )
}