import { Tooltip } from '../components/Tooltip.js';

const infoContent = [
	[ 'Code paper', 'https://ui.adsabs.harvard.edu/abs/2018ApJS..239...35D/abstract' ],
	[ 'Repository', 'https://bitbucket.org/bdiemer/colossus' ],
	[ 'Documentation', 'https://bdiemer.bitbucket.io/colossus/' ],
	[ 'Designed by <a href="https://www.echou.xyz" target="_blank">Erik Chou</a>', null ],
	[ 'Funded by the National Science Foundation', null ],
	[ '© 2014-2022 Benedikt Diemer', null ]
];

class Header {

	constructor( main ) {

		const dom = this.dom = document.createElement( 'div' );
		dom.id = 'header';

		const logo = document.createElement( 'img' );
		logo.src = 'static/dist/logo.svg';
		logo.id = 'logo';
		dom.appendChild( logo );

		const title = document.createElement( 'h2' );
		title.innerText = 'Colossus Web Calculator';
		dom.appendChild( title );

		// info button

		const infoContainer = document.createElement( 'div' );
		infoContainer.classList.add( 'dropdown' );

		const info = document.createElement( 'div' );
		info.id = 'info';
		infoContainer.appendChild( info );

		const infoTooltip = new Tooltip( info, 'Information', true, true );

		const dropdown = document.createElement( 'div' );
		dropdown.classList.add( 'options' );

		for ( const content of infoContent ) {

			const isLink = content[ 1 ] != null;
			const elem = document.createElement( isLink ? 'a' : 'span' );
			elem.classList.add( 'option' );
			elem.innerHTML = content[ 0 ];
			elem.tabIndex = 0;

			if ( isLink ) {

				elem.href = content[ 1 ];
				elem.target = '_blank';

			}

			dropdown.appendChild( elem );

		}

		infoContainer.appendChild( dropdown );

		dom.appendChild( infoContainer );

		// right side
		const rightAlign = document.createElement( 'div' );
		rightAlign.classList.add( 'right-align' );

		const status = this.status = document.createElement( 'span' );
		status.classList.add( 'status' );

		const statusIcon = document.createElement( 'div' );
		statusIcon.classList.add( 'status-icon' );

		status.classList.add( 'up-to-date' );
		status.innerText = 'Up to date';

		rightAlign.appendChild( status );

		dom.appendChild( rightAlign );

	}

}

export { Header };
