-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 24 jan. 2021 à 16:47
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_rigflix`
--

-- --------------------------------------------------------

--
-- Structure de la table `medias`
--

CREATE TABLE `medias` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nomfichier` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `genres` varchar(255) NOT NULL,
  `iddb` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `medias`
--

INSERT INTO `medias` (`id`, `name`, `nomfichier`, `type`, `genres`, `iddb`) VALUES
(1, 'A Star is Born', 'a-star-is-born', 'films', 'action', 332562),
(2, 'Avatar', 'avatar', 'films', '', 19995),
(3, 'Black Panther', 'black-panther', 'films', '', 284054),
(4, 'Bohemian Rhapsody', 'bohemian-rhapsody', 'films', '', 424694),
(5, 'Clara', 'clara', 'films', '', 466532),
(6, 'Will Hunting', 'will-hunting', 'films', '', 489),
(7, 'Inception', 'inception', 'films', '', 27205),
(8, 'Interstellar', 'interstellar', 'films', '', 157336),
(9, 'Joker', 'joker', 'films', '', 475557),
(10, 'Le Roi Lion', 'le-roi-lion', 'films', '', 420818),
(11, 'Logan', 'logan', 'films', '', 263115),
(12, 'Mortal Engines', 'mortal-engines', 'films', '', 428078),
(13, 'Passengers', 'passengers', 'films', '', 274870),
(14, 'Seul sur Mars', 'seul-sur-mars', 'films', '', 286217),
(15, 'Shutter Island', 'shutter-island', 'films', '', 11324),
(16, 'Tomb Raider', 'tomb-raider', 'films', '', 338970),
(17, 'Venom', 'venom', 'films', '', 335983),
(18, 'Wind River', 'wind-river', 'films', '', 395834),
(19, 'Arrow', 'arrow', 'series', '', 1412),
(20, 'Chernobyl', 'chernobyl', 'series', '', 87108),
(21, 'Mr Robot', 'mr-robot', 'series', '', 62560),
(22, 'Scorpion', 'scorpion', 'series', '', 60797),
(23, 'Seal Team', 'seal-team', 'series', '', 71789),
(24, 'The End of The Fucking World', 'the-end-of-the-fucking-world', 'series', '', 74577),
(25, 'The Punisher', 'the-punisher', 'series', '', 67178),
(26, 'The Walking Dead', 'the-walking-dead', 'series', '', 1402),
(27, 'True Detective', 'true-detective', 'series', '', 46648),
(30, 'Batman vs Superman', 'batman-vs-superman', 'films', '', 209112),
(31, 'Avengers', 'avengers', 'films', '', 24428),
(32, 'Avengers : L\'Ere d\'Ultron ', 'avengers-2', 'films', '', 99861),
(33, 'Avengers : Infinity War', 'avengers-3', 'films', '', 299536),
(34, 'Avengers : Endgame', 'avengers-4', 'films', '', 299534),
(35, 'Brothers', 'brothers', 'films', '', 7445),
(36, 'Bumblebee', 'bumblebee', 'films', '', 424783),
(37, 'Captain Marvel', 'captain-marvel', 'films', '', 299537),
(38, 'Dallas Buyers Club', 'dallas-buyers-club', 'films', '', 152532),
(39, 'Wonder Woman', 'wonder-woman', 'films', '', 297762),
(40, 'Lion', 'lion', 'films', '', 334543),
(41, 'Tarzan', 'tarzan', 'films', '', 258489),
(42, 'Happiness Therapy', 'happiness-therapy', 'films', '', 82693),
(43, 'Intouchables', 'intouchables', 'films', '', 77338),
(44, 'Harry Potter 1', 'harry-potter-1', 'films', '', 671),
(45, 'Harry Potter 2', 'harry-potter-2', 'films', '', 672),
(46, 'Harry Potter 3', 'harry-potter-3', 'films', '', 673),
(47, 'Harry Potter 4', 'harry-potter-4', 'films', '', 674),
(48, 'Harry Potter 5', 'harry-potter-5', 'films', '', 675),
(49, 'Harry Potter 8', 'harry-potter-8', 'films', '', 12445),
(50, 'Harry Potter 7', 'harry-potter-7', 'films', '', 12444),
(51, 'Harry Potter 6', 'harry-potter-6', 'films', '', 767),
(52, 'Comment C\'est Loin', 'comment-cest-loin', 'films', '', 366564),
(53, 'Jappeloup', 'jappeloup', 'films', '', 172106),
(54, 'World War Z', 'world-war-z', 'films', '', 72190),
(55, 'X-Men : Dark Phoenix', 'x-men-dark-phoenix', 'films', '', 320288),
(56, 'Prisoners', 'prisoners', 'films', '', 146233),
(57, 'Night Hunter', 'night-hunter', 'films', '', 441282),
(58, 'La Liste de Schindler', 'la-liste-de-schindler', 'films', '', 424),
(59, 'The Valley', 'the-valley', 'series', '', 81188);

-- --------------------------------------------------------

--
-- Structure de la table `userdata`
--

CREATE TABLE `userdata` (
  `id` int(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `motdepasse` varchar(50) NOT NULL,
  `Prenom Nom` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `status` varchar(10) NOT NULL,
  `membre-depuis` varchar(17) NOT NULL,
  `userlogo` varchar(255) NOT NULL,
  `banniere` varchar(255) NOT NULL,
  `jetons` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `userdata`
--

INSERT INTO `userdata` (`id`, `username`, `motdepasse`, `Prenom Nom`, `Email`, `status`, `membre-depuis`, `userlogo`, `banniere`, `jetons`) VALUES
(1, 'admin', 'admin', 'admin', 'admin@admin.com', 'admin', 'Juin 2020', 'user', 'test', 0),
(2, 'Martin', 'test', 'Martin Rigaux', 'martrigaux@gmail.com', 'user', 'Juin 2020', 'logo', 'test', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `medias`
--
ALTER TABLE `medias`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `medias`
--
ALTER TABLE `medias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT pour la table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
