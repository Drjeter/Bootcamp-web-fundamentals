//Playing with Objects

var users = [
	{
		name: "Michael",
		age: 37
	},
	{
		name: "John",
		age: 30
	},
	{
		name: "David",
		age: 27
	}
];

//Print John's name:
console.log(users[1].name);

//Print the name of the first object:
console.log(users[0].name);

//Print the name and age of each user with a for loop:
for (i = 0; i < users.length; i++){
	console.log(users[i].name + ' - ' + users[i].age)
}