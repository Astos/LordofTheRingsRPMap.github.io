  /********************************************/
 /**				MARKERS					**/
/********************************************/

// Define marker icons
// For each region add an image to 'img/marker/' 
var Gondor = L.icon({iconUrl: 'img/marker/Gondor.png',iconSize: [21, 21]})

var Rohan = L.icon({iconUrl: 'img/marker/Rohan.png',iconSize: [21, 21]})

var DarkForces = L.icon({iconUrl: 'img/marker/DarkForces.png',iconSize: [21, 21]})

var BlueDwarves = L.icon({iconUrl: 'img/marker/Bl.png',iconSize: [21, 21]})
var MoriaDwarves = L.icon({iconUrl: 'img/marker/MoriaDwarves.png',iconSize: [21, 21]})

var DarkMen = L.icon({iconUrl: 'img/marker/DarkMen.png',iconSize: [21, 21]})
var Umbar = L.icon({iconUrl: 'img/marker/Umbar.png',iconSize: [21, 21]})

var Arnor = L.icon({iconUrl: 'img/marker/Arnor.png',iconSize: [21, 21]})
var Shire = L.icon({iconUrl: 'img/marker/Shire.png',iconSize: [21, 21]})

var Lothlorien = L.icon({iconUrl: 'img/marker/Elves.png',iconSize: [21, 21]})
var Rivendell= L.icon({iconUrl: 'img/marker/HighElves.png',iconSize: [21, 21]})

var Dale = L.icon({iconUrl: 'img/marker/Dale.png',iconSize: [21, 21]})

var Lindon = L.icon({iconUrl: 'img/marker/Elves.png',iconSize: [21, 21]})

var WoodElves = L.icon({iconUrl: 'img/marker/WoodElves.png',iconSize: [21, 21]})
var Radagast = L.icon({iconUrl: 'img/marker/Istari.png',iconSize: [21, 21]})

// Define the markers
var markers_Gondor = [

[19.31114,22.23633,Gondor,"<b>Dol Amroth</b>"],
[24.68695,25.66406,Gondor,"<b>Glanhir</b>"],
[38.82259,25.92773,Gondor,"<b>Erech</b>"],
[35.03,34.62891,Gondor,"<b>Calembel</b>"],
[32.02671,39.11133,Gondor,"<b>Ethring</b>"],
[19.06212,41.13281,Gondor,"<b>Linhir</b>"],
[25.87899,52.11914,Gondor,"<b>Minas Brethil</b>"],
[19.06212,57.74414,Gondor,"<b>Pelagrir</b>"],
[36.87962,66.00586,Gondor,"<b>Cair Andros</b>"],
[33.28462,67.58789,Gondor,"<b>Osgiliath</b>"],
[32.91649,64.24805,Gondor,"<b>Minas Tirith</b>"]]

var markers_Rohan = [
[42.74701, 31.99219,Rohan,"<b>Aldburg</b>"],
[47.69497, 34.36523,Rohan,"<b>Eastfold</b>"],
[44.71551, 24.3457,Rohan,"<b>Edoras</b>"],
[44.46515, 17.49023,Rohan,"<b>Dunharrow</b>"],
[50.34546, 21.79688,Rohan,"<b>Stonedeans</b>"],
[48.5166, 17.22656,Rohan,"<b>Kingstead</b>"],
[47.57653, 13.79883,Rohan,"<b>Helm's Deep</b>"],
[47.04018, 6.32813,Rohan,"<b>West-march</b>"]]

var markers_DarkForces = []

var markers_Dwarves = []

var markers_DarkMen = [
[-35.74651, 18.36914,Umbar,"<b>Caldur</b>"],
[-32.99024, 26.45508,Umbar,"<b>Isigir</b>"],
[-32.17561, 34.10156,Umbar,"<b>Barazon</b>"],
[-35.03, 30.32227,Umbar,"<b>Maros</b>"],
[-36.45664, 36.82617,Umbar,"<b>Umbar</b>"],
[-39.63954, -9.84375,Umbar,"<b>Erelond</b>"]]

