-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-09-2023 a las 06:39:19
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `glucontroldb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `activities`
--

CREATE TABLE `activities` (
  `AID` varchar(255) NOT NULL,
  `UID` varchar(255) DEFAULT NULL,
  `Activitie_name` varchar(255) DEFAULT NULL,
  `Classification` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foods`
--

CREATE TABLE `foods` (
  `FID` varchar(255) NOT NULL,
  `UID` varchar(255) DEFAULT NULL,
  `Food_name` varchar(255) DEFAULT NULL,
  `Classification` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `glucose_readings`
--

CREATE TABLE `glucose_readings` (
  `Number` int(11) NOT NULL,
  `UID` varchar(255) DEFAULT NULL,
  `FID` varchar(255) DEFAULT NULL,
  `Portion` varchar(255) DEFAULT NULL,
  `AID` varchar(255) DEFAULT NULL,
  `Duration` int(11) DEFAULT NULL,
  `Glucose_level` int(11) DEFAULT NULL,
  `Category` varchar(255) DEFAULT NULL,
  `Registration_date` date DEFAULT NULL,
  `Hour` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_information`
--

CREATE TABLE `personal_information` (
  `UID` varchar(255) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `ApellidoPaterno` varchar(255) DEFAULT NULL,
  `ApellidoMaterno` varchar(255) DEFAULT NULL,
  `Edad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `UID` varchar(255) NOT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `value_categories`
--

CREATE TABLE `value_categories` (
  `Category_Name` varchar(255) NOT NULL,
  `Minimum_Value` int(11) DEFAULT NULL,
  `Maximum_Value` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `value_categories`
--

INSERT INTO `value_categories` (`Category_Name`, `Minimum_Value`, `Maximum_Value`) VALUES
('Alto', 141, 180),
('Bajo', 71, 100),
('Muy Alto', 181, 300),
('Muy Bajo', 0, 70),
('Normal', 101, 140);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`AID`);

--
-- Indices de la tabla `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`FID`);

--
-- Indices de la tabla `glucose_readings`
--
ALTER TABLE `glucose_readings`
  ADD PRIMARY KEY (`Number`);

--
-- Indices de la tabla `personal_information`
--
ALTER TABLE `personal_information`
  ADD PRIMARY KEY (`UID`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UID`);

--
-- Indices de la tabla `value_categories`
--
ALTER TABLE `value_categories`
  ADD PRIMARY KEY (`Category_Name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `glucose_readings`
--
ALTER TABLE `glucose_readings`
  MODIFY `Number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
