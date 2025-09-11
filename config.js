var config = {
    style: 'https://api.maptiler.com/maps/0198fbaf-7297-74c1-b705-bbd440db6eaa/style.json?key=H898lE2inPeoRXPPClhE',
    showMarkers: true,
    markerColor: '#244863ff',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'Desafio 2: Obras callejeras de Keith Haring',
    logo: '',
    subtitle: 'Luchar desde el arte',
    byline: 'Diego Sánchez Pérez',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'IntroHaring',
            alignment: 'left',
            hidden: false,
            title: 'Introducción a la figura de Haring',
            image: './images/Keith_Haring_signature.png',
            //caption: 'https://www.youtube.com/watch?v=8FtvQCMQjoE',
            //website: '<a target="_blank"> <iframe width="699" height="549" src="https://www.youtube.com/embed/pitG7Wtzc0w" title="&quot;Keith Haring: Subway Drawings&quot; at BMAC - Behind the Scenes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></a>',
            //author: 'Diego Sánchez Pérez',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'Nacido en Reading, Pensilvania el 4 de Mayo de 1958. Criado en el seno de una familia de clase media. Inspirado por Disney y por su propio padre, que era dibujante amateur, decide estudiar artes. Incia sus estudios artísticos en Ivy School of Art de Pittsburgh, posteriormente en la Escuela de Artes Visuales de Nueva York, llegando a ser apadrinado por Andy Warhol y contemporaneo de Jean-Michel Basquiat, incluso llegando a ser reconocido por la escena del graffiti de esta ciudad, sin pertenecer a ella. Su infancia transcurre en los años 60, la influencia del movimiento pacifista en contra de la guerra de Vietnam hace que su sensibilidad se dirija a usar el arte como forma de activismo. Sus estudíos en semiótica, la ciencia de los signos le permitieron crear un lenguaje propio. En palabras de Haring «Los dibujos se habían convertido casi en un vocabulario». En este pequeño trabajo no podemos abarcar toda su obra y mucho menos su vida, nos adentraremos en los murales que se conservan actualmente en las calles del mundo.',
            location: {
                center: [-75.92582, 40.33672],
                zoom: 15,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
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
            id: 'CrackIsWack',
            alignment: 'right',
            title: 'Crack Is Wack ',
            image: './images/CrackIsWack1986NY.webp',
            description: '"Crack Is Wack" Año: 1986. Ubicado en una cancha de balonmano en Harlem, Nueva York. Este mural fue pintado por Haring sin permiso, eso no impidió que se amara. Ya que fue y a día de hoy es, una llamada a la acción social. Haring supo llamar la atención de un creciente problema, la drogas y el impacto de las mismas en nuestras sociedades. No es la única obra de Haring sobre esta temática existen muchas más algunas las veremos mas adelante. Tamaño: 5x8 Metros Aprox. ',
            location: {
                center: [-74.00584, 40.71475],
                zoom: 10,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
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
            id: 'WeTheYouth',
            alignment: 'left',
            hidden: false,
            title: 'We The Youth',
            image: './images/WeTheYouth1987.webp',
            description: '"We The Youth" Año: 1987. Este mural en un barrio obrero de Filadelfia entre la calle 22 y la calle Ellsworth. Este trabajo se realizó con la colaboración de 14 estudiantes de secundaria y de otros artistas como, Clarence Wood, Gilberto Wilson y José Seabourne, se realizó por el bicentenario de la Constitución de Estados Unidos. Puede que a simple vista no hable mucho acerca de la Constitución de dicho país, pero si se observa la obra son individuos distintos entre si trabajando juntos, tanto desde el plano artístico ya que es una obra colaborativa, como en el simbólico representado personajes de estratos sociales u origenes distintos mediante el color y la forma, realizando una acción colectiva, sostenerse los unos a los otros. La ubicación tampoco es sin intención, ya que se eligió este barrio para tratar de mejorar su desarrollo socio/económico. Tamaño: 300 metros de largo aprox.',
            location: {
                center: [-75.17989, 39.93862],
                zoom: 14,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
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
            id: 'TuttoMondo',
            alignment: 'right',
            hidden: false,
            title: 'Tuttomondo',
            image: './images/TuttoMondo1989Pisa.png',
            description: '"Tuttomondo" Año: 1989. Este mural está pintado en la pared trasera de la Iglesia de San Antonio Abate en la cidad de Pisa, Italia. Es la manera de Haring de retratrar la variedad social del momento, mostrando una harmónica agitación de personajes icónicos del artista en el que todo el mundo "Tuttomondo", nos podemos sentir reflejados con nuestra diferencias. En esta obra se ve la evolución su lenguaje, haciéndonos participes directos mediante una representación universal. Desde la esperanza del recien nacido pasando por la serpiente, continua represantación del mal en la obra de Haring...tuttomondo. Tamaño: 180 metros cuadrados.',
            location: {
                center: [10.39811, 43.71106],
                zoom: 14,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
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
            id: 'TodosJuntosPodemosPararElSida',
            alignment: 'left',
            hidden: false,
            title: 'Todos juntos podemos parar el sida',
            image: './images/KeithHarringBarcelona1989.png',
            //caption: 'Source image caption',
            //website: '<a href="" target="_blank"> https://es.wikipedia.org/wiki/Plaza_del_Emperador_Carlos_V </a>',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: '"Todos juntos podemos parar el sida" Año: 1989. Esta fue una de las últimas obras junto con "Tuttomondo", se realizó originalmente en el barrio del Raval (En 1989, el Raval era conocido como el Barrio Chino),a su vuelta de Madrid y motivado por su amiga Montse Guillén propietaria del restaurante "El Internacional de Nueva York", Haring acepta realizar una acción en Barcelona con la única condición de que el elegiría el lugar donde se realizaría el mural. Eligiendo una plaza en el corazón del Raval, la plaza de Salvador Seguí, una plaza deteriorada cómo muchas en esa época. Optó por una de las paredes donde aparecían mas jeringuillas cada día. Pese a que en 1989 Haring era un artista altamente cotizado esta obra se realizó solo con el interés de regalar la reflexión de que solo si estamos todos juntos podemos acabar podemos hacer frente a una epidemia como es el Sida. Debido al deterioro del mural por vandalizaciones y las inclmencias del tiempo fue adquirido por el Museo de Arte Contemporaneo de Barcelona (MACBA) en 1997. En 2014 fue restaurado desde un calco y de nuevo expuesto en la plaza Coromines junto al MACBA. Tamaño: 23.5 x 34 metros',
            location: {
                center: [2.16627, 41.38319],
                zoom: 17,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
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
            id: 'Outro',
            alignment: 'right',
            hidden: false,
            title: 'Despedida',
            image: './images/LittleKeith.png',
            //caption: 'Source image caption',
            //website: '<a href="" target="_blank"> https://es.wikipedia.org/wiki/Plaza_del_Emperador_Carlos_V </a>',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'Un 16 de febrero de 1990, su trazo ancho y firme nos dejó debido a complicaciones derivadas del Sida. El 4 de mayo de ese mismo año se celebró el servicio conmemorativo en la Catedral de "San Juan el Divino" de Nueva York, donde su enorme espiritu fue recordado por mas de 1000 personas. Toda la obra su obra está administrada por la fundación que lleva su nombre. www.haring.com',
            location: {
                center: [-74.00477, 40.70971],
                zoom: 12.46,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            // {
            //     layer: 'layer-name',
            //     opacity: 100,
            //     duration: 1000
            // },
            // {
            //     layer: 'countries-fill',
            //     opacity: 100
            // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },        
    ]
};
