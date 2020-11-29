var config = {
    style: 'mapbox://styles/tsuy/ckhy07prv161k1aod348dlh96/draft',
    accessToken: 'pk.eyJ1IjoidHN1eSIsImEiOiJjazBsaWl5MXgwd2hqM2VxbzVlcGdnanlvIn0.V75WjSKJrKNSvazBDuQDeg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '00',
            title: '',
            image: '',
            description: 'Before the development of Florida’s waterways, the historic water flow was very different. Lake Okeechobee was 25% larger than today, deeper at about 20 to 21 feet with wide vegetation surrounding the perimeter, and its water flowed slowly south over more than 8 million acres. The modifications to the waterways, manipulation of water flow, the development of agriculture and fertilizer use, and the development of lands and growing populations all play a part in Florida’s nutrient pollution.',
            location: {
                center: [-82.38083, 27.49391 ],
                zoom: 6.9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    
                    layer: 'locks-and-dams',
                    opacity: 0
                },
                {
                    
                    layer: 'cw-overlay',
                    opacity: 0
                },
                {
                    
                    layer: 'hw-overlay',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'hw-overlay',
                    opacity: 0
                }
            ]
        },
        {
            id: '01',
            title: '1500s',
            image: '',
            description: 'Spanish explorer Ponce de Leon brings cattle, horses and other farm animals to Florida and plants the first orange tree in St. Augustine, the beginning of Florida’s agriculture as we know it today.',
            location: {
                center: [-81.70530, 29.92375 ],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'st-augustine',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'st-augustine',
                    opacity: 0
                }
            ]
        },
        {
            id: '02',
            title: 'Early 1880s – 1930s',
            image: '',
            description: 'With the establishment of coastal settlements and a growing population, two major canals are built for drainage and navigation: The Caloosahatchee River (C-43 Canal) from Lake Okeechobee flowing to the west and the St. Lucie Canal (C-44) flowing from the lake to the east into the manmade St. Lucie Estuary. They become part of the Cross-Florida Waterway known today as the Okeechobee Waterway, built in 1937 with the help of the U.S. Army Corps of Engineers, as a passage for trade and travel to cross Florida from the east Atlantic Ocean through Lake Okeechobee to the west reaching the Gulf of Mexico.            ',
            location: {
                center: [-81.64513, 26.69627 ],
                zoom: 8.2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'c-43-44',
                    opacity: 0.7
                },
                {
                    layer: 'c43-44-labels',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'c-43-44',
                    opacity: 0
                },
                {
                    layer: 'c43-44-labels',
                    opacity: 0
                }
            ]
        },
        {
            id: '03',
            title: '',
            image: '',
            description: 'In 1907, Everglades Drainage District begins dredging four large canals South of Lake Okeechobee to the Atlantic Ocean. By the late 1920s, about 440 miles of drainage canals are built so far.',
            location: {
                center: [-82.38083, 27.49391 ],
                zoom: 6.9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'cw-overlay',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'cw-overlay',
                    opacity: 0
                }
            ]
        },
        {
            id: '04',
            title: '',
            image: '',
            description: 'The 1926 Great Miami Hurricane hits the Lake Okeechobee area, causing severe flooding and killing approximately 300 people in the Lake Okeechobee area. In 1928,  the Okeechobee Hurricane kills approximately 2,500 people due to flooding from a storm surge and strong winds. It becomes clear that further drainage and flood control to protect human lives are needed. The Florida State Legislature leads to creating the Okeechobee Flood Control District in cooperation with the U.S. Army Corps of Engineers and Improvements to existing waterways.            ',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '05',
            title: '',
            image: '',
            description: 'By 1930, Glades County, Hendry County, Martin County, Okeechobee County and Palm Beach County are formed surrounding Lake Okeechobee with a total population of 67,275. In 1963, Lake Okeechobee is divided into these five counties which meet at a point near the center of the lake.',
            location: {
                center: [-81.06327, 26.94190],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'county-population',
                    opacity: 0.9
                },
                {
                    layer: 'county-label',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'county-label',
                    opacity: 0
                },
                {
                    layer: 'county-population',
                    opacity: 0
                }
            ]
        },
        {
            id: '06',
            title: '',
            image: './assets/img/stlucielock.jpg',
            description: 'Dams are constructed including Moore Haven Lock and Dam, Ortona Lock and Dam, and St. Lucie Lock and Dam to aid with navigation and flood. In 1937, the Herbert Hoover Dike opens, a 143-mile dam surrounding Lake Okeechobee meant to reduce impacts of flooding to the surrounding area. And the connecting spillway structure at the St. Lucie Lock is constructed for flood and regulatory flow control through the St. Lucie Canal to manage the water level in Lake Okeechobee.            ',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'locks-and-dams',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'locks-and-dams',
                    opacity: 0
                }
            ]
        },
        {
            id: '07',
            title: '1940s',
            image: '',
            description: 'After years of drought, Florida is overwhelmed by rainfall when it is hit by two devastating hurricanes just weeks apart in 1947, causing widespread flooding from Orlando to Miami taking months to dissipate. Florida asks Congress for help with flood control, and in response the U.S. Army Corps of Engineers designs and creates 1,000 miles of canals and 720 miles of levees over the next 20 years via the Central & Southern Florida Flood Control Project.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '08',
            title: '1950s – 1970s',
            image: '',
            description: 'The agriculture industry booms. Fertilizer becomes readily available and its widespread availability creates increased use which allows the agricultural industry to produce twice as many crops than usual. ',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '09',
            title: '',
            image: '',
            description: 'The W.P. Franklin Lock and Dam is built to prevent saltwater intrusion and to aid with flood control, water control and navigation. And the 1977: The Port Mayaca Lock and Dam is built for navigation purposes, to permit the raising of water levels in Lake Okeechobee, and to moderate the effects of higher lake stages along the St. Lucie Canal (C-44).            ',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            title: '1980s – 2010s',
            image: '',
            description: 'Algal blooms result from channeling agriculture run-off, rainwater flushing legacy nutrients trapped in the earth and sewerage through the canal systems. And the blooms are toxic to humans, marine life and wildlife, and the environment. Algal blooms in Lake Okeechobee in the 1980s drive change to clean up the waterways. The Surface Water Improvement and Management Plan is created and leads to significant reductions in nutrient exports.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            title: '',
            image: '',
            description: 'In response to two major algal blooms in 1996 caused by nutrient pollution from years of fertilizer use and growing populations, the Florida Harmful Algal Bloom Task Force (HABTF) is created to confront the health, environmental and economic impacts. In 2000, the Lake Okeechobee Protection Act is passed by Florida Legislature to create a restoration and protection program. And in 2007: The Northern Everglades and Estuaries Protection Program (NEEPP) is passed by Florida Legislature adding protections to Lake Okeechobee and estuaries.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            title: '',
            image: '',
            description: 'In 2016, Harmful algae blooms cover 33 square miles of Lake Okeechobee. And in 2018 and 2019 more harmful algal blooms spur a state of emergency. Blooms spread from Lake Okeechobee through the canal systems and across the state through the Okeechobee Waterway leading out to the Atlantic Ocean on the east coast and the Gulf of Mexico to the west.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            title: '',
            image: '',
            description: 'In order to reduce the risk from Harmful Algal Blooms, the U.S. Army Corps of Engineers approves a planned deviation from the water control plan for Lake Okeechobee. And the Everglades Agricultural Area Storage Reservoir Project begins sending clean water south to the Everglades and Florida Bay to improve water quality while reducing damage from discharge events from Lake Okeechobee to the east and west coasts.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14',
            title: '',
            image: '',
            description: 'The Caulkins Water Farm, a public-private partnership, started in 2014 as a temporary solution to nutrient runoff by holding the water to reduce harmful freshwater flows to the St. Lucie Estuary, today is a 3,200-acre water farm as part of the permanent solution, holding 60,000 acre-feet of water per year.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15',
            title: 'Today',
            image: '',
            description: 'Lake Okeechobee is about 730 square miles and 9 feet deep. About 60% of the lake’s water flows in from rivers and tributaries in the north, while 40% comes from rainfall. The lake is managed via a canal system on both the federal and state level.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16',
            title: '',
            image: '',
            description: '78% of the phosphorus runoff is coming from agricultural lands, 14% from natural lands and 8% from developed lands including residential areas.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17',
            title: '',
            image: '',
            description: 'The 2019 Florida Census estimates the population in the five Lake Okeechobee counties (Glades County, Hendry County, Martin County, Okeechobee County and Palm Beach county) have grown 80-97% since 1930.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18',
            title: '',
            image: '',
            description: 'Florida’s top agricultural include cattle/calf livestock with many of the ranches located north of Lake Okeechobee, citrus with many of the farms to the southwest and sugarcane with many of the farms south and southwest of the lake.',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19',
            title: '',
            image: '',
            description: 'hi',
            location: {
                center: [-81.04080, 26.67827],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
