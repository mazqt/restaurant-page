const content = document.getElementById("content");
const header = document.createElement("h1");
header.innerText = "Cheazy's Cheaze and Wine";
const subheader = document.createElement("h3");

const firstPage = function() {
  subheader.innerText = "The best wine bar in all of Trelleborg";
  const description = document.createElement("p");
  description.innerText = "After years of begging for a piece of Cheddar, or sometimes even a sad chunk of Gouda, Cheazy got fed up with his owner and decided to give the restaurant business a try. Thus was born Cheaze and Wine, the finest wine bar in Southern Sweden."
  const listDesc = document.createElement("p");
  listDesc.innerText = "We offer:";
  const list = document.createElement("ul");
  let listItem1 = document.createElement("li");
  listItem1.innerText = "Premises almost as pawdorable as the owner, located in the cellar of the old pub Tre Lyktor";
  list.appendChild(listItem1);
  let listItem2 = document.createElement("li");
  listItem2.innerText = "A selection of cheese's handpicked by our head chef and Cheazy himself"
  list.appendChild(listItem2);
  let listItem3 = document.createElement("li");
  listItem3.innerText = "Lovely wines bought directly from French, Italian, and Swiss vineyards by Cheazy's owner Jesper"
  list.appendChild(listItem3);
  const hours = document.createElement("div");
    hours.setAttribute("id", "hours");
    const hoursHeader = document.createElement("h2");
    hoursHeader.innerText = "Hours:";
    const monday = document.createElement("p");
    monday.innerText = "Monday: Closed";
    const tuesThurs = document.createElement("p");
    tuesThurs.innerText = "Tuesday through Thursday: 17-22";
    const friSat = document.createElement("p");
    friSat.innerText = "Friday and Saturday: 17-01";
    const sunday = document.createElement("p");
    sunday.innerText = "Sunday: 15-22";

    hours.appendChild(hoursHeader);
    hours.appendChild(monday);
    hours.appendChild(tuesThurs);
    hours.appendChild(friSat);
    hours.appendChild(sunday);

  content.appendChild(header);
  content.appendChild(subheader);
  content.appendChild(description);
  content.appendChild(list)
  content.appendChild(hours);
}

const menuPage = function() {
  subheader.innerText = "Our menus";
  const cheeseDesc = document.createElement("p");
  cheeseDesc.innerText = "A fine selection of cheeses, curated by our head chef Roquefort von Brie and approved by Cheazy himself";

  const cheeseList = document.createElement("ul");
    const brie = document.createElement("li");
    brie.innerText = "A french classic, this Brie de Meaux is a favourite of everyone from farmer to king. A pleasant, mild, and creamy taste, with some slight pungency. This one is sure to please.";
    const smokedGruyere = document.createElement("li");
    smokedGruyere.innerText = "This is the giant of Swiss cheeses, the one that always comes to mind when people want a taste of the alps. We buy young gruyère of the highest quality, and smoke it in-house. This way, we get both the creamy and nutty notes inherent to the young cheese, and the complex aromas from smoking.";
    const blackPepper = document.createElement("li");
    blackPepper.innerText = "A deceptively simple but excellent choice, this parmesan-cheddar hybrid is called BellaVitano, and is rolled in cracked pepper to impart a heavy pungency that cuts through the cheese's assertive and full-bodied flavour.";
    const cheddar = document.createElement("li");
    cheddar.innerText = "An absolute classic and behemoth of the cheese world, this cheddar is aged 18 months in the eponymous Cheedar Gorge. This is what gives it the characteristic sharpness and pungency.";

    cheeseList.appendChild(brie);
    cheeseList.appendChild(smokedGruyere);
    cheeseList.appendChild(blackPepper);
    cheeseList.appendChild(cheddar);

  const wineDesc = document.createElement("p");
  wineDesc.innerText = "Every 3 months, Cheazy's friend and caretaker Jesper heads off to central and southern Europe, where he visits vineyards new and old alike. After careful testing, he brings back only the finest of wines to serve at our restaurant.";

  const wineList = document.createElement("ul");
    const pinotNoir = document.createElement("li");
    pinotNoir.innerText = "Brought home directly from a small artisinal winery in Burgundy, this excellent young wine carries an amazing aroma of raspberry and strawberry"
    const cabernetSauv = document.createElement("li");
    cabernetSauv.innerText = "This aged Cabernet Sauvignon is an instant classic. Full-bodied and bold, this wine presents you with a nose of blackcurrant, which ebbs and gives way to notes of cedar and cherry. This one is sure to blow you away";
    const sangiovese = document.createElement("li");
    sangiovese.innerText = "This crowd-pleaser comes from a 200 year old winery in the Italian region of Tuscany. An unusual blend of aged and fresh wine, it has become a favourite in our establishment. It hits you with a spicy and fruity punch upfront, which is followed up by an almost tea-like aftertaste as it evolves on the palette.";

    wineList.appendChild(pinotNoir);
    wineList.appendChild(cabernetSauv);
    wineList.appendChild(sangiovese);

  content.appendChild(header);
  content.appendChild(subheader);
  content.appendChild(cheeseDesc);
  content.appendChild(cheeseList);
  content.appendChild(wineDesc);
  content.appendChild(wineList);
}

const contactPage = function() {
  subheader.innerText = "Contact us:"

  const cheazy = document.createElement("div");
    let nameCheazy = document.createElement("h2");
    nameCheazy.innerText = "Cheazy";
    let roleCheazy = document.createElement("p");
    roleCheazy.innerText = "Owner";
    let phoneCheazy = document.createElement("p");
    phoneCheazy.innerText = "555-555-5551";
    let mailCheazy = document.createElement("p");
    mailCheazy.innerText = "cheazy@cheazeandwine.com";

    cheazy.appendChild(nameCheazy);
    cheazy.appendChild(roleCheazy);
    cheazy.appendChild(phoneCheazy);
    cheazy.appendChild(mailCheazy);

  const jesper = document.createElement("div");
    let nameJesper = document.createElement("h2");
    nameJesper.innerText = "Jesper";
    let roleJesper = document.createElement("p");
    roleJesper.innerText = "Manager";
    let phoneJesper = document.createElement("p");
    phoneJesper.innerText = "0760491546";
    let mailJesper = document.createElement("p");
    mailJesper.innerText = "jesperhipersson@gmail.com";

    jesper.appendChild(nameJesper);
    jesper.appendChild(roleJesper);
    jesper.appendChild(phoneJesper);
    jesper.appendChild(mailJesper);

  const roquefort = document.createElement("div")
    let nameRoq = document.createElement("h2");
    nameRoq.innerText = "Roquefort von Brie";
    let roleRoq = document.createElement("p");
    roleRoq.innerText = "Head Chef";
    let phoneRoq = document.createElement("p");
    phoneRoq.innerText = "555-555-5552";
    let mailRoq = document.createElement("p");
    mailRoq.innerText = "rocky@cheazeandwine.com";

    roquefort.appendChild(nameRoq);
    roquefort.appendChild(roleRoq);
    roquefort.appendChild(phoneRoq);
    roquefort.appendChild(mailRoq);

  content.appendChild(header);
  content.appendChild(subheader);
  content.appendChild(cheazy);
  content.appendChild(jesper);
  content.appendChild(roquefort);
}

export {firstPage, menuPage, contactPage}
