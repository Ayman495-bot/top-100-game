let score = 0;

document.getElementById("gameMode").addEventListener("change", function () {
  const mode = this.value;

  // Show/hide sections based on game mode
  document.getElementById("guessSection").style.display = mode === "name-to-rank" ? "block" : "none";
  document.getElementById("guessTheRankSection").style.display = mode === "rank-to-name" ? "block" : "none";

  if (mode === "rank-to-name") {
    generateRandomName(); // load a random name
  }
});
// ======== BOYS NAMES – UK TOP 100 (2024) ========
const ukBoysNames = [
  { name: "noah", rank: 1, aliases: ["noah"] },
  { name: "theo", rank: 2, aliases: ["theo", "theodore"] },
  { name: "luca", rank: 3, aliases: ["luca", "lucas"] },
  { name: "arthur", rank: 4, aliases: ["arthur"] },
  { name: "oliver", rank: 5, aliases: ["oliver"] },
  { name: "archie", rank: 6, aliases: ["archie"] },
  { name: "george", rank: 7, aliases: ["george"] },
  { name: "leo", rank: 8, aliases: ["leo", "leonardo"] },
  { name: "freddie", rank: 9, aliases: ["freddie", "fred"] },
  { name: "arlo", rank: 10, aliases: ["arlo"] },
  { name: "alfie", rank: 11, aliases: ["alfie"] },
  { name: "oscar", rank: 12, aliases: ["oscar"] },
  { name: "teddy", rank: 13, aliases: ["teddy", "edward"] },
  { name: "henry", rank: 14, aliases: ["henry"] },
  { name: "albie", rank: 15, aliases: ["albie", "albert"] },
  { name: "finley", rank: 16, aliases: ["finley", "fin"] },
  { name: "jude", rank: 17, aliases: ["jude"] },
  { name: "charlie", rank: 18, aliases: ["charlie", "charles"] },
  { name: "elijah", rank: 19, aliases: ["elijah", "eli"] },
  { name: "tommy", rank: 20, aliases: ["tommy", "thomas"] },
  { name: "harry", rank: 21, aliases: ["harry", "harold"] },
  { name: "oakley", rank: 22, aliases: ["oakley"] },
  { name: "hudson", rank: 23, aliases: ["hudson"] },
  { name: "roman", rank: 24, aliases: ["roman"] },
  { name: "rory", rank: 25, aliases: ["rory"] },
  { name: "reuben", rank: 26, aliases: ["reuben"] },
  { name: "louie", rank: 27, aliases: ["louie", "louis"] },
  { name: "jack", rank: 28, aliases: ["jack", "john"] },
  { name: "reggie", rank: 29, aliases: ["reggie", "reginald"] },
  { name: "lucas", rank: 30, aliases: ["lucas"] },
  { name: "alfred", rank: 31, aliases: ["alfred", "alf"] },
  { name: "jax", rank: 32, aliases: ["jax"] },
  { name: "otis", rank: 33, aliases: ["otis"] },
  { name: "ernest", rank: 34, aliases: ["ernest"] },
  { name: "harvey", rank: 35, aliases: ["harvey"] },
  { name: "frederick", rank: 36, aliases: ["frederick", "fred"] },
  { name: "elliott", rank: 37, aliases: ["elliott"] },
  { name: "robert", rank: 38, aliases: ["robert", "bob"] },
  { name: "alfred", rank: 39, aliases: ["alfred", "alf"] },
  { name: "joshua", rank: 40, aliases: ["joshua", "josh"] },
  { name: "aiden", rank: 41, aliases: ["aiden"] },
  { name: "barney", rank: 42, aliases: ["barney", "barnard"] },
  { name: "devon", rank: 43, aliases: ["devon"] },
  { name: "felix", rank: 44, aliases: ["felix"] },
  { name: "elliot", rank: 45, aliases: ["elliot"] },
  { name: "vincent", rank: 46, aliases: ["vincent", "vince"] },
  { name: "jasper", rank: 47, aliases: ["jasper"] },
  { name: "ezra", rank: 48, aliases: ["ezra"] },
  { name: "oscar", rank: 49, aliases: ["oscar"] },
  { name: "toby", rank: 50, aliases: ["toby"] },
  { name: "sidney", rank: 51, aliases: ["sidney", "sid"] },
  { name: "jasper", rank: 52, aliases: ["jasper"] },
  { name: "rufus", rank: 53, aliases: ["rufus"] },
  { name: "dexter", rank: 54, aliases: ["dexter", "dex"] },
  { name: "rocco", rank: 55, aliases: ["rocco"] },
  { name: "archie", rank: 56, aliases: ["archie"] },
  { name: "winston", rank: 57, aliases: ["winston", "win"] },
  { name: "dexter", rank: 58, aliases: ["dexter", "dex"] },
  { name: "archie", rank: 59, aliases: ["archie"] },
  { name: "miles", rank: 60, aliases: ["miles"] },
  { name: "ellie", rank: 61, aliases: ["ellie"] },
  { name: "milo", rank: 62, aliases: ["milo"] },
  { name: "eli", rank: 63, aliases: ["eli", "elias"] },
  { name: "remy", rank: 64, aliases: ["remy"] },
  { name: "riley", rank: 65, aliases: ["riley"] },
  { name: "jesse", rank: 66, aliases: ["jesse"] },
  { name: "kayden", rank: 67, aliases: ["kayden"] },
  { name: "ryan", rank: 68, aliases: ["ryan"] },
  { name: "samuel", rank: 69, aliases: ["samuel", "sam"] },
  { name: "nathan", rank: 70, aliases: ["nathan", "nate"] },
  { name: "jenson", rank: 71, aliases: ["jenson"] },
  { name: "elliot", rank: 72, aliases: ["elliot"] },
  { name: "lorenzo", rank: 73, aliases: ["lorenzo"] },
  { name: "brody", rank: 74, aliases: ["brody"] },
  { name: "kian", rank: 75, aliases: ["kian"] },
  { name: "ronnie", rank: 76, aliases: ["ronnie"] },
  { name: "callum", rank: 77, aliases: ["callum", "cal"] },
  { name: "frankie", rank: 78, aliases: ["frankie", "frank"] },
  { name: "ezekiel", rank: 79, aliases: ["ezekiel", "zeke"] },
  { name: "blake", rank: 80, aliases: ["blake"] },
  { name: "leon", rank: 81, aliases: ["leon"] },
  { name: "seth", rank: 82, aliases: ["seth"] },
  { name: "rowan", rank: 83, aliases: ["rowan"] },
  { name: "stanley", rank: 84, aliases: ["stanley", "stan"] },
  { name: "cody", rank: 85, aliases: ["cody"] },
  { name: "abe", rank: 86, aliases: ["abe", "abraham"] },
  { name: "ali", rank: 87, aliases: ["ali"] },
  { name: "mohammed", rank: 88, aliases: ["mohammed", "muhammad", "mohamed", "mohammad"] },
  { name: "ibrahim", rank: 89, aliases: ["ibrahim"] },
  { name: "abdul", rank: 90, aliases: ["abdul"] },
  { name: "rayyan", rank: 91, aliases: ["rayyan", "ray"] },
  { name: "haris", rank: 92, aliases: ["haris"] },
  { name: "yusuf", rank: 93, aliases: ["yusuf", "yousef"] },
  { name: "zayn", rank: 94, aliases: ["zayn", "zain", "zaine"] },
  { name: "hassan", rank: 95, aliases: ["hassan"] },
  { name: "khalid", rank: 96, aliases: ["khalid"] },
  { name: "hamza", rank: 97, aliases: ["hamza"] },
  { name: "ahmed", rank: 98, aliases: ["ahmed", "ahmad"] },
  { name: "omar", rank: 99, aliases: ["omar"] },
  { name: "bilal", rank: 100, aliases: ["bilal"] }
];
// ======== MOVIES BY IMDB RATING ========
const movies = [
  { name: "the shawshank redemption", rank: 1, aliases: ["shawshank", "redemption"] },
  { name: "the godfather", rank: 2, aliases: ["godfather"] },
  { name: "the dark knight", rank: 3, aliases: ["dark knight", "batman"] },
  { name: "the godfather part ii", rank: 4, aliases: ["godfather part ii"] },
  { name: "12 angry men", rank: 5, aliases: ["12 angry men"] },
  { name: "schindler's list", rank: 6, aliases: ["schindler's list", "schindlers list"] },
  { name: "the lord of the rings: the return of the king", rank: 7, aliases: ["return of the king", "lotr return"] },
  { name: "pulp fiction", rank: 8, aliases: ["pulp fiction"] },
  { name: "the lord of the rings: the fellowship of the ring", rank: 9, aliases: ["fellowship of the ring", "lotr fellowship"] },
  { name: "fight club", rank: 10, aliases: ["fight club"] },
  { name: "inception", rank: 11, aliases: ["inception"] },
  { name: "forrest gump", rank: 12, aliases: ["forrest gump"] },
  { name: "the lord of the rings: the two towers", rank: 13, aliases: ["two towers", "lotr two towers"] },
  { name: "star wars: episode v - the empire strikes back", rank: 14, aliases: ["empire strikes back", "star wars empire"] },
  { name: "the matrix", rank: 15, aliases: ["matrix"] },
  { name: "goodfellas", rank: 16, aliases: ["goodfellas"] },
  { name: "one flew over the cuckoo's nest", rank: 17, aliases: ["cuckoo's nest"] },
  { name: "se7en", rank: 18, aliases: ["se7en", "seven"] },
  { name: "city of god", rank: 19, aliases: ["city of god"] },
  { name: "the silence of the lambs", rank: 20, aliases: ["silence of the lambs"] },
  { name: "it's a wonderful life", rank: 21, aliases: ["wonderful life"] },
  { name: "life is beautiful", rank: 22, aliases: ["life is beautiful"] },
  { name: "star wars: episode iv - a new hope", rank: 23, aliases: ["a new hope", "star wars"] },
  { name: "saving private ryan", rank: 24, aliases: ["saving private ryan"] },
  { name: "spirited away", rank: 25, aliases: ["spirited away"] },
  { name: "the green mile", rank: 26, aliases: ["green mile"] },
  { name: "parasite", rank: 27, aliases: ["parasite"] },
  { name: "interstellar", rank: 28, aliases: ["interstellar"] },
  { name: "saving mr. banks", rank: 29, aliases: ["saving mr banks"] },
  { name: "your name", rank: 30, aliases: ["your name"] },
  { name: "the pianist", rank: 31, aliases: ["pianist"] },
  { name: "terminator 2: judgment day", rank: 32, aliases: ["terminator 2", "judgment day"] },
  { name: "back to the future", rank: 33, aliases: ["back to the future"] },
  { name: "whiplash", rank: 34, aliases: ["whiplash"] },
  { name: "gladiator", rank: 35, aliases: ["gladiator"] },
  { name: "the departed", rank: 36, aliases: ["departed"] },
  { name: "the prestige", rank: 37, aliases: ["prestige"] },
  { name: "the lion king", rank: 38, aliases: ["lion king"] },
  { name: "american history x", rank: 39, aliases: ["american history x"] },
  { name: "the usual suspects", rank: 40, aliases: ["usual suspects"] },
  { name: "harakiri", rank: 41, aliases: ["harakiri"] },
  { name: "the intouchables", rank: 42, aliases: ["intouchables"] },
  { name: "grave of the fireflies", rank: 43, aliases: ["grave of the fireflies"] },
  { name: "modern times", rank: 44, aliases: ["modern times"] },
  { name: "psycho", rank: 45, aliases: ["psycho"] },
  { name: "city lights", rank: 46, aliases: ["city lights"] },
  { name: "once upon a time in the west", rank: 47, aliases: ["once upon a time in the west"] },
  { name: "casablanca", rank: 48, aliases: ["casablanca"] },
  { name: "cinema paradiso", rank: 49, aliases: ["cinema paradiso"] },
  { name: "rear window", rank: 50, aliases: ["rear window"] },
  { name: "alien", rank: 51, aliases: ["alien"] },
  { name: "apocalypse now", rank: 52, aliases: ["apocalypse now"] },
  { name: "memento", rank: 53, aliases: ["memento"] },
  { name: "raiders of the lost ark", rank: 54, aliases: ["raiders of the lost ark", "indiana jones"] },
  { name: "the lives of others", rank: 55, aliases: ["lives of others"] },
  { name: "django unchained", rank: 56, aliases: ["django unchained"] },
  { name: "wall·e", rank: 57, aliases: ["walle", "wall-e"] },
  { name: "paths of glory", rank: 58, aliases: ["paths of glory"] },
  { name: "sunset blvd.", rank: 59, aliases: ["sunset blvd"] },
  { name: "the shining", rank: 60, aliases: ["shining"] },
  { name: "avengers: infinity war", rank: 61, aliases: ["avengers infinity war", "infinity war"] },
  { name: "oldboy", rank: 62, aliases: ["oldboy"] },
  { name: "witness for the prosecution", rank: 63, aliases: ["witness for the prosecution"] },
  { name: "aliens", rank: 64, aliases: ["aliens"] },
  { name: "the great dictator", rank: 65, aliases: ["great dictator"] },
  { name: "the dark knight rises", rank: 66, aliases: ["dark knight rises"] },
  { name: "once upon a time in america", rank: 67, aliases: ["once upon a time in america"] },
  { name: "das boot", rank: 68, aliases: ["das boot"] },
  { name: "coco", rank: 69, aliases: ["coco"] },
  { name: "citizen kane", rank: 70, aliases: ["citizen kane"] },
  { name: "braveheart", rank: 71, aliases: ["braveheart"] },
  { name: "dangal", rank: 72, aliases: ["dangal"] },
  { name: "amadeus", rank: 73, aliases: ["amadeus"] },
  { name: "toy story", rank: 74, aliases: ["toy story"] },
  { name: "north by northwest", rank: 75, aliases: ["north by northwest"] },
  { name: "requiem for a dream", rank: 76, aliases: ["requiem for a dream"] },
  { name: "3 idiots", rank: 77, aliases: ["3 idiots"] },
  { name: "like stars on earth", rank: 78, aliases: ["like stars on earth", "taare zameen par"] },
  { name: "vertigo", rank: 79, aliases: ["vertigo"] },
  { name: "reservoir dogs", rank: 80, aliases: ["reservoir dogs"] },
  { name: "m", rank: 81, aliases: ["m"] },
  { name: "eternal sunshine of the spotless mind", rank: 82, aliases: ["eternal sunshine", "eternal sunshine of the spotless mind"] },
  { name: "capernaum", rank: 83, aliases: ["capernaum"] },
  { name: "the hunt", rank: 84, aliases: ["the hunt", "jagten"] },
  { name: "2001: a space odyssey", rank: 85, aliases: ["2001", "space odyssey"] },
  { name: "double indemnity", rank: 86, aliases: ["double indemnity"] },
  { name: "to kill a mockingbird", rank: 87, aliases: ["to kill a mockingbird"] },
  { name: "toy story 3", rank: 88, aliases: ["toy story 3"] },
  { name: "singin' in the rain", rank: 89, aliases: ["singin in the rain"] },
  { name: "taxi driver", rank: 90, aliases: ["taxi driver"] },
  { name: "lawrence of arabia", rank: 91, aliases: ["lawrence of arabia"] },
  { name: "the sting", rank: 92, aliases: ["the sting"] },
  { name: "the kid", rank: 93, aliases: ["the kid"] },
  { name: "bicycle thieves", rank: 94, aliases: ["bicycle thieves"] },
  { name: "inglourious basterds", rank: 95, aliases: ["inglourious basterds"] },
  { name: "the father", rank: 96, aliases: ["the father"] },
  { name: "snatch", rank: 97, aliases: ["snatch"] },
  { name: "metropolis", rank: 98, aliases: ["metropolis"] },
  { name: "a separation", rank: 99, aliases: ["a separation"] },
  { name: "the apartment", rank: 100, aliases: ["the apartment"] }
  // ➕ Continue entries up to 100
];
// ======== COUNTRIES BY POPULATION ========
const countries = [
  { name: "india", rank: 1, aliases: ["india"] },
  { name: "china", rank: 2, aliases: ["china"] },
  { name: "united states", rank: 3, aliases: ["usa","us","united states","america"] },
  { name: "indonesia", rank: 4, aliases: ["indonesia"] },
  { name: "pakistan", rank: 5, aliases: ["pakistan"] },
  { name: "nigeria", rank: 6, aliases: ["nigeria"] },
  { name: "brazil", rank: 7, aliases: ["brazil"] },
  { name: "bangladesh", rank: 8, aliases: ["bangladesh"] },
  { name: "russia", rank: 9, aliases: ["russia"] },
  { name: "mexico", rank: 10, aliases: ["mexico"] },
  { name: "japan", rank: 11, aliases: ["japan"] },
  { name: "ethiopia", rank: 12, aliases: ["ethiopia"] },
  { name: "philippines", rank: 13, aliases: ["philippines"] },
  { name: "congo, democratic republic of the", rank: 14, aliases: ["dr congo","drc","democratic republic of the congo"] },
  { name: "egypt", rank: 15, aliases: ["egypt"] },
  { name: "vietnam", rank: 16, aliases: ["vietnam"] },
  { name: "iran", rank: 17, aliases: ["iran"] },
  { name: "turkey", rank: 18, aliases: ["turkey"] },
  { name: "germany", rank: 19, aliases: ["germany"] },
  { name: "thailand", rank: 20, aliases: ["thailand"] },
  { name: "united kingdom", rank: 21, aliases: ["uk","united kingdom","britain","england"] },
  { name: "france", rank: 22, aliases: ["france"] },
  { name: "tanzania", rank: 23, aliases: ["tanzania"] },
  { name: "italy", rank: 24, aliases: ["italy"] },
  { name: "south africa", rank: 25, aliases: ["south africa"] },
  { name: "myanmar", rank: 26, aliases: ["myanmar","burma"] },
  { name: "kenya", rank: 27, aliases: ["kenya"] },
  { name: "south korea", rank: 28, aliases: ["south korea","korea"] },
  { name: "colombia", rank: 29, aliases: ["colombia"] },
  { name: "spain", rank: 30, aliases: ["spain"] },
  { name: "ukraine", rank: 31, aliases: ["ukraine"] },
  { name: "sudan", rank: 32, aliases: ["sudan"] },
  { name: "uganda", rank: 33, aliases: ["uganda"] },
  { name: "iraq", rank: 34, aliases: ["iraq"] },
  { name: "algeria", rank: 35, aliases: ["algeria"] },
  { name: "poland", rank: 36, aliases: ["poland"] },
  { name: "canada", rank: 37, aliases: ["canada"] },
  { name: "morocco", rank: 38, aliases: ["morocco"] },
  { name: "uzbekistan", rank: 39, aliases: ["uzbekistan"] },
  { name: "saudi arabia", rank: 40, aliases: ["saudi arabia", "saudi"] },
  { name: "peru", rank: 41, aliases: ["peru"] },
  { name: "malaysia", rank: 42, aliases: ["malaysia"] },
  { name: "angola", rank: 43, aliases: ["angola"] },
  { name: "mozambique", rank: 44, aliases: ["mozambique"] },
  { name: "ghana", rank: 45, aliases: ["ghana"] },
  { name: "yemen", rank: 46, aliases: ["yemen"] },
  { name: "nepal", rank: 47, aliases: ["nepal"] },
  { name: "venezuela", rank: 48, aliases: ["venezuela"] },
  { name: "madagascar", rank: 49, aliases: ["madagascar"] },
  { name: "cameroon", rank: 50, aliases: ["cameroon"] },
  { name: "côte d'ivoire", rank: 51, aliases: ["ivory coast", "cote d'ivoire"] },
  { name: "north korea", rank: 52, aliases: ["north korea", "dprk"] },
  { name: "australia", rank: 53, aliases: ["australia"] },
  { name: "niger", rank: 54, aliases: ["niger"] },
  { name: "taiwan", rank: 55, aliases: ["taiwan"] },
  { name: "sri lanka", rank: 56, aliases: ["sri lanka", "ceylon"] },
  { name: "burkina faso", rank: 57, aliases: ["burkina faso"] },
  { name: "mali", rank: 58, aliases: ["mali"] },
  { name: "romania", rank: 59, aliases: ["romania"] },
  { name: "malawi", rank: 60, aliases: ["malawi"] },
  { name: "chile", rank: 61, aliases: ["chile"] },
  { name: "kazakhstan", rank: 62, aliases: ["kazakhstan"] },
  { name: "zambia", rank: 63, aliases: ["zambia"] },
  { name: "guatemala", rank: 64, aliases: ["guatemala"] },
  { name: "ecuador", rank: 65, aliases: ["ecuador"] },
  { name: "syria", rank: 66, aliases: ["syria"] },
  { name: "netherlands", rank: 67, aliases: ["netherlands", "holland"] },
  { name: "senegal", rank: 68, aliases: ["senegal"] },
  { name: "cambodia", rank: 69, aliases: ["cambodia"] },
  { name: "chad", rank: 70, aliases: ["chad"] },
  { name: "somalia", rank: 71, aliases: ["somalia"] },
  { name: "zimbabwe", rank: 72, aliases: ["zimbabwe"] },
  { name: "guinea", rank: 73, aliases: ["guinea"] },
  { name: "south sudan", rank: 74, aliases: ["south sudan"] },
  { name: "rwanda", rank: 75, aliases: ["rwanda"] },
  { name: "benin", rank: 76, aliases: ["benin"] },
  { name: "burundi", rank: 77, aliases: ["burundi"] },
  { name: "tunisia", rank: 78, aliases: ["tunisia"] },
  { name: "bolivia", rank: 79, aliases: ["bolivia"] },
  { name: "belgium", rank: 80, aliases: ["belgium"] },
  { name: "haiti", rank: 81, aliases: ["haiti"] },
  { name: "cuba", rank: 82, aliases: ["cuba"] },
  { name: "jordan", rank: 83, aliases: ["jordan"] },
  { name: "dominican republic", rank: 84, aliases: ["dominican republic"] },
  { name: "czech republic", rank: 85, aliases: ["czech republic", "czechia"] },
  { name: "greece", rank: 86, aliases: ["greece"] },
  { name: "portugal", rank: 87, aliases: ["portugal"] },
  { name: "azerbaijan", rank: 88, aliases: ["azerbaijan"] },
  { name: "sweden", rank: 89, aliases: ["sweden"] },
  { name: "honduras", rank: 90, aliases: ["honduras"] },
  { name: "united arab emirates", rank: 91, aliases: ["uae", "united arab emirates"] },
  { name: "hungary", rank: 92, aliases: ["hungary"] },
  { name: "tajikistan", rank: 93, aliases: ["tajikistan"] },
  { name: "belarus", rank: 94, aliases: ["belarus"] },
  { name: "austria", rank: 95, aliases: ["austria"] },
  { name: "papua new guinea", rank: 96, aliases: ["papua new guinea", "png"] },
  { name: "serbia", rank: 97, aliases: ["serbia"] },
  { name: "israel", rank: 98, aliases: ["israel"] },
  { name: "switzerland", rank: 99, aliases: ["switzerland"] },
  { name: "togo", rank: 100, aliases: ["togo"] }
  // ➕ Continue entries up to rank 1000 here
];
// ======== INSTAGRAM ACCOUNTS ========
const instaAccounts = [
  { name: "instagram", rank: 1, aliases: ["instagram"] },
  { name: "cristiano ronaldo", rank: 2, aliases: ["cristiano", "ronaldo", "cr7"] },
  { name: "selenagomez", rank: 3, aliases: ["selena", "selenagomez"] },
  { name: "the rock", rank: 4, aliases: ["therock", "rock", "dwayne"] },
  { name: "kylie jenner", rank: 5, aliases: ["kylie", "kyliejenner"] },
  { name: "leomessi", rank: 6, aliases: ["lionel", "messi", "leomessi"] },
  { name: "beyonce", rank: 7, aliases: ["beyonce"] },
  { name: "kimkardashian", rank: 8, aliases: ["kim", "kimkardashian"] },
  { name: "kingjames", rank: 9, aliases: ["lebron", "james", "kingjames"] },
  { name: "kendalljenner", rank: 10, aliases: ["kendall", "kendalljenner"] },
  { name: "justinbieber", rank: 11, aliases: ["justin", "bieber", "justinbieber"] },
  { name: "charliedamelio", rank: 12, aliases: ["charli", "damelio", "charliedamelio"] },
  { name: "natgeo", rank: 13, aliases: ["natgeo", "national geographic"] },
  { name: "nickiminaj", rank: 14, aliases: ["nicki", "minaj", "nickiminaj"] },
  { name: "nike", rank: 15, aliases: ["nike"] },
  { name: "khloekardashian", rank: 16, aliases: ["khloe", "khloekardashian"] },
  { name: "mileycyrus", rank: 17, aliases: ["miley", "mileycyrus"] },
  { name: "kendalljenner", rank: 18, aliases: ["kendall", "kendalljenner"] },
  { name: "katyperry", rank: 19, aliases: ["katy", "perry", "katyperry"] },
  { name: "taylorswift", rank: 20, aliases: ["taylor", "swift", "taylorswift"] },
  { name: "nikefootball", rank: 21, aliases: ["nikefootball"] },
  { name: "virat.kohli", rank: 22, aliases: ["virat", "kohli"] },
  { name: "kourtneykardash", rank: 23, aliases: ["kourtney", "kardash"] },
  { name: "kendricklamar", rank: 24, aliases: ["kendrick", "lamar", "kendricklamar"] },
  { name: "kimkardashianwest", rank: 25, aliases: ["kimwest", "kardashianwest"] },
  { name: "bts_official_bighit", rank: 26, aliases: ["bts", "bighit"] },
  { name: "eleanore", rank: 27, aliases: ["eleanore"] },
  { name: "leomessi", rank: 28, aliases: ["leo", "messi", "leomessi"] },
  { name: "champagnepapi", rank: 29, aliases: ["drake", "champagnepapi"] },
  { name: "nasa", rank: 30, aliases: ["nasa"] },
  { name: "champions league", rank: 31, aliases: ["championsleague", "ucl"] },
  { name: "nba", rank: 32, aliases: ["nba"] },
  { name: "badbunnypr", rank: 33, aliases: ["badbunny", "badbunnypr"] },
  { name: "dualipa", rank: 34, aliases: ["dua", "lipa", "dualipa"] },
  { name: "gal_gadot", rank: 35, aliases: ["gal", "gadot", "galgadot"] },
  { name: "zacefron", rank: 36, aliases: ["zac", "efron", "zacefron"] },
  { name: "iamcardib", rank: 37, aliases: ["cardi", "cardib", "iamcardib"] },
  { name: "championsleague", rank: 38, aliases: ["championsleague", "ucl"] },
  { name: "camila_cabello", rank: 39, aliases: ["camila", "cabello", "camilacabello"] },
  { name: "harrystyles", rank: 40, aliases: ["harry", "styles", "harrystyles"] },
  { name: "kevinhart4real", rank: 41, aliases: ["kevin", "hart", "kevinhart"] },
  { name: "emmawatson", rank: 42, aliases: ["emma", "watson", "emmawatson"] },
  { name: "anushkasharma", rank: 43, aliases: ["anushka", "sharma", "anushkasharma"] },
  { name: "karolg", rank: 44, aliases: ["karol", "karolg"] },
  { name: "davidbeckham", rank: 45, aliases: ["david", "beckham", "davidbeckham"] },
  { name: "chrishemsworth", rank: 46, aliases: ["chris", "hemsworth", "chrishemsworth"] },
  { name: "champagnepapi", rank: 47, aliases: ["drake", "champagnepapi"] },
  { name: "billieeilish", rank: 48, aliases: ["billie", "eilish", "billieeilish"] },
  { name: "gigi hadid", rank: 49, aliases: ["gigi", "hadid", "gigihadid"] },
  { name: "deepikapadukone", rank: 50, aliases: ["deepika", "padukone", "deepikapadukone"] },
  { name: "shraddhakapoor", rank: 51, aliases: ["shraddha", "kapoor", "shraddhakapoor"] },
  { name: "neymarjr", rank: 52, aliases: ["neymar", "jr", "neymarjr"] },
  { name: "zayn", rank: 53, aliases: ["zayn"] },
  { name: "viratkohli", rank: 54, aliases: ["virat", "kohli", "viratkohli"] },
  { name: "katrinakaif", rank: 55, aliases: ["katrina", "kaif", "katrinakaif"] },
  { name: "priyankachopra", rank: 56, aliases: ["priyanka", "chopra", "priyankachopra"] },
  { name: "jlo", rank: 57, aliases: ["jlo", "jennifer lopez"] },
  { name: "louisvuitton", rank: 58, aliases: ["lv", "louis", "vuitton", "louisvuitton"] },
  { name: "shakira", rank: 59, aliases: ["shakira"] },
  { name: "virat.kohli", rank: 60, aliases: ["virat", "kohli", "viratkohli"] },
  { name: "shraddhakapoor", rank: 61, aliases: ["shraddha", "kapoor", "shraddhakapoor"] },
  { name: "kourtneykardash", rank: 62, aliases: ["kourtney", "kardashian", "kourtneykardashian"] },
  { name: "marvel", rank: 63, aliases: ["marvel"] },
  { name: "shahidkapoor", rank: 64, aliases: ["shahid", "kapoor", "shahidkapoor"] },
  { name: "deepikapadukone", rank: 65, aliases: ["deepika", "padukone", "deepikapadukone"] },
  { name: "katrinakaif", rank: 66, aliases: ["katrina", "kaif", "katrinakaif"] },
  { name: "anushkasharma", rank: 67, aliases: ["anushka", "sharma", "anushkasharma"] },
  { name: "gucci", rank: 68, aliases: ["gucci"] },
  { name: "zendaya", rank: 69, aliases: ["zendaya"] },
  { name: "dior", rank: 70, aliases: ["dior"] },
  { name: "armanibeauty", rank: 71, aliases: ["armani", "beauty", "armanibeauty"] },
  { name: "huda", rank: 72, aliases: ["huda", "hudabeauty"] },
  { name: "jacquelinef143", rank: 73, aliases: ["jacqueline", "fernandez", "jacquelinef143"] },
  { name: "beyonce", rank: 74, aliases: ["beyoncé", "beyonce"] },
  { name: "snoopdogg", rank: 75, aliases: ["snoop", "dogg", "snoopdogg"] },
  { name: "maisonvalentino", rank: 76, aliases: ["valentino", "maisonvalentino"] },
  { name: "kartikaaryan", rank: 77, aliases: ["kartik", "aaryan", "kartikaaryan"] },
  { name: "blackpinkofficial", rank: 78, aliases: ["blackpink", "blackpinkofficial"] },
  { name: "bts.bighitofficial", rank: 79, aliases: ["bts", "bighit", "bts.bighitofficial"] },
  { name: "jacobelordi", rank: 80, aliases: ["jacob", "elordi", "jacobelordi"] },
  { name: "zara", rank: 81, aliases: ["zara"] },
  { name: "burberry", rank: 82, aliases: ["burberry"] },
  { name: "cartier", rank: 83, aliases: ["cartier"] },
  { name: "ralphlauren", rank: 84, aliases: ["ralph", "lauren", "ralphlauren"] },
  { name: "kyliecosmetics", rank: 85, aliases: ["kyliecosmetics", "kylie", "cosmetics"] },
  { name: "chanelofficial", rank: 86, aliases: ["chanel", "chanelofficial"] },
  { name: "lamborghini", rank: 87, aliases: ["lamborghini", "lambo"] },
  { name: "manchesterunited", rank: 88, aliases: ["manutd", "manchester united"] },
  { name: "realmadrid", rank: 89, aliases: ["real madrid", "real", "madrid"] },
  { name: "fcbarcelona", rank: 90, aliases: ["barca", "barcelona"] },
  { name: "psg", rank: 91, aliases: ["psg", "parissaintgermain"] },
  { name: "juventus", rank: 92, aliases: ["juventus", "juve"] },
  { name: "chelseafc", rank: 93, aliases: ["chelsea", "chelseafc"] },
  { name: "liverpoolfc", rank: 94, aliases: ["liverpool", "liverpoolfc"] },
  { name: "manchestercity", rank: 95, aliases: ["mancity", "manchester city"] },
  { name: "arsenal", rank: 96, aliases: ["arsenal"] },
  { name: "acmilan", rank: 97, aliases: ["acmilan", "milan"] },
  { name: "inter", rank: 98, aliases: ["inter", "intermilan"] },
  { name: "bayernmunich", rank: 99, aliases: ["bayern", "bayern munich"] },
  { name: "atleticomadrid", rank: 100, aliases: ["atletico", "atletico madrid"] }
];
// ======== HIGHEST PAID ATHLETES ========
const athletes = [
  { name: "cristiano ronaldo", rank: 1, aliases: ["ronaldo", "cr7", "cristiano"] },
  { name: "jon rahm", rank: 2, aliases: ["rahm", "jon"] },
  { name: "lionel messi", rank: 3, aliases: ["messi", "leo", "lionel"] },
  { name: "lebron james", rank: 4, aliases: ["lebron", "james", "king james"] },
  { name: "giannis antetokounmpo", rank: 5, aliases: ["giannis", "greek freak", "antetokounmpo"] },
  { name: "kylian mbappé", rank: 6, aliases: ["mbappe", "kylian"] },
  { name: "neymar jr.", rank: 7, aliases: ["neymar", "jr", "neymar jr"] },
  { name: "karim benzema", rank: 8, aliases: ["benzema", "karim"] },
  { name: "stephen curry", rank: 9, aliases: ["steph", "curry", "stephen"] },
  { name: "lamar jackson", rank: 10, aliases: ["lamar", "jackson"] },
  { name: "dak prescott", rank: 11, aliases: ["dak", "prescott"] },
  { name: "tyson fury", rank: 12, aliases: ["tyson", "fury"] },
  { name: "justin verlander", rank: 13, aliases: ["verlander", "justin"] },
  { name: "oleksandr usyk", rank: 14, aliases: ["usyk", "oleksandr"] },
  { name: "luka dončić", rank: 15, aliases: ["luka", "doncic"] },
  { name: "roger federer", rank: 16, aliases: ["federer", "roger"] },
  { name: "rafael nadal", rank: 17, aliases: ["nadal", "rafael"] },
  { name: "serena williams", rank: 18, aliases: ["serena", "williams"] },
  { name: "max verstappen", rank: 19, aliases: ["verstappen", "max"] },
  { name: "shohei ohtani", rank: 20, aliases: ["ohtani", "shohei"] },
  { name: "juan soto", rank: 21, aliases: ["soto","juan"] },
  { name: "kevin durant", rank: 22, aliases: ["durant","kevin"] },
  { name: "kevin durant", rank: 23, aliases: ["durant"] }, // duplicate placeholder
  { name: "rory mcilroy", rank: 24, aliases: ["mcilroy","rory"] },
  { name: "scottie scheffler", rank: 25, aliases: ["scheffler","scottie"] },
  { name: "tiger woods", rank: 26, aliases: ["woods","tiger"] },
  { name: "xander schauffele", rank: 27, aliases: ["schauffele","xander"] },
  { name: "patrick mahomes", rank: 28, aliases: ["mahomes","patrick"] },
  { name: "stephen curry", rank: 29, aliases: ["curry"] }, // duplicate placeholder
  { name: "ruben neves", rank: 30, aliases: ["neves","ruben"] },
  { name: "josh allen", rank: 31, aliases: ["allen", "josh"] },
  { name: "mohamed salah", rank: 32, aliases: ["salah", "mo salah", "mohamed"] },
  { name: "joel embiid", rank: 33, aliases: ["embiid", "joel"] },
  { name: "anthony joshua", rank: 34, aliases: ["joshua", "anthony"] },
  { name: "jude bellingham", rank: 35, aliases: ["bellingham", "jude"] },
  { name: "paul george", rank: 36, aliases: ["george", "paul"] },
  { name: "jaylen brown", rank: 37, aliases: ["brown", "jaylen"] },
  { name: "devin booker", rank: 38, aliases: ["booker", "devin"] },
  { name: "jalen hurts", rank: 39, aliases: ["hurts", "jalen"] },
  { name: "jimmy butler", rank: 40, aliases: ["butler", "jimmy"] },
  { name: "canelo alvarez", rank: 41, aliases: ["canelo", "alvarez"] },
  { name: "derrick henry", rank: 42, aliases: ["henry", "derrick"] },
  { name: "mookie betts", rank: 43, aliases: ["betts", "mookie"] },
  { name: "jason tatum", rank: 44, aliases: ["tatum", "jason"] },
  { name: "anthony edwards", rank: 45, aliases: ["edwards", "anthony"] },
  { name: "bryce harper", rank: 46, aliases: ["harper", "bryce"] },
  { name: "justin jefferson", rank: 47, aliases: ["jefferson", "justin"] },
  { name: "jordan poole", rank: 48, aliases: ["poole", "jordan"] },
  { name: "jamal murray", rank: 49, aliases: ["murray", "jamal"] },
  { name: "bam adebayo", rank: 50, aliases: ["adebayo", "bam"] },
  { name: "mason mount", rank: 51, aliases: ["mount", "mason"] },
  { name: "bradley beal", rank: 52, aliases: ["beal", "bradley"] },
  { name: "matthew stafford", rank: 53, aliases: ["stafford", "matthew"] },
  { name: "domantas sabonis", rank: 54, aliases: ["sabonis", "domantas"] },
  { name: "aaron judge", rank: 55, aliases: ["judge", "aaron"] },
  { name: "joey bosa", rank: 56, aliases: ["bosa", "joey"] },
  { name: "jordan henderson", rank: 57, aliases: ["henderson", "jordan"] },
  { name: "daniel ricciardo", rank: 58, aliases: ["ricciardo", "daniel"] },
  { name: "draymond green", rank: 59, aliases: ["green", "draymond"] },
  { name: "darren till", rank: 60, aliases: ["till", "darren"] },
  { name: "dustin johnson", rank: 61, aliases: ["johnson", "dustin"] },
  { name: "phil mickelson", rank: 62, aliases: ["mickelson", "phil"] },
  { name: "baker mayfield", rank: 63, aliases: ["mayfield", "baker"] },
  { name: "aaron rodgers", rank: 64, aliases: ["rodgers", "aaron"] },
  { name: "jamarr chase", rank: 65, aliases: ["chase", "jamarr"] },
  { name: "kawhi leonard", rank: 66, aliases: ["leonard", "kawhi"] },
  { name: "zlatan ibrahimović", rank: 67, aliases: ["ibrahimovic", "zlatan"] },
  { name: "gareth bale", rank: 68, aliases: ["bale", "gareth"] },
  { name: "andre drummond", rank: 69, aliases: ["drummond", "andre"] },
  { name: "jimmy garoppolo", rank: 70, aliases: ["garoppolo", "jimmy"] },
  { name: "miguel cabrera", rank: 71, aliases: ["cabrera", "miguel"] },
  { name: "russell westbrook", rank: 72, aliases: ["westbrook", "russell"] },
  { name: "kyrie irving", rank: 73, aliases: ["irving", "kyrie"] },
  { name: "john wall", rank: 74, aliases: ["wall", "john"] },
  { name: "deebo samuel", rank: 75, aliases: ["samuel", "deebo"] },
  { name: "jaylen waddle", rank: 76, aliases: ["waddle", "jaylen"] },
  { name: "nick bosa", rank: 77, aliases: ["bosa", "nick"] },
  { name: "trae young", rank: 78, aliases: ["trae", "young"] },
  { name: "aaron donald", rank: 79, aliases: ["donald", "aaron"] },
  { name: "derrick white", rank: 80, aliases: ["white", "derrick"] },
  { name: "miles bridges", rank: 81, aliases: ["bridges", "miles"] },
  { name: "kyle kuzma", rank: 82, aliases: ["kuzma", "kyle"] },
  { name: "cj mccollum", rank: 83, aliases: ["mccollum", "cj"] },
  { name: "rudy gobert", rank: 84, aliases: ["gobert", "rudy"] },
  { name: "michael porter jr.", rank: 85, aliases: ["porter", "michael", "mpj"] },
  { name: "fred vanvleet", rank: 86, aliases: ["vanvleet", "fred"] },
  { name: "tyrese haliburton", rank: 87, aliases: ["haliburton", "tyrese"] },
  { name: "kristaps porzingis", rank: 88, aliases: ["porzingis", "kristaps"] },
  { name: "deandre ayton", rank: 89, aliases: ["ayton", "deandre"] },
  { name: "karl-anthony towns", rank: 90, aliases: ["towns", "karl", "kat"] },
  { name: "dangelo russell", rank: 91, aliases: ["russell", "dangelo"] },
  { name: "pascal siakam", rank: 92, aliases: ["siakam", "pascal"] },
  { name: "al horford", rank: 93, aliases: ["horford", "al"] },
  { name: "john collins", rank: 94, aliases: ["collins", "john"] },
  { name: "malcolm brogdon", rank: 95, aliases: ["brogdon", "malcolm"] },
  { name: "mo bamba", rank: 96, aliases: ["bamba", "mo"] },
  { name: "dennis schröder", rank: 97, aliases: ["schroder", "dennis"] },
  { name: "buddy hield", rank: 98, aliases: ["hield", "buddy"] },
  { name: "dillon brooks", rank: 99, aliases: ["brooks", "dillon"] },
  { name: "patrick beverley", rank: 100, aliases: ["beverley", "patrick"] }
];

