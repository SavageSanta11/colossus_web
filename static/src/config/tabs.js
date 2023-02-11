export default {
	"Basic": [
		{
			"label": "Redshift (z)",
			"type": "float",
			"value": {
				"default": 0,
				"min": 0,
				"max": 200
			}
		}
	],
	"Time": [
		{
			"label": "Plot as function of",
			"type": "radio",
			"value": [ "Redshift (z)", "Time (t)", "Scale factor (a)" ]
		},
		{
			"label": "Domain",
			"type": "range",
			"value": {
				"default": [ 0, 10 ],
				"min": - 0.995,
				"max": 200
			}
		},
		{
			"label": "Log scale",
			"type": "bool",
			"value": false
		}
	],
	"Distance": [
		{
			"label": "Redshift domain",
			"type": "range",
			"value": {
				"default": [ 0, 10 ],
				"min": - 0.995,
				"max": 200
			}
		}
	],
	"Content": [
		{
			"label": "Plot as function of",
			"type": "radio",
			"value": [ "Redshift (z)", "Time (t)", "Scale factor (a)" ]
		},
		{
			"label": "Domain",
			"type": "range",
			"value": {
				"default": [ 0, 10 ],
				"min": - 0.995,
				"max": 200
			}
		},
		{
			"label": "Combined plotting",
			"type": "bool",
			"value": true
		}
	],
	"Power Spectrum": [
		{
			"label": "Model",
			"type": "radio",
			"value": [ "eisenstein98", "eisenstein98_zb", "sugiyama95", "camb" ]
		},
		{
			"label": "Wavenumber (k)",
			"type": "range",
			"value": {
				"default": [ 0.001, 0.01 ],
				"min": 0,
				"max": "Infinity"
			}
		}
	],
	"Correlation": [
		{
			"label": "Model",
			"type": "radio",
			"value": [ "eisenstein98", "eisenstein98_zb", "sugiyama95", "camb" ]
		},
		{
			"label": "Radius (R)",
			"type": "range",
			"value": {
				"default": [ 0.1, 100 ],
				"min": 0,
				"max": 5.00e+02
			}
		}
	],
	"Peak Height": [
		{
			"label": "Model",
			"type": "radio",
			"value": [ "eisenstein98", "eisenstein98_zb", "sugiyama95", "camb" ]
		},
		{
			"label": "Halo mass (M)",
			"type": "range",
			"value": {
				"default": [ 10000000, 1e+16 ],
				"min": 0,
				"max": "Infinity"
			}
		},
		{
			"label": "Redshift (z)",
			"type": "float",
			"value": {
				"default": 0,
				"min": 0,
				"max": 200
			}
		},
		{
			"label": "Combined plotting",
			"type": "bool",
			"value": true
		}
	]
};