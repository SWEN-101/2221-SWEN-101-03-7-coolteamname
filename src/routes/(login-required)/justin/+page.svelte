<script>
    // @ts-nocheck

    // Uses the map box library in Svelte
    // https://github.com/beyonk-adventures/svelte-mapbox?ref=madewithsvelte.com
    import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox';
    import { onMount } from 'svelte';

    const { GeolocateControl, NavigationControl, ScaleControl } = controls;

    let listCoor = [{ name: 'RIT HealthCenter', coor: [-77.67217267797808, 43.08419644348089] }, { name: 'UR Medicine Strong Memorial Hospital', coor: [-77.6261525, 43.1225119] }];

    let mapComponent;
    $: Hosp1 = listCoor[0];
    $: lng = Hosp1.coor[0];
    $: lat = Hosp1.coor[1];
    $: Hosp2 = listCoor[1];
    $: lng2 = Hosp2.coor[0];
    $: lat2 = Hosp2.coor[1];
    let zoom = 11;
    onMount(() => {
        // Usage of methods like setCenter and flyto
        mapComponent.setCenter([lng, lat]); // zoom is optional
        mapComponent.flyTo({ center: [-77.615214, 43.137285], zoom }); // documentation (https://docs.mapbox.com/mapbox-gl-js/example/flyto)
    });

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
    <div class="hosp_list">
        <div class="location">
            <h4 class="loc_name">Rochester Institute of Technology</h4>
            <p class="descr">description</p>
        </div>
        <div class="location">
            <h4 class="loc_name">UR Medicine Strong Memorial Hospital</h4>
            <p class="descr">description</p>
        </div>
        <div class="location">
            <h4 class="loc_name">Monroe Community Hospital</h4>
            <p class="descr">description</p>
        </div>
        <div class="location">
            <h4 class="loc_name">Unity Specialty Hospital</h4>
            <p class="descr">description</p>
        </div>
        <div class="location">
            <h4 class="loc_name">Rochester General Health System</h4>
            <p class="descr">description</p>
        </div>
        <div class="location">
            <h4 class="loc_name">Highland Hospital of Rochester</h4>
            <p class="descr">description</p>
        </div>
    </div>
    <Map
        accessToken={api_key}
        bind:this={mapComponent}
        on:recentre={(e) => console.log(e.detail.center.lat, e.detail.center.lng)}
        options={{ scrollZoom: true }}
    >
        <Marker
            {lat}
            {lng}
            color="rgb(247, 105, 2)"
            label={"Rochester Institute of Technology"}
            popupClassName="class-name"
        />
        <Marker
            lat={lat2}
            lng={lng2}
            color="rgb(247, 105, 2)"
            label={"UR Medicine Strong Memorial Hospital"}
            popupClassName="class-name"
        />
        <Marker
            lat={43.113070}
            lng={-77.618030}
            color="rgb(247, 105, 2)"
            label={"Monroe Community Hospital"}
            popupClassName="class-name"
        />
        <Marker
            lat={43.14802169799805}
            lng={-77.63606262207031}
            color="rgb(247, 105, 2)"
            label={"Unity Specialty Hospital"}
            popupClassName="class-name"
        />
        <Marker
            lat={43.15012741088867}
            lng={-77.59697723388672}
            color="rgb(247, 105, 2)"
            label={"Rochester General Health System"}
            popupClassName="class-name"
        />
        <Marker
            lat={43.13506317138672}
            lng={-77.50438690185547}
            color="rgb(247, 105, 2)"
            label={"Highland Hospital of Rochester"}
            popupClassName="class-name"
        />
        <Marker
            lat={43.21030807495117}
            lng={-77.69861602783203}
            color="rgb(247, 105, 2)"
            label={"Highland Hospital of Rochester"}
            popupClassName="class-name"
        />
        <Marker
            lat={43.21030807495117}
            lng={-77.69861602783203}
            color="rgb(247, 105, 2)"
            label={"Highland Hospital of Rochester"}
            popupClassName="class-name"
        />
        <Marker
            lat={43.21030807495117}
            lng={-77.69861602783203}
            color="rgb(247, 105, 2)"
            label={"Highland Hospital of Rochester"}
            popupClassName="class-name"
        />
        <Marker
            lat={43.21030807495117}
            lng={-77.69861602783203}
            color="rgb(247, 105, 2)"
            label={"Highland Hospital of Rochester"}
            popupClassName="class-name"
        />
        <NavigationControl />
        <GeolocateControl options={{ some: 'control-option' }} on:eventname={eventHandler} />
        <ScaleControl />
    </Map>
</div>

<style>
    .main {
        position: relative;
        height: calc(100vh - 4rem);
        width: 100%;
        z-index: 0;
        padding: 0;
        display: flex;
        max-width: none;
    }
    :global(.mapboxgl-map) {
        height: 100px;
        width: 75%;
        color: rgb(247, 105, 2);
        float: left;
    }
    :global(.mapboxgl-marker) {
      cursor: pointer;
    }
    .hosp_list {
        height: 100%;
        width: 25%;
        float: left;
        z-index: 1;
        overflow-y: scroll;
    }
    .location {
        background-color: #d7d7d7;
        outline: 1px solid #c4c4c4;
        padding: 12px;
    }
    .loc_name {
        margin: 0;
    }
    .descr {
        margin-bottom: 0;
    }
</style>

