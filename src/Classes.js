
const searchCpc = {
	title: 'Avg. Cost-Per-Click on Google Search Network',
	data: {
		labels: ['Advocacy','Auto','B2B','Consumer Services','Dating & Personals','E-Commerce','Education','Employment Services','Finance & Insurance','Health & Medical','Home Goods','Industrial Services','Legal','Real Estate','Technology','Travel & Hospitality'],
		datasets: [{
			label: 'Cost-Per-Click',
			data: [1.43, 2.46, 3.33, 6.40, 2.78, 1.16, 2.40, 2.04, 3.44, 2.62, 2.94, 2.56, 6.75, 2.37, 3.80, 1.53],
			backgroundColor: [
				'rgba(59, 117, 93,0.4)',
				'rgba(106, 108, 192, 0.4)',
				'rgba(206, 225, 66, 0.4)',
				'rgba(226, 112, 61, 0.4)',
				'rgba(192, 54, 35, 0.4)',
				'rgba(37, 120, 180, 0.4)',
				'rgba(153, 156, 167, 0.4)',
				'rgba(187, 71, 169, 0.4)',
				'rgba(44, 114, 125, 0.4)',
				'rgba(0, 0, 0, 0.4)',
				'rgba(80, 70, 87, 0.4)',
				'rgba(84, 168, 61, 0.4)',
				'rgba(227, 143, 76, 0.4)',
				'rgba(60, 84, 147, 0.4)',
				'rgba(144, 210, 189, 0.4)',
				'rgba(213, 132, 210, 0.4)'
				]
				
		}]
	}
		
}



export class DisplayCpc {
    constructor() {
		this.title = 'Avg. Cost-Per-Click on Google Display Network';
		this.data = {};
		
    }

};


export class SearchCtr {
    constructor() {
		this.title = 'Avg. Click-Thru Rate on Google Search Network';
		this.data = {};
		
    }

};


export class DisplayCTR {
    constructor() {
		this.title = 'Avg. Click-Thru Rate on Google Display Network';
		this.data = {};
		
    }

};
