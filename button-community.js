btn_urls = {
  solectwo_btn: "https://www.facebook.com/solectwogoleczewo",
  kgw_btn: "https://www.facebook.com/KgwGoleczewo",
  goleczewianie_button: "https://www.facebook.com/groups/303112129878804",
  straz_btn: "https://www.facebook.com/profile.php?id=100081213526668",
  golenhofen_btn: "https://goleczewo.com/",
  zero_btn: "https://www.facebook.com/groups/449312105737004",
};

for (var btn_id in btn_urls) {
  //fetch button
  let btn = document.querySelector("#" + btn_id);

  //redirect when transition ends
  btn.addEventListener("transitionend", function afterTransition() {
    window.location.replace(btn_urls[btn.id]);
  });

  //add class active (color change)
  btn.addEventListener("click", function onClick() {
    btn.classList.toggle("active");
  });
}
