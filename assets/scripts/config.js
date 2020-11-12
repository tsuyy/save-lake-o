var config = {
    style: 'mapbox://styles/tsuy/ckgtuzv2i02jm19nz0f1khw5b/draft',
    accessToken: 'pk.eyJ1IjoidHN1eSIsImEiOiJjazBsaWl5MXgwd2hqM2VxbzVlcGdnanlvIn0.V75WjSKJrKNSvazBDuQDeg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Title',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: '01',
            title: 'Display Title',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-81.53133, 26.93304],
                zoom: 8,
                pitch: 50,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '02',
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-81.23809, 26.96432],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '03',
            title: 'Third Title',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-80.99051, 27.20086],
                zoom: 9.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '04',
            title: 'Fourth Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
