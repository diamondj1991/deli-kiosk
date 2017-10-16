-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2016 at 06:05 PM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `deli_tester2`
--

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `order_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`order_id`, `name`) VALUES
(1, 'Jake'),
(2, 'Bob'),
(3, 'Sampson'),
(4, 'Greg'),
(5, 'oi'),
(6, 'zed'),
(7, 'alex'),
(8, 'ddd'),
(9, 'James Taylor'),
(10, 's');

-- --------------------------------------------------------

--
-- Table structure for table `orderline`
--

CREATE TABLE IF NOT EXISTS `orderline` (
  `order_id` int(11) NOT NULL,
  `product_id` varchar(20) NOT NULL,
  `quantity` double(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orderline`
--

INSERT INTO `orderline` (`order_id`, `product_id`, `quantity`) VALUES
(1, 'BH-H', 0.25),
(1, 'BH-S', 1.00),
(2, 'DW-R', 1.00),
(2, 'IL-C', 1.00),
(2, 'OM-PS', 1.00),
(3, 'AL-C', 0.25),
(3, 'BH-PS', 0.25),
(3, 'DW-MP', 1.00),
(4, 'DW-H', 1.25),
(5, 'BH-H', 0.75),
(5, 'DW-H', 1.00),
(6, 'BH-C', 0.50),
(6, 'FF-MP', 0.50),
(6, 'FF-S', 5.00),
(7, 'BH-H', 0.25),
(7, 'SS-SA', 0.50),
(8, 'BH-C', 0.25),
(8, 'DW-S', 1.50),
(8, 'IL-SA', 1.00),
(8, 'YL-L', 0.25),
(9, 'DA-L', 0.50),
(9, 'FF-R', 2.00),
(10, 'DA-L', 0.25);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `product_id` varchar(20) NOT NULL,
  `price` double(4,2) NOT NULL,
  `description` varchar(60) NOT NULL,
  `brand` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `price`, `description`, `brand`) VALUES
('AL-A', 6.99, 'American', 'Alpine Lace'),
('AL-C', 6.99, 'Cheddar', 'Alpine Lace'),
('AL-P', 6.99, 'Provolone', 'Alpine Lace'),
('AL-SW', 6.99, 'Swiss ', 'Alpine Lace'),
('BH-A', 7.99, 'American', 'Boars Head'),
('BH-C', 7.99, 'Cheddar', 'Boars Head'),
('BH-CO', 6.99, 'Coleslaw', 'Boars Head'),
('BH-H', 9.99, 'Ham', 'Boars Head'),
('BH-MC', 6.99, 'Macaroni & Cheese', 'Boars Head'),
('BH-MP', 9.99, 'Mashed Potatoes', 'Boars Head'),
('BH-P', 7.99, 'Provolone', 'Boars Head'),
('BH-PS', 6.99, 'Potato Salad', 'Boars Head'),
('BH-R', 9.99, 'Roast Beef', 'Boars Head'),
('BH-S', 9.99, 'Sausage', 'Boars Head'),
('BH-SW', 7.99, 'Swiss', 'Boars Head'),
('BH-T', 9.99, 'Turkey', 'Boars Head'),
('DA-C', 21.99, 'Crab', 'Darden'),
('DA-L', 21.99, 'Lobster', 'Darden'),
('DA-S', 9.99, 'Shrimp', 'Darden'),
('DA-SA', 9.99, 'Salmon', 'Darden'),
('DW-CO', 5.99, 'Coleslaw', 'Dietz & Watson'),
('DW-H', 8.99, 'Ham', 'Dietz & Watson'),
('DW-MC', 5.99, 'Macaroni & Cheese', 'Dietz & Watson'),
('DW-MP', 8.99, 'Mashed Potatoes', 'Dietz & Watson'),
('DW-PS', 5.99, 'Potato Salad', 'Dietz & Watson'),
('DW-R', 8.99, 'Roast Beef', 'Dietz & Watson'),
('DW-S', 8.99, 'Sausage', 'Dietz & Watson'),
('DW-T', 8.99, 'Turkey', 'Dietz & Watson'),
('FF-CO', 4.99, 'Coleslaw', 'Foster Farms'),
('FF-H', 7.99, 'Ham', 'Foster Farms'),
('FF-MC', 4.99, 'Macaroni & Cheese', 'Foster Farms'),
('FF-MP', 7.99, 'Mashed Potatoes', 'Foster Farms'),
('FF-PS', 4.99, 'Potato Salad', 'Foster Farms'),
('FF-R', 7.99, 'Roast Beef', 'Foster Farms'),
('FF-S', 7.99, 'Sausage', 'Foster Farms'),
('FF-T', 7.99, 'Turkey', 'Foster Farms'),
('FI-C', 5.99, 'Cheddar', 'Finlandia'),
('FI-P', 5.99, 'Provolone', 'Finlandia'),
('FI-SW', 5.99, 'Swiss', 'Finlandia'),
('FL-A', 5.99, 'American', 'Finlandia'),
('IL-C', 22.99, 'Crab', 'Island Lobster Ltd.'),
('IL-L', 22.99, 'Lobster', 'Island Lobster Ltd.'),
('IL-S', 10.99, 'Shrimp', 'Island Lobster Ltd.'),
('IL-SA', 10.99, 'Salmon', 'Island Lobster Ltd.'),
('OM-CO', 3.99, 'Coleslaw', 'Oscar Meyer'),
('OM-H', 6.99, 'Ham', 'Oscar Meyer'),
('OM-MC', 3.99, 'Macaroni & Cheese', 'Oscar Meyer'),
('OM-MP', 6.99, 'Mashed Potatoes', 'Oscar Meyer'),
('OM-PS', 3.99, 'Potato Salad', 'Oscar Meyer'),
('OM-R', 6.99, 'Roast Beef', 'Oscar Meyer'),
('OM-S', 6.99, 'Sausage', 'Oscar Meyer'),
('OM-T', 6.99, 'Turkey', 'Oscar Meyer'),
('SL-A', 4.99, 'American', 'Sara Lee'),
('SL-C', 4.99, 'Cheddar', 'Sara Lee'),
('SL-P', 4.99, 'Provolone', 'Sara Lee'),
('SL-SW', 4.99, 'Swiss', 'Sara Lee'),
('SS-C', 23.99, 'Crab', 'Sea Salt Lobster'),
('SS-L', 23.99, 'Lobster', 'Sea Salt Lobster'),
('SS-S', 11.99, 'Shrimp', 'Sea Salt Lobster'),
('SS-SA', 11.99, 'Salmon', 'Sea Salt Lobster'),
('YL-C', 24.99, 'Crab', 'Yankee Lobster Co.'),
('YL-L', 24.99, 'Lobster', 'Yankee Lobster Co.'),
('YL-S', 12.99, 'Shrimp', 'Yankee Lobster Co.'),
('YL-SA', 12.99, 'Salmon', 'Yankee Lobster Co.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `orderline`
--
ALTER TABLE `orderline`
  ADD PRIMARY KEY (`order_id`,`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
