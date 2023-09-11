-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2023 a las 10:01:52
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
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `ID_actividad` varchar(20) NOT NULL,
  `ID_user` varchar(20) NOT NULL,
  `Duracion` int(10) NOT NULL,
  `Clasificacion` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alimentos`
--

CREATE TABLE `alimentos` (
  `ID_alimento` varchar(20) NOT NULL,
  `ID_user` varchar(20) NOT NULL,
  `Nombre_platillo` varchar(60) NOT NULL,
  `Ingredientes` varchar(60) NOT NULL,
  `Clasificacion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacionpersonal`
--

CREATE TABLE `informacionpersonal` (
  `ID_user` varchar(500) NOT NULL,
  `Nombre` varchar(60) NOT NULL,
  `ApellidoPaterno` varchar(60) NOT NULL,
  `ApellidoMaterno` varchar(60) NOT NULL,
  `Edad` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registroglucosa`
--

CREATE TABLE `registroglucosa` (
  `ID_user` varchar(20) NOT NULL,
  `ID_alimento` varchar(30) NOT NULL,
  `ID_actividad` varchar(30) NOT NULL,
  `Nivel` varchar(10) NOT NULL,
  `Day` int(10) NOT NULL,
  `Month` int(10) NOT NULL,
  `Year` int(15) NOT NULL,
  `Hora` varchar(20) NOT NULL,
  `Clasificacion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID_user` varchar(500) NOT NULL,
  `Email` varchar(60) NOT NULL,
  `Password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`ID_actividad`);

--
-- Indices de la tabla `alimentos`
--
ALTER TABLE `alimentos`
  ADD PRIMARY KEY (`ID_alimento`);

--
-- Indices de la tabla `informacionpersonal`
--
ALTER TABLE `informacionpersonal`
  ADD PRIMARY KEY (`ID_user`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
