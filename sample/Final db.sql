-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 28, 2023 at 09:56 AM
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
  `profileImage` varchar(250) CHARACTER SET utf8mb4  NOT NULL,
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
('', 216, 'SER', 'undefined', 0, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
  `ip_address` varchar(100) CHARACTER SET utf8mb4  NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4  NOT NULL,
  `password` varchar(50) NOT NULL,
  `attempt_count` int NOT NULL,
  `bad_attempt` int NOT NULL,
  `message` varchar(50) CHARACTER SET utf8mb4  NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `login_history`
--

INSERT INTO `login_history` (`id`, `ip_address`, `email`, `password`, `attempt_count`, `bad_attempt`, `message`, `created_date`, `updated_date`) VALUES
(690, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$EQa2IMHHKwap9CbjFDA3delSVv001Ku9pVjqEnU.hrb', 1, 0, 'Login successful', '2023-04-21 13:38:27', '2023-04-21 08:08:27'),
(691, '103.194.242.18', 'selva@gmail.com', '$2b$10$vwzL6t6xVtpqoMeaTOmQoOYYqWcDZeglawDd1xmhz4C', 1, 0, 'Login successful', '2023-04-21 13:38:27', '2023-04-21 08:08:27'),
(692, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$v7FttUV3NvmFQX7WcYXaPO21K35SsWjU12e2jeHoo0p', 1, 0, 'Login successful', '2023-04-21 14:54:20', '2023-04-21 09:24:20'),
(693, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$Qw4YJTSd8205dAtQ6Kq2R./NCwuV2tZs/1Z8llsDxup', 1, 0, 'Login successful', '2023-04-21 14:54:53', '2023-04-21 09:24:53'),
(694, '103.194.242.18', 'selva@gmail.com', '$2b$10$hac/KAIDfNmDdCt9R0zCfeHuiNc4EftrbLrFU2IXqIG', 1, 0, 'Login successful', '2023-04-21 14:55:11', '2023-04-21 09:25:11'),
(695, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$Rf/TmKuCH39i/FwVkbgikeZniU22GuSH7KW/TwGT1vf', 1, 0, 'Login successful', '2023-04-21 14:55:21', '2023-04-21 09:25:21'),
(696, '103.194.242.18', 'selva@gmail.com', '$2b$10$Dg/35r5/i8rL.DGLQrDUiOkZbk5wYP/XRroHVjrdNGW', 1, 0, 'Login successful', '2023-04-21 15:39:26', '2023-04-21 10:09:26'),
(697, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$FwGTOgfMAkcWhWP/OK8EY.LBSKlzubld6vmKPjMVJ9F', 1, 0, 'Login successful', '2023-04-21 18:17:20', '2023-04-21 12:47:20'),
(698, '103.194.242.18', 'selva@gmail.com', '$2b$10$u97mm8TfJwTCxEkHbiwsVunkyhdOslhNaPHVv4nvUN6', 1, 0, 'Login successful', '2023-04-21 18:18:02', '2023-04-21 12:48:02'),
(699, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$ZzionzmfyWR8JBFFuMRR4uBa4Ro8F3hIyYl3sFo2eyE', 1, 0, 'Login successful', '2023-04-22 09:16:11', '2023-04-22 03:46:11'),
(700, '103.194.242.18', 'selva@gmail.com', '$2b$10$GjkIpP2MWVqfKEYC2O2BMOU1A8RMKXMZEFCBlv0akTQ', 1, 0, 'Login successful', '2023-04-22 09:16:45', '2023-04-22 03:46:45'),
(701, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$AKQhdMOMMLbq86PCADyRBe9TPydGtXs0jaySvVe4mZP', 1, 0, 'Login successful', '2023-04-22 09:27:15', '2023-04-22 03:57:15'),
(702, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$PJ5QLDdcr0OBe1fHaZhxR.R6P2/f.pEZQz6oN/mseF9', 1, 0, 'Login successful', '2023-04-22 09:27:32', '2023-04-22 03:57:32'),
(703, '103.114.210.211', 'selva@gmail.com', '$2b$10$OcK1.RnTrUF4TktDDzH53eB9EIQgH1UM3ZRlu7P37ZY', 1, 0, 'Login successful', '2023-04-22 09:34:19', '2023-04-22 04:04:19'),
(704, '103.194.242.18', 'selva@gmail.com', '$2b$10$2jEuPth/TydB7NxpP7J9WOtTRsyeK842Jb8fPrNIIuM', 1, 0, 'Login successful', '2023-04-22 09:50:26', '2023-04-22 04:20:26'),
(705, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$/HFX5xlZAOEcmQhujrL/kejV.6qiFcd73WkpPL3GzSw', 1, 0, 'Login successful', '2023-04-22 15:29:16', '2023-04-22 09:59:16'),
(706, '103.114.210.211', 'selva@gmail.com', '$2b$10$AGYUDhFQE1//Z/oR48eJC.OwZMKZb7EeHZozE6NWBMU', 1, 0, 'Login successful', '2023-04-22 15:52:03', '2023-04-22 10:22:03'),
(707, '103.114.210.211', 'kumar@gmail.com', '$2b$10$MYSumTpOBVKXHnuHOAR4jehcq5cHz.CCD7c5ol8Gsbx', 1, 0, 'Login successful', '2023-04-22 17:02:28', '2023-04-22 11:32:28'),
(708, '103.194.242.18', 'selva@gmail.com', '$2b$10$ELOchCGvbBxuuyQrqMI2PuSg/8mxh7DlRRI/9Ay/WV3', 1, 0, 'Login successful', '2023-04-22 17:41:00', '2023-04-22 12:11:00'),
(709, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$cbj2f.ENnmvxofHL8cO6ie0cdfbAqdh1kC2wqCEwGsO', 1, 0, 'Login successful', '2023-04-24 09:14:57', '2023-04-24 03:44:57'),
(710, '103.194.242.18', 'selva@gmail.com', '$2b$10$52caPx49JrCBeixvVo/v0ueubbZo2sM2r.AlWDOnNaH', 1, 0, 'Login successful', '2023-04-24 09:15:46', '2023-04-24 03:45:46'),
(711, '103.194.242.18', 'selva@gmail.com', '$2b$10$oL2P39WR0W0.Hwh0VKzUwe90LLtnXmuMnTyLWmfubp0', 1, 1, 'Login failed', '2023-04-24 13:37:27', '2023-04-24 08:07:27'),
(712, '103.194.242.18', 'selva@gmail.com', '$2b$10$ijtj33JYf6lhc18BysvrI.5ctR2oTqQ/5GA3J1D4R8x', 2, 1, 'Login failed', '2023-04-24 13:37:33', '2023-04-24 08:07:33'),
(713, '103.194.242.18', 'selva@gmail.com', '$2b$10$z9QXNUgzXbuizborbkX9dOF0LehARO92iM1s5wvHkAS', 3, 1, 'Login failed', '2023-04-24 13:37:50', '2023-04-24 08:07:50'),
(714, '103.194.242.18', 'selva@gmail.com', '$2b$10$VxR.IrbNqDOiJBrf.Wy81uUDS/LjSGkMD2ipNNMSd5G', 4, 1, 'Login failed', '2023-04-24 13:38:38', '2023-04-24 08:08:38'),
(715, '103.194.242.18', 'selva@gmail.com', '$2b$10$OU8I3bsXlcFg8u7Tpucq2.Kgn6dtrtohgpUUj5cSIW8', 5, 1, 'Login failed', '2023-04-24 13:39:37', '2023-04-24 08:09:37'),
(716, '103.194.242.18', 'selva@gmail.com', '$2b$10$TjNZLLO4etUWe.DbINik9eDRCdZZmQCzn0nIaqpET0C', 6, 0, 'Login successful', '2023-04-24 13:40:16', '2023-04-24 08:10:16'),
(717, '103.194.242.18', 'selva@gmail.com', '$2b$10$oNQvAHZ3wLgU6pACOeO3suh9NbOga59XQMiSOc.g8vK', 1, 1, 'Login failed', '2023-04-24 13:51:37', '2023-04-24 08:21:37'),
(718, '103.194.242.18', 'selva@gmail.com', '$2b$10$be48QPHRUE6chc4su5yzNOqJyHXGhEP0jIcQ2j3zluy', 2, 1, 'Login failed', '2023-04-24 13:51:48', '2023-04-24 08:21:48'),
(719, '103.194.242.18', 'kumar@gmail.com', '$2b$10$copFPLmhbXVi1WKHxBl8W.XAc7trUuTAinXxdw/1ZPP', 1, 1, 'Login failed', '2023-04-24 13:52:20', '2023-04-24 08:22:20'),
(720, '103.194.242.18', 'kumar@gmail.com', '$2b$10$tpc95OIxpFCZHh/tUtIHKOFMni1PKmMbE9rKtj.c4Wo', 2, 0, 'Login successful', '2023-04-24 13:52:34', '2023-04-24 08:22:34'),
(721, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$jyae9Jb4EQNWqtBtWPyL2Og/te7eK8qpMHlB6/C45U3', 1, 0, 'Login successful', '2023-04-24 15:28:37', '2023-04-24 09:58:37'),
(722, '203.223.189.230', 'sesfdf', '$2b$10$1KwcfOMe1xtOGT4SZLtnnuNmLItbLVrVc4VcjVYInH1', 1, 1, 'Login failed', '2023-04-24 15:38:54', '2023-04-24 10:08:54'),
(723, '203.223.189.230', 'sesfdf', '$2b$10$uFxs9ls2h0tnbtQ8akIN/O39rvkpcvtn72e60eIuOWr', 2, 1, 'Login failed', '2023-04-24 15:38:57', '2023-04-24 10:08:57'),
(724, '203.223.189.230', 'dsdsd@gmail.com', '$2b$10$LrNefQmGQI4zDl/laHB/euXJHV1b5Ju8JKWQOFAPtR5', 3, 1, 'Login failed', '2023-04-24 15:39:41', '2023-04-24 10:09:41'),
(725, '203.223.189.230', 'dsdsd@gmail.com', '$2b$10$X32Mm7ZuRp1qVQDpbXZkQ.Kvfns18zFygdiy9ur78NU', 4, 1, 'Login failed', '2023-04-24 15:39:49', '2023-04-24 10:09:49'),
(726, '203.223.189.230', 'dsdsd@gmail.com', '$2b$10$EYQClIqgsQCRyKt5DyIMVOe8MZCwjKNWwprGsJD58Bk', 5, 1, 'Login failed', '2023-04-24 15:39:59', '2023-04-24 10:09:59'),
(727, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$vfP5B8SoHWY/G1QtkTmZ7OkBUZlrD25u8uWE/KDkym6', 1, 0, 'Login successful', '2023-04-24 15:40:41', '2023-04-24 10:10:41'),
(728, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$8qZ0QKmqi4fFsmA1BIx8G.K9mnT4zkAbSbZU3nZ2xp2', 1, 1, 'Login failed', '2023-04-24 15:48:50', '2023-04-24 10:18:50'),
(729, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$pD5sklbOG7hsjk6DGYgqV.EhakTfPYRHfMcdC1XH8Jc', 2, 0, 'Login successful', '2023-04-24 15:49:00', '2023-04-24 10:19:00'),
(730, '103.194.242.18', 'sanjdsay@gmail.com', '$2b$10$6hWE7oCJPLNWFkgHM/VrH.6juuOj02yVulOxI9UpXmK', 1, 1, 'Login failed', '2023-04-24 15:49:11', '2023-04-24 10:19:11'),
(731, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$r7jnt2UWaB7MUfyzaHoMgeYhMoWb2Ohha647lnhPMeC', 2, 0, 'Login successful', '2023-04-24 15:50:14', '2023-04-24 10:20:14'),
(732, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$v5RY4Cu4A0eAtH4NaHtM1eCaGSxneUp695z9XaVsqa6', 1, 0, 'Login successful', '2023-04-24 15:50:23', '2023-04-24 10:20:23'),
(733, '103.194.242.18', 'dsdsd@gmail.com', '$2b$10$6Yj084EbQ8DQz.5aeSY4OONISeFVmy3v1pMwkk7hb26', 6, 1, 'Login failed', '2023-04-24 15:51:04', '2023-04-24 10:21:04'),
(734, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$GdSCn3rjpUqY.5L6haJ4/u7rNj44sbc.7bN39AOqwxl', 7, 0, 'Login successful', '2023-04-24 15:51:17', '2023-04-24 10:21:17'),
(735, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$H/yOxxfSTiGVACBc2xfpdO1RiaNt57Iv162VxkY1v49', 1, 0, 'Login successful', '2023-04-24 15:54:05', '2023-04-24 10:24:05'),
(736, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$qpHnjNhwYgMKTiU2Y715fe98u/FHt35p8FnIBT/PAPO', 1, 0, 'Login successful', '2023-04-24 15:54:19', '2023-04-24 10:24:19'),
(737, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$wJwgiCmut8Yjy.x.GP5n2Oy3DUlXRbYzZGCB8PaaiDl', 1, 0, 'Login successful', '2023-04-24 15:57:23', '2023-04-24 10:27:23'),
(738, '103.194.242.18', 'selva@gmail.com', '$2b$10$w.YInDYsI0TwNwGARE2Kg.6Jj4t/g2xqbVBvasYvk08', 1, 0, 'Login successful', '2023-04-24 16:00:03', '2023-04-24 10:30:03'),
(739, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$OoSucZos8RF01pMBXQKY8.N8AMXetpYDplk3usiLhsO', 1, 0, 'Login successful', '2023-04-24 16:00:23', '2023-04-24 10:30:23'),
(740, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$HfDx7v.bZRwDlzWdyLkDreA545BTvvsF0jE8RTH93uY', 1, 0, 'Login successful', '2023-04-24 16:01:55', '2023-04-24 10:31:55'),
(741, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$Lo82G3OmvZSo91VTtfgD.OcPr736e.//RdRrdRgxeA0', 1, 0, 'Login successful', '2023-04-24 16:02:42', '2023-04-24 10:32:42'),
(742, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$Eii4dL4yKAm33pF6P9EqP.vOWerg2mP.kcx/LhzshjU', 1, 0, 'Login successful', '2023-04-24 16:04:21', '2023-04-24 10:34:21'),
(743, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$TQFJM/3tFZ6jZR4v.BFLkODVuNEoq5MxfKGgeZ.D1P0', 1, 0, 'Login successful', '2023-04-24 16:08:43', '2023-04-24 10:38:43'),
(744, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$Ydw79HKrr.yEvRR7HHL5aeZ7SUwUGmttHhUnDnDaCwE', 1, 0, 'Login successful', '2023-04-24 16:11:12', '2023-04-24 10:41:12'),
(745, '103.194.242.18', 'selva@gmail.com', '$2b$10$TFxbJGksXwo24PzkJgcDBO.zIOwytzcHenI.TLiwB8R', 1, 0, 'Login successful', '2023-04-24 16:11:55', '2023-04-24 10:41:55'),
(746, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$0.f7qmM9.WgppofmJNPQAuqSd69W6KLXKVC8cF066Sa', 1, 0, 'Login successful', '2023-04-24 16:13:03', '2023-04-24 10:43:03'),
(747, '103.194.242.18', 'selva@gmail.com', '$2b$10$ZNvXkcQVcfp28r2rKL91luFiMMzcxbMTge2GMowe4iC', 1, 0, 'Login successful', '2023-04-24 16:13:32', '2023-04-24 10:43:32'),
(748, '103.194.242.18', 'selva@gmail.com', '$2b$10$eNVTpuG2vKZ/O015w0PshupunXVygU8.BOiSceBbCUu', 1, 0, 'Login successful', '2023-04-24 16:13:51', '2023-04-24 10:43:51'),
(749, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$JB6I/hbOyR2EwRkT8eXva.sadlOvXj6azSCnU.w5rqG', 1, 0, 'Login successful', '2023-04-24 16:14:58', '2023-04-24 10:44:58'),
(750, '103.194.242.18', 'kumar@gmail.com', '$2b$10$F7WJBNyi.C0uk2q54YNKa.0FtZvbLAPnwEM1oQsmXoS', 1, 0, 'Login successful', '2023-04-24 16:15:17', '2023-04-24 10:45:17'),
(751, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$BEUdEDVlogAmx9AqlKZjXukShPumfmfbZz2aQrBqmk.', 1, 1, 'Login failed', '2023-04-24 16:16:56', '2023-04-24 10:46:56'),
(752, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$KyepFP.JsIF1snXUDu/CwedwU9w65RawMbkghnbOAHF', 2, 0, 'Login successful', '2023-04-24 16:17:05', '2023-04-24 10:47:05'),
(753, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$tFQRGiPF7F0leQAOFNnIgeMs3rYsKOhsh2QuBYTuQVg', 1, 0, 'Login successful', '2023-04-24 16:20:17', '2023-04-24 10:50:17'),
(754, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$jBCVGxTnNlUAxs9ZCs06zOxeF0cfXMhyjzcnx7kQ4Il', 1, 0, 'Login successful', '2023-04-24 16:24:28', '2023-04-24 10:54:28'),
(755, '103.194.242.18', 'kumar@gmail.com', '$2b$10$4qrOumRDGjirn2VD5lcexuw0THOjJfD2Q4lPZFJSqa9', 1, 0, 'Login successful', '2023-04-24 16:26:12', '2023-04-24 10:56:12'),
(756, '103.194.242.18', 'selva@gmail.com', '$2b$10$nJI5rOawHh0h0345HFa89e.jWFzBqt5SEMPx7KX3awl', 1, 0, 'Login successful', '2023-04-24 16:37:11', '2023-04-24 11:07:11'),
(757, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$uKKh.KhlgSgmKw8PSOfH1.pvGFdJKiwhY8XpGv3AomT', 1, 0, 'Login successful', '2023-04-24 17:01:03', '2023-04-24 11:31:03'),
(758, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$AzTISrbiv3DDoXfLja2.hORjWoc8GXxIvfGaE16Wei0', 1, 1, 'Login failed', '2023-04-24 17:01:21', '2023-04-24 11:31:21'),
(759, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$WEsu0TnZ916aygF..kch/.6Wq/r7aPqnkZw3Dzmhb2n', 2, 0, 'Login successful', '2023-04-24 17:01:29', '2023-04-24 11:31:29'),
(760, '203.223.189.230', 'gopal@gmail.com', '$2b$10$1N6w3N0CffIR.tWDzty.u.Xko/RRNy.qkHJnfTc2XYS', 1, 1, 'Login failed', '2023-04-24 17:01:44', '2023-04-24 11:31:44'),
(761, '203.223.189.230', 'gopal@gmail.com', '$2b$10$ALYMOSAfTNCF8b5qk4eSRuA83GdNDBaNyl.pIgQeSee', 2, 0, 'Login successful', '2023-04-24 17:01:52', '2023-04-24 11:31:52'),
(762, '203.223.189.230', 'satheesh@gmail.', '$2b$10$.1i5AOn0dvhjqE2xq50tBupLboVcxCptgUWA5RUEfIA', 1, 1, 'Login failed', '2023-04-24 17:02:12', '2023-04-24 11:32:12'),
(763, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$AEsfUeFc6x0bNbwqTR2CEedtbrU6iTpeftQV8yygyHi', 2, 1, 'Login failed', '2023-04-24 17:02:22', '2023-04-24 11:32:22'),
(764, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$vQGKtgURlKWo/Cb5teW4SOR2fP8r9FbZArhb40ZWgAJ', 3, 0, 'Login successful', '2023-04-24 17:02:26', '2023-04-24 11:32:26'),
(765, '203.223.189.230', 'selva@gmail.com', '$2b$10$d80ejz9/eRLUR3YkSuxfH.IE2xeOeYzbc8QPXOnXguo', 1, 0, 'Login successful', '2023-04-24 17:03:03', '2023-04-24 11:33:03'),
(766, '203.223.189.230', 'selva@gmail.com', '$2b$10$LLlwdhjUGQ0Ghy4qPwJkgu7KlszCZvKQ1qiKBg07FG2', 1, 1, 'Login failed', '2023-04-24 17:03:22', '2023-04-24 11:33:22'),
(767, '203.223.189.230', 'selva@gmail.com', '$2b$10$J4VQBALZQ0mXSb9DuO5rK.BnhMW1mjGqjqqE3omjj8j', 2, 1, 'Login failed', '2023-04-24 17:03:29', '2023-04-24 11:33:29'),
(768, '203.223.189.230', 'selva@gmail.com', '$2b$10$runDrUN1Wanf8KpGThwz.Ock7iBXKCl4VjmKreLFk9g', 3, 1, 'Login failed', '2023-04-24 17:03:31', '2023-04-24 11:33:31'),
(769, '203.223.189.230', 'selva@gmail.com', '$2b$10$jPPnjUQ4qzl1PcO1m1SryOuGPqFhEfZZC1dFqG7sNmU', 4, 1, 'Login failed', '2023-04-24 17:03:31', '2023-04-24 11:33:31'),
(770, '203.223.189.230', 'selva@gmail.com', '$2b$10$H41Ve9PJeiH78irhJ6QXQ.3pJpmw2lbaIT8Tp.vt2Xe', 5, 1, 'Login failed', '2023-04-24 17:03:32', '2023-04-24 11:33:32'),
(771, '203.223.189.230', 'selva@gmail.com', '$2b$10$Idkg4SD9FPhvXJxhhlr34O1h1mM6aE1pxN1xY9UgpyG', 5, 1, 'Login failed', '2023-04-24 17:03:32', '2023-04-24 11:33:32'),
(772, '203.223.189.230', 'selva@gmail.com', '$2b$10$oTpO.VPiA3SGoWdCofxjT.87vM2NLLU/.kT56Jmp6cv', 6, 1, 'Login failed', '2023-04-24 17:03:32', '2023-04-24 11:33:32'),
(773, '203.223.189.230', 'selva@gmail.com', '$2b$10$D3tRMcogiDDqupEiAqbiK.42zhLACqp3Hc1ftNt/d3s', 6, 1, 'Login failed', '2023-04-24 17:03:32', '2023-04-24 11:33:32'),
(774, '203.223.189.230', 'selva@gmail.com', '$2b$10$NAesnIWRSCUuTV/m7jY6WuewDLEBrjtOPsZaRbu4Ubx', 7, 0, 'Login successful', '2023-04-24 17:03:34', '2023-04-24 11:33:34'),
(775, '203.223.189.230', 'gopal@gmail.com', '$2b$10$rlWJiQB0MicdtmV7uPBfbue2AikC9Nzw/cTsD4x8trj', 1, 0, 'Login successful', '2023-04-24 17:04:04', '2023-04-24 11:34:04'),
(776, '203.223.189.230', 'gopal@gmail.com', '$2b$10$hMyDg9gDD1yCRV9kVSDFbObPGcv5/2a3gSxDeMQrARB', 2, 0, 'Login successful', '2023-04-24 17:04:04', '2023-04-24 11:34:04'),
(777, '203.223.189.230', 'gopal@gmail.com', '$2b$10$pYpjWTG/DJwSk2eRQulp7uT.R6nVnPlE/QJF2jMZUXa', 2, 0, 'Login successful', '2023-04-24 17:04:04', '2023-04-24 11:34:04'),
(778, '203.223.189.230', 'gopal@gmail.com', '$2b$10$9ZJUFUNQAVSD9In6o2qeZeFdJT/fJ2.X9xH9RDTgwNw', 3, 0, 'Login successful', '2023-04-24 17:04:04', '2023-04-24 11:34:04'),
(779, '203.223.189.230', 'gopal@gmail.com', '$2b$10$4zUmTdcjVaVNVoNtWr2eDuM5sv7DJ3Y3JkBvph8c7x3', 3, 0, 'Login successful', '2023-04-24 17:04:05', '2023-04-24 11:34:05'),
(780, '203.223.189.230', 'gopal@gmail.com', '$2b$10$yQ1n7zKRBQ/fmy9N2PUUGe9r2fm2.Ng7U3GhsKOe2h0', 3, 0, 'Login successful', '2023-04-24 17:04:05', '2023-04-24 11:34:05'),
(781, '203.223.189.230', 'gopal@gmail.com', '$2b$10$LO9Zlhqiw3qEODl3Y2Fjv.0BuvMHpbqk5Co6A1ZRgbO', 4, 0, 'Login successful', '2023-04-24 17:04:05', '2023-04-24 11:34:05'),
(782, '203.223.189.230', 'gopal@gmail.com', '$2b$10$O70YuuUHlwBnvRcncf6W3.g0V8hpDC.pxQpKGRno1F1', 4, 0, 'Login successful', '2023-04-24 17:04:05', '2023-04-24 11:34:05'),
(783, '203.223.189.230', 'gopal@gmail.com', '$2b$10$mPxeCDPNgigfOkVTIWSoG.QCojE2XpP84flnk2jyjWO', 4, 0, 'Login successful', '2023-04-24 17:04:05', '2023-04-24 11:34:05'),
(784, '203.223.189.230', 'shanmugapriyan@gmail.com', '$2b$10$KA7Fd7zJ60/9ujCbQuzZtuIugsHBblgWr.6WVyPtA1e', 1, 1, 'Login failed', '2023-04-24 17:04:36', '2023-04-24 11:34:36'),
(785, '203.223.189.230', 'shanmugapriyan@gmail.com', '$2b$10$7FfaiKF8P1ljE/Yho4Nu4uJ2L9VKc7lYsPW6vW8JNQL', 2, 1, 'Login failed', '2023-04-24 17:04:38', '2023-04-24 11:34:38'),
(786, '203.223.189.230', 'shanmugapriyan@gmail.com', '$2b$10$JGkXyP.PhXISqWdHRUMcr.JJOQLbPdErra6WhFhA0Sv', 2, 1, 'Login failed', '2023-04-24 17:04:38', '2023-04-24 11:34:38'),
(787, '203.223.189.230', 'shanmugapriyan@gmail.com', '$2b$10$wZ4QdPzM4/.k6WM2te/MTOb3klY3evxpaUijgzC7Q4p', 3, 1, 'Login failed', '2023-04-24 17:04:38', '2023-04-24 11:34:38'),
(788, '203.223.189.230', 'shanmugapriyan@gmail.com', '$2b$10$WneWJZC8n24CbwV3Df0xiOuYcH0ZDs1cEuNBbHW/pDB', 4, 0, 'Login successful', '2023-04-24 17:04:39', '2023-04-24 11:34:39'),
(789, '103.114.210.211', 'selva@gmail.com', '$2b$10$DTM5goUhFRbt9zjBPwkrb.fsGYb03DsfTsgMrppoP5S', 1, 0, 'Login successful', '2023-04-24 17:18:52', '2023-04-24 11:48:52'),
(790, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$EO5T/xuHQRcVlqWLAr4phuf8EMr/YnlRSWEYT0Ozzgb', 1, 0, 'Login successful', '2023-04-25 09:20:03', '2023-04-25 03:50:03'),
(791, '103.114.210.211', 'selva@gmail.com', '$2b$10$Nq08RlUr2KQ0bVutibrMuOR3npnCgtAbLLBV/6di0D5', 1, 0, 'Login successful', '2023-04-25 09:21:19', '2023-04-25 03:51:19'),
(792, '103.114.210.211', 'sanjay@gmail.com', '$2b$10$TEv81U8QhFtT.a8C7vP0Pu/mjrTWOlaA/DThqPLaeC0', 3, 0, 'Login successful', '2023-04-25 11:24:19', '2023-04-25 05:54:19'),
(793, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$eCEtbYDDKmlsuoQ3hh.FvuoFEoXDFf74LzfhWRajrjg', 1, 0, 'Login successful', '2023-04-25 11:24:44', '2023-04-25 05:54:44'),
(794, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$CcciGmOpIqHjq/X6uoQ6u.bBGyfpyyHoZQF0oT3P1Za', 1, 0, 'Login successful', '2023-04-25 11:25:35', '2023-04-25 05:55:35'),
(795, '103.114.210.211', 'selva@gmail.com', '$2b$10$cFqo4J1LRnp6RUPCql1ChuU86MbIMzdJwYGBeBcd5VA', 1, 0, 'Login successful', '2023-04-25 11:25:53', '2023-04-25 05:55:53'),
(796, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$aaGCNaAZggjt3Y6m9Hl.r.c6tWT.iX3IFATYbgGxefe', 1, 0, 'Login successful', '2023-04-25 13:16:43', '2023-04-25 07:46:43'),
(797, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$p759.wdrhmhC43IFQ/e5kexBUJKNsvXmpROSBzmQ09j', 2, 0, 'Login successful', '2023-04-25 15:06:29', '2023-04-25 09:36:29'),
(798, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$yCgNXXxqQ4za45yrUD8R5umFXJg76iOJqvJ/Azzsc7J', 1, 0, 'Login successful', '2023-04-25 15:39:05', '2023-04-25 10:09:05'),
(799, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$6Gvl.YL2G/XtRFoBDSsUUeIfN9WfOj9KESroCH.2/6k', 2, 0, 'Login successful', '2023-04-25 16:49:10', '2023-04-25 11:19:10'),
(800, '103.114.210.211', 'selva@gmail.com', '$2b$10$9jBVhX/P2imIkQLMTVFDx.Zx0jo9xogizWh5k2ddqY/', 1, 0, 'Login successful', '2023-04-25 16:53:39', '2023-04-25 11:23:39'),
(801, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$F9I1449uFK3cOZK/nIWIu.H/AoS15ldQfLWV/FdTw80', 1, 0, 'Login successful', '2023-04-25 16:58:20', '2023-04-25 11:28:20'),
(802, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$Gy3VTgnODTiZamsGZXRnkOLFbNmS7MDCCCzed7jwLf/', 1, 0, 'Login successful', '2023-04-25 17:06:04', '2023-04-25 11:36:04'),
(803, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$7IX/7FFU6wa39KS76DKgseDT97.BGpArVOP3NdgqGP1', 1, 0, 'Login successful', '2023-04-25 17:17:53', '2023-04-25 11:47:53'),
(804, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$WBxFXB5x4RydskeYVot1RebMod18gLlVDetHzn7HdCV', 1, 0, 'Login successful', '2023-04-25 17:33:31', '2023-04-25 12:03:31'),
(805, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$jcLrGsjplR1ZhwjETevGE.82uAxNXV3v5gQ59d259ib', 1, 0, 'Login successful', '2023-04-25 17:36:50', '2023-04-25 12:06:50'),
(806, '103.194.242.18', 'kumar@gmail.com', '$2b$10$ZOGV7ez3HG8K2ZLICRWbneYbLtX6KxSc8926ai3E.Js', 1, 0, 'Login successful', '2023-04-25 17:59:22', '2023-04-25 12:29:22'),
(807, '103.194.242.18', 'kumar@gmail.com', '$2b$10$U1vJC/x5rgd64w4VXN7bCujglqQYXWsNkoxC1XHfOqN', 1, 0, 'Login successful', '2023-04-25 17:59:24', '2023-04-25 12:29:24'),
(808, '203.223.189.230', 'sanjay@gmail.com', '$2b$10$.Ak3pigjb1Q4dqu/ji3QZeOzexsYefdDMvmnMGdKnOm', 1, 0, 'Login successful', '2023-04-25 19:20:00', '2023-04-25 13:50:00'),
(809, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$MSwEsnd6n3dNt1hIIAwFD.i9S4c0Bf6gBfGlDJcBrkU', 1, 1, 'Login failed', '2023-04-26 09:14:41', '2023-04-26 03:44:41'),
(810, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$XPjHE9YUmQtbkK4TruRsmu./Adl6SijZ.kcVh4lg0Hp', 2, 0, 'Login successful', '2023-04-26 09:14:44', '2023-04-26 03:44:44'),
(811, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$27138KpnElylrDaezL.05OCNdCylT2HnXu03Tydi440', 1, 0, 'Login successful', '2023-04-26 09:18:15', '2023-04-26 03:48:15'),
(812, '103.194.242.18', 'selva@gmail.com', '$2b$10$hi45apzry/5VlnEstrMI.uTilK3xctMp68rKaAq9QNp', 1, 0, 'Login successful', '2023-04-26 09:18:43', '2023-04-26 03:48:43'),
(813, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$B5qobeH6g9Z8LqMsJHrV1OMND.OTlNHMOgmScJzrhxQ', 1, 0, 'Login successful', '2023-04-26 10:44:13', '2023-04-26 05:14:13'),
(814, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$07YXz4eTEwBXwA.3bQMa7uRAXC.lVpjokjJGDrdovH/', 1, 0, 'Login successful', '2023-04-26 11:18:02', '2023-04-26 05:48:02'),
(815, '103.194.242.18', 'selva@gmail.com', '$2b$10$3DGkg4bS6STobltX5WhKresCrjNODUhzyLAkUnJ.bxw', 1, 0, 'Login successful', '2023-04-26 15:48:43', '2023-04-26 10:18:43'),
(816, '103.194.242.18', 'kumar@gmail.com', '$2b$10$ylW984MkYs.YlkrYaXWj1u2CEkX5/T2M2s9HhKgjhLl', 1, 0, 'Login successful', '2023-04-26 17:21:00', '2023-04-26 11:51:00'),
(817, '103.194.242.18', 'kumar@gmail.com', '$2b$10$Wk9pn1mCwkoeT2WKMsYhuuPdmQyB8OF8h.I0TgH8eou', 4, 0, 'Login successful', '2023-04-26 18:37:18', '2023-04-26 13:07:18'),
(818, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$5qJHYmMkfDb4ARSoTc/0r.M8eplyDp3i56PBW9Y3hxx', 1, 0, 'Login successful', '2023-04-26 19:43:15', '2023-04-26 14:13:15'),
(819, '103.194.242.18', 'kumar@gmail.com', '$2b$10$4nl9JZ.x0IR8qyi45kN1J.f2RIGrNib.fp.pvuT0H9D', 1, 0, 'Login successful', '2023-04-26 19:47:29', '2023-04-26 14:17:29'),
(820, '103.194.242.18', 'kumar@gmail.com', '$2b$10$xrnHUg9zcxZz9W1425NIjulHQd5XokAsez8ykoILiOh', 1, 0, 'Login successful', '2023-04-26 19:50:23', '2023-04-26 14:20:23'),
(821, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$S9b01rFWW.IRYEMhjJc6puLbdhiS5sSM95GluVhjVL3', 1, 0, 'Login successful', '2023-04-27 09:18:16', '2023-04-27 03:48:16'),
(822, '203.223.189.230', 'selva@gmail.com', '$2b$10$OdPS5ogzaYe50epjWOacreZiVwD8xFNuAgUtaEH1XVl', 1, 0, 'Login successful', '2023-04-27 09:18:43', '2023-04-27 03:48:43'),
(823, '103.194.242.18', 'sanjay@gmail.com', '$2b$10$Lu.jQ/29HJAU3mfWfZKmcupQKjtn6Fgkl5T38klZyqN', 1, 0, 'Login successful', '2023-04-27 09:25:57', '2023-04-27 03:55:57'),
(824, '103.114.210.211', 'kumar@gmail.com', '$2b$10$nmmq4.NwyQummKtQaKG8t.Eyn41MuJd2y9A2nBxBwiE', 1, 0, 'Login successful', '2023-04-27 09:28:35', '2023-04-27 03:58:35'),
(825, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$ah8RiMedrtH4vKMX25IkreJTIhDF0J4ePDZZoHLFl6X', 1, 1, 'Login failed', '2023-04-27 09:59:04', '2023-04-27 04:29:04'),
(826, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$KJzruvEr2L2GxR2MdGzWAOw60.csM/BenRjRxLbSy6v', 2, 0, 'Login successful', '2023-04-27 09:59:12', '2023-04-27 04:29:12'),
(827, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$xlcjhTrkH91weesHX454K.bwjlE5boPrYtH0TNuc/wX', 1, 0, 'Login successful', '2023-04-27 10:10:13', '2023-04-27 04:40:13'),
(828, '103.194.242.18', 'kumar@gmail.com', '$2b$10$w75cTprgeREE0bhyTe48a.huOBDVgHblsRRa3Srx3cY', 1, 0, 'Login successful', '2023-04-27 10:10:53', '2023-04-27 04:40:53'),
(829, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$RawAdG3i4a93eYjJhnEwo.rhs6VMhqsNRVuSmglTJx1', 1, 0, 'Login successful', '2023-04-27 10:18:19', '2023-04-27 04:48:19'),
(830, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$PVCj8Baw8lOGP0vcva3mFuTOpbOSB5DB5vpCCTLE7/6', 1, 0, 'Login successful', '2023-04-27 10:28:17', '2023-04-27 04:58:17'),
(831, '103.194.242.18', 'selva@gmail.com', '$2b$10$q20vely/7QhmX7Sh1kqxp.6dNdeK0Xsanpvd41SesBX', 1, 0, 'Login successful', '2023-04-27 10:29:03', '2023-04-27 04:59:03'),
(832, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$9Kb4..V/7yTpW0leno3mluk3XNQlBZAf6HRlGIyl.vL', 1, 0, 'Login successful', '2023-04-27 10:29:38', '2023-04-27 04:59:38'),
(833, '103.194.242.18', 'kumar@gmail.com', '$2b$10$8uGCQoFC5JxC6LDBQoqLh.O1NczT.ruFZvt4oS4Cr7V', 1, 1, 'Login failed', '2023-04-27 10:29:54', '2023-04-27 04:59:54'),
(834, '103.194.242.18', 'kumar@gmail.com', '$2b$10$ZUnANVHhf/CafZ9Ui9tR9.4Rizml3dOCLJeG7V0PQVB', 2, 0, 'Login successful', '2023-04-27 10:30:02', '2023-04-27 05:00:02'),
(835, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$xkeDE2tg5LHdsWxTFbn/VuZzJcznbRyNrOKnHIEREMA', 1, 0, 'Login successful', '2023-04-27 10:32:13', '2023-04-27 05:02:13'),
(836, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$OntdY/A8Jj3ovtRfM9fSQ.rM/FDnxTPYruhU4HDFZJC', 1, 0, 'Login successful', '2023-04-27 10:32:15', '2023-04-27 05:02:15'),
(837, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$QDl4Cj6bn5tCjfN3zbs9iOIyJf6FP7V7BLDnR4Zcr45', 1, 0, 'Login successful', '2023-04-27 10:32:15', '2023-04-27 05:02:15'),
(838, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$FcQmnwp4WBC1F1CX6OQExOrd0eKHw7rS52/FaJi7j2y', 1, 0, 'Login successful', '2023-04-27 10:32:15', '2023-04-27 05:02:15'),
(839, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$QD4SANW.uv2VWVsjA.8ntuQyq2TssAcAI7zB4bIGXvq', 1, 0, 'Login successful', '2023-04-27 10:32:15', '2023-04-27 05:02:15'),
(840, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$KGetm5KTIs.F97WXpx578OCHVcW.kqSXKtQ3Cxma/1W', 1, 0, 'Login successful', '2023-04-27 10:32:30', '2023-04-27 05:02:30'),
(841, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$r/PaZKNyce9tFNWWa6kZ2uNO.1PbbNBqt42yYUsO7NI', 1, 0, 'Login successful', '2023-04-27 10:35:35', '2023-04-27 05:05:35'),
(842, '103.114.210.211', 'selva@gmail.com', '$2b$10$yslWeLQWV7ATkX0VJIBsHuWt24ra8OFmEz6m8zPkuXo', 1, 0, 'Login successful', '2023-04-27 10:36:10', '2023-04-27 05:06:10'),
(843, '103.194.242.18', 'kumar@gmail.com', '$2b$10$Hz6UxZAI7C52dJbDkc4T1e48EBo88gTWStSwg.CGibf', 1, 1, 'Login failed', '2023-04-27 10:51:19', '2023-04-27 05:21:19'),
(844, '103.194.242.18', 'kumar@gmail.com', '$2b$10$An//dsn6yaAtv0oyBySFW.R7AFvCpup47DBJrm86Wyg', 2, 0, 'Login successful', '2023-04-27 10:51:25', '2023-04-27 05:21:25'),
(845, '103.194.242.18', 'kumar@gmail.com', '$2b$10$Qtzwf7giirUiSbWB9ivmmuuK1E0wTSTJwO7GthHseV4', 1, 0, 'Login successful', '2023-04-27 10:51:55', '2023-04-27 05:21:55'),
(846, '103.194.242.18', 'kumar@gmail.com', '$2b$10$2Tarsg.gpa1uTlijhNLa7ekm3HkLteN2Sk/Ni2kDYxt', 1, 0, 'Login successful', '2023-04-27 10:52:49', '2023-04-27 05:22:49'),
(847, '103.194.242.18', 'selva@gmail.com', '$2b$10$hwJ3UiiWwKjxuv8wPlnsZu/ZElbNgIc5UfUjHNolyxe', 1, 0, 'Login successful', '2023-04-27 10:53:11', '2023-04-27 05:23:11'),
(848, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$K4cYJsugGCWdMDqgoE77juh1mKNW7SHkw576VUXIUfi', 1, 0, 'Login successful', '2023-04-27 13:20:37', '2023-04-27 07:50:37'),
(849, '203.223.189.230', 'selva@gmail.com', '$2b$10$3eLuYFQPwHYew5.QFTxZI.kZcPk4bQ.u4VGltxLBCy7', 1, 0, 'Login successful', '2023-04-27 13:45:53', '2023-04-27 08:15:53'),
(850, '203.223.189.230', 'satheesh@gmail.com', '$2b$10$pyVtJp4uUzjL3ZyoeNv3B.9hymJWMp1q62qNbpbqhZ1', 1, 0, 'Login successful', '2023-04-27 15:19:01', '2023-04-27 09:49:01'),
(851, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$kE6XbIm7VOzS81WGb.oWE.VWTrgsvpZgyOUUEtfaQec', 1, 0, 'Login successful', '2023-04-27 16:09:13', '2023-04-27 10:39:13'),
(852, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$FUilrA5QAWzITjkGWEeAd.mbhxUdx51CJAjsBTMvIhY', 1, 0, 'Login successful', '2023-04-27 17:01:37', '2023-04-27 11:31:37'),
(853, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$sK4pLiTELr5EiSm7K5moQ.Kr4qmfQYeW7yrG9rU7heH', 1, 0, 'Login successful', '2023-04-27 17:23:39', '2023-04-27 11:53:39'),
(854, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$9cKdb9hN1XolxxYIxZnZ0ex1rBjx7RwgmvFbbTR3Iv4', 1, 0, 'Login successful', '2023-04-27 17:24:24', '2023-04-27 11:54:24'),
(855, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$S3T11dexJb5FWveQZrn.Ie0Sr/PaoHGB1lHKEqEwfsL', 1, 0, 'Login successful', '2023-04-27 17:24:43', '2023-04-27 11:54:43'),
(856, '103.194.242.18', 'selva@gmail.com', '$2b$10$6Dja/3psKNdpejrT490.5.D6H.u6M5auLFolwYyau3O', 1, 0, 'Login successful', '2023-04-27 17:25:11', '2023-04-27 11:55:11'),
(857, '103.194.242.18', 'kumar@gmail.com', '$2b$10$iJn9RNjVj6SlKBmGwlQeU.HTaIY451Lh38XLy8gfPCc', 1, 0, 'Login successful', '2023-04-27 17:25:25', '2023-04-27 11:55:25'),
(858, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$VFD5xqDOYiNdOsG2ElzP9.wipK2AZTW80ZABZV4Cfz7', 1, 0, 'Login successful', '2023-04-27 17:27:14', '2023-04-27 11:57:14'),
(859, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$xwmdpB/IaixXPOuTrh98me0eXLN4Xp6tc6o/zsaS21M', 1, 0, 'Login successful', '2023-04-27 17:27:21', '2023-04-27 11:57:21'),
(860, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$kew3uoO0znZq0YCFuianF.7SXkvz28e88XbimHBE82Q', 1, 0, 'Login successful', '2023-04-27 17:28:04', '2023-04-27 11:58:04'),
(861, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$SRKwcrS9lbaBAv8bJCVZhe4SGVVz.fgHIv90BLOYial', 1, 0, 'Login successful', '2023-04-27 17:28:25', '2023-04-27 11:58:25'),
(862, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$BgeFxqI9Vi2XJFHnWGPNl.pMZBPHndk69Qgme.clxgO', 1, 0, 'Login successful', '2023-04-27 17:28:42', '2023-04-27 11:58:42'),
(863, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$i3XUZOBb7vfdXzTeDI2qX.o.nupvvc6rZMYyVY0mWWH', 1, 0, 'Login successful', '2023-04-27 17:50:23', '2023-04-27 12:20:23'),
(864, '103.114.210.211', 'satheesh@gmail.com', '$2b$10$l1dpxa4sgyuaaXxFlZ6uCuvxzJUJHZKEuHR3AX3wqag', 1, 0, 'Login successful', '2023-04-27 18:06:59', '2023-04-27 12:36:59'),
(865, '103.194.242.18', 'kumar@gmail.com', '$2b$10$b2Equ/7NNQrW7RELhmGDHeGhnazgeicKKannwqs4A91', 1, 0, 'Login successful', '2023-04-27 18:11:58', '2023-04-27 12:41:58'),
(866, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$ln.UfXOZMK8yUkojk8wRHO2bdQ5xHfFnF3N4Znpko4X', 1, 0, 'Login successful', '2023-04-27 18:13:26', '2023-04-27 12:43:26'),
(867, '103.194.242.18', 'selva@gmail.com', '$2b$10$N.83HgUaFkIBy0O6ysdkvuEZb2hqdznmtt43FuwN.JO', 1, 0, 'Login successful', '2023-04-27 18:33:50', '2023-04-27 13:03:50'),
(868, '103.114.210.211', 'selva@gmail.com', '$2b$10$OTRvGutpsjI5hvw4V/ccwO.k8m9Fx8HGlM26/b1OY27', 1, 0, 'Login successful', '2023-04-27 18:37:14', '2023-04-27 13:07:14'),
(869, '103.114.210.211', 'kumar@gmail.com', '$2b$10$yD1RTXSfXn/BjDiTa5Jh2eiSJ6OH.09OeG.cVw486id', 1, 0, 'Login successful', '2023-04-27 18:38:55', '2023-04-27 13:08:55'),
(870, '103.194.242.18', 'sanjay@gmail.comm', '$2b$10$skAomwCkD7wqx2FmQKaDB.6RMLQ0dTrvXuD7ngDJgn6', 1, 0, 'Login successful', '2023-04-27 18:53:21', '2023-04-27 13:23:21'),
(871, '103.194.242.18', 'kumar@gmail.com', '$2b$10$udT6UMBXOvpnZB0Gky/FRO1r6wzypJcKkcxIdLDrmn9', 1, 0, 'Login successful', '2023-04-27 18:53:55', '2023-04-27 13:23:55'),
(872, '103.194.242.18', 'sanjay@gmail.comm', '$2b$10$YBb0O0DRIn/9osqD04hJU.eB9ajelnXHe3Yb9jtXfnS', 1, 0, 'Login successful', '2023-04-27 19:41:22', '2023-04-27 14:11:22'),
(873, '203.223.189.230', 'sanjay@gmail.comm', '$2b$10$B2EORDEWR5tvAq5Sn/cAFeQOaS99VJ2y01gdxpnSECn', 1, 0, 'Login successful', '2023-04-27 20:23:39', '2023-04-27 14:53:39'),
(874, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$8WR/g0P0IZWx4Fc40cm7IOsPt.r1Skk0cuWa5VXvsKq', 1, 0, 'Login successful', '2023-04-28 09:15:18', '2023-04-28 03:45:18'),
(875, '103.194.242.18', 'satheesh@gmail.com', '$2b$10$oNlaT965urSixGhK4bXQZ.UtSFF92kmV2b8kYafnwcV', 1, 0, 'Login successful', '2023-04-28 09:23:30', '2023-04-28 03:53:30'),
(876, '103.194.242.18', 'selva@gmail.com', '$2b$10$DX2utxOmjM2IN/iNOwPcGee1BFCNrlIv8S/6WxZgF.6', 1, 0, 'Login successful', '2023-04-28 09:24:03', '2023-04-28 03:54:03'),
(877, '103.194.242.18', 'kumar@gmail.com', '$2b$10$WqwvgxY84FTXSTdnuqUU6u8oK0YhDuPeJnstthXcPfS', 1, 0, 'Login successful', '2023-04-28 09:31:37', '2023-04-28 04:01:37');

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
  `project_manager` varchar(200) CHARACTER SET utf8mb4  DEFAULT NULL,
  `deadline` date NOT NULL,
  `status` varchar(200) CHARACTER SET utf8mb4  NOT NULL,
  `date` date DEFAULT NULL,
  `priority` varchar(100) NOT NULL,
  `description` varchar(250) CHARACTER SET utf8mb4  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `project_name`, `created_dt`, `category`, `client`, `duration`, `start_date`, `end_date`, `project_manager`, `deadline`, `status`, `date`, `priority`, `description`) VALUES
(3, 'DOTE', '2023-01-01', 'Development', 'DOTE', '2023-11-23', '2022-10-22', '2023-11-22', 'Nisha ', '2023-08-01', 'InProgress', '2022-07-24', 'Medium', 'Directorate of Technical Education'),
(4, 'TNPCB', '2022-10-05', 'App Development', 'PCB', '2022-11-27', '1899-11-26', '2023-11-26', 'Satheesh ', '2023-03-15', 'Completed', '2022-03-03', 'High', 'Tamilnadu Pollution Control Board'),
(5, 'KASC', '2022-05-00', 'Website Design', 'KASC', '2022-11-26', '1899-11-26', '1899-11-26', 'Kumar ', '2022-10-01', '', '2022-08-26', 'Low', 'Kongunadu Arts and Science college'),
(6, 'SCET', '2022-06-08', 'App development', 'SCET', '2022-12-29', '1899-11-28', '1899-11-28', 'Ganesh', '2023-01-11', 'Pending', '2022-11-28', 'Medium', 'Sengunthar college'),
(7, 'SREC', '2023-02-01', 'App development', 'SREC', '1899-11-28', '1899-11-28', '1899-11-28', 'Kiruba', '2023-05-01', 'InProgress', '2022-01-28', 'Medium', 'Ramakrishna College');

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
  `punchin_date` date NOT NULL,
  `punchin_time` datetime DEFAULT NULL,
  `punchout_time` datetime DEFAULT NULL,
  `work_hours` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `punchin_punchout`
--

INSERT INTO `punchin_punchout` (`id`, `punchin_date`, `punchin_time`, `punchout_time`, `work_hours`) VALUES
(82, '0000-00-00', '2023-03-17 13:20:20', '2023-03-17 13:20:28', '00:00:08'),
(83, '0000-00-00', '2023-03-17 13:20:56', '2023-03-17 13:22:01', '00:01:04'),
(84, '0000-00-00', '2023-03-17 13:22:53', '2023-03-17 13:22:59', '00:00:06'),
(85, '0000-00-00', '2023-03-17 17:37:34', '2023-03-17 17:44:01', '00:06:27'),
(86, '0000-00-00', '2023-03-17 17:45:24', '2023-03-17 17:45:28', '00:00:03'),
(87, '0000-00-00', '2023-03-17 18:41:25', '2023-03-17 18:41:29', '00:00:04'),
(88, '0000-00-00', '2023-03-17 18:47:51', '2023-03-17 18:47:53', '00:00:02'),
(89, '0000-00-00', '2023-03-17 18:52:54', '2023-03-17 18:52:57', '00:00:02'),
(90, '0000-00-00', '2023-03-17 18:53:56', '2023-03-17 18:54:01', '00:00:04'),
(91, '0000-00-00', '2023-03-17 19:23:23', '2023-03-17 19:25:21', '00:01:58'),
(92, '0000-00-00', '2023-03-20 10:45:33', '2023-03-20 10:55:04', '00:09:30'),
(93, '0000-00-00', '2023-03-20 15:55:46', '2023-03-20 15:58:48', '00:03:01'),
(94, '0000-00-00', '2023-03-23 09:22:05', '2023-03-23 09:27:37', '00:05:32'),
(95, '0000-00-00', '2023-03-23 19:52:43', '2023-03-23 19:52:47', '00:00:04'),
(96, '0000-00-00', '2023-03-24 17:19:31', '2023-03-24 17:19:33', '00:00:02'),
(97, '0000-00-00', '2023-03-28 18:26:03', '2023-03-28 18:26:13', '00:00:10'),
(98, '0000-00-00', '2023-03-28 18:34:14', '2023-03-28 18:34:23', '00:00:08'),
(99, '0000-00-00', '2023-03-28 18:34:36', '2023-03-28 18:34:37', '00:00:00'),
(100, '0000-00-00', '2023-03-28 18:45:55', '2023-03-28 18:45:56', '00:00:01'),
(101, '0000-00-00', '2023-03-31 09:52:24', '2023-03-31 09:52:28', '00:00:03'),
(102, '0000-00-00', '2023-04-13 17:01:03', '2023-04-13 17:01:11', '00:00:08'),
(103, '0000-00-00', '2023-04-27 18:00:42', '2023-04-27 18:00:46', '00:00:03'),
(104, '0000-00-00', '2023-04-27 18:01:39', '2023-04-27 18:01:42', '00:00:02');

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
(21, 'sanjay kumar', 'sanjay@gmail.com', '123456', '123456', '1'),
(22, 'Ubesh K', 'ubesh@gmail.com', 'ubesh123', 'ubesh123', '');

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
  `task_assignperson` varchar(150) CHARACTER SET utf8mb4  NOT NULL,
  `deadline` date NOT NULL,
  `description` varchar(150) NOT NULL,
  `duration` time NOT NULL,
  `assignto` varchar(200) CHARACTER SET utf8mb4  NOT NULL,
  `status` varchar(200) NOT NULL,
  `comments` varchar(200) NOT NULL,
  `created_dt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `task_name`, `client`, `control_code`, `category`, `task_assignperson`, `deadline`, `description`, `duration`, `assignto`, `status`, `comments`, `created_dt`) VALUES
(2, 'academic portal - reg', 'SEC Tiruchengode - COE', 'E-005', '', 'Satheesh', '2023-11-22', 'ENOVA website - need a  resumes or ', '00:00:00', '9', 'InProgress', 'Pending Cust Verifn and closure', '2023-05-18'),
(4, 'KNCET_ERP_Batch 2020_Assignment_Report', 'KNCET - PORTAL', 'N-002', '', 'satheesh', '1899-11-28', 'KNCET Assignment report error', '04:00:00', '4', 'Completed', 'High', '2023-01-09'),
(12, 'Reg fees head settlement...', 'Esec - Non Coe', 'M-001', '', 'Satheesh', '2023-08-15', 'Fix the fee settlement error', '06:05:00', '3', '', 'critical', '2023-01-13'),
(13, 'academic portal - reg', 'SEC Tiruchengode - COE', 'E-006', '', 'Satheesh', '2023-04-03', 'error', '05:00:00', '11', 'InProgress', 'High', '2023-02-01'),
(30, 'E- Academics', 'SEC', 'D-001', '', 'satheesh', '2023-10-27', 'Ticket Number - #13869 - KNCET_ERP_Assignment', '05:00:00', '11', 'Completed', 'Process On', '2023-06-27'),
(32, 'Test', 'KASC', 'D-001', '', 'Satheesh', '2023-04-05', '44545', '08:00:10', '11', '', 'pending', '2023-04-03');

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
  `task_name` varchar(50) CHARACTER SET utf8mb4  NOT NULL,
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
(3, 2, 2, 'sanjay', 'madan', 'sanjay@gmail.comm', 'project manager', '7845789620', 'coimbatore', 'sanjay123', 'Mr.Sanjay madan  have a three years of experience in php mysql and also as a role of Project manager', '1', 'admin', 'admin', '2023-03-06 15:46:43', '2023-03-06 15:46:43'),
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
  MODIFY `client_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=226;

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=878;

--
-- AUTO_INCREMENT for table `master_products`
--
ALTER TABLE `master_products`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `sign_in`
--
ALTER TABLE `sign_in`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

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
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
