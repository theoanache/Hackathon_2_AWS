DROP DATABASE IF EXISTS hackathon;
CREATE DATABASE hackathon;
USE hackathon;

CREATE TABLE `user` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `firstname` varchar(100)  NOT NULL ,
    `lastname` varchar(100)  NOT NULL,
    `firm` varchar(100) NULL ,
    `country` varchar(100) NULL ,
    `city_id` INT  NULL ,
    `street` varchar(500)  NULL ,
    `driving_licence` varchar(500)  NULL ,
    `email` varchar(100)  NOT NULL ,
    `mobile` varchar(100)  NULL ,
    `password` varchar(100)  NOT NULL ,
    `photo` varchar(500) NULL ,
    `role_id` INT  NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `admin` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `firstname` varchar(100)  NOT NULL ,
    `lastname` varchar(100)  NOT NULL ,
    `email` varchar(100)  NOT NULL ,
    `mobile` varchar(100)  NULL ,
    `password` varchar(100)  NOT NULL ,
    `role_id` INT  NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `role` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `type` varchar(100)  NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `city` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `name` varchar(100)  NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `vehicle` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `type` varchar(100) NOT NULL ,
    `model` varchar(100) NOT NULL ,
    `description` varchar(500) NOT NULL ,
    `capacity` INT NOT NULL ,
    `year` INT NOT NULL ,
    `mileage` INT NOT NULL ,
    `fuel` varchar(100) NOT NULL ,
    `gearbox` varchar(100) NOT NULL ,
    `maxspeed` INT NOT NULL ,
    `wheel` INT NOT NULL ,
    `price` INT NOT NULL ,
    `color` varchar(100) NOT NULL ,
    `city_id` INT NULL ,
    `user_id` INT  NULL ,
    `photo` varchar(500)  NULL ,
    `startdate` date  NULL ,
    `enddate` date  NULL ,
    PRIMARY KEY (
        `id`
    )
);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_city_id` FOREIGN KEY(`city_id`)
REFERENCES `city` (`id`);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_role_id` FOREIGN KEY(`role_id`)
REFERENCES `role` (`id`);

ALTER TABLE `admin` ADD CONSTRAINT `fk_admin_role_id` FOREIGN KEY(`role_id`)
REFERENCES `role` (`id`);

ALTER TABLE `vehicle` ADD CONSTRAINT `fk_vehicle_city_id` FOREIGN KEY(`city_id`)
REFERENCES `city` (`id`);

ALTER TABLE `vehicle` ADD CONSTRAINT `fk_vehicle_user_id` FOREIGN KEY(`user_id`)
REFERENCES `user` (`id`);

INSERT INTO hackathon.city (name) VALUES
	 ('Bordeaux'),
	 ('Roswell'),
	 ('Liverpool'),
	 ('Tengboch'),
	 ('Atlantide'),
	 ('Tsenacommacah'),
	 ('Gotham'),
	 ('Cappadoce'),
	 ('Tortuga'),
	 ('Bouzolles');

   INSERT INTO hackathon.`role` (`type`) VALUES
	 ('user'),
	 ('admin');

INSERT INTO hackathon.admin (firstname,lastname,email,mobile,password,role_id) VALUES
	 ('Camille','Lestrange','camill.lestrange@orange.fr','07 65 45 66','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM',2),
	 ('Benjamin','Button','benji_button@yahoo.fr','06 76 55 65 45','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM',2);


