var app = new Vue({
	el: '#app-1',					// 지정 element
	data: {
		message: 'Hello Vue!'	// 초기 데이터
	}
});

app.message = "I can change the data";

var app2 = new Vue({
	el: '#app-2',				// 지정 element
	data: {
		message: 'msg1 입니다. 안녕하십니까! 해당 페이지는 ' + new Date() + '에 새로고침 되었습니다.',
		message2: 'msg2 입니다.'
	}
})

// ## 조건문과 반복문
// ### v-if 문
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

// ### v-for 문
var app4 = new Vue({
	el: '#app-4',
	data: {
		// 복수형 s를 붙여야한다.
		todos: [
			{ text: 'Javascript 배우기' },
			{ text: 'Vue 배우기' },
			{ text: '응용 App 만들기' },
		]
	}
})

// ## 사용자 입력 핸들링
// ### v-on
var app5 = new Vue({
	el: '#app-5',
	data: {
		message: '메시지를 뒤집어 놓으셨다.'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

// ### v-model
var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'TEXT를 입력해보세요.'
	}
})

// # 뷰 컴포넌트
Vue.component('todo-item', {
	props: ['todo'],					// props interface로 부모로부터 분리할 수 있다.
	template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'etc' },
		]
	}
});
