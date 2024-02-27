import type { LatLngExpression } from "leaflet";

interface CityZone {
    name: string;
    city: string;
    country: string;
    coordinates: Array<LatLngExpression>;
}

export const polygonColors: {
    color: string;
    fillColor: string;
}[] = [
    { color: 'red', fillColor: '#f03' },
    { color: 'blue', fillColor: '#00f' },
    { color: 'green', fillColor: '#0f0' }
]; 


export const cityZones : CityZone[] = [
    {
        name: 'Zona centro',
        city: 'Encarnacion',
        country: 'Paraguay',
        coordinates: [
			[-27.321610536464718, -55.87546287411941],
			[-27.320424268574538, -55.85889410397638],
			[-27.33438907224267, -55.85507054163568],
			[-27.334119498088523, -55.87364213014764]
		]
    },
    {
        name: 'Zona sur',
        city: 'Encarnacion',
        country: 'Paraguay',
        coordinates: [
            [-27.343430533375717, -55.86887698411323],
            [-27.343506774115156, -55.846131852445794],
            [-27.355780848968116, -55.84587436038918],
            [-27.35433242644415, -55.866988709031396]
        
        ]
    },
];

        