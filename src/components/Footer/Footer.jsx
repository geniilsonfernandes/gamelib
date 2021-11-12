import React from "react";
import Container from "../Layout/Container";
import styles from "./Footer.module.scss";
import Subscribe from "./Subscribe/Subscribe";
import { PhoneIcon, MailIcon } from "../../Icons/Icon";
function Footer() {
  return (
    <footer className={styles.s__footer}>
      <Container className={styles.footer}>
        <Subscribe />
      </Container>
      <div className={styles.s__address}>
        <Container className={styles.address}>
          <div className={styles.author}>
            Design/Front End by Gee -
            <a href="https://github.com/geniilsonfernandes"> Github</a> |
            Desvolvido com ReactJs
          </div>
          <address className={styles.contact}>
            <ul>
              <li>
                <a href="mailto:geilsonfernandes">
                  <MailIcon /> geniilsonfernandes@gmail.com
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5522996021627">
                  <PhoneIcon /> (22) 9 9602-1627
                </a>
              </li>
            </ul>
          </address>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
