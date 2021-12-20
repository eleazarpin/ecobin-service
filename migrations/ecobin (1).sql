-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-07-2020 a las 14:40:52
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecobin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centro_reciclaje`
--

CREATE TABLE `centro_reciclaje` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `calle` varchar(255) NOT NULL,
  `numero` int(10) UNSIGNED NOT NULL,
  `municipio_id` int(10) UNSIGNED NOT NULL,
  `lat` decimal(10,6) NOT NULL,
  `lng` decimal(10,6) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `centro_reciclaje`
--

INSERT INTO `centro_reciclaje` (`id`, `nombre`, `calle`, `numero`, `municipio_id`, `lat`, `lng`, `descripcion`) VALUES
(1, 'Centro 1', 'Calle Falsa', 123, 1, '-34.669520', '-58.560703', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cesto`
--

CREATE TABLE `cesto` (
  `id` int(11) NOT NULL,
  `vaciamiento` date NOT NULL,
  `estado` tinyint(3) UNSIGNED NOT NULL,
  `volumen` tinyint(3) UNSIGNED NOT NULL,
  `ecobin_id` int(10) UNSIGNED NOT NULL,
  `material_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ecobin`
--

CREATE TABLE `ecobin` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `dias_alarma` int(10) UNSIGNED NOT NULL,
  `ubicacion_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario_apertura`
--

CREATE TABLE `horario_apertura` (
  `id` int(10) UNSIGNED NOT NULL,
  `dia_semana` tinyint(3) UNSIGNED NOT NULL,
  `hora_apertura` time NOT NULL,
  `hora_cierre` time NOT NULL,
  `centro_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `horario_apertura`
--

INSERT INTO `horario_apertura` (`id`, `dia_semana`, `hora_apertura`, `hora_cierre`, `centro_id`) VALUES
(1, 1, '09:00:00', '19:00:00', 1),
(2, 2, '09:00:00', '19:00:00', 1),
(3, 3, '09:00:00', '19:00:00', 1),
(4, 4, '09:00:00', '19:00:00', 1),
(5, 5, '09:00:00', '19:00:00', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacion_reutilizacion`
--

CREATE TABLE `informacion_reutilizacion` (
  `id` int(10) UNSIGNED NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `dificultad` tinyint(3) UNSIGNED NOT NULL,
  `tipo_residuo_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material`
--

CREATE TABLE `material` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `material`
--

INSERT INTO `material` (`id`, `nombre`) VALUES
(1, 'No Reciclable'),
(2, 'Papel'),
(3, 'Carton'),
(4, 'Plastico'),
(5, 'Metal'),
(6, 'Vidrio'),
(7, 'Organico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `provincia_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`id`, `nombre`, `provincia_id`) VALUES
(1, 'José C. Paz', 6),
(2, 'La Matanza', 6),
(3, 'Moreno', 6),
(4, 'Tigre', 6),
(5, 'La Plata', 6),
(6, 'Merlo', 6),
(7, 'Esteban Echeverría', 6),
(8, 'San Miguel', 6),
(9, 'Hurlingham', 6),
(10, 'General Rodríguez', 6),
(11, 'Morón', 6),
(12, 'Ituzaingó', 6),
(13, 'Tres de Febrero', 6),
(14, 'Lanús', 6),
(15, 'Lomas de Zamora', 6),
(16, 'Florencio Varela', 6),
(17, 'Quilmes', 6),
(18, 'Avellaneda', 6),
(19, 'San Isidro', 6),
(20, 'General San Martín', 6),
(21, 'Malvinas Argentinas', 6),
(22, 'Ezeiza', 6),
(23, 'Ciudad Autónoma de Buenos Aires', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`id`, `nombre`) VALUES
(1, 'Argentina');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `pais_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id`, `nombre`, `pais_id`) VALUES
(2, 'Ciudad Autónoma de Buenos Aires', 1),
(6, 'Buenos Aires', 1),
(10, 'Catamarca', 1),
(14, 'Córdoba', 1),
(18, 'Corrientes', 1),
(22, 'Chaco', 1),
(26, 'Chubut', 1),
(30, 'Entre Ríos', 1),
(34, 'Formosa', 1),
(38, 'Jujuy', 1),
(42, 'La Pampa', 1),
(46, 'La Rioja', 1),
(50, 'Mendoza', 1),
(54, 'Misiones', 1),
(58, 'Neuquén', 1),
(62, 'Río Negro', 1),
(66, 'Salta', 1),
(70, 'San Juan', 1),
(74, 'San Luis', 1),
(78, 'Santa Cruz', 1),
(82, 'Santa Fe', 1),
(86, 'Santiago del Estero', 1),
(90, 'Tucumán', 1),
(94, 'Tierra del Fuego', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_procesamiento`
--

CREATE TABLE `tipo_procesamiento` (
  `centro_id` int(10) UNSIGNED NOT NULL,
  `material_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_residuo`
--

CREATE TABLE `tipo_residuo` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `material_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

CREATE TABLE `ubicacion` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `calle` varchar(255) NOT NULL,
  `numero` int(10) UNSIGNED NOT NULL,
  `empresa_id` int(10) UNSIGNED NOT NULL,
  `municipio_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `ubicacion_id` int(10) UNSIGNED DEFAULT NULL,
  `rol` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `usuario`, `clave`, `nombre`, `apellido`, `ubicacion_id`, `rol`) VALUES
(1, 'braian', 'braian123', 'Braian', 'Fritz', NULL, 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `centro_reciclaje`
--
ALTER TABLE `centro_reciclaje`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cesto`
--
ALTER TABLE `cesto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ecobin`
--
ALTER TABLE `ecobin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `horario_apertura`
--
ALTER TABLE `horario_apertura`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `informacion_reutilizacion`
--
ALTER TABLE `informacion_reutilizacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_procesamiento`
--
ALTER TABLE `tipo_procesamiento`
  ADD PRIMARY KEY (`centro_id`,`material_id`);

--
-- Indices de la tabla `tipo_residuo`
--
ALTER TABLE `tipo_residuo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `centro_reciclaje`
--
ALTER TABLE `centro_reciclaje`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cesto`
--
ALTER TABLE `cesto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ecobin`
--
ALTER TABLE `ecobin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `horario_apertura`
--
ALTER TABLE `horario_apertura`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `informacion_reutilizacion`
--
ALTER TABLE `informacion_reutilizacion`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `material`
--
ALTER TABLE `material`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `municipio`
--
ALTER TABLE `municipio`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT de la tabla `tipo_residuo`
--
ALTER TABLE `tipo_residuo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