// Handler for form submission
function submitGuess() {
  const input = document.getElementById("guess").value.trim().toLowerCase();
  const category = document.getElementById("category").value;
  const resultDiv = document.getElementById("result");

  let dataList = [];

  if (category === "athlete") {
    dataList = athletes;
  } else if (category === "instagram") {
    dataList = instaAccounts;
  }
    else if (category === "countries") {
    dataList = countries;
  }
    else if (category === "movies") {
    dataList = movies;
  }
    else if (category === "UkBoysNames") {
    dataList = ukBoysNames;
  }

  const match = dataList.find(item => {
    const all = [item.name, ...(item.aliases || [])].map(s => s.toLowerCase());
    return all.includes(input);
  });

  if (match) {
    score += match.rank; // 🟢 Add the rank number to the score
    resultDiv.innerText = `${match.name} is ranked #${match.rank}. +${match.rank} points!`;
  } else {
    resultDiv.innerText = `"${input}" is not in the Top 100 of the ${category} category.`;
  }

  document.getElementById("score").innerText = `Score: ${score}`;
  document.getElementById("guess").value = "";
}

function resetScore() {
  score = 0;
  document.getElementById("score").innerText = `Score: 0`;
  document.getElementById("result").innerText = "";
}
let currentRandomItem = null;

