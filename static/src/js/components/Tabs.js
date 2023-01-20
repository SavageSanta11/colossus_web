const Tabs = {
	'Basic': [
		{
			label: 'Redshift (z)',
			type: 'float',
			value: {
				default: 0,
				min: 0,
				max: 200
			}
		},
	],
	'Time': [
		{
			label: 'Function',
			type: 'radio',
			value: [ 'Redshift (z)', 'Time (t)', 'Scale factor (a)' ]
		},
	],
	'Distance': [],
	'Content': [
		{
			label: 'Function',
			type: 'radio',
			value: [ 'Redshift (z)', 'Time (t)', 'Scale factor (a)' ]
		},
		{
			label: 'Plot layout',
			type: 'radio',
			value: [ 'Combined', 'Seperate' ]
		},
	],
	'Power Spectrum': [
		{
			label: 'Model',
			type: 'radio',
			value: [ 'eisentein_98', 'eisenstein98_zb', 'sugiyama95', 'camb' ]
		},
		{
			label: 'Wavenumber (k)',
			type: 'range',
			value: {
				default: [ 0.25, 0.75 ],
				min: 0,
				max: 1
			},
		}
	],
	'Correlation': [
		{
			label: 'Model',
			type: 'radio',
			value: [ 'eisentein_98', 'eisenstein98_zb', 'sugiyama95', 'camb' ]
		},
		{
			label: 'Radius (R)',
			type: 'range',
			value: {
				default: [ 0.25, 0.75 ],
				min: 0,
				max: 1
			},
		}
	],
	'Peak Height': [
		{
			label: 'Model',
			type: 'radio',
			value: [ 'eisentein_98', 'eisenstein98_zb', 'sugiyama95', 'camb' ]
		},
		{
			label: 'Halo mass (M)',
			type: 'range',
			value: {
				default: [ 0.25, 0.75 ],
				min: 0,
				max: 1
			},
		},
	],
};

export { Tabs };
