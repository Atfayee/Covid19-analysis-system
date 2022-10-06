/**
 * Created by yuyu on 2020/2/2.
 */


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('map'));


//设置容器高宽
resizeContainer('map', 'firstBlock');

let ItalyNameMap = {
    'Trentino-Alto Adige': '特伦蒂诺-上阿迪杰', 'Lombardy': '伦巴第', 'Emilia-Romagna': '艾米利亚-罗马涅', 'Veneto': '威尼托', 'Piemont': '皮埃蒙特', 'Marche': '马尔凯', 'Liguria': '利古里亚', 'Campania': '坎帕尼亚', 'Tuscany': '托斯卡纳', 'Friuli Venezia Giulia': '弗留利-威尼斯朱利亚', 'Lazio': '拉齐奥', 'Sicily': '西西里', 'Abruzzo': '阿布鲁佐', 'Apulia': '普利亚', 'Umbria': '翁布里亚', 'Calabria': '卡拉布里亚', 'Bolzano': '博尔扎诺', 'To be confirmed': '待确认', 'Trento': '特伦托', 'Molise': '莫利塞', 'Sardinia': '撒丁岛', 'Basilicata': '巴西利卡塔','Aosta Valley': '瓦莱达奥斯塔'
};
let KoreaNameMap = {
    'North Gyeongsang': '庆尚北道', 'Busan': '釜山', 'Gyeonggi': '京畿道', 'Seoul': '首尔', 'Daejeon': '大田', 'Ulsan': '蔚山', 'South Gyeongsang': '庆尚南道', 'Gwangju': '光州市', 'Daegu': '大邱', 'South Chungcheong': '忠清南道', 'Gangwon': '江原道', 'North Chungcheong': '忠清北道', 'Incheon': '仁川', 'North Jeolla': '全罗北道', 'South Jeolla': '全罗南道', 'Sejong': '世宗', 'Jeju': '济州岛'
};
let JapanNameMap = {
    'Tokyo': '东京都', 'Kanagawa': '神奈川',  'Wakayama': '和歌山', 'Chiba': '千叶', 'Kumamoto': '熊本', 'Ishikawa': '石川', 'Okinawa': '冲绳', 'Fukuoka': '福冈', 'Mie': '三重', 'Saitama': '埼玉', 'Aichi': '爱知', 'Osaka': '大阪府', 'Kyoto': '京都府', 'Nagano': '长野', 'Gifu': '岐阜', 'Kochi': '高知', 'Niigata': '新泻', 'Ehime': '爱媛', 'Tochigi': '栃木', 'Tokushima': '德岛', 'Miyagi': '宫城', 'Shizuoka': '静冈', 'Hyogo': '兵库', 'Nara': '奈良', 'Cruise': '邮轮', 'Related personnel for quarantine, quarantine and handling': '检疫、隔离及搬运等相关人员', 'Chartered': '包机', 'Oita': '大分县', 'Yamaguchi': '山口', 'Shiga': '滋贺', 'Miyazaki': '宫崎', 'Akita': '秋田', 'Yamanashi': '山梨', 'Hiroshima': '广岛', 'Gunma': '群马', 'Fukushima': '福岛',
};

