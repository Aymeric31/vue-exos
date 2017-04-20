Vue.component('mon-composant', {
	template: '<p>Mon premier composant !</p>'
});
new Vue({
	el: '#app',
	data: {
		message: 'Hello World !',
		'list':['yepco', 'chiko', 'anissa', 'dog', 'lunette'],
		pur: '<h1>Shooting star</h1>',
		seen: true

	}
})