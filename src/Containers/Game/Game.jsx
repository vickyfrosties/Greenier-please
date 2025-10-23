import React, { useEffect, useRef, useState } from "react";
import Phaser from "phaser";
import styles from "./Game.module.css";

const GameInfos = ({ projectInfo }) => {
  return <div>{projectInfo.title}</div>;
};

const Game = () => {
  const gameContainerRef = useRef(null);
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    proposal: [],
    goodProposal: 0,
    information: "",
    link: "",
  });

  useEffect(() => {
    resetGameVariables();

    const config = {
      type: Phaser.AUTO,
      width: 1000,
      height: 650,
      physics: {
        default: "arcade",
        arcade: { gravity: { y: 0 }, debug: false },
      },
      scene: {
        preload,
        create: function () {
          create.call(this, setProjectInfo);
        }, // Passer setProjectInfo correctement
        update,
      },
    };

    // Si le jeu n'existe pas encore, on l'initialise
    if (!window.game) {
      window.game = new Phaser.Game(config);
      // Attache le canvas généré par Phaser dans le div `gameContainerRef`
      gameContainerRef.current.appendChild(window.game.canvas);
    }

    // Nettoyage lors du démontage du composant
    return () => {
      if (window.game) {
        window.game.destroy(true);
        window.game = null;
      }
    };
  }, []);

  // Constante pour afficher la div à droite du jeu
  const GameInfos = ({ projectInfo, className }) => {
    return (
      <div className={className}>
        <h2>{projectInfo.title}</h2>
        <p>{projectInfo.information}</p>
        <a href={projectInfo.link} target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </div>
    );
  };

  // Réinitialisation des variables globales
  const resetGameVariables = () => {
    currentIndex = 0;

    // À charger à nouveau dans preload
    data = null;
    compteur = 0;
    makeclosup = false;
    didyouwin = undefined;
    countDown = 0;
    countDownText = null;
    countDownTimer = null;
    npc = null;
    thermometer = null;
    ingamewindow = null;
    operatorText = null;
    projectTitleText = null;
    paper1 = null;
    paper2 = null;
    paper3 = null;
    closeup = null;
    closeupText = null;
    accept = null;
  };

  let currentIndex = 0,
    data;
  let compteur = 0,
    makeclosup = false,
    didyouwin;
  let countDown, countDownText, countDownTimer;
  let npc, thermometer, ingamewindow, operatorText, projectTitleText;
  let paper1, paper2, paper3, closeup, closeupText, accept;
  const STARTCOUNTDOWN = 45;

  let winscreen, lostscreen;
  let index;

  // Définition des fonctions Phaser ./Game.module.css
  function preload() {
    this.load.image("background", "/assets/images/background.png");
    this.load.image("buttonaccept", "/assets/images/accept-button.png");
    this.load.json("gameData", "/propositions.json");
    this.load.image("paper", "/assets/images/paper.png");
    this.load.image("closeup", "/assets/images/postit.png");
    this.load.image("winscreen", "/assets/images/win-screen.png");
    this.load.image("lostscreen", "/assets/images/game-over-screen.png");
    this.load.image("firstthermomether", "/assets/images/neutral-thermo.png");
    this.load.image("seccondthermomether", "/assets/images/hot-thermo.png");
    this.load.image("thirdthermomether", "/assets/images/cold-thermo.png");
    this.load.image("neutralwindow", "/assets/images/neutral-window.png");
    this.load.image("ellis", "/assets/images/png-1.png");
    this.load.image("thomas", "/assets/images/npc-2.png");
    this.load.image("jelly", "/assets/images/jelly.png");
    this.load.image("nicole", "/assets/images/gizmo-karen-jellyfisher.png");
    this.load.image("badwindow", "/assets/images/dystopic-world.png");
    this.load.image("goodwindow", "/assets/images/goodwindow.png");
  }

  // Initialisation des éléments de la scène
  function create() {
    data = this.cache.json.get("gameData");
    setupBackground(this);
    setupThermometer(this);
    setupNPC(this);
    setupProposalPapers(this);
    setupProjectAndOperatorText(this);
    setupCountDownTimer(this);

    // oublie de la création de ces items
    winscreen = this.add
      .image(100, 100, "winscreen")
      .setOrigin(0, 0)
      .setVisible(false)
      .setDepth(2);
    lostscreen = this.add
      .image(100, 100, "lostscreen")
      .setOrigin(0, 0)
      .setVisible(false)
      .setDepth(2);

    afficherProjetEtOperateur(); // Appelez ici

    // Assurez-vous que les données sont correctement chargées
    if (data && data.projets && data.projets.length > 0) {
      return <p>Game is about to start.</p>;
    } else {
      console.error("Aucune donnée de projet trouvée.");
    }
  }

  // Mise à jour de la scène
  function update() {
    npc.setVisible(false);

    // Utilisation de .bind(this) pour forcer le contexte correct
    displayNPC.bind(this)();
    displayThermometer();
    displayEndScreens();
  }

  function createPaper(scene, x, y, propalIndex) {
    const paper = scene.add
      .image(x, y, "paper")
      .setInteractive()
      .setOrigin(0, 0);
    paper.on("pointerdown", () => selectProposal(propalIndex));
    paper.on("pointerup", () => {
      makeclosup = true;
      accept.setInteractive();
    });

    return paper;
  }

  function selectProposal(propalIndex) {
    index = propalIndex;
    const proposition = data.projets[currentIndex].proposal[propalIndex];

    // Affiche le closeup et le texte correspondant
    closeup.setVisible(true);
    closeupText.setVisible(true);
    closeupText.setText(proposition);
  }

  function setupProposalPapers(scene) {
    paper1 = createPaper(scene, 150, 450, 0);
    paper2 = createPaper(scene, 300, 450, 1);
    paper3 = createPaper(scene, 450, 450, 2);

    accept = scene.add
      .image(788, 500, "buttonaccept")
      .setOrigin(0, 0)
      .setDepth(1);
    accept.setInteractive();

    // Ferme le closeup lorsque le bouton "accept" est pressé
    accept.on("pointerdown", () => {
      makeclosup = false;
      closeup.setVisible(false);
      closeupText.setVisible(false);
    });

    accept.on("pointerup", () => verifierReponse(index));
  }

  function setupBackground(scene) {
    const background = scene.add.image(0, 0, "background").setOrigin(0, 0);
    closeup = scene.add
      .image(270, 130, "closeup")
      .setOrigin(0, 0)
      .setVisible(false);
    closeupText = scene.add
      .text(300, 200, "", {
        fontSize: "18px",
        fill: "#2E8B57",
        fontFamily: "courier new",
        fontStyle: "bold",
        wordWrap: { width: closeup.width - 50 },
      })
      .setOrigin(0, 0)
      .setVisible(false);
  }

  function setupThermometer(scene) {
    thermometer = scene.add
      .image(925, 25, "firstthermomether")
      .setOrigin(0, 0)
      .setVisible(true);
    ingamewindow = scene.add
      .image(642, 20, "neutralwindow")
      .setOrigin(0, 0)
      .setScale(0.97)
      .setVisible(true);
  }

  function setupNPC(scene) {
    const npcs = ["ellis", "thomas", "jelly", "nicole"];
    npc = scene.add
      .image(50, 125, npcs[currentIndex])
      .setOrigin(0, 0)
      .setScale(0.5);
  }

  function setupProjectAndOperatorText(scene) {
    operatorText = scene.add.text(20, 20, "", {
      fontSize: "14px",
      fill: "#000000",
      fontFamily: "Courier New",
      fontStyle: "bold",
    });
    projectTitleText = scene.add.text(20, 50, "", {
      fontSize: "14px",
      fill: "#000000",
      fontFamily: "Courier New",
      fontStyle: "bold",
    });
  }

  function setupCountDownTimer(scene) {
    countDown = STARTCOUNTDOWN;
    countDownText = scene.add.text(20, 100, `${countDown} sec`, {
      fontFamily: "Courier New",
      fontSize: "20px",
      fontStyle: "bold",
      fill: "#ff0000",
    });

    countDownTimer = scene.time.addEvent({
      delay: 1000,
      callback: countingDown,
      callbackScope: scene,
      loop: true,
    });
  }

  function displayNPC() {
    const npcs = ["ellis", "thomas", "jelly", "nicole"];
    const npcName = npcs[currentIndex];

    // Supprime l'ancien NPC, s'il existe
    if (npc) npc.destroy();

    // Applique une échelle spécifique pour chaque NPC
    let scale = 0.8;
    let x = 50;
    let y = 125;
    if (npcName === "nicole") {
      scale = 2;
      x = 25;
      y = 150;
    } else if (npcName === "jelly") {
      scale = 1;
      x = 25;
      y = 150;
    }

    npc = this.add.image(x, y, npcName).setOrigin(0, 0).setScale(scale);
  }

  function displayThermometer() {
    if (compteur < 0) {
      thermometer.setTexture("thirdthermomether");
      ingamewindow.setTexture("goodwindow");
    } else if (compteur > 0) {
      thermometer.setTexture("seccondthermomether");
      ingamewindow.setTexture("badwindow");
    } else {
      thermometer.setTexture("firstthermomether");
      ingamewindow.setTexture("neutralwindow");
    }
  }

  function displayEndScreens() {
    if (didyouwin !== undefined) {
      winscreen.setVisible(didyouwin);
      lostscreen.setVisible(!didyouwin);
      paper1.setVisible(false);
      paper2.setVisible(false);
      paper3.setVisible(false);
      countDownTimer.paused = true;
    }
  }

  function countingDown() {
    countDown -= 1;
    countDownText.setText(`${countDown} sec`);
    if (countDown == 0) {
      nextproposal();
    }
  }

  function afficherProjetEtOperateur() {
    // Vérifie si nous avons encore des projets à afficher
    if (currentIndex < data.projets.length) {
      // Sélectionne l'opérateur et le projet actuels
      let currentOperateur = data.operators[currentIndex];
      let currentProjet = data.projets[currentIndex];

      operatorText.setText("Operator:\n" + currentOperateur);
      projectTitleText.setText("Project:\n" + '"' + currentProjet.title + '"');

      if (currentProjet.title === "What is the main goal of Green IT?") {
        // Mettez à jour projectInfo avec les informations correspondantes
        setProjectInfo({
          title: currentProjet.title,
          proposal: currentProjet.proposal,
          goodProposal: currentProjet.goodProposal,
          information:
            "Are users informed of how their confidential information will be used? Is the information on the use of the data collected made accessible and easy to consult, and has the DPO been consulted? Are the checkboxes on the forms not pre-filled?\nThe data that users entrust to us is the responsibility of the company, and users must be kept informed of the care that the company takes to ensure the confidentiality of their data.\nThe RGPD imposes a framework for personal data, but does not cover other categories of data that deserve the same attention and precautions.",
          link: "https://gr491.isit-europe.org/crit.php?id=9-3068-uxui-les-donnees-que-les-utilisateurs-confient-sont",
        });
      } else {
        // Sinon, définissez projectInfo avec les valeurs par défaut ou celles du projet actuel
        setProjectInfo({
          title: currentProjet.title,
          proposal: currentProjet.proposal,
          goodProposal: currentProjet.goodProposal,
          information: currentProjet.information,
          link: currentProjet.link,
        });
      }

      countDown = STARTCOUNTDOWN;
      countDownText.setText(countDown + " sec");
    } else {
      if (compteur <= 0) {
        didyouwin = true;
      } else if (compteur > 0) {
        didyouwin = false;
      }

      countDownTimer.paused = true;
    }
  }

  function verifierReponse(index) {
    let currentProjet = data.projets[currentIndex];
    if (index == currentProjet.goodProposal) {
      compteur -= 1;
      localStorage.setItem("responseStatus", "correct");
    } else {
      compteur += 1;
      localStorage.setItem("responseStatus", "incorrect");
    }

    displayThermometer();
    nextproposal();
  }

  function nextproposal() {
    // Sinon, passer au projet suivant
    currentIndex += 1;
    afficherProjetEtOperateur.call(this);
  }

  return (
    <div>
      <div id="toto" className={styles.divgame} ref={gameContainerRef}>
        <GameInfos projectInfo={projectInfo} className={styles.projectInfo} />
      </div>
    </div>
  );
};

// Déclaration des autres fonctions comme preload, create, update, etc. ici
export default Game;

// Votre fonction killgame si elle est nécessaire
export const killgame = () => {
  if (window.game) {
    console.log("Game has been stopped");
    window.game.destroy();
    window.game = null;
  }
};