var nameMap = {
    'Afghanistan':'阿富汗',
    'Albania':'阿尔巴尼亚',
    'Algeria':'阿尔及利亚',
    'Andorra':'安道尔',
    'Angola':'安哥拉',
    'Antarctica':'南极洲',
    'Antigua and Barbuda':'安提瓜和巴布达',
    'Argentina':'阿根廷',
    'Armenia':'亚美尼亚',
    'Australia':'澳大利亚',
    'Austria':'奥地利',
    'Azerbaijan':'阿塞拜疆',
    'The Bahamas':'巴哈马',
    'Bahrain':'巴林',
    'Bangladesh':'孟加拉国',
    'Barbados':'巴巴多斯',
    'Belarus':'白俄罗斯',
    'Belgium':'比利时',
    'Belize':'伯利兹',
    'Benin':'贝宁',
    'Bermuda':'百慕大',
    'Bhutan':'不丹',
    'Bolivia':'玻利维亚',
    'Bosnia and Herzegovina':'波斯尼亚和黑塞哥维那',
    'Botswana':'博茨瓦纳',
    'Brazil':'巴西',
    'Brunei':'文莱',
    'Bulgaria':'保加利亚',
    'Burkina Faso':'布基纳法索',
    'Burundi':'布隆迪',
    'Cambodia':'柬埔寨',
    'Cameroon':'喀麦隆',
    'Canada':'加拿大',
    'Cape Verde':'佛得角',
    'Central African Republic':'中非共和国',
    'Chad':'乍得',
    'Chile':'智利',
    'China':'中国',
    'Colombia':'哥伦比亚',
    'Comoros':'科摩罗',
    'Republic of the Congo':'刚果共和国',
    'Costa Rica':'哥斯达黎加',
    'Croatia':'克罗地亚',
    'Cuba':'古巴',
    'Cyprus':'塞浦路斯',
    'Czech Republic':'捷克共和国',
    'Denmark':'丹麦',
    'Djibouti':'吉布提',
    'Dominica':'多米尼加',
    'Dominican Republic':'多明尼加共和国',
    'Ecuador':'厄瓜多尔',
    'Egypt':'埃及',
    'El Salvador':'萨尔瓦多',
    'Equatorial Guinea':'赤道几内亚',
    'Eritrea':'厄立特里亚',
    'Estonia':'爱沙尼亚',
    'Ethiopia':'埃塞俄比亚',
    'Falkland Islands':'福克兰群岛',
    'Faroe Islands':'法罗群岛',
    'Fiji':'斐济',
    'Finland':'芬兰',
    'France':'法国',
    'French Guiana':'法属圭亚那',
    'French Southern and Antarctic Lands':'法属南半球和南极领地',
    'Gabon':'加蓬',
    'Gambia':'冈比亚',
    'Gaza Strip':'加沙',
    'Georgia':'格鲁吉亚',
    'Germany':'德国',
    'Ghana':'加纳',
    'Greece':'希腊',
    'Greenland':'格陵兰',
    'Grenada':'格林纳达',
    'Guadeloupe':'瓜德罗普',
    'Guatemala':'危地马拉',
    'Guinea':'几内亚',
    'Guinea Bissau':'几内亚比绍',
    'Guyana':'圭亚那',
    'Haiti':'海地',
    'Honduras':'洪都拉斯',
    'Hong Kong':'香港',
    'Hungary':'匈牙利',
    'Iceland':'冰岛',
    'India':'印度',
    'Indonesia':'印尼',
    'Iran':'伊朗',
    'Iraq':'伊拉克',
    'Iraq-Saudi Arabia Neutral Zone':'伊拉克阿拉伯中立区',
    'Ireland':'爱尔兰',
    'Isle of Man':'马恩岛',
    'Israel':'以色列',
    'Italy':'意大利',
    'Ivory Coast':'科特迪瓦',
    'Jamaica':'牙买加',
    'Jan Mayen':'扬马延岛',
    'Japan':'日本',
    'Jordan':'约旦',
    'Kazakhstan':'哈萨克斯坦',
    'Kenya':'肯尼亚',
    'Kerguelen':'凯尔盖朗群岛',
    'Kiribati':'基里巴斯',
    'North Korea':'北朝鲜',
    'Korea':'韩国',
    'Kuwait':'科威特',
    'Kyrgyzstan':'吉尔吉斯斯坦',
    'Laos':'老挝',
    'Latvia':'拉脱维亚',
    'Lebanon':'黎巴嫩',
    'Lesotho':'莱索托',
    'Liberia':'利比里亚',
    'Libya':'利比亚',
    'Liechtenstein':'列支敦士登',
    'Lithuania':'立陶宛',
    'Luxembourg':'卢森堡',
    'Macau':'澳门',
    'Macedonia':'马其顿',
    'Madagascar':'马达加斯加',
    'Malawi':'马拉维',
    'Malaysia':'马来西亚',
    'Maldives':'马尔代夫',
    'Mali':'马里',
    'Malta':'马耳他',
    'Martinique':'马提尼克',
    'Mauritania':'毛里塔尼亚',
    'Mauritius':'毛里求斯',
    'Mexico':'墨西哥',
    'Moldova':'摩尔多瓦',
    'Monaco':'摩纳哥',
    'Mongolia':'蒙古',
    'Morocco':'摩洛哥',
    'Mozambique':'莫桑比克',
    'Myanmar':'缅甸',
    'Namibia':'纳米比亚',
    'Nepal':'尼泊尔',
    'Netherlands':'荷兰',
    'New Caledonia':'新喀里多尼亚',
    'New Zealand':'新西兰',
    'Nicaragua':'尼加拉瓜',
    'Niger':'尼日尔',
    'Nigeria':'尼日利亚',
    'Northern Mariana Islands':'北马里亚纳群岛',
    'Norway':'挪威',
    'Oman':'阿曼',
    'Pakistan':'巴基斯坦',
    'Panama':'巴拿马',
    'Papua New Guinea':'巴布亚新几内亚',
    'Paraguay':'巴拉圭',
    'Peru':'秘鲁',
    'Philippines':'菲律宾',
    'Poland':'波兰',
    'Portugal':'葡萄牙',
    'Puerto Rico':'波多黎各',
    'Qatar':'卡塔尔',
    'Reunion':'留尼旺岛',
    'Romania':'罗马尼亚',
    'Russia':'俄罗斯',
    'Rwanda':'卢旺达',
    'San Marino':'圣马力诺',
    'Sao Tome and Principe':'圣多美和普林西比',
    'Saudi Arabia':'沙特阿拉伯',
    'Senegal':'塞内加尔',
    'Seychelles':'塞舌尔',
    'Sierra Leone':'塞拉利昂',
    'Singapore':'新加坡',
    'Slovakia':'斯洛伐克',
    'Slovenia':'斯洛文尼亚',
    'Solomon Islands':'所罗门群岛',
    'Somalia':'索马里',
    'South Africa':'南非',
    'Spain':'西班牙',
    'Sri Lanka':'斯里兰卡',
    'St. Christopher-Nevis':'圣',
    'St. Lucia':'圣露西亚',
    'St. Vincent and the Grenadines':'圣文森特和格林纳丁斯',
    'Sudan':'苏丹',
    'Suriname':'苏里南',
    'Svalbard':'斯瓦尔巴特群岛',
    'Swaziland':'斯威士兰',
    'Sweden':'瑞典',
    'Switzerland':'瑞士',
    'Syria':'叙利亚',
    'Taiwan':'台湾',
    'Tajikistan':'塔吉克斯坦',
    'United Republic of Tanzania':'坦桑尼亚',
    'Thailand':'泰国',
    'Togo':'多哥',
    'Tonga':'汤加',
    'Trinidad and Tobago':'特里尼达和多巴哥',
    'Tunisia':'突尼斯',
    'Turkey':'土耳其',
    'Turkmenistan':'土库曼斯坦',
    'Turks and Caicos Islands':'特克斯和凯科斯群岛',
    'Uganda':'乌干达',
    'Ukraine':'乌克兰',
    'United Arab Emirates':'阿联酋',
    'United Kingdom':'英国',
    'United States':'美国',
    'Uruguay':'乌拉圭',
    'Uzbekistan':'乌兹别克斯坦',
    'Vanuatu':'瓦努阿图',
    'Venezuela':'委内瑞拉',
    'Vietnam':'越南',
    'Western Sahara':'西撒哈拉',
    'Western Samoa':'西萨摩亚',
    'Yemen':'也门',
    'Yugoslavia':'南斯拉夫',
    'Democratic Republic of the Congo':'刚果民主共和国',
    'Zambia':'赞比亚',
    'Zimbabwe':'津巴布韦',
    'South Sudan':'南苏丹',
    'Somaliland':'索马里兰',
    'Montenegro':'黑山',
    'Kosovo':'科索沃',
    'Republic of Serbia':'塞尔维亚',

};
var template_map = {
    name: '疑似',
    type: 'map',
    mapType: 'china',
    selectedMode : 'multiple',
    roam: true, //缩放
    label: {
        normal: {
            show: true,
            textStyle: {
                color: 'black',
                backgroundColor: '#dedede',
                borderRadius: 3,
                padding: 0.5,
            }
        },
        emphasis: {
            show: true
        }
    },
    nameMap:[],
    data:[]
};
//存储切换的每一级地图信息
var mapStack = [];
var timeFn = null;
var curMap = {};
//初始化为中国地图
load_data('china', 'china', 'province_level');