INSERT INTO hackathon.`user` (firstname,lastname,firm,country,city_id,street,driving_licence,email,mobile,password,photo,role_id) VALUES
	 ('Bertrande','Breuvage',NULL,'France',1,'Rue Lucien Faure',NULL,'b_breuvage@mail.fr','06 23 44 33 76','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',1),
	 ('Julien','Gorgonzolli',NULL,'Great Britain',3,'Abbey Road',NULL,'ju_gorgo@orange.fr','07 45 67 34 34','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',1),
	 ('Nicolas','Délisée',NULL,'France',1,'Rue des Grosses Cloches',NULL,'nicolas_cage@mymail.com','07 97 45 76 98','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://cdn.discordapp.com/attachments/1062392962987855906/1062735729530241034/Screenshot_20230111-151147_Gallery.jpg',1),
	 ('Pierre','Pierrafeu',NULL,'France',1,'Rue des Roues',NULL,'pierre_pierre@caramail.com','05 56 67 24 57','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://live.staticflickr.com/7243/7114399995_c3275cc000_b.jpg',1),
	 ('Maxime','Doupine',NULL,'France',1,'Rue Louis-Mi',NULL,'maxime_dupin@gmail.com','06 21 23 48 09','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://ca.slack-edge.com/T6SG2QGG2-U041SBCGE14-2df0deaf4b0c-72',1),
	 ('John','Lennon','The Beattles','Great Britain',3,'Abbey Road',NULL,'j_lennon@hotmail.uk','07 64 63 78 99','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/John_Lennon_1969_%28cropped%29-Colorized.jpg/220px-John_Lennon_1969_%28cropped%29-Colorized.jpg',1),
	 ('E.T.','Unknown',NULL,'USA',2,'Area 51',NULL,'e_t@gmail.un','03 33 33 11 22','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://static.wikia.nocookie.net/ettheextraterrestrial/images/6/6f/Thumb-ET.jpg/revision/latest/scale-to-width-down/280?cb=20220814150338',1),
	 ('Yeti','Unknown',NULL,'Nepal',4,'Moutain Road',NULL,'ye.ti@gmail.np','08 21 61 78 43','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://images.bfmtv.com/-pzMLMoTJXUSFxaH788jRhsqYLI=/48x2:752x398/704x0/images/-68611.jpg',1),
	 ('Thomas','Edison',NULL,'France',1,'Rue de l''ampoule',NULL,'thom_ed@gmail.fr','06 74 50 00 11 52','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://www.sciencesetavenir.fr/assets/img/2020/03/03/cover-r4x3w1000-5e5e30c0bcc48-thomasedison.jpg',1),
	 ('Poseidon','Unknown',NULL,'France',5,'Rue de l''Olympe',NULL,'popo@gmail.fr','07 83 28 46 32','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Poseidon_sculpture_Copenhagen_2005.jpg/486px-Poseidon_sculpture_Copenhagen_2005.jpg',1),	 
   ('Pocahontas','Unknown',NULL,'USA',6,'First Nation Street',NULL,'poca@gmail.us','06 34 57 21 63','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNDYwNDkxMTY2OTg0MDQ0/pocahontas-1595---1617-wearing-traditional-attire-at-the-time-of-her-marriage-to-colonialist-john-rolfe-original-artwork-painting-by-jean-leon-gerome-ferris-photo-by-three-lionsgetty-images.jpg',1),
	 ('Batman','Unknown',NULL,'USA',7,'Against violence Street',NULL,'batman@gmail.usa','05 56 45 34 98','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','http://images6.fanpop.com/image/photos/43100000/Justice-League-2017-Profile-Poster-Batman-justice-league-movie-43105427-2000-3000.jpg',1),
	 ('Jacques-Etienne','Montgolfier',NULL,'Turkey',8,'Street of Sky',NULL,'je.montgolfier@gmail.fr','07 56 45 34 87','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://anniversaire-celebrite.com/upload/250x333/jacques-etienne-montgolfier-250.jpg',1),
	 ('Wilfried','Tuche',NULL,'France',10,'Rue de n''importe-quoi',NULL,'w.tuche@yahoo.fr','08 56 45 87 67','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://pbs.twimg.com/profile_images/706922382615814144/ux1W8FRb_400x400.jpg',1),
	 ('Emmett','Brown',NULL,'France',1,'Rue du Loup',NULL,'emmett.brown@gmail.fr','05 98 67 56 98','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://static.wikia.nocookie.net/bttf/images/9/96/Doc_Emmett_Brown.jpg/revision/latest?cb=20220716093206',1);


   INSERT INTO hackathon.vehicle (`type`,model,description,capacity,`year`,mileage,fuel,gearbox,maxspeed,wheel,price,color,city_id,user_id,photo,startdate, enddate) VALUES
	 ('Bus','YZ-ORIGIN6','Comfortable bus ideal for school trips',2, 2010,150,'fuel','manual',220,2,10,'#ECF8EC',1,2,'src/assets/images/bus.png','2023-01-13', '2023-02-13'),
	 ('Moto','COMPET-YZ','Perfect moto for the craziest drives',2,2018,110000,'fuel','manual',180,2,20,'#F0F9FE',1,1,'src/assets/images/yamaha.png','2023-01-13', '2023-02-13'),
	 ('Submarine','Unterseeboot type XXI','Perfect color and a perfect engine for undersea exploring',600,1945,300,'fuel','automatic',130,0,200,'#FFE5E5',3,6,'src/assets/images/sous-marin.png','2023-01-13', '2023-02-13'),
	 ('Flying saucer','1221111222111222','Incredible experience for adventurous users',35,-2000,1000,'diesel','automatic',10000,0,1000,'#F0EBDD',2,7,'src/assets/images/ovni.png',NULL, NULL),
	 ('Snowmobile','Ski-Doo 2023','Gentle and smoth ride for snow lovers',2,2020,20000,'fuel','manual',90,0,30,'#FFE5E5',4,8,'src/assets/images/moto-neige.png',NULL, NULL),
	 ('Bike','fixi','Elegant and glamourous transport for the most exquisit users',1,1800,200,'organic','manual',30,2,10,'#F0F9FE',7,9,'src/assets/images/velo.png','2023-01-13', '2023-01-27'),
	 ('Tuk tuk','KB 60','Fun way to move around the city',6,2015,80,'fuel','manual',90,3,15,'#F0F9FE',5,10,'src/assets/images/tuktuk.png',NULL, NULL),
	 ('canoe','Vaka','Smooth and enjoyable experience on calm waters',6,1760,300,'organic','manual',17,0,19,'#F0EBDD',6,11,'src/assets/images/pirogue.png',NULL, NULL),
	 ('Car','Batmobile','One of the most incredible experience in a car with one of the most famous heroes',2,1980,10000,'fuel','automatic',300,4,150,'#D0D0D0',7,12,'src/assets/images/batmobile.png','2023-01-13', '2023-01-27'),
	 ('Baloon','Rozière','Nice transport ',5,2010,30000,'fuel','manual',30,0,180,'#F0EBDD',8,13,'src/assets/images/montgolfiere.png',NULL, NULL), 
   ('ship','Black Pearl','Just an old ship with a lot of history',300,1600,40000,'organic','manual',150,0,200,'#D0D0D0',9,3,'src/assets/images/blackpearl.png',NULL, NULL),
	 ('Jet ski','Yamaha VX','Lovely engine in a great state',2,2020,23000,'fuel','manual',60,0,30,'#F0F9FE',1,2,'src/assets/images/yamaha.png','2023-01-13', '2023-02-13'),
	 ('Camping car','STX','Perfect for a family or a week-end with friends',10,2006,100000,'diesel','automatic',250,4,150,'#F0EBDD',10,14,'src/assets/images/campingcar.png','2023-01-13', '2023-01-27'),
	 ('Car','Delorean Dmc-12','Classic car in perfect state',5,1985,186,'diesel','manual',150,4,35,'#D0D0D0',1,15,'src/assets/images/delorean.png','2023-01-13', '2023-02-13');
