const content = document.getElementById("content");
const header = document.createElement("h1");
header.innerText = "Cheazy's Cheaze and Wine";
const subheader = document.createElement("h3");

const firstPage = function() {
  content.innerHTML = ""

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
  hours.classList.toggle("paperborder");
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

  const desc = document.createElement("div");
    desc.classList.toggle("paperborder")
    desc.appendChild(subheader);
    desc.appendChild(description);
    desc.appendChild(list);

  content.appendChild(desc);
  content.appendChild(hours);
}

const menuPage = function() {
  content.innerHTML = ""

  subheader.innerText = "Our menus";
  const cheeseDesc = document.createElement("p");
  cheeseDesc.innerText = "A fine selection of cheeses, curated by our head chef Roquefort von Brie and approved by Cheazy himself";

  const cheeseList = document.createElement("ul");
    const brie = createMenuItem('A french classic, this Brie de Meaux is a favourite of everyone from farmer to king. A pleasant, mild, and creamy taste, with some slight pungency. This one is sure to please.', 'https://www.welcometothetable.coop/sites/default/files/wp-content/uploads/2011/06/Brie_11.jpg' );
    const smokedGruyere =  createMenuItem('This is the giant of Swiss cheeses, the one that always comes to mind when people want a taste of the alps. We buy young gruyère of the highest quality, and smoke it in-house. This way, we get both the creamy and nutty notes inherent to the young cheese, and the complex aromas from smoking.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Smoked_Gruy%C3%A8re_cheese.jpg/220px-Smoked_Gruy%C3%A8re_cheese.jpg');
    const blackPepper = createMenuItem("A deceptively simple but excellent choice, this parmesan-cheddar hybrid is called BellaVitano, and is rolled in cracked pepper to impart a heavy pungency that cuts through the cheese's assertive and full - bodied flavour.", 'https://www.wisconsincheeseman.com/dw/image/v2/BBVM_PRD/on/demandware.static/-/Sites-colony-master-catalog/default/dw77a987cd/large/sub_13/013088.png?sw=680&sh=680&sm=fit');
    const cheddar = createMenuItem('An absolute classic and behemoth of the cheese world, this cheddar is aged 18 months in the eponymous Cheddar Gorge. This is what gives it the characteristic sharpness and pungency.', 'https://sclydeweaver.com/content/uploads/2019/08/Super-Sharp-Canadian-4-Year-Cheddar-820x800.jpg');

    cheeseList.appendChild(brie);
    cheeseList.appendChild(smokedGruyere);
    cheeseList.appendChild(blackPepper);
    cheeseList.appendChild(cheddar);

  const wineDesc = document.createElement("p");
  wineDesc.classList.toggle("paperborder");
  wineDesc.innerText = "Every 3 months, Cheazy's friend and caretaker Jesper heads off to central and southern Europe, where he visits vineyards new and old alike. After careful testing, he brings back only the finest of wines to serve at our restaurant.";

  const wineList = document.createElement("ul");
    const pinotNoir = createMenuItem('Brought home directly from a small artisinal winery in Burgundy, this excellent young wine carries an amazing aroma of raspberry and strawberry', 'https://images.vivino.com/labels/eBrpYglISJ-nbn-pvhI6Pw.jpg');
    const cabernetSauv = createMenuItem('This aged Cabernet Sauvignon is an instant classic. Full-bodied and bold, this wine presents you with a nose of blackcurrant, which ebbs and gives way to notes of cedar and cherry. This one is sure to blow you away', 'https://images.vivino.com/labels/g9Xgg-XFT7WERvcJO85Czg.jpg');
    const sangiovese = createMenuItem('This crowd-pleaser comes from a 200 year old winery in the Italian region of Tuscany. An unusual blend of aged and fresh wine, it has become a favourite in our establishment. It hits you with a spicy and fruity punch upfront, which is followed up by an almost tea-like aftertaste as it evolves on the palette.', 'https://images.vivino.com/labels/zcPoK0MRS7S7KOFnp28avg.jpg');

    wineList.appendChild(pinotNoir);
    wineList.appendChild(cabernetSauv);
    wineList.appendChild(sangiovese);

  content.appendChild(header);

  const topdesc = document.createElement("div");
    topdesc.classList.toggle("paperborder");
    topdesc.appendChild(subheader);
    topdesc.appendChild(cheeseDesc);

  content.appendChild(topdesc);
  content.appendChild(cheeseList);
  content.appendChild(wineDesc);
  content.appendChild(wineList);
}

const contactPage = function() {
  content.innerHTML = ""

  subheader.innerText = "Contact us:"

  const cheazy = createContactItem("Cheazy", "Owner", "555-555-5551", "cheazy@cheazeandwine.com", "https://media.discordapp.net/attachments/564592656311648286/838808120629002290/IMG_20210503_180345.jpg?width=724&height=543");

  const jesper = createContactItem("Jesper", "Manager", "0760491546", "jesperhipersson@gmail.com", "https://cdn.discordapp.com/attachments/287661094137495552/850164269974421524/rsz_00100sportrait_00100_burst20190923160827327_cover.png");

  const roquefort = createContactItem("Roquefort von Brie", "Head Chef", "555-555-5552", "rocky@cheazeandwine.com", "https://previews.123rf.com/images/kongvector/kongvector2001/kongvector200113966/138340560-emmental-cheese-cartoon-character-wearing-costume-of-chef-and-white-hat-vector-illustration.jpg");

  content.appendChild(header);
  content.appendChild(subheader);
  content.appendChild(cheazy);
  content.appendChild(jesper);
  content.appendChild(roquefort);
}

const createMenuItem = function(text, imageURL) {
  const item = document.createElement("div");
  item.classList.toggle("menuitem");
  item.classList.toggle("paperborder");
  const itemText = document.createElement("p");
  itemText.classList.toggle("menutext");
  itemText.innerText = text;
  item.appendChild(itemText)
  const itemImage = document.createElement("div");
  itemImage.classList.toggle("menuimage")
  itemImage.setAttribute('style', 'background-image: url("' + imageURL + '")');
  item.appendChild(itemImage);
  return item
}

const createContactItem = function(name, role, phone, mail, imageURL) {
  const contact = document.createElement("div");
  const contactText = document.createElement("div");
  contactText.classList.toggle("menutext");
  contact.classList.toggle("paperborder");
  contact.classList.toggle("menuitem");
  contact.classList.toggle("contact");
  let contactName = document.createElement("h2");
  contactName.innerText = name;
  let contactRole = document.createElement("p");
  contactRole.innerText = role;
  let contactPhone = document.createElement("p");
  contactPhone.innerText = phone;
  let contactMail = document.createElement("p");
  contactMail.innerText = mail;
  const contactImage = document.createElement("div");
  contactImage.classList.toggle("menuimage");
  contactImage.setAttribute('style', 'background-image: url("' + imageURL + '")');

  contactText.appendChild(contactName);
  contactText.appendChild(contactRole);
  contactText.appendChild(contactPhone);
  contactText.appendChild(contactMail);
  contact.appendChild(contactText);
  contact.appendChild(contactImage)
  return contact
}

export {firstPage, menuPage, contactPage}