/**
 绑定用户切换地图区域事件
 cityMap对象存储着地图区域名称和区域的信息(name-code)
 当mapCode有值,说明可以切换到下级地图
 同时保存上级地图的编号和名称
 */
myChart.on('mapselectchanged', function(params) {
    let map_level = $("#firstBlock .btn-outline-primary").attr('level');
    if (map_level != "world_level"){
        if (map_level == 'province_level'){//省级粒度的地图才下钻 || 世界地图下钻到中国地图
            clearTimeout(timeFn);
            //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
            timeFn = setTimeout(function(){
                let name = params.batch[0].name;
                if (mapStack.length < 1) //将最大下钻深度设置为2(到地级市)
                {
                    // console.log(name)
                    load_data('province/'+name, name, 'province_level', true);
                    //将上一级地图信息压入mapStack
                    mapStack.push({
                        mapName: curMap.mapName
                    });
                }
            }, 250);
        }
        if (map_level == 'province_level' || map_level == 'district_level') {
            /**
             * 电脑端，鼠标点击到对应的省份上面，联动更新饼状图统计、柱状图和折线图
             */
            let area = params.batch[0].name;
            draw_pie(pie_dom_id, area, '');
            draw_pie(pie_gender_dom_id, area, 'gender/');
            draw_bar(bar_dom_id, area);
            draw_cure_die_bar(bar_die_cure_ratio_dom_id, area);
            draw_bar_age(bar_age_dom_id, area);
            draw_bar_ratio(bar_ratio_dom_id, area, '');
            draw_bar_density(bar_density_dom_id, area, '');

            draw_lineBar(area);
            draw_calPie(area);
        }
    }
    if (name == "China" && map_level == "world_level"){
        $("#btn-province-map").trigger("click");
    }else{
        let countryName = params.batch[0].name;
        if (countryName == 'United States')
            $("#btn-US-map").trigger("click");
        else
            $("#btn-"+params.batch[0].name+"-map").trigger("click");
    }
});

