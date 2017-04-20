var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World !',
		'list':['yepco', 'chiko', 'anissa', 'dog', 'lunette'],
		pur: '<h1>Shooting star</h1>',
	}
	Vue.component('todo-item', {
		template: '<li>Ceci est une liste</li>'
	})
})