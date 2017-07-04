/************************************************************/
/**		1. 机具布放省市联动JS									*/
/**		2.如何使用： 在使用页面的初始化事件中调用 loadPro() 该方法		*/
/**		3.详细参考dome.jsp页面 								*/
/************************************************************/

var areaList = {
	"请选择" : [ [ "请选择", "00" ] ],
	"北京市" : [ [ "请选择", "11" ], [ "北京市", "1100" ] ],
	"天津市" : [ [ "请选择", "12" ], [ "天津市", "1200" ] ],
	"河北省" : [ [ "请选择", "13" ], [ "石家庄市", "1301" ], [ "唐山市", "1302" ],
			[ "秦皇岛市", "1303" ], [ "邯郸市", "1304" ], [ "邢台市", "1305" ],
			[ "保定市", "1306" ], [ "张家口市", "1307" ], [ "承德市", "1308" ],
			[ "沧州市", "1309" ], [ "廊坊市", "1310" ], [ "衡水市", "1311" ] ],
			
	"山西省" : [ [ "请选择", "14" ], [ "太原市", "1401" ], [ "大同市", "1402" ],
			[ "阳泉市", "1403" ], [ "长治市", "1404" ], [ "晋城市", "1405" ], [ "朔州市", "1406" ],
			[ "晋中市", "1407" ], [ "运城市", "1408" ], [ "忻州市", "1409" ], [ "临汾市", "1410" ],
			[ "吕梁市", "1411" ] ],
			
	"内蒙古" : [ [ "请选择", "15" ], [ "呼和浩特市", "1501" ], [ "包头市", "1502" ],
			[ "乌海市", "1503" ], [ "赤峰市", "1504" ], [ "通辽市", "1505" ],
			[ "鄂尔多斯市", "1506" ], [ "呼伦贝尔市", "1507" ], [ "巴彦淖尔市", "1508" ], [ "乌兰察布市", "1509" ],
			[ "兴安盟", "1522" ], [ "锡林郭勒盟", "1525" ], [ "阿拉善盟", "1529" ] ],

	"辽宁省" : [ [ "请选择", "21" ], [ "沈阳市", "2101" ], [ "大连市", "2102" ],
			[ "鞍山市", "2103" ], [ "抚顺市", "2104" ], [ "本溪市", "2105" ], [ "丹东市", "2106" ],
			[ "锦州市", "2107" ], [ "营口市", "2108" ], [ "阜新市", "2109" ],
			[ "辽阳市", "2110" ], [ "盘锦市", "2111" ], [ "铁岭市", "2112" ], [ "朝阳市", "2113" ],
			[ "葫芦岛市", "2114" ] ],
			
	"吉林省" : [ [ "请选择", "22" ], [ "长春市", "2201" ], [ "吉林市", "2202" ], [ "四平市", "2203" ],
			[ "辽源市", "2204" ], [ "通化市", "2205" ], [ "白山市", "2206" ], [ "松原市", "2207" ],
			[ "白城市", "2208" ], [ "延边朝鲜族自治州", "2224" ] ],
			
	"黑龙江省" : [ [ "请选择", "23" ], [ "哈尔滨市", "2301" ], [ "齐齐哈尔市", "2302" ],
			[ "鸡西市", "2303" ], [ "鹤岗市", "2304" ], [ "双鸭山市", "2305" ],
			[ "大庆市", "2306" ], [ "伊春市", "2307" ], [ "佳木斯市", "2308" ],
			[ "七台河市", "2309" ], [ "牡丹江市", "2310" ], [ "黑河市", "2311" ],
			[ "绥化市 ", "2312" ], [ "大兴安岭地区", "2327" ] ],

	"上海市" : [ [ "请选择", "31" ], [ "上海市", "3100" ] ],
			
	"江苏省" : [ [ "请选择", "32" ], [ "南京市", "3201" ], [ "无锡市", "3202" ],
			[ "徐州市", "3203" ], [ "常州市", "3204" ], [ "苏州市", "3205" ], [ "南通市", "3206" ],
			[ "连云港市", "3207" ], [ "淮安市", "3208" ], [ "盐城市", "3209" ], [ "扬州市", "3210" ],
			[ "镇江市", "3211" ], [ "泰州市", "3212" ], [ "宿迁市", "3213" ] ],

	"浙江省" : [ [ "请选择", "33" ], [ "杭州市", "3301" ], [ "宁波市", "3302" ],
			[ "温州市", "3303" ], [ "嘉兴市", "3304" ], [ "湖州市", "3305" ], [ "绍兴市", "3306" ],
			[ "金华市", "3307" ], [ "衢州市", "3308" ], [ "舟山市", "3309" ], [ "台州市", "3310" ],
			[ "丽水市", "3311" ] ],

	"安徽省" : [ [ "请选择", "34" ],[ "合肥市", "3401" ], [ "芜湖市", "3402" ], [ "蚌埠市", "3403" ], [ "淮南市", "3404" ],
			[ "马鞍山市", "3405" ], [ "淮北市", "3406" ], [ "铜陵市", "3407" ], [ "安庆市", "3408" ],
			[ "黄山市", "3410" ], [ "滁州市", "3411" ], [ "阜阳市", "3412" ],
			[ "宿州市", "3413" ], [ "巢湖市", "3414" ], [ "六安市", "3415" ],
			[ "亳州市", "3416" ], [ "池州市", "3417" ], [ "宣城市", "3418" ] ],
			
	"福建省" : [ [ "请选择", "35" ],[ "福州市", "3501" ], [ "厦门市", "3502" ], [ "莆田市", "3503" ],
			[ "三明市", "3504" ], [ "泉州市", "3505" ], [ "漳州市", "3506" ], [ "南平市", "3507" ],
			[ "龙岩市", "3508" ], [ "宁德市", "3509" ] ],
			
	"江西省" : [ [ "请选择", "36" ],[ "南昌市", "3601" ], [ "景德镇市", "3602" ], [ "萍乡市", "3603" ], [ "九江市", "3604" ],
			[ "新余市", "3605" ], [ "鹰潭市", "3606" ], [ "赣州市", "3607" ], [ "吉安市", "3608" ],
			[ "宜春市", "3609" ], [ "抚州市", "3610" ], [ "上饶市", "3611" ] ],
			
	"山东省" : [ [ "请选择", "37" ],[ "济南市", "3701" ], [ "青岛市", "3702" ], [ "淄博市", "3703" ],
			[ "枣庄市", "3704" ], [ "东营市", "3705" ], [ "烟台市", "3706" ], [ "潍坊市", "3707" ],
			[ "济宁市", "3708" ], [ "泰安市", "3709" ], [ "威海市", "3710" ], [ "日照市", "3711" ],
			[ "莱芜市", "3712" ], [ "临沂市", "3713" ], [ "德州市", "3714" ], [ "聊城市", "3715" ],
			[ "滨州市", "3716" ], [ "荷泽市", "3717" ] ],
			
	"河南省" : [ [ "请选择", "41" ],[ "郑州市", "4101" ], [ "开封市", "4102" ], [ "洛阳市", "4103" ],
			[ "焦作", "4104" ], [ "安阳市", "4105" ], [ "鹤壁市", "4106" ], [ "新乡市", "4107" ],
			[ "焦作市", "4108" ], [ "濮阳市", "4109" ], [ "许昌市", "4110" ],
			[ "漯河市", "4111" ], [ "三门峡市", "4112" ], [ "南阳市", "4113" ], [ "商丘市", "4114" ],
			[ "信阳市", "4115" ], [ "周口市", "4116" ], [ "驻马店市", "4117" ] ],
			
	"湖北省" : [ [ "请选择", "42" ],[ "武汉市", "4201" ], [ "黄石市", "4202" ], [ "十堰市", "4203" ],
			[ "宜昌市", "4205" ], [ "襄樊市", "4206" ], [ "鄂州市", "4207" ], [ "荆门市", "4208" ],
			[ "孝感市", "4209" ], [ "荆州市", "4210" ], [ "黄冈市", "4211" ], [ "咸宁市", "4212" ],
			[ "随州市", "4213" ], [ "恩施土家族苗族自治州", "4228" ] ],
			
			
	"湖南省" : [ [ "请选择", "43" ],[ "长沙市", "4301" ], [ "株洲市", "4302" ], [ "湘潭市", "4303" ], [ "衡阳市", "4304" ],
			[ "邵阳市", "4305" ], [ "岳阳市", "4306" ], [ "常德市", "4307" ], [ "张家界市", "4308" ],
			[ "益阳市", "4309" ], [ "郴州市", "4310" ], [ "永州市", "4311" ], [ "怀化市", "4312" ],
			[ "娄底市", "4313" ], [ "湘西土家族苗族自治州", "4331" ] ],
			
	"广东省" : [ [ "请选择", "44" ],[ "广州市", "4401" ], [ "韶关市", "4402" ], [ "深圳市", "4403" ], [ "珠海市", "4404" ],
			[ "汕头市", "4405" ], [ "佛山市", "4406" ], [ "江门市", "4407" ], [ "湛江市", "4408" ],
			[ "茂名市", "4409" ], [ "肇庆市", "4412" ], [ "惠州市", "4413" ], [ "梅州市", "4414" ],
			[ "汕尾市", "4415" ], [ "河源市", "4416" ], [ "阳江市", "4417" ], [ "清远市", "4418" ],
			[ "东莞市", "4419" ], [ "中山市", "4420" ], [ "潮州市", "4451" ], [ "揭阳市", "4452" ],
			[ "云浮市", "4453" ] ],
			
	"广西壮族自治区" : [ [ "请选择", "45" ],[ "南宁市", "4501" ], [ "柳州市", "4502" ], [ "桂林市", "4503" ],
			[ "梧州市", "4504" ], [ "北海市", "4505" ], [ "防城港市", "4506" ],
			[ "钦州市", "4507" ], [ "贵港市", "4508" ], [ "玉林市", "4509" ], [ "百色市", "4510" ],
			[ "贺州市", "4511" ], [ "河池市", "4512" ], [ "来宾市", "4513" ], [ "崇左市", "4514" ] ],
			
	"海南省" : [ [ "请选择", "46" ],[ "海口市", "4601" ], [ "三亚市", "4602" ], [ "五指山市", "4603" ],
			[ "文昌市", "4606" ], [ "琼海市", "4607" ], [ "万宁市", "4608" ], [ "儋州市", "4609" ],
			[ "东方市", "4610" ], [ "定安县", "4611" ], [ "屯昌县", "4612" ],
			[ "澄迈县", "4613" ], [ "临高县", "4614" ], [ "白沙县", "4615" ],
			[ "昌江县", "4616" ], [ "乐东县", "4617" ], [ "陵水县", "4618" ], [ "保亭县", "4619" ],
			[ "琼中县", "4620" ], [ "洋浦开发区", "4621" ] ],
			
	"重庆市" : [ [ "请选择", "50" ],[ "重庆市", "5000" ] ],
	
	"四川省" : [ [ "请选择", "51" ],[ "成都市", "5101" ], [ "自贡市","5103" ], [ "攀枝花","5104" ],
			[ "泸州市","5105" ], [ "德阳市","5106" ], [ "绵阳市","5107" ], [ "广元市","5108" ],
			[ "遂宁市","5109" ], [ "内江市","5110" ], [ "乐山市","5111" ],
			[ "南充市","5113" ], [ "眉山市","5114" ], [ "宜宾市","5115" ], [ "广安市","5116" ],
			[ "达州市","5117" ], [ "雅安市","5118" ], [ "巴中市","5119" ],
			[ "资阳市","5120" ], [ "阿坝藏族羌族自治州", "5132" ], [ "甘孜藏族自治州", "5133" ], [ "凉山彝族自治州", "5134" ] ],

	"贵州省" : [ [ "请选择", "52" ],[ "贵阳市", "5201" ], [ "六盘水市", "5202" ], [ "遵义市", "5203" ],
			[ "安顺市", "5204" ], [ "铜仁地区", "5222" ], [ "黔西南布依族苗族自治州", "5223" ],
			[ "毕节地区", "5224" ], [ "黔东南苗族侗族自治州", "5226" ], [ "黔南布依族苗族自治州", "5227" ] ],

	"云南省" : [ [ "请选择", "53" ],[ "昆明市", "5301" ], [ "曲靖市", "5303" ], [ "玉溪市", "5304" ],
			[ "保山市", "5305" ], [ "昭通市", "5306" ], [ "丽江市", "5307" ],
			[ "思茅市", "5308" ], [ "临沧市", "5309" ], [ "楚雄彝族自治州", "5323" ],
			[ "红河哈尼族彝族自治州", "5325" ], [ "文山壮族苗族自治州", "5326" ], [ "西双版纳傣族自治州", "5328" ],
			[ "大理白族自治州", "5329" ], [ "德宏傣族景颇族自治州", "5331" ], [ "怒江傈僳族自治州", "5333" ],
			[ "迪庆藏族自治州", "5334" ] ],
			
	"西藏自治区" : [ [ "请选择", "54" ],[ "拉萨市", "5401" ], [ "昌都地区", "5421" ], [ "山南地区", "5422" ],
			[ "日喀则地区", "5423" ], [ "那曲地区", "5424" ], [ "阿里地区", "5425" ], [ "林芝地区", "5426" ] ],
			
	"陕西省" : [ [ "请选择", "61" ],[ "西安市", "6101" ], [ "铜川市", "6102" ], [ "宝鸡市", "6103" ], [ "咸阳市", "6104" ],
			[ "渭南市", "6105" ], [ "延安市", "6106" ], [ "汉中市", "6107" ], [ "榆林市", "6108" ],
			[ "安康市", "6109" ], [ "商洛市", "6110" ] ],
			
	"甘肃省" : [ [ "请选择", "62" ],[ "兰州市", "6201" ], [ "嘉峪关市", "6202" ], [ "金昌市", "6203" ],
			[ "白银市", "6204" ], [ "天水市", "6205" ], [ "武威市", "6206" ],
			[ "张掖市", "6207" ], [ "平凉市", "6208" ], [ "酒泉市", "6209" ], [ "庆阳市", "6210" ],
			[ "定西市", "6211" ], [ "陇南市", "6212" ], [ "临夏回族自治州", "6229" ], [ "甘南藏族自治州", "6230" ] ],
			
	"青海省" : [ [ "请选择", "63" ],[ "西宁市", "6301" ], [ "海东地区", "6321" ], [ "海北藏族自治州", "6322" ],
			[ "黄南藏族自治州", "6323" ], [ "海南藏族自治州", "6325" ], [ "果洛藏族自治州", "6326" ],
			[ "玉树藏族自治州", "6327" ], [ "海西蒙古族藏族自治州", "6328" ] ],
			
	"宁夏回族自治区" : [ [ "请选择", "64" ],[ "银川市", "6401" ], [ "石嘴山市", "6402" ], [ "吴忠市", "6403" ],
			[ "固原市", "6404" ],[ "中卫市", "6405" ] ],
			
	"新疆维吾尔自治区" : [ [ "请选择", "65" ],[ "乌鲁木齐市", "6501" ], [ "克拉玛依市", "6502" ], [ "吐鲁番地区", "6521" ],
			[ "哈密地区", "6522" ], [ "昌吉回族自治州", "6523" ], [ "博尔塔拉蒙古自治州", "6527" ],
			[ "巴音郭楞蒙古自治州", "6528" ], [ "阿克苏地区", "6529" ], [ "克孜勒苏柯尔克孜自治州", "6530" ],
			[ "喀什地区", "6531" ], [ "和田地区", "6532" ], [ "伊犁哈萨克自治州", "6540" ],
			[ "塔城地区", "6542" ], [ "阿勒泰地区", "6543" ] ]

};


