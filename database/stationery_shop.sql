-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 02, 2020 at 09:17 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stationery_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `img_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `img_path`) VALUES
(1, 'mail', '/images/Category/Mail.jpg'),
(2, 'give', '/images/Category/Give.jpg'),
(3, 'notes', '/images/Category/Notes.jpg'),
(4, 'write', '/images/Category/Write.jpg'),
(5, 'read', '/images/Category/Read.jpg'),
(6, 'organize', '/images/Category/Organize.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `collection_id` int(11) NOT NULL,
  `collection_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `collections`
--

INSERT INTO `collections` (`collection_id`, `collection_name`) VALUES
(1, 'Spring'),
(2, 'Summer'),
(3, 'Autumn'),
(4, 'Winter');

-- --------------------------------------------------------

--
-- Table structure for table `description`
--

CREATE TABLE `description` (
  `description_id` int(11) NOT NULL,
  `price` double(10,2) NOT NULL,
  `description_text` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `description`
--

INSERT INTO `description` (`description_id`, `price`, `description_text`) VALUES
(1, 12.50, 'A handsome pack of 12 letterpress postcards from Portugal, all featuring an eclectic mix of symbols, illustration & type. Great colours too. Nice for your wall & lovely to share.'),
(2, 13.50, 'For pattern lovers this set of 12 folding notecards is a must. Each card has two patterns and is perforated down the centre, so if you wish they can be split into postcards. Making 24 in total. All the patterns are based on the same grid, & they\'re mighty fine. Packaged in a gradient box with pink lined envelopes.'),
(3, 9.50, 'Packs of 6 string & washer envelopes, available in two colours and sizes:\r\n\r\n• the small envelopes measure 120x80mm.\r\n\r\n• the large envelopes measure 115x170mm\r\n\r\nSelect your favourite & fill with goodness.'),
(4, 4.75, 'A selection of 6 old gummed, or adhesive, address labels. Fill them in, stick them on your letters. Also nice for journalling.\r\n\r\nSizes vary. '),
(5, 1.00, 'Vintage gummed airmail arrows, in perfect condition. 60mm in length.'),
(6, 4.00, 'The happiest mail of them all. Heart eye & smile die cut from thick paper envelope, and inside a blank red card for your missive.'),
(7, 4.00, 'Handy postcards featuring movable silver hands, against a crisp foiled clock face. The card measures 210x148 and the card stock is thick and uncoated. Each one comes with a cream envelope.'),
(8, 12.00, 'A pleasing pad of smooth grain writing paper, designed to resist ink bleed & feathering. The paper was designed for the use of banking records, hence the cover title. Each pad has 100 pages, that\'s a lot of mail, and measures 200x145mm.\r\n\r\nMatching, lined envelopes, in packs of 20 are also available.'),
(9, 6.50, 'They look like labels but these letterpress pieces are little notecards. Can also be used as a neat bookmark. The packs contain 40 and they measure 47x98mm.'),
(10, 3.50, 'Classic manila string & washer envelopes available in 4 sizes. Please choose your favourite.\r\n\r\nC4: 228X323mm\r\n\r\nC5: 162X240mm\r\n\r\nC6: 114X162mm\r\n\r\nDL: 110X220mm'),
(11, 5.50, 'Smart little books of 100 perforated letterpress labels, all decorated with a neat floral border. Made in Japan. There are two sizes to choose from:\r\n\r\n• Large (2.25x5\")\r\n\r\n• Small (3.5x1.5\")\r\n\r\nMade in Japan.'),
(12, 6.50, 'Satisfying stacks of 50 letterpress cards, each with their own patterned border. These are great for notes, memos & scrapbooking. The card dimensions are listed in the drop down selection menu.'),
(13, 6.00, 'An attractive letter set, for superior missives, consisting of 8 sheets and 4 envelopes. The writing sheet measures 210x150mm. Choose your colour.'),
(14, 14.00, 'A super neat box of 20 graph paper envelopes, in 5 different sizes, designed by Present&Correct. For sending, collecting & collating.\r\n\r\nThe different shaped flaps are gummed, with one string/washer closure. Inspired by forms, each one has optional fill-in areas for messages, project labelling etc. \r\n\r\nPresented in a card box with paper band. The long envelope is 105x241mm, the small envelopes is 54x92mm.'),
(15, 1.50, 'Old sheets of 4 adhesive labels, in striking red & blue, for your parcels & letters. Each label measures 25x76mm.'),
(16, 4.00, 'A fun greeting set which features a die cut envelope, into which the printed card slides. As it does, the eyes move! Simple & unique. \r\n\r\n105x148mm'),
(17, 3.50, 'The jolliest card featuring red & blue letter inflatables, the ecological alternative to actual balloons. Blank inside, with a Kraft envelope.'),
(18, 3.75, 'A simple, elegant card for birthday boys and girls. Each one has nice some foiled detailing and a grey envelope for delivery purposes.'),
(19, 4.50, 'Here at P&C we do love a dial, so this birthday card is right up our street. Select what you would like to give, position the dial and pop in an envelope. Simple and fun.'),
(20, 3.50, 'A type heavy card which makes us think of postal marks, letterpressed in blue & red. It\'s graphic, crisp and perfect.\r\n\r\nBlank inside. '),
(21, 4.00, 'Hand over some colourful tickets for cake, birthday bumps & wishes with this fun card. Great colours too.'),
(22, 5.00, 'Possibly the best card in the world. This deep embossed card is a perfect replica of a sandwich biscuit, open it up and you can write your greeting on the filling inside. \r\n\r\nChoose chocolate or vanilla, each one measures 100x80mm.'),
(23, 3.00, 'Like an elegant gift, this Riso printed card is adorned with a simple bow. It\'s neat, it\'s sweet.\r\n\r\nBlank inside. White envelope. '),
(24, 3.00, 'We\'ved teamed up with the brilliant Scout Editions to celebrate iconic calculators.  These Riso printed cards come in four different designs. \r\n\r\nThe inside is blank, and on the screen you can add a message of your choice. '),
(25, 3.50, 'Birthdays mean cake, which mean candles! Three big stripy candles letterpressed onto a card, which is blank inside for your message.'),
(26, 4.00, 'Open up this die cut card to create a delightful black cat. The card is blank inside for your message, and it comes with a white envelope. See also: the mouse card.'),
(27, 3.00, 'A charming folding card, blank inside, featuring a jolly sun. Perfect for any time of year & almost any occasion.'),
(28, 3.00, 'Nothing says \'luck\' like a four leaf clover. A folding card, plain inside, which is graphic & fun.'),
(29, 2.75, 'A simple card featuring one of our favourite graphic devices, the colour wheel. Riso printed, which gives that lovely offset look. It measures 105x80 and is blank inside. By Scout Editions.'),
(30, 5.00, 'Super nice copper tape, made of real metal, which is brilliant for decorating pretty much anything. Alternatively you can wrap it around the base of a plant to keep slugs at bay. Rolls of 4 meters.'),
(31, 3.75, 'Reign supreme with a crown card that you can wear. The ideal accompaniment for mothers day, fathers day, birthdays, tuesday.\r\n\r\nEach card is foiled with the message \'King for the Day\' or \'Queen for the Day\'. Delivered in a matching envelope.'),
(32, 2.75, 'Rainbows, cake, happy oranges. It\'s everything you need for a perfect day. These Riso printed cards, from Scout Editions, measure 105x78mm and are blank inside. Pick your favourite.'),
(33, 42.50, 'Possibly the most pleasing diary ever. A hefty chunk of white paper, each page simply marked with a black number. The cover is bound with a removable plastic protector which also features a front pocket. \r\n\r\nThis book measures 160x230mm, with 368 pages. Flat lay binding. Designed by Marjolein Delhaas. '),
(34, 7.50, 'A new book which harks back to the yesteryear. Beautifully light, onion skin paper, for the flightiest of international letters. The pad measures 18x25cm and there are 50 sheets of white paper. It also has a line guide for vertical & horizontal writing.'),
(35, 7.50, 'Perforated with the letter of your choice, to reveal contrasting inner pages, these notebooks are a perfectly graphic addition to your desktop. Each book is paperback and measures 100x150mm. There are 72 plain, coloured pages per book.'),
(36, 12.00, 'A pleasing pad of smooth grain writing paper, designed to resist ink bleed & feathering. The paper was designed for the use of banking records, hence the cover title. Each pad has 100 pages, that\'s a lot of mail, and measures 200x145mm.\r\n\r\nMatching, lined envelopes, in packs of 20 are also available.'),
(37, 12.50, 'A unique, and lovely, new pad of label designs from Portugal. Hand printed sheets, perforated for easy removal, are not adhesive but each one can be cut out for labelling purposes. Alternatively they can be left as a fun notebook. It measures 200x130mm. Approx 35 pages.'),
(38, 7.50, 'A satisfying brick of paper designed for your day to day lists. Each one is Riso printed with a tick list for you to fill in. Hand bound in London by Before Breakfast. \r\n\r\nThe brick measures 60x60mm and has 100 pages. \r\n\r\nShipping from 20th May.'),
(39, 10.00, 'A handmade, letterpress notebook of mixed papers. Gridded, plain and various colours make up this pleasing book. It measures 13x19cm and has 36 pages.'),
(40, 17.50, 'Print a calendar any day of the year with our new planner stamp. The perpetual grid allows you to mark up dates, with space to write in basic details & a month marker at the bottom (we highlighted with a translucent sticker).\r\n\r\nThe wooden block measures 10cmx10cm. A standard No.3 ink pad will serve you well. '),
(41, 4.00, 'Sets of sticky notes, in simple shapes & smart colours. The backing card measures 10cm square, and each card has around 75 stickies.'),
(42, 9.00, 'A no nonsense, utilitarian classic. The lever arch clip is a nice change from the standard, and these clipboards make an excellent base for a wall calendar. It measures 350x225mm.'),
(43, 12.50, 'Colourful, undated weekly planners which will bring joy to your life and a sense of calm to your schedule. Made in the UK, these have a week to view and month to view format. There are 128 pages in total and also a matching bookmark. \r\n\r\n148x105mm.'),
(44, 20.00, 'You will never lose this bright weekly planner, embellished with brush strokes in very nice colours. Inside you will find week to view pages, month planner and a notes section. 144 pages in total.\r\n\r\nMade in the UK, these measure 210x148mm.'),
(45, 6.75, 'A unique take on the classic ring bound notebook, this time binding along a cut off corner. The ring detail is smart in brass & there are three colours/paper types to choose from.\r\n\r\nSmall_ 70x120mm\r\n\r\nLarge_ 148x210mm.\r\n\r\n50 pages per book. Handmade in Japan.'),
(46, 5.00, 'We think you will agree that the script type on these old Spanish notebooks is Dreamy. Inside there are 32 ruled pages. These books were standard school issue in the 1960s. On the back you will find a useful multiplication chart. \r\n\r\n210x148.5mm'),
(47, 8.00, 'A gloriously graphic ruled pad for letters & notes. The rule is wide (9mm) and light blue. There are 50 pages and this A4 pad is in excellent condition. 297x210mm.'),
(48, 12.00, 'Externally a colourful grid, inside a notebook of 80 ruled pages in 100gsm off white stock. The book measures 167x235mm.'),
(49, 6.50, 'A brilliant 5 hole pencil sharpener for all the family. Sharpen your hamsters crayons or your largest drafting pencil with this one stop tool for the office. Every size fits into this solid block of beech. It\'s a neat, space saving desktop essential. 2.4\"x1\"x2.6\".'),
(50, 7.00, 'Super handy pocket scales, in stainless steel, for measuring on the go. It has a clip for your pocket & these come on the original backing card.'),
(51, 19.50, 'Fantastic sets of rubber stamps, ideal for printing labels, tags, signs & for your journalling purposes.\r\n\r\nThe stamps come in three sizes, the measurements below indicate the letter size that is printed:\r\n\r\nLarge 13mm\r\n\r\nMedium 7mm\r\n\r\nSmall 5mm'),
(52, 6.50, 'Our new rubber stamps celebrate marks from various analog sources. Forms, postal supplies & flash cards have inspired a set of 10 stamps, each measuring 50x30mm. \r\n\r\nMade in the UK. '),
(53, 3.00, 'Colourful arrowhead erasers for popping on the end of your pencil. The shape allows for a more accurate removal, the colour allows for a general enhancement of mood.\r\n\r\nPacks of 6.'),
(54, 2.00, 'Artline pens are blur proof & come in a lovely selection of colours. They write with a 0.4mm line, super fine fibre tipped for drawing and hatching.'),
(55, 27.50, 'Ditch the batteries and do your sums with this excellent adding machine. Made from hard plastic, it features 4 number dials and a pick which you use to select the numbers in your calculations. It measures 200mm width. With original packaging.'),
(56, 6.50, 'Get sharp with these old fashioned bakelite pencil sharpeners. Available in three colours. They have a no nonsense utilitarian appeal and will keep your pencils sharp for years to come.'),
(57, 14.00, 'An unusual, though attractive, eraser from the 1980s which has two retractable ends. One is for pencil, the other for ink. The eraser refill is 8mm, you can purchase these today but the brand may vary.\r\n\r\nOverall the unit measures 145mm.'),
(58, 1.75, 'A satisfyingly chunky pencil from the U.S, with a HB lead and a big round eraser. The pencil has a diameter of 10mm, but it\'s what you do with it that counts.'),
(59, 30.00, 'The premier pencil available as a box of 12. Nicely packaged, sufficient to write your memoirs.\r\n\r\nAvailable individually in our shop.'),
(60, 4.50, 'Available in three colours these erasers will replace the one currently residing in your Blackwing pencil. They come in packs of 10.'),
(61, 30.00, 'The newest permanent member of the Blackwing family. \'Natural\' has an exposed cedar barrel, with a brass ferrule & grey eraser. The graphite is the signature Firm which is also found in their grey pencil.'),
(62, 9.50, 'Two stamp sets for making fun, graphic patterns. The sets are themed, one is circle based & the other is more angular with squares and triangles.\r\n\r\nThe largest stamp in each set measures 35mm square. Ink pad provided. '),
(63, 7.00, 'Cotton & elastic bookbands which are not only stripy but they also have a leather pen holder built in. Pile up your books, keep them neat and never go without a pen. Perfect, simple and very smart. They stretch to over 11\".'),
(64, 8.00, 'Dreamy bottles in minty green containing tapioca glue. It\'s non toxic and perfect for kids and paper. Though not sticking kids to paper.\r\nThe bottle contains 380g, which should keep you going for a while. Acid free.'),
(65, 13.00, 'From our favourite illustrator comes this delightful book \'1000 Things\' which is as simple as it sounds. 1000 illustrated things, all labelled, for teaching small people new words.\r\n285x205mm. Hardback'),
(66, 19.00, 'A combination of two publications from 1935 & 1937, both compiled by artist Sanzo Wada. It takes inspiration from the seasons, and takes palettes from Japanese design heritage (kimonos, paintings, fabric).\r\n\r\nThis incredibly useful, reissued book features over 200 colour combinations. An ideal tool for designers, artists or even if you are decorating your house.\r\n\r\nPaperback 150x110mm. '),
(67, 4.00, 'For your weekend in Amsterdam a pocket sized map, though small it has 43 things to see & do. It folds out to 420x297mm.'),
(68, 7.50, 'A pocket sized gem which houses 105 pages of architectural logos from around the world. It\'s a great source of inspiration and excellent value. The book is paperback and measures 145x105mm.'),
(69, 4.00, 'A great little guide to the German capital, taking in some of our favourite spots. The map highlights 42 very nice things to do and folds out to 420x297mm. Wunderbar!'),
(70, 15.00, 'We have long admired the vast collection of coffee lids, accumulated by Louise Harpman over her years in New York. And now they are preserved in book format.\r\n\r\nIt\'s an interesting look into an every day disposable. Ecologically questionable, but from a design perspective the variety is engrossing. \r\n\r\nThe paperback book has hundreds of examples, alongside patent drawings and design notes. 150x140mm.'),
(71, 25.00, 'First issued in 1972, and designed by Patrick Raynaud, this book is like a game of Misfits but with colours and shape. It is split into three sections, and with 24 pages that creates 72 sections and over 1500 variations! Amazing. \r\n\r\nThe book is hardback and measures 225x180mm. 2019 reissue.'),
(72, 4.00, 'With 34 things to do in the Danish capital your weekend away will not fall short. A beautifully illustrated fold out map, that fits in your pocket. 420x297 when open.'),
(73, 10.00, 'A celebration of graphic design from Japan, featuring 18 different design studios. A book dense with ideas and colour, it is a paperback edition measuring 230x170mm. It has 168 pages.'),
(74, 10.00, 'A celebration of graphic design from Scandinavia, featuring 18 different design studios. A book dense with ideas and colour, it is a paperback edition measuring 230x170mm. It has 168 pages.\r\n\r\nJapanese & Eastern Europe versions are also available.'),
(75, 17.50, 'First published in 1959 this reissued hardback book, from Germany, is a wonderful reference for geometric patterns. 64 pages of mosaics, spirals, hatching and everything in between. 5.5x7\"\r\n\r\nA book on Natural Patterns is also available.'),
(76, 10.00, 'Let them choose with one of our library card gift vouchers. They can be used online, or in our store. Simply choose the value and we will do the rest.\r\n\r\nIf you prefer an E-Certificate drop us a line through our contact page once the order is placed. \r\n\r\nNo expiration date. Card colour may vary.'),
(77, 11.50, 'Published in 1979 this pocket hardback explains all you need to know about computers. It has some great photos, and neat diagrams. 52 pages. 175x115mm.'),
(78, 13.50, 'First published in 1956 \'I know a lot of things\' is a classic picture book which celebrates the many things that children know about the world, whilst looking forward to a time when they will know more. Overflowing with lovely illustrations, by Paul Rand, it is bold, fun and educational. Hardback book.'),
(79, 40.00, 'A reissue of the classic book from print master Karel Martens. It chronicles his career,  ; prints, patterns, book covers, stamps, fabrics & on. \r\n\r\n170x230mm, paperback with 280 pages. Beautiful exposed binding. '),
(80, 30.00, 'A fun book from a series exploring science, designed for children though illustrated for all. Hardback, in excellent condition, it looks at the senses in a bright palette of lime, blue, black & white. \r\n\r\n200x185mm.'),
(81, 11.00, 'This diary is our long time favourite, used annually for our dates & lists. For 2020 we have three colours.\r\n\r\nThe book features week to view & month to view, as well as generous notes pages and maps. Each diary also has a plastic protective cover and runs from October 1st 2019 to January 5th 2021.\r\n\r\n150x105mm\r\n\r\nFREE SHIPPING!'),
(82, 120.00, 'A magnificent oak desk tray make up of three beautiful sliding tiers, into which you can store paperwork and office equipment. The tray is made of unfinished oak, a lovely colour, and is produced in Denmark. \r\n\r\nIt measures 28x40x21cm. Each tray measures 24x32cm, allowing for A4 paper sheets. '),
(83, 42.50, 'Possibly the most pleasing diary ever. A hefty chunk of white paper, each page simply marked with a black number. The cover is bound with a removable plastic protector which also features a front pocket. \r\n\r\nThis book measures 160x230mm, with 368 pages. Flat lay binding. Designed by Marjolein Delhaas. '),
(84, 14.50, 'These old Naval containers were most likely used for perishables, but we couldn\'t resist their aesthetic and pleasing twist top lid. Each one measures 110mm diameter, and 40mm high. Stack them up & stash your office sundries in them. '),
(85, 9.00, 'Minimal desk trays, in two sizes, made from pressed aluminium. Nice as a pair, great on their own. Choose your size. Both trays have a depth of 35mm.'),
(86, 38.50, 'Originally patented in 1943, the 520/E may be compact but it is not faint hearted. It can staple up to 40 sheets and uses the standard 24/6 size. It comes with 1000 staples but they are also available separately. Made in Italy from aluminium. It measures 120x65x95mm.'),
(87, 12.00, 'Made in the 1940s these sturdy ball bearing clips make a brilliant picture hanger, also good for general office use. Collectible clips in perfect condition, we currently have two sizes available.'),
(88, 35.00, 'A solid, practical tape dispenser for reels up to 1\" wide and with an internal diameter of 2\".\r\n\r\nMade of steel, it will stand the test of time aesthetically and practically. Can also be attached to a wall.'),
(89, 5.00, 'A classic, sprung metal clip that attaches to any notebook or folder. Slide in your pen/pencil & away you go.'),
(90, 8.00, 'Brass clips perfect for hanging images and memos on any metallic surface. A box of 4 clips, each clip measures 5cm long.'),
(91, 6.50, 'A clip for every occasion with these very smart brass creations. With four models to choose from these will set you up for life. Sizes as follows:\r\n\r\nBulldog – 7.5cm\r\n\r\nCrocodile Large – 11.5cm\r\n\r\nCrocodile Small – 8cm\r\n\r\nSpoon – 17.5cm'),
(92, 14.50, 'Use these solid brass index clips to ensure maximum efficiency throughout your books and files. Each clip has a space to allow for a custom label. Simply insert a bit of paper and write as you wish. Pack of 6. Each clip measures 27x30mm.'),
(93, 7.50, 'A simple little device which you can stand your pencil in. The solid brass holder is fitted with a strong magnet, and it will hold your pencil (or pen) ready for use. It measures 26mm across, at the widest point.'),
(94, 64.50, 'Extend your desk with a clamp tray. Beautifully made from steel, powder coated in matt colour, with brass screw detailing beneath. \r\n\r\nThere are two sizes available and four colours. A unique addition to your office, for potted plants, pen tides or as a stash for small sundries. The clamp part will fit any shelf, the maximum thickness is 73mm.\r\n\r\nSmall: 150mm diameter \r\n\r\nLarge: 250mm diameter\r\n\r\nWe are the only UK stockist of these lovely things. '),
(95, 14.50, 'A foiled wallet of 20 historical paperclips, in brass & silver. Each clip is dated on the front, for future reference, along with some interesting background information inside. The clips are around 1\" in length.\r\n\r\nA collaboration with Princeton Architectural Press. '),
(96, 11.50, 'For the love of paperclips, a card featuring a selection of new & old designs. All different, 12 in total. Presented in a glassine envelope.\r\n\r\nPlease note: clips may vary depending on availability. There will always be at least 12, and they will always be nice.');

-- --------------------------------------------------------

--
-- Table structure for table `group_product`
--

CREATE TABLE `group_product` (
  `group_id` int(11) NOT NULL,
  `img_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group_product`
--

INSERT INTO `group_product` (`group_id`, `img_path`) VALUES
(1, '/images/RelatedProducts/1_1.jpg'),
(1, '/images/RelatedProducts/1_2.jpg'),
(1, '/images/RelatedProducts/1_3.jpg'),
(2, '/images/RelatedProducts/2_1.jpg'),
(2, '/images/RelatedProducts/2_2.jpg'),
(2, '/images/RelatedProducts/2_3.jpg'),
(2, '/images/RelatedProducts/2_4.jpg'),
(3, '/images/RelatedProducts/3_1.jpg'),
(3, '/images/RelatedProducts/3_2.jpg'),
(3, '/images/RelatedProducts/3_3.jpg'),
(7, '/images/RelatedProducts/7_1.jpg'),
(7, '/images/RelatedProducts/7_2.jpg'),
(8, '/images/RelatedProducts/8_1.jpg'),
(8, '/images/RelatedProducts/8_2.jpg'),
(8, '/images/RelatedProducts/8_3.jpg'),
(10, '/images/RelatedProducts/10_1.jpg'),
(10, '/images/RelatedProducts/10_2.jpg'),
(12, '/images/RelatedProducts/12_1.jpg'),
(12, '/images/RelatedProducts/12_2.jpg'),
(14, '/images/RelatedProducts/14_1.jpg'),
(14, '/images/RelatedProducts/14_2.jpg'),
(14, '/images/RelatedProducts/14_3.jpg'),
(14, '/images/RelatedProducts/14_4.jpg'),
(14, '/images/RelatedProducts/14_5.jpg'),
(22, '/images/RelatedProducts/22_1.jpg'),
(22, '/images/RelatedProducts/22_2.jpg'),
(24, '/images/RelatedProducts/24_1.jpg'),
(24, '/images/RelatedProducts/24_2.jpg'),
(24, '/images/RelatedProducts/24_3.jpg'),
(31, '/images/RelatedProducts/31_1.jpg'),
(31, '/images/RelatedProducts/31_2.jpg'),
(33, '/images/RelatedProducts/33_1.jpg'),
(33, '/images/RelatedProducts/33_2.jpg'),
(33, '/images/RelatedProducts/33_3.jpg'),
(33, '/images/RelatedProducts/33_4.jpg'),
(35, '/images/RelatedProducts/35_1.jpg'),
(35, '/images/RelatedProducts/35_2.jpg'),
(35, '/images/RelatedProducts/35_3.jpg'),
(35, '/images/RelatedProducts/35_4.jpg'),
(36, '/images/RelatedProducts/36_1.jpg'),
(36, '/images/RelatedProducts/36_2.jpg'),
(36, '/images/RelatedProducts/36_3.jpg'),
(37, '/images/RelatedProducts/37_1.jpg'),
(37, '/images/RelatedProducts/37_2.jpg'),
(37, '/images/RelatedProducts/37_3.jpg'),
(37, '/images/RelatedProducts/37_4.jpg'),
(38, '/images/RelatedProducts/38_1.jpg'),
(38, '/images/RelatedProducts/38_2.jpg'),
(39, '/images/RelatedProducts/39_1.jpg'),
(39, '/images/RelatedProducts/39_2.jpg'),
(39, '/images/RelatedProducts/39_3.jpg'),
(39, '/images/RelatedProducts/39_4.jpg'),
(40, '/images/RelatedProducts/40_1.jpg'),
(40, '/images/RelatedProducts/40_2.jpg'),
(40, '/images/RelatedProducts/40_3.jpg'),
(43, '/images/RelatedProducts/43_1.jpg'),
(43, '/images/RelatedProducts/43_2.jpg'),
(43, '/images/RelatedProducts/43_3.jpg'),
(44, '/images/RelatedProducts/44_1.jpg'),
(44, '/images/RelatedProducts/44_2.jpg'),
(54, '/images/RelatedProducts/54_1.jpg'),
(54, '/images/RelatedProducts/54_2.jpg'),
(62, '/images/RelatedProducts/62_1.jpg'),
(62, '/images/RelatedProducts/62_2.jpg'),
(63, '/images/RelatedProducts/63_1.jpg'),
(63, '/images/RelatedProducts/63_2.jpg'),
(65, '/images/RelatedProducts/65_1.jpg'),
(65, '/images/RelatedProducts/65_2.jpg'),
(65, '/images/RelatedProducts/65_3.jpg'),
(65, '/images/RelatedProducts/65_4.jpg'),
(65, '/images/RelatedProducts/65_5.jpg'),
(66, '/images/RelatedProducts/66_1.jpg'),
(66, '/images/RelatedProducts/66_2.jpg'),
(66, '/images/RelatedProducts/66_3.jpg'),
(66, '/images/RelatedProducts/66_4.jpg'),
(68, '/images/RelatedProducts/68_1.jpg'),
(68, '/images/RelatedProducts/68_2.jpg'),
(68, '/images/RelatedProducts/68_3.jpg'),
(68, '/images/RelatedProducts/68_4.jpg'),
(69, '/images/RelatedProducts/69_1.jpg'),
(69, '/images/RelatedProducts/69_2.jpg'),
(69, '/images/RelatedProducts/69_3.jpg'),
(70, '/images/RelatedProducts/70_1.jpg'),
(70, '/images/RelatedProducts/70_2.jpg'),
(70, '/images/RelatedProducts/70_3.jpg'),
(71, '/images/RelatedProducts/71_1.jpg'),
(71, '/images/RelatedProducts/71_2.jpg'),
(71, '/images/RelatedProducts/71_3.jpg'),
(73, '/images/RelatedProducts/73_1.jpg'),
(73, '/images/RelatedProducts/73_2.jpg'),
(73, '/images/RelatedProducts/73_3.jpg'),
(73, '/images/RelatedProducts/73_4.jpg'),
(74, '/images/RelatedProducts/74_1.jpg'),
(74, '/images/RelatedProducts/74_2.jpg'),
(74, '/images/RelatedProducts/74_3.jpg'),
(75, '/images/RelatedProducts/75_1.jpg'),
(75, '/images/RelatedProducts/75_2.jpg'),
(75, '/images/RelatedProducts/75_3.jpg'),
(75, '/images/RelatedProducts/75_4.jpg'),
(77, '/images/RelatedProducts/77_1.jpg'),
(77, '/images/RelatedProducts/77_2.jpg'),
(77, '/images/RelatedProducts/77_3.jpg'),
(77, '/images/RelatedProducts/77_4.jpg'),
(77, '/images/RelatedProducts/77_5.jpg'),
(78, '/images/RelatedProducts/78_1.jpg'),
(78, '/images/RelatedProducts/78_2.jpg'),
(78, '/images/RelatedProducts/78_3.jpg'),
(78, '/images/RelatedProducts/78_4.jpg'),
(78, '/images/RelatedProducts/78_5.jpg'),
(79, '/images/RelatedProducts/79_1.jpg'),
(79, '/images/RelatedProducts/79_2.jpg'),
(79, '/images/RelatedProducts/79_3.jpg'),
(79, '/images/RelatedProducts/79_4.jpg'),
(80, '/images/RelatedProducts/80_1.jpg'),
(80, '/images/RelatedProducts/80_2.jpg'),
(80, '/images/RelatedProducts/80_3.jpg'),
(80, '/images/RelatedProducts/80_4.jpg'),
(81, '/images/RelatedProducts/81_1.jpg'),
(81, '/images/RelatedProducts/81_2.jpg'),
(81, '/images/RelatedProducts/81_3.jpg'),
(82, '/images/RelatedProducts/82_1.jpg'),
(82, '/images/RelatedProducts/82_2.jpg'),
(83, '/images/RelatedProducts/83_1.jpg'),
(83, '/images/RelatedProducts/83_2.jpg'),
(83, '/images/RelatedProducts/83_3.jpg'),
(86, '/images/RelatedProducts/86_1.jpg'),
(86, '/images/RelatedProducts/86_2.jpg'),
(92, '/images/RelatedProducts/92_1.jpg'),
(92, '/images/RelatedProducts/92_2.jpg'),
(92, '/images/RelatedProducts/92_3.jpg'),
(94, '/images/RelatedProducts/94_1.jpg'),
(94, '/images/RelatedProducts/94_2.jpg'),
(94, '/images/RelatedProducts/94_3.jpg'),
(94, '/images/RelatedProducts/94_4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `img_id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`img_id`, `path`) VALUES
(1, '/images/Products/1.jpg'),
(10, '/images/Products/10.jpg'),
(11, '/images/Products/11.jpg'),
(12, '/images/Products/12.jpg'),
(13, '/images/Products/13.jpg'),
(14, '/images/Products/14.jpg'),
(15, '/images/Products/15.jpg'),
(16, '/images/Products/16.jpg'),
(17, '/images/Products/17.jpg'),
(18, '/images/Products/18.jpg'),
(19, '/images/Products/19.jpg'),
(2, '/images/Products/2.jpg'),
(20, '/images/Products/20.jpg'),
(21, '/images/Products/21.jpg'),
(22, '/images/Products/22.jpg'),
(23, '/images/Products/23.jpg'),
(24, '/images/Products/24.jpg'),
(25, '/images/Products/25.jpg'),
(26, '/images/Products/26.jpg'),
(27, '/images/Products/27.jpg'),
(28, '/images/Products/28.jpg'),
(29, '/images/Products/29.jpg'),
(3, '/images/Products/3.jpg'),
(30, '/images/Products/30.jpg'),
(31, '/images/Products/31.jpg'),
(32, '/images/Products/32.jpg'),
(33, '/images/Products/33.jpg'),
(34, '/images/Products/34.jpg'),
(35, '/images/Products/35.jpg'),
(36, '/images/Products/36.jpg'),
(37, '/images/Products/37.jpg'),
(38, '/images/Products/38.jpg'),
(39, '/images/Products/39.jpg'),
(4, '/images/Products/4.jpg'),
(40, '/images/Products/40.jpg'),
(41, '/images/Products/41.jpg'),
(42, '/images/Products/42.jpg'),
(43, '/images/Products/43.jpg'),
(44, '/images/Products/44.jpg'),
(45, '/images/Products/45.jpg'),
(46, '/images/Products/46.jpg'),
(47, '/images/Products/47.jpg'),
(48, '/images/Products/48.jpg'),
(49, '/images/Products/49.jpg'),
(5, '/images/Products/5.jpg'),
(50, '/images/Products/50.jpg'),
(51, '/images/Products/51.jpg'),
(52, '/images/Products/52.jpg'),
(53, '/images/Products/53.jpg'),
(54, '/images/Products/54.jpg'),
(55, '/images/Products/55.jpg'),
(56, '/images/Products/56.jpg'),
(57, '/images/Products/57.jpg'),
(58, '/images/Products/58.jpg'),
(59, '/images/Products/59.jpg'),
(6, '/images/Products/6.jpg'),
(60, '/images/Products/60.jpg'),
(61, '/images/Products/61.jpg'),
(62, '/images/Products/62.jpg'),
(63, '/images/Products/63.jpg'),
(64, '/images/Products/64.jpg'),
(65, '/images/Products/65.jpg'),
(66, '/images/Products/66.jpg'),
(67, '/images/Products/67.jpg'),
(68, '/images/Products/68.jpg'),
(69, '/images/Products/69.jpg'),
(7, '/images/Products/7.jpg'),
(70, '/images/Products/70.jpg'),
(71, '/images/Products/71.jpg'),
(72, '/images/Products/72.jpg'),
(73, '/images/Products/73.jpg'),
(74, '/images/Products/74.jpg'),
(75, '/images/Products/75.jpg'),
(76, '/images/Products/76.jpg'),
(77, '/images/Products/77.jpg'),
(78, '/images/Products/78.jpg'),
(79, '/images/Products/79.jpg'),
(8, '/images/Products/8.jpg'),
(80, '/images/Products/80.jpg'),
(81, '/images/Products/81.jpg'),
(82, '/images/Products/82.jpg'),
(83, '/images/Products/83.jpg\r\n'),
(84, '/images/Products/84.jpg'),
(85, '/images/Products/85.jpg'),
(86, '/images/Products/86.jpg'),
(87, '/images/Products/87.jpg'),
(88, '/images/Products/88.jpg'),
(89, '/images/Products/89.jpg'),
(9, '/images/Products/9.jpg'),
(90, '/images/Products/90.jpg'),
(91, '/images/Products/91.jpg'),
(92, '/images/Products/92.jpg'),
(93, '/images/Products/93.jpg'),
(94, '/images/Products/94.jpg'),
(95, '/images/Products/95.jpg'),
(96, '/images/Products/96.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL,
  `cart_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `description_id` int(11) NOT NULL,
  `collection_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `options` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `name`, `img_id`, `category_id`, `description_id`, `collection_id`, `group_id`, `options`, `date`) VALUES
(1, '12 Letterpress Postcards', 1, 1, 1, NULL, 1, 1, '2020-06-28'),
(2, '12 x Sigrid Calon Notecards', 2, 1, 2, NULL, 2, 1, '2020-06-28'),
(3, '6 Washer Envelopes', 3, 1, 3, NULL, 3, 1, '2020-06-28'),
(4, 'Address Labels', 4, 1, 4, NULL, NULL, NULL, '2020-06-28'),
(5, 'Airmail Label', 5, 1, 5, NULL, NULL, NULL, '2020-06-28'),
(6, 'Heart Eyes Envelope & Card', 6, 1, 6, NULL, NULL, NULL, '2020-06-28'),
(7, 'Clock Postcard\r\n', 7, 1, 7, NULL, 7, 1, '2020-06-28'),
(8, 'Bank Paper Mail Supplies', 8, 1, 8, NULL, 8, 1, '2020-06-28'),
(9, 'Label Cards', 9, 1, 9, NULL, NULL, NULL, '2020-06-28'),
(10, 'Large String Washer Envelope', 10, 1, 10, NULL, 10, 1, '2020-06-28'),
(11, 'Letterpress Book of Labels', 11, 1, 11, NULL, NULL, NULL, '2020-06-28'),
(12, 'Letterpress Border Cards', 12, 1, 12, NULL, 12, 1, '2020-06-28'),
(13, 'Letterpress Writing Set', 13, 1, 13, NULL, NULL, NULL, '2020-06-28'),
(14, 'Mail Box Graph Envelopes (x20)', 14, 1, 14, NULL, 14, 1, '2020-06-28'),
(15, 'Mailing Labels', 15, 1, 15, NULL, NULL, NULL, '2020-06-28'),
(16, 'Peek Envelope', 16, 1, 16, NULL, NULL, NULL, '2020-06-28'),
(17, 'Birthday Balloons', 17, 2, 17, NULL, NULL, NULL, '2020-06-15'),
(18, 'Birthday Boy/Girl Card', 18, 2, 18, NULL, NULL, NULL, '2020-06-15'),
(19, 'Birthday Dial Card', 19, 2, 19, NULL, NULL, NULL, '2020-06-15'),
(20, 'Birthday Postmark Card', 20, 2, 20, NULL, NULL, NULL, '2020-06-15'),
(21, 'Birthday Ticket Card', 21, 2, 21, NULL, NULL, NULL, '2020-06-15'),
(22, 'Biscuit Card', 22, 2, 22, NULL, 22, 1, '2020-06-15'),
(23, 'Bow Card', 23, 2, 23, NULL, NULL, NULL, '2020-06-15'),
(24, 'Calculator Cards', 24, 2, 24, NULL, 24, 1, '2020-06-15'),
(25, 'Candles Card', 25, 2, 25, NULL, NULL, NULL, '2020-06-15'),
(26, 'Cat Card', 26, 2, 26, NULL, NULL, NULL, '2020-06-15'),
(27, 'Cheery Sun Card', 27, 2, 27, NULL, NULL, NULL, '2020-06-15'),
(28, 'Clover Luck Card', 28, 2, 28, NULL, NULL, NULL, '2020-06-15'),
(29, 'Colour Wheel Card', 29, 2, 29, NULL, NULL, NULL, '2020-06-15'),
(30, 'Copper Tape', 30, 2, 30, NULL, NULL, NULL, '2020-06-15'),
(31, 'Crown Card', 31, 2, 31, NULL, 31, 1, '2020-06-15'),
(32, 'Happy Cards', 32, 2, 32, NULL, NULL, NULL, '2020-06-15'),
(33, '365 Journal', 33, 3, 33, NULL, 33, 1, '2020-06-16'),
(34, 'Airmail Pad', 34, 3, 34, NULL, NULL, NULL, '2020-06-16'),
(35, 'Alphabet Notebook', 35, 3, 35, NULL, 35, 1, '2020-06-16'),
(36, 'Bank Paper Mail Supplies', 36, 3, 36, NULL, 36, 1, '2020-06-16'),
(37, 'Bloco Etiqueta', 37, 3, 37, NULL, 37, 1, '2020-06-16'),
(38, 'Brick List', 38, 3, 38, NULL, 38, 1, '2020-06-16'),
(39, 'Caderno Sortido', 39, 3, 39, NULL, 39, 1, '2020-06-16'),
(40, 'Calendar Rubber Stamp', 40, 3, 40, NULL, 40, 1, '2020-06-16'),
(41, 'Circle / Triangle Sticky Notes', 41, 3, 41, NULL, NULL, NULL, '2020-06-16'),
(42, 'Classic Clipboard', 42, 3, 42, NULL, NULL, NULL, '2020-06-16'),
(43, 'Completist Weekly Planner', 43, 3, 43, NULL, 43, 1, '2020-06-16'),
(44, 'Completist Weekly Planner (L)', 44, 3, 44, NULL, 44, 1, '2020-06-16'),
(45, 'Corner Notebook', 45, 3, 45, NULL, NULL, NULL, '2020-06-16'),
(46, 'Cuaderno (1960s)', 46, 3, 46, NULL, NULL, NULL, '2020-06-16'),
(47, 'DDR Hauspost Pad (1970s)', 47, 3, 47, NULL, NULL, NULL, '2020-06-16'),
(48, 'Grid Ruled Notebook', 48, 3, 48, NULL, NULL, NULL, '2020-06-16'),
(49, '5 Hole Pencil Sharpener', 49, 4, 49, NULL, NULL, NULL, '2020-06-17'),
(50, '6\" Pocket Scale (1970s)', 50, 4, 50, NULL, NULL, NULL, '2020-06-17'),
(51, 'Alphabet Rubber Stamps', 51, 4, 51, NULL, NULL, NULL, '2020-06-17'),
(52, 'Analog Rubber Stamps', 52, 4, 52, NULL, NULL, NULL, '2020-06-17'),
(53, 'Arrowhead Erasers', 53, 4, 53, NULL, NULL, NULL, '2020-06-17'),
(54, 'Artline Pens (Cold)', 54, 4, 54, NULL, 54, 1, '2020-06-17'),
(55, 'Automatic Adding Machine (1950s)', 55, 4, 55, NULL, NULL, NULL, '2020-06-17'),
(56, 'Bakelite Pencil Sharpener', 56, 4, 56, NULL, NULL, NULL, '2020-06-17'),
(57, 'Bi-Rasor (1980s)', 57, 4, 57, NULL, NULL, NULL, '2020-06-17'),
(58, 'Big Dipper Jumbo Pencil', 58, 4, 58, NULL, NULL, NULL, '2020-06-17'),
(59, 'Blackwing Box of 12', 59, 4, 59, NULL, NULL, NULL, '2020-06-17'),
(60, 'Blackwing Eraser Refills', 60, 4, 60, NULL, NULL, NULL, '2020-06-17'),
(61, 'Blackwing Natural', 61, 4, 61, NULL, NULL, NULL, '2020-06-17'),
(62, 'Block Shape Stamp Set', 62, 4, 62, NULL, 62, 1, '2020-06-17'),
(63, 'Book Band', 63, 4, 63, NULL, 63, 1, '2020-06-17'),
(64, 'Bottle of Glue', 64, 4, 64, NULL, NULL, NULL, '2020-06-17'),
(65, '1000 Things', 65, 5, 65, NULL, 65, 1, '2020-06-18'),
(66, 'A Dictionary of Colour Combinations Vol 2', 66, 5, 66, NULL, 66, 1, '2020-06-18'),
(67, 'Amsterdam Map', 67, 5, 67, NULL, NULL, NULL, '2020-06-18'),
(68, 'Architectural Logos', 68, 5, 68, NULL, 68, 1, '2020-06-18'),
(69, 'Berlin Map', 69, 5, 69, NULL, 69, 1, '2020-06-18'),
(70, 'Coffee Lids.', 70, 5, 70, NULL, 70, 1, '2020-06-18'),
(71, 'Colour Forms', 71, 5, 71, NULL, 71, 1, '2020-06-18'),
(72, 'Copenhagen Map', 72, 5, 72, NULL, NULL, NULL, '2020-06-18'),
(73, 'From Eastern Europe', 73, 5, 73, NULL, 73, 1, '2020-06-18'),
(74, 'From Scandinavia', 74, 5, 74, NULL, 74, 1, '2020-06-18'),
(75, 'Geometric Pattern Book', 75, 5, 75, NULL, 75, 1, '2020-06-18'),
(76, 'Gift Voucher', 76, 5, 76, NULL, NULL, NULL, '2020-06-18'),
(77, 'How it works... the computer (1979)', 77, 5, 77, NULL, 77, 1, '2020-06-18'),
(78, 'I Know A Lot of Things', 78, 5, 78, NULL, 78, 1, '2020-06-18'),
(79, 'Karel Martens Reprinted Matter (2019)', 79, 5, 79, NULL, 79, 1, '2020-06-18'),
(80, 'My Five Senses (1962)', 80, 5, 80, NULL, 80, 1, '2020-06-18'),
(81, '2020 Linen Bound Diary', 81, 6, 81, NULL, 81, 1, '2020-06-19'),
(82, '3 Tier Oak Desk Tray', 82, 6, 82, NULL, 82, 1, '2020-06-19'),
(83, '365 Journal', 83, 6, 83, NULL, 83, 1, '2020-06-19'),
(84, 'Aluminium Container', 84, 6, 84, NULL, NULL, NULL, '2020-06-19'),
(85, 'Aluminium Desk Tray', 85, 6, 85, NULL, NULL, NULL, '2020-06-19'),
(86, 'Arc Stapler', 86, 6, 86, NULL, 86, 1, '2020-06-19'),
(87, 'Bearing Clip (1940s)', 87, 6, 87, NULL, NULL, NULL, '2020-06-19'),
(88, 'Block Tape Dispenser', 88, 6, 88, NULL, NULL, NULL, '2020-06-19'),
(89, 'Book Clip', 89, 6, 89, NULL, NULL, NULL, '2020-06-19'),
(90, 'Brass Clip Magnets', 90, 6, 90, NULL, NULL, NULL, '2020-06-19'),
(91, 'Brass Clips', 91, 6, 91, NULL, NULL, NULL, '2020-06-19'),
(92, 'Brass Index Clips', 92, 6, 92, NULL, 92, 1, '2020-06-19'),
(93, 'Brass Pencil Holder', 93, 6, 93, NULL, NULL, NULL, '2020-06-19'),
(94, 'Clamp Tray', 94, 6, 94, NULL, 94, 1, '2020-06-19'),
(95, 'Clip Art', 95, 6, 95, NULL, NULL, NULL, '2020-06-19'),
(96, 'Clip Strip', 96, 6, 96, NULL, NULL, NULL, '2020-06-19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`collection_id`);

--
-- Indexes for table `description`
--
ALTER TABLE `description`
  ADD PRIMARY KEY (`description_id`);

--
-- Indexes for table `group_product`
--
ALTER TABLE `group_product`
  ADD PRIMARY KEY (`group_id`,`img_path`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`img_id`),
  ADD UNIQUE KEY `path` (`path`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD UNIQUE KEY `cart_id` (`cart_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `img_id` (`img_id`),
  ADD UNIQUE KEY `description_id` (`description_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `collection_id` (`collection_id`),
  ADD KEY `group_id` (`group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`img_id`) REFERENCES `image` (`img_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`description_id`) REFERENCES `description` (`description_id`),
  ADD CONSTRAINT `product_ibfk_4` FOREIGN KEY (`collection_id`) REFERENCES `collections` (`collection_id`),
  ADD CONSTRAINT `product_ibfk_5` FOREIGN KEY (`group_id`) REFERENCES `group_product` (`group_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
