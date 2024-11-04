import styles from './About.module.css';
import { useEffect } from 'react';
import { killgame } from '../Game/Game.jsx';

const About = () => {
  useEffect(() => {
    const GAME_CANVA = document.querySelector('canvas');
    killgame();
  }, []);

  return (
    <>
      <div className={styles.divcontainer}>
        <h2 className={styles.subjectname}>Team</h2>

        <section className={styles.firstsection}>
          <div className={styles.membercards}>
            <h3>Luna Dessauvage</h3>
            <p>Game Dev Phaser</p>
            <a
              className={styles.socialnetwork}
              href='https://github.com/roze-olifant'
              target='blank'
            >
              <img
                src='/src/assets/Icons/github-logo.svg'
                alt='Github Profile'
              />
            </a>

            <a className={styles.socialnetwork} href='' target='blank'>
              <img
                src='/src/assets/Icons/linkedin-logo.svg'
                alt='LinkedIn Profile'
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Alexandra 'Alex' Messina</h3>
            <p>Game Dev Phaser</p>

            <a
              className={styles.socialnetwork}
              href='https://github.com/MamieNuf'
              target='blank'
            >
              <img
                src='/src/assets/Icons/github-logo.svg'
                alt='Github Profile'
              />
            </a>

            <a
              className={styles.socialnetwork}
              href='https://www.linkedin.com/in/amessinapro/'
              target='blank'
            >
              <img
                src='/src/assets/Icons/linkedin-logo.svg'
                alt='LinkedIn Profile'
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Gweny Dos Santos</h3>
            <p>Game Dev Phaser & Graphist Aseprite</p>
            <a
              className={styles.socialnetwork}
              href='https://github.com/Gweny526'
              target='blank'
            >
              <img
                src='/src/assets/Icons/github-logo.svg'
                alt='Github Profile'
              />
            </a>
            <a className={styles.socialnetwork} href='' target='blank'>
              <img
                src='/src/assets/Icons/linkedin-logo.svg'
                alt='LinkedIn Profile'
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Benedicte 'Bene' Lagasse</h3>
            <p>Frontend Developer React</p>
            <a
              className={styles.socialnetwork}
              target='blank'
              href='https://github.com/Blacg13'
            >
              <img
                src='/src/assets/Icons/github-logo.svg'
                alt='Github Profile'
              />
            </a>
            <a
              className={styles.socialnetwork}
              href='https://www.linkedin.com/in/b%C3%A9n%C3%A9dicte-lagasse/'
              target='blank'
            >
              <img
                src='/src/assets/Icons/linkedin-logo.svg'
                alt='LinkedIn Profile'
              />
            </a>
          </div>
          <div className={styles.membercards}>
            <h3>Deborah 'Debby' Clerckx</h3>
            <p>Project Chief - Git Referent - Emotional Plastic Duck Support - Backend Developer</p>
            <a
              className={styles.socialnetwork}
              href='https://github.com/belynnn'
              target='blank'
            >
              <img
                src='/src/assets/Icons/github-logo.svg'
                alt='Github Profile'
              />
            </a>
            <a
              className={styles.socialnetwork}
              href='https://www.linkedin.com/in/deborah-clerckx/'
              target='blank'
            >
              <img
                src='/src/assets/Icons/linkedin-logo.svg'
                alt='LinkedIn Profile'
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Sounia Mhalla</h3>
            <p>Frontend Developer React</p>
            <a
              className={styles.socialnetwork}
              href='https://github.com/vickyfrosties'
              target='blank'
            >
              <img
                src='/src/assets/Icons/github-logo.svg'
                alt='Github Profile'
              />
            </a>
            <a
              className={styles.socialnetwork}
              href='https://www.linkedin.com/in/sounia-mhalla-dit-aounallah-64578614b/'
              target='blank'
            >
              <img
                src='/src/assets/Icons/linkedin-logo.svg'
                alt='LinkedIn Profile'
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Ines</h3>
            <p>Admin System and Network</p>
            <a className={styles.socialnetwork} href='' target='blank'>
              <img
                src='/src/assets/Icons/github-logo.svg'
                alt='Github Profile'
              />
            </a>
            <a
              className={styles.socialnetwork}
              href='https://www.linkedin.com/in/inestroye'
              target='blank'
            >
              <img
                src='/src/assets/Icons/linkedin-logo.svg'
                alt='LinkedIn Profile'
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Anissa</h3>
            <p>Admin System and Network</p>
            <a
              className={styles.socialnetwork}
              href='https://github.com/vickyfrosties'
              target='blank'
            >
              <img
                src='/src/assets/Icons/github-logo.svg'
                alt='Github Profile'
              />
            </a>
            <a
              className={styles.socialnetwork}
              href='https://www.linkedin.com/in/anissaela'
              target='blank'
            >
              <img
                src='/src/assets/Icons/linkedin-logo.svg'
                alt='LinkedIn Profile'
              />
            </a>
          </div>

          <div className={styles.membercards}>
            <h3>Wissal</h3>
            <p>UI/UX</p>
          </div>

          <div className={styles.membercards}>
            <h3>Audrey</h3>
            <p>UI/UX</p>
          </div>

          <div>
            <p>
              This project has been developed during the Hackathon directed by Interface3.
            </p>
            <p>
              Special thanks to Sonia, Nicole, Gavin, Samuel, Ellis, Bastien & Joel.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;