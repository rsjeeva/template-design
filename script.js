let data = [
    {
    id:1,
    item:"item 1",
    price:"$24.99",
    img:"https://place-hold.it/700x400&text=700X400&fontsize=20",
    desc:"Lorem akhfga fasjfgwqe fwiehfgwf wefwuhfwjvg wvwofw love",
    rating:4.5},
    {
    id:2,
    item:"item 2",
    price:"$24.99",
    img:"https://place-hold.it/700x400&text=700X400&fontsize=20",
    desc:"Lorem akhfga fasjfgwqe fwiehfgwf wefwuhfwjvg wvwofw love",
    rating:4.5},
    {
    id:3,
    item:"item 3",
    price:"$24.99",
    img:"https://place-hold.it/700x400&text=700X400&fontsize=20",
    desc:"Lorem akhfga fasjfgwqe fwiehfgwf wefwuhfwjvg wvwofw love",
    rating:4.5},
    {
    id:4,
    item:"item 4",
    price:"$24.99",
    img:"https://place-hold.it/700x400&text=700X400&fontsize=20",
    desc:"Lorem akhfga fasjfgwqe fwiehfgwf wefwuhfwjvg wvwofw love",
    rating:4.5},
    {
    id:5,
    item:"item 5",
    price:"$24.99",
    img:"https://place-hold.it/700x400&text=700X400&fontsize=20",
    desc:"Lorem akhfga fasjfgwqe fwiehfgwf wefwuhfwjvg wvwofw love",
    rating:4.5},
    {
    id:6,
    item:"item 6",
    price:"$24.99",
    img:"https://place-hold.it/700x400&text=700X400&fontsize=20",
    desc:"Lorem akhfga fasjfgwqe fwiehfgwf wefwuhfwjvg wvwofw love",
    rating:4.5}
];

let row = document.querySelector("#product-items");

data.forEach((element) => {
    console.log(element.rating);
    let col = createMyElement("div","col-lg-4 col-md-6 mb-4");
    let card = createMyElement("div","card");
    let img = createMyElement("img", "card-img-top");
    img.src=element.img;
    let cbody = createMyElement("div","card-body");
    let h4 = createMyElement("h4","card-title");
    let an = createMyElement("a");
    an.href="";
    an.innerHtml=element.item;
    let h5 = createMyElement("h5");
    h5.innerHtml=element.price;
    let ptag= createMyElement("p","card-text");
    ptag.innerHtml=element.desc;
    let footer = createMyElement("div","card-footer");
    footer.innerHtml=element.rating;
    h4.append(an);
    cbody.append(h4,h5,ptag);
    card.append(img,cbody,footer);
    col.append(card);
    row.append(col);
});



function createMyElement(tag, cl_nm="")
{
    let ele = document.createElement(tag);
    ele.setAttribute("class",cl_nm);
    return ele;
}