/**
 绑定双击事件，并加载上一级地图
 */
// myChart.on('dblclick', function(params) {
//     drill_up()
// });

function drill_up() {
    let map_level = $("#firstBlock .btn-outline-primary").attr('level');
    if (map_level == 'province_level') {//省级粒度的地图才下钻/上卷
        // 当双击事件发生时，清除单击事件，仅响应双击事件
        clearTimeout(timeFn);
        let map = mapStack.pop();
        if (!mapStack.length && !map) {
            alert('已经到达最上一级地图了');
            return;
        }
        // console.log('drill up');
        load_data('china', map.mapName, 'province_level')
    }
    /**
     * 电脑端，鼠标点击到对应的省份上面，联动更新饼状图统计、柱状图和折线图
     */
    draw_pie(pie_dom_id, '中国', '');
    draw_pie(pie_gender_dom_id, '中国' ,'gender/');
    draw_bar(bar_dom_id, '中国');
    draw_cure_die_bar(bar_die_cure_ratio_dom_id, '中国');
    draw_bar_age(bar_age_dom_id, '中国');
    draw_bar_ratio(bar_ratio_dom_id, '中国', 'district_level');
    draw_bar_density(bar_density_dom_id, '中国', 'district_level');

    draw_lineBar('中国');
    draw_calPie('中国');
}


//切换地图的map
$(".btn-maps").click(function () {
    //变更按钮状态
    $(".btn-maps").removeClass("#firstBlock btn-outline-primary");
    $(".btn-maps").addClass("#firstBlock btn-outline-secondary");
    $(this).addClass("#firstBlock btn-outline-primary");
    $(this).removeClass("#firstBlock btn-outline-secondary");

    let which_map = $(this).attr('level');
    if (which_map == "world_level") {
        world_map();
        draw_bar(bar_dom_id, 'world');
        draw_pie(pie_dom_id, 'world', '');
        draw_pie(pie_gender_dom_id, '中国' ,'gender/');
        draw_calPie('world');
        draw_lineBar('world');
        draw_cure_die_bar(bar_die_cure_ratio_dom_id, 'world');
        //
        draw_bar(bar_cities_dom_id, 'world', 'district_level');
    }
    else if (which_map == "province_level"){
        //初始化为中国地图
        load_data('china', 'china', 'province_level');
        draw_bar(bar_dom_id, '中国','');
        draw_pie(pie_dom_id, '中国', '');
        draw_pie(pie_gender_dom_id, '中国' ,'gender/');
        draw_lineBar('中国');
        draw_bar_age(bar_age_dom_id, '中国');
        draw_bar_ratio(bar_ratio_dom_id, '中国', 'district_level');
        draw_bar_density(bar_density_dom_id, '中国', 'district_level');
        draw_calPie('中国');
        draw_cure_die_bar(bar_die_cure_ratio_dom_id, '中国');
        //
        draw_bar(bar_cities_dom_id, 'world', 'district_level');
    }
    else if (which_map == "district_level"){
        // $('.china-vis').show();
        load_data('china', 'china', 'district_level');
        draw_bar(bar_dom_id, '中国','district_level');
        draw_pie(pie_dom_id, '中国', '');
        draw_pie(pie_gender_dom_id, '中国' ,'gender/');
        draw_lineBar('中国');
        draw_bar_age(bar_age_dom_id, '中国');
        draw_bar_ratio(bar_ratio_dom_id, '中国', 'district_level');
        draw_bar_density(bar_density_dom_id, '中国', 'district_level');
        draw_calPie('中国');
        draw_cure_die_bar(bar_die_cure_ratio_dom_id, '中国');
        //
        draw_bar(bar_cities_dom_id, '中国', 'district_level');
    }
    else{
        let countryName = which_map;
        foreign_map(countryName);
        draw_bar(bar_dom_id, countryName,'');
        draw_calPie(countryName);
        draw_pie(pie_dom_id, countryName, '');
        draw_pie(pie_gender_dom_id, countryName ,'gender/');
        draw_lineBar(countryName);
        draw_bar_age(bar_age_dom_id, countryName);
        draw_cure_die_bar(bar_die_cure_ratio_dom_id, countryName);
        //
        draw_bar_ratio(bar_ratio_dom_id, countryName, 'district_level');
        draw_bar_density(bar_density_dom_id, countryName, 'district_level');
        draw_bar(bar_cities_dom_id, countryName, 'district_level');

    }
});


