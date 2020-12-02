$(document).ready(function() {

    // mapbox scripts
    var layerTypes = {
        'fill': ['fill-opacity'],
        'line': ['line-opacity'],
        'circle': ['circle-opacity', 'circle-stroke-opacity'],
        'symbol': ['icon-opacity', 'text-opacity'],
        'raster': ['raster-opacity'],
        'fill-extrusion': ['fill-extrusion-opacity']
    }

    var alignments = {
        'left': 'lefty',
        'center': 'centered',
        'right': 'righty'
    }

    function getLayerPaintType(layer) {
        var layerType = map.getLayer(layer).type;
        return layerTypes[layerType];
    }

    function setLayerOpacity(layer) {
        var paintProps = getLayerPaintType(layer.layer);
        paintProps.forEach(function(prop) {
            map.setPaintProperty(layer.layer, prop, layer.opacity);
        });
    }

    var story = document.getElementById('story');
    var features = document.createElement('div');
    features.classList.add(alignments[config.alignment]);
    features.setAttribute('id', 'features');

    var header = document.createElement('div');

    if (config.title) {
        var titleText = document.createElement('h1');
        titleText.innerText = config.title;
        header.appendChild(titleText);
    }

    if (config.subtitle) {
        var subtitleText = document.createElement('h5');
        subtitleText.innerText = config.subtitle;
        header.appendChild(subtitleText);
    }

    if (config.byline) {
        var bylineText = document.createElement('p');
        bylineText.innerText = config.byline;
        header.appendChild(bylineText);
    }

    if (header.innerText.length > 0) {
        header.classList.add(config.theme);
        header.setAttribute('id', 'header');
        story.appendChild(header);
    }

    config.chapters.forEach((record, idx) => {
        var container = document.createElement('div');
        var chapter = document.createElement('div');

        if (record.title) {
            var title = document.createElement('h3');
            title.innerText = record.title;
            chapter.appendChild(title);
        }

        if (record.image) {
            var image = new Image();
            image.src = record.image;
            chapter.appendChild(image);
        }

        if (record.description) {
            var story = document.createElement('p');
            story.innerHTML = record.description;
            chapter.appendChild(story);
        }

        container.setAttribute('id', record.id);
        container.classList.add('step');
        if (idx === 0) {
            container.classList.add('active');
        }

        chapter.classList.add(config.theme);
        container.appendChild(chapter);
        features.appendChild(container);
    });

    story.appendChild(features);

    var footer = document.createElement('div');

    if (config.footer) {
        var footerText = document.createElement('p');
        footerText.innerHTML = config.footer;
        footer.appendChild(footerText);
    }

    if (footer.innerText.length > 0) {
        footer.classList.add(config.theme);
        footer.setAttribute('id', 'footer');
        story.appendChild(footer);
    }

    mapboxgl.accessToken = config.accessToken;

    const transformRequest = (url) => {
        const hasQuery = url.indexOf("?") !== -1;
        const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
        return {
          url: url + suffix
        }
    }

    var map = new mapboxgl.Map({
        container: 'map',
        style: config.style,
        center: config.chapters[0].location.center,
        zoom: config.chapters[0].location.zoom,
        bearing: config.chapters[0].location.bearing,
        pitch: config.chapters[0].location.pitch,
        scrollZoom: false,
        transformRequest: transformRequest
    });

    var marker = new mapboxgl.Marker();
    if (config.showMarkers) {
        marker.setLngLat(config.chapters[0].location.center).addTo(map);
    }

    // instantiate the scrollama
    var scroller = scrollama();

    map.on("load", function() {
        // setup the instance, pass callback functions
        scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });
    });

    var scale = new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'imperial'
        });

    map.addControl(scale);

    scale.setUnit('imperial');

    map.on('load', function() {
        map.addSource("hw", {
            "type": "image",
            "url": "https://raw.githubusercontent.com/tsuyy/colab-2020/main/assets/img/hw.png",
            "coordinates": [
                [-81.91691, 28.55452 ],
                [-80.20719, 28.55452 ],
                [-80.30398, 25.20659],
                [-81.75544, 25.20659]
            ]
        });

        map.addLayer({
            "id": "hw-overlay",
            "source": "hw",
            "type": "raster",
            "paint": {
            "raster-opacity": 0
            }
        });

        map.addSource("cw", {
            "type": "image",
            "url": "https://raw.githubusercontent.com/tsuyy/colab-2020/main/assets/img/cw.png",
            "coordinates": [
                [-82.03354, 27.23854 ],
                [-79.98204, 27.23854],
                [ -79.98204, 24.83072],
                [-82.03354, 24.83072]
            ]
        });

        map.addLayer({
            "id": "cw-overlay",
            "source": "cw",
            "type": "raster",
            "paint": {
            "raster-opacity": 0
            }
        });
    });

    // setup resize event
    window.addEventListener('resize', scroller.resize);

    // toggle active on click
    $(document).on('click', '.nav-items a', function() {
        $('.nav-items a').removeClass('active');
        $(this).addClass('active');
    });

    // img transition on scroll
    const checkpoint = 5000;

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    // console.log(currentScroll);
    if (currentScroll <= 1300) {
        opacity = 1 - (currentScroll / checkpoint);
    } else {
        opacity = 0;
    }
    document.querySelector(".transition").style.opacity = opacity;
    });

});

$(window)
    .scroll(function() {
            const scrollDistance = $(window).scrollTop() + 150;

            // Assign active class to nav links while scolling
            $('.page-section').each(function(i) {
                    if ($(this).position().top <= scrollDistance) {
                            $('.nav-items a.active').removeClass('active');
                            $('.nav-items a')
                                    .eq(i)
                                    .addClass('active');
                    }
            });
})
.scroll();


function changeImage(x)
{
  var img = document.getElementById("changable-img");
  switch (x) {
    case 1:
    imgsrc = "assets/img/lake-o-care-for-land.jpg";
    break;
    case 2:
    imgsrc = "assets/img/lake-o-mindful-farming.jpg";
    break;
    case 3:
    imgsrc = "assets/img/lake-o-cleaner-future.jpg";
  }
  img.src=imgsrc;
  return false;
}
