require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView) {
    esriConfig.apiKey = "API Key";

    const webmap = new WebMap({
        portalItem: {
            // autocasts as new PortalItem()
            id: "App ID"
        }
    });
    
    const view = new MapView({
        map: Map,
        center: [X, Y], // Longitude, latitude
        zoom: 13, // Zoom level
        container: "viewDiv" // Div element
    });

    // Slideshow for home page 
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 2000); // Change image every 2 seconds?
    }
});
