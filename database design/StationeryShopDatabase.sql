CREATE TABLE `product` (
  `product_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `img_id` int UNIQUE NOT NULL,
  `category_id` int UNIQUE NOT NULL,
  `description_id` int UNIQUE NOT NULL
);

CREATE TABLE `image` (
  `img_id` int PRIMARY KEY AUTO_INCREMENT,
  `path` varchar(255) NOT NULL
);

CREATE TABLE `category` (
  `category_id` int PRIMARY KEY AUTO_INCREMENT,
  `cartegory_name` varchar(255) NOT NULL
);

CREATE TABLE `description` (
  `description_id` int PRIMARY KEY AUTO_INCREMENT,
  `price` decimal NOT NULL,
  `description_text` varchar(255) NOT NULL
);

CREATE TABLE `order` (
  `order_id` int PRIMARY KEY AUTO_INCREMENT,
  `last_name` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `date` datetime,
  `cart_id` int UNIQUE NOT NULL
);

CREATE TABLE `cart` (
  `cart_id` int PRIMARY KEY,
  `product_id` int NOT NULL,
  `quantity` int
);

ALTER TABLE `image` ADD FOREIGN KEY (`img_id`) REFERENCES `product` (`img_id`);

ALTER TABLE `category` ADD FOREIGN KEY (`category_id`) REFERENCES `product` (`category_id`);

ALTER TABLE `description` ADD FOREIGN KEY (`description_id`) REFERENCES `product` (`description_id`);

ALTER TABLE `order` ADD FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`);

ALTER TABLE `product` ADD FOREIGN KEY (`product_id`) REFERENCES `cart` (`product_id`);
