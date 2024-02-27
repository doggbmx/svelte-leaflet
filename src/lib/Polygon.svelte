<script lang="ts">
    import { onMount, onDestroy, getContext, setContext } from 'svelte';
	import L from 'leaflet';
	import Popup from './Popup.svelte';

    export let polygonLocations: L.LatLngExpression[];
    export let polygonName: string | undefined;
    export let polygonColor: string | undefined;
    export let polygonFillColor: string | undefined;
    let polygonContent: HTMLElement; 

    let leafletPolygon: L.Polygon | undefined;
    let cosoElement: HTMLElement;

    const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
	const map = getMap();

    setContext(`${polygonName}`, {
		// L.Marker inherits from L.Layer
		getLayer: () => leafletPolygon
	});

    onMount(() => {
		if (map) {
            leafletPolygon = L.polygon(polygonLocations, {
                color: `${polygonColor}`,
                fillColor: `${polygonFillColor}`,
                fillOpacity: 0.2

            }).addTo(map);

            leafletPolygon.bindPopup(`
            <Popup class="flex flex-col justify-center">
                <p class="">${polygonName}</p>
                <p class="mb-2">Descarga la ordenanza aca! 👇</p> 
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Download
                </button>
            </Popup>
        `,
        {
            closeOnEscapeKey: true,
            closeOnClick: true,

        }
        );

            // if (polygonName) {
            //     leafletPolygon.bindPopup(`${polygonName}`);
            // }
            // if (polygonContent) {
            //     leafletPolygon.bindPopup(polygonContent);
            // }
        }
	});

    onDestroy(() => {
		leafletPolygon?.remove();
		leafletPolygon = undefined;
	});
</script>

<div bind:this={cosoElement}>
	{#if leafletPolygon}
    <!-- <div bind:this={polygonContent}>
        <Popup>
            <p class="text-lg">{polygonName}</p>
            <p class="mb-2">Descarga la ordenanza aca! 👇</p> 
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Download
            </button>
        </Popup>
    </div> -->
	{/if}
</div>