-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 05, 2023 at 11:18 AM
-- Server version: 8.0.32-0ubuntu0.20.04.2
-- PHP Version: 7.4.3-4ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbtask_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `client_contact_details`
--

CREATE TABLE `client_contact_details` (
  `client_contact_details_id` int NOT NULL,
  `client_id` int NOT NULL,
  `contact_person_name` varchar(50) NOT NULL,
  `contact_person_phone` varchar(10) NOT NULL,
  `status` varchar(10) NOT NULL,
  `client_role` varchar(50) CHARACTER SET utf8mb4  NOT NULL,
  `active_from` date NOT NULL,
  `active_to` date NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `client_master`
--

CREATE TABLE `client_master` (
  `profileImage` varchar(250) CHARACTER SET utf8mb4 NOT NULL,
  `client_id` int NOT NULL,
  `client_name` varchar(100) NOT NULL,
  `client_shortcode` varchar(10) NOT NULL,
  `vertical_id` int DEFAULT NULL,
  `owner_name` varchar(50) NOT NULL,
  `owner_phone` varchar(10) NOT NULL,
  `owner_email` varchar(100) NOT NULL,
  `accounts_contact` varchar(50) NOT NULL,
  `accounts_phone` varchar(10) NOT NULL,
  `accounts_email` varchar(100) NOT NULL,
  `gst_no` varchar(200) NOT NULL,
  `description` varchar(250) NOT NULL,
  `address_line_1` varchar(200) NOT NULL,
  `address_line_2` varchar(200) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `pin_code` varchar(10) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `client_master`
--

INSERT INTO `client_master` (`profileImage`, `client_id`, `client_name`, `client_shortcode`, `vertical_id`, `owner_name`, `owner_phone`, `owner_email`, `accounts_contact`, `accounts_phone`, `accounts_email`, `gst_no`, `description`, `address_line_1`, `address_line_2`, `city`, `state`, `country`, `pin_code`, `created_by`, `updated_by`, `created_date`, `updated_date`) VALUES
('', 57, 'Government College Coimbatore', 'GCT', 1, 'Ramasamy', '8956237845', 'gct@gmail.com', '7845217547', '7845124578', 'gct@gmail.com', '7895556454456565655', 'GCT is a leading PCB connector & cable assembly manufacturer. Browse our innovative product range for solutions to your interconnect design challenges!', 'coimbatore', 'coimbatore', 'coimbatore', 'tamilnadu', '', '652145', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', 58, 'KVIM College Coimbatore', 'KVIM', 1, 'Kumar', '8956237845', 'gct@gmail.com', '7845217547', '7845124578', 'gct@gmail.com', '7895556454456565655', 'Best Spoke Institution PMO-IEDP Award. Nestled at the foothills of the Western Ghats, located in a sprawling 52-acre campus in Kovaipudur, Coimbatore, Sri Krishna College of', 'coimbatore', 'coimbatore', 'coimbatore', 'tamilnadu', '', '652145', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', 59, 'Rajas College of Engineering', 'RCE', 1, 'Venugopal', '8956237845', 'gct@gmail.com', '7845217547', '7845124578', 'gct@gmail.com', '7895556454456565655', 'We believe that each child is an individual with varying needs. A long cherished dream of our founder Chairman Dr. S.A.Raja was to establish number of institutions and bring out ', 'coimbatore', 'coimbatore', 'coimbatore', 'tamilnadu', '', '652145', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', 99, 'sengunthar college erode', 'SEC', 1, 'Robin', '7854784578', 'robin@gmail.com', 'jai', '7845789856', 'sengunthar@gmail.com', '457858712875878578', '', 'Erode', 'Erode', 'Erode', 'Tamilnadu', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', 151, 'GCT college of engineering', 'GCT', 1, 'Kathir', '7845214578', 'gct@gmail.com', '7845124578', '7845124578', 'gct@gmail.com', '78451254457865', 'ebContact GCT Government College of Technology Thadagam Road, Coimbatore, Tamil Nadu - 641 013 Phone: (0422) - 2432221 E-mail: principal@gct.ac.in', 'coimbatore', 'coimbatore', 'coimbatore', 'Tamilnadu', '', '652145', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', 153, 'Kongunadu college coimbatore', 'KASC', 1, 'Aruchami k', '8956747895', 'aruchami@gmail.com', 'Ram', '9856895689', 'kongunadu@gmail.com', '10AABCU9603R1Z2', '', 'Coimbatore', 'Coimbatore', 'Coimbatore', 'Tamilnadu', '', '641008', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('798fd0631a73a4c66a46723f024200e6', 200, '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('df6abd2ebabb932a794727bed8b7a6ed', 202, '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('aa4ff5d6cfa0db5983d6e02de6ee3031', 209, 'Profile Check', 'Prile', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('666cefe653105f1a36995d8b2b959a6a', 211, 'TEst', 'ewewe', 0, 'ewew', 'wewe', '', 'wewe', 'tr', 'dr', 'hg', '', 'g', 'gjg', 'g', 'jhgjh', '', 'ghj', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', 215, 'TTTTTTT', 'undefined', 0, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', 216, 'SER', 'undefined', 0, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', 217, 'testtt', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', 218, 'NEWwwwwww', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('ef8ec4755c218c0315a3ae13e8d547ec', 222, 'Testtttt', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('25fc70adfd4a1a6f6c267bfb3d75220b', 223, 'Se', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `customer_project_details`
--

CREATE TABLE `customer_project_details` (
  `details_id` int NOT NULL,
  `project_id` int NOT NULL,
  `license_start_date` date NOT NULL,
  `license_expiry_date` date NOT NULL,
  `unit` varchar(50) NOT NULL,
  `price_per_unit` varchar(50) NOT NULL,
  `cloud_local_shared` varchar(50) NOT NULL,
  `total_billed_income_taxes` varchar(50) NOT NULL,
  `proposal_copies` varchar(255) NOT NULL,
  `order_copies` varchar(255) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `customer_project_master`
--

CREATE TABLE `customer_project_master` (
  `project_id` int NOT NULL,
  `vertical_id` int NOT NULL,
  `product_id` int NOT NULL,
  `client_id` int NOT NULL,
  `project_name` varchar(100) NOT NULL,
  `customer_project_shortcode` varchar(10) NOT NULL,
  `order_date` date NOT NULL,
  `license_start_date` date NOT NULL,
  `years_of_contract` varchar(15) NOT NULL,
  `license_end_date` date NOT NULL,
  `comments` varchar(200) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `designation`
--

CREATE TABLE `designation` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `user_role_id` int NOT NULL,
  `designation` varchar(100) NOT NULL,
  `roles` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int NOT NULL,
  `filename` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `login_history`
--

CREATE TABLE `login_history` (
  `id` int NOT NULL,
  `ip_address` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `password` varchar(50) NOT NULL,
  `attempt_count` int NOT NULL,
  `bad_attempt` int NOT NULL,
  `message` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `login_history`
--

INSERT INTO `login_history` (`id`, `ip_address`, `email`, `password`, `attempt_count`, `bad_attempt`, `message`, `created_date`, `updated_date`) VALUES
(100, '103.194.242.18', 'admin', '$2b$10$qqfbUZjANAVsnfjZx/TwQ.4BGZcW6MXn3TAa.lpq2mJ', 1, 0, 'Login successful', '2023-02-15 12:36:26', '2023-02-15 07:06:26'),
(102, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$tC3M.cDWhYeS0GqwSUBA1e0aRGpiTZHKTBDK4lOTpUZ', 1, 0, 'Login successful', '2023-02-23 12:40:52', '2023-02-23 07:10:52'),
(103, '103.194.242.18', 'sachin@gmail.com', '$2b$10$5pnY8nrvrHkZx/.5khUL3.dVkcnC7.EvF/.r0wgVNut', 1, 1, 'Login failed', '2023-02-23 12:41:30', '2023-02-23 07:11:30'),
(116, '103.194.242.18', 'developer@gmail.com', '$2b$10$loR/5ky9QxG.z9gdi/pCcuOodRpCJPMAdOCfvDTJ6pG', 1, 0, 'Login successful', '2023-03-06 10:33:05', '2023-03-06 05:03:05'),
(126, '103.194.242.18', 'ubesh@gmail.com', '$2b$10$PnaOx1vFNXz3LXI/5yzLoeHL/eLmcQENNCZmZAl3ulU', 1, 0, 'Login successful', '2023-03-21 11:52:19', '2023-03-21 06:22:19'),
(129, '103.194.242.18', 'user@gmail.com', '$2b$10$DOto5ZE9ZHxqywGcxUZZaOToDo16Ijr5hOLa4Q0Fn5a', 1, 1, 'Login failed', '2023-03-21 12:06:46', '2023-03-21 06:36:46'),
(131, '203.223.189.230', 'user@gmail.com', '$2b$10$OdYmUBtjyqHmVucS/vm9s.e9dBOXKY5ExM2E/WMvff7', 1, 1, 'Login failed', '2023-03-22 10:12:24', '2023-03-22 04:42:24'),
(132, '203.223.189.230', 'user@gmail.com', '$2b$10$rtYBXRsnBgF9uJ.2JhV96uwOFyZV2oWCgrnqqArUsAE', 2, 0, 'Login successful', '2023-03-22 10:12:30', '2023-03-22 04:42:30'),
(133, '103.194.242.18', 'ubesh@gmail.com', '$2b$10$usmfwblhx2LDtmaI/XBTq.7IWJZRI7tF4rvNxkR8z1t', 1, 0, 'Login successful', '2023-03-22 10:47:42', '2023-03-22 05:17:42'),
(134, '103.194.242.18', 'user@gmail.com', '$2b$10$jtt7YRE4UXgyYZl8Mv7dKeURvF0H6s4.udHktLYoEJP', 1, 0, 'Login successful', '2023-03-22 10:47:53', '2023-03-22 05:17:53'),
(135, '103.194.242.18', 'admin', '$2b$10$PHqXeGseKRzhGtprCkyppubO51XLLwocK/8zck6x5kI', 1, 1, 'Login failed', '2023-03-22 10:48:46', '2023-03-22 05:18:46'),
(136, '103.194.242.18', 'ubesh@gmail.com', '$2b$10$jMKtjYiooIaXSrBBQjCTluONTQTE2XEv.IfqmP4CrnU', 2, 0, 'Login successful', '2023-03-22 10:48:55', '2023-03-22 05:18:55'),
(137, '103.194.242.18', 'ubesh@gmail.com', '$2b$10$/mv02W6.ew3e.H4NFHPGaeqB7k3pXkH0ICr0QFIUjX8', 1, 0, 'Login successful', '2023-03-22 10:58:20', '2023-03-22 05:28:20'),
(138, '103.194.242.18', 'ubesh@gmail.com', '$2b$10$h5TXe3S.Wdx9O4stir1/Ju/KJeGqlQqZ3pparcxj9/k', 2, 0, 'Login successful', '2023-03-22 10:58:23', '2023-03-22 05:28:23'),
(139, '103.194.242.18', 'user@gmail.com', '$2b$10$oIoXw8e0eLEVAI.1noKbq.z0A0uqFS1n7UfxTHBny9g', 1, 0, 'Login successful', '2023-03-22 11:18:57', '2023-03-22 05:48:57'),
(140, '103.194.242.18', 'user@gmail.com', '$2b$10$lBQclNlhFQaXirEvRf2N.e.yFh9RfoGujL7e7Kdm71O', 1, 0, 'Login successful', '2023-03-22 11:19:36', '2023-03-22 05:49:36'),
(141, '103.194.242.18', 'ubesh@gmail.com', '$2b$10$s1oaYyewJGM/DNjcFp7jzu8V3Q39Yq1ghjITJkLotQT', 1, 0, 'Login successful', '2023-03-22 11:26:00', '2023-03-22 05:56:00'),
(142, '103.114.210.211', 'user@gmail.com', '$2b$10$6J5QV14/mckxvN0yyZvLnuHj2ZcYtbw9uiM7F6AlXxe', 1, 0, 'Login successful', '2023-03-22 12:26:37', '2023-03-22 06:56:37'),
(143, '103.114.210.211', 'user@gmail.com', '$2b$10$GbJRRcMxcsdI4rn5JhNqZuSM1BWivYy9mTTZ1BLh7jU', 1, 0, 'Login successful', '2023-03-22 15:38:21', '2023-03-22 10:08:21'),
(144, '103.194.242.18', 'user@gmail.com', '$2b$10$qXP3MjHdXFKL3Oa6NvSh2OIoMjG8Jzl/y9dMZ5PTwaA', 1, 0, 'Login successful', '2023-03-23 09:51:17', '2023-03-23 04:21:17'),
(145, '103.194.242.18', 'user@gmail.com', '$2b$10$L.vtCPYMkhlLU9RusOV13O.YubPKvryMu6CQ7wO4rEO', 1, 0, 'Login successful', '2023-03-23 09:52:39', '2023-03-23 04:22:39'),
(146, '103.194.242.18', 'user@gmail.com', '$2b$10$cDAc7bZuh2p0Gg/zUH/N4.IJRMcFqodbsaVzknGUPIG', 1, 0, 'Login successful', '2023-03-23 09:58:58', '2023-03-23 04:28:58'),
(147, '103.194.242.18', 'user@gmail.com', '$2b$10$ft5IdnAHQt.Ww.iZyg7FgekJav6YO5cWDJPr1PEmGfL', 1, 0, 'Login successful', '2023-03-23 10:05:17', '2023-03-23 04:35:17'),
(148, '103.194.242.18', 'user@gmail.com', '$2b$10$Vp1lB2c/LQiRGuojMnV2VOUvEBPC56ybe2.YkMPU5zC', 1, 0, 'Login successful', '2023-03-23 10:10:10', '2023-03-23 04:40:10'),
(149, '103.114.210.211', 'user@gmail.com', '$2b$10$EtoByZTUwi6.tisWns3BJujReknEt1e.x3dJ1.Offdr', 1, 0, 'Login successful', '2023-03-23 10:11:20', '2023-03-23 04:41:20'),
(150, '103.114.210.211', 'user@gmail.com', '$2b$10$Mia6O3FhClGkPEFBroZPM.055iztwMwmfbnoFcDocWK', 1, 0, 'Login successful', '2023-03-23 10:16:05', '2023-03-23 04:46:05'),
(151, '103.194.242.18', 'user@gmail.com', '$2b$10$HMxPOeRPN4JOL.CHuDsjgOgolb8KBPwRkBnRc7NknnW', 1, 0, 'Login successful', '2023-03-23 10:17:32', '2023-03-23 04:47:32'),
(152, '103.194.242.18', 'user@gmail.com', '$2b$10$IFMfP.HqXb0tE6FGqaRFuOMxpo4TKoRbBVie2zknuF5', 1, 0, 'Login successful', '2023-03-23 10:19:49', '2023-03-23 04:49:49'),
(153, '103.194.242.18', 'user@gmail.com', '$2b$10$zw38zEeTnKmHM/3S1h3aUu6mOVP/iNxcjkrf5Qcb3bx', 2, 0, 'Login successful', '2023-03-23 10:21:28', '2023-03-23 04:51:28'),
(154, '103.194.242.18', 'user@gmail.com', '$2b$10$51X4.puUP2p384kExsk1EuymywKVfTLOmmij8fGEJIX', 1, 0, 'Login successful', '2023-03-23 10:24:40', '2023-03-23 04:54:40'),
(155, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$5sooV7Fc/PsprbQYNzXnI.ql2dRNr9tQoI0vv6MxiG1', 1, 0, 'Login successful', '2023-03-23 10:25:06', '2023-03-23 04:55:06'),
(156, '103.114.210.211', 'user@gmail.com', '$2b$10$CFi1//NV89bpjbcfcNDH4.eTlC7MTHvm0EBhVH3LbtO', 1, 0, 'Login successful', '2023-03-23 11:02:14', '2023-03-23 05:32:14'),
(157, '103.194.242.18', 'user@gmail.com', '$2b$10$tYVB5oYeFkXdne1l4PeWi.UHsQuJjy/YYKX1/qMlDtI', 1, 0, 'Login successful', '2023-03-23 11:08:17', '2023-03-23 05:38:17'),
(158, '103.114.210.211', 'dharanivirat48@gmail.com', '$2b$10$fZG1OTxo6wOcrIZoI/lKROanXF/2ALUwGe2imzQ/gEn', 1, 0, 'Login successful', '2023-03-23 13:07:01', '2023-03-23 07:37:01'),
(159, '103.114.210.211', 'user@gmail.com', '$2b$10$D4dGOkkgnRn96FBFM3m3CuuoZhIXjRTLJnrbs4tIF55', 1, 0, 'Login successful', '2023-03-23 13:07:14', '2023-03-23 07:37:14'),
(160, '103.194.242.18', 'user@gmail.com', '$2b$10$cyC9xh4NXDWkIJWFn1n3XOJCXCn6wqS4njr/iEM/MkZ', 5, 0, 'Login successful', '2023-03-23 13:17:44', '2023-03-23 07:47:44'),
(161, '103.194.242.18', 'user@gmail.com', '$2b$10$zP.49P61wOykiraajtbbJeuLyzGQUdxs4zgdl6DdF/D', 1, 0, 'Login successful', '2023-03-23 13:30:23', '2023-03-23 08:00:23'),
(162, '103.194.242.18', 'user@gmail.com', '$2b$10$qY3OIKv2zMK/Yb1JdqDK8e/SlC3UM406cWkFkCjoXW8', 1, 0, 'Login successful', '2023-03-23 14:48:28', '2023-03-23 09:18:28'),
(163, '103.194.242.18', 'user@gmail.com', '$2b$10$l0DILYuaj8Adb4A.0GWsRu0aGCxRzd7QkTxtHMkYmTq', 1, 0, 'Login successful', '2023-03-23 16:28:48', '2023-03-23 10:58:48'),
(164, '103.194.242.18', 'user@gmail.com', '$2b$10$6cf08TSAJBf/3sEkVbWut.Y0Gy49t7KJpXR2ZwMoHxD', 1, 0, 'Login successful', '2023-03-23 19:41:35', '2023-03-23 14:11:35'),
(165, '103.194.242.18', 'user@gmail.com', '$2b$10$IJxOtkq/TmARJATnhzn2kedcqcx8h9T0apI9tzSSpyW', 1, 0, 'Login successful', '2023-03-23 19:41:41', '2023-03-23 14:11:41'),
(166, '103.194.242.18', 'user@gmail.com', '$2b$10$B48D97JrpBY6VJG49A7ZdOOUJa3/Yclyb5kumOuNSRx', 1, 0, 'Login successful', '2023-03-23 19:41:42', '2023-03-23 14:11:42'),
(167, '103.194.242.18', 'user@gmail.com', '$2b$10$vnxiYs6Mq5N5uWWOGDDMS.9wQmpDn1mQJnd3S/fqZek', 1, 0, 'Login successful', '2023-03-23 19:41:47', '2023-03-23 14:11:47'),
(168, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$AQYJUo6SbxNmNKdxpnWaG.m7QVYBC8mvH1wZm/KrAJb', 1, 0, 'Login successful', '2023-03-23 20:19:56', '2023-03-23 14:49:56'),
(169, '103.194.242.18', 'user@gmail.com', '$2b$10$8mEF5DKicAEdBNZoH68/WuHCJjXS2dsiWoqV3kSWjPI', 1, 0, 'Login successful', '2023-03-24 10:33:47', '2023-03-24 05:03:47'),
(170, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$KkO2ycn6/zSYIHKoWCVh9u/QoD.MGorTm0h60M50ZEr', 1, 0, 'Login successful', '2023-03-25 14:59:04', '2023-03-25 09:29:04'),
(171, '103.194.242.18', 'sanjay', '$2b$10$6gkkSUQFWthGlDIemPr6e.OZWHCZqqaWnBEPKhepbXk', 4, 1, 'Login failed', '2023-03-25 17:22:36', '2023-03-25 11:52:36'),
(172, '103.194.242.18', 'User 1', '$2b$10$J00dgaM0L/l7srAPasMxT.suLCE4QIdm1sKpHCFymJX', 5, 0, 'Login successful', '2023-03-25 17:25:52', '2023-03-25 11:55:52'),
(173, '103.194.242.18', 'sanjay', '$2b$10$gzH1mPLlmfDZ2ZHI8t8P0uhdWD2g6f3CowSbdRrHZ7a', 1, 1, 'Login failed', '2023-03-25 17:26:32', '2023-03-25 11:56:32'),
(174, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$65ciQElvw.RjnTLwnWqhmue63mnd8FwvMaavAt4.Em3', 2, 1, 'Login failed', '2023-03-25 17:26:48', '2023-03-25 11:56:48'),
(175, '103.194.242.18', 'dharani', '$2b$10$LHTXFRUowXsy6LEFGuG0WOlsAp0t3WDoe0F5zXMv4g7', 3, 0, 'Login successful', '2023-03-25 17:27:09', '2023-03-25 11:57:09'),
(176, '103.194.242.18', 'sanjay', '$2b$10$WMTzI10kOHkVgbhZjhD0yuHQrrv.dMrSpyfNn.6SgP0', 1, 1, 'Login failed', '2023-03-25 17:28:07', '2023-03-25 11:58:07'),
(177, '103.114.210.211', 'sanjay', '$2b$10$tNrholVX5h0cMr5ih1.4sO1Sz0pAQ6ekphe85Tq5Vzj', 2, 1, 'Login failed', '2023-03-25 17:30:19', '2023-03-25 12:00:19'),
(178, '103.194.242.18', 'sanjay', '$2b$10$BcKXoA3xqwc2AL78rIT12.fMsts9ro8faZ2cwqAybJB', 1, 1, 'Login failed', '2023-03-25 17:33:44', '2023-03-25 12:03:44'),
(179, '103.194.242.18', 'sanjay', '$2b$10$yzkxg8B/1LnsQN5bGmJHIOktGEMIrQ9xMDxIHdVYv5J', 2, 1, 'Login failed', '2023-03-25 17:41:07', '2023-03-25 12:11:07'),
(180, '103.194.242.18', 'sanjay', '$2b$10$u8njaAyl2klOm2eYI5UqXOs7pGAHs9XWqQKOFCijmqK', 3, 1, 'Login failed', '2023-03-25 17:41:38', '2023-03-25 12:11:38'),
(181, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$uRrv6FquptmhqjTo5mjyjecDL/qMfBeWsXKgM7v.Ife', 1, 1, 'Login failed', '2023-03-27 18:15:54', '2023-03-27 12:45:54'),
(182, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$niFXULTTqcsyRNaptmjfful9U6KENvLMj.tWWXsr7aF', 2, 0, 'Login successful', '2023-03-27 18:42:34', '2023-03-27 13:12:34'),
(183, '103.114.210.211', 'user@gmail.com', '$2b$10$k.2DmxpbAiselB4./.s03udLMbwyY2Sjxwf8yrqnTPE', 1, 0, 'Login successful', '2023-03-27 20:38:28', '2023-03-27 15:08:28'),
(184, '103.114.210.211', 'user@gmail.com', '$2b$10$bzm.harKtkQcshvTOM.XvOIg3SE/VXinXxgtkpriHiG', 1, 0, 'Login successful', '2023-03-27 20:38:28', '2023-03-27 15:08:28'),
(185, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$I2jlA/107TvVo2NUEl3ALumj458QmanGZS5w1HVQ2Bn', 1, 0, 'Login successful', '2023-03-27 20:38:48', '2023-03-27 15:08:48'),
(186, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$Luo31T8Ot3HkeoHc/liFeed9o/P5FcRiJfoF7VvVGmn', 1, 0, 'Login successful', '2023-03-27 20:38:49', '2023-03-27 15:08:49'),
(187, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$2TozffA8HIBTf1BXua/VI.stLiyGwe.8jaeDJs9r9Wk', 1, 0, 'Login successful', '2023-03-27 20:42:07', '2023-03-27 15:12:07'),
(188, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$GCJhh07Qzi2WZCcmG3hRGehhPcT/IsnkPqDi8T/7PvD', 1, 0, 'Login successful', '2023-03-27 20:42:27', '2023-03-27 15:12:27'),
(189, '103.114.210.211', 'user@gmail.com', '$2b$10$VgjJCiDaG05JZnS3qVnLz.V7M/.gBWDTsVc97Y4CIIs', 1, 0, 'Login successful', '2023-03-27 20:56:54', '2023-03-27 15:26:54'),
(190, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$bTRLVPZlOdq4P6vkGT3WyOzX0kew.tYSwfO08cnVDkb', 1, 0, 'Login successful', '2023-03-27 21:01:01', '2023-03-27 15:31:01'),
(191, '103.114.210.211', 'dharanivirat48@gmail.com', '$2b$10$qqi4IFctH6vCuCVTRQBjC.iODemIFowOMPmFxKb8Ji7', 1, 0, 'Login successful', '2023-03-27 21:03:01', '2023-03-27 15:33:01'),
(192, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$FKfySdqek570OBbxm35yOeMONot4TcCsEoDesz4x2cj', 1, 0, 'Login successful', '2023-03-28 09:31:24', '2023-03-28 04:01:24'),
(193, '103.194.242.18', 'user@gmail.com', '$2b$10$zDdqG3/DjXdZQi9fWAddju9se2kHTaYnZxIDwKIwyor', 1, 0, 'Login successful', '2023-03-28 09:31:57', '2023-03-28 04:01:57'),
(194, '103.194.242.18', 'ubesh@gmail.com', '$2b$10$kkN7Q8VQ7Kb2se/T94zOq.cTUjV.AGDfI7xTfO0AfB8', 1, 0, 'Login successful', '2023-03-28 09:32:18', '2023-03-28 04:02:18'),
(195, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$JRogCH8hcZPl527RrmgZcO/MqdPSMADrR/ZYs/dMrTc', 1, 0, 'Login successful', '2023-03-28 09:35:20', '2023-03-28 04:05:20'),
(196, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$j2C8ev1ot3j/ELZA0F31Be8Z/1r5Y0.oGoVA5JqBmH.', 3, 0, 'Login successful', '2023-03-28 09:39:24', '2023-03-28 04:09:24'),
(197, '103.194.242.18', 'ubesh@gmail.com', '$2b$10$Mbnjm4rYMEHMTahWeLLdMuQdWpb.0oC9vZZEZE2w2mT', 1, 0, 'Login successful', '2023-03-28 09:39:34', '2023-03-28 04:09:34'),
(198, '103.194.242.18', 'user@gmail.com', '$2b$10$qZZd2EbkyIjz.prB4F3SiOfAuMZP2HQAUieE56rHLbu', 2, 0, 'Login successful', '2023-03-28 09:39:46', '2023-03-28 04:09:46'),
(199, '103.194.242.18', 'developer@gmail.com', '$2b$10$j3AqxI7xCMAIe.D6WfexxOzMNLTyDMlKzN1t4nAyhaJ', 1, 0, 'Login successful', '2023-03-28 09:40:07', '2023-03-28 04:10:07'),
(200, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$oiqIyhrfZx6i3lcvda2HQuUDijuox8vGVAHB.pX3D1O', 2, 0, 'Login successful', '2023-03-28 09:40:17', '2023-03-28 04:10:17'),
(201, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$cLxbrSfzsSe/LvXT9MykA.vV7WnDz2OMbWHiZkFcojT', 1, 0, 'Login successful', '2023-03-28 09:40:41', '2023-03-28 04:10:41'),
(202, '103.194.242.18', 'ubesh@gmail.com', '$2b$10$4UtOhSvh6ZeHQbAHNWCygO/483jj23wigJmfQa5/JfG', 1, 0, 'Login successful', '2023-03-28 09:41:11', '2023-03-28 04:11:11'),
(203, '103.194.242.18', 'gopal@gmail.com', '$2b$10$QufYoO.YqDci6Xkct6/w4OqKKlSpddlFjlSRHNnBwAz', 1, 0, 'Login successful', '2023-03-28 09:42:01', '2023-03-28 04:12:01'),
(204, '103.194.242.18', 'user@gmail.com', '$2b$10$dR3K00jfWF5HIdfxzTAghuWXUJQe0afS.8wKREmjNOS', 2, 0, 'Login successful', '2023-03-28 09:42:33', '2023-03-28 04:12:33'),
(205, '103.194.242.18', 'employee@gmail.co', '$2b$10$qlk723zU.8pnCl4np/0sbemSf2kEir0VmJTwQh1nmqj', 1, 1, 'Login failed', '2023-03-28 09:42:52', '2023-03-28 04:12:52'),
(206, '103.194.242.18', 'employee@gmail.com', '$2b$10$/lbrfkmExECri1KfA21VeOZ3G.GH5jqiMFwmO5I8AKV', 2, 1, 'Login failed', '2023-03-28 09:43:04', '2023-03-28 04:13:04'),
(207, '103.194.242.18', 'employee@gmail.com', '$2b$10$jVTGVL35mphTv7REGVJQgOWGBdcaJ0uCOx7TfbDXRlB', 3, 1, 'Login failed', '2023-03-28 09:43:08', '2023-03-28 04:13:08'),
(208, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$cqVDENA2/41gU9lW/.9lLu/RHSMcvKweVdR4P3inol4', 1, 0, 'Login successful', '2023-03-28 09:43:32', '2023-03-28 04:13:32'),
(209, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$vruVd5z8LNrs8nYo.Gbgm.odiGhM5Zl/jYUhUvcIpQD', 1, 0, 'Login successful', '2023-03-28 13:17:14', '2023-03-28 07:47:14'),
(210, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$Os7R7Yowj/aENhr3AA21M.tJ4T/GfxrtNSO52R37.Hh', 1, 0, 'Login successful', '2023-03-28 13:19:29', '2023-03-28 07:49:29'),
(211, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$RszgektFdA9o5Q/4JQ9TEOuDJpD5ovsLNglwisScUUr', 1, 0, 'Login successful', '2023-03-28 15:43:38', '2023-03-28 10:13:38'),
(212, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$bx4zR1TPIdRUPk3oCiDA7uRYAZY.R79P7gjIJPUUU3/', 1, 0, 'Login successful', '2023-03-28 17:18:18', '2023-03-28 11:48:18'),
(213, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$rcxp4/WilMFQlenxKFBQqeYehDTDEaGVRelFUqHTzrj', 1, 0, 'Login successful', '2023-03-28 18:24:47', '2023-03-28 12:54:47'),
(214, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$KIh0IGevDFZHhYk41BNGjetT17RmmWcqu6CKfBcKeal', 1, 0, 'Login successful', '2023-03-28 18:24:50', '2023-03-28 12:54:50'),
(215, '103.194.242.18', 'user@gmail.com', '$2b$10$7ShY/8Cwpp7HcjlxXwPTkOP4S9gGUub3yGfliK92OFu', 1, 0, 'Login successful', '2023-03-28 18:25:04', '2023-03-28 12:55:04'),
(216, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$kv7Ow9sQHhd5uEMm/xDs6.rer9UIun52rZd9HFCbC3a', 3, 0, 'Login successful', '2023-03-29 09:31:25', '2023-03-29 04:01:25'),
(217, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$zBno3e0Be36dRYhjBPiMouBo9rl5wtN1TjkBuTbUHvX', 1, 0, 'Login successful', '2023-03-29 09:35:21', '2023-03-29 04:05:21'),
(218, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$R4uDR/arwBNK.NdxCUg1Fer/a5QTLSK5if2.LWDFZ0C', 1, 0, 'Login successful', '2023-03-29 09:40:27', '2023-03-29 04:10:27'),
(219, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$e2NfBk2KYooDlDB3V/YZU.TsWBbpdrl7mi9TN7vj4iQ', 1, 0, 'Login successful', '2023-03-29 10:01:48', '2023-03-29 04:31:48'),
(220, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$8x.4IKPPIXlp98BOEfhUVeg0u7f/3KWlOmCaiK5/LtF', 1, 0, 'Login successful', '2023-03-29 10:04:39', '2023-03-29 04:34:39'),
(221, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$rqIZIc3fJccKmnI7uRyMEe8NYx9So1vjHzJ.26cJQjO', 1, 0, 'Login successful', '2023-03-29 10:22:37', '2023-03-29 04:52:37'),
(222, '103.194.242.18', 'harshanth@gmail.com', '$2b$10$2R35NhSVapPiC33TpZL0j.1zUTK1A3FGouuOyBtsTkV', 1, 0, 'Login successful', '2023-03-29 10:34:15', '2023-03-29 05:04:15'),
(223, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$TZvFdE1GfosUFHHmXqYtSO7nkI8KQxpLcL4n5gSiJUA', 1, 0, 'Login successful', '2023-03-29 10:47:11', '2023-03-29 05:17:11'),
(224, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$HxQhbVXo7F.dX0JxIucw.ueOiyJxMwXQ2uo4sCt5bbc', 1, 0, 'Login successful', '2023-03-29 10:56:21', '2023-03-29 05:26:21'),
(225, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$qyMvEksCmx68crPUWZG6FO9NtD5BpcyIV407tYGu/AQ', 1, 0, 'Login successful', '2023-03-29 11:02:04', '2023-03-29 05:32:04'),
(226, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$OuKn2kuC/hGZqKBgRj2qAeTFx1VjQm2UyhQCitB5fZU', 1, 0, 'Login successful', '2023-03-29 12:03:26', '2023-03-29 06:33:26'),
(227, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$easCrrqzGVtve3QnaRFIXu/mVe98puWJaOnUp9ciNuW', 1, 0, 'Login successful', '2023-03-29 12:19:09', '2023-03-29 06:49:09'),
(228, '103.114.210.211', 'harshanth@gmail.com', '$2b$10$7nOErODCjj0sQKvKES.6xeGkYsX2KMVJyHHTdl4dG0Q', 1, 0, 'Login successful', '2023-03-29 12:35:16', '2023-03-29 07:05:16'),
(229, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$9oi7Qghpv7MP8A.G/Pudm.I6Xu3n/tD..XNQBlMbXE9', 1, 0, 'Login successful', '2023-03-29 12:35:52', '2023-03-29 07:05:52'),
(230, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$21m68Ruo0ZzVYKiLCppY6ehV0ugNF70wvD.Wiuh4W6M', 1, 0, 'Login successful', '2023-03-29 13:32:35', '2023-03-29 08:02:35'),
(231, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$NSuX4JWmNVf2rvTcoE92v.31mGbh.nbfnifozpA73dM', 1, 0, 'Login successful', '2023-03-29 13:52:50', '2023-03-29 08:22:50'),
(232, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$Mt4HVR4qWuNxckYOcYV12uvaeby3cxHl8JQJpqpVXt7', 1, 0, 'Login successful', '2023-03-29 14:50:59', '2023-03-29 09:20:59'),
(233, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$Qf9sA7UVAa2NUyKvP6bBQO604bwM7Yy4pCjcixB2Rok', 1, 0, 'Login successful', '2023-03-29 15:21:39', '2023-03-29 09:51:39'),
(234, '103.194.242.18', 'harshanth@gmail.com', '$2b$10$lp9k0tpqtKxVKzwXg1dhAObpeDSbrrQ/iLVNPM4gv6g', 1, 0, 'Login successful', '2023-03-29 16:42:56', '2023-03-29 11:12:56'),
(235, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$SVoMkaibtoJcekmF8CByHulFNQRmKVwbthfn0sNxebw', 1, 0, 'Login successful', '2023-03-29 17:18:51', '2023-03-29 11:48:51'),
(236, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$Fue8AFqOdM.Rn3Xj1nUXe.eZz8PJG29ik0dBzzrcCTD', 1, 0, 'Login successful', '2023-03-29 17:24:09', '2023-03-29 11:54:09'),
(237, '103.194.242.18', 'harshanth@gmail.com', '$2b$10$QEBakRSofQnzhDr75RnGGOJdDIHtQ38XJ6EI.WJ3H33', 1, 0, 'Login successful', '2023-03-29 17:54:05', '2023-03-29 12:24:05'),
(238, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$MkkBx1u8819Q3DV2WgRas.e9T/Cav4UGvhcjJK842jS', 1, 1, 'Login failed', '2023-03-29 19:18:21', '2023-03-29 13:48:21'),
(239, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$t75ll8M35pJLQcF66BQjFOvb.CDplQ/a7.7AZjNhl3C', 2, 1, 'Login failed', '2023-03-29 19:18:25', '2023-03-29 13:48:25'),
(240, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$RnA1mItwNdfEPxTLm3YPIubGax4DJJKwDHIo31HEy3P', 3, 1, 'Login failed', '2023-03-29 19:18:28', '2023-03-29 13:48:28'),
(241, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$tv3mbIH24hybDxpg0tVbs.2Sdrd8ki1qAMWMOw1d3Fb', 4, 1, 'Login failed', '2023-03-29 19:18:53', '2023-03-29 13:48:53'),
(242, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$iHOP.mTiyREPUgxXwEQI9unI4bQMuOz1ScJwL.jFvdc', 5, 1, 'Login failed', '2023-03-29 19:18:59', '2023-03-29 13:48:59'),
(243, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$Xw8z.awOhrejsgLBH3GaDe0GakPE39igKdicXEDv85c', 6, 0, 'Login successful', '2023-03-29 19:19:29', '2023-03-29 13:49:29'),
(244, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$.qTMFmEiXOrPJ6Sd.YcpB.m0Pviw9BdmXMYPhe0wdd7', 1, 1, 'Login failed', '2023-03-29 19:28:31', '2023-03-29 13:58:31'),
(245, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$GYbGlYiQJv3Yi0HFXgEn6eA8919XN/vJIXxwtWaCCeK', 2, 0, 'Login successful', '2023-03-29 19:28:55', '2023-03-29 13:58:55'),
(246, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$zAarEgUqGHg/FUU7cdLG0evdE6q5U86gMslQcx0JhlK', 1, 1, 'Login failed', '2023-03-29 19:30:34', '2023-03-29 14:00:34'),
(247, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$VHKReF.tJVrIVlmb4AIK6O6V1xmBqcoy1b7dLZwz95y', 2, 0, 'Login successful', '2023-03-29 19:30:41', '2023-03-29 14:00:41'),
(248, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$GgdfcPaEi8qjezQApPZ6HOUwS9W.BeHhbKpb.fl8Ewd', 1, 0, 'Login successful', '2023-03-30 09:18:31', '2023-03-30 03:48:31'),
(249, '203.223.189.230', 'harshanth@gmail.com', '$2b$10$1ktTzo5RoiI8nyGBL.0oFOeLmvY8jYob4V3j.Fwui1l', 1, 0, 'Login successful', '2023-03-30 09:19:07', '2023-03-30 03:49:07'),
(250, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$HcGxRceBFuTIroHA/IpNyeQihwQRiIwTeqVbFPZGcR5', 1, 0, 'Login successful', '2023-03-30 09:35:31', '2023-03-30 04:05:31'),
(251, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$w95/yK0sx.eXzdYmwASAX.0nj5J3AJuv95FjyuyAv10', 1, 0, 'Login successful', '2023-03-30 09:55:13', '2023-03-30 04:25:13'),
(252, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$dJiBw/qVWlwn/kXFSYj0DOP2ufp0EBoDnVVGxvMAr71', 1, 0, 'Login successful', '2023-03-30 09:55:13', '2023-03-30 04:25:13'),
(253, '103.194.242.18', 'dharanivirat48@gmail.com', '$2b$10$APSyHTfHKbDekcuSH/AR1OG8HKA.j0FsCAjesz7pd1F', 1, 1, 'Login failed', '2023-03-30 11:00:38', '2023-03-30 05:30:38'),
(254, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$ujOdZCBTh.SKZ3AxLWseLeAvkGZa/TE6v8KADN8lsB7', 2, 1, 'Login failed', '2023-03-30 11:00:49', '2023-03-30 05:30:49'),
(255, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$T8fMaaBekWd1uUz2OJuaDe6MRNLvcE287sapHgHRGxP', 3, 0, 'Login successful', '2023-03-30 11:01:01', '2023-03-30 05:31:01'),
(256, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$hx6jZIrf88zmWD2SX.PFD.aG95F6LwRZfRQHK0HWmAk', 1, 1, 'Login failed', '2023-03-30 11:01:39', '2023-03-30 05:31:39'),
(257, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$IB9UHKwM0Bb3dkzuEAwab.P51vx.nkRvtTp70slshqj', 2, 0, 'Login successful', '2023-03-30 11:01:45', '2023-03-30 05:31:45'),
(258, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$OT8dvCzUrM9u7WzrR66CVuvrILEodbvjkORT2deQkmB', 1, 0, 'Login successful', '2023-03-30 11:34:39', '2023-03-30 06:04:39'),
(259, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$x4VueM7Ul0Fuc8kyc27.yuxfHf0M6FHXH9Pagl2viXS', 1, 0, 'Login successful', '2023-03-30 11:53:34', '2023-03-30 06:23:34'),
(260, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$/w9SY7QOYBFXLnQGbOgrT.g/MF4w/9Y2GX9Zd7uN2Z9', 1, 0, 'Login successful', '2023-03-30 15:57:49', '2023-03-30 10:27:49'),
(261, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$xMNysR7y6MMqGdm7XdkrbuMsMtzxpLaRZ4RgBcwTcx/', 1, 1, 'Login failed', '2023-03-30 17:11:09', '2023-03-30 11:41:09'),
(262, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$z65cB8vbXbJ8jiehc8zeC.f3B4VP5OqgaOGbYh6XklG', 2, 1, 'Login failed', '2023-03-30 17:11:17', '2023-03-30 11:41:17'),
(263, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$uInd4FAPbhqbm5IerFYYruXwbm3BWC3lQXqUIQDQqWI', 3, 0, 'Login successful', '2023-03-30 17:11:25', '2023-03-30 11:41:25'),
(264, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$wGG2k4.UD2bRJje.CpYbC.AxT4NEY3l6nciq0vRiMmc', 1, 0, 'Login successful', '2023-03-31 09:05:11', '2023-03-31 03:35:11'),
(265, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$Vjq7zLZDoB.NWGbtpRqFB.Wam8EPmk5VcS2l/8Tnh8d', 6, 0, 'Login successful', '2023-03-31 09:35:56', '2023-03-31 04:05:56'),
(266, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$022Fie4zfa45Zy2W1A/UIOORpO/xthyjcQ9ASwlTCp5', 1, 0, 'Login successful', '2023-03-31 09:37:28', '2023-03-31 04:07:28'),
(267, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$TFQ1L9I7F9IokxyfDds5VOJV.d54/j9y2Ghlhms67zO', 1, 0, 'Login successful', '2023-03-31 09:43:19', '2023-03-31 04:13:19'),
(268, '103.114.210.211', 'harshanth@gmail.com', '$2b$10$ARW3GvSujA7mDuHJvitGuu1lkJhjzK31gIljdhUjux4', 1, 0, 'Login successful', '2023-03-31 09:43:31', '2023-03-31 04:13:31'),
(269, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$64hEoWXLHMqZ2lEc8xfAWuA98jZ.llCsGUwNhZMNFJX', 1, 0, 'Login successful', '2023-03-31 09:49:28', '2023-03-31 04:19:28'),
(270, '103.114.210.211', 'harshanth@gmail.com', '$2b$10$oJYIU4/jcgC/Zz/LQBcCuOCCvKqalbhN3q/Lt8WfwMF', 1, 1, 'Login failed', '2023-03-31 10:13:32', '2023-03-31 04:43:32'),
(271, '103.114.210.211', 'harshanth@gmail.com', '$2b$10$YpLg/HWwGjrOumT2zI1M4.bOaOWV2HaIGBVej.2O14b', 2, 0, 'Login successful', '2023-03-31 10:13:47', '2023-03-31 04:43:47'),
(272, '103.194.242.18', 'harshanth@gmail.com', '$2b$10$/BGyBmwZtWlgyuzHTbl18.eWI2EzduSDBgi/OO8QJ5d', 1, 0, 'Login successful', '2023-03-31 10:14:13', '2023-03-31 04:44:13'),
(273, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$FBPkLdi59GZdRJ/AFvgGzemS4sUu.bUJGXEdxAc.JzC', 1, 0, 'Login successful', '2023-03-31 10:21:19', '2023-03-31 04:51:19'),
(274, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$TFpvtkUPi2kzUKEaFWs.1.LgYKEBCqHsDkDgzG.fODA', 1, 0, 'Login successful', '2023-03-31 10:32:03', '2023-03-31 05:02:03'),
(275, '103.194.242.18', 'harshanth@gmail.com', '$2b$10$f4SXEsyAUmhknZ26qr0N7OMsDkdPmiZlCT3c55UPc8t', 1, 0, 'Login successful', '2023-03-31 14:20:32', '2023-03-31 08:50:32'),
(276, '103.114.210.211', 'harshanth@gmail.com', '$2b$10$Xdqa2QVgrrEnzVMomuMx6urUo4t4iK1uqeOX.BP1YzA', 1, 0, 'Login successful', '2023-03-31 14:35:28', '2023-03-31 09:05:28'),
(277, '103.194.242.18', 'harshanth@gmail.com', '$2b$10$IShjfPDHTynXIbpHZ37LxunHlbao9hx3rS2Dyp0R1tk', 1, 0, 'Login successful', '2023-03-31 15:01:17', '2023-03-31 09:31:17'),
(278, '103.194.242.18', 'harshanth@gmail.com', '$2b$10$/b6zy3OgatO43J1WlOiRoOhyXHc7n.RnEvV9lLhgwcq', 1, 0, 'Login successful', '2023-03-31 15:19:54', '2023-03-31 09:49:54'),
(279, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$tPhWgfcTkd/6tAagusa2GeYnDeKEvq.iKV8SBNRyoe1', 1, 0, 'Login successful', '2023-03-31 15:50:49', '2023-03-31 10:20:49'),
(280, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$MgAxvRjNnp1Ygs9z2j1kHOu/G6QaJ2Evjt5jegXwKdG', 1, 0, 'Login successful', '2023-04-01 09:03:47', '2023-04-01 03:33:47'),
(281, '103.194.242.18', 'selva@gmail.com', '$2b$10$GSF/yvA2IQS0hM5BLuUayeJ6D4s2VokcJV9aYasUw.H', 1, 0, 'Login successful', '2023-04-01 10:10:58', '2023-04-01 04:40:58'),
(282, '103.194.242.18', 'selva@gmail.com', '$2b$10$.wqUmiyqZ15wygyyXvw.SOzjkBRyt.ha5sVpQK67HRu', 2, 0, 'Login successful', '2023-04-01 10:11:38', '2023-04-01 04:41:38'),
(283, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$rJ0ux20cwLXT7NDO6Iffs.IO8ro7.6GxNJQ8fFWWlR6', 3, 0, 'Login successful', '2023-04-01 10:13:05', '2023-04-01 04:43:05'),
(284, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$SuKj3WYEnQFjcaW4iNtfIeOmUyVIjVos7lgLg4nz4.z', 1, 0, 'Login successful', '2023-04-01 10:13:30', '2023-04-01 04:43:30'),
(285, '103.194.242.18', 'selva@gmail.com', '$2b$10$LCDhDP9pe7uGceSkz6HsYeCbj04thuxsCx.XgsuP5za', 1, 0, 'Login successful', '2023-04-01 10:15:20', '2023-04-01 04:45:20'),
(286, '103.194.242.18', 'selva@gmail.com', '$2b$10$NlAi585wg7nB/KZkkH1XcuegaVGDkoDfSRv1YjdjQBV', 1, 0, 'Login successful', '2023-04-01 10:15:21', '2023-04-01 04:45:21'),
(287, '103.194.242.18', 'uthara@gmail.com', '$2b$10$pCd3Gbb.1u/4iPCIkG7Oye7EoYCkKAHhedFhJ5S66dQ', 1, 0, 'Login successful', '2023-04-01 10:16:10', '2023-04-01 04:46:10'),
(288, '103.194.242.18', 'gopal@gmail.com', '$2b$10$X.Nb7qiB/c4hIDVHX6ADmOdLUSnUMCGwF9.nBlymVOh', 1, 0, 'Login successful', '2023-04-01 10:16:22', '2023-04-01 04:46:22'),
(289, '103.194.242.18', 'shanmugapriyan@gmail.com', '$2b$10$mog0FkLCgza9BB4cAVHAi.TosexJ3zxrvIofRMxMIBN', 1, 0, 'Login successful', '2023-04-01 10:16:42', '2023-04-01 04:46:42'),
(290, '103.194.242.18', 'venkatesh@gmail.com', '$2b$10$Fq/Eu.pM.T3gV3j7qXurt.8mc7IWD.Yd0dTKsBm/FfF', 1, 0, 'Login successful', '2023-04-01 10:17:12', '2023-04-01 04:47:12'),
(291, '103.114.210.211', 'kumar@gmail.com', '$2b$10$RDPiV3y9DmwEXy.zUJfol.n2AF7.Z75rqIiMaPMA4vy', 1, 0, 'Login successful', '2023-04-01 10:20:48', '2023-04-01 04:50:48'),
(292, '103.194.242.18', 'selva@gmail.com', '$2b$10$Dxc6fLbv66t01GxdllLfwOlzxHLZ7NqqwYrNqr8IOjQ', 1, 0, 'Login successful', '2023-04-01 10:25:21', '2023-04-01 04:55:21'),
(293, '103.194.242.18', 'selva@gmail.com', '$2b$10$UgevZAR3gR8e2reKmi0gReJ6RWl6nzpxsmNDMDEurnZ', 1, 0, 'Login successful', '2023-04-01 10:25:21', '2023-04-01 04:55:21'),
(294, '103.194.242.18', 'selva@gmail.com', '$2b$10$Z8I9YDUQ68MYshcNbsG.3.vOMw8QMnXDFWnafu76xcg', 1, 0, 'Login successful', '2023-04-01 10:25:21', '2023-04-01 04:55:21'),
(295, '103.194.242.18', 'selva@gmail.com', '$2b$10$KCOfD1YpuL6xHORfK/zXTO3zJPrjaOkIdPR98s45/qK', 1, 0, 'Login successful', '2023-04-01 10:26:50', '2023-04-01 04:56:50'),
(296, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$kRsFDD2IUV1EPdTyh7xejONDXR9NDHDFeBgHEs0dwyM', 1, 0, 'Login successful', '2023-04-01 10:27:14', '2023-04-01 04:57:14'),
(297, '203.223.189.230', 'selva@gmail.com', '$2b$10$epXXVzDEuGHCM1RlLzPEjO/KQKyy39jyivjZd1wEmdG', 1, 1, 'Login failed', '2023-04-01 10:30:47', '2023-04-01 05:00:47'),
(298, '203.223.189.230', 'selva@gmail.com', '$2b$10$jzIP3LL4czwH7ISMIHrimeG70gF/Pc53jpMv8jZ0KJ6', 2, 0, 'Login successful', '2023-04-01 10:30:58', '2023-04-01 05:00:58'),
(299, '103.194.242.18', 'venkatesh@gmail.com', '$2b$10$J8eb8heD46xGt78PU0GC5uGOcIma46Tk.SN9zZHf1TT', 1, 0, 'Login successful', '2023-04-01 15:51:19', '2023-04-01 10:21:19'),
(300, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$PWCRhLChdbJdsg3ipUEx/e5JG5oVPGFQ9OnvdLSoZrf', 1, 1, 'Login failed', '2023-04-01 18:22:05', '2023-04-01 12:52:05'),
(301, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$.LKIPfqkuw5nlLZy1uM1qutz16MBwanOJmwwIA1AylZ', 2, 0, 'Login successful', '2023-04-01 18:22:15', '2023-04-01 12:52:15'),
(302, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$cs0lRqG9dfODNl9JWp5QYOi6btlOI1qe77SIrn/YPtg', 1, 0, 'Login successful', '2023-04-01 18:23:34', '2023-04-01 12:53:34'),
(303, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$VIKrlpSKpKI.OMso5kUuyu/J6J7Dx8Rfodm1bjzWl/w', 1, 0, 'Login successful', '2023-04-01 18:23:39', '2023-04-01 12:53:39'),
(304, '103.194.242.18', 'selva@gmail.com', '$2b$10$kVpopZRvHneu.vN18/FAi.dExsQqMFq4fAnTfragX9p', 1, 0, 'Login successful', '2023-04-01 18:48:56', '2023-04-01 13:18:56'),
(305, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$YMeGbECGkruWgGqaVr25weCG.X6daSs.6z5WPGI/hN7', 1, 0, 'Login successful', '2023-04-03 09:17:55', '2023-04-03 03:47:55'),
(306, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$GnoIDfMTvXovSjgYe/qEOulBE/qatcu/W2JN9cUCY.z', 1, 0, 'Login successful', '2023-04-03 11:26:26', '2023-04-03 05:56:26'),
(307, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$JaC2hH.ewIbTTPdyHoftauZfkubvzt6tuKl4eKb1mnW', 1, 0, 'Login successful', '2023-04-03 12:34:18', '2023-04-03 07:04:18'),
(308, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$8yfeUUHmg0VMscYz925KwOPTDsIsyWIO15b42e9.7Sv', 1, 0, 'Login successful', '2023-04-03 12:41:08', '2023-04-03 07:11:08'),
(309, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$DS8mD6Hk2x4gmOCcOgkz0OXEJSqRv3LN/YchUCEY/RM', 2, 0, 'Login successful', '2023-04-03 12:41:10', '2023-04-03 07:11:10'),
(310, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$CS74FQK0DdMl99GHUQNEZe4DkSXj0c3nT1xPSL/iOmm', 3, 0, 'Login successful', '2023-04-03 12:41:13', '2023-04-03 07:11:13'),
(311, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$miuQORg2Ka9ofmkb5//gY.ttjr6BBlGTEwUkv17rYAu', 4, 0, 'Login successful', '2023-04-03 12:41:32', '2023-04-03 07:11:32'),
(312, '203.223.189.230', 'selva@gmail.com', '$2b$10$JHl4e.Bch3mDd9XrouUO0eCc/Y2pS7/A6wHZJZwWEFk', 1, 0, 'Login successful', '2023-04-03 12:42:48', '2023-04-03 07:12:48'),
(313, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$dz73oshvDWxcNtCa9y/xEumXItacGMQ5l2Kv2mGwK7l', 1, 0, 'Login successful', '2023-04-03 12:59:18', '2023-04-03 07:29:18'),
(314, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$6ifcYI3vpsGdslFcUa9Y1uXzz7Jox8Ol7DCvUEVROOS', 1, 0, 'Login successful', '2023-04-03 12:59:41', '2023-04-03 07:29:41'),
(315, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$u0nJ/sAEvfob38GIDs7JlemxgloLatUJenkAVYs/ksl', 1, 0, 'Login successful', '2023-04-03 13:00:01', '2023-04-03 07:30:01'),
(316, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$Z6H8dnFjPNKCaYxZyvkGne.ksjQB54KjkkwHt3xznL8', 1, 0, 'Login successful', '2023-04-03 13:00:08', '2023-04-03 07:30:08'),
(317, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$tieKsTvYZ56i7IjwNplmKOa3l.p4xszrilW1Tqc5EPi', 1, 0, 'Login successful', '2023-04-03 13:00:18', '2023-04-03 07:30:18'),
(318, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$GOhyo3mntLvr/k2Y0OcySes7vxwCVvBBKZaX0B7DXkC', 1, 0, 'Login successful', '2023-04-03 13:00:21', '2023-04-03 07:30:21'),
(319, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$c1.FJ9ViywZEzl.V2VfgA.9oOpOBCB4inhbyEAvIczp', 1, 0, 'Login successful', '2023-04-03 13:00:35', '2023-04-03 07:30:35'),
(320, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$zwPDpTQGsSekIj6wsNYTWuoGsSxf2957yRAG2cVjVFT', 1, 0, 'Login successful', '2023-04-03 13:01:00', '2023-04-03 07:31:00'),
(321, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$kh0oUoa9oCWk3yHx6xdTgeRtw9.7NxtHSIDjOAHbMRK', 1, 0, 'Login successful', '2023-04-03 13:01:10', '2023-04-03 07:31:10'),
(322, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$mhJJ4M8WdKs/Nu4mZqDzI.v8Mu4.UpRVQeT1uWTL3me', 1, 0, 'Login successful', '2023-04-03 13:01:32', '2023-04-03 07:31:32'),
(323, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$1/ucAMfcvOdQ10fo6bND9Or01X6v0ncEwY3yeTjPTau', 1, 0, 'Login successful', '2023-04-03 13:01:47', '2023-04-03 07:31:47'),
(324, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$myeouWd8.clwlkaEG0kJKeHU0NrcT.24cDtSvkgzooF', 1, 0, 'Login successful', '2023-04-03 13:01:57', '2023-04-03 07:31:57'),
(325, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$TEI1lWSkL89Pn6F1NBu3zuHkjEMLucrm3t2BI3HSorq', 1, 0, 'Login successful', '2023-04-03 13:03:01', '2023-04-03 07:33:01'),
(326, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$TXkBXdGRMu1GNPx7VXzkCOnSldKet6La4jZwBtApPZ0', 1, 0, 'Login successful', '2023-04-03 13:03:12', '2023-04-03 07:33:12'),
(327, '103.194.242.18', 'selva@gmail.com', '$2b$10$n4lKiO7z2XfwEVi/HMWKcOHI/LqQxyBzVo3PXdr1ZHM', 1, 0, 'Login successful', '2023-04-03 13:03:25', '2023-04-03 07:33:25'),
(328, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$5yRTybkXJwqBGOfhRXxCbeotyymDT5XrIS0Gtw2x3wh', 1, 0, 'Login successful', '2023-04-03 13:04:18', '2023-04-03 07:34:18'),
(329, '103.194.242.18', 'venkatesh@gmail.com', '$2b$10$Gt2hsn7g4qdUpGQoEjC.5O1TakfWjcppMUqe65YJlLJ', 1, 0, 'Login successful', '2023-04-03 13:05:01', '2023-04-03 07:35:01'),
(330, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$dPMu.A0cECy1rGh1f97Bke9F5yLKszV1eRL.Rfx.YYP', 1, 0, 'Login successful', '2023-04-03 13:05:17', '2023-04-03 07:35:17'),
(331, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$aq8jN7JoSDKg3g49vv5VDuDG8MMjes4ozKV4G8wzb6K', 1, 0, 'Login successful', '2023-04-03 13:11:04', '2023-04-03 07:41:04'),
(332, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$WtESDG5.BwtT5cpC9I79curiygu0v.vkJE80z2lq01u', 1, 0, 'Login successful', '2023-04-03 13:11:33', '2023-04-03 07:41:33'),
(333, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$rYp.RXqfOfqjIbIhljJtz.X4Co.qBnkfa3iRU6jXS5R', 1, 0, 'Login successful', '2023-04-03 13:24:28', '2023-04-03 07:54:28'),
(334, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$v/OAJtvsHrIPKkJ6AT9O/ers4l84tU.LhHdKnDKKcog', 1, 0, 'Login successful', '2023-04-03 13:26:58', '2023-04-03 07:56:58'),
(335, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$JKsi/91iNU7YctV5ui0/leiW3ndBJossqIJ2eGnKohl', 1, 0, 'Login successful', '2023-04-03 13:28:29', '2023-04-03 07:58:29'),
(336, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$3KqwWcuJy08Ra2PicVx6c.FsnHRGX9dF54VS9gcxjQ1', 1, 0, 'Login successful', '2023-04-03 13:28:57', '2023-04-03 07:58:57'),
(337, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$KMFNtnYXNI7oGru/2eTqSOsEKPHCL2widtVlLrRJ1Gb', 1, 0, 'Login successful', '2023-04-03 13:29:41', '2023-04-03 07:59:41'),
(338, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$5xVpo/LuosuIZyKvb1KcdeM627v1iKTC9pjQQwmoOLc', 1, 0, 'Login successful', '2023-04-03 13:29:44', '2023-04-03 07:59:44'),
(339, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$elbOOnmg2Br5XXSTMvVdduPzWTPNc766KORUswE3nTo', 1, 0, 'Login successful', '2023-04-03 13:29:48', '2023-04-03 07:59:48'),
(340, '103.194.242.18', 'selva@gmail.com', '$2b$10$CmrKGUFQZ/uSFy7oS3AWX.EU2sLJurEPs4SXwOBOr1A', 1, 0, 'Login successful', '2023-04-03 13:29:55', '2023-04-03 07:59:55'),
(341, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$wEDKRsS6PvJrp4/TpZOJWOkvaMFOtn6wrYiN2WDm5t2', 1, 0, 'Login successful', '2023-04-03 13:31:44', '2023-04-03 08:01:44'),
(342, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$gtLgxXTw07i1AuaGug5mveHndwr6/dr7G/OlovTWGiD', 1, 0, 'Login successful', '2023-04-03 13:35:19', '2023-04-03 08:05:19'),
(343, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$roXLs/r1UM9n.bhWjzIlqOnLZ6sNvEr4RqxPUh9pCfA', 1, 0, 'Login successful', '2023-04-03 13:35:30', '2023-04-03 08:05:30'),
(344, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$/vDgl/AzXN1bOBLMxhxaVujCBe1ftBZfy.TvTA/I0Ut', 1, 0, 'Login successful', '2023-04-03 13:42:43', '2023-04-03 08:12:43'),
(345, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$y6WUXA1Njo4PQFKYHQkpSu4l.sL/kNB2Fc9f.tWuYKk', 1, 0, 'Login successful', '2023-04-03 14:55:55', '2023-04-03 09:25:55'),
(346, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$0Sq6TOe3M/SpGtkBnOB1U.IhjRJtnVkCDcUcuPzWIs.', 1, 0, 'Login successful', '2023-04-03 15:11:15', '2023-04-03 09:41:15'),
(347, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$lG.dbu0mQYKX93oEhmbR9.ZnWC.ZrgBsxZv4/Wr6Drm', 1, 0, 'Login successful', '2023-04-03 16:09:33', '2023-04-03 10:39:33'),
(348, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$/zR3O0iN20gzK1AdwkikV.4bnk.9aWKMIfTGsUYEbJc', 1, 0, 'Login successful', '2023-04-03 16:10:21', '2023-04-03 10:40:21'),
(349, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$6NsddcSimNekdb6SfQ7qoeAh8yAk/uPkI/OvovudFrx', 3, 0, 'Login successful', '2023-04-03 16:12:34', '2023-04-03 10:42:34'),
(350, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$sRUZ.UJIOmf.EeFkgluQPeOkU.50cu/ET75DZvtg3ML', 1, 0, 'Login successful', '2023-04-03 16:13:37', '2023-04-03 10:43:37'),
(351, '203.223.189.230', 'selva@gmail.com', '$2b$10$XJCoCqpCo3dzpTqpnXTEFu2dq70Grs7ZruA35xeNlYD', 1, 0, 'Login successful', '2023-04-03 16:14:04', '2023-04-03 10:44:04'),
(352, '103.194.242.18', 'selva@gmail.com', '$2b$10$MOuTMP3wEUS3jvefp62EAuAF6hWbPH79UGgB0m9AWU5', 1, 0, 'Login successful', '2023-04-03 16:15:35', '2023-04-03 10:45:35'),
(353, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$YLGDWEkjjwptUXfDIqMA3O/1K30F3MEMWhKEME3brLo', 1, 0, 'Login successful', '2023-04-03 16:16:22', '2023-04-03 10:46:22'),
(354, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$aX4.qSWnR6dS.IADr0ibfuKj30EqlMeUfiMOb6Hu3oz', 1, 0, 'Login successful', '2023-04-03 16:33:34', '2023-04-03 11:03:34'),
(355, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$pUWznREf7YXrOeXftL1x9..ZGFhUFoALH7V89EZFQZM', 1, 0, 'Login successful', '2023-04-03 16:34:48', '2023-04-03 11:04:48'),
(356, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$UpBJ52I4eTczFg1BYokCcOVjFpnqlJ7/SH.vOgJFpDD', 1, 0, 'Login successful', '2023-04-03 16:42:24', '2023-04-03 11:12:24'),
(357, '103.114.210.211', 'selva@gmail.com', '$2b$10$ElatguILVu1D60EN7iVJ3O7QJd1tkhOrJxldoHXsQWu', 1, 0, 'Login successful', '2023-04-03 16:44:17', '2023-04-03 11:14:17'),
(358, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$h.Nsq3EckO6uVbCWGTpcte17LjEvhuVOpaDhxy480ii', 1, 0, 'Login successful', '2023-04-03 17:07:09', '2023-04-03 11:37:09'),
(359, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$l9cO0nU3lc4CFHt.21dtFulC9UWmbvcYaNWSaKDDBwI', 1, 0, 'Login successful', '2023-04-03 17:08:53', '2023-04-03 11:38:53'),
(360, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$W5E1fu6KEzjk9lhWRTl5cuEYDg4XTH1zBNbVI3l96Vu', 1, 0, 'Login successful', '2023-04-03 17:13:15', '2023-04-03 11:43:15'),
(361, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$HwAmRL9AbhlV6JmZXu8IFeklNr9b2PPL/r75RaTCtmS', 1, 0, 'Login successful', '2023-04-03 17:14:37', '2023-04-03 11:44:37'),
(362, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$DC6ZJbZBT9pBn6UAIqb2EuCvQZx6G2CDoXHNAlnLwwX', 1, 0, 'Login successful', '2023-04-03 17:21:20', '2023-04-03 11:51:20'),
(363, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$0iji3.1kVnTBV6NXrGszWuyYEP6VpysrFCHisyogDXG', 1, 0, 'Login successful', '2023-04-03 17:23:35', '2023-04-03 11:53:35'),
(364, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$xLoGcv4U4Xq7gbF5QaBateq9rpupcFpVk3V1yS8F65B', 1, 0, 'Login successful', '2023-04-03 17:53:16', '2023-04-03 12:23:16'),
(365, '103.114.210.211', 'selva@gmail.com', '$2b$10$ltP9Zlpnyq/hl5OjRFyziOXPUfAX/CfmGcK3RO7RkzZ', 1, 0, 'Login successful', '2023-04-03 17:53:33', '2023-04-03 12:23:33'),
(366, '103.114.210.211', 'gopal@gmail.com', '$2b$10$TqWz9U4mmL5jZlLrAj.WO.kaZxfVHQ5kdLKcnbIgpY6', 1, 0, 'Login successful', '2023-04-03 17:56:59', '2023-04-03 12:26:59'),
(367, '103.114.210.211', 'uthara@gmail.com', '$2b$10$GUE0MneDBo5nIXWf2JK09.kE/51IUmR2ctCE3C7ahtm', 1, 0, 'Login successful', '2023-04-03 17:57:21', '2023-04-03 12:27:21'),
(368, '103.194.242.18', 'kumar@gmail.com', '$2b$10$K2.e8SAauy.iESARFaZYmeB6bQnPRlI/2b6eoFWhIcm', 1, 0, 'Login successful', '2023-04-03 18:05:25', '2023-04-03 12:35:25'),
(369, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$jVCumHCyU1U9ga.qD1Ayre5ztUzuSYJ1S3p9hSrWgON', 1, 0, 'Login successful', '2023-04-03 18:14:57', '2023-04-03 12:44:57'),
(370, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$2VUD0NEjuNZS3/q0gEc5YOJrD6UXSGTIxxYJ8AozA6F', 3, 0, 'Login successful', '2023-04-03 19:01:32', '2023-04-03 13:31:32'),
(371, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$unNtmxPu1Y1PIwuKCe8eWOiIEEdW8VMog7VNH5SWlXq', 1, 1, 'Login failed', '2023-04-03 19:21:37', '2023-04-03 13:51:37'),
(372, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$D8QSZExvGWEAOS5rTqEiIewR3xBw7vewz2L/XO0RViQ', 2, 0, 'Login successful', '2023-04-03 19:21:46', '2023-04-03 13:51:46'),
(373, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$t1qzVgb.VoJQVXjs.xA8TedcbgRI4WX8Nh3y/c8xCpV', 1, 0, 'Login successful', '2023-04-03 19:23:42', '2023-04-03 13:53:42'),
(374, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$fR/2husLUKmTRGOc1Pru0uDe/cg2pfLOoGpsGnsE4n3', 1, 0, 'Login successful', '2023-04-03 19:42:18', '2023-04-03 14:12:18'),
(375, '103.194.242.18', 'selva@gmail.com', '$2b$10$9w/QTZ4TwSmrowTmhZXeq.JQbP3Kad.gHgfeTW0wnRt', 1, 0, 'Login successful', '2023-04-03 19:42:33', '2023-04-03 14:12:33'),
(376, '103.194.242.18', 'selva@gmail.com', '$2b$10$nUf3tPbGt4sxLW5cJQpJbeT1ziI5BxVDXnq3mE6qB8S', 1, 0, 'Login successful', '2023-04-03 19:43:00', '2023-04-03 14:13:00'),
(377, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$smdjv5ylsBFXKVFNWjU4o.podXGULGYsyy280Iv4zb0', 1, 0, 'Login successful', '2023-04-04 09:12:49', '2023-04-04 03:42:49'),
(378, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$bM1zLDrO6vNpAy392iI2qORo./.tRwlVFfcL1E.Ygnw', 1, 0, 'Login successful', '2023-04-04 09:12:50', '2023-04-04 03:42:50'),
(379, '203.223.189.230', 'selva@gmail.com', '$2b$10$qbg4wzZOCHj6PSx3ZCrAO.c2ck41zYYTCAYMD55jKtt', 1, 0, 'Login successful', '2023-04-04 09:13:06', '2023-04-04 03:43:06'),
(380, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$BLFUzWYnArOuXD9hOZCFee.ZsDg0//B6YzR43UGdNSI', 1, 0, 'Login successful', '2023-04-04 09:20:42', '2023-04-04 03:50:42'),
(381, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$xEY6dqpfz02oWlFB.nGWYuhTNRtfo8husNrPx/UQL0Q', 1, 0, 'Login successful', '2023-04-04 10:17:20', '2023-04-04 04:47:20'),
(382, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$PMqWT5UhqWm1Gpmxb8RxnugYzvftSwEqjnt4gIW5U3j', 1, 0, 'Login successful', '2023-04-04 10:17:20', '2023-04-04 04:47:20'),
(383, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$8qxDPzT6MSgo3CKfLk9j9.jvL8U8VkiyaiEiDM8MdZK', 1, 0, 'Login successful', '2023-04-04 10:17:22', '2023-04-04 04:47:22'),
(384, '103.194.242.18', 'selva@gmail.com', '$2b$10$0Wi4mAdJX0xq9wM6sdUpMeo0PLKO8ShnPkmJ9/9duLm', 1, 0, 'Login successful', '2023-04-04 10:32:40', '2023-04-04 05:02:40'),
(385, '103.194.242.18', 'selva@gmail.com', '$2b$10$9GeT4t.FNDIN.jChFfHhY.GGSCHuqBn4PPFasjtHvet', 1, 0, 'Login successful', '2023-04-04 10:32:41', '2023-04-04 05:02:41'),
(386, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$TmPEF.RfqPywi3yv.T8o7.hbvOUXkxj5vM4GbzrGqcI', 1, 0, 'Login successful', '2023-04-04 11:09:45', '2023-04-04 05:39:45'),
(387, '103.194.242.18', 'selva@gmail.com', '$2b$10$lUb/3SAYpMt17YJ/TkMcSebPNzSrxoclUUgzbsnYmmp', 1, 0, 'Login successful', '2023-04-04 12:00:31', '2023-04-04 06:30:31'),
(388, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$RRpobDXBF.IJo/v0/KHjseo6KEA.VtRtuVgsTwaXGss', 1, 0, 'Login successful', '2023-04-04 12:05:33', '2023-04-04 06:35:33'),
(389, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$k9DCk0/7NNNjwQxWlD6U4OeyGx6FlcF3bIc/BDz9QEa', 1, 0, 'Login successful', '2023-04-04 12:06:17', '2023-04-04 06:36:17'),
(390, '103.114.210.211', 'selva@gmail.com', '$2b$10$Kg2oDQGDVW5.7ic3Nb1hn.tDCCuoNsQsYIXmdy3.eRV', 1, 0, 'Login successful', '2023-04-04 12:39:22', '2023-04-04 07:09:22'),
(391, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$9NB12SjtDnNqXJg.WGt5ZOPcU76bQSnPl/1NTVYQgRg', 1, 0, 'Login successful', '2023-04-04 12:54:04', '2023-04-04 07:24:04'),
(392, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$o4LfSSNFPNinp9jMDa7B4ev8eidec8o7TkGYeBOa2xs', 1, 0, 'Login successful', '2023-04-04 12:54:05', '2023-04-04 07:24:05'),
(393, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$8eKfVBnoBF3hY4ULu5McGOlX5dt.yg3RGCKWfH.XurI', 2, 0, 'Login successful', '2023-04-04 13:27:46', '2023-04-04 07:57:46'),
(394, '103.114.210.211', 'selva@gmail.com', '$2b$10$Hvi363Hl0TI/7MLIPqcpquQgbdO7ZXJZ64F0hPL5dYA', 1, 0, 'Login successful', '2023-04-04 13:58:05', '2023-04-04 08:28:05'),
(395, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$4zTRZGNG3/p9cyxEmZPqfOXWlXsDLiK1evaM4U6e.O6', 1, 0, 'Login successful', '2023-04-04 14:02:08', '2023-04-04 08:32:08'),
(396, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$YaitZwR4nZxq2zDkag3.QeTjGi4ME3.t7UdeTzvP3wm', 1, 0, 'Login successful', '2023-04-04 15:13:19', '2023-04-04 09:43:19'),
(397, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$JnWNd.rYxtcrTHxZX3Hp1.uSxv6hfczoShIfyPwL8JJ', 1, 0, 'Login successful', '2023-04-05 09:12:06', '2023-04-05 03:42:06');

-- --------------------------------------------------------

--
-- Table structure for table `master_products`
--

CREATE TABLE `master_products` (
  `product_id` int NOT NULL,
  `product_type` varchar(200) NOT NULL,
  `short_code` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `master_products`
--

INSERT INTO `master_products` (`product_id`, `product_type`, `short_code`, `description`, `created_by`, `updated_by`, `created_date`, `updated_date`) VALUES
(1, 'ERP', 'E', 'Manage day-to-day business', 'admin', 'admin', '2023-03-08 10:00:00', '2023-03-08 10:00:00'),
(2, 'Website', 'W', 'Dynamic content management application', 'admin', 'admin', '2023-03-08 10:00:00', '2023-03-08 10:00:00'),
(3, 'CRM', 'M', 'Customer Relationship Management Application', 'admin', 'admin', '2023-03-08 10:02:17', '2023-03-08 10:02:17'),
(4, 'HRMS', 'H', 'HR Operations Management', 'admin', 'admin', '2023-03-08 10:02:17', '2023-03-08 10:02:17'),
(5, 'COE', 'C', 'Examination Automation', 'admin', 'admin', '2023-03-08 10:04:01', '2023-03-08 10:04:01');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int NOT NULL,
  `project_name` varchar(100) NOT NULL,
  `created_dt` date NOT NULL,
  `category` varchar(100) NOT NULL,
  `client` varchar(50) NOT NULL,
  `duration` date DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `project_manager` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `deadline` date NOT NULL,
  `status` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `date` date DEFAULT NULL,
  `priority` varchar(100) NOT NULL,
  `description` varchar(250) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `project_name`, `created_dt`, `category`, `client`, `duration`, `start_date`, `end_date`, `project_manager`, `deadline`, `status`, `date`, `priority`, `description`) VALUES
(3, 'DOTE', '2023-01-01', 'Development', 'DOTE', '2023-11-23', '2022-10-22', '2023-11-22', 'Nisha ', '2023-08-01', '', '2022-07-24', '', ''),
(4, 'TNPCB', '2022-10-05', 'App Development', 'PCB', '2022-11-27', '1899-11-26', '2023-11-26', 'Satheesh ', '2023-03-15', 'Approval', '2022-03-03', '', ''),
(5, 'KASC', '2022-05-00', 'Website Design', 'KASC', '2022-11-26', '1899-11-26', '1899-11-26', 'Kumar ', '2022-10-01', '', '2022-08-26', '', ''),
(6, 'SCET', '2022-06-08', 'App development', 'SCET', '2022-12-29', '1899-11-28', '1899-11-28', 'Ganesh', '2023-01-11', 'Completed', '2022-11-28', '', ''),
(7, 'SREC', '2023-02-01', 'App development', 'SREC', '1899-11-28', '1899-11-28', '1899-11-28', 'Kiruba', '2023-05-01', '', '2022-01-28', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `project_code_details`
--

CREATE TABLE `project_code_details` (
  `project_code_details_id` int NOT NULL,
  `project_code_id` int NOT NULL,
  `hours_allocated` varchar(10) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `project_code_master`
--

CREATE TABLE `project_code_master` (
  `project_code_id` int NOT NULL,
  `project_code` varchar(50) NOT NULL,
  `customer_id` int NOT NULL,
  `project_id` int NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `project_phase_master`
--

CREATE TABLE `project_phase_master` (
  `phase_id` int NOT NULL,
  `project_code` varchar(50) NOT NULL,
  `project_phase_name` varchar(50) NOT NULL,
  `phase_short_code` varchar(50) NOT NULL,
  `phase_status` varchar(50) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `punchin_punchout`
--

CREATE TABLE `punchin_punchout` (
  `id` int NOT NULL,
  `punchin_time` datetime DEFAULT NULL,
  `punchout_time` datetime DEFAULT NULL,
  `work_hours` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `punchin_punchout`
--

INSERT INTO `punchin_punchout` (`id`, `punchin_time`, `punchout_time`, `work_hours`) VALUES
(82, '2023-03-17 13:20:20', '2023-03-17 13:20:28', '00:00:08'),
(83, '2023-03-17 13:20:56', '2023-03-17 13:22:01', '00:01:04'),
(84, '2023-03-17 13:22:53', '2023-03-17 13:22:59', '00:00:06'),
(85, '2023-03-17 17:37:34', '2023-03-17 17:44:01', '00:06:27'),
(86, '2023-03-17 17:45:24', '2023-03-17 17:45:28', '00:00:03'),
(87, '2023-03-17 18:41:25', '2023-03-17 18:41:29', '00:00:04'),
(88, '2023-03-17 18:47:51', '2023-03-17 18:47:53', '00:00:02'),
(89, '2023-03-17 18:52:54', '2023-03-17 18:52:57', '00:00:02'),
(90, '2023-03-17 18:53:56', '2023-03-17 18:54:01', '00:00:04'),
(91, '2023-03-17 19:23:23', '2023-03-17 19:25:21', '00:01:58'),
(92, '2023-03-20 10:45:33', '2023-03-20 10:55:04', '00:09:30'),
(93, '2023-03-20 15:55:46', '2023-03-20 15:58:48', '00:03:01'),
(94, '2023-03-23 09:22:05', '2023-03-23 09:27:37', '00:05:32'),
(95, '2023-03-23 19:52:43', '2023-03-23 19:52:47', '00:00:04'),
(96, '2023-03-24 17:19:31', '2023-03-24 17:19:33', '00:00:02'),
(97, '2023-03-28 18:26:03', '2023-03-28 18:26:13', '00:00:10'),
(98, '2023-03-28 18:34:14', '2023-03-28 18:34:23', '00:00:08'),
(99, '2023-03-28 18:34:36', '2023-03-28 18:34:37', '00:00:00'),
(100, '2023-03-28 18:45:55', '2023-03-28 18:45:56', '00:00:01'),
(101, '2023-03-31 09:52:24', '2023-03-31 09:52:28', '00:00:03');

-- --------------------------------------------------------

--
-- Table structure for table `sign_in`
--

CREATE TABLE `sign_in` (
  `id` int NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `confirmpassword` varchar(150) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `sign_in`
--

INSERT INTO `sign_in` (`id`, `fullname`, `email`, `password`, `confirmpassword`, `role`) VALUES
(5, 'dharani', 'dharanivirat48@gmail.com', '123456', '123456', '0'),
(10, 'ubesh', 'ubesh@gmail.com', '123456', '123456', ''),
(11, 'gopal g', 'gopal@gmail.com', '123456', '123456', ''),
(12, 'Senior Developer', 'developer@gmail.com', '123456', '123456', ''),
(13, 'senior developer', 'developer@gmail.com', '123456', '123456', ''),
(14, 'Ubesh k', 'ubesh@gmail.com', '123456', '123456', ''),
(15, 'Ubesh k', 'ubesh@gmail.com', '123456', '123456', ''),
(16, 'Ubesh k', 'ubesh@gmail.com', '123456', '123456', ''),
(17, 'Ubesh k', 'ubesh@gmail.com', '123456', '123456', ''),
(18, 'Ubesh k', 'ubesh@gmail.com', '123456', '123456', ''),
(19, 'User 1', 'user@gmail.com', '123456', '123456', '1'),
(20, 'sanjay ', 'sanjay@gmail.com', '123456', '123456', '1'),
(21, 'sanjay kumar', 'sanjay@gmail.com', '123456', '123456', '1');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int NOT NULL,
  `task_name` varchar(150) NOT NULL,
  `client` varchar(50) NOT NULL,
  `control_code` varchar(50) NOT NULL,
  `category` varchar(150) NOT NULL,
  `task_assignperson` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `deadline` date NOT NULL,
  `description` varchar(150) NOT NULL,
  `duration` time NOT NULL,
  `assignto` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `status` varchar(200) NOT NULL,
  `comments` varchar(200) NOT NULL,
  `created_dt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `task_name`, `client`, `control_code`, `category`, `task_assignperson`, `deadline`, `description`, `duration`, `assignto`, `status`, `comments`, `created_dt`) VALUES
(2, 'academic portal - reg', 'SEC Tiruchengode - COE', 'E-005', '', 'Satheesh', '2023-11-16', 'ENOVA website - need a  resumes or ', '00:00:00', '3', 'Pending', 'Pending Cust Verifn and closure', '2023-05-18'),
(4, 'KNCET_ERP_Batch 2020_Assignment_Report', 'KNCET - PORTAL', 'N-002', '', 'satheesh', '2023-03-09', 'KNCET Assignment report error', '04:00:00', '4', '', 'High', '2023-01-09'),
(12, 'Reg fees head settlement...', 'Esec - Non Coe', 'M-001', '', 'Satheesh', '2023-08-18', 'Fix the fee settlement error', '05:30:00', '3', '', 'critical', '2023-01-13'),
(13, 'Faculty Swapping is not working', 'SREC - Non Coe', 'E-003', '', 'Satheesh', '2023-06-30', 'Swapping Issue on Module', '10:00:00', '3', '', 'High', '2023-02-01'),
(17, 'HRMS Time off issue', 'HRMS', 'M-002', '', 'ubesh', '2023-01-16', 'Attendance Time issue', '04:00:00', '11', 'Completed', 'Pending on', '2023-01-16'),
(30, 'E- Academics', 'SEC', 'D-001', '', 'satheesh', '2023-11-27', 'Ticket Number - #13869 - KNCET_ERP_Assignment', '05:00:00', '3', 'InProgress', 'Process On', '2023-06-27'),
(32, 'Test', 'KASC', 'D-001', '', 'Satheesh', '2023-04-13', '44545', '02:00:00', '11', 'InProgress', 'pending', '2023-04-03');

-- --------------------------------------------------------

--
-- Table structure for table `task_details_history`
--

CREATE TABLE `task_details_history` (
  `task_details_history_id` int NOT NULL,
  `user_id` int NOT NULL,
  `task_details_master_id` int NOT NULL,
  `updated_by` int NOT NULL,
  `task_status` int NOT NULL,
  `comments` varchar(200) NOT NULL,
  `attachments` varchar(255) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_date` varchar(50) NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `task_details_master`
--

CREATE TABLE `task_details_master` (
  `task_details_master_id` int NOT NULL,
  `task_name` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `assigned_to` int NOT NULL,
  `assigned_by` int NOT NULL,
  `project_id` int NOT NULL,
  `description` varchar(50) NOT NULL,
  `attachment` varchar(255) NOT NULL,
  `no_of_hours` varchar(50) NOT NULL,
  `deadline` date NOT NULL,
  `task_status` int NOT NULL,
  `testing_status` varchar(50) NOT NULL,
  `production_status` varchar(50) NOT NULL,
  `status_updated_on` datetime NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `task_status_master`
--

CREATE TABLE `task_status_master` (
  `status_id` int NOT NULL,
  `project_types` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `ticket_view`
--

CREATE TABLE `ticket_view` (
  `id` int NOT NULL,
  `subject` varchar(50) NOT NULL,
  `assignname` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `ticket_view`
--

INSERT INTO `ticket_view` (`id`, `subject`, `assignname`, `date`, `status`) VALUES
(1, 'dfsdfa', 'dsfdsf', '2023-03-03', '1'),
(2, 'Tamil', 'tamilarasan', '2023-03-03', '1'),
(3, 'Tamil', 'TT', '0000-00-00', ''),
(4, 'KASC', 'MD', '2023-02-24', '2'),
(5, '', 'gerre', '0000-00-00', ''),
(6, '', 'gerre', '0000-00-00', ''),
(7, '', 'gerre', '0000-00-00', ''),
(8, '', 'gerre', '0000-00-00', ''),
(10, 'BUG', 'KK', '0000-00-00', ''),
(11, 'BUG', 'KK', '2023-02-26', '1'),
(12, 'Sample ticket subjec', '', '0000-00-00', ''),
(13, 'PSG', 'Admin', '2023-02-22', '1'),
(14, 'PSG', 'Admin', '2023-02-22', '1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `user_role_id` int NOT NULL,
  `user_group_id` int NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `designation` varchar(200) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `address` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `role` varchar(100) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_by` varchar(50) NOT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_role_id`, `user_group_id`, `first_name`, `last_name`, `user_email`, `designation`, `phone`, `address`, `password`, `description`, `role`, `created_by`, `updated_by`, `created_date`, `updated_date`) VALUES
(3, 2, 2, 'sanjay', 'madan', 'sanjay@gmail.com', 'project manager', '7845789620', 'coimbatore', 'sanjay123', 'Mr.Sanjay madan  have a three years of experience in php mysql and also as a role of Project manager', '1', 'admin', 'admin', '2023-03-06 15:46:43', '2023-03-06 15:46:43'),
(4, 2, 2, 'Harshanth', 'R', 'harshanth@gmail.com', 'Programmer Analyst', '7854784589', 'coimbatore', 'harshanth123', 'Mr.Harsanth have a five years of experience in php mysql and angular and also working for mobile application', '1', 'admin', 'admin', '2023-03-06 15:58:04', '2023-03-06 15:58:04'),
(5, 2, 2, 'gopala', 'kannan', 'gopal@gmail.com', 'senior designer', '8956745787', 'coimbatore', 'gopal123', 'Mr.Pranesh he have a twelve years of experience in designing and also a senior designer', '1', 'admin', 'admin', '2023-03-06 16:00:30', '2023-03-06 16:00:30'),
(7, 1, 2, 'satheesh', 'R', 'satheesh@gmail.com', 'senior manager', '9856985691', 'coimbatore', 'satheesh123', 'He has 10 years of experience in php.and also he is the senior manager in the enova', '0', 'admin', 'admin', '2023-03-29 09:32:41', '2023-03-29 09:32:41'),
(8, 2, 4, 'utharakumar', 'R', 'uthara@gmail.com', 'Programmer Analyst', '7854784578', 'Coimbatore', 'uthara123', '', '1', '', '', '2023-04-01 09:46:09', '2023-04-01 09:46:09'),
(9, 2, 4, 'shanmugapriyan', 'S', 'shanmugapriyan@gmail.com', 'programmer analyst', '7845784587', 'Coimbatore', 'shanmugapriyan123', '', '1', '', '', '2023-04-01 10:04:24', '2023-04-01 10:04:24'),
(10, 2, 4, 'venkatesh', 'V', 'venkatesh@gmail.com', 'programmer analyst', '8956895698', 'Coimbatore', 'venkatesh123', '', '1', '', '', '2023-04-01 10:06:29', '2023-04-01 10:06:29'),
(11, 2, 4, 'selva', 'kumar', 'selva@gmail.com', 'programmer analyst', '7856457845', 'Coimbatore', 'selva123', '', '1', '', '', '2023-04-01 10:07:38', '2023-04-01 10:07:38'),
(12, 1, 1, 'Kumar', 'K', 'kumar@gmail.com', 'Managing Director', '7845784587', 'Coimbatore', 'kumar123', 'Managing Director of Enova software and hardware solutions pvt ltd', '0', 'admin', 'admin', '2023-04-01 10:18:21', '2023-04-01 10:18:21');

-- --------------------------------------------------------

--
-- Table structure for table `users_login`
--

CREATE TABLE `users_login` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_groups`
--

CREATE TABLE `user_groups` (
  `user_group_id` int NOT NULL,
  `user_group_name` varchar(150) NOT NULL,
  `status` varchar(20) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  `created_by` varchar(100) NOT NULL,
  `updated_by` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `user_groups`
--

INSERT INTO `user_groups` (`user_group_id`, `user_group_name`, `status`, `created_date`, `updated_date`, `created_by`, `updated_by`) VALUES
(1, 'managing director', 'Active', '2023-02-15 17:54:16', '2023-02-15 17:54:16', 'admin', 'admin'),
(2, 'senior manager', 'Active', '2023-02-15 18:07:29', '2023-02-15 18:07:29', 'admin', 'admin'),
(3, 'manager', 'Active', '2023-02-15 20:05:47', '2023-02-15 20:05:47', 'admin', 'admin'),
(4, 'developer', 'Active', '2023-02-15 20:07:25', '2023-02-15 20:07:25', 'admin', 'admin'),
(5, 'tester', 'Active', '2023-02-15 20:07:39', '2023-02-15 20:07:39', 'admin', 'admin'),
(6, 'client advocate', 'Active', '2023-02-15 20:08:10', '2023-02-15 20:08:10', 'admin', 'admin'),
(7, 'trainee', 'Active', '2023-02-15 20:08:27', '2023-02-15 20:08:27', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_role_id` int NOT NULL,
  `user_role` varchar(100) NOT NULL,
  `permissions` text NOT NULL,
  `created_by` varchar(100) NOT NULL,
  `updated_by` varchar(100) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_role_id`, `user_role`, `permissions`, `created_by`, `updated_by`, `created_date`, `updated_date`) VALUES
(1, 'senior programmer analyst', '1,2,3,4,5', 'Admin', 'Admin', '2023-03-06 11:25:58', '2023-03-06 11:25:58'),
(2, 'programmer analyst ', '1,2,3,4', 'Admin', 'Admin', '2023-03-06 11:27:13', '2023-03-06 11:27:13'),
(3, 'junior programmer analyst', '1,2,3', 'Admin ', 'Admin', '2023-03-06 11:28:46', '2023-03-06 11:28:46'),
(4, 'client advocate', '1,2', 'Admin', 'Admin', '2023-03-06 11:29:42', '2023-03-06 11:29:42'),
(5, 'junior programmer analyst trainee', '1', 'Admin', 'Admin', '2023-03-06 11:30:37', '2023-03-06 11:30:37');

-- --------------------------------------------------------

--
-- Table structure for table `vertical_master`
--

CREATE TABLE `vertical_master` (
  `vertical_id` int NOT NULL,
  `vertical_types` varchar(200) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `vertical_master`
--

INSERT INTO `vertical_master` (`vertical_id`, `vertical_types`, `created_date`, `updated_date`) VALUES
(1, 'college', '2023-03-02 12:25:25', '2023-03-02 06:55:25'),
(2, 'college', '2023-02-27 12:25:25', '2023-02-27 06:55:25'),
(3, 'school', '2023-02-27 12:33:44', '2023-02-27 07:03:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_contact_details`
--
ALTER TABLE `client_contact_details`
  ADD PRIMARY KEY (`client_contact_details_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `client_master`
--
ALTER TABLE `client_master`
  ADD PRIMARY KEY (`client_id`);

--
-- Indexes for table `customer_project_details`
--
ALTER TABLE `customer_project_details`
  ADD PRIMARY KEY (`details_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `customer_project_master`
--
ALTER TABLE `customer_project_master`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `vertical_id` (`vertical_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `designation`
--
ALTER TABLE `designation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `user_role_id` (`user_role_id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_history`
--
ALTER TABLE `login_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_products`
--
ALTER TABLE `master_products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_code_details`
--
ALTER TABLE `project_code_details`
  ADD PRIMARY KEY (`project_code_details_id`),
  ADD KEY `project_code_id` (`project_code_id`);

--
-- Indexes for table `project_code_master`
--
ALTER TABLE `project_code_master`
  ADD PRIMARY KEY (`project_code_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `project_phase_master`
--
ALTER TABLE `project_phase_master`
  ADD PRIMARY KEY (`phase_id`);

--
-- Indexes for table `punchin_punchout`
--
ALTER TABLE `punchin_punchout`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sign_in`
--
ALTER TABLE `sign_in`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task_details_history`
--
ALTER TABLE `task_details_history`
  ADD PRIMARY KEY (`task_details_history_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `task_details_master_id` (`task_details_master_id`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `task_status` (`task_status`);

--
-- Indexes for table `task_details_master`
--
ALTER TABLE `task_details_master`
  ADD PRIMARY KEY (`task_details_master_id`),
  ADD KEY `assigned_to` (`assigned_to`),
  ADD KEY `assigned_by` (`assigned_by`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `task_status` (`task_status`);

--
-- Indexes for table `task_status_master`
--
ALTER TABLE `task_status_master`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `ticket_view`
--
ALTER TABLE `ticket_view`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `user_role_id` (`user_role_id`),
  ADD KEY `user_group_id` (`user_group_id`);

--
-- Indexes for table `users_login`
--
ALTER TABLE `users_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_groups`
--
ALTER TABLE `user_groups`
  ADD PRIMARY KEY (`user_group_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_role_id`);

--
-- Indexes for table `vertical_master`
--
ALTER TABLE `vertical_master`
  ADD PRIMARY KEY (`vertical_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `client_contact_details`
--
ALTER TABLE `client_contact_details`
  MODIFY `client_contact_details_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `client_master`
--
ALTER TABLE `client_master`
  MODIFY `client_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225;

--
-- AUTO_INCREMENT for table `customer_project_details`
--
ALTER TABLE `customer_project_details`
  MODIFY `details_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_project_master`
--
ALTER TABLE `customer_project_master`
  MODIFY `project_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `designation`
--
ALTER TABLE `designation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login_history`
--
ALTER TABLE `login_history`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=398;

--
-- AUTO_INCREMENT for table `master_products`
--
ALTER TABLE `master_products`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `project_code_details`
--
ALTER TABLE `project_code_details`
  MODIFY `project_code_details_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_code_master`
--
ALTER TABLE `project_code_master`
  MODIFY `project_code_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_phase_master`
--
ALTER TABLE `project_phase_master`
  MODIFY `phase_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `punchin_punchout`
--
ALTER TABLE `punchin_punchout`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `sign_in`
--
ALTER TABLE `sign_in`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `task_details_history`
--
ALTER TABLE `task_details_history`
  MODIFY `task_details_history_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task_details_master`
--
ALTER TABLE `task_details_master`
  MODIFY `task_details_master_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task_status_master`
--
ALTER TABLE `task_status_master`
  MODIFY `status_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ticket_view`
--
ALTER TABLE `ticket_view`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users_login`
--
ALTER TABLE `users_login`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_groups`
--
ALTER TABLE `user_groups`
  MODIFY `user_group_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `user_role_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vertical_master`
--
ALTER TABLE `vertical_master`
  MODIFY `vertical_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `client_contact_details`
--
ALTER TABLE `client_contact_details`
  ADD CONSTRAINT `client_contact_details_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client_master` (`client_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `customer_project_details`
--
ALTER TABLE `customer_project_details`
  ADD CONSTRAINT `customer_project_details_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `customer_project_master` (`project_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `customer_project_master`
--
ALTER TABLE `customer_project_master`
  ADD CONSTRAINT `customer_project_master_ibfk_1` FOREIGN KEY (`vertical_id`) REFERENCES `vertical_master` (`vertical_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `customer_project_master_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `master_products` (`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `customer_project_master_ibfk_3` FOREIGN KEY (`client_id`) REFERENCES `client_master` (`client_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `designation`
--
ALTER TABLE `designation`
  ADD CONSTRAINT `designation_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `designation_ibfk_2` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`user_role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `project_code_details`
--
ALTER TABLE `project_code_details`
  ADD CONSTRAINT `project_code_details_ibfk_1` FOREIGN KEY (`project_code_id`) REFERENCES `project_code_master` (`project_code_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `project_code_master`
--
ALTER TABLE `project_code_master`
  ADD CONSTRAINT `project_code_master_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `client_master` (`client_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `project_code_master_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `customer_project_master` (`project_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `task_details_history`
--
ALTER TABLE `task_details_history`
  ADD CONSTRAINT `task_details_history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `task_details_history_ibfk_2` FOREIGN KEY (`task_details_master_id`) REFERENCES `task_details_master` (`task_details_master_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `task_details_history_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `task_details_history_ibfk_4` FOREIGN KEY (`task_status`) REFERENCES `task_status_master` (`status_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `task_details_master`
--
ALTER TABLE `task_details_master`
  ADD CONSTRAINT `task_details_master_ibfk_1` FOREIGN KEY (`assigned_to`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `task_details_master_ibfk_2` FOREIGN KEY (`assigned_by`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `task_details_master_ibfk_3` FOREIGN KEY (`project_id`) REFERENCES `customer_project_master` (`project_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `task_details_master_ibfk_4` FOREIGN KEY (`task_status`) REFERENCES `task_status_master` (`status_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`user_role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`user_group_id`) REFERENCES `user_groups` (`user_group_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