var markers_Breeland = []

var markers_Lothlorien = []

var markers_Wilderlands = []

var markers_Lindon = []

var markers_Woodlands = []

//Polygons

var GondorPoly = L.polygon([
			new L.LatLng(16.29905, 52.11914),
			new L.LatLng(12.29707, 55.81055),
			new L.LatLng(10.91962, 58.71094),
			new L.LatLng(11.69527, 61.52344),
			new L.LatLng(11.0059, 64.33594),
			new L.LatLng(15.96133, 73.47656),
			new L.LatLng(27.13737, 72.1582),
			new L.LatLng(34.16182, 71.36719),
			new L.LatLng(36.73888, 70.66406),
			new L.LatLng(41.44273, 62.49023),
			new L.LatLng(42.29356, 56.07422),
			new L.LatLng(37.71859, 49.48242),
			new L.LatLng(36.80928, 47.02148),
			new L.LatLng(38.82259, 39.375),
			new L.LatLng(38.68551, 34.18945),
			new L.LatLng(42.74701, 24.78516),
			new L.LatLng(43.32518, 12.56836),
			new L.LatLng(41.77131, 8.61328),
			new L.LatLng(37.99616, 3.69141),
			new L.LatLng(31.1282, -5.97656),
			new L.LatLng(31.57854, -5.53711),
			new L.LatLng(27.44979, -6.67969),
			new L.LatLng(27.37177, -8.26172),
			new L.LatLng(31.72817, -11.68945),
			new L.LatLng(31.05293, -13.88672),
			new L.LatLng(24.76678, -16.08398),
			new L.LatLng(22.02455, -18.01758),
			new L.LatLng(19.31114, -14.32617),
			new L.LatLng(12.89749, -13.18359),
			new L.LatLng(12.21118, -10.19531),
			new L.LatLng(14.68988, -7.20703),
			new L.LatLng(17.56025, -6.76758),
			new L.LatLng(20.38583, 7.29492),
			new L.LatLng(22.106, 8.08594),
			new L.LatLng(21.69827, 11.60156),
			new L.LatLng(20.63278, 11.86523),
			new L.LatLng(21.20746, 14.85352),
			new L.LatLng(19.72534, 15.73242),
			new L.LatLng(21.94305, 24.16992),
			new L.LatLng(19.39407, 21.62109),
			new L.LatLng(17.39258, 22.06055),
			new L.LatLng(16.29905, 24.52148),
			new L.LatLng(14.26438, 25.40039),
			new L.LatLng(11.69527, 24.78516),
			new L.LatLng(10.66061, 26.19141),
			new L.LatLng(5.44102, 28.03711),
			new L.LatLng(7.36247, 31.99219),
			new L.LatLng(10.57422, 33.92578),
			new L.LatLng(12.98315, 34.89258),
			new L.LatLng(11.86735, 37.26563),
			new L.LatLng(14.34955, 36.03516),
			new L.LatLng(17.64402, 39.375),
			new L.LatLng(13.32548, 39.19922)

			],{fill: true,fillOpacity:.4,color:'#F5F6F7'})

