export type Hotspot = {
    id: string;
    pageId: string;
    productId?: string;
    xPct: number; // 0..100
    yPct: number; // 0..100
    label?: string; // Optional override label
    type?: "product" | "link";
    targetPageId?: string;
    widthPct?: number;
    heightPct?: number;
};

export const hotspots: Hotspot[] = [
    {
        "id": "admin-f3nt6tsna",
        "pageId": "026",
        "productId": "p1",
        "xPct": 87.33535967578521,
        "yPct": 26.98529988020466
    },
    {
        "id": "admin-70egvf9gn",
        "pageId": "016",
        "productId": "p3",
        "xPct": 83.08004052684905,
        "yPct": 43.322249465399295
    },
    {
        "id": "admin-o5y1ek63v",
        "pageId": "016",
        "productId": "p1",
        "xPct": 22.69503546099291,
        "yPct": 52.63717686046642
    },
    {
        "id": "admin-dct363f6r",
        "pageId": "017",
        "productId": "p3",
        "xPct": 18.135764944275582,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-maer2m4qb",
        "pageId": "017",
        "productId": "p4",
        "xPct": 79.33130699088146,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-4jy8119qe",
        "pageId": "017",
        "productId": "p5",
        "xPct": 45.49138804457954,
        "yPct": 32.28764316662748
    },
    {
        "id": "admin-6q1wml9ef",
        "pageId": "062",
        "productId": "p279",
        "xPct": 43.90625,
        "yPct": 47.29095084344838
    },
    {
        "id": "admin-6k149m9cv",
        "pageId": "005",
        "productId": "p1",
        "xPct": 24.68765068146168,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-8i4minqc1",
        "pageId": "005",
        "productId": "p2",
        "xPct": 32.343947411788406,
        "yPct": 37.76033910449823
    },
    {
        "id": "admin-mop52jcxm",
        "pageId": "005",
        "productId": "p3",
        "xPct": 40.3127460494754,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-562qucdpu",
        "pageId": "005",
        "productId": "p4",
        "xPct": 49.06279945556308,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-cn55k93ly",
        "pageId": "005",
        "productId": "p5",
        "xPct": 57.344100000610354,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-7ghius64v",
        "pageId": "005",
        "productId": "p6",
        "xPct": 65.9379024530179,
        "yPct": 36.76581674716945
    },
    {
        "id": "admin-vf13h9c2b",
        "pageId": "005",
        "productId": "p7",
        "xPct": 74.53170490542544,
        "yPct": 37.870841588645874
    },
    {
        "id": "admin-zztyje9bt",
        "pageId": "005",
        "productId": "p8",
        "xPct": 24.06264686674113,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-jebf2fu38",
        "pageId": "005",
        "productId": "p9",
        "xPct": 32.81270027282881,
        "yPct": 46.49003535216192
    },
    {
        "id": "admin-wydbgjt8y",
        "pageId": "005",
        "productId": "p10",
        "xPct": 42.03150653995691,
        "yPct": 45.053503058242576
    },
    {
        "id": "admin-zqzbivr9j",
        "pageId": "005",
        "productId": "p11",
        "xPct": 48.75029754820281,
        "yPct": 46.15852789971899
    },
    {
        "id": "admin-2kp73mr4h",
        "pageId": "005",
        "productId": "p12",
        "xPct": 58.43785667637131,
        "yPct": 44.61149312165201
    },
    {
        "id": "admin-4in4cj6h3",
        "pageId": "005",
        "productId": "p13",
        "xPct": 67.187910082459,
        "yPct": 45.385010510685504
    },
    {
        "id": "admin-ctn4c21s0",
        "pageId": "005",
        "productId": "p14",
        "xPct": 74.37545395174531,
        "yPct": 45.274508026537866
    },
    {
        "id": "admin-168112lo2",
        "pageId": "006",
        "productId": "p57",
        "xPct": 64.84353542196912,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-yu0re5rb2",
        "pageId": "007",
        "productId": "p57",
        "xPct": 30.62518692130689,
        "yPct": 31.461697508082654
    },
    {
        "id": "admin-owmoa0pjx",
        "pageId": "007",
        "productId": "p58",
        "xPct": 52.031567575485695,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-in9lixb5i",
        "pageId": "007",
        "productId": "p59",
        "xPct": 76.40671634958709,
        "yPct": 27.262603110472266
    },
    {
        "id": "admin-uqn6zksxp",
        "pageId": "007",
        "productId": "p62",
        "xPct": 50.00030517764391,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-52khx9kh9",
        "pageId": "007",
        "productId": "p63",
        "xPct": 72.50044250758366,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-8ynylumh2",
        "pageId": "007",
        "productId": "p65",
        "xPct": 31.56269264338772,
        "yPct": 80.6353029537832
    },
    {
        "id": "admin-51imblzdk",
        "pageId": "007",
        "productId": "p66",
        "xPct": 48.75029754820281,
        "yPct": 77.87274085009216
    },
    {
        "id": "admin-tzg79uwgh",
        "pageId": "007",
        "productId": "p67",
        "xPct": 66.40665531405831,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-kfd1oajwt",
        "pageId": "007",
        "productId": "p61",
        "xPct": 26.562662125623326,
        "yPct": 55.55123905226854
    },
    {
        "id": "admin-024fmuhot",
        "pageId": "008",
        "productId": "p60",
        "xPct": 30.780827519699216,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-qbftx770z",
        "pageId": "008",
        "productId": "p68",
        "xPct": 50.78094959075678,
        "yPct": 26.931095658029342
    },
    {
        "id": "admin-ombvskxx6",
        "pageId": "008",
        "productId": "p64",
        "xPct": 30.62457656601908,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-w8xuykvbm",
        "pageId": "008",
        "productId": "p72",
        "xPct": 47.4996795634739,
        "yPct": 57.20877631448317
    },
    {
        "id": "admin-f7ezps9ja",
        "pageId": "008",
        "productId": "p76",
        "xPct": 72.96858501333627,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-mcldsy9si",
        "pageId": "008",
        "productId": "p79",
        "xPct": 53.43721580331911,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-3liqoxk8r",
        "pageId": "008",
        "productId": "p80",
        "xPct": 69.21856212501297,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-clvu8816m",
        "pageId": "009",
        "productId": "p69",
        "xPct": 30.937688828667163,
        "yPct": 25.715568332405287
    },
    {
        "id": "admin-yhd8dr1f9",
        "pageId": "009",
        "productId": "p70",
        "xPct": 48.43779564084254,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-ljkww2g64",
        "pageId": "009",
        "productId": "p71",
        "xPct": 69.53167438766106,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-i5i51bu3z",
        "pageId": "009",
        "productId": "p74",
        "xPct": 49.06279945556308,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-xue15cgx3",
        "pageId": "009",
        "productId": "p77",
        "xPct": 34.53146076331032,
        "yPct": 81.96133276355489
    },
    {
        "id": "admin-yw410fmxw",
        "pageId": "009",
        "productId": "p78",
        "xPct": 50.31280708500419,
        "yPct": 82.40334270014546
    },
    {
        "id": "admin-u4l09huoe",
        "pageId": "010",
        "productId": "p81",
        "xPct": 34.0620975469821,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-t0an1bphj",
        "pageId": "010",
        "productId": "p82",
        "xPct": 53.593466756999256,
        "yPct": 28.036120499505763
    },
    {
        "id": "admin-m4q6wzenf",
        "pageId": "010",
        "productId": "p83",
        "xPct": 76.09360408693901,
        "yPct": 28.367627951948688
    },
    {
        "id": "admin-ci6exe7m2",
        "pageId": "010",
        "productId": "p83",
        "xPct": 34.0620975469821,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-0pe4bow7m",
        "pageId": "010",
        "productId": "p86",
        "xPct": 55.31222724748076,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-xwq3isc4l",
        "pageId": "010",
        "productId": "p87",
        "xPct": 75.6248512258986,
        "yPct": 53.3411893693157
    },
    {
        "id": "admin-3ao2n6zpv",
        "pageId": "010",
        "productId": "p89",
        "xPct": 35.15585422274306,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-tp3uvqxi4",
        "pageId": "010",
        "productId": "p90",
        "xPct": 54.999725340120484,
        "yPct": 79.64078059645442
    },
    {
        "id": "admin-rdgd25kgj",
        "pageId": "010",
        "productId": "p91",
        "xPct": 74.99984741117804,
        "yPct": 79.75128308060206
    },
    {
        "id": "admin-4f3p0zi2u",
        "pageId": "011",
        "productId": "p84",
        "xPct": 35.78146839275142,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-t965ykkgi",
        "pageId": "011",
        "productId": "p88",
        "xPct": 55.46908855644871,
        "yPct": 26.8205931738817
    },
    {
        "id": "admin-vk40iuv3f",
        "pageId": "011",
        "productId": "p92",
        "xPct": 75.93796348854667,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-sf76zsnqz",
        "pageId": "012",
        "productId": "p106",
        "xPct": 70.31231880077394,
        "yPct": 77.20972594520632
    },
    {
        "id": "admin-kplnjcadp",
        "pageId": "012",
        "productId": "p105",
        "xPct": 78.5936193458212,
        "yPct": 77.76223836594451
    },
    {
        "id": "admin-fxah2rh81",
        "pageId": "012",
        "productId": "p107",
        "xPct": 85.93741416878765,
        "yPct": 77.43073091350159
    },
    {
        "id": "admin-i8szzrxkk",
        "pageId": "012",
        "productId": "p108",
        "xPct": 92.65620517703354,
        "yPct": 77.54123339764924
    },
    {
        "id": "admin-hwyz347kh",
        "pageId": "014",
        "productId": "p109",
        "xPct": 26.405800816655372,
        "yPct": 31.01968757149209
    },
    {
        "id": "admin-7q1yzumg3",
        "pageId": "014",
        "productId": "p110",
        "xPct": 57.812242506362956,
        "yPct": 30.467175150753878
    },
    {
        "id": "admin-dj3ddpja2",
        "pageId": "014",
        "productId": "p111",
        "xPct": 90.7811937328719,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-mtfxtxubb",
        "pageId": "014",
        "productId": "p112",
        "xPct": 26.249549862975236,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-tjsobhnew",
        "pageId": "014",
        "productId": "p113",
        "xPct": 58.59349727476364,
        "yPct": 57.540283766926095
    },
    {
        "id": "admin-j8faw51a4",
        "pageId": "014",
        "productId": "p114",
        "xPct": 90.31244087183148,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-xbml9w5sp",
        "pageId": "014",
        "productId": "p115",
        "xPct": 26.56205177033551,
        "yPct": 84.94489983554122
    },
    {
        "id": "admin-4hc9kjwzr",
        "pageId": "014",
        "productId": "p117",
        "xPct": 89.0624332423904,
        "yPct": 84.83439735139359
    },
    {
        "id": "admin-jed5ybaz1",
        "pageId": "015",
        "productId": "p118",
        "xPct": 25.31265449618223,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-o9y306tpv",
        "pageId": "015",
        "productId": "p119",
        "xPct": 58.281605722691175,
        "yPct": 29.804160245868026
    },
    {
        "id": "admin-sutbsb4tn",
        "pageId": "015",
        "productId": "p116",
        "xPct": 88.59429073663779,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-f6xt6y3jx",
        "pageId": "017",
        "productId": "p133",
        "xPct": 17.500106812175368,
        "yPct": 35.99229935813596
    },
    {
        "id": "admin-hhiihk76j",
        "pageId": "017",
        "productId": "p134",
        "xPct": 46.56278419668089,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-ulqwoock5",
        "pageId": "017",
        "productId": "p135",
        "xPct": 78.43797874742889,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-qc7hp25k5",
        "pageId": "017",
        "productId": "p140",
        "xPct": 17.96885967321578,
        "yPct": 59.75033344987892
    },
    {
        "id": "admin-3tq060c03",
        "pageId": "017",
        "productId": "p137",
        "xPct": 48.12529373348226,
        "yPct": 59.86083593402657
    },
    {
        "id": "admin-xga67szdv",
        "pageId": "017",
        "productId": "p138",
        "xPct": 78.12547684006861,
        "yPct": 59.30832351328835
    },
    {
        "id": "admin-apwm6ob45",
        "pageId": "017",
        "productId": "p139",
        "xPct": 18.59386348793633,
        "yPct": 82.18233773185018
    },
    {
        "id": "admin-xabx2wmdc",
        "pageId": "018",
        "productId": "p133",
        "xPct": 16.56199073480673,
        "yPct": 33.89275215933077
    },
    {
        "id": "admin-444y6459a",
        "pageId": "018",
        "productId": "p134",
        "xPct": 49.843443868675955,
        "yPct": 33.11923477029728
    },
    {
        "id": "admin-zibaxk97z",
        "pageId": "018",
        "productId": "p135",
        "xPct": 79.06237220686161,
        "yPct": 32.89822980200199
    },
    {
        "id": "admin-clvjy4b65",
        "pageId": "018",
        "productId": "p136",
        "xPct": 16.874492642167006,
        "yPct": 56.21425395715439
    },
    {
        "id": "admin-ryrqszz96",
        "pageId": "018",
        "productId": "p137",
        "xPct": 48.59343623923486,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-rgpq5tj6w",
        "pageId": "018",
        "productId": "p138",
        "xPct": 81.71863841942395,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-lwrij7nu0",
        "pageId": "018",
        "productId": "p139",
        "xPct": 15.780735966406045,
        "yPct": 74.99967626225347
    },
    {
        "id": "admin-73b9oelfw",
        "pageId": "018",
        "productId": "p140",
        "xPct": 50.4684476833965,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-t57n4snv8",
        "pageId": "022",
        "productId": "p152",
        "xPct": 21.09326839153071,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-j6sjxxhlc",
        "pageId": "022",
        "productId": "p153",
        "xPct": 49.9996948223561,
        "yPct": 24.279036038485945
    },
    {
        "id": "admin-houojboyy",
        "pageId": "022",
        "productId": "p154",
        "xPct": 78.74987029950134,
        "yPct": 23.063508712861886
    },
    {
        "id": "admin-vwb7cu6is",
        "pageId": "022",
        "productId": "p156",
        "xPct": 48.59343623923486,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-gu7kjy97k",
        "pageId": "022",
        "productId": "p157",
        "xPct": 81.71863841942395,
        "yPct": 50.6891297497723
    },
    {
        "id": "admin-9y3jq8o4h",
        "pageId": "022",
        "productId": "p158",
        "xPct": 35.624607083783474,
        "yPct": 82.62434766844075
    },
    {
        "id": "admin-qpj8pthi4",
        "pageId": "022",
        "productId": "p159",
        "xPct": 73.1248359670164,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-4k9la7smd",
        "pageId": "023",
        "productId": "p160",
        "xPct": 24.53139972778154,
        "yPct": 23.39501616530481
    },
    {
        "id": "admin-ea3sofhch",
        "pageId": "023",
        "productId": "p161",
        "xPct": 71.87543869286311,
        "yPct": 24.72104597507651
    },
    {
        "id": "admin-dlfncb8u9",
        "pageId": "023",
        "productId": "p166",
        "xPct": 24.21889782042127,
        "yPct": 56.103751473006746
    },
    {
        "id": "admin-438u5qrtc",
        "pageId": "023",
        "productId": "p162",
        "xPct": 71.4066858318227,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-kkuk6jpp5",
        "pageId": "025",
        "productId": "p184",
        "xPct": 27.656418801384287,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-mrcsjwz27",
        "pageId": "025",
        "productId": "p177",
        "xPct": 74.68795585910559,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-7q2exdgst",
        "pageId": "025",
        "productId": "p178",
        "xPct": 29.68768119922607,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-wmx65dvfz",
        "pageId": "025",
        "productId": "p179",
        "xPct": 73.9067010907049,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-n82aj5zdb",
        "pageId": "025",
        "productId": "p247",
        "xPct": 31.093939782347302,
        "yPct": 28.1466229836534
    },
    {
        "id": "admin-7ln23hajo",
        "pageId": "026",
        "productId": "p180",
        "xPct": 24.843291279854,
        "yPct": 24.83154845922415
    },
    {
        "id": "admin-y0ovfxhx2",
        "pageId": "027",
        "productId": "p207",
        "xPct": 45.000274659879516,
        "yPct": 33.00873228614963
    },
    {
        "id": "admin-jvi9catax",
        "pageId": "027",
        "productId": "p209",
        "xPct": 75.31295967382613,
        "yPct": 25.052553427519435
    },
    {
        "id": "admin-pemhbdh1g",
        "pageId": "027",
        "productId": "p208",
        "xPct": 82.18800163575217,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-ubkny3xut",
        "pageId": "028",
        "productId": "p216",
        "xPct": 11.718211170722476,
        "yPct": 67.04349740362328
    },
    {
        "id": "admin-v2xq8296q",
        "pageId": "028",
        "productId": "p217",
        "xPct": 42.49964904570951,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-83zhqst23",
        "pageId": "029",
        "productId": "p218",
        "xPct": 17.500106812175368,
        "yPct": 23.28451368115717
    },
    {
        "id": "admin-rkhpuy7bk",
        "pageId": "029",
        "productId": "p219",
        "xPct": 47.50028991876171,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-eb3l5gvae",
        "pageId": "029",
        "productId": "p220",
        "xPct": 77.34422207166793,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-2ezdqa48b",
        "pageId": "029",
        "productId": "p221",
        "xPct": 19.531369210017154,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-b2on9jegb",
        "pageId": "029",
        "productId": "p223",
        "xPct": 50.62530899236446,
        "yPct": 63.3969154267511
    },
    {
        "id": "admin-sgcw1s3l1",
        "pageId": "029",
        "productId": "p222",
        "xPct": 79.3754844695097,
        "yPct": 64.05993033163695
    },
    {
        "id": "admin-c9zw1e79u",
        "pageId": "031",
        "productId": "p224",
        "xPct": 28.59392452346511,
        "yPct": 25.49456336411
    },
    {
        "id": "admin-luu6d7hnb",
        "pageId": "031",
        "productId": "p225",
        "xPct": 28.59392452346511,
        "yPct": 41.95943350210861
    },
    {
        "id": "admin-iekfnxzo0",
        "pageId": "031",
        "productId": "p226",
        "xPct": 72.18794060022338,
        "yPct": 41.07541362892748
    },
    {
        "id": "admin-458epb2rk",
        "pageId": "031",
        "productId": "p228",
        "xPct": 29.53143024554593,
        "yPct": 68.59053218169025
    },
    {
        "id": "admin-ezabpbhjx",
        "pageId": "031",
        "productId": "p229",
        "xPct": 73.12544632230421,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-b6eu0osgf",
        "pageId": "031",
        "productId": "p230",
        "xPct": 29.68768119922607,
        "yPct": 83.39786505747423
    },
    {
        "id": "admin-hqm16mq4e",
        "pageId": "031",
        "productId": "p231",
        "xPct": 61.25037384261378,
        "yPct": 84.50288989895066
    },
    {
        "id": "admin-o156i2paf",
        "pageId": "033",
        "productId": "p236",
        "xPct": 17.500106812175368,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-12os4rfnu",
        "pageId": "033",
        "productId": "p237",
        "xPct": 50.62530899236446,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-had8ibxw5",
        "pageId": "033",
        "productId": "p238",
        "xPct": 80.46924114527066,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-qngsm9vwk",
        "pageId": "033",
        "productId": "p240",
        "xPct": 15.937597275373996,
        "yPct": 55.33023408397325
    },
    {
        "id": "admin-e62g5jtak",
        "pageId": "033",
        "productId": "p241",
        "xPct": 49.84405422396377,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-s3riy7oip",
        "pageId": "033",
        "productId": "p242",
        "xPct": 80.6254920989508,
        "yPct": 54.22520924249684
    },
    {
        "id": "admin-mnl981dmk",
        "pageId": "033",
        "productId": "p119",
        "xPct": 49.21905040924322,
        "yPct": 79.3092731440115
    },
    {
        "id": "admin-m8gu086z8",
        "pageId": "033",
        "productId": "p239",
        "xPct": 77.34422207166793,
        "yPct": 72.12661167441479
    },
    {
        "id": "admin-ad5t3mens",
        "pageId": "035",
        "productId": "p248",
        "xPct": 62.187879564694605,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-f98w73ujj",
        "pageId": "035",
        "productId": "p249",
        "xPct": 69.37542343398093,
        "yPct": 64.39143778407987
    },
    {
        "id": "admin-wde4n3dzu",
        "pageId": "035",
        "productId": "p250",
        "xPct": 77.03172016430764,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-e053atsca",
        "pageId": "036",
        "productId": "p253",
        "xPct": 64.68728446828898,
        "yPct": 66.71198995118036
    },
    {
        "id": "admin-93n5h8ek3",
        "pageId": "036",
        "productId": "p251",
        "xPct": 71.87482833757531,
        "yPct": 66.60148746703271
    },
    {
        "id": "admin-821z7j0ac",
        "pageId": "036",
        "productId": "p252",
        "xPct": 79.99987792894244,
        "yPct": 66.82249243532799
    },
    {
        "id": "admin-dsid7yqi5",
        "pageId": "038",
        "productId": "p254",
        "xPct": 38.2808732963458,
        "yPct": 21.074463998204333
    },
    {
        "id": "admin-ab48kl1ja",
        "pageId": "038",
        "productId": "p255",
        "xPct": 74.06234168909722,
        "yPct": 22.8425037445666
    },
    {
        "id": "admin-a83sjiuxg",
        "pageId": "038",
        "productId": "p256",
        "xPct": 37.49961852794512,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-szf3qvm5a",
        "pageId": "038",
        "productId": "p257",
        "xPct": 73.74983978173695,
        "yPct": 50.799632233919944
    },
    {
        "id": "admin-or7hu4hes",
        "pageId": "038",
        "productId": "p259",
        "xPct": 38.593375203706074,
        "yPct": 78.86726320742093
    },
    {
        "id": "admin-4hks8ex67",
        "pageId": "038",
        "productId": "p258",
        "xPct": 75.46860027221845,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-w0h3iju04",
        "pageId": "040",
        "productId": "p261",
        "xPct": 38.2808732963458,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-18r2glwr2",
        "pageId": "040",
        "productId": "p263",
        "xPct": 69.84356593973352,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-zq2mb3vgu",
        "pageId": "040",
        "productId": "p260",
        "xPct": 35.46835613010334,
        "yPct": 57.319278798630805
    },
    {
        "id": "admin-lhikqqgz4",
        "pageId": "040",
        "productId": "p262",
        "xPct": 70.31231880077394,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-7zcyo2ykc",
        "pageId": "042",
        "productId": "p265",
        "xPct": 39.68713187946704,
        "yPct": 19.858936672580278
    },
    {
        "id": "admin-029nqncqd",
        "pageId": "042",
        "productId": "p264",
        "xPct": 69.53106403237325,
        "yPct": 22.51099629212368
    },
    {
        "id": "admin-laqdzr1px",
        "pageId": "042",
        "productId": "p266",
        "xPct": 38.43712425002594,
        "yPct": 48.70008503511475
    },
    {
        "id": "admin-c29gtrtw3",
        "pageId": "044",
        "productId": "p267",
        "xPct": 23.124530789372493,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-rh4ug124k",
        "pageId": "044",
        "productId": "p268",
        "xPct": 51.2497024517972,
        "yPct": 28.92014037268689
    },
    {
        "id": "admin-kbcm3nvew",
        "pageId": "044",
        "productId": "p269",
        "xPct": 80.46863078998285,
        "yPct": 29.141145340982177
    },
    {
        "id": "admin-gwlk4d1rw",
        "pageId": "044",
        "productId": "p270",
        "xPct": 22.18702506729167,
        "yPct": 63.949427847489304
    },
    {
        "id": "admin-7a2ns82o0",
        "pageId": "044",
        "productId": "p271",
        "xPct": 54.68722343276021,
        "yPct": 64.17043281578458
    },
    {
        "id": "admin-ha9rqoi2q",
        "pageId": "044",
        "productId": "p259",
        "xPct": 80.46863078998285,
        "yPct": 64.28093529993222
    },
    {
        "id": "admin-42opuud1j",
        "pageId": "048",
        "productId": "p279",
        "xPct": 33.74959563962182,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-7m5qdx3nk",
        "pageId": "048",
        "productId": "p281",
        "xPct": 36.87461471322457,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-raffc43tw",
        "pageId": "048",
        "productId": "p285",
        "xPct": 38.43712425002594,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-sh4mppakb",
        "pageId": "048",
        "productId": "p283",
        "xPct": 37.34336757426498,
        "yPct": 84.17138244650774
    },
    {
        "id": "admin-7bapy41kd",
        "pageId": "048",
        "productId": "p70",
        "xPct": 83.12489700254518,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-7aw58tg60",
        "pageId": "048",
        "productId": "p282",
        "xPct": 84.68740653934655,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-89dzrfg62",
        "pageId": "048",
        "productId": "p286",
        "xPct": 84.68740653934655,
        "yPct": 61.84988064868412
    },
    {
        "id": "admin-zwej5vbgh",
        "pageId": "048",
        "productId": "p284",
        "xPct": 83.90615177094587,
        "yPct": 83.28736257332659
    },
    {
        "id": "admin-0tmmnp0nd",
        "pageId": "049",
        "productId": "p290",
        "xPct": 30.00018310658634,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-9us7e8jmf",
        "pageId": "049",
        "productId": "p291",
        "xPct": 35.31271553171101,
        "yPct": 83.50836754162188
    },
    {
        "id": "admin-ctpqy4286",
        "pageId": "049",
        "productId": "p292",
        "xPct": 45.625278474600066,
        "yPct": 85.93942219287
    },
    {
        "id": "admin-jnubsd7hb",
        "pageId": "049",
        "productId": "p293",
        "xPct": 56.7190961858898,
        "yPct": 85.16590480383651
    },
    {
        "id": "admin-irv2zs2j2",
        "pageId": "049",
        "productId": "p294",
        "xPct": 64.2191419625364,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-6w28jzxrb",
        "pageId": "049",
        "productId": "p295",
        "xPct": 68.90667057294051,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-37spcpij0",
        "pageId": "050",
        "productId": "p298",
        "xPct": 38.593375203706074,
        "yPct": 16.985872084741594
    },
    {
        "id": "admin-du9ogw60p",
        "pageId": "050",
        "productId": "p299",
        "xPct": 36.562112805864295,
        "yPct": 41.29641859722276
    },
    {
        "id": "admin-p0rjy2l3y",
        "pageId": "050",
        "productId": "p297",
        "xPct": 66.56229591245064,
        "yPct": 48.368577582671826
    },
    {
        "id": "admin-0ul99x2kb",
        "pageId": "050",
        "productId": "p296",
        "xPct": 58.74974822844378,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-utjc5d5vi",
        "pageId": "051",
        "productId": "p300",
        "xPct": 22.187635422579483,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-aouvnr5qi",
        "pageId": "051",
        "productId": "p302",
        "xPct": 48.12529373348226,
        "yPct": 38.423354009384084
    },
    {
        "id": "admin-1jkvz0q5q",
        "pageId": "051",
        "productId": "p301",
        "xPct": 32.81270027282881,
        "yPct": 50.468124781477016
    },
    {
        "id": "admin-97tgqjl4u",
        "pageId": "052",
        "productId": "p304",
        "xPct": 29.99957275129853,
        "yPct": 34.44526458006898
    },
    {
        "id": "admin-mle1h4i35",
        "pageId": "052",
        "productId": "p303",
        "xPct": 61.40601444100611,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-wigk8ldfo",
        "pageId": "053",
        "productId": "p305",
        "xPct": 22.812639237300033,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-e6w4k6mfz",
        "pageId": "054",
        "productId": "p308",
        "xPct": 66.09354305141024,
        "yPct": 75.8836961354346
    },
    {
        "id": "admin-kleywpxzs",
        "pageId": "054",
        "productId": "p309",
        "xPct": 72.81233405965612,
        "yPct": 76.21520358787754
    },
    {
        "id": "admin-fkp619pjt",
        "pageId": "054",
        "productId": "p307",
        "xPct": 88.12492752030957,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-iz92p8rnr",
        "pageId": "054",
        "productId": "p306",
        "xPct": 80.15612888262258,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-cisr8k5wm",
        "pageId": "056",
        "productId": "p310",
        "xPct": 69.06231117133284,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-7c11q1li4",
        "pageId": "057",
        "productId": "p313",
        "xPct": 61.09412288893365,
        "yPct": 50.57862726562467
    },
    {
        "id": "admin-gc8ywq5l5",
        "pageId": "057",
        "productId": "p312",
        "xPct": 38.75023651267403,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-kgecoeyf2",
        "pageId": "057",
        "productId": "p311",
        "xPct": 17.343855858495232,
        "yPct": 49.58410490829589
    },
    {
        "id": "admin-zzw6o9qm1",
        "pageId": "057",
        "productId": "p314",
        "xPct": 85.15676975567477,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-599cawuft",
        "pageId": "058",
        "productId": "p316",
        "xPct": 13.74947356856426,
        "yPct": 52.67817446442985
    },
    {
        "id": "admin-831x7w7mp",
        "pageId": "058",
        "productId": "p315",
        "xPct": 21.562021252571125,
        "yPct": 52.34666701198692
    },
    {
        "id": "admin-fu82og0qm",
        "pageId": "058",
        "productId": "p317",
        "xPct": 36.40586185218416,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-8yb6bodlr",
        "pageId": "059",
        "productId": "p318",
        "xPct": 65.15664768461721,
        "yPct": 55.88274650471147
    },
    {
        "id": "admin-l8sen3rbi",
        "pageId": "059",
        "productId": "p319",
        "xPct": 58.12535476901104,
        "yPct": 55.66174153641617
    },
    {
        "id": "admin-v8dkm4vda",
        "pageId": "059",
        "productId": "p320",
        "xPct": 80.93799400631107,
        "yPct": 55.4407365681209
    },
    {
        "id": "admin-kqycs8tpw",
        "pageId": "060",
        "productId": "p321",
        "xPct": 54.37472152539994,
        "yPct": 33.22973725444492
    },
    {
        "id": "admin-40zlm72nq",
        "pageId": "061",
        "productId": "p322",
        "xPct": 32.96895122650895,
        "yPct": 13.5602950761647
    },
    {
        "id": "admin-c5vy402m8",
        "pageId": "061",
        "productId": "p326",
        "xPct": 18.750114441616464,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-oh6ebb6as",
        "pageId": "061",
        "productId": "p323",
        "xPct": 46.71903515036103,
        "yPct": 30.135667698310954
    },
    {
        "id": "admin-ffmtm61f1",
        "pageId": "061",
        "productId": "p324",
        "xPct": 28.281422616104834,
        "yPct": 37.20782668376002
    },
    {
        "id": "admin-148b2ppqc",
        "pageId": "061",
        "productId": "p325",
        "xPct": 19.531369210017154,
        "yPct": 42.069935986256255
    },
    {
        "id": "admin-7effq5n1z",
        "pageId": "061",
        "productId": "p327",
        "xPct": 17.031353951134957,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-j4osp5cii",
        "pageId": "062",
        "productId": "p328",
        "xPct": 30.62457656601908,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-gehbg3pox",
        "pageId": "062",
        "productId": "p329",
        "xPct": 39.218379018426624,
        "yPct": 62.8444030060129
    },
    {
        "id": "admin-ngrngtzni",
        "pageId": "062",
        "productId": "p330",
        "xPct": 45.78091907299239,
        "yPct": 62.51289555356997
    },
    {
        "id": "admin-4243s5a4m",
        "pageId": "062",
        "productId": "p331",
        "xPct": 54.06221961803966,
        "yPct": 62.73390052186525
    },
    {
        "id": "admin-xvyf5a4n8",
        "pageId": "062",
        "productId": "p332",
        "xPct": 62.34352016308693,
        "yPct": 62.18138810112704
    },
    {
        "id": "admin-kft9t0lbz",
        "pageId": "062",
        "productId": "p333",
        "xPct": 68.59355831029242,
        "yPct": 62.95490549016053
    },
    {
        "id": "admin-d7z9lmsg2",
        "pageId": "063",
        "productId": "p334",
        "xPct": 43.125263215717865,
        "yPct": 68.4800296975426
    },
    {
        "id": "admin-zl79fisdp",
        "pageId": "063",
        "productId": "p335",
        "xPct": 49.531552316603495,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-yusyx35hb",
        "pageId": "063",
        "productId": "p336",
        "xPct": 57.969103815330904,
        "yPct": 68.36952721339497
    },
    {
        "id": "admin-45q5uftig",
        "pageId": "064",
        "productId": "p337",
        "xPct": 23.280781743052632,
        "yPct": 47.81606516193362
    },
    {
        "id": "admin-f3nt6tsna",
        "pageId": "026",
        "productId": "p1",
        "xPct": 87.33535967578521,
        "yPct": 26.98529988020466
    },
    {
        "id": "admin-70egvf9gn",
        "pageId": "016",
        "productId": "p3",
        "xPct": 83.08004052684905,
        "yPct": 43.322249465399295
    },
    {
        "id": "admin-o5y1ek63v",
        "pageId": "016",
        "productId": "p1",
        "xPct": 22.69503546099291,
        "yPct": 52.63717686046642
    },
    {
        "id": "admin-dct363f6r",
        "pageId": "017",
        "productId": "p3",
        "xPct": 18.135764944275582,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-maer2m4qb",
        "pageId": "017",
        "productId": "p4",
        "xPct": 79.33130699088146,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-4jy8119qe",
        "pageId": "017",
        "productId": "p5",
        "xPct": 45.49138804457954,
        "yPct": 32.28764316662748
    },
    {
        "id": "admin-6q1wml9ef",
        "pageId": "062",
        "productId": "p279",
        "xPct": 43.90625,
        "yPct": 47.29095084344838
    },
    {
        "id": "admin-6k149m9cv",
        "pageId": "005",
        "productId": "p1",
        "xPct": 24.68765068146168,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-8i4minqc1",
        "pageId": "005",
        "productId": "p2",
        "xPct": 32.343947411788406,
        "yPct": 37.76033910449823
    },
    {
        "id": "admin-mop52jcxm",
        "pageId": "005",
        "productId": "p3",
        "xPct": 40.3127460494754,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-562qucdpu",
        "pageId": "005",
        "productId": "p4",
        "xPct": 49.06279945556308,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-cn55k93ly",
        "pageId": "005",
        "productId": "p5",
        "xPct": 57.344100000610354,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-7ghius64v",
        "pageId": "005",
        "productId": "p6",
        "xPct": 65.9379024530179,
        "yPct": 36.76581674716945
    },
    {
        "id": "admin-vf13h9c2b",
        "pageId": "005",
        "productId": "p7",
        "xPct": 74.53170490542544,
        "yPct": 37.870841588645874
    },
    {
        "id": "admin-zztyje9bt",
        "pageId": "005",
        "productId": "p8",
        "xPct": 24.06264686674113,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-jebf2fu38",
        "pageId": "005",
        "productId": "p9",
        "xPct": 32.81270027282881,
        "yPct": 46.49003535216192
    },
    {
        "id": "admin-wydbgjt8y",
        "pageId": "005",
        "productId": "p10",
        "xPct": 42.03150653995691,
        "yPct": 45.053503058242576
    },
    {
        "id": "admin-zqzbivr9j",
        "pageId": "005",
        "productId": "p11",
        "xPct": 48.75029754820281,
        "yPct": 46.15852789971899
    },
    {
        "id": "admin-2kp73mr4h",
        "pageId": "005",
        "productId": "p12",
        "xPct": 58.43785667637131,
        "yPct": 44.61149312165201
    },
    {
        "id": "admin-4in4cj6h3",
        "pageId": "005",
        "productId": "p13",
        "xPct": 67.187910082459,
        "yPct": 45.385010510685504
    },
    {
        "id": "admin-ctn4c21s0",
        "pageId": "005",
        "productId": "p14",
        "xPct": 74.37545395174531,
        "yPct": 45.274508026537866
    },
    {
        "id": "admin-168112lo2",
        "pageId": "006",
        "productId": "p57",
        "xPct": 64.84353542196912,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-yu0re5rb2",
        "pageId": "007",
        "productId": "p57",
        "xPct": 30.62518692130689,
        "yPct": 31.461697508082654
    },
    {
        "id": "admin-owmoa0pjx",
        "pageId": "007",
        "productId": "p58",
        "xPct": 52.031567575485695,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-in9lixb5i",
        "pageId": "007",
        "productId": "p59",
        "xPct": 76.40671634958709,
        "yPct": 27.262603110472266
    },
    {
        "id": "admin-uqn6zksxp",
        "pageId": "007",
        "productId": "p62",
        "xPct": 50.00030517764391,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-52khx9kh9",
        "pageId": "007",
        "productId": "p63",
        "xPct": 72.50044250758366,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-8ynylumh2",
        "pageId": "007",
        "productId": "p65",
        "xPct": 31.56269264338772,
        "yPct": 80.6353029537832
    },
    {
        "id": "admin-51imblzdk",
        "pageId": "007",
        "productId": "p66",
        "xPct": 48.75029754820281,
        "yPct": 77.87274085009216
    },
    {
        "id": "admin-tzg79uwgh",
        "pageId": "007",
        "productId": "p67",
        "xPct": 66.40665531405831,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-kfd1oajwt",
        "pageId": "007",
        "productId": "p61",
        "xPct": 26.562662125623326,
        "yPct": 55.55123905226854
    },
    {
        "id": "admin-024fmuhot",
        "pageId": "008",
        "productId": "p60",
        "xPct": 30.780827519699216,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-qbftx770z",
        "pageId": "008",
        "productId": "p68",
        "xPct": 50.78094959075678,
        "yPct": 26.931095658029342
    },
    {
        "id": "admin-ombvskxx6",
        "pageId": "008",
        "productId": "p64",
        "xPct": 30.62457656601908,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-w8xuykvbm",
        "pageId": "008",
        "productId": "p72",
        "xPct": 47.4996795634739,
        "yPct": 57.20877631448317
    },
    {
        "id": "admin-f7ezps9ja",
        "pageId": "008",
        "productId": "p76",
        "xPct": 72.96858501333627,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-mcldsy9si",
        "pageId": "008",
        "productId": "p79",
        "xPct": 53.43721580331911,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-3liqoxk8r",
        "pageId": "008",
        "productId": "p80",
        "xPct": 69.21856212501297,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-clvu8816m",
        "pageId": "009",
        "productId": "p69",
        "xPct": 30.937688828667163,
        "yPct": 25.715568332405287
    },
    {
        "id": "admin-yhd8dr1f9",
        "pageId": "009",
        "productId": "p70",
        "xPct": 48.43779564084254,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-ljkww2g64",
        "pageId": "009",
        "productId": "p71",
        "xPct": 69.53167438766106,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-i5i51bu3z",
        "pageId": "009",
        "productId": "p74",
        "xPct": 49.06279945556308,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-xue15cgx3",
        "pageId": "009",
        "productId": "p77",
        "xPct": 34.53146076331032,
        "yPct": 81.96133276355489
    },
    {
        "id": "admin-yw410fmxw",
        "pageId": "009",
        "productId": "p78",
        "xPct": 50.31280708500419,
        "yPct": 82.40334270014546
    },
    {
        "id": "admin-u4l09huoe",
        "pageId": "010",
        "productId": "p81",
        "xPct": 34.0620975469821,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-t0an1bphj",
        "pageId": "010",
        "productId": "p82",
        "xPct": 53.593466756999256,
        "yPct": 28.036120499505763
    },
    {
        "id": "admin-m4q6wzenf",
        "pageId": "010",
        "productId": "p83",
        "xPct": 76.09360408693901,
        "yPct": 28.367627951948688
    },
    {
        "id": "admin-ci6exe7m2",
        "pageId": "010",
        "productId": "p83",
        "xPct": 34.0620975469821,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-0pe4bow7m",
        "pageId": "010",
        "productId": "p86",
        "xPct": 55.31222724748076,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-xwq3isc4l",
        "pageId": "010",
        "productId": "p87",
        "xPct": 75.6248512258986,
        "yPct": 53.3411893693157
    },
    {
        "id": "admin-3ao2n6zpv",
        "pageId": "010",
        "productId": "p89",
        "xPct": 35.15585422274306,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-tp3uvqxi4",
        "pageId": "010",
        "productId": "p90",
        "xPct": 54.999725340120484,
        "yPct": 79.64078059645442
    },
    {
        "id": "admin-rdgd25kgj",
        "pageId": "010",
        "productId": "p91",
        "xPct": 74.99984741117804,
        "yPct": 79.75128308060206
    },
    {
        "id": "admin-4f3p0zi2u",
        "pageId": "011",
        "productId": "p84",
        "xPct": 35.78146839275142,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-t965ykkgi",
        "pageId": "011",
        "productId": "p88",
        "xPct": 55.46908855644871,
        "yPct": 26.8205931738817
    },
    {
        "id": "admin-vk40iuv3f",
        "pageId": "011",
        "productId": "p92",
        "xPct": 75.93796348854667,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-sf76zsnqz",
        "pageId": "012",
        "productId": "p106",
        "xPct": 70.31231880077394,
        "yPct": 77.20972594520632
    },
    {
        "id": "admin-kplnjcadp",
        "pageId": "012",
        "productId": "p105",
        "xPct": 78.5936193458212,
        "yPct": 77.76223836594451
    },
    {
        "id": "admin-fxah2rh81",
        "pageId": "012",
        "productId": "p107",
        "xPct": 85.93741416878765,
        "yPct": 77.43073091350159
    },
    {
        "id": "admin-i8szzrxkk",
        "pageId": "012",
        "productId": "p108",
        "xPct": 92.65620517703354,
        "yPct": 77.54123339764924
    },
    {
        "id": "admin-hwyz347kh",
        "pageId": "014",
        "productId": "p109",
        "xPct": 26.405800816655372,
        "yPct": 31.01968757149209
    },
    {
        "id": "admin-7q1yzumg3",
        "pageId": "014",
        "productId": "p110",
        "xPct": 57.812242506362956,
        "yPct": 30.467175150753878
    },
    {
        "id": "admin-dj3ddpja2",
        "pageId": "014",
        "productId": "p111",
        "xPct": 90.7811937328719,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-mtfxtxubb",
        "pageId": "014",
        "productId": "p112",
        "xPct": 26.249549862975236,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-tjsobhnew",
        "pageId": "014",
        "productId": "p113",
        "xPct": 58.59349727476364,
        "yPct": 57.540283766926095
    },
    {
        "id": "admin-j8faw51a4",
        "pageId": "014",
        "productId": "p114",
        "xPct": 90.31244087183148,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-xbml9w5sp",
        "pageId": "014",
        "productId": "p115",
        "xPct": 26.56205177033551,
        "yPct": 84.94489983554122
    },
    {
        "id": "admin-4hc9kjwzr",
        "pageId": "014",
        "productId": "p117",
        "xPct": 89.0624332423904,
        "yPct": 84.83439735139359
    },
    {
        "id": "admin-jed5ybaz1",
        "pageId": "015",
        "productId": "p118",
        "xPct": 25.31265449618223,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-o9y306tpv",
        "pageId": "015",
        "productId": "p119",
        "xPct": 58.281605722691175,
        "yPct": 29.804160245868026
    },
    {
        "id": "admin-sutbsb4tn",
        "pageId": "015",
        "productId": "p116",
        "xPct": 88.59429073663779,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-f6xt6y3jx",
        "pageId": "017",
        "productId": "p133",
        "xPct": 17.500106812175368,
        "yPct": 35.99229935813596
    },
    {
        "id": "admin-hhiihk76j",
        "pageId": "017",
        "productId": "p134",
        "xPct": 46.56278419668089,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-ulqwoock5",
        "pageId": "017",
        "productId": "p135",
        "xPct": 78.43797874742889,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-qc7hp25k5",
        "pageId": "017",
        "productId": "p140",
        "xPct": 17.96885967321578,
        "yPct": 59.75033344987892
    },
    {
        "id": "admin-3tq060c03",
        "pageId": "017",
        "productId": "p137",
        "xPct": 48.12529373348226,
        "yPct": 59.86083593402657
    },
    {
        "id": "admin-xga67szdv",
        "pageId": "017",
        "productId": "p138",
        "xPct": 78.12547684006861,
        "yPct": 59.30832351328835
    },
    {
        "id": "admin-apwm6ob45",
        "pageId": "017",
        "productId": "p139",
        "xPct": 18.59386348793633,
        "yPct": 82.18233773185018
    },
    {
        "id": "admin-xabx2wmdc",
        "pageId": "018",
        "productId": "p133",
        "xPct": 16.56199073480673,
        "yPct": 33.89275215933077
    },
    {
        "id": "admin-444y6459a",
        "pageId": "018",
        "productId": "p134",
        "xPct": 49.843443868675955,
        "yPct": 33.11923477029728
    },
    {
        "id": "admin-zibaxk97z",
        "pageId": "018",
        "productId": "p135",
        "xPct": 79.06237220686161,
        "yPct": 32.89822980200199
    },
    {
        "id": "admin-clvjy4b65",
        "pageId": "018",
        "productId": "p136",
        "xPct": 16.874492642167006,
        "yPct": 56.21425395715439
    },
    {
        "id": "admin-ryrqszz96",
        "pageId": "018",
        "productId": "p137",
        "xPct": 48.59343623923486,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-rgpq5tj6w",
        "pageId": "018",
        "productId": "p138",
        "xPct": 81.71863841942395,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-lwrij7nu0",
        "pageId": "018",
        "productId": "p139",
        "xPct": 15.780735966406045,
        "yPct": 74.99967626225347
    },
    {
        "id": "admin-73b9oelfw",
        "pageId": "018",
        "productId": "p140",
        "xPct": 50.4684476833965,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-t57n4snv8",
        "pageId": "022",
        "productId": "p152",
        "xPct": 21.09326839153071,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-j6sjxxhlc",
        "pageId": "022",
        "productId": "p153",
        "xPct": 49.9996948223561,
        "yPct": 24.279036038485945
    },
    {
        "id": "admin-houojboyy",
        "pageId": "022",
        "productId": "p154",
        "xPct": 78.74987029950134,
        "yPct": 23.063508712861886
    },
    {
        "id": "admin-vwb7cu6is",
        "pageId": "022",
        "productId": "p156",
        "xPct": 48.59343623923486,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-gu7kjy97k",
        "pageId": "022",
        "productId": "p157",
        "xPct": 81.71863841942395,
        "yPct": 50.6891297497723
    },
    {
        "id": "admin-9y3jq8o4h",
        "pageId": "022",
        "productId": "p158",
        "xPct": 35.624607083783474,
        "yPct": 82.62434766844075
    },
    {
        "id": "admin-qpj8pthi4",
        "pageId": "022",
        "productId": "p159",
        "xPct": 73.1248359670164,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-4k9la7smd",
        "pageId": "023",
        "productId": "p160",
        "xPct": 24.53139972778154,
        "yPct": 23.39501616530481
    },
    {
        "id": "admin-ea3sofhch",
        "pageId": "023",
        "productId": "p161",
        "xPct": 71.87543869286311,
        "yPct": 24.72104597507651
    },
    {
        "id": "admin-dlfncb8u9",
        "pageId": "023",
        "productId": "p166",
        "xPct": 24.21889782042127,
        "yPct": 56.103751473006746
    },
    {
        "id": "admin-438u5qrtc",
        "pageId": "023",
        "productId": "p162",
        "xPct": 71.4066858318227,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-kkuk6jpp5",
        "pageId": "025",
        "productId": "p184",
        "xPct": 27.656418801384287,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-mrcsjwz27",
        "pageId": "025",
        "productId": "p177",
        "xPct": 74.68795585910559,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-7q2exdgst",
        "pageId": "025",
        "productId": "p178",
        "xPct": 29.68768119922607,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-wmx65dvfz",
        "pageId": "025",
        "productId": "p179",
        "xPct": 73.9067010907049,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-n82aj5zdb",
        "pageId": "025",
        "productId": "p247",
        "xPct": 31.093939782347302,
        "yPct": 28.1466229836534
    },
    {
        "id": "admin-7ln23hajo",
        "pageId": "026",
        "productId": "p180",
        "xPct": 24.843291279854,
        "yPct": 24.83154845922415
    },
    {
        "id": "admin-y0ovfxhx2",
        "pageId": "027",
        "productId": "p207",
        "xPct": 45.000274659879516,
        "yPct": 33.00873228614963
    },
    {
        "id": "admin-jvi9catax",
        "pageId": "027",
        "productId": "p209",
        "xPct": 75.31295967382613,
        "yPct": 25.052553427519435
    },
    {
        "id": "admin-pemhbdh1g",
        "pageId": "027",
        "productId": "p208",
        "xPct": 82.18800163575217,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-ubkny3xut",
        "pageId": "028",
        "productId": "p216",
        "xPct": 11.718211170722476,
        "yPct": 67.04349740362328
    },
    {
        "id": "admin-v2xq8296q",
        "pageId": "028",
        "productId": "p217",
        "xPct": 42.49964904570951,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-83zhqst23",
        "pageId": "029",
        "productId": "p218",
        "xPct": 17.500106812175368,
        "yPct": 23.28451368115717
    },
    {
        "id": "admin-rkhpuy7bk",
        "pageId": "029",
        "productId": "p219",
        "xPct": 47.50028991876171,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-eb3l5gvae",
        "pageId": "029",
        "productId": "p220",
        "xPct": 77.34422207166793,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-2ezdqa48b",
        "pageId": "029",
        "productId": "p221",
        "xPct": 19.531369210017154,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-b2on9jegb",
        "pageId": "029",
        "productId": "p223",
        "xPct": 50.62530899236446,
        "yPct": 63.3969154267511
    },
    {
        "id": "admin-sgcw1s3l1",
        "pageId": "029",
        "productId": "p222",
        "xPct": 79.3754844695097,
        "yPct": 64.05993033163695
    },
    {
        "id": "admin-c9zw1e79u",
        "pageId": "031",
        "productId": "p224",
        "xPct": 28.59392452346511,
        "yPct": 25.49456336411
    },
    {
        "id": "admin-luu6d7hnb",
        "pageId": "031",
        "productId": "p225",
        "xPct": 28.59392452346511,
        "yPct": 41.95943350210861
    },
    {
        "id": "admin-iekfnxzo0",
        "pageId": "031",
        "productId": "p226",
        "xPct": 72.18794060022338,
        "yPct": 41.07541362892748
    },
    {
        "id": "admin-458epb2rk",
        "pageId": "031",
        "productId": "p228",
        "xPct": 29.53143024554593,
        "yPct": 68.59053218169025
    },
    {
        "id": "admin-ezabpbhjx",
        "pageId": "031",
        "productId": "p229",
        "xPct": 73.12544632230421,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-b6eu0osgf",
        "pageId": "031",
        "productId": "p230",
        "xPct": 29.68768119922607,
        "yPct": 83.39786505747423
    },
    {
        "id": "admin-hqm16mq4e",
        "pageId": "031",
        "productId": "p231",
        "xPct": 61.25037384261378,
        "yPct": 84.50288989895066
    },
    {
        "id": "admin-o156i2paf",
        "pageId": "033",
        "productId": "p236",
        "xPct": 17.500106812175368,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-12os4rfnu",
        "pageId": "033",
        "productId": "p237",
        "xPct": 50.62530899236446,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-had8ibxw5",
        "pageId": "033",
        "productId": "p238",
        "xPct": 80.46924114527066,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-qngsm9vwk",
        "pageId": "033",
        "productId": "p240",
        "xPct": 15.937597275373996,
        "yPct": 55.33023408397325
    },
    {
        "id": "admin-e62g5jtak",
        "pageId": "033",
        "productId": "p241",
        "xPct": 49.84405422396377,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-s3riy7oip",
        "pageId": "033",
        "productId": "p242",
        "xPct": 80.6254920989508,
        "yPct": 54.22520924249684
    },
    {
        "id": "admin-mnl981dmk",
        "pageId": "033",
        "productId": "p119",
        "xPct": 49.21905040924322,
        "yPct": 79.3092731440115
    },
    {
        "id": "admin-m8gu086z8",
        "pageId": "033",
        "productId": "p239",
        "xPct": 77.34422207166793,
        "yPct": 72.12661167441479
    },
    {
        "id": "admin-ad5t3mens",
        "pageId": "035",
        "productId": "p248",
        "xPct": 62.187879564694605,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-f98w73ujj",
        "pageId": "035",
        "productId": "p249",
        "xPct": 69.37542343398093,
        "yPct": 64.39143778407987
    },
    {
        "id": "admin-wde4n3dzu",
        "pageId": "035",
        "productId": "p250",
        "xPct": 77.03172016430764,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-e053atsca",
        "pageId": "036",
        "productId": "p253",
        "xPct": 64.68728446828898,
        "yPct": 66.71198995118036
    },
    {
        "id": "admin-93n5h8ek3",
        "pageId": "036",
        "productId": "p251",
        "xPct": 71.87482833757531,
        "yPct": 66.60148746703271
    },
    {
        "id": "admin-821z7j0ac",
        "pageId": "036",
        "productId": "p252",
        "xPct": 79.99987792894244,
        "yPct": 66.82249243532799
    },
    {
        "id": "admin-dsid7yqi5",
        "pageId": "038",
        "productId": "p254",
        "xPct": 38.2808732963458,
        "yPct": 21.074463998204333
    },
    {
        "id": "admin-ab48kl1ja",
        "pageId": "038",
        "productId": "p255",
        "xPct": 74.06234168909722,
        "yPct": 22.8425037445666
    },
    {
        "id": "admin-a83sjiuxg",
        "pageId": "038",
        "productId": "p256",
        "xPct": 37.49961852794512,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-szf3qvm5a",
        "pageId": "038",
        "productId": "p257",
        "xPct": 73.74983978173695,
        "yPct": 50.799632233919944
    },
    {
        "id": "admin-or7hu4hes",
        "pageId": "038",
        "productId": "p259",
        "xPct": 38.593375203706074,
        "yPct": 78.86726320742093
    },
    {
        "id": "admin-4hks8ex67",
        "pageId": "038",
        "productId": "p258",
        "xPct": 75.46860027221845,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-w0h3iju04",
        "pageId": "040",
        "productId": "p261",
        "xPct": 38.2808732963458,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-18r2glwr2",
        "pageId": "040",
        "productId": "p263",
        "xPct": 69.84356593973352,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-zq2mb3vgu",
        "pageId": "040",
        "productId": "p260",
        "xPct": 35.46835613010334,
        "yPct": 57.319278798630805
    },
    {
        "id": "admin-lhikqqgz4",
        "pageId": "040",
        "productId": "p262",
        "xPct": 70.31231880077394,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-7zcyo2ykc",
        "pageId": "042",
        "productId": "p265",
        "xPct": 39.68713187946704,
        "yPct": 19.858936672580278
    },
    {
        "id": "admin-029nqncqd",
        "pageId": "042",
        "productId": "p264",
        "xPct": 69.53106403237325,
        "yPct": 22.51099629212368
    },
    {
        "id": "admin-laqdzr1px",
        "pageId": "042",
        "productId": "p266",
        "xPct": 38.43712425002594,
        "yPct": 48.70008503511475
    },
    {
        "id": "admin-c29gtrtw3",
        "pageId": "044",
        "productId": "p267",
        "xPct": 23.124530789372493,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-rh4ug124k",
        "pageId": "044",
        "productId": "p268",
        "xPct": 51.2497024517972,
        "yPct": 28.92014037268689
    },
    {
        "id": "admin-kbcm3nvew",
        "pageId": "044",
        "productId": "p269",
        "xPct": 80.46863078998285,
        "yPct": 29.141145340982177
    },
    {
        "id": "admin-gwlk4d1rw",
        "pageId": "044",
        "productId": "p270",
        "xPct": 22.18702506729167,
        "yPct": 63.949427847489304
    },
    {
        "id": "admin-7a2ns82o0",
        "pageId": "044",
        "productId": "p271",
        "xPct": 54.68722343276021,
        "yPct": 64.17043281578458
    },
    {
        "id": "admin-ha9rqoi2q",
        "pageId": "044",
        "productId": "p259",
        "xPct": 80.46863078998285,
        "yPct": 64.28093529993222
    },
    {
        "id": "admin-42opuud1j",
        "pageId": "048",
        "productId": "p279",
        "xPct": 33.74959563962182,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-7m5qdx3nk",
        "pageId": "048",
        "productId": "p281",
        "xPct": 36.87461471322457,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-raffc43tw",
        "pageId": "048",
        "productId": "p285",
        "xPct": 38.43712425002594,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-sh4mppakb",
        "pageId": "048",
        "productId": "p283",
        "xPct": 37.34336757426498,
        "yPct": 84.17138244650774
    },
    {
        "id": "admin-7bapy41kd",
        "pageId": "048",
        "productId": "p70",
        "xPct": 83.12489700254518,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-7aw58tg60",
        "pageId": "048",
        "productId": "p282",
        "xPct": 84.68740653934655,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-89dzrfg62",
        "pageId": "048",
        "productId": "p286",
        "xPct": 84.68740653934655,
        "yPct": 61.84988064868412
    },
    {
        "id": "admin-zwej5vbgh",
        "pageId": "048",
        "productId": "p284",
        "xPct": 83.90615177094587,
        "yPct": 83.28736257332659
    },
    {
        "id": "admin-0tmmnp0nd",
        "pageId": "049",
        "productId": "p290",
        "xPct": 30.00018310658634,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-9us7e8jmf",
        "pageId": "049",
        "productId": "p291",
        "xPct": 35.31271553171101,
        "yPct": 83.50836754162188
    },
    {
        "id": "admin-ctpqy4286",
        "pageId": "049",
        "productId": "p292",
        "xPct": 45.625278474600066,
        "yPct": 85.93942219287
    },
    {
        "id": "admin-jnubsd7hb",
        "pageId": "049",
        "productId": "p293",
        "xPct": 56.7190961858898,
        "yPct": 85.16590480383651
    },
    {
        "id": "admin-irv2zs2j2",
        "pageId": "049",
        "productId": "p294",
        "xPct": 64.2191419625364,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-6w28jzxrb",
        "pageId": "049",
        "productId": "p295",
        "xPct": 68.90667057294051,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-37spcpij0",
        "pageId": "050",
        "productId": "p298",
        "xPct": 38.593375203706074,
        "yPct": 16.985872084741594
    },
    {
        "id": "admin-du9ogw60p",
        "pageId": "050",
        "productId": "p299",
        "xPct": 36.562112805864295,
        "yPct": 41.29641859722276
    },
    {
        "id": "admin-p0rjy2l3y",
        "pageId": "050",
        "productId": "p297",
        "xPct": 66.56229591245064,
        "yPct": 48.368577582671826
    },
    {
        "id": "admin-0ul99x2kb",
        "pageId": "050",
        "productId": "p296",
        "xPct": 58.74974822844378,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-utjc5d5vi",
        "pageId": "051",
        "productId": "p300",
        "xPct": 22.187635422579483,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-aouvnr5qi",
        "pageId": "051",
        "productId": "p302",
        "xPct": 48.12529373348226,
        "yPct": 38.423354009384084
    },
    {
        "id": "admin-1jkvz0q5q",
        "pageId": "051",
        "productId": "p301",
        "xPct": 32.81270027282881,
        "yPct": 50.468124781477016
    },
    {
        "id": "admin-97tgqjl4u",
        "pageId": "052",
        "productId": "p304",
        "xPct": 29.99957275129853,
        "yPct": 34.44526458006898
    },
    {
        "id": "admin-mle1h4i35",
        "pageId": "052",
        "productId": "p303",
        "xPct": 61.40601444100611,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-wigk8ldfo",
        "pageId": "053",
        "productId": "p305",
        "xPct": 22.812639237300033,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-e6w4k6mfz",
        "pageId": "054",
        "productId": "p308",
        "xPct": 66.09354305141024,
        "yPct": 75.8836961354346
    },
    {
        "id": "admin-kleywpxzs",
        "pageId": "054",
        "productId": "p309",
        "xPct": 72.81233405965612,
        "yPct": 76.21520358787754
    },
    {
        "id": "admin-fkp619pjt",
        "pageId": "054",
        "productId": "p307",
        "xPct": 88.12492752030957,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-iz92p8rnr",
        "pageId": "054",
        "productId": "p306",
        "xPct": 80.15612888262258,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-cisr8k5wm",
        "pageId": "056",
        "productId": "p310",
        "xPct": 69.06231117133284,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-7c11q1li4",
        "pageId": "057",
        "productId": "p313",
        "xPct": 61.09412288893365,
        "yPct": 50.57862726562467
    },
    {
        "id": "admin-gc8ywq5l5",
        "pageId": "057",
        "productId": "p312",
        "xPct": 38.75023651267403,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-kgecoeyf2",
        "pageId": "057",
        "productId": "p311",
        "xPct": 17.343855858495232,
        "yPct": 49.58410490829589
    },
    {
        "id": "admin-zzw6o9qm1",
        "pageId": "057",
        "productId": "p314",
        "xPct": 85.15676975567477,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-599cawuft",
        "pageId": "058",
        "productId": "p316",
        "xPct": 13.74947356856426,
        "yPct": 52.67817446442985
    },
    {
        "id": "admin-831x7w7mp",
        "pageId": "058",
        "productId": "p315",
        "xPct": 21.562021252571125,
        "yPct": 52.34666701198692
    },
    {
        "id": "admin-fu82og0qm",
        "pageId": "058",
        "productId": "p317",
        "xPct": 36.40586185218416,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-8yb6bodlr",
        "pageId": "059",
        "productId": "p318",
        "xPct": 65.15664768461721,
        "yPct": 55.88274650471147
    },
    {
        "id": "admin-l8sen3rbi",
        "pageId": "059",
        "productId": "p319",
        "xPct": 58.12535476901104,
        "yPct": 55.66174153641617
    },
    {
        "id": "admin-v8dkm4vda",
        "pageId": "059",
        "productId": "p320",
        "xPct": 80.93799400631107,
        "yPct": 55.4407365681209
    },
    {
        "id": "admin-kqycs8tpw",
        "pageId": "060",
        "productId": "p321",
        "xPct": 54.37472152539994,
        "yPct": 33.22973725444492
    },
    {
        "id": "admin-40zlm72nq",
        "pageId": "061",
        "productId": "p322",
        "xPct": 32.96895122650895,
        "yPct": 13.5602950761647
    },
    {
        "id": "admin-c5vy402m8",
        "pageId": "061",
        "productId": "p326",
        "xPct": 18.750114441616464,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-oh6ebb6as",
        "pageId": "061",
        "productId": "p323",
        "xPct": 46.71903515036103,
        "yPct": 30.135667698310954
    },
    {
        "id": "admin-ffmtm61f1",
        "pageId": "061",
        "productId": "p324",
        "xPct": 28.281422616104834,
        "yPct": 37.20782668376002
    },
    {
        "id": "admin-148b2ppqc",
        "pageId": "061",
        "productId": "p325",
        "xPct": 19.531369210017154,
        "yPct": 42.069935986256255
    },
    {
        "id": "admin-7effq5n1z",
        "pageId": "061",
        "productId": "p327",
        "xPct": 17.031353951134957,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-j4osp5cii",
        "pageId": "062",
        "productId": "p328",
        "xPct": 30.62457656601908,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-gehbg3pox",
        "pageId": "062",
        "productId": "p329",
        "xPct": 39.218379018426624,
        "yPct": 62.8444030060129
    },
    {
        "id": "admin-ngrngtzni",
        "pageId": "062",
        "productId": "p330",
        "xPct": 45.78091907299239,
        "yPct": 62.51289555356997
    },
    {
        "id": "admin-4243s5a4m",
        "pageId": "062",
        "productId": "p331",
        "xPct": 54.06221961803966,
        "yPct": 62.73390052186525
    },
    {
        "id": "admin-xvyf5a4n8",
        "pageId": "062",
        "productId": "p332",
        "xPct": 62.34352016308693,
        "yPct": 62.18138810112704
    },
    {
        "id": "admin-kft9t0lbz",
        "pageId": "062",
        "productId": "p333",
        "xPct": 68.59355831029242,
        "yPct": 62.95490549016053
    },
    {
        "id": "admin-d7z9lmsg2",
        "pageId": "063",
        "productId": "p334",
        "xPct": 43.125263215717865,
        "yPct": 68.4800296975426
    },
    {
        "id": "admin-zl79fisdp",
        "pageId": "063",
        "productId": "p335",
        "xPct": 49.531552316603495,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-yusyx35hb",
        "pageId": "063",
        "productId": "p336",
        "xPct": 57.969103815330904,
        "yPct": 68.36952721339497
    },
    {
        "id": "admin-45q5uftig",
        "pageId": "064",
        "productId": "p337",
        "xPct": 23.280781743052632,
        "yPct": 47.81606516193362
    },
    {
        "id": "admin-f3nt6tsna",
        "pageId": "026",
        "productId": "p1",
        "xPct": 87.33535967578521,
        "yPct": 26.98529988020466
    },
    {
        "id": "admin-70egvf9gn",
        "pageId": "016",
        "productId": "p3",
        "xPct": 83.08004052684905,
        "yPct": 43.322249465399295
    },
    {
        "id": "admin-o5y1ek63v",
        "pageId": "016",
        "productId": "p1",
        "xPct": 22.69503546099291,
        "yPct": 52.63717686046642
    },
    {
        "id": "admin-dct363f6r",
        "pageId": "017",
        "productId": "p3",
        "xPct": 18.135764944275582,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-maer2m4qb",
        "pageId": "017",
        "productId": "p4",
        "xPct": 79.33130699088146,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-4jy8119qe",
        "pageId": "017",
        "productId": "p5",
        "xPct": 45.49138804457954,
        "yPct": 32.28764316662748
    },
    {
        "id": "admin-6q1wml9ef",
        "pageId": "062",
        "productId": "p279",
        "xPct": 43.90625,
        "yPct": 47.29095084344838
    },
    {
        "id": "admin-6k149m9cv",
        "pageId": "005",
        "productId": "p1",
        "xPct": 24.68765068146168,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-8i4minqc1",
        "pageId": "005",
        "productId": "p2",
        "xPct": 32.343947411788406,
        "yPct": 37.76033910449823
    },
    {
        "id": "admin-mop52jcxm",
        "pageId": "005",
        "productId": "p3",
        "xPct": 40.3127460494754,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-562qucdpu",
        "pageId": "005",
        "productId": "p4",
        "xPct": 49.06279945556308,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-cn55k93ly",
        "pageId": "005",
        "productId": "p5",
        "xPct": 57.344100000610354,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-7ghius64v",
        "pageId": "005",
        "productId": "p6",
        "xPct": 65.9379024530179,
        "yPct": 36.76581674716945
    },
    {
        "id": "admin-vf13h9c2b",
        "pageId": "005",
        "productId": "p7",
        "xPct": 74.53170490542544,
        "yPct": 37.870841588645874
    },
    {
        "id": "admin-zztyje9bt",
        "pageId": "005",
        "productId": "p8",
        "xPct": 24.06264686674113,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-jebf2fu38",
        "pageId": "005",
        "productId": "p9",
        "xPct": 32.81270027282881,
        "yPct": 46.49003535216192
    },
    {
        "id": "admin-wydbgjt8y",
        "pageId": "005",
        "productId": "p10",
        "xPct": 42.03150653995691,
        "yPct": 45.053503058242576
    },
    {
        "id": "admin-zqzbivr9j",
        "pageId": "005",
        "productId": "p11",
        "xPct": 48.75029754820281,
        "yPct": 46.15852789971899
    },
    {
        "id": "admin-2kp73mr4h",
        "pageId": "005",
        "productId": "p12",
        "xPct": 58.43785667637131,
        "yPct": 44.61149312165201
    },
    {
        "id": "admin-4in4cj6h3",
        "pageId": "005",
        "productId": "p13",
        "xPct": 67.187910082459,
        "yPct": 45.385010510685504
    },
    {
        "id": "admin-ctn4c21s0",
        "pageId": "005",
        "productId": "p14",
        "xPct": 74.37545395174531,
        "yPct": 45.274508026537866
    },
    {
        "id": "admin-168112lo2",
        "pageId": "006",
        "productId": "p57",
        "xPct": 64.84353542196912,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-yu0re5rb2",
        "pageId": "007",
        "productId": "p57",
        "xPct": 30.62518692130689,
        "yPct": 31.461697508082654
    },
    {
        "id": "admin-owmoa0pjx",
        "pageId": "007",
        "productId": "p58",
        "xPct": 52.031567575485695,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-in9lixb5i",
        "pageId": "007",
        "productId": "p59",
        "xPct": 76.40671634958709,
        "yPct": 27.262603110472266
    },
    {
        "id": "admin-uqn6zksxp",
        "pageId": "007",
        "productId": "p62",
        "xPct": 50.00030517764391,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-52khx9kh9",
        "pageId": "007",
        "productId": "p63",
        "xPct": 72.50044250758366,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-8ynylumh2",
        "pageId": "007",
        "productId": "p65",
        "xPct": 31.56269264338772,
        "yPct": 80.6353029537832
    },
    {
        "id": "admin-51imblzdk",
        "pageId": "007",
        "productId": "p66",
        "xPct": 48.75029754820281,
        "yPct": 77.87274085009216
    },
    {
        "id": "admin-tzg79uwgh",
        "pageId": "007",
        "productId": "p67",
        "xPct": 66.40665531405831,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-kfd1oajwt",
        "pageId": "007",
        "productId": "p61",
        "xPct": 26.562662125623326,
        "yPct": 55.55123905226854
    },
    {
        "id": "admin-024fmuhot",
        "pageId": "008",
        "productId": "p60",
        "xPct": 30.780827519699216,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-qbftx770z",
        "pageId": "008",
        "productId": "p68",
        "xPct": 50.78094959075678,
        "yPct": 26.931095658029342
    },
    {
        "id": "admin-ombvskxx6",
        "pageId": "008",
        "productId": "p64",
        "xPct": 30.62457656601908,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-w8xuykvbm",
        "pageId": "008",
        "productId": "p72",
        "xPct": 47.4996795634739,
        "yPct": 57.20877631448317
    },
    {
        "id": "admin-f7ezps9ja",
        "pageId": "008",
        "productId": "p76",
        "xPct": 72.96858501333627,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-mcldsy9si",
        "pageId": "008",
        "productId": "p79",
        "xPct": 53.43721580331911,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-3liqoxk8r",
        "pageId": "008",
        "productId": "p80",
        "xPct": 69.21856212501297,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-clvu8816m",
        "pageId": "009",
        "productId": "p69",
        "xPct": 30.937688828667163,
        "yPct": 25.715568332405287
    },
    {
        "id": "admin-yhd8dr1f9",
        "pageId": "009",
        "productId": "p70",
        "xPct": 48.43779564084254,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-ljkww2g64",
        "pageId": "009",
        "productId": "p71",
        "xPct": 69.53167438766106,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-i5i51bu3z",
        "pageId": "009",
        "productId": "p74",
        "xPct": 49.06279945556308,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-xue15cgx3",
        "pageId": "009",
        "productId": "p77",
        "xPct": 34.53146076331032,
        "yPct": 81.96133276355489
    },
    {
        "id": "admin-yw410fmxw",
        "pageId": "009",
        "productId": "p78",
        "xPct": 50.31280708500419,
        "yPct": 82.40334270014546
    },
    {
        "id": "admin-u4l09huoe",
        "pageId": "010",
        "productId": "p81",
        "xPct": 34.0620975469821,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-t0an1bphj",
        "pageId": "010",
        "productId": "p82",
        "xPct": 53.593466756999256,
        "yPct": 28.036120499505763
    },
    {
        "id": "admin-m4q6wzenf",
        "pageId": "010",
        "productId": "p83",
        "xPct": 76.09360408693901,
        "yPct": 28.367627951948688
    },
    {
        "id": "admin-ci6exe7m2",
        "pageId": "010",
        "productId": "p83",
        "xPct": 34.0620975469821,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-0pe4bow7m",
        "pageId": "010",
        "productId": "p86",
        "xPct": 55.31222724748076,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-xwq3isc4l",
        "pageId": "010",
        "productId": "p87",
        "xPct": 75.6248512258986,
        "yPct": 53.3411893693157
    },
    {
        "id": "admin-3ao2n6zpv",
        "pageId": "010",
        "productId": "p89",
        "xPct": 35.15585422274306,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-tp3uvqxi4",
        "pageId": "010",
        "productId": "p90",
        "xPct": 54.999725340120484,
        "yPct": 79.64078059645442
    },
    {
        "id": "admin-rdgd25kgj",
        "pageId": "010",
        "productId": "p91",
        "xPct": 74.99984741117804,
        "yPct": 79.75128308060206
    },
    {
        "id": "admin-4f3p0zi2u",
        "pageId": "011",
        "productId": "p84",
        "xPct": 35.78146839275142,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-t965ykkgi",
        "pageId": "011",
        "productId": "p88",
        "xPct": 55.46908855644871,
        "yPct": 26.8205931738817
    },
    {
        "id": "admin-vk40iuv3f",
        "pageId": "011",
        "productId": "p92",
        "xPct": 75.93796348854667,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-sf76zsnqz",
        "pageId": "012",
        "productId": "p106",
        "xPct": 70.31231880077394,
        "yPct": 77.20972594520632
    },
    {
        "id": "admin-kplnjcadp",
        "pageId": "012",
        "productId": "p105",
        "xPct": 78.5936193458212,
        "yPct": 77.76223836594451
    },
    {
        "id": "admin-fxah2rh81",
        "pageId": "012",
        "productId": "p107",
        "xPct": 85.93741416878765,
        "yPct": 77.43073091350159
    },
    {
        "id": "admin-i8szzrxkk",
        "pageId": "012",
        "productId": "p108",
        "xPct": 92.65620517703354,
        "yPct": 77.54123339764924
    },
    {
        "id": "admin-hwyz347kh",
        "pageId": "014",
        "productId": "p109",
        "xPct": 26.405800816655372,
        "yPct": 31.01968757149209
    },
    {
        "id": "admin-7q1yzumg3",
        "pageId": "014",
        "productId": "p110",
        "xPct": 57.812242506362956,
        "yPct": 30.467175150753878
    },
    {
        "id": "admin-dj3ddpja2",
        "pageId": "014",
        "productId": "p111",
        "xPct": 90.7811937328719,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-mtfxtxubb",
        "pageId": "014",
        "productId": "p112",
        "xPct": 26.249549862975236,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-tjsobhnew",
        "pageId": "014",
        "productId": "p113",
        "xPct": 58.59349727476364,
        "yPct": 57.540283766926095
    },
    {
        "id": "admin-j8faw51a4",
        "pageId": "014",
        "productId": "p114",
        "xPct": 90.31244087183148,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-xbml9w5sp",
        "pageId": "014",
        "productId": "p115",
        "xPct": 26.56205177033551,
        "yPct": 84.94489983554122
    },
    {
        "id": "admin-4hc9kjwzr",
        "pageId": "014",
        "productId": "p117",
        "xPct": 89.0624332423904,
        "yPct": 84.83439735139359
    },
    {
        "id": "admin-jed5ybaz1",
        "pageId": "015",
        "productId": "p118",
        "xPct": 25.31265449618223,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-o9y306tpv",
        "pageId": "015",
        "productId": "p119",
        "xPct": 58.281605722691175,
        "yPct": 29.804160245868026
    },
    {
        "id": "admin-sutbsb4tn",
        "pageId": "015",
        "productId": "p116",
        "xPct": 88.59429073663779,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-f6xt6y3jx",
        "pageId": "017",
        "productId": "p133",
        "xPct": 17.500106812175368,
        "yPct": 35.99229935813596
    },
    {
        "id": "admin-hhiihk76j",
        "pageId": "017",
        "productId": "p134",
        "xPct": 46.56278419668089,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-ulqwoock5",
        "pageId": "017",
        "productId": "p135",
        "xPct": 78.43797874742889,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-qc7hp25k5",
        "pageId": "017",
        "productId": "p140",
        "xPct": 17.96885967321578,
        "yPct": 59.75033344987892
    },
    {
        "id": "admin-3tq060c03",
        "pageId": "017",
        "productId": "p137",
        "xPct": 48.12529373348226,
        "yPct": 59.86083593402657
    },
    {
        "id": "admin-xga67szdv",
        "pageId": "017",
        "productId": "p138",
        "xPct": 78.12547684006861,
        "yPct": 59.30832351328835
    },
    {
        "id": "admin-apwm6ob45",
        "pageId": "017",
        "productId": "p139",
        "xPct": 18.59386348793633,
        "yPct": 82.18233773185018
    },
    {
        "id": "admin-xabx2wmdc",
        "pageId": "018",
        "productId": "p133",
        "xPct": 16.56199073480673,
        "yPct": 33.89275215933077
    },
    {
        "id": "admin-444y6459a",
        "pageId": "018",
        "productId": "p134",
        "xPct": 49.843443868675955,
        "yPct": 33.11923477029728
    },
    {
        "id": "admin-zibaxk97z",
        "pageId": "018",
        "productId": "p135",
        "xPct": 79.06237220686161,
        "yPct": 32.89822980200199
    },
    {
        "id": "admin-clvjy4b65",
        "pageId": "018",
        "productId": "p136",
        "xPct": 16.874492642167006,
        "yPct": 56.21425395715439
    },
    {
        "id": "admin-ryrqszz96",
        "pageId": "018",
        "productId": "p137",
        "xPct": 48.59343623923486,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-rgpq5tj6w",
        "pageId": "018",
        "productId": "p138",
        "xPct": 81.71863841942395,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-lwrij7nu0",
        "pageId": "018",
        "productId": "p139",
        "xPct": 15.780735966406045,
        "yPct": 74.99967626225347
    },
    {
        "id": "admin-73b9oelfw",
        "pageId": "018",
        "productId": "p140",
        "xPct": 50.4684476833965,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-t57n4snv8",
        "pageId": "022",
        "productId": "p152",
        "xPct": 21.09326839153071,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-j6sjxxhlc",
        "pageId": "022",
        "productId": "p153",
        "xPct": 49.9996948223561,
        "yPct": 24.279036038485945
    },
    {
        "id": "admin-houojboyy",
        "pageId": "022",
        "productId": "p154",
        "xPct": 78.74987029950134,
        "yPct": 23.063508712861886
    },
    {
        "id": "admin-vwb7cu6is",
        "pageId": "022",
        "productId": "p156",
        "xPct": 48.59343623923486,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-gu7kjy97k",
        "pageId": "022",
        "productId": "p157",
        "xPct": 81.71863841942395,
        "yPct": 50.6891297497723
    },
    {
        "id": "admin-9y3jq8o4h",
        "pageId": "022",
        "productId": "p158",
        "xPct": 35.624607083783474,
        "yPct": 82.62434766844075
    },
    {
        "id": "admin-qpj8pthi4",
        "pageId": "022",
        "productId": "p159",
        "xPct": 73.1248359670164,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-4k9la7smd",
        "pageId": "023",
        "productId": "p160",
        "xPct": 24.53139972778154,
        "yPct": 23.39501616530481
    },
    {
        "id": "admin-ea3sofhch",
        "pageId": "023",
        "productId": "p161",
        "xPct": 71.87543869286311,
        "yPct": 24.72104597507651
    },
    {
        "id": "admin-dlfncb8u9",
        "pageId": "023",
        "productId": "p166",
        "xPct": 24.21889782042127,
        "yPct": 56.103751473006746
    },
    {
        "id": "admin-438u5qrtc",
        "pageId": "023",
        "productId": "p162",
        "xPct": 71.4066858318227,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-kkuk6jpp5",
        "pageId": "025",
        "productId": "p184",
        "xPct": 27.656418801384287,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-mrcsjwz27",
        "pageId": "025",
        "productId": "p177",
        "xPct": 74.68795585910559,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-7q2exdgst",
        "pageId": "025",
        "productId": "p178",
        "xPct": 29.68768119922607,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-wmx65dvfz",
        "pageId": "025",
        "productId": "p179",
        "xPct": 73.9067010907049,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-n82aj5zdb",
        "pageId": "025",
        "productId": "p247",
        "xPct": 31.093939782347302,
        "yPct": 28.1466229836534
    },
    {
        "id": "admin-7ln23hajo",
        "pageId": "026",
        "productId": "p180",
        "xPct": 24.843291279854,
        "yPct": 24.83154845922415
    },
    {
        "id": "admin-y0ovfxhx2",
        "pageId": "027",
        "productId": "p207",
        "xPct": 45.000274659879516,
        "yPct": 33.00873228614963
    },
    {
        "id": "admin-jvi9catax",
        "pageId": "027",
        "productId": "p209",
        "xPct": 75.31295967382613,
        "yPct": 25.052553427519435
    },
    {
        "id": "admin-pemhbdh1g",
        "pageId": "027",
        "productId": "p208",
        "xPct": 82.18800163575217,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-ubkny3xut",
        "pageId": "028",
        "productId": "p216",
        "xPct": 11.718211170722476,
        "yPct": 67.04349740362328
    },
    {
        "id": "admin-v2xq8296q",
        "pageId": "028",
        "productId": "p217",
        "xPct": 42.49964904570951,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-83zhqst23",
        "pageId": "029",
        "productId": "p218",
        "xPct": 17.500106812175368,
        "yPct": 23.28451368115717
    },
    {
        "id": "admin-rkhpuy7bk",
        "pageId": "029",
        "productId": "p219",
        "xPct": 47.50028991876171,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-eb3l5gvae",
        "pageId": "029",
        "productId": "p220",
        "xPct": 77.34422207166793,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-2ezdqa48b",
        "pageId": "029",
        "productId": "p221",
        "xPct": 19.531369210017154,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-b2on9jegb",
        "pageId": "029",
        "productId": "p223",
        "xPct": 50.62530899236446,
        "yPct": 63.3969154267511
    },
    {
        "id": "admin-sgcw1s3l1",
        "pageId": "029",
        "productId": "p222",
        "xPct": 79.3754844695097,
        "yPct": 64.05993033163695
    },
    {
        "id": "admin-c9zw1e79u",
        "pageId": "031",
        "productId": "p224",
        "xPct": 28.59392452346511,
        "yPct": 25.49456336411
    },
    {
        "id": "admin-luu6d7hnb",
        "pageId": "031",
        "productId": "p225",
        "xPct": 28.59392452346511,
        "yPct": 41.95943350210861
    },
    {
        "id": "admin-iekfnxzo0",
        "pageId": "031",
        "productId": "p226",
        "xPct": 72.18794060022338,
        "yPct": 41.07541362892748
    },
    {
        "id": "admin-458epb2rk",
        "pageId": "031",
        "productId": "p228",
        "xPct": 29.53143024554593,
        "yPct": 68.59053218169025
    },
    {
        "id": "admin-ezabpbhjx",
        "pageId": "031",
        "productId": "p229",
        "xPct": 73.12544632230421,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-b6eu0osgf",
        "pageId": "031",
        "productId": "p230",
        "xPct": 29.68768119922607,
        "yPct": 83.39786505747423
    },
    {
        "id": "admin-hqm16mq4e",
        "pageId": "031",
        "productId": "p231",
        "xPct": 61.25037384261378,
        "yPct": 84.50288989895066
    },
    {
        "id": "admin-o156i2paf",
        "pageId": "033",
        "productId": "p236",
        "xPct": 17.500106812175368,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-12os4rfnu",
        "pageId": "033",
        "productId": "p237",
        "xPct": 50.62530899236446,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-had8ibxw5",
        "pageId": "033",
        "productId": "p238",
        "xPct": 80.46924114527066,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-qngsm9vwk",
        "pageId": "033",
        "productId": "p240",
        "xPct": 15.937597275373996,
        "yPct": 55.33023408397325
    },
    {
        "id": "admin-e62g5jtak",
        "pageId": "033",
        "productId": "p241",
        "xPct": 49.84405422396377,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-s3riy7oip",
        "pageId": "033",
        "productId": "p242",
        "xPct": 80.6254920989508,
        "yPct": 54.22520924249684
    },
    {
        "id": "admin-mnl981dmk",
        "pageId": "033",
        "productId": "p119",
        "xPct": 49.21905040924322,
        "yPct": 79.3092731440115
    },
    {
        "id": "admin-m8gu086z8",
        "pageId": "033",
        "productId": "p239",
        "xPct": 77.34422207166793,
        "yPct": 72.12661167441479
    },
    {
        "id": "admin-ad5t3mens",
        "pageId": "035",
        "productId": "p248",
        "xPct": 62.187879564694605,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-f98w73ujj",
        "pageId": "035",
        "productId": "p249",
        "xPct": 69.37542343398093,
        "yPct": 64.39143778407987
    },
    {
        "id": "admin-wde4n3dzu",
        "pageId": "035",
        "productId": "p250",
        "xPct": 77.03172016430764,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-e053atsca",
        "pageId": "036",
        "productId": "p253",
        "xPct": 64.68728446828898,
        "yPct": 66.71198995118036
    },
    {
        "id": "admin-93n5h8ek3",
        "pageId": "036",
        "productId": "p251",
        "xPct": 71.87482833757531,
        "yPct": 66.60148746703271
    },
    {
        "id": "admin-821z7j0ac",
        "pageId": "036",
        "productId": "p252",
        "xPct": 79.99987792894244,
        "yPct": 66.82249243532799
    },
    {
        "id": "admin-dsid7yqi5",
        "pageId": "038",
        "productId": "p254",
        "xPct": 38.2808732963458,
        "yPct": 21.074463998204333
    },
    {
        "id": "admin-ab48kl1ja",
        "pageId": "038",
        "productId": "p255",
        "xPct": 74.06234168909722,
        "yPct": 22.8425037445666
    },
    {
        "id": "admin-a83sjiuxg",
        "pageId": "038",
        "productId": "p256",
        "xPct": 37.49961852794512,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-szf3qvm5a",
        "pageId": "038",
        "productId": "p257",
        "xPct": 73.74983978173695,
        "yPct": 50.799632233919944
    },
    {
        "id": "admin-or7hu4hes",
        "pageId": "038",
        "productId": "p259",
        "xPct": 38.593375203706074,
        "yPct": 78.86726320742093
    },
    {
        "id": "admin-4hks8ex67",
        "pageId": "038",
        "productId": "p258",
        "xPct": 75.46860027221845,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-w0h3iju04",
        "pageId": "040",
        "productId": "p261",
        "xPct": 38.2808732963458,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-18r2glwr2",
        "pageId": "040",
        "productId": "p263",
        "xPct": 69.84356593973352,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-zq2mb3vgu",
        "pageId": "040",
        "productId": "p260",
        "xPct": 35.46835613010334,
        "yPct": 57.319278798630805
    },
    {
        "id": "admin-lhikqqgz4",
        "pageId": "040",
        "productId": "p262",
        "xPct": 70.31231880077394,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-7zcyo2ykc",
        "pageId": "042",
        "productId": "p265",
        "xPct": 39.68713187946704,
        "yPct": 19.858936672580278
    },
    {
        "id": "admin-029nqncqd",
        "pageId": "042",
        "productId": "p264",
        "xPct": 69.53106403237325,
        "yPct": 22.51099629212368
    },
    {
        "id": "admin-laqdzr1px",
        "pageId": "042",
        "productId": "p266",
        "xPct": 38.43712425002594,
        "yPct": 48.70008503511475
    },
    {
        "id": "admin-c29gtrtw3",
        "pageId": "044",
        "productId": "p267",
        "xPct": 23.124530789372493,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-rh4ug124k",
        "pageId": "044",
        "productId": "p268",
        "xPct": 51.2497024517972,
        "yPct": 28.92014037268689
    },
    {
        "id": "admin-kbcm3nvew",
        "pageId": "044",
        "productId": "p269",
        "xPct": 80.46863078998285,
        "yPct": 29.141145340982177
    },
    {
        "id": "admin-gwlk4d1rw",
        "pageId": "044",
        "productId": "p270",
        "xPct": 22.18702506729167,
        "yPct": 63.949427847489304
    },
    {
        "id": "admin-7a2ns82o0",
        "pageId": "044",
        "productId": "p271",
        "xPct": 54.68722343276021,
        "yPct": 64.17043281578458
    },
    {
        "id": "admin-ha9rqoi2q",
        "pageId": "044",
        "productId": "p259",
        "xPct": 80.46863078998285,
        "yPct": 64.28093529993222
    },
    {
        "id": "admin-42opuud1j",
        "pageId": "048",
        "productId": "p279",
        "xPct": 33.74959563962182,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-7m5qdx3nk",
        "pageId": "048",
        "productId": "p281",
        "xPct": 36.87461471322457,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-raffc43tw",
        "pageId": "048",
        "productId": "p285",
        "xPct": 38.43712425002594,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-sh4mppakb",
        "pageId": "048",
        "productId": "p283",
        "xPct": 37.34336757426498,
        "yPct": 84.17138244650774
    },
    {
        "id": "admin-7bapy41kd",
        "pageId": "048",
        "productId": "p70",
        "xPct": 83.12489700254518,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-7aw58tg60",
        "pageId": "048",
        "productId": "p282",
        "xPct": 84.68740653934655,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-89dzrfg62",
        "pageId": "048",
        "productId": "p286",
        "xPct": 84.68740653934655,
        "yPct": 61.84988064868412
    },
    {
        "id": "admin-zwej5vbgh",
        "pageId": "048",
        "productId": "p284",
        "xPct": 83.90615177094587,
        "yPct": 83.28736257332659
    },
    {
        "id": "admin-0tmmnp0nd",
        "pageId": "049",
        "productId": "p290",
        "xPct": 30.00018310658634,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-9us7e8jmf",
        "pageId": "049",
        "productId": "p291",
        "xPct": 35.31271553171101,
        "yPct": 83.50836754162188
    },
    {
        "id": "admin-ctpqy4286",
        "pageId": "049",
        "productId": "p292",
        "xPct": 45.625278474600066,
        "yPct": 85.93942219287
    },
    {
        "id": "admin-jnubsd7hb",
        "pageId": "049",
        "productId": "p293",
        "xPct": 56.7190961858898,
        "yPct": 85.16590480383651
    },
    {
        "id": "admin-irv2zs2j2",
        "pageId": "049",
        "productId": "p294",
        "xPct": 64.2191419625364,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-6w28jzxrb",
        "pageId": "049",
        "productId": "p295",
        "xPct": 68.90667057294051,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-37spcpij0",
        "pageId": "050",
        "productId": "p298",
        "xPct": 38.593375203706074,
        "yPct": 16.985872084741594
    },
    {
        "id": "admin-du9ogw60p",
        "pageId": "050",
        "productId": "p299",
        "xPct": 36.562112805864295,
        "yPct": 41.29641859722276
    },
    {
        "id": "admin-p0rjy2l3y",
        "pageId": "050",
        "productId": "p297",
        "xPct": 66.56229591245064,
        "yPct": 48.368577582671826
    },
    {
        "id": "admin-0ul99x2kb",
        "pageId": "050",
        "productId": "p296",
        "xPct": 58.74974822844378,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-utjc5d5vi",
        "pageId": "051",
        "productId": "p300",
        "xPct": 22.187635422579483,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-aouvnr5qi",
        "pageId": "051",
        "productId": "p302",
        "xPct": 48.12529373348226,
        "yPct": 38.423354009384084
    },
    {
        "id": "admin-1jkvz0q5q",
        "pageId": "051",
        "productId": "p301",
        "xPct": 32.81270027282881,
        "yPct": 50.468124781477016
    },
    {
        "id": "admin-97tgqjl4u",
        "pageId": "052",
        "productId": "p304",
        "xPct": 29.99957275129853,
        "yPct": 34.44526458006898
    },
    {
        "id": "admin-mle1h4i35",
        "pageId": "052",
        "productId": "p303",
        "xPct": 61.40601444100611,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-wigk8ldfo",
        "pageId": "053",
        "productId": "p305",
        "xPct": 22.812639237300033,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-e6w4k6mfz",
        "pageId": "054",
        "productId": "p308",
        "xPct": 66.09354305141024,
        "yPct": 75.8836961354346
    },
    {
        "id": "admin-kleywpxzs",
        "pageId": "054",
        "productId": "p309",
        "xPct": 72.81233405965612,
        "yPct": 76.21520358787754
    },
    {
        "id": "admin-fkp619pjt",
        "pageId": "054",
        "productId": "p307",
        "xPct": 88.12492752030957,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-iz92p8rnr",
        "pageId": "054",
        "productId": "p306",
        "xPct": 80.15612888262258,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-cisr8k5wm",
        "pageId": "056",
        "productId": "p310",
        "xPct": 69.06231117133284,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-7c11q1li4",
        "pageId": "057",
        "productId": "p313",
        "xPct": 61.09412288893365,
        "yPct": 50.57862726562467
    },
    {
        "id": "admin-gc8ywq5l5",
        "pageId": "057",
        "productId": "p312",
        "xPct": 38.75023651267403,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-kgecoeyf2",
        "pageId": "057",
        "productId": "p311",
        "xPct": 17.343855858495232,
        "yPct": 49.58410490829589
    },
    {
        "id": "admin-zzw6o9qm1",
        "pageId": "057",
        "productId": "p314",
        "xPct": 85.15676975567477,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-599cawuft",
        "pageId": "058",
        "productId": "p316",
        "xPct": 13.74947356856426,
        "yPct": 52.67817446442985
    },
    {
        "id": "admin-831x7w7mp",
        "pageId": "058",
        "productId": "p315",
        "xPct": 21.562021252571125,
        "yPct": 52.34666701198692
    },
    {
        "id": "admin-fu82og0qm",
        "pageId": "058",
        "productId": "p317",
        "xPct": 36.40586185218416,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-8yb6bodlr",
        "pageId": "059",
        "productId": "p318",
        "xPct": 65.15664768461721,
        "yPct": 55.88274650471147
    },
    {
        "id": "admin-l8sen3rbi",
        "pageId": "059",
        "productId": "p319",
        "xPct": 58.12535476901104,
        "yPct": 55.66174153641617
    },
    {
        "id": "admin-v8dkm4vda",
        "pageId": "059",
        "productId": "p320",
        "xPct": 80.93799400631107,
        "yPct": 55.4407365681209
    },
    {
        "id": "admin-kqycs8tpw",
        "pageId": "060",
        "productId": "p321",
        "xPct": 54.37472152539994,
        "yPct": 33.22973725444492
    },
    {
        "id": "admin-40zlm72nq",
        "pageId": "061",
        "productId": "p322",
        "xPct": 32.96895122650895,
        "yPct": 13.5602950761647
    },
    {
        "id": "admin-c5vy402m8",
        "pageId": "061",
        "productId": "p326",
        "xPct": 18.750114441616464,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-oh6ebb6as",
        "pageId": "061",
        "productId": "p323",
        "xPct": 46.71903515036103,
        "yPct": 30.135667698310954
    },
    {
        "id": "admin-ffmtm61f1",
        "pageId": "061",
        "productId": "p324",
        "xPct": 28.281422616104834,
        "yPct": 37.20782668376002
    },
    {
        "id": "admin-148b2ppqc",
        "pageId": "061",
        "productId": "p325",
        "xPct": 19.531369210017154,
        "yPct": 42.069935986256255
    },
    {
        "id": "admin-7effq5n1z",
        "pageId": "061",
        "productId": "p327",
        "xPct": 17.031353951134957,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-j4osp5cii",
        "pageId": "062",
        "productId": "p328",
        "xPct": 30.62457656601908,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-gehbg3pox",
        "pageId": "062",
        "productId": "p329",
        "xPct": 39.218379018426624,
        "yPct": 62.8444030060129
    },
    {
        "id": "admin-ngrngtzni",
        "pageId": "062",
        "productId": "p330",
        "xPct": 45.78091907299239,
        "yPct": 62.51289555356997
    },
    {
        "id": "admin-4243s5a4m",
        "pageId": "062",
        "productId": "p331",
        "xPct": 54.06221961803966,
        "yPct": 62.73390052186525
    },
    {
        "id": "admin-xvyf5a4n8",
        "pageId": "062",
        "productId": "p332",
        "xPct": 62.34352016308693,
        "yPct": 62.18138810112704
    },
    {
        "id": "admin-kft9t0lbz",
        "pageId": "062",
        "productId": "p333",
        "xPct": 68.59355831029242,
        "yPct": 62.95490549016053
    },
    {
        "id": "admin-d7z9lmsg2",
        "pageId": "063",
        "productId": "p334",
        "xPct": 43.125263215717865,
        "yPct": 68.4800296975426
    },
    {
        "id": "admin-zl79fisdp",
        "pageId": "063",
        "productId": "p335",
        "xPct": 49.531552316603495,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-yusyx35hb",
        "pageId": "063",
        "productId": "p336",
        "xPct": 57.969103815330904,
        "yPct": 68.36952721339497
    },
    {
        "id": "admin-45q5uftig",
        "pageId": "064",
        "productId": "p337",
        "xPct": 23.280781743052632,
        "yPct": 47.81606516193362
    },
    {
        "id": "admin-f3nt6tsna",
        "pageId": "026",
        "productId": "p1",
        "xPct": 87.33535967578521,
        "yPct": 26.98529988020466
    },
    {
        "id": "admin-70egvf9gn",
        "pageId": "016",
        "productId": "p3",
        "xPct": 83.08004052684905,
        "yPct": 43.322249465399295
    },
    {
        "id": "admin-o5y1ek63v",
        "pageId": "016",
        "productId": "p1",
        "xPct": 22.69503546099291,
        "yPct": 52.63717686046642
    },
    {
        "id": "admin-dct363f6r",
        "pageId": "017",
        "productId": "p3",
        "xPct": 18.135764944275582,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-maer2m4qb",
        "pageId": "017",
        "productId": "p4",
        "xPct": 79.33130699088146,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-4jy8119qe",
        "pageId": "017",
        "productId": "p5",
        "xPct": 45.49138804457954,
        "yPct": 32.28764316662748
    },
    {
        "id": "admin-dyfw63kc6",
        "pageId": "004",
        "productId": "p5",
        "xPct": 50.050658561296856,
        "yPct": 74.56308288270132
    },
    {
        "id": "admin-6q1wml9ef",
        "pageId": "062",
        "productId": "p279",
        "xPct": 43.90625,
        "yPct": 47.29095084344838
    },
    {
        "id": "admin-6k149m9cv",
        "pageId": "005",
        "productId": "p1",
        "xPct": 24.68765068146168,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-8i4minqc1",
        "pageId": "005",
        "productId": "p2",
        "xPct": 32.343947411788406,
        "yPct": 37.76033910449823
    },
    {
        "id": "admin-mop52jcxm",
        "pageId": "005",
        "productId": "p3",
        "xPct": 40.3127460494754,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-562qucdpu",
        "pageId": "005",
        "productId": "p4",
        "xPct": 49.06279945556308,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-cn55k93ly",
        "pageId": "005",
        "productId": "p5",
        "xPct": 57.344100000610354,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-7ghius64v",
        "pageId": "005",
        "productId": "p6",
        "xPct": 65.9379024530179,
        "yPct": 36.76581674716945
    },
    {
        "id": "admin-vf13h9c2b",
        "pageId": "005",
        "productId": "p7",
        "xPct": 74.53170490542544,
        "yPct": 37.870841588645874
    },
    {
        "id": "admin-zztyje9bt",
        "pageId": "005",
        "productId": "p8",
        "xPct": 24.06264686674113,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-jebf2fu38",
        "pageId": "005",
        "productId": "p9",
        "xPct": 32.81270027282881,
        "yPct": 46.49003535216192
    },
    {
        "id": "admin-wydbgjt8y",
        "pageId": "005",
        "productId": "p10",
        "xPct": 42.03150653995691,
        "yPct": 45.053503058242576
    },
    {
        "id": "admin-zqzbivr9j",
        "pageId": "005",
        "productId": "p11",
        "xPct": 48.75029754820281,
        "yPct": 46.15852789971899
    },
    {
        "id": "admin-2kp73mr4h",
        "pageId": "005",
        "productId": "p12",
        "xPct": 58.43785667637131,
        "yPct": 44.61149312165201
    },
    {
        "id": "admin-4in4cj6h3",
        "pageId": "005",
        "productId": "p13",
        "xPct": 67.187910082459,
        "yPct": 45.385010510685504
    },
    {
        "id": "admin-ctn4c21s0",
        "pageId": "005",
        "productId": "p14",
        "xPct": 74.37545395174531,
        "yPct": 45.274508026537866
    },
    {
        "id": "admin-168112lo2",
        "pageId": "006",
        "productId": "p57",
        "xPct": 64.84353542196912,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-yu0re5rb2",
        "pageId": "007",
        "productId": "p57",
        "xPct": 30.62518692130689,
        "yPct": 31.461697508082654
    },
    {
        "id": "admin-owmoa0pjx",
        "pageId": "007",
        "productId": "p58",
        "xPct": 52.031567575485695,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-in9lixb5i",
        "pageId": "007",
        "productId": "p59",
        "xPct": 76.40671634958709,
        "yPct": 27.262603110472266
    },
    {
        "id": "admin-uqn6zksxp",
        "pageId": "007",
        "productId": "p62",
        "xPct": 50.00030517764391,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-52khx9kh9",
        "pageId": "007",
        "productId": "p63",
        "xPct": 72.50044250758366,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-8ynylumh2",
        "pageId": "007",
        "productId": "p65",
        "xPct": 31.56269264338772,
        "yPct": 80.6353029537832
    },
    {
        "id": "admin-51imblzdk",
        "pageId": "007",
        "productId": "p66",
        "xPct": 48.75029754820281,
        "yPct": 77.87274085009216
    },
    {
        "id": "admin-tzg79uwgh",
        "pageId": "007",
        "productId": "p67",
        "xPct": 66.40665531405831,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-kfd1oajwt",
        "pageId": "007",
        "productId": "p61",
        "xPct": 26.562662125623326,
        "yPct": 55.55123905226854
    },
    {
        "id": "admin-024fmuhot",
        "pageId": "008",
        "productId": "p60",
        "xPct": 30.780827519699216,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-qbftx770z",
        "pageId": "008",
        "productId": "p68",
        "xPct": 50.78094959075678,
        "yPct": 26.931095658029342
    },
    {
        "id": "admin-ombvskxx6",
        "pageId": "008",
        "productId": "p64",
        "xPct": 30.62457656601908,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-w8xuykvbm",
        "pageId": "008",
        "productId": "p72",
        "xPct": 47.4996795634739,
        "yPct": 57.20877631448317
    },
    {
        "id": "admin-f7ezps9ja",
        "pageId": "008",
        "productId": "p76",
        "xPct": 72.96858501333627,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-mcldsy9si",
        "pageId": "008",
        "productId": "p79",
        "xPct": 53.43721580331911,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-3liqoxk8r",
        "pageId": "008",
        "productId": "p80",
        "xPct": 69.21856212501297,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-clvu8816m",
        "pageId": "009",
        "productId": "p69",
        "xPct": 30.937688828667163,
        "yPct": 25.715568332405287
    },
    {
        "id": "admin-yhd8dr1f9",
        "pageId": "009",
        "productId": "p70",
        "xPct": 48.43779564084254,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-ljkww2g64",
        "pageId": "009",
        "productId": "p71",
        "xPct": 69.53167438766106,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-i5i51bu3z",
        "pageId": "009",
        "productId": "p74",
        "xPct": 49.06279945556308,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-xue15cgx3",
        "pageId": "009",
        "productId": "p77",
        "xPct": 34.53146076331032,
        "yPct": 81.96133276355489
    },
    {
        "id": "admin-yw410fmxw",
        "pageId": "009",
        "productId": "p78",
        "xPct": 50.31280708500419,
        "yPct": 82.40334270014546
    },
    {
        "id": "admin-u4l09huoe",
        "pageId": "010",
        "productId": "p81",
        "xPct": 34.0620975469821,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-t0an1bphj",
        "pageId": "010",
        "productId": "p82",
        "xPct": 53.593466756999256,
        "yPct": 28.036120499505763
    },
    {
        "id": "admin-m4q6wzenf",
        "pageId": "010",
        "productId": "p83",
        "xPct": 76.09360408693901,
        "yPct": 28.367627951948688
    },
    {
        "id": "admin-ci6exe7m2",
        "pageId": "010",
        "productId": "p83",
        "xPct": 34.0620975469821,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-0pe4bow7m",
        "pageId": "010",
        "productId": "p86",
        "xPct": 55.31222724748076,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-xwq3isc4l",
        "pageId": "010",
        "productId": "p87",
        "xPct": 75.6248512258986,
        "yPct": 53.3411893693157
    },
    {
        "id": "admin-3ao2n6zpv",
        "pageId": "010",
        "productId": "p89",
        "xPct": 35.15585422274306,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-tp3uvqxi4",
        "pageId": "010",
        "productId": "p90",
        "xPct": 54.999725340120484,
        "yPct": 79.64078059645442
    },
    {
        "id": "admin-rdgd25kgj",
        "pageId": "010",
        "productId": "p91",
        "xPct": 74.99984741117804,
        "yPct": 79.75128308060206
    },
    {
        "id": "admin-4f3p0zi2u",
        "pageId": "011",
        "productId": "p84",
        "xPct": 35.78146839275142,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-t965ykkgi",
        "pageId": "011",
        "productId": "p88",
        "xPct": 55.46908855644871,
        "yPct": 26.8205931738817
    },
    {
        "id": "admin-vk40iuv3f",
        "pageId": "011",
        "productId": "p92",
        "xPct": 75.93796348854667,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-sf76zsnqz",
        "pageId": "012",
        "productId": "p106",
        "xPct": 70.31231880077394,
        "yPct": 77.20972594520632
    },
    {
        "id": "admin-kplnjcadp",
        "pageId": "012",
        "productId": "p105",
        "xPct": 78.5936193458212,
        "yPct": 77.76223836594451
    },
    {
        "id": "admin-fxah2rh81",
        "pageId": "012",
        "productId": "p107",
        "xPct": 85.93741416878765,
        "yPct": 77.43073091350159
    },
    {
        "id": "admin-i8szzrxkk",
        "pageId": "012",
        "productId": "p108",
        "xPct": 92.65620517703354,
        "yPct": 77.54123339764924
    },
    {
        "id": "admin-hwyz347kh",
        "pageId": "014",
        "productId": "p109",
        "xPct": 26.405800816655372,
        "yPct": 31.01968757149209
    },
    {
        "id": "admin-7q1yzumg3",
        "pageId": "014",
        "productId": "p110",
        "xPct": 57.812242506362956,
        "yPct": 30.467175150753878
    },
    {
        "id": "admin-dj3ddpja2",
        "pageId": "014",
        "productId": "p111",
        "xPct": 90.7811937328719,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-mtfxtxubb",
        "pageId": "014",
        "productId": "p112",
        "xPct": 26.249549862975236,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-tjsobhnew",
        "pageId": "014",
        "productId": "p113",
        "xPct": 58.59349727476364,
        "yPct": 57.540283766926095
    },
    {
        "id": "admin-j8faw51a4",
        "pageId": "014",
        "productId": "p114",
        "xPct": 90.31244087183148,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-xbml9w5sp",
        "pageId": "014",
        "productId": "p115",
        "xPct": 26.56205177033551,
        "yPct": 84.94489983554122
    },
    {
        "id": "admin-4hc9kjwzr",
        "pageId": "014",
        "productId": "p117",
        "xPct": 89.0624332423904,
        "yPct": 84.83439735139359
    },
    {
        "id": "admin-jed5ybaz1",
        "pageId": "015",
        "productId": "p118",
        "xPct": 25.31265449618223,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-o9y306tpv",
        "pageId": "015",
        "productId": "p119",
        "xPct": 58.281605722691175,
        "yPct": 29.804160245868026
    },
    {
        "id": "admin-sutbsb4tn",
        "pageId": "015",
        "productId": "p116",
        "xPct": 88.59429073663779,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-f6xt6y3jx",
        "pageId": "017",
        "productId": "p133",
        "xPct": 17.500106812175368,
        "yPct": 35.99229935813596
    },
    {
        "id": "admin-hhiihk76j",
        "pageId": "017",
        "productId": "p134",
        "xPct": 46.56278419668089,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-ulqwoock5",
        "pageId": "017",
        "productId": "p135",
        "xPct": 78.43797874742889,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-qc7hp25k5",
        "pageId": "017",
        "productId": "p140",
        "xPct": 17.96885967321578,
        "yPct": 59.75033344987892
    },
    {
        "id": "admin-3tq060c03",
        "pageId": "017",
        "productId": "p137",
        "xPct": 48.12529373348226,
        "yPct": 59.86083593402657
    },
    {
        "id": "admin-xga67szdv",
        "pageId": "017",
        "productId": "p138",
        "xPct": 78.12547684006861,
        "yPct": 59.30832351328835
    },
    {
        "id": "admin-apwm6ob45",
        "pageId": "017",
        "productId": "p139",
        "xPct": 18.59386348793633,
        "yPct": 82.18233773185018
    },
    {
        "id": "admin-xabx2wmdc",
        "pageId": "018",
        "productId": "p133",
        "xPct": 16.56199073480673,
        "yPct": 33.89275215933077
    },
    {
        "id": "admin-444y6459a",
        "pageId": "018",
        "productId": "p134",
        "xPct": 49.843443868675955,
        "yPct": 33.11923477029728
    },
    {
        "id": "admin-zibaxk97z",
        "pageId": "018",
        "productId": "p135",
        "xPct": 79.06237220686161,
        "yPct": 32.89822980200199
    },
    {
        "id": "admin-clvjy4b65",
        "pageId": "018",
        "productId": "p136",
        "xPct": 16.874492642167006,
        "yPct": 56.21425395715439
    },
    {
        "id": "admin-ryrqszz96",
        "pageId": "018",
        "productId": "p137",
        "xPct": 48.59343623923486,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-rgpq5tj6w",
        "pageId": "018",
        "productId": "p138",
        "xPct": 81.71863841942395,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-lwrij7nu0",
        "pageId": "018",
        "productId": "p139",
        "xPct": 15.780735966406045,
        "yPct": 74.99967626225347
    },
    {
        "id": "admin-73b9oelfw",
        "pageId": "018",
        "productId": "p140",
        "xPct": 50.4684476833965,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-t57n4snv8",
        "pageId": "022",
        "productId": "p152",
        "xPct": 21.09326839153071,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-j6sjxxhlc",
        "pageId": "022",
        "productId": "p153",
        "xPct": 49.9996948223561,
        "yPct": 24.279036038485945
    },
    {
        "id": "admin-houojboyy",
        "pageId": "022",
        "productId": "p154",
        "xPct": 78.74987029950134,
        "yPct": 23.063508712861886
    },
    {
        "id": "admin-vwb7cu6is",
        "pageId": "022",
        "productId": "p156",
        "xPct": 48.59343623923486,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-gu7kjy97k",
        "pageId": "022",
        "productId": "p157",
        "xPct": 81.71863841942395,
        "yPct": 50.6891297497723
    },
    {
        "id": "admin-9y3jq8o4h",
        "pageId": "022",
        "productId": "p158",
        "xPct": 35.624607083783474,
        "yPct": 82.62434766844075
    },
    {
        "id": "admin-qpj8pthi4",
        "pageId": "022",
        "productId": "p159",
        "xPct": 73.1248359670164,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-4k9la7smd",
        "pageId": "023",
        "productId": "p160",
        "xPct": 24.53139972778154,
        "yPct": 23.39501616530481
    },
    {
        "id": "admin-ea3sofhch",
        "pageId": "023",
        "productId": "p161",
        "xPct": 71.87543869286311,
        "yPct": 24.72104597507651
    },
    {
        "id": "admin-dlfncb8u9",
        "pageId": "023",
        "productId": "p166",
        "xPct": 24.21889782042127,
        "yPct": 56.103751473006746
    },
    {
        "id": "admin-438u5qrtc",
        "pageId": "023",
        "productId": "p162",
        "xPct": 71.4066858318227,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-kkuk6jpp5",
        "pageId": "025",
        "productId": "p184",
        "xPct": 27.656418801384287,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-mrcsjwz27",
        "pageId": "025",
        "productId": "p177",
        "xPct": 74.68795585910559,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-7q2exdgst",
        "pageId": "025",
        "productId": "p178",
        "xPct": 29.68768119922607,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-wmx65dvfz",
        "pageId": "025",
        "productId": "p179",
        "xPct": 73.9067010907049,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-n82aj5zdb",
        "pageId": "025",
        "productId": "p247",
        "xPct": 31.093939782347302,
        "yPct": 28.1466229836534
    },
    {
        "id": "admin-7ln23hajo",
        "pageId": "026",
        "productId": "p180",
        "xPct": 24.843291279854,
        "yPct": 24.83154845922415
    },
    {
        "id": "admin-y0ovfxhx2",
        "pageId": "027",
        "productId": "p207",
        "xPct": 45.000274659879516,
        "yPct": 33.00873228614963
    },
    {
        "id": "admin-jvi9catax",
        "pageId": "027",
        "productId": "p209",
        "xPct": 75.31295967382613,
        "yPct": 25.052553427519435
    },
    {
        "id": "admin-pemhbdh1g",
        "pageId": "027",
        "productId": "p208",
        "xPct": 82.18800163575217,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-ubkny3xut",
        "pageId": "028",
        "productId": "p216",
        "xPct": 11.718211170722476,
        "yPct": 67.04349740362328
    },
    {
        "id": "admin-v2xq8296q",
        "pageId": "028",
        "productId": "p217",
        "xPct": 42.49964904570951,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-83zhqst23",
        "pageId": "029",
        "productId": "p218",
        "xPct": 17.500106812175368,
        "yPct": 23.28451368115717
    },
    {
        "id": "admin-rkhpuy7bk",
        "pageId": "029",
        "productId": "p219",
        "xPct": 47.50028991876171,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-eb3l5gvae",
        "pageId": "029",
        "productId": "p220",
        "xPct": 77.34422207166793,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-2ezdqa48b",
        "pageId": "029",
        "productId": "p221",
        "xPct": 19.531369210017154,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-b2on9jegb",
        "pageId": "029",
        "productId": "p223",
        "xPct": 50.62530899236446,
        "yPct": 63.3969154267511
    },
    {
        "id": "admin-sgcw1s3l1",
        "pageId": "029",
        "productId": "p222",
        "xPct": 79.3754844695097,
        "yPct": 64.05993033163695
    },
    {
        "id": "admin-c9zw1e79u",
        "pageId": "031",
        "productId": "p224",
        "xPct": 28.59392452346511,
        "yPct": 25.49456336411
    },
    {
        "id": "admin-luu6d7hnb",
        "pageId": "031",
        "productId": "p225",
        "xPct": 28.59392452346511,
        "yPct": 41.95943350210861
    },
    {
        "id": "admin-iekfnxzo0",
        "pageId": "031",
        "productId": "p226",
        "xPct": 72.18794060022338,
        "yPct": 41.07541362892748
    },
    {
        "id": "admin-458epb2rk",
        "pageId": "031",
        "productId": "p228",
        "xPct": 29.53143024554593,
        "yPct": 68.59053218169025
    },
    {
        "id": "admin-ezabpbhjx",
        "pageId": "031",
        "productId": "p229",
        "xPct": 73.12544632230421,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-b6eu0osgf",
        "pageId": "031",
        "productId": "p230",
        "xPct": 29.68768119922607,
        "yPct": 83.39786505747423
    },
    {
        "id": "admin-hqm16mq4e",
        "pageId": "031",
        "productId": "p231",
        "xPct": 61.25037384261378,
        "yPct": 84.50288989895066
    },
    {
        "id": "admin-o156i2paf",
        "pageId": "033",
        "productId": "p236",
        "xPct": 17.500106812175368,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-12os4rfnu",
        "pageId": "033",
        "productId": "p237",
        "xPct": 50.62530899236446,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-had8ibxw5",
        "pageId": "033",
        "productId": "p238",
        "xPct": 80.46924114527066,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-qngsm9vwk",
        "pageId": "033",
        "productId": "p240",
        "xPct": 15.937597275373996,
        "yPct": 55.33023408397325
    },
    {
        "id": "admin-e62g5jtak",
        "pageId": "033",
        "productId": "p241",
        "xPct": 49.84405422396377,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-s3riy7oip",
        "pageId": "033",
        "productId": "p242",
        "xPct": 80.6254920989508,
        "yPct": 54.22520924249684
    },
    {
        "id": "admin-mnl981dmk",
        "pageId": "033",
        "productId": "p119",
        "xPct": 49.21905040924322,
        "yPct": 79.3092731440115
    },
    {
        "id": "admin-m8gu086z8",
        "pageId": "033",
        "productId": "p239",
        "xPct": 77.34422207166793,
        "yPct": 72.12661167441479
    },
    {
        "id": "admin-ad5t3mens",
        "pageId": "035",
        "productId": "p248",
        "xPct": 62.187879564694605,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-f98w73ujj",
        "pageId": "035",
        "productId": "p249",
        "xPct": 69.37542343398093,
        "yPct": 64.39143778407987
    },
    {
        "id": "admin-wde4n3dzu",
        "pageId": "035",
        "productId": "p250",
        "xPct": 77.03172016430764,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-e053atsca",
        "pageId": "036",
        "productId": "p253",
        "xPct": 64.68728446828898,
        "yPct": 66.71198995118036
    },
    {
        "id": "admin-93n5h8ek3",
        "pageId": "036",
        "productId": "p251",
        "xPct": 71.87482833757531,
        "yPct": 66.60148746703271
    },
    {
        "id": "admin-821z7j0ac",
        "pageId": "036",
        "productId": "p252",
        "xPct": 79.99987792894244,
        "yPct": 66.82249243532799
    },
    {
        "id": "admin-dsid7yqi5",
        "pageId": "038",
        "productId": "p254",
        "xPct": 38.2808732963458,
        "yPct": 21.074463998204333
    },
    {
        "id": "admin-ab48kl1ja",
        "pageId": "038",
        "productId": "p255",
        "xPct": 74.06234168909722,
        "yPct": 22.8425037445666
    },
    {
        "id": "admin-a83sjiuxg",
        "pageId": "038",
        "productId": "p256",
        "xPct": 37.49961852794512,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-szf3qvm5a",
        "pageId": "038",
        "productId": "p257",
        "xPct": 73.74983978173695,
        "yPct": 50.799632233919944
    },
    {
        "id": "admin-or7hu4hes",
        "pageId": "038",
        "productId": "p259",
        "xPct": 38.593375203706074,
        "yPct": 78.86726320742093
    },
    {
        "id": "admin-4hks8ex67",
        "pageId": "038",
        "productId": "p258",
        "xPct": 75.46860027221845,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-w0h3iju04",
        "pageId": "040",
        "productId": "p261",
        "xPct": 38.2808732963458,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-18r2glwr2",
        "pageId": "040",
        "productId": "p263",
        "xPct": 69.84356593973352,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-zq2mb3vgu",
        "pageId": "040",
        "productId": "p260",
        "xPct": 35.46835613010334,
        "yPct": 57.319278798630805
    },
    {
        "id": "admin-lhikqqgz4",
        "pageId": "040",
        "productId": "p262",
        "xPct": 70.31231880077394,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-7zcyo2ykc",
        "pageId": "042",
        "productId": "p265",
        "xPct": 39.68713187946704,
        "yPct": 19.858936672580278
    },
    {
        "id": "admin-029nqncqd",
        "pageId": "042",
        "productId": "p264",
        "xPct": 69.53106403237325,
        "yPct": 22.51099629212368
    },
    {
        "id": "admin-laqdzr1px",
        "pageId": "042",
        "productId": "p266",
        "xPct": 38.43712425002594,
        "yPct": 48.70008503511475
    },
    {
        "id": "admin-c29gtrtw3",
        "pageId": "044",
        "productId": "p267",
        "xPct": 23.124530789372493,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-rh4ug124k",
        "pageId": "044",
        "productId": "p268",
        "xPct": 51.2497024517972,
        "yPct": 28.92014037268689
    },
    {
        "id": "admin-kbcm3nvew",
        "pageId": "044",
        "productId": "p269",
        "xPct": 80.46863078998285,
        "yPct": 29.141145340982177
    },
    {
        "id": "admin-gwlk4d1rw",
        "pageId": "044",
        "productId": "p270",
        "xPct": 22.18702506729167,
        "yPct": 63.949427847489304
    },
    {
        "id": "admin-7a2ns82o0",
        "pageId": "044",
        "productId": "p271",
        "xPct": 54.68722343276021,
        "yPct": 64.17043281578458
    },
    {
        "id": "admin-ha9rqoi2q",
        "pageId": "044",
        "productId": "p259",
        "xPct": 80.46863078998285,
        "yPct": 64.28093529993222
    },
    {
        "id": "admin-42opuud1j",
        "pageId": "048",
        "productId": "p279",
        "xPct": 33.74959563962182,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-7m5qdx3nk",
        "pageId": "048",
        "productId": "p281",
        "xPct": 36.87461471322457,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-raffc43tw",
        "pageId": "048",
        "productId": "p285",
        "xPct": 38.43712425002594,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-sh4mppakb",
        "pageId": "048",
        "productId": "p283",
        "xPct": 37.34336757426498,
        "yPct": 84.17138244650774
    },
    {
        "id": "admin-7bapy41kd",
        "pageId": "048",
        "productId": "p70",
        "xPct": 83.12489700254518,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-7aw58tg60",
        "pageId": "048",
        "productId": "p282",
        "xPct": 84.68740653934655,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-89dzrfg62",
        "pageId": "048",
        "productId": "p286",
        "xPct": 84.68740653934655,
        "yPct": 61.84988064868412
    },
    {
        "id": "admin-zwej5vbgh",
        "pageId": "048",
        "productId": "p284",
        "xPct": 83.90615177094587,
        "yPct": 83.28736257332659
    },
    {
        "id": "admin-0tmmnp0nd",
        "pageId": "049",
        "productId": "p290",
        "xPct": 30.00018310658634,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-9us7e8jmf",
        "pageId": "049",
        "productId": "p291",
        "xPct": 35.31271553171101,
        "yPct": 83.50836754162188
    },
    {
        "id": "admin-ctpqy4286",
        "pageId": "049",
        "productId": "p292",
        "xPct": 45.625278474600066,
        "yPct": 85.93942219287
    },
    {
        "id": "admin-jnubsd7hb",
        "pageId": "049",
        "productId": "p293",
        "xPct": 56.7190961858898,
        "yPct": 85.16590480383651
    },
    {
        "id": "admin-irv2zs2j2",
        "pageId": "049",
        "productId": "p294",
        "xPct": 64.2191419625364,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-6w28jzxrb",
        "pageId": "049",
        "productId": "p295",
        "xPct": 68.90667057294051,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-37spcpij0",
        "pageId": "050",
        "productId": "p298",
        "xPct": 38.593375203706074,
        "yPct": 16.985872084741594
    },
    {
        "id": "admin-du9ogw60p",
        "pageId": "050",
        "productId": "p299",
        "xPct": 36.562112805864295,
        "yPct": 41.29641859722276
    },
    {
        "id": "admin-p0rjy2l3y",
        "pageId": "050",
        "productId": "p297",
        "xPct": 66.56229591245064,
        "yPct": 48.368577582671826
    },
    {
        "id": "admin-0ul99x2kb",
        "pageId": "050",
        "productId": "p296",
        "xPct": 58.74974822844378,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-utjc5d5vi",
        "pageId": "051",
        "productId": "p300",
        "xPct": 22.187635422579483,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-aouvnr5qi",
        "pageId": "051",
        "productId": "p302",
        "xPct": 48.12529373348226,
        "yPct": 38.423354009384084
    },
    {
        "id": "admin-1jkvz0q5q",
        "pageId": "051",
        "productId": "p301",
        "xPct": 32.81270027282881,
        "yPct": 50.468124781477016
    },
    {
        "id": "admin-97tgqjl4u",
        "pageId": "052",
        "productId": "p304",
        "xPct": 29.99957275129853,
        "yPct": 34.44526458006898
    },
    {
        "id": "admin-mle1h4i35",
        "pageId": "052",
        "productId": "p303",
        "xPct": 61.40601444100611,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-wigk8ldfo",
        "pageId": "053",
        "productId": "p305",
        "xPct": 22.812639237300033,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-e6w4k6mfz",
        "pageId": "054",
        "productId": "p308",
        "xPct": 66.09354305141024,
        "yPct": 75.8836961354346
    },
    {
        "id": "admin-kleywpxzs",
        "pageId": "054",
        "productId": "p309",
        "xPct": 72.81233405965612,
        "yPct": 76.21520358787754
    },
    {
        "id": "admin-fkp619pjt",
        "pageId": "054",
        "productId": "p307",
        "xPct": 88.12492752030957,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-iz92p8rnr",
        "pageId": "054",
        "productId": "p306",
        "xPct": 80.15612888262258,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-cisr8k5wm",
        "pageId": "056",
        "productId": "p310",
        "xPct": 69.06231117133284,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-7c11q1li4",
        "pageId": "057",
        "productId": "p313",
        "xPct": 61.09412288893365,
        "yPct": 50.57862726562467
    },
    {
        "id": "admin-gc8ywq5l5",
        "pageId": "057",
        "productId": "p312",
        "xPct": 38.75023651267403,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-kgecoeyf2",
        "pageId": "057",
        "productId": "p311",
        "xPct": 17.343855858495232,
        "yPct": 49.58410490829589
    },
    {
        "id": "admin-zzw6o9qm1",
        "pageId": "057",
        "productId": "p314",
        "xPct": 85.15676975567477,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-599cawuft",
        "pageId": "058",
        "productId": "p316",
        "xPct": 13.74947356856426,
        "yPct": 52.67817446442985
    },
    {
        "id": "admin-831x7w7mp",
        "pageId": "058",
        "productId": "p315",
        "xPct": 21.562021252571125,
        "yPct": 52.34666701198692
    },
    {
        "id": "admin-fu82og0qm",
        "pageId": "058",
        "productId": "p317",
        "xPct": 36.40586185218416,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-8yb6bodlr",
        "pageId": "059",
        "productId": "p318",
        "xPct": 65.15664768461721,
        "yPct": 55.88274650471147
    },
    {
        "id": "admin-l8sen3rbi",
        "pageId": "059",
        "productId": "p319",
        "xPct": 58.12535476901104,
        "yPct": 55.66174153641617
    },
    {
        "id": "admin-v8dkm4vda",
        "pageId": "059",
        "productId": "p320",
        "xPct": 80.93799400631107,
        "yPct": 55.4407365681209
    },
    {
        "id": "admin-kqycs8tpw",
        "pageId": "060",
        "productId": "p321",
        "xPct": 54.37472152539994,
        "yPct": 33.22973725444492
    },
    {
        "id": "admin-40zlm72nq",
        "pageId": "061",
        "productId": "p322",
        "xPct": 32.96895122650895,
        "yPct": 13.5602950761647
    },
    {
        "id": "admin-c5vy402m8",
        "pageId": "061",
        "productId": "p326",
        "xPct": 18.750114441616464,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-oh6ebb6as",
        "pageId": "061",
        "productId": "p323",
        "xPct": 46.71903515036103,
        "yPct": 30.135667698310954
    },
    {
        "id": "admin-ffmtm61f1",
        "pageId": "061",
        "productId": "p324",
        "xPct": 28.281422616104834,
        "yPct": 37.20782668376002
    },
    {
        "id": "admin-148b2ppqc",
        "pageId": "061",
        "productId": "p325",
        "xPct": 19.531369210017154,
        "yPct": 42.069935986256255
    },
    {
        "id": "admin-7effq5n1z",
        "pageId": "061",
        "productId": "p327",
        "xPct": 17.031353951134957,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-j4osp5cii",
        "pageId": "062",
        "productId": "p328",
        "xPct": 30.62457656601908,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-gehbg3pox",
        "pageId": "062",
        "productId": "p329",
        "xPct": 39.218379018426624,
        "yPct": 62.8444030060129
    },
    {
        "id": "admin-ngrngtzni",
        "pageId": "062",
        "productId": "p330",
        "xPct": 45.78091907299239,
        "yPct": 62.51289555356997
    },
    {
        "id": "admin-4243s5a4m",
        "pageId": "062",
        "productId": "p331",
        "xPct": 54.06221961803966,
        "yPct": 62.73390052186525
    },
    {
        "id": "admin-xvyf5a4n8",
        "pageId": "062",
        "productId": "p332",
        "xPct": 62.34352016308693,
        "yPct": 62.18138810112704
    },
    {
        "id": "admin-kft9t0lbz",
        "pageId": "062",
        "productId": "p333",
        "xPct": 68.59355831029242,
        "yPct": 62.95490549016053
    },
    {
        "id": "admin-d7z9lmsg2",
        "pageId": "063",
        "productId": "p334",
        "xPct": 43.125263215717865,
        "yPct": 68.4800296975426
    },
    {
        "id": "admin-zl79fisdp",
        "pageId": "063",
        "productId": "p335",
        "xPct": 49.531552316603495,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-yusyx35hb",
        "pageId": "063",
        "productId": "p336",
        "xPct": 57.969103815330904,
        "yPct": 68.36952721339497
    },
    {
        "id": "admin-45q5uftig",
        "pageId": "064",
        "productId": "p337",
        "xPct": 23.280781743052632,
        "yPct": 47.81606516193362
    },
    {
        "id": "admin-f3nt6tsna",
        "pageId": "026",
        "productId": "p1",
        "xPct": 87.33535967578521,
        "yPct": 26.98529988020466
    },
    {
        "id": "admin-70egvf9gn",
        "pageId": "016",
        "productId": "p3",
        "xPct": 83.08004052684905,
        "yPct": 43.322249465399295
    },
    {
        "id": "admin-o5y1ek63v",
        "pageId": "016",
        "productId": "p1",
        "xPct": 22.69503546099291,
        "yPct": 52.63717686046642
    },
    {
        "id": "admin-dct363f6r",
        "pageId": "017",
        "productId": "p3",
        "xPct": 18.135764944275582,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-maer2m4qb",
        "pageId": "017",
        "productId": "p4",
        "xPct": 79.33130699088146,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-4jy8119qe",
        "pageId": "017",
        "productId": "p5",
        "xPct": 45.49138804457954,
        "yPct": 32.28764316662748
    },
    {
        "id": "admin-6q1wml9ef",
        "pageId": "062",
        "productId": "p279",
        "xPct": 43.90625,
        "yPct": 47.29095084344838
    },
    {
        "id": "admin-6k149m9cv",
        "pageId": "005",
        "productId": "p1",
        "xPct": 24.68765068146168,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-8i4minqc1",
        "pageId": "005",
        "productId": "p2",
        "xPct": 32.343947411788406,
        "yPct": 37.76033910449823
    },
    {
        "id": "admin-mop52jcxm",
        "pageId": "005",
        "productId": "p3",
        "xPct": 40.3127460494754,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-562qucdpu",
        "pageId": "005",
        "productId": "p4",
        "xPct": 49.06279945556308,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-cn55k93ly",
        "pageId": "005",
        "productId": "p5",
        "xPct": 57.344100000610354,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-7ghius64v",
        "pageId": "005",
        "productId": "p6",
        "xPct": 65.9379024530179,
        "yPct": 36.76581674716945
    },
    {
        "id": "admin-vf13h9c2b",
        "pageId": "005",
        "productId": "p7",
        "xPct": 74.53170490542544,
        "yPct": 37.870841588645874
    },
    {
        "id": "admin-zztyje9bt",
        "pageId": "005",
        "productId": "p8",
        "xPct": 24.06264686674113,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-jebf2fu38",
        "pageId": "005",
        "productId": "p9",
        "xPct": 32.81270027282881,
        "yPct": 46.49003535216192
    },
    {
        "id": "admin-wydbgjt8y",
        "pageId": "005",
        "productId": "p10",
        "xPct": 42.03150653995691,
        "yPct": 45.053503058242576
    },
    {
        "id": "admin-zqzbivr9j",
        "pageId": "005",
        "productId": "p11",
        "xPct": 48.75029754820281,
        "yPct": 46.15852789971899
    },
    {
        "id": "admin-2kp73mr4h",
        "pageId": "005",
        "productId": "p12",
        "xPct": 58.43785667637131,
        "yPct": 44.61149312165201
    },
    {
        "id": "admin-4in4cj6h3",
        "pageId": "005",
        "productId": "p13",
        "xPct": 67.187910082459,
        "yPct": 45.385010510685504
    },
    {
        "id": "admin-ctn4c21s0",
        "pageId": "005",
        "productId": "p14",
        "xPct": 74.37545395174531,
        "yPct": 45.274508026537866
    },
    {
        "id": "admin-168112lo2",
        "pageId": "006",
        "productId": "p57",
        "xPct": 64.84353542196912,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-yu0re5rb2",
        "pageId": "007",
        "productId": "p57",
        "xPct": 30.62518692130689,
        "yPct": 31.461697508082654
    },
    {
        "id": "admin-owmoa0pjx",
        "pageId": "007",
        "productId": "p58",
        "xPct": 52.031567575485695,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-in9lixb5i",
        "pageId": "007",
        "productId": "p59",
        "xPct": 76.40671634958709,
        "yPct": 27.262603110472266
    },
    {
        "id": "admin-uqn6zksxp",
        "pageId": "007",
        "productId": "p62",
        "xPct": 50.00030517764391,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-52khx9kh9",
        "pageId": "007",
        "productId": "p63",
        "xPct": 72.50044250758366,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-8ynylumh2",
        "pageId": "007",
        "productId": "p65",
        "xPct": 31.56269264338772,
        "yPct": 80.6353029537832
    },
    {
        "id": "admin-51imblzdk",
        "pageId": "007",
        "productId": "p66",
        "xPct": 48.75029754820281,
        "yPct": 77.87274085009216
    },
    {
        "id": "admin-tzg79uwgh",
        "pageId": "007",
        "productId": "p67",
        "xPct": 66.40665531405831,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-kfd1oajwt",
        "pageId": "007",
        "productId": "p61",
        "xPct": 26.562662125623326,
        "yPct": 55.55123905226854
    },
    {
        "id": "admin-024fmuhot",
        "pageId": "008",
        "productId": "p60",
        "xPct": 30.780827519699216,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-qbftx770z",
        "pageId": "008",
        "productId": "p68",
        "xPct": 50.78094959075678,
        "yPct": 26.931095658029342
    },
    {
        "id": "admin-ombvskxx6",
        "pageId": "008",
        "productId": "p64",
        "xPct": 30.62457656601908,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-w8xuykvbm",
        "pageId": "008",
        "productId": "p72",
        "xPct": 47.4996795634739,
        "yPct": 57.20877631448317
    },
    {
        "id": "admin-f7ezps9ja",
        "pageId": "008",
        "productId": "p76",
        "xPct": 72.96858501333627,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-mcldsy9si",
        "pageId": "008",
        "productId": "p79",
        "xPct": 53.43721580331911,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-3liqoxk8r",
        "pageId": "008",
        "productId": "p80",
        "xPct": 69.21856212501297,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-clvu8816m",
        "pageId": "009",
        "productId": "p69",
        "xPct": 30.937688828667163,
        "yPct": 25.715568332405287
    },
    {
        "id": "admin-yhd8dr1f9",
        "pageId": "009",
        "productId": "p70",
        "xPct": 48.43779564084254,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-ljkww2g64",
        "pageId": "009",
        "productId": "p71",
        "xPct": 69.53167438766106,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-i5i51bu3z",
        "pageId": "009",
        "productId": "p74",
        "xPct": 49.06279945556308,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-xue15cgx3",
        "pageId": "009",
        "productId": "p77",
        "xPct": 34.53146076331032,
        "yPct": 81.96133276355489
    },
    {
        "id": "admin-yw410fmxw",
        "pageId": "009",
        "productId": "p78",
        "xPct": 50.31280708500419,
        "yPct": 82.40334270014546
    },
    {
        "id": "admin-u4l09huoe",
        "pageId": "010",
        "productId": "p81",
        "xPct": 34.0620975469821,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-t0an1bphj",
        "pageId": "010",
        "productId": "p82",
        "xPct": 53.593466756999256,
        "yPct": 28.036120499505763
    },
    {
        "id": "admin-m4q6wzenf",
        "pageId": "010",
        "productId": "p83",
        "xPct": 76.09360408693901,
        "yPct": 28.367627951948688
    },
    {
        "id": "admin-ci6exe7m2",
        "pageId": "010",
        "productId": "p83",
        "xPct": 34.0620975469821,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-0pe4bow7m",
        "pageId": "010",
        "productId": "p86",
        "xPct": 55.31222724748076,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-xwq3isc4l",
        "pageId": "010",
        "productId": "p87",
        "xPct": 75.6248512258986,
        "yPct": 53.3411893693157
    },
    {
        "id": "admin-3ao2n6zpv",
        "pageId": "010",
        "productId": "p89",
        "xPct": 35.15585422274306,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-tp3uvqxi4",
        "pageId": "010",
        "productId": "p90",
        "xPct": 54.999725340120484,
        "yPct": 79.64078059645442
    },
    {
        "id": "admin-rdgd25kgj",
        "pageId": "010",
        "productId": "p91",
        "xPct": 74.99984741117804,
        "yPct": 79.75128308060206
    },
    {
        "id": "admin-4f3p0zi2u",
        "pageId": "011",
        "productId": "p84",
        "xPct": 35.78146839275142,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-t965ykkgi",
        "pageId": "011",
        "productId": "p88",
        "xPct": 55.46908855644871,
        "yPct": 26.8205931738817
    },
    {
        "id": "admin-vk40iuv3f",
        "pageId": "011",
        "productId": "p92",
        "xPct": 75.93796348854667,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-sf76zsnqz",
        "pageId": "012",
        "productId": "p106",
        "xPct": 70.31231880077394,
        "yPct": 77.20972594520632
    },
    {
        "id": "admin-kplnjcadp",
        "pageId": "012",
        "productId": "p105",
        "xPct": 78.5936193458212,
        "yPct": 77.76223836594451
    },
    {
        "id": "admin-fxah2rh81",
        "pageId": "012",
        "productId": "p107",
        "xPct": 85.93741416878765,
        "yPct": 77.43073091350159
    },
    {
        "id": "admin-i8szzrxkk",
        "pageId": "012",
        "productId": "p108",
        "xPct": 92.65620517703354,
        "yPct": 77.54123339764924
    },
    {
        "id": "admin-hwyz347kh",
        "pageId": "014",
        "productId": "p109",
        "xPct": 26.405800816655372,
        "yPct": 31.01968757149209
    },
    {
        "id": "admin-7q1yzumg3",
        "pageId": "014",
        "productId": "p110",
        "xPct": 57.812242506362956,
        "yPct": 30.467175150753878
    },
    {
        "id": "admin-dj3ddpja2",
        "pageId": "014",
        "productId": "p111",
        "xPct": 90.7811937328719,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-mtfxtxubb",
        "pageId": "014",
        "productId": "p112",
        "xPct": 26.249549862975236,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-tjsobhnew",
        "pageId": "014",
        "productId": "p113",
        "xPct": 58.59349727476364,
        "yPct": 57.540283766926095
    },
    {
        "id": "admin-j8faw51a4",
        "pageId": "014",
        "productId": "p114",
        "xPct": 90.31244087183148,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-xbml9w5sp",
        "pageId": "014",
        "productId": "p115",
        "xPct": 26.56205177033551,
        "yPct": 84.94489983554122
    },
    {
        "id": "admin-4hc9kjwzr",
        "pageId": "014",
        "productId": "p117",
        "xPct": 89.0624332423904,
        "yPct": 84.83439735139359
    },
    {
        "id": "admin-jed5ybaz1",
        "pageId": "015",
        "productId": "p118",
        "xPct": 25.31265449618223,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-o9y306tpv",
        "pageId": "015",
        "productId": "p119",
        "xPct": 58.281605722691175,
        "yPct": 29.804160245868026
    },
    {
        "id": "admin-sutbsb4tn",
        "pageId": "015",
        "productId": "p116",
        "xPct": 88.59429073663779,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-f6xt6y3jx",
        "pageId": "017",
        "productId": "p133",
        "xPct": 17.500106812175368,
        "yPct": 35.99229935813596
    },
    {
        "id": "admin-hhiihk76j",
        "pageId": "017",
        "productId": "p134",
        "xPct": 46.56278419668089,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-ulqwoock5",
        "pageId": "017",
        "productId": "p135",
        "xPct": 78.43797874742889,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-qc7hp25k5",
        "pageId": "017",
        "productId": "p140",
        "xPct": 17.96885967321578,
        "yPct": 59.75033344987892
    },
    {
        "id": "admin-3tq060c03",
        "pageId": "017",
        "productId": "p137",
        "xPct": 48.12529373348226,
        "yPct": 59.86083593402657
    },
    {
        "id": "admin-xga67szdv",
        "pageId": "017",
        "productId": "p138",
        "xPct": 78.12547684006861,
        "yPct": 59.30832351328835
    },
    {
        "id": "admin-apwm6ob45",
        "pageId": "017",
        "productId": "p139",
        "xPct": 18.59386348793633,
        "yPct": 82.18233773185018
    },
    {
        "id": "admin-xabx2wmdc",
        "pageId": "018",
        "productId": "p133",
        "xPct": 16.56199073480673,
        "yPct": 33.89275215933077
    },
    {
        "id": "admin-444y6459a",
        "pageId": "018",
        "productId": "p134",
        "xPct": 49.843443868675955,
        "yPct": 33.11923477029728
    },
    {
        "id": "admin-zibaxk97z",
        "pageId": "018",
        "productId": "p135",
        "xPct": 79.06237220686161,
        "yPct": 32.89822980200199
    },
    {
        "id": "admin-clvjy4b65",
        "pageId": "018",
        "productId": "p136",
        "xPct": 16.874492642167006,
        "yPct": 56.21425395715439
    },
    {
        "id": "admin-ryrqszz96",
        "pageId": "018",
        "productId": "p137",
        "xPct": 48.59343623923486,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-rgpq5tj6w",
        "pageId": "018",
        "productId": "p138",
        "xPct": 81.71863841942395,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-lwrij7nu0",
        "pageId": "018",
        "productId": "p139",
        "xPct": 15.780735966406045,
        "yPct": 74.99967626225347
    },
    {
        "id": "admin-73b9oelfw",
        "pageId": "018",
        "productId": "p140",
        "xPct": 50.4684476833965,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-t57n4snv8",
        "pageId": "022",
        "productId": "p152",
        "xPct": 21.09326839153071,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-j6sjxxhlc",
        "pageId": "022",
        "productId": "p153",
        "xPct": 49.9996948223561,
        "yPct": 24.279036038485945
    },
    {
        "id": "admin-houojboyy",
        "pageId": "022",
        "productId": "p154",
        "xPct": 78.74987029950134,
        "yPct": 23.063508712861886
    },
    {
        "id": "admin-vwb7cu6is",
        "pageId": "022",
        "productId": "p156",
        "xPct": 48.59343623923486,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-gu7kjy97k",
        "pageId": "022",
        "productId": "p157",
        "xPct": 81.71863841942395,
        "yPct": 50.6891297497723
    },
    {
        "id": "admin-9y3jq8o4h",
        "pageId": "022",
        "productId": "p158",
        "xPct": 35.624607083783474,
        "yPct": 82.62434766844075
    },
    {
        "id": "admin-qpj8pthi4",
        "pageId": "022",
        "productId": "p159",
        "xPct": 73.1248359670164,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-4k9la7smd",
        "pageId": "023",
        "productId": "p160",
        "xPct": 24.53139972778154,
        "yPct": 23.39501616530481
    },
    {
        "id": "admin-ea3sofhch",
        "pageId": "023",
        "productId": "p161",
        "xPct": 71.87543869286311,
        "yPct": 24.72104597507651
    },
    {
        "id": "admin-dlfncb8u9",
        "pageId": "023",
        "productId": "p166",
        "xPct": 24.21889782042127,
        "yPct": 56.103751473006746
    },
    {
        "id": "admin-438u5qrtc",
        "pageId": "023",
        "productId": "p162",
        "xPct": 71.4066858318227,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-kkuk6jpp5",
        "pageId": "025",
        "productId": "p184",
        "xPct": 27.656418801384287,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-mrcsjwz27",
        "pageId": "025",
        "productId": "p177",
        "xPct": 74.68795585910559,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-7q2exdgst",
        "pageId": "025",
        "productId": "p178",
        "xPct": 29.68768119922607,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-wmx65dvfz",
        "pageId": "025",
        "productId": "p179",
        "xPct": 73.9067010907049,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-n82aj5zdb",
        "pageId": "025",
        "productId": "p247",
        "xPct": 31.093939782347302,
        "yPct": 28.1466229836534
    },
    {
        "id": "admin-7ln23hajo",
        "pageId": "026",
        "productId": "p180",
        "xPct": 24.843291279854,
        "yPct": 24.83154845922415
    },
    {
        "id": "admin-y0ovfxhx2",
        "pageId": "027",
        "productId": "p207",
        "xPct": 45.000274659879516,
        "yPct": 33.00873228614963
    },
    {
        "id": "admin-jvi9catax",
        "pageId": "027",
        "productId": "p209",
        "xPct": 75.31295967382613,
        "yPct": 25.052553427519435
    },
    {
        "id": "admin-pemhbdh1g",
        "pageId": "027",
        "productId": "p208",
        "xPct": 82.18800163575217,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-ubkny3xut",
        "pageId": "028",
        "productId": "p216",
        "xPct": 11.718211170722476,
        "yPct": 67.04349740362328
    },
    {
        "id": "admin-v2xq8296q",
        "pageId": "028",
        "productId": "p217",
        "xPct": 42.49964904570951,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-83zhqst23",
        "pageId": "029",
        "productId": "p218",
        "xPct": 17.500106812175368,
        "yPct": 23.28451368115717
    },
    {
        "id": "admin-rkhpuy7bk",
        "pageId": "029",
        "productId": "p219",
        "xPct": 47.50028991876171,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-eb3l5gvae",
        "pageId": "029",
        "productId": "p220",
        "xPct": 77.34422207166793,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-2ezdqa48b",
        "pageId": "029",
        "productId": "p221",
        "xPct": 19.531369210017154,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-b2on9jegb",
        "pageId": "029",
        "productId": "p223",
        "xPct": 50.62530899236446,
        "yPct": 63.3969154267511
    },
    {
        "id": "admin-sgcw1s3l1",
        "pageId": "029",
        "productId": "p222",
        "xPct": 79.3754844695097,
        "yPct": 64.05993033163695
    },
    {
        "id": "admin-c9zw1e79u",
        "pageId": "031",
        "productId": "p224",
        "xPct": 28.59392452346511,
        "yPct": 25.49456336411
    },
    {
        "id": "admin-luu6d7hnb",
        "pageId": "031",
        "productId": "p225",
        "xPct": 28.59392452346511,
        "yPct": 41.95943350210861
    },
    {
        "id": "admin-iekfnxzo0",
        "pageId": "031",
        "productId": "p226",
        "xPct": 72.18794060022338,
        "yPct": 41.07541362892748
    },
    {
        "id": "admin-458epb2rk",
        "pageId": "031",
        "productId": "p228",
        "xPct": 29.53143024554593,
        "yPct": 68.59053218169025
    },
    {
        "id": "admin-ezabpbhjx",
        "pageId": "031",
        "productId": "p229",
        "xPct": 73.12544632230421,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-b6eu0osgf",
        "pageId": "031",
        "productId": "p230",
        "xPct": 29.68768119922607,
        "yPct": 83.39786505747423
    },
    {
        "id": "admin-hqm16mq4e",
        "pageId": "031",
        "productId": "p231",
        "xPct": 61.25037384261378,
        "yPct": 84.50288989895066
    },
    {
        "id": "admin-o156i2paf",
        "pageId": "033",
        "productId": "p236",
        "xPct": 17.500106812175368,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-12os4rfnu",
        "pageId": "033",
        "productId": "p237",
        "xPct": 50.62530899236446,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-had8ibxw5",
        "pageId": "033",
        "productId": "p238",
        "xPct": 80.46924114527066,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-qngsm9vwk",
        "pageId": "033",
        "productId": "p240",
        "xPct": 15.937597275373996,
        "yPct": 55.33023408397325
    },
    {
        "id": "admin-e62g5jtak",
        "pageId": "033",
        "productId": "p241",
        "xPct": 49.84405422396377,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-s3riy7oip",
        "pageId": "033",
        "productId": "p242",
        "xPct": 80.6254920989508,
        "yPct": 54.22520924249684
    },
    {
        "id": "admin-mnl981dmk",
        "pageId": "033",
        "productId": "p119",
        "xPct": 49.21905040924322,
        "yPct": 79.3092731440115
    },
    {
        "id": "admin-m8gu086z8",
        "pageId": "033",
        "productId": "p239",
        "xPct": 77.34422207166793,
        "yPct": 72.12661167441479
    },
    {
        "id": "admin-ad5t3mens",
        "pageId": "035",
        "productId": "p248",
        "xPct": 62.187879564694605,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-f98w73ujj",
        "pageId": "035",
        "productId": "p249",
        "xPct": 69.37542343398093,
        "yPct": 64.39143778407987
    },
    {
        "id": "admin-wde4n3dzu",
        "pageId": "035",
        "productId": "p250",
        "xPct": 77.03172016430764,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-e053atsca",
        "pageId": "036",
        "productId": "p253",
        "xPct": 64.68728446828898,
        "yPct": 66.71198995118036
    },
    {
        "id": "admin-93n5h8ek3",
        "pageId": "036",
        "productId": "p251",
        "xPct": 71.87482833757531,
        "yPct": 66.60148746703271
    },
    {
        "id": "admin-821z7j0ac",
        "pageId": "036",
        "productId": "p252",
        "xPct": 79.99987792894244,
        "yPct": 66.82249243532799
    },
    {
        "id": "admin-dsid7yqi5",
        "pageId": "038",
        "productId": "p254",
        "xPct": 38.2808732963458,
        "yPct": 21.074463998204333
    },
    {
        "id": "admin-ab48kl1ja",
        "pageId": "038",
        "productId": "p255",
        "xPct": 74.06234168909722,
        "yPct": 22.8425037445666
    },
    {
        "id": "admin-a83sjiuxg",
        "pageId": "038",
        "productId": "p256",
        "xPct": 37.49961852794512,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-szf3qvm5a",
        "pageId": "038",
        "productId": "p257",
        "xPct": 73.74983978173695,
        "yPct": 50.799632233919944
    },
    {
        "id": "admin-or7hu4hes",
        "pageId": "038",
        "productId": "p259",
        "xPct": 38.593375203706074,
        "yPct": 78.86726320742093
    },
    {
        "id": "admin-4hks8ex67",
        "pageId": "038",
        "productId": "p258",
        "xPct": 75.46860027221845,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-w0h3iju04",
        "pageId": "040",
        "productId": "p261",
        "xPct": 38.2808732963458,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-18r2glwr2",
        "pageId": "040",
        "productId": "p263",
        "xPct": 69.84356593973352,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-zq2mb3vgu",
        "pageId": "040",
        "productId": "p260",
        "xPct": 35.46835613010334,
        "yPct": 57.319278798630805
    },
    {
        "id": "admin-lhikqqgz4",
        "pageId": "040",
        "productId": "p262",
        "xPct": 70.31231880077394,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-7zcyo2ykc",
        "pageId": "042",
        "productId": "p265",
        "xPct": 39.68713187946704,
        "yPct": 19.858936672580278
    },
    {
        "id": "admin-029nqncqd",
        "pageId": "042",
        "productId": "p264",
        "xPct": 69.53106403237325,
        "yPct": 22.51099629212368
    },
    {
        "id": "admin-laqdzr1px",
        "pageId": "042",
        "productId": "p266",
        "xPct": 38.43712425002594,
        "yPct": 48.70008503511475
    },
    {
        "id": "admin-c29gtrtw3",
        "pageId": "044",
        "productId": "p267",
        "xPct": 23.124530789372493,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-rh4ug124k",
        "pageId": "044",
        "productId": "p268",
        "xPct": 51.2497024517972,
        "yPct": 28.92014037268689
    },
    {
        "id": "admin-kbcm3nvew",
        "pageId": "044",
        "productId": "p269",
        "xPct": 80.46863078998285,
        "yPct": 29.141145340982177
    },
    {
        "id": "admin-gwlk4d1rw",
        "pageId": "044",
        "productId": "p270",
        "xPct": 22.18702506729167,
        "yPct": 63.949427847489304
    },
    {
        "id": "admin-7a2ns82o0",
        "pageId": "044",
        "productId": "p271",
        "xPct": 54.68722343276021,
        "yPct": 64.17043281578458
    },
    {
        "id": "admin-ha9rqoi2q",
        "pageId": "044",
        "productId": "p259",
        "xPct": 80.46863078998285,
        "yPct": 64.28093529993222
    },
    {
        "id": "admin-42opuud1j",
        "pageId": "048",
        "productId": "p279",
        "xPct": 33.74959563962182,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-7m5qdx3nk",
        "pageId": "048",
        "productId": "p281",
        "xPct": 36.87461471322457,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-raffc43tw",
        "pageId": "048",
        "productId": "p285",
        "xPct": 38.43712425002594,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-sh4mppakb",
        "pageId": "048",
        "productId": "p283",
        "xPct": 37.34336757426498,
        "yPct": 84.17138244650774
    },
    {
        "id": "admin-7bapy41kd",
        "pageId": "048",
        "productId": "p70",
        "xPct": 83.12489700254518,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-7aw58tg60",
        "pageId": "048",
        "productId": "p282",
        "xPct": 84.68740653934655,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-89dzrfg62",
        "pageId": "048",
        "productId": "p286",
        "xPct": 84.68740653934655,
        "yPct": 61.84988064868412
    },
    {
        "id": "admin-zwej5vbgh",
        "pageId": "048",
        "productId": "p284",
        "xPct": 83.90615177094587,
        "yPct": 83.28736257332659
    },
    {
        "id": "admin-0tmmnp0nd",
        "pageId": "049",
        "productId": "p290",
        "xPct": 30.00018310658634,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-9us7e8jmf",
        "pageId": "049",
        "productId": "p291",
        "xPct": 35.31271553171101,
        "yPct": 83.50836754162188
    },
    {
        "id": "admin-ctpqy4286",
        "pageId": "049",
        "productId": "p292",
        "xPct": 45.625278474600066,
        "yPct": 85.93942219287
    },
    {
        "id": "admin-jnubsd7hb",
        "pageId": "049",
        "productId": "p293",
        "xPct": 56.7190961858898,
        "yPct": 85.16590480383651
    },
    {
        "id": "admin-irv2zs2j2",
        "pageId": "049",
        "productId": "p294",
        "xPct": 64.2191419625364,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-6w28jzxrb",
        "pageId": "049",
        "productId": "p295",
        "xPct": 68.90667057294051,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-37spcpij0",
        "pageId": "050",
        "productId": "p298",
        "xPct": 38.593375203706074,
        "yPct": 16.985872084741594
    },
    {
        "id": "admin-du9ogw60p",
        "pageId": "050",
        "productId": "p299",
        "xPct": 36.562112805864295,
        "yPct": 41.29641859722276
    },
    {
        "id": "admin-p0rjy2l3y",
        "pageId": "050",
        "productId": "p297",
        "xPct": 66.56229591245064,
        "yPct": 48.368577582671826
    },
    {
        "id": "admin-0ul99x2kb",
        "pageId": "050",
        "productId": "p296",
        "xPct": 58.74974822844378,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-utjc5d5vi",
        "pageId": "051",
        "productId": "p300",
        "xPct": 22.187635422579483,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-aouvnr5qi",
        "pageId": "051",
        "productId": "p302",
        "xPct": 48.12529373348226,
        "yPct": 38.423354009384084
    },
    {
        "id": "admin-1jkvz0q5q",
        "pageId": "051",
        "productId": "p301",
        "xPct": 32.81270027282881,
        "yPct": 50.468124781477016
    },
    {
        "id": "admin-97tgqjl4u",
        "pageId": "052",
        "productId": "p304",
        "xPct": 29.99957275129853,
        "yPct": 34.44526458006898
    },
    {
        "id": "admin-mle1h4i35",
        "pageId": "052",
        "productId": "p303",
        "xPct": 61.40601444100611,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-wigk8ldfo",
        "pageId": "053",
        "productId": "p305",
        "xPct": 22.812639237300033,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-e6w4k6mfz",
        "pageId": "054",
        "productId": "p308",
        "xPct": 66.09354305141024,
        "yPct": 75.8836961354346
    },
    {
        "id": "admin-kleywpxzs",
        "pageId": "054",
        "productId": "p309",
        "xPct": 72.81233405965612,
        "yPct": 76.21520358787754
    },
    {
        "id": "admin-fkp619pjt",
        "pageId": "054",
        "productId": "p307",
        "xPct": 88.12492752030957,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-iz92p8rnr",
        "pageId": "054",
        "productId": "p306",
        "xPct": 80.15612888262258,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-cisr8k5wm",
        "pageId": "056",
        "productId": "p310",
        "xPct": 69.06231117133284,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-7c11q1li4",
        "pageId": "057",
        "productId": "p313",
        "xPct": 61.09412288893365,
        "yPct": 50.57862726562467
    },
    {
        "id": "admin-gc8ywq5l5",
        "pageId": "057",
        "productId": "p312",
        "xPct": 38.75023651267403,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-kgecoeyf2",
        "pageId": "057",
        "productId": "p311",
        "xPct": 17.343855858495232,
        "yPct": 49.58410490829589
    },
    {
        "id": "admin-zzw6o9qm1",
        "pageId": "057",
        "productId": "p314",
        "xPct": 85.15676975567477,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-599cawuft",
        "pageId": "058",
        "productId": "p316",
        "xPct": 13.74947356856426,
        "yPct": 52.67817446442985
    },
    {
        "id": "admin-831x7w7mp",
        "pageId": "058",
        "productId": "p315",
        "xPct": 21.562021252571125,
        "yPct": 52.34666701198692
    },
    {
        "id": "admin-fu82og0qm",
        "pageId": "058",
        "productId": "p317",
        "xPct": 36.40586185218416,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-8yb6bodlr",
        "pageId": "059",
        "productId": "p318",
        "xPct": 65.15664768461721,
        "yPct": 55.88274650471147
    },
    {
        "id": "admin-l8sen3rbi",
        "pageId": "059",
        "productId": "p319",
        "xPct": 58.12535476901104,
        "yPct": 55.66174153641617
    },
    {
        "id": "admin-v8dkm4vda",
        "pageId": "059",
        "productId": "p320",
        "xPct": 80.93799400631107,
        "yPct": 55.4407365681209
    },
    {
        "id": "admin-kqycs8tpw",
        "pageId": "060",
        "productId": "p321",
        "xPct": 54.37472152539994,
        "yPct": 33.22973725444492
    },
    {
        "id": "admin-40zlm72nq",
        "pageId": "061",
        "productId": "p322",
        "xPct": 32.96895122650895,
        "yPct": 13.5602950761647
    },
    {
        "id": "admin-c5vy402m8",
        "pageId": "061",
        "productId": "p326",
        "xPct": 18.750114441616464,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-oh6ebb6as",
        "pageId": "061",
        "productId": "p323",
        "xPct": 46.71903515036103,
        "yPct": 30.135667698310954
    },
    {
        "id": "admin-ffmtm61f1",
        "pageId": "061",
        "productId": "p324",
        "xPct": 28.281422616104834,
        "yPct": 37.20782668376002
    },
    {
        "id": "admin-148b2ppqc",
        "pageId": "061",
        "productId": "p325",
        "xPct": 19.531369210017154,
        "yPct": 42.069935986256255
    },
    {
        "id": "admin-7effq5n1z",
        "pageId": "061",
        "productId": "p327",
        "xPct": 17.031353951134957,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-j4osp5cii",
        "pageId": "062",
        "productId": "p328",
        "xPct": 30.62457656601908,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-gehbg3pox",
        "pageId": "062",
        "productId": "p329",
        "xPct": 39.218379018426624,
        "yPct": 62.8444030060129
    },
    {
        "id": "admin-ngrngtzni",
        "pageId": "062",
        "productId": "p330",
        "xPct": 45.78091907299239,
        "yPct": 62.51289555356997
    },
    {
        "id": "admin-4243s5a4m",
        "pageId": "062",
        "productId": "p331",
        "xPct": 54.06221961803966,
        "yPct": 62.73390052186525
    },
    {
        "id": "admin-xvyf5a4n8",
        "pageId": "062",
        "productId": "p332",
        "xPct": 62.34352016308693,
        "yPct": 62.18138810112704
    },
    {
        "id": "admin-kft9t0lbz",
        "pageId": "062",
        "productId": "p333",
        "xPct": 68.59355831029242,
        "yPct": 62.95490549016053
    },
    {
        "id": "admin-d7z9lmsg2",
        "pageId": "063",
        "productId": "p334",
        "xPct": 43.125263215717865,
        "yPct": 68.4800296975426
    },
    {
        "id": "admin-zl79fisdp",
        "pageId": "063",
        "productId": "p335",
        "xPct": 49.531552316603495,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-yusyx35hb",
        "pageId": "063",
        "productId": "p336",
        "xPct": 57.969103815330904,
        "yPct": 68.36952721339497
    },
    {
        "id": "admin-45q5uftig",
        "pageId": "064",
        "productId": "p337",
        "xPct": 23.280781743052632,
        "yPct": 47.81606516193362
    },
    {
        "id": "admin-f3nt6tsna",
        "pageId": "026",
        "productId": "p1",
        "xPct": 87.33535967578521,
        "yPct": 26.98529988020466
    },
    {
        "id": "admin-70egvf9gn",
        "pageId": "016",
        "productId": "p3",
        "xPct": 83.08004052684905,
        "yPct": 43.322249465399295
    },
    {
        "id": "admin-o5y1ek63v",
        "pageId": "016",
        "productId": "p1",
        "xPct": 22.69503546099291,
        "yPct": 52.63717686046642
    },
    {
        "id": "admin-dct363f6r",
        "pageId": "017",
        "productId": "p3",
        "xPct": 18.135764944275582,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-maer2m4qb",
        "pageId": "017",
        "productId": "p4",
        "xPct": 79.33130699088146,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-4jy8119qe",
        "pageId": "017",
        "productId": "p5",
        "xPct": 45.49138804457954,
        "yPct": 32.28764316662748
    },
    {
        "id": "admin-dyfw63kc6",
        "pageId": "004",
        "productId": "p5",
        "xPct": 50.050658561296856,
        "yPct": 74.56308288270132
    },
    {
        "id": "admin-6q1wml9ef",
        "pageId": "062",
        "productId": "p279",
        "xPct": 43.90625,
        "yPct": 47.29095084344838
    },
    {
        "id": "admin-6k149m9cv",
        "pageId": "005",
        "productId": "p1",
        "xPct": 24.68765068146168,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-8i4minqc1",
        "pageId": "005",
        "productId": "p2",
        "xPct": 32.343947411788406,
        "yPct": 37.76033910449823
    },
    {
        "id": "admin-mop52jcxm",
        "pageId": "005",
        "productId": "p3",
        "xPct": 40.3127460494754,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-562qucdpu",
        "pageId": "005",
        "productId": "p4",
        "xPct": 49.06279945556308,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-cn55k93ly",
        "pageId": "005",
        "productId": "p5",
        "xPct": 57.344100000610354,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-7ghius64v",
        "pageId": "005",
        "productId": "p6",
        "xPct": 65.9379024530179,
        "yPct": 36.76581674716945
    },
    {
        "id": "admin-vf13h9c2b",
        "pageId": "005",
        "productId": "p7",
        "xPct": 74.53170490542544,
        "yPct": 37.870841588645874
    },
    {
        "id": "admin-zztyje9bt",
        "pageId": "005",
        "productId": "p8",
        "xPct": 24.06264686674113,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-jebf2fu38",
        "pageId": "005",
        "productId": "p9",
        "xPct": 32.81270027282881,
        "yPct": 46.49003535216192
    },
    {
        "id": "admin-wydbgjt8y",
        "pageId": "005",
        "productId": "p10",
        "xPct": 42.03150653995691,
        "yPct": 45.053503058242576
    },
    {
        "id": "admin-zqzbivr9j",
        "pageId": "005",
        "productId": "p11",
        "xPct": 48.75029754820281,
        "yPct": 46.15852789971899
    },
    {
        "id": "admin-2kp73mr4h",
        "pageId": "005",
        "productId": "p12",
        "xPct": 58.43785667637131,
        "yPct": 44.61149312165201
    },
    {
        "id": "admin-4in4cj6h3",
        "pageId": "005",
        "productId": "p13",
        "xPct": 67.187910082459,
        "yPct": 45.385010510685504
    },
    {
        "id": "admin-ctn4c21s0",
        "pageId": "005",
        "productId": "p14",
        "xPct": 74.37545395174531,
        "yPct": 45.274508026537866
    },
    {
        "id": "admin-168112lo2",
        "pageId": "006",
        "productId": "p57",
        "xPct": 64.84353542196912,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-yu0re5rb2",
        "pageId": "007",
        "productId": "p57",
        "xPct": 30.62518692130689,
        "yPct": 31.461697508082654
    },
    {
        "id": "admin-owmoa0pjx",
        "pageId": "007",
        "productId": "p58",
        "xPct": 52.031567575485695,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-in9lixb5i",
        "pageId": "007",
        "productId": "p59",
        "xPct": 76.40671634958709,
        "yPct": 27.262603110472266
    },
    {
        "id": "admin-uqn6zksxp",
        "pageId": "007",
        "productId": "p62",
        "xPct": 50.00030517764391,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-52khx9kh9",
        "pageId": "007",
        "productId": "p63",
        "xPct": 72.50044250758366,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-8ynylumh2",
        "pageId": "007",
        "productId": "p65",
        "xPct": 31.56269264338772,
        "yPct": 80.6353029537832
    },
    {
        "id": "admin-51imblzdk",
        "pageId": "007",
        "productId": "p66",
        "xPct": 48.75029754820281,
        "yPct": 77.87274085009216
    },
    {
        "id": "admin-tzg79uwgh",
        "pageId": "007",
        "productId": "p67",
        "xPct": 66.40665531405831,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-kfd1oajwt",
        "pageId": "007",
        "productId": "p61",
        "xPct": 26.562662125623326,
        "yPct": 55.55123905226854
    },
    {
        "id": "admin-024fmuhot",
        "pageId": "008",
        "productId": "p60",
        "xPct": 30.780827519699216,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-qbftx770z",
        "pageId": "008",
        "productId": "p68",
        "xPct": 50.78094959075678,
        "yPct": 26.931095658029342
    },
    {
        "id": "admin-ombvskxx6",
        "pageId": "008",
        "productId": "p64",
        "xPct": 30.62457656601908,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-w8xuykvbm",
        "pageId": "008",
        "productId": "p72",
        "xPct": 47.4996795634739,
        "yPct": 57.20877631448317
    },
    {
        "id": "admin-f7ezps9ja",
        "pageId": "008",
        "productId": "p76",
        "xPct": 72.96858501333627,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-mcldsy9si",
        "pageId": "008",
        "productId": "p79",
        "xPct": 53.43721580331911,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-3liqoxk8r",
        "pageId": "008",
        "productId": "p80",
        "xPct": 69.21856212501297,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-clvu8816m",
        "pageId": "009",
        "productId": "p69",
        "xPct": 30.937688828667163,
        "yPct": 25.715568332405287
    },
    {
        "id": "admin-yhd8dr1f9",
        "pageId": "009",
        "productId": "p70",
        "xPct": 48.43779564084254,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-ljkww2g64",
        "pageId": "009",
        "productId": "p71",
        "xPct": 69.53167438766106,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-i5i51bu3z",
        "pageId": "009",
        "productId": "p74",
        "xPct": 49.06279945556308,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-xue15cgx3",
        "pageId": "009",
        "productId": "p77",
        "xPct": 34.53146076331032,
        "yPct": 81.96133276355489
    },
    {
        "id": "admin-yw410fmxw",
        "pageId": "009",
        "productId": "p78",
        "xPct": 50.31280708500419,
        "yPct": 82.40334270014546
    },
    {
        "id": "admin-u4l09huoe",
        "pageId": "010",
        "productId": "p81",
        "xPct": 34.0620975469821,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-t0an1bphj",
        "pageId": "010",
        "productId": "p82",
        "xPct": 53.593466756999256,
        "yPct": 28.036120499505763
    },
    {
        "id": "admin-m4q6wzenf",
        "pageId": "010",
        "productId": "p83",
        "xPct": 76.09360408693901,
        "yPct": 28.367627951948688
    },
    {
        "id": "admin-ci6exe7m2",
        "pageId": "010",
        "productId": "p83",
        "xPct": 34.0620975469821,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-0pe4bow7m",
        "pageId": "010",
        "productId": "p86",
        "xPct": 55.31222724748076,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-xwq3isc4l",
        "pageId": "010",
        "productId": "p87",
        "xPct": 75.6248512258986,
        "yPct": 53.3411893693157
    },
    {
        "id": "admin-3ao2n6zpv",
        "pageId": "010",
        "productId": "p89",
        "xPct": 35.15585422274306,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-tp3uvqxi4",
        "pageId": "010",
        "productId": "p90",
        "xPct": 54.999725340120484,
        "yPct": 79.64078059645442
    },
    {
        "id": "admin-rdgd25kgj",
        "pageId": "010",
        "productId": "p91",
        "xPct": 74.99984741117804,
        "yPct": 79.75128308060206
    },
    {
        "id": "admin-4f3p0zi2u",
        "pageId": "011",
        "productId": "p84",
        "xPct": 35.78146839275142,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-t965ykkgi",
        "pageId": "011",
        "productId": "p88",
        "xPct": 55.46908855644871,
        "yPct": 26.8205931738817
    },
    {
        "id": "admin-vk40iuv3f",
        "pageId": "011",
        "productId": "p92",
        "xPct": 75.93796348854667,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-sf76zsnqz",
        "pageId": "012",
        "productId": "p106",
        "xPct": 70.31231880077394,
        "yPct": 77.20972594520632
    },
    {
        "id": "admin-kplnjcadp",
        "pageId": "012",
        "productId": "p105",
        "xPct": 78.5936193458212,
        "yPct": 77.76223836594451
    },
    {
        "id": "admin-fxah2rh81",
        "pageId": "012",
        "productId": "p107",
        "xPct": 85.93741416878765,
        "yPct": 77.43073091350159
    },
    {
        "id": "admin-i8szzrxkk",
        "pageId": "012",
        "productId": "p108",
        "xPct": 92.65620517703354,
        "yPct": 77.54123339764924
    },
    {
        "id": "admin-hwyz347kh",
        "pageId": "014",
        "productId": "p109",
        "xPct": 26.405800816655372,
        "yPct": 31.01968757149209
    },
    {
        "id": "admin-7q1yzumg3",
        "pageId": "014",
        "productId": "p110",
        "xPct": 57.812242506362956,
        "yPct": 30.467175150753878
    },
    {
        "id": "admin-dj3ddpja2",
        "pageId": "014",
        "productId": "p111",
        "xPct": 90.7811937328719,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-mtfxtxubb",
        "pageId": "014",
        "productId": "p112",
        "xPct": 26.249549862975236,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-tjsobhnew",
        "pageId": "014",
        "productId": "p113",
        "xPct": 58.59349727476364,
        "yPct": 57.540283766926095
    },
    {
        "id": "admin-j8faw51a4",
        "pageId": "014",
        "productId": "p114",
        "xPct": 90.31244087183148,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-xbml9w5sp",
        "pageId": "014",
        "productId": "p115",
        "xPct": 26.56205177033551,
        "yPct": 84.94489983554122
    },
    {
        "id": "admin-4hc9kjwzr",
        "pageId": "014",
        "productId": "p117",
        "xPct": 89.0624332423904,
        "yPct": 84.83439735139359
    },
    {
        "id": "admin-jed5ybaz1",
        "pageId": "015",
        "productId": "p118",
        "xPct": 25.31265449618223,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-o9y306tpv",
        "pageId": "015",
        "productId": "p119",
        "xPct": 58.281605722691175,
        "yPct": 29.804160245868026
    },
    {
        "id": "admin-sutbsb4tn",
        "pageId": "015",
        "productId": "p116",
        "xPct": 88.59429073663779,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-f6xt6y3jx",
        "pageId": "017",
        "productId": "p133",
        "xPct": 17.500106812175368,
        "yPct": 35.99229935813596
    },
    {
        "id": "admin-hhiihk76j",
        "pageId": "017",
        "productId": "p134",
        "xPct": 46.56278419668089,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-ulqwoock5",
        "pageId": "017",
        "productId": "p135",
        "xPct": 78.43797874742889,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-qc7hp25k5",
        "pageId": "017",
        "productId": "p140",
        "xPct": 17.96885967321578,
        "yPct": 59.75033344987892
    },
    {
        "id": "admin-3tq060c03",
        "pageId": "017",
        "productId": "p137",
        "xPct": 48.12529373348226,
        "yPct": 59.86083593402657
    },
    {
        "id": "admin-xga67szdv",
        "pageId": "017",
        "productId": "p138",
        "xPct": 78.12547684006861,
        "yPct": 59.30832351328835
    },
    {
        "id": "admin-apwm6ob45",
        "pageId": "017",
        "productId": "p139",
        "xPct": 18.59386348793633,
        "yPct": 82.18233773185018
    },
    {
        "id": "admin-xabx2wmdc",
        "pageId": "018",
        "productId": "p133",
        "xPct": 16.56199073480673,
        "yPct": 33.89275215933077
    },
    {
        "id": "admin-444y6459a",
        "pageId": "018",
        "productId": "p134",
        "xPct": 49.843443868675955,
        "yPct": 33.11923477029728
    },
    {
        "id": "admin-zibaxk97z",
        "pageId": "018",
        "productId": "p135",
        "xPct": 79.06237220686161,
        "yPct": 32.89822980200199
    },
    {
        "id": "admin-clvjy4b65",
        "pageId": "018",
        "productId": "p136",
        "xPct": 16.874492642167006,
        "yPct": 56.21425395715439
    },
    {
        "id": "admin-ryrqszz96",
        "pageId": "018",
        "productId": "p137",
        "xPct": 48.59343623923486,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-rgpq5tj6w",
        "pageId": "018",
        "productId": "p138",
        "xPct": 81.71863841942395,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-lwrij7nu0",
        "pageId": "018",
        "productId": "p139",
        "xPct": 15.780735966406045,
        "yPct": 74.99967626225347
    },
    {
        "id": "admin-73b9oelfw",
        "pageId": "018",
        "productId": "p140",
        "xPct": 50.4684476833965,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-t57n4snv8",
        "pageId": "022",
        "productId": "p152",
        "xPct": 21.09326839153071,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-j6sjxxhlc",
        "pageId": "022",
        "productId": "p153",
        "xPct": 49.9996948223561,
        "yPct": 24.279036038485945
    },
    {
        "id": "admin-houojboyy",
        "pageId": "022",
        "productId": "p154",
        "xPct": 78.74987029950134,
        "yPct": 23.063508712861886
    },
    {
        "id": "admin-vwb7cu6is",
        "pageId": "022",
        "productId": "p156",
        "xPct": 48.59343623923486,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-gu7kjy97k",
        "pageId": "022",
        "productId": "p157",
        "xPct": 81.71863841942395,
        "yPct": 50.6891297497723
    },
    {
        "id": "admin-9y3jq8o4h",
        "pageId": "022",
        "productId": "p158",
        "xPct": 35.624607083783474,
        "yPct": 82.62434766844075
    },
    {
        "id": "admin-qpj8pthi4",
        "pageId": "022",
        "productId": "p159",
        "xPct": 73.1248359670164,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-4k9la7smd",
        "pageId": "023",
        "productId": "p160",
        "xPct": 24.53139972778154,
        "yPct": 23.39501616530481
    },
    {
        "id": "admin-ea3sofhch",
        "pageId": "023",
        "productId": "p161",
        "xPct": 71.87543869286311,
        "yPct": 24.72104597507651
    },
    {
        "id": "admin-dlfncb8u9",
        "pageId": "023",
        "productId": "p166",
        "xPct": 24.21889782042127,
        "yPct": 56.103751473006746
    },
    {
        "id": "admin-438u5qrtc",
        "pageId": "023",
        "productId": "p162",
        "xPct": 71.4066858318227,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-kkuk6jpp5",
        "pageId": "025",
        "productId": "p184",
        "xPct": 27.656418801384287,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-mrcsjwz27",
        "pageId": "025",
        "productId": "p177",
        "xPct": 74.68795585910559,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-7q2exdgst",
        "pageId": "025",
        "productId": "p178",
        "xPct": 29.68768119922607,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-wmx65dvfz",
        "pageId": "025",
        "productId": "p179",
        "xPct": 73.9067010907049,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-n82aj5zdb",
        "pageId": "025",
        "productId": "p247",
        "xPct": 31.093939782347302,
        "yPct": 28.1466229836534
    },
    {
        "id": "admin-7ln23hajo",
        "pageId": "026",
        "productId": "p180",
        "xPct": 24.843291279854,
        "yPct": 24.83154845922415
    },
    {
        "id": "admin-y0ovfxhx2",
        "pageId": "027",
        "productId": "p207",
        "xPct": 45.000274659879516,
        "yPct": 33.00873228614963
    },
    {
        "id": "admin-jvi9catax",
        "pageId": "027",
        "productId": "p209",
        "xPct": 75.31295967382613,
        "yPct": 25.052553427519435
    },
    {
        "id": "admin-pemhbdh1g",
        "pageId": "027",
        "productId": "p208",
        "xPct": 82.18800163575217,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-ubkny3xut",
        "pageId": "028",
        "productId": "p216",
        "xPct": 11.718211170722476,
        "yPct": 67.04349740362328
    },
    {
        "id": "admin-v2xq8296q",
        "pageId": "028",
        "productId": "p217",
        "xPct": 42.49964904570951,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-83zhqst23",
        "pageId": "029",
        "productId": "p218",
        "xPct": 17.500106812175368,
        "yPct": 23.28451368115717
    },
    {
        "id": "admin-rkhpuy7bk",
        "pageId": "029",
        "productId": "p219",
        "xPct": 47.50028991876171,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-eb3l5gvae",
        "pageId": "029",
        "productId": "p220",
        "xPct": 77.34422207166793,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-2ezdqa48b",
        "pageId": "029",
        "productId": "p221",
        "xPct": 19.531369210017154,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-b2on9jegb",
        "pageId": "029",
        "productId": "p223",
        "xPct": 50.62530899236446,
        "yPct": 63.3969154267511
    },
    {
        "id": "admin-sgcw1s3l1",
        "pageId": "029",
        "productId": "p222",
        "xPct": 79.3754844695097,
        "yPct": 64.05993033163695
    },
    {
        "id": "admin-c9zw1e79u",
        "pageId": "031",
        "productId": "p224",
        "xPct": 28.59392452346511,
        "yPct": 25.49456336411
    },
    {
        "id": "admin-luu6d7hnb",
        "pageId": "031",
        "productId": "p225",
        "xPct": 28.59392452346511,
        "yPct": 41.95943350210861
    },
    {
        "id": "admin-iekfnxzo0",
        "pageId": "031",
        "productId": "p226",
        "xPct": 72.18794060022338,
        "yPct": 41.07541362892748
    },
    {
        "id": "admin-458epb2rk",
        "pageId": "031",
        "productId": "p228",
        "xPct": 29.53143024554593,
        "yPct": 68.59053218169025
    },
    {
        "id": "admin-ezabpbhjx",
        "pageId": "031",
        "productId": "p229",
        "xPct": 73.12544632230421,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-b6eu0osgf",
        "pageId": "031",
        "productId": "p230",
        "xPct": 29.68768119922607,
        "yPct": 83.39786505747423
    },
    {
        "id": "admin-hqm16mq4e",
        "pageId": "031",
        "productId": "p231",
        "xPct": 61.25037384261378,
        "yPct": 84.50288989895066
    },
    {
        "id": "admin-o156i2paf",
        "pageId": "033",
        "productId": "p236",
        "xPct": 17.500106812175368,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-12os4rfnu",
        "pageId": "033",
        "productId": "p237",
        "xPct": 50.62530899236446,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-had8ibxw5",
        "pageId": "033",
        "productId": "p238",
        "xPct": 80.46924114527066,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-qngsm9vwk",
        "pageId": "033",
        "productId": "p240",
        "xPct": 15.937597275373996,
        "yPct": 55.33023408397325
    },
    {
        "id": "admin-e62g5jtak",
        "pageId": "033",
        "productId": "p241",
        "xPct": 49.84405422396377,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-s3riy7oip",
        "pageId": "033",
        "productId": "p242",
        "xPct": 80.6254920989508,
        "yPct": 54.22520924249684
    },
    {
        "id": "admin-mnl981dmk",
        "pageId": "033",
        "productId": "p119",
        "xPct": 49.21905040924322,
        "yPct": 79.3092731440115
    },
    {
        "id": "admin-m8gu086z8",
        "pageId": "033",
        "productId": "p239",
        "xPct": 77.34422207166793,
        "yPct": 72.12661167441479
    },
    {
        "id": "admin-ad5t3mens",
        "pageId": "035",
        "productId": "p248",
        "xPct": 62.187879564694605,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-f98w73ujj",
        "pageId": "035",
        "productId": "p249",
        "xPct": 69.37542343398093,
        "yPct": 64.39143778407987
    },
    {
        "id": "admin-wde4n3dzu",
        "pageId": "035",
        "productId": "p250",
        "xPct": 77.03172016430764,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-e053atsca",
        "pageId": "036",
        "productId": "p253",
        "xPct": 64.68728446828898,
        "yPct": 66.71198995118036
    },
    {
        "id": "admin-93n5h8ek3",
        "pageId": "036",
        "productId": "p251",
        "xPct": 71.87482833757531,
        "yPct": 66.60148746703271
    },
    {
        "id": "admin-821z7j0ac",
        "pageId": "036",
        "productId": "p252",
        "xPct": 79.99987792894244,
        "yPct": 66.82249243532799
    },
    {
        "id": "admin-dsid7yqi5",
        "pageId": "038",
        "productId": "p254",
        "xPct": 38.2808732963458,
        "yPct": 21.074463998204333
    },
    {
        "id": "admin-ab48kl1ja",
        "pageId": "038",
        "productId": "p255",
        "xPct": 74.06234168909722,
        "yPct": 22.8425037445666
    },
    {
        "id": "admin-a83sjiuxg",
        "pageId": "038",
        "productId": "p256",
        "xPct": 37.49961852794512,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-szf3qvm5a",
        "pageId": "038",
        "productId": "p257",
        "xPct": 73.74983978173695,
        "yPct": 50.799632233919944
    },
    {
        "id": "admin-or7hu4hes",
        "pageId": "038",
        "productId": "p259",
        "xPct": 38.593375203706074,
        "yPct": 78.86726320742093
    },
    {
        "id": "admin-4hks8ex67",
        "pageId": "038",
        "productId": "p258",
        "xPct": 75.46860027221845,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-w0h3iju04",
        "pageId": "040",
        "productId": "p261",
        "xPct": 38.2808732963458,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-18r2glwr2",
        "pageId": "040",
        "productId": "p263",
        "xPct": 69.84356593973352,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-zq2mb3vgu",
        "pageId": "040",
        "productId": "p260",
        "xPct": 35.46835613010334,
        "yPct": 57.319278798630805
    },
    {
        "id": "admin-lhikqqgz4",
        "pageId": "040",
        "productId": "p262",
        "xPct": 70.31231880077394,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-7zcyo2ykc",
        "pageId": "042",
        "productId": "p265",
        "xPct": 39.68713187946704,
        "yPct": 19.858936672580278
    },
    {
        "id": "admin-029nqncqd",
        "pageId": "042",
        "productId": "p264",
        "xPct": 69.53106403237325,
        "yPct": 22.51099629212368
    },
    {
        "id": "admin-laqdzr1px",
        "pageId": "042",
        "productId": "p266",
        "xPct": 38.43712425002594,
        "yPct": 48.70008503511475
    },
    {
        "id": "admin-c29gtrtw3",
        "pageId": "044",
        "productId": "p267",
        "xPct": 23.124530789372493,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-rh4ug124k",
        "pageId": "044",
        "productId": "p268",
        "xPct": 51.2497024517972,
        "yPct": 28.92014037268689
    },
    {
        "id": "admin-kbcm3nvew",
        "pageId": "044",
        "productId": "p269",
        "xPct": 80.46863078998285,
        "yPct": 29.141145340982177
    },
    {
        "id": "admin-gwlk4d1rw",
        "pageId": "044",
        "productId": "p270",
        "xPct": 22.18702506729167,
        "yPct": 63.949427847489304
    },
    {
        "id": "admin-7a2ns82o0",
        "pageId": "044",
        "productId": "p271",
        "xPct": 54.68722343276021,
        "yPct": 64.17043281578458
    },
    {
        "id": "admin-ha9rqoi2q",
        "pageId": "044",
        "productId": "p259",
        "xPct": 80.46863078998285,
        "yPct": 64.28093529993222
    },
    {
        "id": "admin-42opuud1j",
        "pageId": "048",
        "productId": "p279",
        "xPct": 33.74959563962182,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-7m5qdx3nk",
        "pageId": "048",
        "productId": "p281",
        "xPct": 36.87461471322457,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-raffc43tw",
        "pageId": "048",
        "productId": "p285",
        "xPct": 38.43712425002594,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-sh4mppakb",
        "pageId": "048",
        "productId": "p283",
        "xPct": 37.34336757426498,
        "yPct": 84.17138244650774
    },
    {
        "id": "admin-7bapy41kd",
        "pageId": "048",
        "productId": "p70",
        "xPct": 83.12489700254518,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-7aw58tg60",
        "pageId": "048",
        "productId": "p282",
        "xPct": 84.68740653934655,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-89dzrfg62",
        "pageId": "048",
        "productId": "p286",
        "xPct": 84.68740653934655,
        "yPct": 61.84988064868412
    },
    {
        "id": "admin-zwej5vbgh",
        "pageId": "048",
        "productId": "p284",
        "xPct": 83.90615177094587,
        "yPct": 83.28736257332659
    },
    {
        "id": "admin-0tmmnp0nd",
        "pageId": "049",
        "productId": "p290",
        "xPct": 30.00018310658634,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-9us7e8jmf",
        "pageId": "049",
        "productId": "p291",
        "xPct": 35.31271553171101,
        "yPct": 83.50836754162188
    },
    {
        "id": "admin-ctpqy4286",
        "pageId": "049",
        "productId": "p292",
        "xPct": 45.625278474600066,
        "yPct": 85.93942219287
    },
    {
        "id": "admin-jnubsd7hb",
        "pageId": "049",
        "productId": "p293",
        "xPct": 56.7190961858898,
        "yPct": 85.16590480383651
    },
    {
        "id": "admin-irv2zs2j2",
        "pageId": "049",
        "productId": "p294",
        "xPct": 64.2191419625364,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-6w28jzxrb",
        "pageId": "049",
        "productId": "p295",
        "xPct": 68.90667057294051,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-37spcpij0",
        "pageId": "050",
        "productId": "p298",
        "xPct": 38.593375203706074,
        "yPct": 16.985872084741594
    },
    {
        "id": "admin-du9ogw60p",
        "pageId": "050",
        "productId": "p299",
        "xPct": 36.562112805864295,
        "yPct": 41.29641859722276
    },
    {
        "id": "admin-p0rjy2l3y",
        "pageId": "050",
        "productId": "p297",
        "xPct": 66.56229591245064,
        "yPct": 48.368577582671826
    },
    {
        "id": "admin-0ul99x2kb",
        "pageId": "050",
        "productId": "p296",
        "xPct": 58.74974822844378,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-utjc5d5vi",
        "pageId": "051",
        "productId": "p300",
        "xPct": 22.187635422579483,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-aouvnr5qi",
        "pageId": "051",
        "productId": "p302",
        "xPct": 48.12529373348226,
        "yPct": 38.423354009384084
    },
    {
        "id": "admin-1jkvz0q5q",
        "pageId": "051",
        "productId": "p301",
        "xPct": 32.81270027282881,
        "yPct": 50.468124781477016
    },
    {
        "id": "admin-97tgqjl4u",
        "pageId": "052",
        "productId": "p304",
        "xPct": 29.99957275129853,
        "yPct": 34.44526458006898
    },
    {
        "id": "admin-mle1h4i35",
        "pageId": "052",
        "productId": "p303",
        "xPct": 61.40601444100611,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-wigk8ldfo",
        "pageId": "053",
        "productId": "p305",
        "xPct": 22.812639237300033,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-e6w4k6mfz",
        "pageId": "054",
        "productId": "p308",
        "xPct": 66.09354305141024,
        "yPct": 75.8836961354346
    },
    {
        "id": "admin-kleywpxzs",
        "pageId": "054",
        "productId": "p309",
        "xPct": 72.81233405965612,
        "yPct": 76.21520358787754
    },
    {
        "id": "admin-fkp619pjt",
        "pageId": "054",
        "productId": "p307",
        "xPct": 88.12492752030957,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-iz92p8rnr",
        "pageId": "054",
        "productId": "p306",
        "xPct": 80.15612888262258,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-cisr8k5wm",
        "pageId": "056",
        "productId": "p310",
        "xPct": 69.06231117133284,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-7c11q1li4",
        "pageId": "057",
        "productId": "p313",
        "xPct": 61.09412288893365,
        "yPct": 50.57862726562467
    },
    {
        "id": "admin-gc8ywq5l5",
        "pageId": "057",
        "productId": "p312",
        "xPct": 38.75023651267403,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-kgecoeyf2",
        "pageId": "057",
        "productId": "p311",
        "xPct": 17.343855858495232,
        "yPct": 49.58410490829589
    },
    {
        "id": "admin-zzw6o9qm1",
        "pageId": "057",
        "productId": "p314",
        "xPct": 85.15676975567477,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-599cawuft",
        "pageId": "058",
        "productId": "p316",
        "xPct": 13.74947356856426,
        "yPct": 52.67817446442985
    },
    {
        "id": "admin-831x7w7mp",
        "pageId": "058",
        "productId": "p315",
        "xPct": 21.562021252571125,
        "yPct": 52.34666701198692
    },
    {
        "id": "admin-fu82og0qm",
        "pageId": "058",
        "productId": "p317",
        "xPct": 36.40586185218416,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-8yb6bodlr",
        "pageId": "059",
        "productId": "p318",
        "xPct": 65.15664768461721,
        "yPct": 55.88274650471147
    },
    {
        "id": "admin-l8sen3rbi",
        "pageId": "059",
        "productId": "p319",
        "xPct": 58.12535476901104,
        "yPct": 55.66174153641617
    },
    {
        "id": "admin-v8dkm4vda",
        "pageId": "059",
        "productId": "p320",
        "xPct": 80.93799400631107,
        "yPct": 55.4407365681209
    },
    {
        "id": "admin-kqycs8tpw",
        "pageId": "060",
        "productId": "p321",
        "xPct": 54.37472152539994,
        "yPct": 33.22973725444492
    },
    {
        "id": "admin-40zlm72nq",
        "pageId": "061",
        "productId": "p322",
        "xPct": 32.96895122650895,
        "yPct": 13.5602950761647
    },
    {
        "id": "admin-c5vy402m8",
        "pageId": "061",
        "productId": "p326",
        "xPct": 18.750114441616464,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-oh6ebb6as",
        "pageId": "061",
        "productId": "p323",
        "xPct": 46.71903515036103,
        "yPct": 30.135667698310954
    },
    {
        "id": "admin-ffmtm61f1",
        "pageId": "061",
        "productId": "p324",
        "xPct": 28.281422616104834,
        "yPct": 37.20782668376002
    },
    {
        "id": "admin-148b2ppqc",
        "pageId": "061",
        "productId": "p325",
        "xPct": 19.531369210017154,
        "yPct": 42.069935986256255
    },
    {
        "id": "admin-7effq5n1z",
        "pageId": "061",
        "productId": "p327",
        "xPct": 17.031353951134957,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-j4osp5cii",
        "pageId": "062",
        "productId": "p328",
        "xPct": 30.62457656601908,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-gehbg3pox",
        "pageId": "062",
        "productId": "p329",
        "xPct": 39.218379018426624,
        "yPct": 62.8444030060129
    },
    {
        "id": "admin-ngrngtzni",
        "pageId": "062",
        "productId": "p330",
        "xPct": 45.78091907299239,
        "yPct": 62.51289555356997
    },
    {
        "id": "admin-4243s5a4m",
        "pageId": "062",
        "productId": "p331",
        "xPct": 54.06221961803966,
        "yPct": 62.73390052186525
    },
    {
        "id": "admin-xvyf5a4n8",
        "pageId": "062",
        "productId": "p332",
        "xPct": 62.34352016308693,
        "yPct": 62.18138810112704
    },
    {
        "id": "admin-kft9t0lbz",
        "pageId": "062",
        "productId": "p333",
        "xPct": 68.59355831029242,
        "yPct": 62.95490549016053
    },
    {
        "id": "admin-d7z9lmsg2",
        "pageId": "063",
        "productId": "p334",
        "xPct": 43.125263215717865,
        "yPct": 68.4800296975426
    },
    {
        "id": "admin-zl79fisdp",
        "pageId": "063",
        "productId": "p335",
        "xPct": 49.531552316603495,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-yusyx35hb",
        "pageId": "063",
        "productId": "p336",
        "xPct": 57.969103815330904,
        "yPct": 68.36952721339497
    },
    {
        "id": "admin-45q5uftig",
        "pageId": "064",
        "productId": "p337",
        "xPct": 23.280781743052632,
        "yPct": 47.81606516193362
    },
    {
        "id": "admin-f3nt6tsna",
        "pageId": "026",
        "productId": "p1",
        "xPct": 87.33535967578521,
        "yPct": 26.98529988020466
    },
    {
        "id": "admin-70egvf9gn",
        "pageId": "016",
        "productId": "p3",
        "xPct": 83.08004052684905,
        "yPct": 43.322249465399295
    },
    {
        "id": "admin-o5y1ek63v",
        "pageId": "016",
        "productId": "p1",
        "xPct": 22.69503546099291,
        "yPct": 52.63717686046642
    },
    {
        "id": "admin-dct363f6r",
        "pageId": "017",
        "productId": "p3",
        "xPct": 18.135764944275582,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-maer2m4qb",
        "pageId": "017",
        "productId": "p4",
        "xPct": 79.33130699088146,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-4jy8119qe",
        "pageId": "017",
        "productId": "p5",
        "xPct": 45.49138804457954,
        "yPct": 32.28764316662748
    },
    {
        "id": "admin-dyfw63kc6",
        "pageId": "004",
        "productId": "p5",
        "xPct": 50.050658561296856,
        "yPct": 74.56308288270132
    },
    {
        "id": "admin-6q1wml9ef",
        "pageId": "062",
        "productId": "p279",
        "xPct": 43.90625,
        "yPct": 47.29095084344838
    },
    {
        "id": "admin-6k149m9cv",
        "pageId": "005",
        "productId": "p1",
        "xPct": 24.68765068146168,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-8i4minqc1",
        "pageId": "005",
        "productId": "p2",
        "xPct": 32.343947411788406,
        "yPct": 37.76033910449823
    },
    {
        "id": "admin-mop52jcxm",
        "pageId": "005",
        "productId": "p3",
        "xPct": 40.3127460494754,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-562qucdpu",
        "pageId": "005",
        "productId": "p4",
        "xPct": 49.06279945556308,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-cn55k93ly",
        "pageId": "005",
        "productId": "p5",
        "xPct": 57.344100000610354,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-7ghius64v",
        "pageId": "005",
        "productId": "p6",
        "xPct": 65.9379024530179,
        "yPct": 36.76581674716945
    },
    {
        "id": "admin-vf13h9c2b",
        "pageId": "005",
        "productId": "p7",
        "xPct": 74.53170490542544,
        "yPct": 37.870841588645874
    },
    {
        "id": "admin-zztyje9bt",
        "pageId": "005",
        "productId": "p8",
        "xPct": 24.06264686674113,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-jebf2fu38",
        "pageId": "005",
        "productId": "p9",
        "xPct": 32.81270027282881,
        "yPct": 46.49003535216192
    },
    {
        "id": "admin-wydbgjt8y",
        "pageId": "005",
        "productId": "p10",
        "xPct": 42.03150653995691,
        "yPct": 45.053503058242576
    },
    {
        "id": "admin-zqzbivr9j",
        "pageId": "005",
        "productId": "p11",
        "xPct": 48.75029754820281,
        "yPct": 46.15852789971899
    },
    {
        "id": "admin-2kp73mr4h",
        "pageId": "005",
        "productId": "p12",
        "xPct": 58.43785667637131,
        "yPct": 44.61149312165201
    },
    {
        "id": "admin-4in4cj6h3",
        "pageId": "005",
        "productId": "p13",
        "xPct": 67.187910082459,
        "yPct": 45.385010510685504
    },
    {
        "id": "admin-ctn4c21s0",
        "pageId": "005",
        "productId": "p14",
        "xPct": 74.37545395174531,
        "yPct": 45.274508026537866
    },
    {
        "id": "admin-168112lo2",
        "pageId": "006",
        "productId": "p57",
        "xPct": 64.84353542196912,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-yu0re5rb2",
        "pageId": "007",
        "productId": "p57",
        "xPct": 30.62518692130689,
        "yPct": 31.461697508082654
    },
    {
        "id": "admin-owmoa0pjx",
        "pageId": "007",
        "productId": "p58",
        "xPct": 52.031567575485695,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-in9lixb5i",
        "pageId": "007",
        "productId": "p59",
        "xPct": 76.40671634958709,
        "yPct": 27.262603110472266
    },
    {
        "id": "admin-uqn6zksxp",
        "pageId": "007",
        "productId": "p62",
        "xPct": 50.00030517764391,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-52khx9kh9",
        "pageId": "007",
        "productId": "p63",
        "xPct": 72.50044250758366,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-8ynylumh2",
        "pageId": "007",
        "productId": "p65",
        "xPct": 31.56269264338772,
        "yPct": 80.6353029537832
    },
    {
        "id": "admin-51imblzdk",
        "pageId": "007",
        "productId": "p66",
        "xPct": 48.75029754820281,
        "yPct": 77.87274085009216
    },
    {
        "id": "admin-tzg79uwgh",
        "pageId": "007",
        "productId": "p67",
        "xPct": 66.40665531405831,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-kfd1oajwt",
        "pageId": "007",
        "productId": "p61",
        "xPct": 26.562662125623326,
        "yPct": 55.55123905226854
    },
    {
        "id": "admin-024fmuhot",
        "pageId": "008",
        "productId": "p60",
        "xPct": 30.780827519699216,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-qbftx770z",
        "pageId": "008",
        "productId": "p68",
        "xPct": 50.78094959075678,
        "yPct": 26.931095658029342
    },
    {
        "id": "admin-ombvskxx6",
        "pageId": "008",
        "productId": "p64",
        "xPct": 30.62457656601908,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-w8xuykvbm",
        "pageId": "008",
        "productId": "p72",
        "xPct": 47.4996795634739,
        "yPct": 57.20877631448317
    },
    {
        "id": "admin-f7ezps9ja",
        "pageId": "008",
        "productId": "p76",
        "xPct": 72.96858501333627,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-mcldsy9si",
        "pageId": "008",
        "productId": "p79",
        "xPct": 53.43721580331911,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-3liqoxk8r",
        "pageId": "008",
        "productId": "p80",
        "xPct": 69.21856212501297,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-clvu8816m",
        "pageId": "009",
        "productId": "p69",
        "xPct": 30.937688828667163,
        "yPct": 25.715568332405287
    },
    {
        "id": "admin-yhd8dr1f9",
        "pageId": "009",
        "productId": "p70",
        "xPct": 48.43779564084254,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-ljkww2g64",
        "pageId": "009",
        "productId": "p71",
        "xPct": 69.53167438766106,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-i5i51bu3z",
        "pageId": "009",
        "productId": "p74",
        "xPct": 49.06279945556308,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-xue15cgx3",
        "pageId": "009",
        "productId": "p77",
        "xPct": 34.53146076331032,
        "yPct": 81.96133276355489
    },
    {
        "id": "admin-yw410fmxw",
        "pageId": "009",
        "productId": "p78",
        "xPct": 50.31280708500419,
        "yPct": 82.40334270014546
    },
    {
        "id": "admin-u4l09huoe",
        "pageId": "010",
        "productId": "p81",
        "xPct": 34.0620975469821,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-t0an1bphj",
        "pageId": "010",
        "productId": "p82",
        "xPct": 53.593466756999256,
        "yPct": 28.036120499505763
    },
    {
        "id": "admin-m4q6wzenf",
        "pageId": "010",
        "productId": "p83",
        "xPct": 76.09360408693901,
        "yPct": 28.367627951948688
    },
    {
        "id": "admin-ci6exe7m2",
        "pageId": "010",
        "productId": "p83",
        "xPct": 34.0620975469821,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-0pe4bow7m",
        "pageId": "010",
        "productId": "p86",
        "xPct": 55.31222724748076,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-xwq3isc4l",
        "pageId": "010",
        "productId": "p87",
        "xPct": 75.6248512258986,
        "yPct": 53.3411893693157
    },
    {
        "id": "admin-3ao2n6zpv",
        "pageId": "010",
        "productId": "p89",
        "xPct": 35.15585422274306,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-tp3uvqxi4",
        "pageId": "010",
        "productId": "p90",
        "xPct": 54.999725340120484,
        "yPct": 79.64078059645442
    },
    {
        "id": "admin-rdgd25kgj",
        "pageId": "010",
        "productId": "p91",
        "xPct": 74.99984741117804,
        "yPct": 79.75128308060206
    },
    {
        "id": "admin-4f3p0zi2u",
        "pageId": "011",
        "productId": "p84",
        "xPct": 35.78146839275142,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-t965ykkgi",
        "pageId": "011",
        "productId": "p88",
        "xPct": 55.46908855644871,
        "yPct": 26.8205931738817
    },
    {
        "id": "admin-vk40iuv3f",
        "pageId": "011",
        "productId": "p92",
        "xPct": 75.93796348854667,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-sf76zsnqz",
        "pageId": "012",
        "productId": "p106",
        "xPct": 70.31231880077394,
        "yPct": 77.20972594520632
    },
    {
        "id": "admin-kplnjcadp",
        "pageId": "012",
        "productId": "p105",
        "xPct": 78.5936193458212,
        "yPct": 77.76223836594451
    },
    {
        "id": "admin-fxah2rh81",
        "pageId": "012",
        "productId": "p107",
        "xPct": 85.93741416878765,
        "yPct": 77.43073091350159
    },
    {
        "id": "admin-i8szzrxkk",
        "pageId": "012",
        "productId": "p108",
        "xPct": 92.65620517703354,
        "yPct": 77.54123339764924
    },
    {
        "id": "admin-hwyz347kh",
        "pageId": "014",
        "productId": "p109",
        "xPct": 26.405800816655372,
        "yPct": 31.01968757149209
    },
    {
        "id": "admin-7q1yzumg3",
        "pageId": "014",
        "productId": "p110",
        "xPct": 57.812242506362956,
        "yPct": 30.467175150753878
    },
    {
        "id": "admin-dj3ddpja2",
        "pageId": "014",
        "productId": "p111",
        "xPct": 90.7811937328719,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-mtfxtxubb",
        "pageId": "014",
        "productId": "p112",
        "xPct": 26.249549862975236,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-tjsobhnew",
        "pageId": "014",
        "productId": "p113",
        "xPct": 58.59349727476364,
        "yPct": 57.540283766926095
    },
    {
        "id": "admin-j8faw51a4",
        "pageId": "014",
        "productId": "p114",
        "xPct": 90.31244087183148,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-xbml9w5sp",
        "pageId": "014",
        "productId": "p115",
        "xPct": 26.56205177033551,
        "yPct": 84.94489983554122
    },
    {
        "id": "admin-4hc9kjwzr",
        "pageId": "014",
        "productId": "p117",
        "xPct": 89.0624332423904,
        "yPct": 84.83439735139359
    },
    {
        "id": "admin-jed5ybaz1",
        "pageId": "015",
        "productId": "p118",
        "xPct": 25.31265449618223,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-o9y306tpv",
        "pageId": "015",
        "productId": "p119",
        "xPct": 58.281605722691175,
        "yPct": 29.804160245868026
    },
    {
        "id": "admin-sutbsb4tn",
        "pageId": "015",
        "productId": "p116",
        "xPct": 88.59429073663779,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-f6xt6y3jx",
        "pageId": "017",
        "productId": "p133",
        "xPct": 17.500106812175368,
        "yPct": 35.99229935813596
    },
    {
        "id": "admin-hhiihk76j",
        "pageId": "017",
        "productId": "p134",
        "xPct": 46.56278419668089,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-ulqwoock5",
        "pageId": "017",
        "productId": "p135",
        "xPct": 78.43797874742889,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-qc7hp25k5",
        "pageId": "017",
        "productId": "p140",
        "xPct": 17.96885967321578,
        "yPct": 59.75033344987892
    },
    {
        "id": "admin-3tq060c03",
        "pageId": "017",
        "productId": "p137",
        "xPct": 48.12529373348226,
        "yPct": 59.86083593402657
    },
    {
        "id": "admin-xga67szdv",
        "pageId": "017",
        "productId": "p138",
        "xPct": 78.12547684006861,
        "yPct": 59.30832351328835
    },
    {
        "id": "admin-apwm6ob45",
        "pageId": "017",
        "productId": "p139",
        "xPct": 18.59386348793633,
        "yPct": 82.18233773185018
    },
    {
        "id": "admin-xabx2wmdc",
        "pageId": "018",
        "productId": "p133",
        "xPct": 16.56199073480673,
        "yPct": 33.89275215933077
    },
    {
        "id": "admin-444y6459a",
        "pageId": "018",
        "productId": "p134",
        "xPct": 49.843443868675955,
        "yPct": 33.11923477029728
    },
    {
        "id": "admin-zibaxk97z",
        "pageId": "018",
        "productId": "p135",
        "xPct": 79.06237220686161,
        "yPct": 32.89822980200199
    },
    {
        "id": "admin-clvjy4b65",
        "pageId": "018",
        "productId": "p136",
        "xPct": 16.874492642167006,
        "yPct": 56.21425395715439
    },
    {
        "id": "admin-ryrqszz96",
        "pageId": "018",
        "productId": "p137",
        "xPct": 48.59343623923486,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-rgpq5tj6w",
        "pageId": "018",
        "productId": "p138",
        "xPct": 81.71863841942395,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-lwrij7nu0",
        "pageId": "018",
        "productId": "p139",
        "xPct": 15.780735966406045,
        "yPct": 74.99967626225347
    },
    {
        "id": "admin-73b9oelfw",
        "pageId": "018",
        "productId": "p140",
        "xPct": 50.4684476833965,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-t57n4snv8",
        "pageId": "022",
        "productId": "p152",
        "xPct": 21.09326839153071,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-j6sjxxhlc",
        "pageId": "022",
        "productId": "p153",
        "xPct": 49.9996948223561,
        "yPct": 24.279036038485945
    },
    {
        "id": "admin-houojboyy",
        "pageId": "022",
        "productId": "p154",
        "xPct": 78.74987029950134,
        "yPct": 23.063508712861886
    },
    {
        "id": "admin-vwb7cu6is",
        "pageId": "022",
        "productId": "p156",
        "xPct": 48.59343623923486,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-gu7kjy97k",
        "pageId": "022",
        "productId": "p157",
        "xPct": 81.71863841942395,
        "yPct": 50.6891297497723
    },
    {
        "id": "admin-9y3jq8o4h",
        "pageId": "022",
        "productId": "p158",
        "xPct": 35.624607083783474,
        "yPct": 82.62434766844075
    },
    {
        "id": "admin-qpj8pthi4",
        "pageId": "022",
        "productId": "p159",
        "xPct": 73.1248359670164,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-4k9la7smd",
        "pageId": "023",
        "productId": "p160",
        "xPct": 24.53139972778154,
        "yPct": 23.39501616530481
    },
    {
        "id": "admin-ea3sofhch",
        "pageId": "023",
        "productId": "p161",
        "xPct": 71.87543869286311,
        "yPct": 24.72104597507651
    },
    {
        "id": "admin-dlfncb8u9",
        "pageId": "023",
        "productId": "p166",
        "xPct": 24.21889782042127,
        "yPct": 56.103751473006746
    },
    {
        "id": "admin-438u5qrtc",
        "pageId": "023",
        "productId": "p162",
        "xPct": 71.4066858318227,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-kkuk6jpp5",
        "pageId": "025",
        "productId": "p184",
        "xPct": 27.656418801384287,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-mrcsjwz27",
        "pageId": "025",
        "productId": "p177",
        "xPct": 74.68795585910559,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-7q2exdgst",
        "pageId": "025",
        "productId": "p178",
        "xPct": 29.68768119922607,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-wmx65dvfz",
        "pageId": "025",
        "productId": "p179",
        "xPct": 73.9067010907049,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-n82aj5zdb",
        "pageId": "025",
        "productId": "p247",
        "xPct": 31.093939782347302,
        "yPct": 28.1466229836534
    },
    {
        "id": "admin-7ln23hajo",
        "pageId": "026",
        "productId": "p180",
        "xPct": 24.843291279854,
        "yPct": 24.83154845922415
    },
    {
        "id": "admin-y0ovfxhx2",
        "pageId": "027",
        "productId": "p207",
        "xPct": 45.000274659879516,
        "yPct": 33.00873228614963
    },
    {
        "id": "admin-jvi9catax",
        "pageId": "027",
        "productId": "p209",
        "xPct": 75.31295967382613,
        "yPct": 25.052553427519435
    },
    {
        "id": "admin-pemhbdh1g",
        "pageId": "027",
        "productId": "p208",
        "xPct": 82.18800163575217,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-ubkny3xut",
        "pageId": "028",
        "productId": "p216",
        "xPct": 11.718211170722476,
        "yPct": 67.04349740362328
    },
    {
        "id": "admin-v2xq8296q",
        "pageId": "028",
        "productId": "p217",
        "xPct": 42.49964904570951,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-83zhqst23",
        "pageId": "029",
        "productId": "p218",
        "xPct": 17.500106812175368,
        "yPct": 23.28451368115717
    },
    {
        "id": "admin-rkhpuy7bk",
        "pageId": "029",
        "productId": "p219",
        "xPct": 47.50028991876171,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-eb3l5gvae",
        "pageId": "029",
        "productId": "p220",
        "xPct": 77.34422207166793,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-2ezdqa48b",
        "pageId": "029",
        "productId": "p221",
        "xPct": 19.531369210017154,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-b2on9jegb",
        "pageId": "029",
        "productId": "p223",
        "xPct": 50.62530899236446,
        "yPct": 63.3969154267511
    },
    {
        "id": "admin-sgcw1s3l1",
        "pageId": "029",
        "productId": "p222",
        "xPct": 79.3754844695097,
        "yPct": 64.05993033163695
    },
    {
        "id": "admin-c9zw1e79u",
        "pageId": "031",
        "productId": "p224",
        "xPct": 28.59392452346511,
        "yPct": 25.49456336411
    },
    {
        "id": "admin-luu6d7hnb",
        "pageId": "031",
        "productId": "p225",
        "xPct": 28.59392452346511,
        "yPct": 41.95943350210861
    },
    {
        "id": "admin-iekfnxzo0",
        "pageId": "031",
        "productId": "p226",
        "xPct": 72.18794060022338,
        "yPct": 41.07541362892748
    },
    {
        "id": "admin-458epb2rk",
        "pageId": "031",
        "productId": "p228",
        "xPct": 29.53143024554593,
        "yPct": 68.59053218169025
    },
    {
        "id": "admin-ezabpbhjx",
        "pageId": "031",
        "productId": "p229",
        "xPct": 73.12544632230421,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-b6eu0osgf",
        "pageId": "031",
        "productId": "p230",
        "xPct": 29.68768119922607,
        "yPct": 83.39786505747423
    },
    {
        "id": "admin-hqm16mq4e",
        "pageId": "031",
        "productId": "p231",
        "xPct": 61.25037384261378,
        "yPct": 84.50288989895066
    },
    {
        "id": "admin-o156i2paf",
        "pageId": "033",
        "productId": "p236",
        "xPct": 17.500106812175368,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-12os4rfnu",
        "pageId": "033",
        "productId": "p237",
        "xPct": 50.62530899236446,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-had8ibxw5",
        "pageId": "033",
        "productId": "p238",
        "xPct": 80.46924114527066,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-qngsm9vwk",
        "pageId": "033",
        "productId": "p240",
        "xPct": 15.937597275373996,
        "yPct": 55.33023408397325
    },
    {
        "id": "admin-e62g5jtak",
        "pageId": "033",
        "productId": "p241",
        "xPct": 49.84405422396377,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-s3riy7oip",
        "pageId": "033",
        "productId": "p242",
        "xPct": 80.6254920989508,
        "yPct": 54.22520924249684
    },
    {
        "id": "admin-mnl981dmk",
        "pageId": "033",
        "productId": "p119",
        "xPct": 49.21905040924322,
        "yPct": 79.3092731440115
    },
    {
        "id": "admin-m8gu086z8",
        "pageId": "033",
        "productId": "p239",
        "xPct": 77.34422207166793,
        "yPct": 72.12661167441479
    },
    {
        "id": "admin-ad5t3mens",
        "pageId": "035",
        "productId": "p248",
        "xPct": 62.187879564694605,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-f98w73ujj",
        "pageId": "035",
        "productId": "p249",
        "xPct": 69.37542343398093,
        "yPct": 64.39143778407987
    },
    {
        "id": "admin-wde4n3dzu",
        "pageId": "035",
        "productId": "p250",
        "xPct": 77.03172016430764,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-e053atsca",
        "pageId": "036",
        "productId": "p253",
        "xPct": 64.68728446828898,
        "yPct": 66.71198995118036
    },
    {
        "id": "admin-93n5h8ek3",
        "pageId": "036",
        "productId": "p251",
        "xPct": 71.87482833757531,
        "yPct": 66.60148746703271
    },
    {
        "id": "admin-821z7j0ac",
        "pageId": "036",
        "productId": "p252",
        "xPct": 79.99987792894244,
        "yPct": 66.82249243532799
    },
    {
        "id": "admin-dsid7yqi5",
        "pageId": "038",
        "productId": "p254",
        "xPct": 38.2808732963458,
        "yPct": 21.074463998204333
    },
    {
        "id": "admin-ab48kl1ja",
        "pageId": "038",
        "productId": "p255",
        "xPct": 74.06234168909722,
        "yPct": 22.8425037445666
    },
    {
        "id": "admin-a83sjiuxg",
        "pageId": "038",
        "productId": "p256",
        "xPct": 37.49961852794512,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-szf3qvm5a",
        "pageId": "038",
        "productId": "p257",
        "xPct": 73.74983978173695,
        "yPct": 50.799632233919944
    },
    {
        "id": "admin-or7hu4hes",
        "pageId": "038",
        "productId": "p259",
        "xPct": 38.593375203706074,
        "yPct": 78.86726320742093
    },
    {
        "id": "admin-4hks8ex67",
        "pageId": "038",
        "productId": "p258",
        "xPct": 75.46860027221845,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-w0h3iju04",
        "pageId": "040",
        "productId": "p261",
        "xPct": 38.2808732963458,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-18r2glwr2",
        "pageId": "040",
        "productId": "p263",
        "xPct": 69.84356593973352,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-zq2mb3vgu",
        "pageId": "040",
        "productId": "p260",
        "xPct": 35.46835613010334,
        "yPct": 57.319278798630805
    },
    {
        "id": "admin-lhikqqgz4",
        "pageId": "040",
        "productId": "p262",
        "xPct": 70.31231880077394,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-7zcyo2ykc",
        "pageId": "042",
        "productId": "p265",
        "xPct": 39.68713187946704,
        "yPct": 19.858936672580278
    },
    {
        "id": "admin-029nqncqd",
        "pageId": "042",
        "productId": "p264",
        "xPct": 69.53106403237325,
        "yPct": 22.51099629212368
    },
    {
        "id": "admin-laqdzr1px",
        "pageId": "042",
        "productId": "p266",
        "xPct": 38.43712425002594,
        "yPct": 48.70008503511475
    },
    {
        "id": "admin-c29gtrtw3",
        "pageId": "044",
        "productId": "p267",
        "xPct": 23.124530789372493,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-rh4ug124k",
        "pageId": "044",
        "productId": "p268",
        "xPct": 51.2497024517972,
        "yPct": 28.92014037268689
    },
    {
        "id": "admin-kbcm3nvew",
        "pageId": "044",
        "productId": "p269",
        "xPct": 80.46863078998285,
        "yPct": 29.141145340982177
    },
    {
        "id": "admin-gwlk4d1rw",
        "pageId": "044",
        "productId": "p270",
        "xPct": 22.18702506729167,
        "yPct": 63.949427847489304
    },
    {
        "id": "admin-7a2ns82o0",
        "pageId": "044",
        "productId": "p271",
        "xPct": 54.68722343276021,
        "yPct": 64.17043281578458
    },
    {
        "id": "admin-ha9rqoi2q",
        "pageId": "044",
        "productId": "p259",
        "xPct": 80.46863078998285,
        "yPct": 64.28093529993222
    },
    {
        "id": "admin-42opuud1j",
        "pageId": "048",
        "productId": "p279",
        "xPct": 33.74959563962182,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-7m5qdx3nk",
        "pageId": "048",
        "productId": "p281",
        "xPct": 36.87461471322457,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-raffc43tw",
        "pageId": "048",
        "productId": "p285",
        "xPct": 38.43712425002594,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-sh4mppakb",
        "pageId": "048",
        "productId": "p283",
        "xPct": 37.34336757426498,
        "yPct": 84.17138244650774
    },
    {
        "id": "admin-7bapy41kd",
        "pageId": "048",
        "productId": "p70",
        "xPct": 83.12489700254518,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-7aw58tg60",
        "pageId": "048",
        "productId": "p282",
        "xPct": 84.68740653934655,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-89dzrfg62",
        "pageId": "048",
        "productId": "p286",
        "xPct": 84.68740653934655,
        "yPct": 61.84988064868412
    },
    {
        "id": "admin-zwej5vbgh",
        "pageId": "048",
        "productId": "p284",
        "xPct": 83.90615177094587,
        "yPct": 83.28736257332659
    },
    {
        "id": "admin-0tmmnp0nd",
        "pageId": "049",
        "productId": "p290",
        "xPct": 30.00018310658634,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-9us7e8jmf",
        "pageId": "049",
        "productId": "p291",
        "xPct": 35.31271553171101,
        "yPct": 83.50836754162188
    },
    {
        "id": "admin-ctpqy4286",
        "pageId": "049",
        "productId": "p292",
        "xPct": 45.625278474600066,
        "yPct": 85.93942219287
    },
    {
        "id": "admin-jnubsd7hb",
        "pageId": "049",
        "productId": "p293",
        "xPct": 56.7190961858898,
        "yPct": 85.16590480383651
    },
    {
        "id": "admin-irv2zs2j2",
        "pageId": "049",
        "productId": "p294",
        "xPct": 64.2191419625364,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-6w28jzxrb",
        "pageId": "049",
        "productId": "p295",
        "xPct": 68.90667057294051,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-37spcpij0",
        "pageId": "050",
        "productId": "p298",
        "xPct": 38.593375203706074,
        "yPct": 16.985872084741594
    },
    {
        "id": "admin-du9ogw60p",
        "pageId": "050",
        "productId": "p299",
        "xPct": 36.562112805864295,
        "yPct": 41.29641859722276
    },
    {
        "id": "admin-p0rjy2l3y",
        "pageId": "050",
        "productId": "p297",
        "xPct": 66.56229591245064,
        "yPct": 48.368577582671826
    },
    {
        "id": "admin-0ul99x2kb",
        "pageId": "050",
        "productId": "p296",
        "xPct": 58.74974822844378,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-utjc5d5vi",
        "pageId": "051",
        "productId": "p300",
        "xPct": 22.187635422579483,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-aouvnr5qi",
        "pageId": "051",
        "productId": "p302",
        "xPct": 48.12529373348226,
        "yPct": 38.423354009384084
    },
    {
        "id": "admin-1jkvz0q5q",
        "pageId": "051",
        "productId": "p301",
        "xPct": 32.81270027282881,
        "yPct": 50.468124781477016
    },
    {
        "id": "admin-97tgqjl4u",
        "pageId": "052",
        "productId": "p304",
        "xPct": 29.99957275129853,
        "yPct": 34.44526458006898
    },
    {
        "id": "admin-mle1h4i35",
        "pageId": "052",
        "productId": "p303",
        "xPct": 61.40601444100611,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-wigk8ldfo",
        "pageId": "053",
        "productId": "p305",
        "xPct": 22.812639237300033,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-e6w4k6mfz",
        "pageId": "054",
        "productId": "p308",
        "xPct": 66.09354305141024,
        "yPct": 75.8836961354346
    },
    {
        "id": "admin-kleywpxzs",
        "pageId": "054",
        "productId": "p309",
        "xPct": 72.81233405965612,
        "yPct": 76.21520358787754
    },
    {
        "id": "admin-fkp619pjt",
        "pageId": "054",
        "productId": "p307",
        "xPct": 88.12492752030957,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-iz92p8rnr",
        "pageId": "054",
        "productId": "p306",
        "xPct": 80.15612888262258,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-cisr8k5wm",
        "pageId": "056",
        "productId": "p310",
        "xPct": 69.06231117133284,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-7c11q1li4",
        "pageId": "057",
        "productId": "p313",
        "xPct": 61.09412288893365,
        "yPct": 50.57862726562467
    },
    {
        "id": "admin-gc8ywq5l5",
        "pageId": "057",
        "productId": "p312",
        "xPct": 38.75023651267403,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-kgecoeyf2",
        "pageId": "057",
        "productId": "p311",
        "xPct": 17.343855858495232,
        "yPct": 49.58410490829589
    },
    {
        "id": "admin-zzw6o9qm1",
        "pageId": "057",
        "productId": "p314",
        "xPct": 85.15676975567477,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-599cawuft",
        "pageId": "058",
        "productId": "p316",
        "xPct": 13.74947356856426,
        "yPct": 52.67817446442985
    },
    {
        "id": "admin-831x7w7mp",
        "pageId": "058",
        "productId": "p315",
        "xPct": 21.562021252571125,
        "yPct": 52.34666701198692
    },
    {
        "id": "admin-fu82og0qm",
        "pageId": "058",
        "productId": "p317",
        "xPct": 36.40586185218416,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-8yb6bodlr",
        "pageId": "059",
        "productId": "p318",
        "xPct": 65.15664768461721,
        "yPct": 55.88274650471147
    },
    {
        "id": "admin-l8sen3rbi",
        "pageId": "059",
        "productId": "p319",
        "xPct": 58.12535476901104,
        "yPct": 55.66174153641617
    },
    {
        "id": "admin-v8dkm4vda",
        "pageId": "059",
        "productId": "p320",
        "xPct": 80.93799400631107,
        "yPct": 55.4407365681209
    },
    {
        "id": "admin-kqycs8tpw",
        "pageId": "060",
        "productId": "p321",
        "xPct": 54.37472152539994,
        "yPct": 33.22973725444492
    },
    {
        "id": "admin-40zlm72nq",
        "pageId": "061",
        "productId": "p322",
        "xPct": 32.96895122650895,
        "yPct": 13.5602950761647
    },
    {
        "id": "admin-c5vy402m8",
        "pageId": "061",
        "productId": "p326",
        "xPct": 18.750114441616464,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-oh6ebb6as",
        "pageId": "061",
        "productId": "p323",
        "xPct": 46.71903515036103,
        "yPct": 30.135667698310954
    },
    {
        "id": "admin-ffmtm61f1",
        "pageId": "061",
        "productId": "p324",
        "xPct": 28.281422616104834,
        "yPct": 37.20782668376002
    },
    {
        "id": "admin-148b2ppqc",
        "pageId": "061",
        "productId": "p325",
        "xPct": 19.531369210017154,
        "yPct": 42.069935986256255
    },
    {
        "id": "admin-7effq5n1z",
        "pageId": "061",
        "productId": "p327",
        "xPct": 17.031353951134957,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-j4osp5cii",
        "pageId": "062",
        "productId": "p328",
        "xPct": 30.62457656601908,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-gehbg3pox",
        "pageId": "062",
        "productId": "p329",
        "xPct": 39.218379018426624,
        "yPct": 62.8444030060129
    },
    {
        "id": "admin-ngrngtzni",
        "pageId": "062",
        "productId": "p330",
        "xPct": 45.78091907299239,
        "yPct": 62.51289555356997
    },
    {
        "id": "admin-4243s5a4m",
        "pageId": "062",
        "productId": "p331",
        "xPct": 54.06221961803966,
        "yPct": 62.73390052186525
    },
    {
        "id": "admin-xvyf5a4n8",
        "pageId": "062",
        "productId": "p332",
        "xPct": 62.34352016308693,
        "yPct": 62.18138810112704
    },
    {
        "id": "admin-kft9t0lbz",
        "pageId": "062",
        "productId": "p333",
        "xPct": 68.59355831029242,
        "yPct": 62.95490549016053
    },
    {
        "id": "admin-d7z9lmsg2",
        "pageId": "063",
        "productId": "p334",
        "xPct": 43.125263215717865,
        "yPct": 68.4800296975426
    },
    {
        "id": "admin-zl79fisdp",
        "pageId": "063",
        "productId": "p335",
        "xPct": 49.531552316603495,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-yusyx35hb",
        "pageId": "063",
        "productId": "p336",
        "xPct": 57.969103815330904,
        "yPct": 68.36952721339497
    },
    {
        "id": "admin-45q5uftig",
        "pageId": "064",
        "productId": "p337",
        "xPct": 23.280781743052632,
        "yPct": 47.81606516193362
    },
    {
        "id": "admin-f3nt6tsna",
        "pageId": "026",
        "productId": "p1",
        "xPct": 87.33535967578521,
        "yPct": 26.98529988020466
    },
    {
        "id": "admin-70egvf9gn",
        "pageId": "016",
        "productId": "p3",
        "xPct": 83.08004052684905,
        "yPct": 43.322249465399295
    },
    {
        "id": "admin-o5y1ek63v",
        "pageId": "016",
        "productId": "p1",
        "xPct": 22.69503546099291,
        "yPct": 52.63717686046642
    },
    {
        "id": "admin-dct363f6r",
        "pageId": "017",
        "productId": "p3",
        "xPct": 18.135764944275582,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-maer2m4qb",
        "pageId": "017",
        "productId": "p4",
        "xPct": 79.33130699088146,
        "yPct": 33.43409576909728
    },
    {
        "id": "admin-4jy8119qe",
        "pageId": "017",
        "productId": "p5",
        "xPct": 45.49138804457954,
        "yPct": 32.28764316662748
    },
    {
        "id": "admin-dyfw63kc6",
        "pageId": "004",
        "productId": "p5",
        "xPct": 50.050658561296856,
        "yPct": 74.56308288270132
    },
    {
        "id": "admin-6q1wml9ef",
        "pageId": "062",
        "productId": "p279",
        "xPct": 43.90625,
        "yPct": 47.29095084344838
    },
    {
        "id": "admin-6k149m9cv",
        "pageId": "005",
        "productId": "p1",
        "xPct": 24.68765068146168,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-8i4minqc1",
        "pageId": "005",
        "productId": "p2",
        "xPct": 32.343947411788406,
        "yPct": 37.76033910449823
    },
    {
        "id": "admin-mop52jcxm",
        "pageId": "005",
        "productId": "p3",
        "xPct": 40.3127460494754,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-562qucdpu",
        "pageId": "005",
        "productId": "p4",
        "xPct": 49.06279945556308,
        "yPct": 37.42883165205531
    },
    {
        "id": "admin-cn55k93ly",
        "pageId": "005",
        "productId": "p5",
        "xPct": 57.344100000610354,
        "yPct": 37.539334136202946
    },
    {
        "id": "admin-7ghius64v",
        "pageId": "005",
        "productId": "p6",
        "xPct": 65.9379024530179,
        "yPct": 36.76581674716945
    },
    {
        "id": "admin-vf13h9c2b",
        "pageId": "005",
        "productId": "p7",
        "xPct": 74.53170490542544,
        "yPct": 37.870841588645874
    },
    {
        "id": "admin-zztyje9bt",
        "pageId": "005",
        "productId": "p8",
        "xPct": 24.06264686674113,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-jebf2fu38",
        "pageId": "005",
        "productId": "p9",
        "xPct": 32.81270027282881,
        "yPct": 46.49003535216192
    },
    {
        "id": "admin-wydbgjt8y",
        "pageId": "005",
        "productId": "p10",
        "xPct": 42.03150653995691,
        "yPct": 45.053503058242576
    },
    {
        "id": "admin-zqzbivr9j",
        "pageId": "005",
        "productId": "p11",
        "xPct": 48.75029754820281,
        "yPct": 46.15852789971899
    },
    {
        "id": "admin-2kp73mr4h",
        "pageId": "005",
        "productId": "p12",
        "xPct": 58.43785667637131,
        "yPct": 44.61149312165201
    },
    {
        "id": "admin-4in4cj6h3",
        "pageId": "005",
        "productId": "p13",
        "xPct": 67.187910082459,
        "yPct": 45.385010510685504
    },
    {
        "id": "admin-ctn4c21s0",
        "pageId": "005",
        "productId": "p14",
        "xPct": 74.37545395174531,
        "yPct": 45.274508026537866
    },
    {
        "id": "admin-168112lo2",
        "pageId": "006",
        "productId": "p57",
        "xPct": 64.84353542196912,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-yu0re5rb2",
        "pageId": "007",
        "productId": "p57",
        "xPct": 30.62518692130689,
        "yPct": 31.461697508082654
    },
    {
        "id": "admin-owmoa0pjx",
        "pageId": "007",
        "productId": "p58",
        "xPct": 52.031567575485695,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-in9lixb5i",
        "pageId": "007",
        "productId": "p59",
        "xPct": 76.40671634958709,
        "yPct": 27.262603110472266
    },
    {
        "id": "admin-uqn6zksxp",
        "pageId": "007",
        "productId": "p62",
        "xPct": 50.00030517764391,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-52khx9kh9",
        "pageId": "007",
        "productId": "p63",
        "xPct": 72.50044250758366,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-8ynylumh2",
        "pageId": "007",
        "productId": "p65",
        "xPct": 31.56269264338772,
        "yPct": 80.6353029537832
    },
    {
        "id": "admin-51imblzdk",
        "pageId": "007",
        "productId": "p66",
        "xPct": 48.75029754820281,
        "yPct": 77.87274085009216
    },
    {
        "id": "admin-tzg79uwgh",
        "pageId": "007",
        "productId": "p67",
        "xPct": 66.40665531405831,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-kfd1oajwt",
        "pageId": "007",
        "productId": "p61",
        "xPct": 26.562662125623326,
        "yPct": 55.55123905226854
    },
    {
        "id": "admin-024fmuhot",
        "pageId": "008",
        "productId": "p60",
        "xPct": 30.780827519699216,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-qbftx770z",
        "pageId": "008",
        "productId": "p68",
        "xPct": 50.78094959075678,
        "yPct": 26.931095658029342
    },
    {
        "id": "admin-ombvskxx6",
        "pageId": "008",
        "productId": "p64",
        "xPct": 30.62457656601908,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-w8xuykvbm",
        "pageId": "008",
        "productId": "p72",
        "xPct": 47.4996795634739,
        "yPct": 57.20877631448317
    },
    {
        "id": "admin-f7ezps9ja",
        "pageId": "008",
        "productId": "p76",
        "xPct": 72.96858501333627,
        "yPct": 54.888224147382694
    },
    {
        "id": "admin-mcldsy9si",
        "pageId": "008",
        "productId": "p79",
        "xPct": 53.43721580331911,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-3liqoxk8r",
        "pageId": "008",
        "productId": "p80",
        "xPct": 69.21856212501297,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-clvu8816m",
        "pageId": "009",
        "productId": "p69",
        "xPct": 30.937688828667163,
        "yPct": 25.715568332405287
    },
    {
        "id": "admin-yhd8dr1f9",
        "pageId": "009",
        "productId": "p70",
        "xPct": 48.43779564084254,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-ljkww2g64",
        "pageId": "009",
        "productId": "p71",
        "xPct": 69.53167438766106,
        "yPct": 25.826070816552928
    },
    {
        "id": "admin-i5i51bu3z",
        "pageId": "009",
        "productId": "p74",
        "xPct": 49.06279945556308,
        "yPct": 55.9932489888591
    },
    {
        "id": "admin-xue15cgx3",
        "pageId": "009",
        "productId": "p77",
        "xPct": 34.53146076331032,
        "yPct": 81.96133276355489
    },
    {
        "id": "admin-yw410fmxw",
        "pageId": "009",
        "productId": "p78",
        "xPct": 50.31280708500419,
        "yPct": 82.40334270014546
    },
    {
        "id": "admin-u4l09huoe",
        "pageId": "010",
        "productId": "p81",
        "xPct": 34.0620975469821,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-t0an1bphj",
        "pageId": "010",
        "productId": "p82",
        "xPct": 53.593466756999256,
        "yPct": 28.036120499505763
    },
    {
        "id": "admin-m4q6wzenf",
        "pageId": "010",
        "productId": "p83",
        "xPct": 76.09360408693901,
        "yPct": 28.367627951948688
    },
    {
        "id": "admin-ci6exe7m2",
        "pageId": "010",
        "productId": "p83",
        "xPct": 34.0620975469821,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-0pe4bow7m",
        "pageId": "010",
        "productId": "p86",
        "xPct": 55.31222724748076,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-xwq3isc4l",
        "pageId": "010",
        "productId": "p87",
        "xPct": 75.6248512258986,
        "yPct": 53.3411893693157
    },
    {
        "id": "admin-3ao2n6zpv",
        "pageId": "010",
        "productId": "p89",
        "xPct": 35.15585422274306,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-tp3uvqxi4",
        "pageId": "010",
        "productId": "p90",
        "xPct": 54.999725340120484,
        "yPct": 79.64078059645442
    },
    {
        "id": "admin-rdgd25kgj",
        "pageId": "010",
        "productId": "p91",
        "xPct": 74.99984741117804,
        "yPct": 79.75128308060206
    },
    {
        "id": "admin-4f3p0zi2u",
        "pageId": "011",
        "productId": "p84",
        "xPct": 35.78146839275142,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-t965ykkgi",
        "pageId": "011",
        "productId": "p88",
        "xPct": 55.46908855644871,
        "yPct": 26.8205931738817
    },
    {
        "id": "admin-vk40iuv3f",
        "pageId": "011",
        "productId": "p92",
        "xPct": 75.93796348854667,
        "yPct": 27.152100626324625
    },
    {
        "id": "admin-sf76zsnqz",
        "pageId": "012",
        "productId": "p106",
        "xPct": 70.31231880077394,
        "yPct": 77.20972594520632
    },
    {
        "id": "admin-kplnjcadp",
        "pageId": "012",
        "productId": "p105",
        "xPct": 78.5936193458212,
        "yPct": 77.76223836594451
    },
    {
        "id": "admin-fxah2rh81",
        "pageId": "012",
        "productId": "p107",
        "xPct": 85.93741416878765,
        "yPct": 77.43073091350159
    },
    {
        "id": "admin-i8szzrxkk",
        "pageId": "012",
        "productId": "p108",
        "xPct": 92.65620517703354,
        "yPct": 77.54123339764924
    },
    {
        "id": "admin-hwyz347kh",
        "pageId": "014",
        "productId": "p109",
        "xPct": 26.405800816655372,
        "yPct": 31.01968757149209
    },
    {
        "id": "admin-7q1yzumg3",
        "pageId": "014",
        "productId": "p110",
        "xPct": 57.812242506362956,
        "yPct": 30.467175150753878
    },
    {
        "id": "admin-dj3ddpja2",
        "pageId": "014",
        "productId": "p111",
        "xPct": 90.7811937328719,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-mtfxtxubb",
        "pageId": "014",
        "productId": "p112",
        "xPct": 26.249549862975236,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-tjsobhnew",
        "pageId": "014",
        "productId": "p113",
        "xPct": 58.59349727476364,
        "yPct": 57.540283766926095
    },
    {
        "id": "admin-j8faw51a4",
        "pageId": "014",
        "productId": "p114",
        "xPct": 90.31244087183148,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-xbml9w5sp",
        "pageId": "014",
        "productId": "p115",
        "xPct": 26.56205177033551,
        "yPct": 84.94489983554122
    },
    {
        "id": "admin-4hc9kjwzr",
        "pageId": "014",
        "productId": "p117",
        "xPct": 89.0624332423904,
        "yPct": 84.83439735139359
    },
    {
        "id": "admin-jed5ybaz1",
        "pageId": "015",
        "productId": "p118",
        "xPct": 25.31265449618223,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-o9y306tpv",
        "pageId": "015",
        "productId": "p119",
        "xPct": 58.281605722691175,
        "yPct": 29.804160245868026
    },
    {
        "id": "admin-sutbsb4tn",
        "pageId": "015",
        "productId": "p116",
        "xPct": 88.59429073663779,
        "yPct": 29.914662730015667
    },
    {
        "id": "admin-f6xt6y3jx",
        "pageId": "017",
        "productId": "p133",
        "xPct": 17.500106812175368,
        "yPct": 35.99229935813596
    },
    {
        "id": "admin-hhiihk76j",
        "pageId": "017",
        "productId": "p134",
        "xPct": 46.56278419668089,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-ulqwoock5",
        "pageId": "017",
        "productId": "p135",
        "xPct": 78.43797874742889,
        "yPct": 35.88179687398832
    },
    {
        "id": "admin-qc7hp25k5",
        "pageId": "017",
        "productId": "p140",
        "xPct": 17.96885967321578,
        "yPct": 59.75033344987892
    },
    {
        "id": "admin-3tq060c03",
        "pageId": "017",
        "productId": "p137",
        "xPct": 48.12529373348226,
        "yPct": 59.86083593402657
    },
    {
        "id": "admin-xga67szdv",
        "pageId": "017",
        "productId": "p138",
        "xPct": 78.12547684006861,
        "yPct": 59.30832351328835
    },
    {
        "id": "admin-apwm6ob45",
        "pageId": "017",
        "productId": "p139",
        "xPct": 18.59386348793633,
        "yPct": 82.18233773185018
    },
    {
        "id": "admin-xabx2wmdc",
        "pageId": "018",
        "productId": "p133",
        "xPct": 16.56199073480673,
        "yPct": 33.89275215933077
    },
    {
        "id": "admin-444y6459a",
        "pageId": "018",
        "productId": "p134",
        "xPct": 49.843443868675955,
        "yPct": 33.11923477029728
    },
    {
        "id": "admin-zibaxk97z",
        "pageId": "018",
        "productId": "p135",
        "xPct": 79.06237220686161,
        "yPct": 32.89822980200199
    },
    {
        "id": "admin-clvjy4b65",
        "pageId": "018",
        "productId": "p136",
        "xPct": 16.874492642167006,
        "yPct": 56.21425395715439
    },
    {
        "id": "admin-ryrqszz96",
        "pageId": "018",
        "productId": "p137",
        "xPct": 48.59343623923486,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-rgpq5tj6w",
        "pageId": "018",
        "productId": "p138",
        "xPct": 81.71863841942395,
        "yPct": 56.87726886204024
    },
    {
        "id": "admin-lwrij7nu0",
        "pageId": "018",
        "productId": "p139",
        "xPct": 15.780735966406045,
        "yPct": 74.99967626225347
    },
    {
        "id": "admin-73b9oelfw",
        "pageId": "018",
        "productId": "p140",
        "xPct": 50.4684476833965,
        "yPct": 80.19329301719263
    },
    {
        "id": "admin-t57n4snv8",
        "pageId": "022",
        "productId": "p152",
        "xPct": 21.09326839153071,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-j6sjxxhlc",
        "pageId": "022",
        "productId": "p153",
        "xPct": 49.9996948223561,
        "yPct": 24.279036038485945
    },
    {
        "id": "admin-houojboyy",
        "pageId": "022",
        "productId": "p154",
        "xPct": 78.74987029950134,
        "yPct": 23.063508712861886
    },
    {
        "id": "admin-vwb7cu6is",
        "pageId": "022",
        "productId": "p156",
        "xPct": 48.59343623923486,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-gu7kjy97k",
        "pageId": "022",
        "productId": "p157",
        "xPct": 81.71863841942395,
        "yPct": 50.6891297497723
    },
    {
        "id": "admin-9y3jq8o4h",
        "pageId": "022",
        "productId": "p158",
        "xPct": 35.624607083783474,
        "yPct": 82.62434766844075
    },
    {
        "id": "admin-qpj8pthi4",
        "pageId": "022",
        "productId": "p159",
        "xPct": 73.1248359670164,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-4k9la7smd",
        "pageId": "023",
        "productId": "p160",
        "xPct": 24.53139972778154,
        "yPct": 23.39501616530481
    },
    {
        "id": "admin-ea3sofhch",
        "pageId": "023",
        "productId": "p161",
        "xPct": 71.87543869286311,
        "yPct": 24.72104597507651
    },
    {
        "id": "admin-dlfncb8u9",
        "pageId": "023",
        "productId": "p166",
        "xPct": 24.21889782042127,
        "yPct": 56.103751473006746
    },
    {
        "id": "admin-438u5qrtc",
        "pageId": "023",
        "productId": "p162",
        "xPct": 71.4066858318227,
        "yPct": 56.43525892544967
    },
    {
        "id": "admin-kkuk6jpp5",
        "pageId": "025",
        "productId": "p184",
        "xPct": 27.656418801384287,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-mrcsjwz27",
        "pageId": "025",
        "productId": "p177",
        "xPct": 74.68795585910559,
        "yPct": 49.252597455852964
    },
    {
        "id": "admin-7q2exdgst",
        "pageId": "025",
        "productId": "p178",
        "xPct": 29.68768119922607,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-wmx65dvfz",
        "pageId": "025",
        "productId": "p179",
        "xPct": 73.9067010907049,
        "yPct": 74.66816880981055
    },
    {
        "id": "admin-n82aj5zdb",
        "pageId": "025",
        "productId": "p247",
        "xPct": 31.093939782347302,
        "yPct": 28.1466229836534
    },
    {
        "id": "admin-7ln23hajo",
        "pageId": "026",
        "productId": "p180",
        "xPct": 24.843291279854,
        "yPct": 24.83154845922415
    },
    {
        "id": "admin-y0ovfxhx2",
        "pageId": "027",
        "productId": "p207",
        "xPct": 45.000274659879516,
        "yPct": 33.00873228614963
    },
    {
        "id": "admin-jvi9catax",
        "pageId": "027",
        "productId": "p209",
        "xPct": 75.31295967382613,
        "yPct": 25.052553427519435
    },
    {
        "id": "admin-pemhbdh1g",
        "pageId": "027",
        "productId": "p208",
        "xPct": 82.18800163575217,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-ubkny3xut",
        "pageId": "028",
        "productId": "p216",
        "xPct": 11.718211170722476,
        "yPct": 67.04349740362328
    },
    {
        "id": "admin-v2xq8296q",
        "pageId": "028",
        "productId": "p217",
        "xPct": 42.49964904570951,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-83zhqst23",
        "pageId": "029",
        "productId": "p218",
        "xPct": 17.500106812175368,
        "yPct": 23.28451368115717
    },
    {
        "id": "admin-rkhpuy7bk",
        "pageId": "029",
        "productId": "p219",
        "xPct": 47.50028991876171,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-eb3l5gvae",
        "pageId": "029",
        "productId": "p220",
        "xPct": 77.34422207166793,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-2ezdqa48b",
        "pageId": "029",
        "productId": "p221",
        "xPct": 19.531369210017154,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-b2on9jegb",
        "pageId": "029",
        "productId": "p223",
        "xPct": 50.62530899236446,
        "yPct": 63.3969154267511
    },
    {
        "id": "admin-sgcw1s3l1",
        "pageId": "029",
        "productId": "p222",
        "xPct": 79.3754844695097,
        "yPct": 64.05993033163695
    },
    {
        "id": "admin-c9zw1e79u",
        "pageId": "031",
        "productId": "p224",
        "xPct": 28.59392452346511,
        "yPct": 25.49456336411
    },
    {
        "id": "admin-luu6d7hnb",
        "pageId": "031",
        "productId": "p225",
        "xPct": 28.59392452346511,
        "yPct": 41.95943350210861
    },
    {
        "id": "admin-iekfnxzo0",
        "pageId": "031",
        "productId": "p226",
        "xPct": 72.18794060022338,
        "yPct": 41.07541362892748
    },
    {
        "id": "admin-458epb2rk",
        "pageId": "031",
        "productId": "p228",
        "xPct": 29.53143024554593,
        "yPct": 68.59053218169025
    },
    {
        "id": "admin-ezabpbhjx",
        "pageId": "031",
        "productId": "p229",
        "xPct": 73.12544632230421,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-b6eu0osgf",
        "pageId": "031",
        "productId": "p230",
        "xPct": 29.68768119922607,
        "yPct": 83.39786505747423
    },
    {
        "id": "admin-hqm16mq4e",
        "pageId": "031",
        "productId": "p231",
        "xPct": 61.25037384261378,
        "yPct": 84.50288989895066
    },
    {
        "id": "admin-o156i2paf",
        "pageId": "033",
        "productId": "p236",
        "xPct": 17.500106812175368,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-12os4rfnu",
        "pageId": "033",
        "productId": "p237",
        "xPct": 50.62530899236446,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-had8ibxw5",
        "pageId": "033",
        "productId": "p238",
        "xPct": 80.46924114527066,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-qngsm9vwk",
        "pageId": "033",
        "productId": "p240",
        "xPct": 15.937597275373996,
        "yPct": 55.33023408397325
    },
    {
        "id": "admin-e62g5jtak",
        "pageId": "033",
        "productId": "p241",
        "xPct": 49.84405422396377,
        "yPct": 54.335711726644476
    },
    {
        "id": "admin-s3riy7oip",
        "pageId": "033",
        "productId": "p242",
        "xPct": 80.6254920989508,
        "yPct": 54.22520924249684
    },
    {
        "id": "admin-mnl981dmk",
        "pageId": "033",
        "productId": "p119",
        "xPct": 49.21905040924322,
        "yPct": 79.3092731440115
    },
    {
        "id": "admin-m8gu086z8",
        "pageId": "033",
        "productId": "p239",
        "xPct": 77.34422207166793,
        "yPct": 72.12661167441479
    },
    {
        "id": "admin-ad5t3mens",
        "pageId": "035",
        "productId": "p248",
        "xPct": 62.187879564694605,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-f98w73ujj",
        "pageId": "035",
        "productId": "p249",
        "xPct": 69.37542343398093,
        "yPct": 64.39143778407987
    },
    {
        "id": "admin-wde4n3dzu",
        "pageId": "035",
        "productId": "p250",
        "xPct": 77.03172016430764,
        "yPct": 64.83344772067043
    },
    {
        "id": "admin-e053atsca",
        "pageId": "036",
        "productId": "p253",
        "xPct": 64.68728446828898,
        "yPct": 66.71198995118036
    },
    {
        "id": "admin-93n5h8ek3",
        "pageId": "036",
        "productId": "p251",
        "xPct": 71.87482833757531,
        "yPct": 66.60148746703271
    },
    {
        "id": "admin-821z7j0ac",
        "pageId": "036",
        "productId": "p252",
        "xPct": 79.99987792894244,
        "yPct": 66.82249243532799
    },
    {
        "id": "admin-dsid7yqi5",
        "pageId": "038",
        "productId": "p254",
        "xPct": 38.2808732963458,
        "yPct": 21.074463998204333
    },
    {
        "id": "admin-ab48kl1ja",
        "pageId": "038",
        "productId": "p255",
        "xPct": 74.06234168909722,
        "yPct": 22.8425037445666
    },
    {
        "id": "admin-a83sjiuxg",
        "pageId": "038",
        "productId": "p256",
        "xPct": 37.49961852794512,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-szf3qvm5a",
        "pageId": "038",
        "productId": "p257",
        "xPct": 73.74983978173695,
        "yPct": 50.799632233919944
    },
    {
        "id": "admin-or7hu4hes",
        "pageId": "038",
        "productId": "p259",
        "xPct": 38.593375203706074,
        "yPct": 78.86726320742093
    },
    {
        "id": "admin-4hks8ex67",
        "pageId": "038",
        "productId": "p258",
        "xPct": 75.46860027221845,
        "yPct": 78.97776569156856
    },
    {
        "id": "admin-w0h3iju04",
        "pageId": "040",
        "productId": "p261",
        "xPct": 38.2808732963458,
        "yPct": 28.699135404391612
    },
    {
        "id": "admin-18r2glwr2",
        "pageId": "040",
        "productId": "p263",
        "xPct": 69.84356593973352,
        "yPct": 28.47813043609633
    },
    {
        "id": "admin-zq2mb3vgu",
        "pageId": "040",
        "productId": "p260",
        "xPct": 35.46835613010334,
        "yPct": 57.319278798630805
    },
    {
        "id": "admin-lhikqqgz4",
        "pageId": "040",
        "productId": "p262",
        "xPct": 70.31231880077394,
        "yPct": 57.871791219369015
    },
    {
        "id": "admin-7zcyo2ykc",
        "pageId": "042",
        "productId": "p265",
        "xPct": 39.68713187946704,
        "yPct": 19.858936672580278
    },
    {
        "id": "admin-029nqncqd",
        "pageId": "042",
        "productId": "p264",
        "xPct": 69.53106403237325,
        "yPct": 22.51099629212368
    },
    {
        "id": "admin-laqdzr1px",
        "pageId": "042",
        "productId": "p266",
        "xPct": 38.43712425002594,
        "yPct": 48.70008503511475
    },
    {
        "id": "admin-c29gtrtw3",
        "pageId": "044",
        "productId": "p267",
        "xPct": 23.124530789372493,
        "yPct": 29.583155277572743
    },
    {
        "id": "admin-rh4ug124k",
        "pageId": "044",
        "productId": "p268",
        "xPct": 51.2497024517972,
        "yPct": 28.92014037268689
    },
    {
        "id": "admin-kbcm3nvew",
        "pageId": "044",
        "productId": "p269",
        "xPct": 80.46863078998285,
        "yPct": 29.141145340982177
    },
    {
        "id": "admin-gwlk4d1rw",
        "pageId": "044",
        "productId": "p270",
        "xPct": 22.18702506729167,
        "yPct": 63.949427847489304
    },
    {
        "id": "admin-7a2ns82o0",
        "pageId": "044",
        "productId": "p271",
        "xPct": 54.68722343276021,
        "yPct": 64.17043281578458
    },
    {
        "id": "admin-ha9rqoi2q",
        "pageId": "044",
        "productId": "p259",
        "xPct": 80.46863078998285,
        "yPct": 64.28093529993222
    },
    {
        "id": "admin-42opuud1j",
        "pageId": "048",
        "productId": "p279",
        "xPct": 33.74959563962182,
        "yPct": 25.60506584825764
    },
    {
        "id": "admin-7m5qdx3nk",
        "pageId": "048",
        "productId": "p281",
        "xPct": 36.87461471322457,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-raffc43tw",
        "pageId": "048",
        "productId": "p285",
        "xPct": 38.43712425002594,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-sh4mppakb",
        "pageId": "048",
        "productId": "p283",
        "xPct": 37.34336757426498,
        "yPct": 84.17138244650774
    },
    {
        "id": "admin-7bapy41kd",
        "pageId": "048",
        "productId": "p70",
        "xPct": 83.12489700254518,
        "yPct": 21.958483871385468
    },
    {
        "id": "admin-7aw58tg60",
        "pageId": "048",
        "productId": "p282",
        "xPct": 84.68740653934655,
        "yPct": 43.616970764323234
    },
    {
        "id": "admin-89dzrfg62",
        "pageId": "048",
        "productId": "p286",
        "xPct": 84.68740653934655,
        "yPct": 61.84988064868412
    },
    {
        "id": "admin-zwej5vbgh",
        "pageId": "048",
        "productId": "p284",
        "xPct": 83.90615177094587,
        "yPct": 83.28736257332659
    },
    {
        "id": "admin-0tmmnp0nd",
        "pageId": "049",
        "productId": "p290",
        "xPct": 30.00018310658634,
        "yPct": 78.42525327083037
    },
    {
        "id": "admin-9us7e8jmf",
        "pageId": "049",
        "productId": "p291",
        "xPct": 35.31271553171101,
        "yPct": 83.50836754162188
    },
    {
        "id": "admin-ctpqy4286",
        "pageId": "049",
        "productId": "p292",
        "xPct": 45.625278474600066,
        "yPct": 85.93942219287
    },
    {
        "id": "admin-jnubsd7hb",
        "pageId": "049",
        "productId": "p293",
        "xPct": 56.7190961858898,
        "yPct": 85.16590480383651
    },
    {
        "id": "admin-irv2zs2j2",
        "pageId": "049",
        "productId": "p294",
        "xPct": 64.2191419625364,
        "yPct": 81.07731289037376
    },
    {
        "id": "admin-6w28jzxrb",
        "pageId": "049",
        "productId": "p295",
        "xPct": 68.90667057294051,
        "yPct": 75.33118371469641
    },
    {
        "id": "admin-37spcpij0",
        "pageId": "050",
        "productId": "p298",
        "xPct": 38.593375203706074,
        "yPct": 16.985872084741594
    },
    {
        "id": "admin-du9ogw60p",
        "pageId": "050",
        "productId": "p299",
        "xPct": 36.562112805864295,
        "yPct": 41.29641859722276
    },
    {
        "id": "admin-p0rjy2l3y",
        "pageId": "050",
        "productId": "p297",
        "xPct": 66.56229591245064,
        "yPct": 48.368577582671826
    },
    {
        "id": "admin-0ul99x2kb",
        "pageId": "050",
        "productId": "p296",
        "xPct": 58.74974822844378,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-utjc5d5vi",
        "pageId": "051",
        "productId": "p300",
        "xPct": 22.187635422579483,
        "yPct": 28.257125467801043
    },
    {
        "id": "admin-aouvnr5qi",
        "pageId": "051",
        "productId": "p302",
        "xPct": 48.12529373348226,
        "yPct": 38.423354009384084
    },
    {
        "id": "admin-1jkvz0q5q",
        "pageId": "051",
        "productId": "p301",
        "xPct": 32.81270027282881,
        "yPct": 50.468124781477016
    },
    {
        "id": "admin-97tgqjl4u",
        "pageId": "052",
        "productId": "p304",
        "xPct": 29.99957275129853,
        "yPct": 34.44526458006898
    },
    {
        "id": "admin-mle1h4i35",
        "pageId": "052",
        "productId": "p303",
        "xPct": 61.40601444100611,
        "yPct": 43.064458343585024
    },
    {
        "id": "admin-wigk8ldfo",
        "pageId": "053",
        "productId": "p305",
        "xPct": 22.812639237300033,
        "yPct": 67.15399988777091
    },
    {
        "id": "admin-e6w4k6mfz",
        "pageId": "054",
        "productId": "p308",
        "xPct": 66.09354305141024,
        "yPct": 75.8836961354346
    },
    {
        "id": "admin-kleywpxzs",
        "pageId": "054",
        "productId": "p309",
        "xPct": 72.81233405965612,
        "yPct": 76.21520358787754
    },
    {
        "id": "admin-fkp619pjt",
        "pageId": "054",
        "productId": "p307",
        "xPct": 88.12492752030957,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-iz92p8rnr",
        "pageId": "054",
        "productId": "p306",
        "xPct": 80.15612888262258,
        "yPct": 75.99419861958225
    },
    {
        "id": "admin-cisr8k5wm",
        "pageId": "056",
        "productId": "p310",
        "xPct": 69.06231117133284,
        "yPct": 25.936573300700566
    },
    {
        "id": "admin-7c11q1li4",
        "pageId": "057",
        "productId": "p313",
        "xPct": 61.09412288893365,
        "yPct": 50.57862726562467
    },
    {
        "id": "admin-gc8ywq5l5",
        "pageId": "057",
        "productId": "p312",
        "xPct": 38.75023651267403,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-kgecoeyf2",
        "pageId": "057",
        "productId": "p311",
        "xPct": 17.343855858495232,
        "yPct": 49.58410490829589
    },
    {
        "id": "admin-zzw6o9qm1",
        "pageId": "057",
        "productId": "p314",
        "xPct": 85.15676975567477,
        "yPct": 49.80510987659117
    },
    {
        "id": "admin-599cawuft",
        "pageId": "058",
        "productId": "p316",
        "xPct": 13.74947356856426,
        "yPct": 52.67817446442985
    },
    {
        "id": "admin-831x7w7mp",
        "pageId": "058",
        "productId": "p315",
        "xPct": 21.562021252571125,
        "yPct": 52.34666701198692
    },
    {
        "id": "admin-fu82og0qm",
        "pageId": "058",
        "productId": "p317",
        "xPct": 36.40586185218416,
        "yPct": 52.45716949613457
    },
    {
        "id": "admin-8yb6bodlr",
        "pageId": "059",
        "productId": "p318",
        "xPct": 65.15664768461721,
        "yPct": 55.88274650471147
    },
    {
        "id": "admin-l8sen3rbi",
        "pageId": "059",
        "productId": "p319",
        "xPct": 58.12535476901104,
        "yPct": 55.66174153641617
    },
    {
        "id": "admin-v8dkm4vda",
        "pageId": "059",
        "productId": "p320",
        "xPct": 80.93799400631107,
        "yPct": 55.4407365681209
    },
    {
        "id": "admin-kqycs8tpw",
        "pageId": "060",
        "productId": "p321",
        "xPct": 54.37472152539994,
        "yPct": 33.22973725444492
    },
    {
        "id": "admin-40zlm72nq",
        "pageId": "061",
        "productId": "p322",
        "xPct": 32.96895122650895,
        "yPct": 13.5602950761647
    },
    {
        "id": "admin-c5vy402m8",
        "pageId": "061",
        "productId": "p326",
        "xPct": 18.750114441616464,
        "yPct": 24.942050943371793
    },
    {
        "id": "admin-oh6ebb6as",
        "pageId": "061",
        "productId": "p323",
        "xPct": 46.71903515036103,
        "yPct": 30.135667698310954
    },
    {
        "id": "admin-ffmtm61f1",
        "pageId": "061",
        "productId": "p324",
        "xPct": 28.281422616104834,
        "yPct": 37.20782668376002
    },
    {
        "id": "admin-148b2ppqc",
        "pageId": "061",
        "productId": "p325",
        "xPct": 19.531369210017154,
        "yPct": 42.069935986256255
    },
    {
        "id": "admin-7effq5n1z",
        "pageId": "061",
        "productId": "p327",
        "xPct": 17.031353951134957,
        "yPct": 46.269030383866635
    },
    {
        "id": "admin-j4osp5cii",
        "pageId": "062",
        "productId": "p328",
        "xPct": 30.62457656601908,
        "yPct": 63.06540797430817
    },
    {
        "id": "admin-gehbg3pox",
        "pageId": "062",
        "productId": "p329",
        "xPct": 39.218379018426624,
        "yPct": 62.8444030060129
    },
    {
        "id": "admin-ngrngtzni",
        "pageId": "062",
        "productId": "p330",
        "xPct": 45.78091907299239,
        "yPct": 62.51289555356997
    },
    {
        "id": "admin-4243s5a4m",
        "pageId": "062",
        "productId": "p331",
        "xPct": 54.06221961803966,
        "yPct": 62.73390052186525
    },
    {
        "id": "admin-xvyf5a4n8",
        "pageId": "062",
        "productId": "p332",
        "xPct": 62.34352016308693,
        "yPct": 62.18138810112704
    },
    {
        "id": "admin-kft9t0lbz",
        "pageId": "062",
        "productId": "p333",
        "xPct": 68.59355831029242,
        "yPct": 62.95490549016053
    },
    {
        "id": "admin-d7z9lmsg2",
        "pageId": "063",
        "productId": "p334",
        "xPct": 43.125263215717865,
        "yPct": 68.4800296975426
    },
    {
        "id": "admin-zl79fisdp",
        "pageId": "063",
        "productId": "p335",
        "xPct": 49.531552316603495,
        "yPct": 68.14852224509968
    },
    {
        "id": "admin-yusyx35hb",
        "pageId": "063",
        "productId": "p336",
        "xPct": 57.969103815330904,
        "yPct": 68.36952721339497
    },
    {
        "id": "admin-45q5uftig",
        "pageId": "064",
        "productId": "p337",
        "xPct": 23.280781743052632,
        "yPct": 47.81606516193362
    }
];
