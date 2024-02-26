<script lang="ts">
    import { onMount, onDestroy, getContext, setContext } from 'svelte';
	import L from 'leaflet';

    export let polygonLocations: L.LatLngExpression[];

    let coso: L.Polygon | undefined;
    let cosoElement: HTMLElement;

    const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
	const map = getMap();

    setContext('layer', {
		// L.Marker inherits from L.Layer
		getLayer: () => coso
	});

    onMount(() => {
		if (map) {
            coso = L.polygon(polygonLocations, {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.2

            }).addTo(map);
            // coso.bindPopup()
        }
	});

    onDestroy(() => {
		coso?.remove();
		coso = undefined;
	});
</script>

<div bind:this={cosoElement}>
	{#if coso}
		<slot />
	{/if}
</div>