/**
 加载地图上的数据文件
 dataFile: 地图数据文件名字
 mapName: 地图JSON文件的名字
 level: 地图的level（world，nation，city）
 dirllDown: 地图的下钻功能
 */

function load_data(dataFile, mapName, level, drillDown=false){
    // console.log(mapName)
    // console.log('start load data');
    myChart.showLoading();
    let dataUrl;
    if (!drillDown)
        //如果不dirll down
        dataUrl = './data/data/'+dataFile+level+'.json';
    else
        dataUrl = './data/data/'+dataFile+'.json';
    console.log('dataUrl:', dataUrl);
    $.get(dataUrl, function (data) {
        // console.log('data:', data);
        let map_settings = {
            dateRanges: [],
            lastUpdate: "",
        };
        let series_data = [];
        map_settings.lastUpdate = data['last_update'];
        template_map['mapType'] = mapName;
        if (level == 'district_level'){
            template_map['label']['normal']['show'] = false;
        }else{
            template_map['label']['normal']['show'] = true;
        }

        for (let i = data.length-1; i >= 0 ; i--){
            map_settings.dateRanges.push(data[i]['time']);
            // map_settings.dateRanges.push(data[i]['time'].slice(5,data[i]['time'].length));
            let confirm_data = $.extend(true,{},template_map);
            let current_confirm_data = $.extend(true,{},template_map); // 当前现存确诊人数
            let die_data = $.extend(true,{},template_map);
            let cure_data = $.extend(true,{},template_map);
            current_confirm_data.name = '现存确诊';
            confirm_data.name = '累计确诊';
            cure_data.name = '累计治愈';
            die_data.name = '累计死亡';
            if(drillDown==true) level = 'district_level';
            confirm_data.data = data[i].confirm[level];
            current_confirm_data.data = data[i].currentConfirm[level];
            cure_data.data = data[i].cure[level];
            die_data.data = data[i].die[level];
            series_data.push({
                series: [confirm_data, current_confirm_data, die_data, cure_data]
            });
        }
        console.log(series_data);
        // console.log('load done, and draw.');
        if (level == 'province_level' || drillDown==true){
            let tag = '';
            if (drillDown == false)
                tag = 'province_level';
            let subtext = show_overall_map(series_data, tag, mapName);
            draw_map(mapName, series_data, map_settings, subtext)
        }else{
            // console.log('draw district');
            draw_map_district(series_data, map_settings)
        }
        if (level == 'world_level'){
            world_map(series_data, map_settings)
        }
    });
}


// 绘制县市级别的热力图
function draw_map_district(series_data, map_settings) {
    // console.log('draw district level');
    myChart.showLoading();
    $.get('./echarts/map/json/china-cities.json', function(geoJson) {
        echarts.registerMap('china', geoJson);
        let dateRanges = map_settings['dateRanges'];
        let base_option = {
            label:{
                show: false
            },
            timeline: {
                autoPlay: false,
                loop: false,
                playInterval: 800,
                top: 'auto',
                currentIndex: dateRanges.length-1,
                axisType: 'category',
                data: dateRanges
            },
            title: {
                text: 'COVID-19疫情地图（中国）',
                subtext: '',//'数据来源：国家及各省市地区卫健委',
                subtextStyle:{//副标题内容的样式
                    color:'green',//绿色
                    fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
                    fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                    fontSize:14//主题文字字体大小，默认为12px
                },
                // sublink: 'https://github.com/BlankerL/DXY-2019-nCoV-Data',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>病例数: {c}'
            },
            color: ['#d48265','#2f4554','#c23531','#749f83'],
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['现存确诊','累计确诊', '累计治愈','累计死亡'],
                selectedMode: 'single',
                selected: {
                    '累计确诊': false,
                    '累计治愈': false,
                    '累计死亡': false
                }
            },
            visualMap: {
                type : 'piecewise',
                showLabel: true,
                pieces: [
                    {min: 1000, color: "rgb(112,22,29)"}, // 不指定 max，表示 max 为无限大（Infinity）。
                    {min: 500, max: 999, color: 'rgb(203,42,47)'},
                    {min: 100, max: 499, color: 'rgb(229,90,78)'},
                    {min: 10, max: 99, color: 'rgb(245,158,131)'},
                    {min: 1, max: 9, color: 'rgb(253,235,207)'},
                ],
                left: 'left',
                top: 'bottom',
                // text: ['多','少'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                // orient: 'vertical',
                right: '10%',
                top: 'top',
                itemSize: 30,
                itemGap: 30,
                feature: {
                    saveAsImage: {
                        pixelRatio: 5
                    },
                }
            },
            series: []
        };
        let option = {
            baseOption: base_option,
            options:series_data
        };

        myChart.hideLoading();
        myChart.setOption(option);
        $("#btn-city-map").prop('disabled', false);
    });
}

