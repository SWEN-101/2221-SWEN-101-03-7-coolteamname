<script>
	// @ts-nocheck

    // Uses the map box library in Svelte
    // https://github.com/beyonk-adventures/svelte-mapbox?ref=madewithsvelte.com
	import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox';
	import { onMount } from 'svelte';

	const { GeolocateControl, NavigationControl, ScaleControl } = controls;

    let listCoor = [
        {name: "RIT HealthCenter",coor: [-77.67217267797808,43.08419644348089]},
    ]

    let mapComponent;
    let itemIndex = 0;
    $: centeredHosp = listCoor[itemIndex];
    $: lng = centeredHosp.coor[0];
    $: lat = centeredHosp.coor[1];
    // for some reason 1 is the lowest zoom you can do
    let zoom = 14;
    onMount(()=>{
        // Usage of methods like setCenter and flyto
        mapComponent.setCenter([lng, lat]); // zoom is optional
        mapComponent.flyTo({ center: [lng, lat], zoom}); // documentation (https://docs.mapbox.com/mapbox-gl-js/example/flyto)
    })

	// Define this to handle `eventname` events - see [GeoLocate Events](https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol-events)
	function eventHandler(e) {
		const data = e.detail;
		// do something with `data`, it's the result returned from the mapbox event
	}

	// please do not share this with anyone as I am only doing this for a learning purposes only also do not copy anything in this file into another file
	const api_key =
		'pk.eyJ1IjoiaGVyb3BvbiIsImEiOiJjbGExbnAxcnkwOWZ3M3VwcWN5OW0xZmJjIn0.LhqWR4pWb1qsc240GqTuEA';
</script>

<div class="main">
    <Map
        accessToken={api_key}
        bind:this={mapComponent}
        on:recentre={(e) => console.log(e.detail.center.lat, e.detail.center.lng)}
        options={{ scrollZoom: true }}
    >
        <Marker
            lat={lat}
            lng={lng}
            color="rgb(255,255,255)"
            label="some marker label"
            popupClassName="class-name"
        />
        <NavigationControl />
        <GeolocateControl options={{ some: 'control-option' }} on:eventname={eventHandler} />
        <ScaleControl />
    </Map>
</div>

<style>
    .main {
        height: 100vh;
        width: 100vw;
    }
    :global(.mapboxgl-map) {
        height: 200px;
        width: 200px;
    }
</style>