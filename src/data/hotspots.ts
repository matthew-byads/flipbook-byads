export type Hotspot = {
    id: string;
    pageId: string;
    productId: string;
    xPct: number; // 0..100
    yPct: number; // 0..100
    label?: string; // Optional override label
};

export const hotspots: Hotspot[] = [
    {
        id: "admin-f3nt6tsna",
        pageId: "026",
        productId: "p1",
        xPct: 87.33535967578521,
        yPct: 26.98529988020466
    },
    {
        id: "admin-70egvf9gn",
        pageId: "016",
        productId: "p3",
        xPct: 83.08004052684905,
        yPct: 43.322249465399295
    },
    {
        id: "admin-o5y1ek63v",
        pageId: "016",
        productId: "p1",
        xPct: 22.69503546099291,
        yPct: 52.63717686046642
    },
    {
        id: "admin-dct363f6r",
        pageId: "017",
        productId: "p3",
        xPct: 18.135764944275582,
        yPct: 33.43409576909728
    },
    {
        id: "admin-maer2m4qb",
        pageId: "017",
        productId: "p4",
        xPct: 79.33130699088146,
        yPct: 33.43409576909728
    },
    {
        id: "admin-4jy8119qe",
        pageId: "017",
        productId: "p5",
        xPct: 45.49138804457954,
        yPct: 32.28764316662748
    },
    {
        id: "admin-9cbtdcljn",
        pageId: "018",
        productId: "p3",
        xPct: 16.0081053698075,
        yPct: 31.57111029008386
    },
    {
        id: "admin-3pbhvslrs",
        pageId: "018",
        productId: "p2",
        xPct: 50.86119554204661,
        yPct: 34.29393522094963
    },
    {
        id: "admin-pquusf8qy",
        pageId: "018",
        productId: "p5",
        xPct: 82.8774062816616,
        yPct: 30.567964262922782
    },
    {
        id: "admin-dyfw63kc6",
        pageId: "004",
        productId: "p5",
        xPct: 50.050658561296856,
        yPct: 74.56308288270132
    }
];
