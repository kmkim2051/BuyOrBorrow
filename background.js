// kyobobook product title
const titlePath =
  "#container > div:nth-child(4) > form > div.box_detail_point > h1 > strong";
let titleElement = document.querySelector(titlePath);
let title_ = titleElement.innerText;
// I don't want a long title
title_ = title_.length > 15 ? title_.slice(0, 15) : title_;
const searchPath = {
  dgu:
    "http://lib.dongguk.edu/search/tot/result?st=KWRD&si=TOTAL&service_type=brief&q=%s&x=0&y=0",
  gb:
    "https://www.gblib.or.kr/search/gate.do?a_lib=#uri=lists&a_key=&a_v=f&a_cp=1&a_lib=&tmp_a_lib=&a_qf=Z&a_q=%s&a_rf=T&a_rq=",
};

let uris = {};
for (let path in searchPath) {
  // put book title into URI
  uris[path] = encodeURI(searchPath[path].replace("%s", title_));
  let _button = document.createElement("button");
  let _link = document.createElement("a");
  _link.href = uris[path];
  // open a new tab
  _link.target = "_blank";
  _link.innerText = path;

  _button.appendChild(_link);
  titleElement.appendChild(_button);
}
