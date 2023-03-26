const gameboard = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const Player = (name, mark) => {
	const getName = () => name;
	const getMark = () => mark;
	let sayHello = () =>
		console.log(`Hello, my name is ${name} and I'm playing with ${mark}`);

	return { getName, getMark, sayHello };
};

const playerOne = Player('Riley', 'X');

// playerOne.sayHello();