/**
 展示当前级别地图所有的确诊/疑似/治愈/死亡人数 TEXT
 */
function show_overall_map(series_data, tag, mapName){
    // tag 是用来把province中的外国数据剔除
    // mapName 是用来去除四个直辖市中的重复数据，例如 北京：【北京，海淀区，朝阳区】
    let CHINA_PROVINCES = ['湖北', '广东', '浙江','河南','湖南', '安徽', '江西', '重庆','江苏', '山东',  '四川', '北京','上海', '福建','陕西','广西', '黑龙江', '云南', '河北','辽宁', '海南', '山西','天津', '甘肃', '贵州','内蒙古',  '台湾',  '宁夏', '吉林',   '新疆',   '青海',    '澳门',  '西藏', '香港']
    let data = series_data[series_data.length-1]['series'];
    let subtext = "";
    // console.log(data);
    for (let i = 0; i < data.length; i++){
        if (data[i]['name'] != "疑似"){
            subtext += data[i]['name'] + ": ";
            let total = 0;
            for (let j = 0; j < data[i]['data'].length; j++){
                if (tag == 'province_level') //只有中国省级地图才这样子做 TODO
                {
                    if (CHINA_PROVINCES.indexOf(data[i]['data'][j]['name']) != -1)
                        total += data[i]['data'][j]['value'];
                }
                else
                {
                    if (mapName != data[i]['data'][j]['name']){
                        total += data[i]['data'][j]['value'];
                    }
                }
            }
            // if (total == 0) total = '暂缺';
            subtext += total.toString() + "   ";
        }
    }
    // console.log(subtext);
    return subtext;
}

/**
 加载地图：根据地图所在省市的行政编号，
 获取对应的json地图数据，然后向echarts注册该区域的地图
 最后加载地图信息
 @params {String} mapName: 地图名称
 */
function draw_map(mapName, series_data, map_settings, subtext) {
    $.getJSON('./echarts/map/json/province/' + mapName + '.json', function (data) {
        console.log('mapName: ', mapName)
        if (data) {
            // if (mapName != 'china'){ //如果是中国地图，则用默认的，这样南海诸岛才能出来
            echarts.registerMap(mapName, data);
                // console.log('register map')
            // }
            let title_text= mapName;

            let dateRanges = map_settings['dateRanges'];
            if (mapName == 'china')
            {
                title_text = '中国';
                subtext += '\n\n 点击省份，可以查看详细数据';
            }
            let base_option = {
                timeline: {
                    autoPlay: false,
                    loop: false,
                    top: 'auto',
                    playInterval: 800,
                    currentIndex: dateRanges.length-1,
                    axisType: 'category',
                    data: dateRanges
                },
                title: {
                    text: 'COVID-19疫情地图（'+title_text+'）',
                    subtext: subtext, //'数据来源：国家及各省市地区卫健委',
                    subtextStyle:{//副标题内容的样式
                        color:'green',//绿色
                        fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
                        fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                        fontSize:14//主题文字字体大小，默认为12px
                    },
                    // sublink: 'https://github.com/BlankerL/DXY-2019-nCoV-Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}的病例数: {c}<br/>单击查看详情<br/>单击右上角返回上一级'
                },
                color: ['#d48265', '#2f4554', '#c23531','#749f83'],
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['现存确诊','累计确诊', '累计治愈','累计死亡'],
                    selectedMode: 'single',
                    selected: {
                        '累计确诊': false,
                        '累计治愈': false,
                        '累计死亡': false,
                        '现存确诊': true,
                    }
                },
                visualMap: {
                    type : 'piecewise',
                    showLabel: true,
                    pieces: [
                        {min: 5000, color: "rgb(112,22,29)"}, // 不指定 max，表示 max 为无限大（Infinity）。
                        {min: 500, max: 2000, color: 'rgb(203,42,47)'},
                        {min: 100, max: 499, color: 'rgb(229,90,78)'},
                        {min: 10, max: 99, color: 'rgb(245,158,131)'},
                        {min: 1, max: 9, color: 'rgb(253,235,207)'},
                    ],
                    left: 'left',
                    top: 'bottom',
                    // text: ['多','少'],           // 文本，默认为数值文本
                    calculable: true
                },
                toolbox: {
                    show: true,
                    // orient: 'vertical',
                    right: '10%',
                    top: 'top',
                    itemSize: 30,
                    itemGap: 30,
                    feature: {
                        myDrillUp: {
                            show: true,
                            title: '返回上一级',

                            icon: 'image:///images/return.svg',
                            onclick: function (){
                                drill_up()
                            }
                        },
                        saveAsImage: {
                            pixelRatio: 5
                        }
                    }
                },
                series: []
            };

            let option = {
                baseOption: base_option,
                // timeline上每个时间间隔对应的option（data）
                options: series_data
            };

            myChart.hideLoading();
            myChart.setOption(option);
            curMap = {
                mapName: mapName
            };
            $("#btn-province-map").prop('disabled', false);
        } else {
            alert('无法加载该地图');
        }
    });
}

