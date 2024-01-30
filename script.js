
let globalUserName =""
let globalPassWord =""
const fs =require('fs') 
document.addEventListener('DOMContentLoaded', function () {
	let div = document.getElementById('btn')
	let submitButton = document.getElementById('submitButton')
	let newUserButton =document.getElementById('newUser')
	submitButton.addEventListener('click', function (event) {
		event.preventDefault()
		let user_name = document.getElementById('Username').value
		let pass_word = document.getElementById('Password').value
		let userCredentials ={
			username :user_name,
			password :pass_word
		}
		let dataStored = JSON.parse(localStorage.getItem('storedData'))
		let check =false
		for(let i=0;i<dataStored.length;i++)
		{
			if(dataStored[i].username==userCredentials.username&&dataStored[i].password==userCredentials.password)
			{
				check=true
			}
		}
		if (check)
		{
			if ((user_name == "" || pass_word == ""))
			{
				alert('Add Username and Password !')

			}else{
				globalUserName=user_name
				globalPassWord=pass_word
				window.location.href = 'index.html';
			}
			
		}else
		{
			alert('Incorrect username or password. Please try again.') //sexy
		}
	})
	newUserButton.addEventListener('click',function(event){
		event.preventDefault()
		let user_name =document.getElementById('Username').value
		let pass_word =document.getElementById('Password').value
		console.log(user_name +" kiran")
		let userCredentials = {
			username: user_name,
			password: pass_word
		}
		let dataStored = JSON.parse(localStorage.getItem('storedData'))
		if(dataStored==null)
		{
			dataStored=[]
		}
		let check =false
		for(let i=0;i<dataStored.length;i++)
		{
			if (dataStored[i].username == userCredentials.username && dataStored[i].password == userCredentials.password) {
				check = true
			}
		}
		if ((user_name == "" || pass_word == "")) {
			alert('Add Username and Password !')
		}else
		if (check) {
			alert("Username and Password already registered!")
		}else
		{
			dataStored.push(userCredentials)
			let temp = JSON.stringify(dataStored)
			localStorage.setItem('storedData', temp)
			globalUserName=user_name
			globalPassWord=pass_word
			let arr =JSON.parse(fs.readFileSync('./PeopleData.json','utf8'))
			arr.push({
				username :user_name,
				password:pass_word,
				expenses:[]
			})
			fs.writeFileSync('PeopleData.json', JSON.stringify(arr))
			window.location.href = 'index.html';
		}
	})
});
