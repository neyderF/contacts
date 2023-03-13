-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-03-2023 a las 05:34:06
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `contacts`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone1` int(11) NOT NULL,
  `phone2` int(11) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `favoriteColor` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `birthday` date NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contact`
--

INSERT INTO `contact` (`id`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `address`, `favoriteColor`, `created_at`, `birthday`, `userId`) VALUES
(17, 'Maria Luisa', 'Mejia Castaño', 'marialuisa@gmail.com', 123213, 123123, 'Avenida 12 juanajuato colombia armenia risaralda', '#009688', '2023-03-12 23:03:39.526982', '2023-03-04', 1),
(18, 'lucas', 'Hernandez', 'nfigueroas@uqvirtual.edu.co', 231231, 1231231231, 'Avenida 12 juanajuato colombia armenia risaralda', '#ff5722', '2023-03-12 23:03:58.153195', '2023-03-18', 1),
(19, 'luck', 'luck', 'luck@gmail.com', 112, NULL, 'CRA 78 #67-92', '#ff9800', '2023-03-12 23:33:32.045549', '2023-03-18', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'paco', '$2b$10$b7aHgr.qzwBmEQEaZQshquDS7F7orR.zpp89z5WTm.UmjDfqPlYXu'),
(5, 'lucas', '$2b$10$HiDEvLnJYmVuJhE/AQ7afOl8pbdgZBAYyoMnNxx7TMPpB.ImjJa/.'),
(6, 'nfs', '$2b$10$vZZE4SpMNHuug.zlAS7bHeZM8pK2UzZk24j5ElDRsz4J0swbKGRxm');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_e7e34fa8e409e9146f4729fd0cb` (`userId`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `FK_e7e34fa8e409e9146f4729fd0cb` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