function world_map() {
    myChart.showLoading();
    $.getJSON('./data/data/world_map.json', function (data) {
        let each_series_template = {
            name: '现存确诊',
            type: 'map',
            map: 'world',
            itemStyle:{
                emphasis:{label:{show:false}}
            },
            nameMap: nameMap,
            selectedMode : 'multiple',
            roam: true, //缩放
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[]
        };
        let series_data = [];
        let dateRanges = [];
        for (let i = data.length-1; i >=0 ; i--){
            dateRanges.push(data[i]['time'].slice(5,data[i]['time'].length));
            let current_confirm_data = $.extend(true,{},each_series_template);
            let confirm_data = $.extend(true,{},each_series_template);
            let die_data = $.extend(true,{},each_series_template);
            let cure_data = $.extend(true,{},each_series_template);
            confirm_data.name = '累计确诊';
            current_confirm_data.name = '现存确诊';
            cure_data.name = '累计治愈';
            die_data.name = '累计死亡';
            confirm_data.data = data[i].confirm;
            current_confirm_data.data = data[i].currentConfirm;
            cure_data.data = data[i].cure;
            die_data.data = data[i].die;
            series_data.push({
                series: [current_confirm_data, confirm_data, die_data, cure_data]
            })
        }

        let subtext = show_overall_map(series_data, 'world_level', null);

        let world_option = {
            baseOption: {
                timeline: {
                    autoPlay: false,
                    loop: false,
                    top: 'auto',
                    playInterval: 800,
                    currentIndex: dateRanges.length-1,
                    axisType: 'category',
                    data: dateRanges
                },
                title: {
                    text: 'COVID-19世界疫情地图',
                    subtext: subtext, //'数据来源：国家及各省市地区卫健委',
                    subtextStyle:{//副标题内容的样式
                        color:'green',//绿色
                        fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
                        fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                        fontSize:14//主题文字字体大小，默认为12px
                    },
                    // sublink: 'https://github.com/BlankerL/DXY-2019-nCoV-Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}的病例数: {c}<br/>单击查看详情<br/>单击右上角返回上一级'
                },
                color: ['#d48265', '#2f4554','#c23531','#749f83'],
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['现存确诊','累计确诊','累计治愈','累计死亡'],
                    // selectedMode: 'single',
                    selected: {
                        '累计确诊': false,
                        '累计治愈': false,
                        '累计死亡': false
                    }
                },
                visualMap: {
                    type : 'piecewise',
                    showLabel: true,
                    pieces: [
                        {min: 100001, color: "rgb(112,22,29)"}, // 不指定 max，表示 max 为无限大（Infinity）。
                        {min: 50001, max: 100000, color: 'rgb(203,42,47)'},
                        {min: 10001, max: 50000, color: 'rgb(229,90,78)'},
                        {min: 5001, max: 10000, color: 'rgb(245,158,131)'},
                        {min: 1, max: 5000, color: 'rgb(253,235,207)'},
                    ],
                    left: 'left',
                    top: 'bottom',
                    // text: ['多','少'],           // 文本，默认为数值文本
                    calculable: true
                },
                toolbox: {
                    show: true,
                    // orient: 'vertical',
                    right: '10%',
                    top: 'top',
                    itemSize: 30,
                    itemGap: 30,
                    feature: {
                        myDrillUp: {
                            show: true,
                            title: '返回上一级',
                            icon: 'image:///images/return.svg',
                            onclick: function (){
                                drill_up()
                            }
                        },
                        saveAsImage: {
                            pixelRatio: 5
                        }
                    }
                },
                series: []
            },
            options: series_data
        };
        $.getJSON('./echarts/map/json/world.json', function (data) {
            echarts.registerMap('world', data);
            // 基于准备好的dom，初始化echarts实例
            // let myChart = echarts.init(document.getElementById('map_world'));
            myChart.setOption(world_option);
            myChart.hideLoading();
            $("#btn-world-map").prop('disabled', false);
        });
    });
}


