console.log(monthlyCost);

let monthly = [];
let yearly = [];
if (this.props.subscriptions) {
	monthly = this.props.subscriptions.filter(sub => sub.frequency === 'monthly');
	yearly = this.props.subscriptions.filter(sub => sub.frequency === 'annually');
}
let subs = monthly.length + yearly.length;

let monthlyCost = 0;
let yearlyCost = 0;
let annualCost = 0;

if (monthly) {
	for (let i = 0; i < monthly.length; i++) {
		monthlyCost += monthly[i].price;
	}
}

if (yearly) {
	for (let i = 0; i < yearly.length; i++) {
		yearlyCost += yearly[i].price;
	}
}

monthlyCost = monthlyCost;
annualCost = (yearlyCost + Math.round((monthlyCost*12)));