var sk = 0;
var fd = 0;
var skk;
var ix = 0;
var sx = 0;
var province = document.getElementById("provinceSel"); 	// 省份的下拉框
var city = document.getElementById("citySel"); 		// 市的下拉框


// 初始化调用的方法
function loadPro(){
	for (nx = 0; nx < 2; nx++) {
		if (nx == 0) {
			province = document.getElementById("provinceSel");// 省份的下拉框
			city = document.getElementById("citySel");	// 市的下拉框
		}
		if (province.options.length < 2) {
			for (name in areaList) {
				province.options[sk++] = new Option(name, name);
			}
		}
		
		province.selectedIndex = sx;
		province.value = province.options[province.selectedIndex].value;
		changeCity();
		city.selectedIndex = ix;
		city.value = city.options[city.selectedIndex].value;
		
	}
}



// 根据选择的省加载市信息
function changeCity() {
	var tmpcls = areaList[province.value];
	var fs = 0;
	city.innerHTML = '';
	if (province.value == "省份") {
		city.options[0] = new Option("←选左边", 0);
	} else {
		try {
			if (tmpcls[0][0].indexOf("请选择") != -1)
				fs++;
		} catch (e) {
		}
		city.options[0] = new Option("请选择", 0);
		city.options[0].disabled = "disabled";
		city.options[0].style.color = "#060";
		for (i = 0; i < tmpcls.length; i++) {
			if (typeof (tmpcls[i][0]) != "undefined" && tmpcls[i][0].length > 1) {
				//city.options[i] = new Option(tmpcls[i][0], tmpcls[i][1]);
				city.options[i] = new Option(tmpcls[i][0], tmpcls[i][0]);
			} else {
				city.options[i] = new Option(tmpcls[i], tmpcls[i]);
			}
		}
	}
	
	return;
}

// 根据省份加载出市的信息
function loadCity(province){
	var tmpcls = areaList[province];
	for (i = 0; i < tmpcls.length; i++) {
		if (typeof (tmpcls[i][0]) != "undefined" && tmpcls[i][0].length > 1) {
			//city.options[i] = new Option(tmpcls[i][0], tmpcls[i][1]);
			city.options[i] = new Option(tmpcls[i][0], tmpcls[i][0]);
		} else {
			city.options[i] = new Option(tmpcls[i], tmpcls[i]);
		}
	}
	
}
