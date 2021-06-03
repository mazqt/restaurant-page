const firstPage = (function() {
  const content = document.getElementById("content");
  const header = document.createElement("h1");
  header.innerText = "Cheazy's Cheaze and Wine";
  const subheader = document.createElement("h3");
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
})()
export default firstPage