function foreign_map(countryName) {
    myChart.clear();
    myChart.showLoading();
    $.getJSON('./data/data/foreign_result.json', function (data) {

        data = data[countryName];

        let each_series_template = {
            type: 'map',
            map: countryName,
            // nampMap: JapanNameMap,
            itemStyle:{
                emphasis:{label:{show:false}}
            },
            selectedMode : 'multiple',
            roam: true, //缩放
            zoom: 1, //当前视角的缩放比例
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        if (params.data){
                            if (countryName == 'Japan'){
                                if (params.data.value > 50)
                                    return abbr[params.data.name]
                            }
                            else{
                                return abbr[params.data.name]
                            }
                        }
                        return '';
                    },
                    textStyle: {
                        color: 'black',
                        backgroundColor: '#dedede',
                        borderRadius: 3,
                        padding: 0.5,
                    }
                },
                emphasis: {
                    show: true
                }
            },
            data:[]
        };
        let series_data = [];
        let dateRanges = [];
        for (let i = data.length-1; i >=0 ; i--){
            dateRanges.push(data[i]['time'].slice(5,data[i]['time'].length));
            let confirm_data = $.extend(true,{},each_series_template);
            let die_data = $.extend(true,{},each_series_template);
            let cure_data = $.extend(true,{},each_series_template);
            let current_confirm_data = $.extend(true,{},each_series_template);
            confirm_data.name = '累计确诊';
            current_confirm_data.name = '当前确诊';
            cure_data.name = '累计治愈';
            die_data.name = '累计死亡';
            // data[i].confirm.forEach(function (item) {
            //     item.name = JapanNameMap[item.name]
            // });
            // data[i].currentConfirm.forEach(function (item) {
            //     item.name = JapanNameMap[item.name]
            // });
            // data[i].cure.forEach(function (item) {
            //     item.name = JapanNameMap[item.name]
            // });
            // data[i].die.forEach(function (item) {
            //     item.name = JapanNameMap[item.name]
            // });
            confirm_data.data = data[i].confirm;
            current_confirm_data.data = data[i].currentConfirm;
            cure_data.data = data[i].cure;
            die_data.data = data[i].die;
            series_data.push({
                series: [confirm_data, current_confirm_data, die_data, cure_data]
            })
        }
        let subtext = show_overall_map(series_data, '', null);
        // let subtext ='';
        let world_option = {
            baseOption: {
                timeline: {
                    autoPlay: false,
                    loop: false,
                    top: 'auto',
                    playInterval: 800,
                    currentIndex: dateRanges.length-1,
                    axisType: 'category',
                    data: dateRanges
                },
                title: {
                    text: 'COVID-19疫情地图 (' + countryName + ')',
                    subtext: subtext,
                    subtextStyle:{//副标题内容的样式
                        color:'green',//绿色
                        fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
                        fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                        fontSize:14//主题文字字体大小，默认为12px
                    },
                    // sublink: 'https://github.com/BlankerL/DXY-2019-nCoV-Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} #-Cases: {c}<br/>- click to dirll down<br/>'
                },
                color: ['#d48265', '#2f4554', '#c23531','#749f83'],
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['当前确诊','累计确诊','累计治愈','累计死亡'],
                    selectedMode: 'single',
                    selected: {
                        '当前确诊': true,
                        '累计确诊': false,
                        '累计治愈': false,
                        '累计死亡': false,
                    }
                },
                visualMap: {
                    type : 'piecewise',
                    showLabel: true,
                    pieces: [
                        {min: 2001, color: "rgb(112,22,29)"}, // 不指定 max，表示 max 为无限大（Infinity）。
                        {min: 1001, max: 2000, color: 'rgb(203,42,47)'},
                        {min: 501, max: 1000, color: 'rgb(229,90,78)'},
                        {min: 101, max: 500, color: 'rgb(245,158,131)'},
                        {min: 1, max: 100, color: 'rgb(253,235,207)'},
                    ],
                    left: 'left',
                    top: 'bottom',
                    // text: ['多','少'],           // 文本，默认为数值文本
                    calculable: true
                },
                toolbox: {
                    show: true,
                    // orient: 'vertical',
                    right: '10%',
                    top: 'top',
                    itemSize: 30,
                    itemGap: 30,
                    feature: {
                        saveAsImage: {
                            pixelRatio: 5
                        }
                    }
                },
                series: []
            },
            options: series_data
        };
        $.getJSON('./echarts/map/json/'+countryName+'.json', function (data) {
            echarts.registerMap(countryName, data, {
                Alaska: {              // 把阿拉斯加移到美国主大陆左下方
                    left: -131,
                    top: 25,
                    width: 15
                },
                Hawaii: {
                    left: -110,        // 夏威夷
                    top: 28,
                    width: 5
                },
                'Puerto Rico': {       // 波多黎各
                    left: -76,
                    top: 26,
                    width: 2
                }
            });
            myChart.setOption(world_option);
            myChart.hideLoading();
            $("#btn-"+countryName+"-map").prop('disabled', false);
        });
    });
}