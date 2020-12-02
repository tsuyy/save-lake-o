var config = {
    style: 'mapbox://styles/tsuy/ckhy07prv161k1aod348dlh96/draft',
    accessToken: 'pk.eyJ1IjoidHN1eSIsImEiOiJjazBsaWl5MXgwd2hqM2VxbzVlcGdnanlvIn0.V75WjSKJrKNSvazBDuQDeg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: 'sources',
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
            image: './assets/img/1500-ponce.jpg',
            description: 'Spanish explorer Ponce de Leon brings cattle, horses and other farm animals to Florida and plants the first orange tree in St. Augustine, the beginning of Florida’s agriculture as we know it today.',
            location: {
                center: [-81.70530, 29.92375 ],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'sa-wf',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'sa-wf',
                    opacity: 0
                }
            ]
        },
        {
            id: '02',
            title: 'Early 1880s – 1940s',
            image: './assets/img/1880s-canals.jpg',
            description: 'With the establishment of coastal settlements and a growing population, two major canals are built for drainage and navigation: The Caloosahatchee River (C-43 Canal) from Lake Okeechobee flowing to the west and the St. Lucie Canal (C-44) flowing from the lake to the east into the manmade St. Lucie Estuary. They become part of the Cross-Florida Waterway known today as the Okeechobee Waterway, built in 1937 with the help of the U.S. Army Corps of Engineers, as a passage for trade and travel to cross Florida from the east Atlantic Ocean through Lake Okeechobee to the west reaching the Gulf of Mexico.',
            location: {
                center: [-81.64513, 26.69627 ],
                zoom: 8.6,
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
                    layer: 'c43-44-labels',
                    opacity: 0
                },
                {
                    layer: 'c-43-44',
                    opacity: 0
                },
            ]
        },
        {
            id: '03',
            title: '',
            image: './assets/img/1930-counties.jpg',
            description: 'By 1930, Glades County, Hendry County, Martin County, Okeechobee County and Palm Beach County are formed surrounding Lake Okeechobee with a total population of 67,275. In 1963, Lake Okeechobee is divided into these five counties which meet at a point near the center of the lake.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'county-outline',
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
                    layer: 'county-outline',
                    opacity: 0
                }
            ]
        },
        {
            id: '04',
            title: '',
            image: '',
            description: 'Decades of fluctuating weather patterns and hurricanes causing severe flooding and loss of life lead to the construction of more than 1,400 miles of canals and 720 levees which take decades to complete, and several dams including the 143-mile Herbert Hoover Dike  surrounding Lake Okeechobee.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'c-43-44',
                    opacity: 0.3
                },
                {
                    layer: 'locks-and-dams',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'c-43-44',
                    opacity: 0
                },
                {
                    layer: 'locks-and-dams',
                    opacity: 0
                }
            ]
        },
        {
            id: '05',
            title: '1950s – 1970s',
            image: './assets/img/1950-agr.png',
            description: 'The agriculture industry booms. Fertilizer becomes readily available and its widespread availability creates increased use which allows the agricultural industry to produce twice as many crops than usual. The increase in fertilizer leads to a detrimental accumulation of nutrients trapped in the soil. These are known as “legacy nutrients,” which are released into the earth as part of the natural water cycle’s runoff process and pose a major threat to aquifers.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: '06',
            title: '1980s – 2010s',
            image: '',
            description: 'Major algal blooms throughout the 1980s and 1990s caused as a result of legacy nutrients trapped in the earth, and sewerage through the canal systems prompted the creation of a series of plans. This includes the Surface Water Improvement and Management Plan in 1989, the Florida Harmful Algal Bloom Task Force (HABTF ) in 1996, the Lake Okeechobee Protection Act in 2000, and the Northern Everglades and Estuaries Protection Program in 2007.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '2018-algal-bloom',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: '2018-algal-bloom',
                    opacity: 0
                }
            ]
        },
        {
            id: '07',
            title: '',
            image: './assets/img/algal_bloom_legend.png',
            description: 'By 2016, Harmful algae blooms cover 33 square miles of Lake Okeechobee. In 2018 and 2019 more harmful algal blooms spur a state of emergency. Blooms spread from Lake Okeechobee through the canal systems and across the state through the Okeechobee Waterway leading out to the Atlantic Ocean on the east coast and the Gulf of Mexico to the west.This results in the Everglades Agricultural Area Storage Reservoir Project by the U.S. Army Corps of Engineers to reduce the risk from harmful algal blooms.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '2018-algal-bloom',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: '2018-algal-bloom',
                    opacity: 0
                }
            ]
        },
        {
            id: '08',
            title: '',
            image: './assets/img/water-farm.jpg',
            description: 'The Caulkins Water Farm, a public-private partnership, started in 2014 as a temporary solution to nutrient runoff by holding water to reduce harmful levels of nutrients flowing into the St. Lucie Estuary. Today, the  3,200-acre water farm is part  of the permanent solution, holding 60,000 acre-feet of water per year.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'sa-wf',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'sa-wf',
                    opacity: 0
                }
            ]
        },
        {
            id: '09',
            title: 'Today',
            image: '',
            description: 'Today, Lake Okeechobee is about 730 square miles and 9 feet deep. About 60% of the lake’s water flows in from rivers and tributaries in the north, while 40% comes from rainfall. The lake is managed via a canal system on both the federal and state level. From the water flowing in from rivers and tributaries 78% of the nutrient runoff is coming from agricultural lands, 14% from natural lands, and 8% from developed lands including residential areas.',
            location: {
                center: [ -81.40944, 26.67524],
                zoom: 7.3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'c-43-44',
                    opacity: 0.5
                },
                {
                    layer: 'cw-overlay',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'c-43-44',
                    opacity: 0
                },
                {
                    layer: 'cw-overlay',
                    opacity: 0
                }
            ]
        },
        {
            id: '10',
            title: 'Population growth',
            image: './assets/img/population-growth.png',
            description: 'The 2019 Florida Census estimates the population in the five Lake Okeechobee counties (Glades, Hendry, Martin, Okeechobee and Palm Beach) have grown 80-97% since 1930.',
            location: {
                center: [-81.29489, 26.92825],
                zoom: 8.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'county-outline',
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
                    layer: 'county-outline',
                    opacity: 0
                }
            ]
        },
        {
            id: '11',
            title: '',
            image: '',
            description: 'Florida’s top agricultural industries include cattle/calf livestock with many of the ranches located north of Lake Okeechobee, citrus with many of the farms to the southwest, and sugarcane with many of the farms south and southwest of the lake.',
            location: {
                center: [-81.29489, 26.92825],
                zoom: 8.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'county-outline',
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
                    layer: 'county-outline',
                    opacity: 0
                }
            ]
        },        
        {
            id: '12',
            title: 'Truck and Row Crops',
            image: './assets/img/veg.jpg',
            description: 'Palm Beach County has the highest percentage of irrigated land used at 17% for the growing vegetables.',
            location: {
                center: [-81.29489, 26.92825],
                zoom: 8.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'veg',
                    opacity: 1
                },
                {
                    layer: 'veg-label',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'veg',
                    opacity: 0
                },
                {
                    layer: 'veg-label',
                    opacity: 0
                }
            ]
        },
        {
            id: '13',
            title: 'Citrus Farms',
            image: './assets/img/citrus.jpg',
            description: 'Hendry County has the highest percentage of irrigated land used at 37% for growing citrus, primarily oranges.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'citrus',
                    opacity: 1
                },
                {
                    layer: 'citrus-label',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'citrus',
                    opacity: 0
                },
                {
                    layer: 'citrus-label',
                    opacity: 0
                }
            ]
        },
        {
            id: '14',
            title: 'Calf/Cattle and Dairy Farms',
            image: './assets/img/cattle.jpg',
            description: 'Cattle are raised in all five counties with the highest percentage of land used in Okeechobee County at 45%.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'cattle',
                    opacity: 1
                },
                {
                    layer: 'cattle-label',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'cattle',
                    opacity: 0
                },
                {
                    layer: 'cattle-label',
                    opacity: 0
                }
            ]
        },
        {
            id: '15',
            title: 'Sugarcane Farms',
            image: './assets/img/sugarcane.jpg',
            description: 'Sugarcane production is high in four of the five counties with 74% of irrigated land in Palm Beach County used for growing.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'sugarcane',
                    opacity: 1
                },
                {
                    layer: 'sugarcane-label',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {   
                    layer: 'sugarcane',
                    opacity: 0
                },
                {
                    layer: 'sugarcane-label',
                    opacity: 0
                }
            ]
        },
        {
            id: '16',
            title: '',
            image: './assets/img/lake-o.jpg',
            description: 'The future of Lake Okeechobee is hopeful. Communities are coming together to contribute towards the health of our beautiful Lake Okeechobee. Each of us can be a part of the solution.',
            location: {
                center: [ -81.29489, 26.92825],
                zoom: 8.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