var RohanPoly = L.polygon([
	new L.LatLng(37.37016, 46.75781),
	new L.LatLng(37.92687, 49.30664),
	new L.LatLng(42.29356, 55.19531),
	new L.LatLng(43.06889, 51.50391),
	new L.LatLng(44.71551, 54.58008),
	new L.LatLng(44.90258, 57.12891),
	new L.LatLng(46.86019, 56.77734),
	new L.LatLng(47.27923, 56.42578),
	new L.LatLng(48.22467, 56.60156),
	new L.LatLng(48.9225, 58.00781),
	new L.LatLng(49.49667, 57.74414),
	new L.LatLng(50.12058, 58.88672),
	new L.LatLng(52.10651, 58.79883),
	new L.LatLng(52.69636, 58.0957),
	new L.LatLng(53.33087, 58.35937),
	new L.LatLng(54.52108, 54.05273),
	new L.LatLng(55.37911, 54.05273),
	new L.LatLng(56.12106, 55.72266),
	new L.LatLng(56.80088, 55.72266),
	new L.LatLng(57.08852, 54.31641),
	new L.LatLng(57.70415, 53.87695),
	new L.LatLng(56.99288, 48.86719),
	new L.LatLng(57.42129, 47.28516),
	new L.LatLng(58.7682, 46.75781),
	new L.LatLng(59.48973, 48.60352),
	new L.LatLng(59.933, 47.54883),
	new L.LatLng(60.19616, 41.39648),
	new L.LatLng(59.80063, 38.75977),
	new L.LatLng(57.46859, 39.02344),
	new L.LatLng(56.02295, 38.32031),
	new L.LatLng(53.17312, 36.29883),
	new L.LatLng(50.95843, 30.05859),
	new L.LatLng(50.62507, 27.24609),
	new L.LatLng(51.72703, 21.44531),
	new L.LatLng(53.27835, 18.80859),
	new L.LatLng(53.43572, 16.17188),
	new L.LatLng(50.90303, 15.11719),
	new L.LatLng(49.21042, 12.2168),
	new L.LatLng(49.03787, 10.10742),
	new L.LatLng(48.80686, 9.49219),
	new L.LatLng(48.9225, 4.39453),
	new L.LatLng(47.98992, 2.8125),
	new L.LatLng(47.81315, 1.75781),
	new L.LatLng(49.49667, -4.30664),
	new L.LatLng(48.80686, -6.15234),
	new L.LatLng(46.43786, -0.79102),
	new L.LatLng(46.37725, 2.72461),
	new L.LatLng(45.15105, 4.83398),
	new L.LatLng(44.90258, 6.94336),
	new L.LatLng(44.40239, 7.29492),
	new L.LatLng(44.08759, 9.14063),
	new L.LatLng(45.213, 12.91992),
	new L.LatLng(46.49839, 12.91992),
	new L.LatLng(46.92026, 13.88672),
	new L.LatLng(46.80006, 14.67773),
	new L.LatLng(45.8288, 15.55664),
	new L.LatLng(43.38908, 15.46875),
	new L.LatLng(43.00465, 24.87305),
	new L.LatLng(38.89103, 34.27734),
	new L.LatLng(39.3003, 39.19922)

	],{fillOpacity:.4,color:'#4ca20b'})

var UmbarPoly = L.polygon([
	new L.LatLng(-28.38174, 30.49805),
	new L.LatLng(-29.07538, 28.38867),
	new L.LatLng(-28.1495, 26.01563),
	new L.LatLng(-29.38218, 24.3457),
	new L.LatLng(-28.99853, 21.62109),
	new L.LatLng(-31.50363, 20.6543),
	new L.LatLng(-35.53223, 17.75391),
	new L.LatLng(-35.96022, 18.7207),
	new L.LatLng(-33.35806, 21.97266),
	new L.LatLng(-32.02671, 22.14844),
	new L.LatLng(-33.21112, 23.20313),
	new L.LatLng(-33.06392, 28.21289),
	new L.LatLng(-32.17561, 34.10156),
	new L.LatLng(-33.65121, 33.22266),
	new L.LatLng(-34.74161, 29.35547),
	new L.LatLng(-35.38905, 31.11328),
	new L.LatLng(-34.45222, 34.27734),
	new L.LatLng(-34.958, 36.5625),
	new L.LatLng(-35.81781, 37.5293),
	new L.LatLng(-36.17336, 35.77148),
	new L.LatLng(-36.87962, 36.47461),
	new L.LatLng(-38.47939, 30.41016),
	new L.LatLng(-39.57182, 33.83789),
	new L.LatLng(-37.57941, 40.42969),
	new L.LatLng(-36.17336, 40.60547),
	new L.LatLng(-33.43144, 39.28711),
	new L.LatLng(-30.90222, 36.91406)

	],{fill: true,fillOpacity:.4,color:'#c0111a'});
