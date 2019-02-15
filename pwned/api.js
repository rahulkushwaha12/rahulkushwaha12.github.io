function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const ul = document.getElementById('result');

function execute(email){
  var obj = {  
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.haveibeenpwned.v2+json',
        'User-Agent': 'Pwnage-Checker-For-web',
        'api-version': '2',
        'Origin': 'https://rahulkushwaha12.github.io',
        'mode': 'no-cors'
      }
  }
      
console.log(email);
if (email){
const url = 'https://haveibeenpwned.com/api/breachedaccount/'+email;
fetch(url,obj)
.then((resp) => resp.json())
.then(function(data) {
console.log(data)
let result = data
if (data){
  return result.forEach(function(val) {
      let li = createNode('li'),
          span = createNode('span');
      span.innerHTML = `${val}`;
      append(li, span);
      append(ul, li);
    })
}else{
  alert('Your email is safe!')
}
})
.catch(function(error) {
console.log(JSON.stringify(error));
});   
}else{
alert('email field is empty');
}


}
function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

    return true;

}