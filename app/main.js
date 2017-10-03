var menu = new Vue({

	el : '#menu',
	data : {
		homeActive: false,
		projectsActive: false,
		servicesActive: false,
		contactActive: false,

		message: 'Please click a menu item'
	},
	methods : {
		makeActive : function (item, label) {
			console.log('makeActive');
			console.log('makeActive - item: ', item);

			// remove the active class from the previous anchor
			this.homeActive = false;
			this.projectsActive = false;
			this.servicesActive = false;
			this.contactActive = false;

			// add active class to selected anchor (item)
			switch(item){
				case 'homeMenu':
					console.log('sitch homeMenu');
					this.homeActive = true;
					break;
				case 'projectsMenu':
					console.log('sitch projectsMenu');
					this.projectsActive = true;
					break;
				case 'servicesMenu':
					console.log('sitch servicesMenu');
					this.servicesActive = true;
					break;
				case 'contactMenu':
					console.log('sitch contactMenu');
					this.contactActive = true;
					break;
			}


			// change the text of message
			this.message = 'You chose ' + label;
		}
	}
});