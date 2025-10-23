import { useState } from "react";
// import data from "../../../public/assets/propositions.json";
import data from "../../../public/data/propositions.json";
import styles from "./DivInfo.module.css";

const DivInfo = () => {
  //todo : récupérer les infos du json
  const projects = data.projets;
  //todo : récupérer les infos du bouton dans le local storage
  // console.log("clickCount " + parseInt(localStorage.getItem("clickCount")));
  // console.log(Object.keys(localStorage) + ': ' + Object.values(localStorage));

  const [count, setCount] = useState(null);
  // setInterval(() => {
  //   console.log(
  //     'storage.getItem in jsx: ' + localStorage.getItem('clickCount')
  //   );
  //   console.log('count avant: ' + count);
  //   setCount((count = parseInt(localStorage.getItem('clickCount'))));
  //   console.log('count après: ' + count);
  // }, 1000);
  //! T____________________________________________T
  // window.addEventListener('storage', () => {
  //   setCount(Object.values(localStorage));
  //   console.log('count setted: ' + count);
  // });
  //! T____________________________________________T

  //? other :
  // function displayDiv() {
  //   localStorage.getItem('clickCount');
  //   setClickCount(clickCount + 1);
  // }

  //   //todone == display divinfos
  //   const displayInfodiv = useRef(false);
  //   function handleClick() {
  //     displayInfodiv.current = !displayInfodiv.current;
  //     console.log('button clicked : ' + displayInfodiv.current);
  //   }
  // //todo : faire un tableau des divinfo
  return (
    <>
      {/* <h2 className={styles.subjectname}>Information</h2> */}
      <section className={styles.divinfo_container}>
        <div className={styles.divcontainer}>
          {projects.map((projet, index) => {
            return (
              <section key={index} className={styles.sectioninfo}>
                <div className={styles.infodiv}>
                  <h3 className={styles.infotitle}>
                    Read more about "{projet.title}"
                  </h3>
                  <p>{projet.information}</p>
                  <a href={projet.link} target="blank">
                    <button className={styles.link_btn}>See source</button>
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default DivInfo;
