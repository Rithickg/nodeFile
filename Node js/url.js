var url=require("url");
var adr ="https://www.flipkart.com/asus-vivobook-15-2021-core-i3-10th-gen-8-gb-512-gb-ssd-windows-11-home-x515ja-ej362ws-thin-light-laptop/p/itm8ce53e6fb58bf?pid=COMG87FFPEDAAGXW&lid=LSTCOMG87FFPEDAAGXWTMCIPI&marketplace=FLIPKART&store=6bo%2Fb5g&srno=b_1_1&otracker=browse&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L1_view-all&fm=organic&iid=c38aaaa2-55f9-41b5-aab6-27d90bccff78.COMG87FFPEDAAGXW.SEARCH&ppt=browse&ppn=browse&ssid=ooy3mdhpog0000001648912103164";
var q=url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata =q.query;
