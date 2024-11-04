// import React, { useState, useEffect, useRef } from 'react';
// import gameData from "./propositions.json";
// import styles from "./Game.module.css";
// import DivInfo from '../../Components/DivInfo/DivInfo';

// const GameInfoDisplay = () => {
//   const [gameInfo, setGameInfo] = useState(null);
//   const gameContainerRef = useRef(null);

//   useEffect(() => {
//     startgame(); // Lancer le jeu avec Phaser

//     // Charger et ajouter le canvas Phaser une fois que `startgame` a créé le canvas
//     const GAME_CANVAS = document.querySelector('canvas');
//     if (gameContainerRef.current && GAME_CANVAS) {
//       gameContainerRef.current.appendChild(GAME_CANVAS);
//     }

//     const checkClickCount = () => {
//       const clickCount = parseInt(localStorage.getItem('clickCountStorage') || '0');
//       if (clickCount > 0 && clickCount <= gameData.projets.length) {
//         const levelData = gameData.projets[clickCount - 1];
//         setGameInfo({
//           level: clickCount,
//           title: levelData.title,
//           goodProposal: levelData.goodProposal,
//           information: levelData.information,
//           link: levelData.link,
//         });
//       }
//     };

//     // Vérifier et afficher les informations initialement
//     checkClickCount();

//     // Écouter les changements sur `clickCountStorage`
//     window.addEventListener('storage', checkClickCount);

//     // Nettoyage de l'écouteur
//     return () => {
//       window.removeEventListener('storage', checkClickCount);
//     };
//   }, []);

//   if (!gameInfo) return null;

//   return (
//     <>
//       <div ref={gameContainerRef} id='toto' className={styles.divgame}></div>
//       <section className={styles.infosection}>
//         <p><strong>Niveau {gameInfo.level} :</strong> {gameInfo.title}</p>
//         <p><strong>Bonne réponse :</strong> {gameInfo.goodProposal}</p>
//         <p><strong>Explication :</strong> {gameInfo.information}</p>
//         <p><strong>Source :</strong> <a href={gameInfo.link} target="_blank" rel="noopener noreferrer">{gameInfo.link}</a></p>
//       </section>
//     </>
//   );
// };

// export default GameInfoDisplay;
