const nav = document.getElementById("navigation");
const Name = document.getElementsByClassName("name")[0];
const navLink = document.getElementsByClassName("navLink");
const card = document.getElementsByClassName("card");
const Lin = [
  "https://tse3.mm.bing.net/th?id=OIP.WoJ9e152xKdKSTlT6Z3FOwHaHa&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.yDBqiO_eZ5gBKhzEQ8hV3gHaHa&pid=Api&P=0&h=180",
  "https://static.vecteezy.com/system/resources/previews/000/212/880/original/flat-social-media-icon-vector.jpg",
  "https://tse1.mm.bing.net/th?id=OIP.qtMVqdXV4cCqjeiuBvQ9xgHaHa&pid=Api&P=0&h=180",
  "https://store-images.s-microsoft.com/image/apps.57266.13510798884743853.c3988996-1e3d-42ec-8626-05272e03bf7f.f33786f9-2ebc-4721-996f-8466328f97c0?mode=scale&q=90&h=1080&w=1920",
  "https://tse3.mm.bing.net/th?id=OIP.PgLBFSHYghLtDUIC-LxxqwHaHa&pid=Api&P=0&h=180",
  "https://tse3.mm.bing.net/th?id=OIP.wEZ1zYLC_XvVH9Ekn0NVKwHaE7&pid=Api&P=0&h=180",
  "http://www.insidehighered.com/sites/default/server_files/media/iStock-520374378.jpg",
  "https://i1.wp.com/www.papertraildesign.com/wp-content/uploads/2018/10/To-Do-List-floral.jpg",
  "https://tse1.mm.bing.net/th?id=OIP.XPi7MHCn1eCyfNcB7AZIYAHaHa&pid=Api&P=0&h=180",
  "https://tse3.mm.bing.net/th?id=OIP.nz_Xpt5lqxjUqjnYRb2A0AHaEr&pid=Api&P=0&h=180",
  "https://tinfoil.media/i/010004701504A000/0/0/ce1e74767796693422a1e11b52c0fe271a36dda52db18882459b87e5ee90ec62",
  "https://i.pinimg.com/originals/eb/fe/3e/ebfe3ea8d7946219405f638b44c38dcf.png",
  "https://i.ibb.co/s30DcmB/cafems.png",
  "https://tse4.mm.bing.net/th?id=OIP.Gd47NFoL0s8end6JDEJtuQHaDt&pid=Api&P=0&h=180",
  "https://www.ahirlabs.com/wp-content/uploads/2019/01/Basic-Logic-Gates-with-Truth-Table.png",
  "https://tse2.mm.bing.net/th?id=OIP.8zpWqtsc60k9KnGBryZ0AQAAAA&pid=Api&P=0&h=180",
  "https://onplanners.com/sites/default/files/template-images/printable-daily-do-list-floral-style-template.png",
  "https://miro.medium.com/max/3200/1*US69Dl6UlgYDT7s9RnMeMg.jpeg",
  "https://images.examples.com/wp-content/uploads/2017/11/Square-Portfolio-Brochure-Example.jpg",
];
const homebtn = document.getElementById("homebtn");
const aboutbtn = document.getElementById("aboutbtn");
const servicebtn = document.getElementById("servicebtn");
const contactbtn = document.getElementById("contactbtn");
const listhomebtn = document.getElementById("listhomebtn");
const listaboutbtn = document.getElementById("listaboutbtn");
const listservicebtn = document.getElementById("listservicebtn");
const listcontactbtn = document.getElementById("listcontactbtn");
const navlist = document.getElementsByClassName("navlist")[0];
const menuicon = document.getElementById("menuicon");
const home = document.getElementById("home");
const aboutus = document.getElementById("aboutus");
const service = document.getElementById("service");
const contact = document.getElementById("contact");

menuicon.addEventListener("click", () => {
  if (navlist.style.display == "block") {
    navlist.style.display = "none";
    console.log("fnone");
  } else {
    navlist.style.display = "block";
    console.log("flex");
  }
});

homebtn.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});
aboutbtn.addEventListener("click", () => {
  aboutus.scrollIntoView({ behavior: "smooth" });
});
servicebtn.addEventListener("click", () => {
  service.scrollIntoView({ behavior: "smooth" });
});
contactbtn.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

listhomebtn.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});
listaboutbtn.addEventListener("click", () => {
  aboutus.scrollIntoView({ behavior: "smooth" });
});
listservicebtn.addEventListener("click", () => {
  service.scrollIntoView({ behavior: "smooth" });
});
listcontactbtn.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.backgroundColor = "#4a0127";
    Name.style.color = "#e9cada";
    nav.style.boxShadow = "0px 2px 5px 0px #e9cada";
    menuicon.style.filter = "";
    for (let i in navLink) {
      if (i > navLink.length) {
        break;
      }
      navLink[i].style.color = "#e9cada";
    }
  } else {
    nav.style.backgroundColor = "";
    Name.style.color = "";
    nav.style.boxShadow = "";
    menuicon.style.filter = "invert()";
    for (let i in navLink) {
      if (i > navLink.length) {
        break;
      }
      navLink[i].style.color = "";
    }
  }
};
for (let i in card) {
  card[i].style.backgroundImage = `url(${Lin[i]})`;
}
