export class EventHandler {
	map;

	constructor () {
		this.map = new Map();
	}

	on (event:string, callback) {
		let eventList = this.map.get(event);
		if (eventList == null) {
			eventList = [];
			eventList.push(callback);
			this.map.set(event, eventList);
		} else {
			eventList.push(callback);
			this.map.set(event, eventList);
		}
	}

	emit (event:string, output?:string) {
		const eventList = this.map.get(event);
		if (eventList != null) {
			for (var i = 0; i < eventList.length; i++)
				eventList[i](output);
		}
	}

	clear (event:string)  {
		let eventList = this.map.get(event);
		if (eventList != null) {
			eventList = [];
			this.map.set(event, eventList);
		}
	}

	clearAll () {
		this.map.clear();
	}

	get (event:string) {
		return this.map.get(event);
	}

	list () {
		let eventList = [];
		for (let event of this.map.keys()) {
			eventList.push(event);
		}

		return eventList;
	}

	count () {
		return this.map.size;
	}

	hasHandled (event:string) {
		let eventList = this.map.get(event);
		if (eventList == null) 
			return false;
		else if (eventList.length == 0) 
			return false;
		else 
			return true
	}
}