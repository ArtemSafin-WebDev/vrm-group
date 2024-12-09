initMap();

async function initMap() {
  const mapElement = document.querySelector("#contacts-map");
  if (!mapElement) return;
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapControls,
    YMapMarker,
    YMapDefaultFeaturesLayer,
  } = ymaps3;
  const { YMapZoomControl } = await ymaps3.import(
    "@yandex/ymaps3-controls@0.0.1"
  );
  const lat = Number(mapElement.parentElement.getAttribute("data-lat"));
  const lng = Number(mapElement.parentElement.getAttribute("data-lng"));

  const themeUrl = mapElement.parentElement.getAttribute("data-theme-url");
  const zoom = mapElement.parentElement.hasAttribute("data-zoom")
    ? Number(mapElement.parentElement.getAttribute("data-zoom"))
    : 14;
  let theme = null;

  try {
    theme = await fetch(themeUrl).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    });
  } catch (err) {
    console.error(err);
  }

  const map = new YMap(mapElement, {
    location: {
      center: [lng, lat],
      zoom: zoom,
    },
    behaviors: ["drag", "pinchZoom"],
  });

  if (theme) {
    map.addChild(
      new YMapDefaultSchemeLayer({
        customization: theme,
      })
    );
  } else {
    map.addChild(new YMapDefaultSchemeLayer());
  }
  map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

  const controls = new YMapControls({
    position: "bottom left",
    orientation: "vertical",
  });
  controls.addChild(
    new YMapZoomControl({
      easing: "linear",
    })
  );
  map.addChild(controls);

  const markerElement = document.createElement("div");
  markerElement.className = "contacts__marker";
  markerElement.innerHTML = `
        <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.75 0C7.0425 0 0 7.0425 0 15.75C0 27.5625 15.75 45 15.75 45C15.75 45 31.5 27.5625 31.5 15.75C31.5 7.0425 24.4575 0 15.75 0ZM15.75 21.375C14.2582 21.375 12.8274 20.7824 11.7725 19.7275C10.7176 18.6726 10.125 17.2418 10.125 15.75C10.125 14.2582 10.7176 12.8274 11.7725 11.7725C12.8274 10.7176 14.2582 10.125 15.75 10.125C17.2418 10.125 18.6726 10.7176 19.7275 11.7725C20.7824 12.8274 21.375 14.2582 21.375 15.75C21.375 17.2418 20.7824 18.6726 19.7275 19.7275C18.6726 20.7824 17.2418 21.375 15.75 21.375Z"
                fill="#02C498" />
        </svg>
    `;

  const marker = new YMapMarker(
    {
      coordinates: [lng, lat],
      draggable: false,
      mapFollowsOnDrag: false,
    },
    markerElement
  );
  map.addChild(marker);
}
