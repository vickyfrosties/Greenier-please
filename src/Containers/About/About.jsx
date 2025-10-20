import styles from "./About.module.css";
import { useEffect } from "react";
import { killgame } from "../Game/Game.jsx";

const About = () => {
  useEffect(() => {
    const GAME_CANVA = document.querySelector("canvas");
    killgame();
  }, []);

  return (
    <>
      <div className={styles.divcontainer}>
        <h2 className={styles.subjectname}>Team</h2>

        <section className={styles.firstsection}>
          <div className={styles.membercards}>
            <h3>Luna Dessauvage</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/173044695?v=4"
              alt=""
            />
            <p>Game Developer</p>
            <p className={styles.ph4}>PhaserJS</p>

            <a
              className={styles.socialnetwork}
              href="https://github.com/roze-olifant"
              target="blank"
            >
              <img
                src="/public/assets/icons/github-logo.svg"
                alt="Github Profile"
              />
            </a>
            <a
              className={styles.socialnetwork}
              href="https://www.linkedin.com/in/luna-dessauvage/"
              target="blank"
            >
              <img
                src="/public/assets/icons/linkedin-logo.svg"
                alt="LinkedIn Profile"
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Alexandra Messina</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/172907888?v=4"
              alt=""
            />
            <p>Game Developer</p>
            <p className={styles.ph4}>PhaserJS</p>

            <a
              className={styles.socialnetwork}
              href="https://github.com/MamieNuf"
              target="blank"
            >
              <img
                src="/public/assets/icons/github-logo.svg"
                alt="Github Profile"
              />
            </a>
            <a
              className={styles.socialnetwork}
              href="https://www.linkedin.com/in/amessinapro/"
              target="blank"
            >
              <img
                src="/public/assets/icons/linkedin-logo.svg"
                alt="LinkedIn Profile"
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Gweny Dos Santos</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/90244248?v=4"
              alt=""
            />
            <p>Graphist</p>
            <p className={styles.ph4}>Aseprite</p>

            <a
              className={styles.socialnetwork}
              href="https://github.com/Gweny526"
              target="blank"
            >
              <img
                src="/public/assets/icons/github-logo.svg"
                alt="Github Profile"
              />
            </a>
            <a
              className={styles.socialnetwork}
              href="https://www.linkedin.com/in/gweny-dos-santos/"
              target="blank"
            >
              <img
                src="/public/assets/icons/linkedin-logo.svg"
                alt="LinkedIn Profile"
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Deborah Clerckx</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/80418872?v=4"
              alt=""
            />
            <p>Project Chief</p>
            <p>Git Referent</p>
            <p>Backend Developer</p>
            <a
              className={styles.socialnetwork}
              href="https://github.com/belynnn"
              target="blank"
            >
              <img
                src="/public/assets/icons/github-logo.svg"
                alt="Github Profile"
              />
            </a>
            <a
              className={styles.socialnetwork}
              href="https://www.linkedin.com/in/deborah-clerckx/"
              target="blank"
            >
              <img
                src="/public/assets/icons/linkedin-logo.svg"
                alt="LinkedIn Profile"
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Benedicte Lagasse</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/165404920?v=4"
              alt=""
            />
            <p>Frontend Developer </p>
            <p className={styles.ph4}>React</p>

            <a
              className={styles.socialnetwork}
              target="blank"
              href="https://github.com/Blacg13"
            >
              <img
                src="/public/assets/icons/github-logo.svg"
                alt="Github Profile"
              />
            </a>
            <a
              className={styles.socialnetwork}
              href="https://www.linkedin.com/in/b%C3%A9n%C3%A9dicte-lagasse/"
              target="blank"
            >
              <img
                src="/public/assets/icons/linkedin-logo.svg"
                alt="LinkedIn Profile"
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Sounia Mhalla</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/166948925?v=4"
              alt=""
            />
            <p>Frontend Developer </p>
            <p className={styles.ph4}>React</p>

            <a
              className={styles.socialnetwork}
              href="https://github.com/vickyfrosties"
              target="blank"
            >
              <img
                src="/public/assets/icons/github-logo.svg"
                alt="Github Profile"
              />
            </a>
            <a
              className={styles.socialnetwork}
              href="https://www.linkedin.com/in/sounia-mhalla-dit-aounallah-64578614b/"
              target="blank"
            >
              <img
                src="/public/assets/icons/linkedin-logo.svg"
                alt="LinkedIn Profile"
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Ines Troye</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/183735662?v=4"
              alt=""
            />
            <p>Admin System and Network</p>

            <a
              className={styles.socialnetwork}
              href="https://www.linkedin.com/in/inestroye"
              target="blank"
            >
              <img
                src="/public/assets/icons/linkedin-logo.svg"
                alt="LinkedIn Profile"
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Anissa</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/83823625?v=4"
              alt=""
            />
            <p>Admin System and Network</p>

            <a
              className={styles.socialnetwork}
              href="https://www.linkedin.com/in/anissaela"
              target="blank"
            >
              <img
                src="/public/assets/icons/linkedin-logo.svg"
                alt="LinkedIn Profile"
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Audrey</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/83540368?v=4"
              alt=""
            />
            <h4>UI/UX</h4>
            <p className={styles.ph4}>Figma</p>
          </div>

          <div className={styles.membercards}>
            <h3>Wissal</h3>
            <img
              className={styles.profilImage}
              src="https://avatars.githubusercontent.com/u/8382869?v=4"
              alt=""
            />
            <h4>UI/UX</h4>
            <p className={styles.ph4}>Figma</p>
          </div>

          <footer>
            <p>
              This project has been developed during the Hackathon 2024 directed
              by Interface3.
            </p>
            <p>
              Special thanks to Sonia, Nicole, Ellis, Bastien, Samuel, Gavin &
              Joel.
            </p>
          </footer>
        </section>
      </div>
    </>
  );
};
export default About;
