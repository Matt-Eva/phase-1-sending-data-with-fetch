// Add your code here

const body = document.querySelector('body')

function submitData(userName, userEmail){
const userInfo = {
    name: userName,
    email: userEmail,
}

const configurtationObj = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(userInfo)
}



return fetch('http://localhost:3000/users', configurtationObj)
.then(res => res.json())
.then(data =>{
body.append(data.id);
}).catch( error => {
    body.append(error.message)
})
}

// console.log(submitData('Billy', 'gmail'));