const aboutData = [
    {
        title: 'JAIPUR',
        description: 'Jaipur is capital of Rajasthan. It was founded on 18 November 1727 by Jai Singh II, the ruler of Amer after whom the city is named. As of 2011, the city had a population of 3.1 million, making it the tenth most populous city in the country. Jaipur is also known as the Pink City, due to the dominant color scheme of its buildings. It is located 280 km (174 miles) from the Indian capital New Delhi.'
    }
];

const getinData = [
    {
        id: 1,
        title: 'By Air',
        description: 'Jaipur International Airport (JAI) is located about 13 km from Jaipur city centre, in the suburb of Sanganer. Buses, Autorickshaws, Uber/ola are available In/Out of Jaipur International Airport.',
        icon: '✈️',
        url: 'https://maps.app.goo.gl/SPtpUzjuS7JkHKEt7'
    },
    {
        id: 2,
        title: 'By Rail',
        description: 'There are 5 Railway Stations in Jaipur.\n' +
            '\n' +
            'Jaipur Junction (Main Railway station for Jaipur city. Nearest Metro station is 200 meters)\n' +
            'Gandhi Nagar (Stations for Jawahar Nagar, Bajaj Nagar)\n' +
            'Durgapura (Station for Mahavir Nagar, Mahaveer Nagar, Durgapura)\n' +
            'Getor Jagatpura (Station for Model Town, Malviya Nagar, Jagatpura)\n' +
            'Sanganer (Station For Sanganer)',
        icon: '🚂',
        url: 'https://maps.app.goo.gl/L8iax9qFifbYvp1XA'
    }
]

const placesData = [
    {
        id: 1,
        title: 'Jal mahal',
        description: 'Jal Mahal (meaning "Water Palace") is a palace in the middle of the Man Sagar Lake in Jaipur city.',
        image: 'src/assets/jalmahal.jpeg',
        url: 'https://g.co/kgs/15wdEKC'
    },
    {
        id: 2,
        title: 'Nahargarh fort',
        description: 'Nahargarh Fort stands on the edge of the Aravalli Hills, overlooking the city of Jaipur in the Indian state of Rajasthan.',
        image: 'src/assets/nahargarhfort.jpeg',
        url: 'https://g.co/kgs/QVWLi5k'
    },
    {
        id: 3,
        title: 'Hawa mahal',
        description: 'The Hawa Mahal is a palace in the city of Jaipur. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur',
        image: 'src/assets/hawamahal.jpeg',
        url: 'https://g.co/kgs/YhytYSV'
    },
    {
        id: 4,
        title: 'Amber Palace',
        description: 'The palace was the residence of the Rajput Maharajas and their families.',
        image: 'src/assets/amberpalace.jpeg',
        url: 'https://g.co/kgs/2hV4BJX'
    },
    {
        id: 5,
        title: 'Jaigarh Fort',
        description: 'Jaigarh Fort is situated on the promontory called the Cheel ka Teela (Hill of Eagles) of the Aravalli range.',
        image: 'src/assets/jaigarhfort.jpeg',
        url: 'https://g.co/kgs/h44sMxZ'
    },
    {
        id: 6,
        title: 'The City Palace',
        description: 'The City Palace, Jaipur is a royal residence and former administrative headquarters of the rulers of the Jaipur State in Jaipur.',
        image: 'src/assets/citypalace.jpeg',
        url: 'https://g.co/kgs/kFh5gPV'
    },
    {
        id: 7,
        title: 'Jantar Mantar',
        description: 'The Jantar Mantar is a collection of 19 astronomical instruments built by the Rajput king Sawai Jai Singh, the founder of Jaipur.',
        image: 'src/assets/jantarmantar.jpeg',
        url: 'https://g.co/kgs/tKVRvor'
    },
    {
        id: 8,
        title: 'Albert Hall Museum',
        description: 'The Albert Hall Museum is the oldest museum of the state and functions as the state museum of Rajasthan.',
        image: 'src/assets/alberthallmuseum.jpeg',
        url: 'https://g.co/kgs/4PnUMuN'
    }
];

