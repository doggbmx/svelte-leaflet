<script lang="ts">
	import '../app.css';
	import type { LatLngExpression } from 'leaflet';
	import Leaflet from '$lib/Leaflet.svelte';
	import Marker from '$lib/Marker.svelte';
	import Popup from '$lib/Popup.svelte';
	import Polygon from '$lib/Polygon.svelte';

	const initialView: LatLngExpression = [-27.33056, -55.86667]; // Dortmund, Germany
	const markerLocations: Array<LatLngExpression> = [
		[51.513870009926, 7.473969975241] // ShipBit Office
	];
	const polygonLocations: Array<LatLngExpression> = 
		[
			[-27.321610536464718, -55.87546287411941],
			[-27.320424268574538, -55.85889410397638],
			[-27.33438907224267, -55.85507054163568],
			[-27.334119498088523, -55.87364213014764]
		]
	;
</script>

<div class="w-full h-screen">
	<Leaflet view={initialView} zoom={14}>
		{#each markerLocations as latLng}
			<Marker {latLng} width={40} height={40}>
				<!-- ShipBit Icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xml:space="preserve"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
					viewBox="0 0 45 40"
				>
					<path
						d="m23.046 25.449 9.601 16.885H13.253l9.793-16.885ZM45 23.965H25.702l9.575 16.84L45 23.965ZM44.963 20.923 35.339 4.254l-9.668 16.669h19.292ZM32.771 2.618h-4.17L8.522 37.237l2.08 3.603L32.771 2.618ZM25.084 2.618H11.465L0 22.476l6.768 11.722 18.316-31.58Z"
						style="fill:#e9204f;fill-rule:nonzero"
						transform="translate(0 -2.618)"
					/>
				</svg>

			</Marker>
			<Polygon {polygonLocations} >
				<Popup>
					<p class="text-lg">Zona centro</p>
					<p class="mb-2">Descarga la ordenanza aca! 👇</p> 
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Download
					</button>
				</Popup>
			</Polygon>
		{/each}
	</Leaflet>
</div>