function generateRandomName() {
  const category = document.getElementById("category").value;
  const dataList = category === "athlete" ? athletes :
                   category === "instagram" ? instaAccounts :
                   category === "ukBoysNames" ? ukBoysNames : [];

  if (dataList.length === 0) return;

  currentRandomItem = dataList[Math.floor(Math.random() * dataList.length)];
  document.getElementById("randomNameDisplay").innerText = capitalize(currentRandomItem.name);
}

function submitRankGuess() {
  const guess = parseInt(document.getElementById("rankGuessInput").value);
  const resultDiv = document.getElementById("result");

  if (!currentRandomItem || isNaN(guess)) {
    resultDiv.innerText = "Please enter a valid rank.";
    return;
  }

  const actual = currentRandomItem.rank;
  const diff = Math.abs(guess - actual);
  const points = Math.max(0, 100 - diff); // max 100 points, less distance

  resultDiv.innerText = `${capitalize(currentRandomItem.name)} is ranked #${actual}. You were off by ${diff}. You earned ${points} points.`;

  generateRandomName(); // Next round
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function handleCategoryChange() {
  const mode = document.getElementById("gameMode").value;

  // Only regenerate a new name when in "Guess the Rank" mode
  if (mode === "rank-to-name") {
    generateRandomName();
  }
}
function generateRandomName() {
  const category = document.getElementById("category").value;
  let dataList = [];

  if (category === "athlete") {
    dataList = athletes;
  } else if (category === "instagram") {
    dataList = instaAccounts;
  } else if (category === "countries") {
    dataList = countries;
  } else if (category === "movies") {
    dataList = movies;
  } else if (category === "UkBoysNames") {
    dataList = ukBoysNames;
  }

  if (dataList.length === 0) return;

  currentRandomItem = dataList[Math.floor(Math.random() * dataList.length)];
  document.getElementById("randomNameDisplay").innerText = capitalize(currentRandomItem.name);
}

function handleCategoryChange() {
  const mode = document.getElementById("gameMode").value;

  if (mode === "rank-to-name") {
    generateRandomName(); // load a new name from the selected category
  }
}