const eventsData = [
    {
        id: 1,
        title: 'Anubhav Singh Bassi - New Material',
        description: 'Get ready for an evening filled with laughter as Anubhav Singh Bassi brings his brand new stand-up comedy material to Jaipur.',
        date: 'June 15, 2025',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA4IEp1bg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-krgxplcsrc-portrait.jpg',
        url: 'https://in.bookmyshow.com/events/anubhav-singh-bassi-new-material/ET00355125'
    },
    {
        id: 2,
        title: 'Madhur Virli Live - A Stand Up Comedy Show',
        description: 'Join Madhur Virli for a hilarious stand-up comedy performance that will leave you in splits!',
        date: 'June 20, 2025',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNCBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00350072-fuzqxeppaq-portrait.jpg',
        url: 'https://in.bookmyshow.com/events/madhur-virli-live-a-stand-up-comedy-show/ET00350072'
    },
    {
        id: 3,
        title: 'Kal Ki Chinta Nahi Karta ft. Ravi Gupta',
        description: 'Experience an evening of endless laughter with Ravi Gupta as he presents his unique take on life and everyday situations.',
        date: 'June 25, 2025',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00329412-tauhdmkmbj-portrait.jpg',
        url: 'https://in.bookmyshow.com/events/kal-ki-chinta-nahi-karta-ft-ravi-gupta/ET00329412'
    }
];

const transportData = [
    {
        id: 1,
        title: 'Buses',
        description: 'Operated by J.C.T.S.L (Jaipur City Transport Services Limited)\n' +
            'These buses are State operated and cover allmost all Jaipur.\n' +
            '\n' +
            'For Ease of use Please use Google maps. Google maps shows exact stop, time And linking buses to Destination.',
        icon: '🚌',
        url: 'https://transport.rajasthan.gov.in/content/transportportal/en/jaipur-bus.html'
    },
    {
        id: 2,
        title: 'Metro',
        description: 'Stations(In Order): Mansarovar - New Aatish Market - Vivek Vihar - Shayam Nagar - Ram Nagar - Civil Lines - Railway Station - Sindhi Camp - Chandpole.',
        icon: '🚇',
        url: 'https://transport.rajasthan.gov.in/content/transportportal/en/metro.html'
    },
    {
        id: 3,
        title: 'Private Transport',
        description: 'Jaipur is Covered my major Taxi Hailing services Available on market.\n' +
            '\n' +
            'Ola\n' +
            'Uber\n' +
            'Meru\n' +
            'Bla Bla cars',
        icon: '🚲',
        url: ''
    }
];

const emergencyData = [
    {
        id: 1,
        title: 'SMS Hospital Jaipur',
        description: 'Major government hospital and medical college. One of the largest healthcare facilities in Rajasthan.',
        category: 'government',
        url: 'https://goo.gl/maps/kLRS5SN55FRcqBk26'
    },
    {
        id: 2,
        title: 'Global Heart & General Hospital',
        description: 'Location: Vaishali Nagar - Comprehensive healthcare facility with specialty in cardiac care.',
        category: 'private',
        url: 'https://goo.gl/maps/PsfbshfM7qhg6MbB8'
    },
    {
        id: 3,
        title: 'Sanjeevani Hospital',
        description: 'Areas Served: Civil lines, Sodala, Ram Nagar, Shyam Nagar - Multi-specialty private hospital.',
        category: 'private',
        url: 'https://goo.gl/maps/zAdUt1iTHDtU5grj6'
    },
    {
        id: 4,
        title: 'Jaipur National Hospital',
        description: 'Areas Served: Jagatpura, Malviya Nagar - Advanced medical facility with emergency services.',
        category: 'private',
        url: 'https://goo.gl/maps/WfHN1RJ9rh3w2THMA'
    },
    {
        id: 5,
        title: 'Mahatma Gandhi Hospital',
        description: 'Areas Served: Sitapura, Sanganer, Jagatpura, Malviya Nagar - Large hospital with multiple specialties.',
        category: 'private',
        url: 'https://goo.gl/maps/b6MK7iQoGhBAMQfG9'
    },
    {
        id: 6,
        title: 'Khetan Hospital',
        description: 'Areas Served: Jhotwara, Vidhyadhar Nagar - Well-equipped private hospital with emergency care.',
        category: 'private',
        url: 'https://goo.gl/maps/Fufvxy6GEzXswq9f6'
    }
];

export { aboutData, getinData, placesData, eventsData, transportData, emergencyData };