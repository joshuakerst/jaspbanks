//head to about:blank first

//get info from api in the form of json data
async function fetchBanks() {
  let response = await fetch('https://api.blublu.io/public/banks');
  let data = await response.json();
  let banks = data.banks;

//heading
document.body.innerHTML = '<h1>Report of Banks</h1>';

//creating a 'ul' tag and looping through the banks array
  let bankList = document.createElement('ul');
  banks.forEach((bank) => {

    //creating a 'li' tag, and creating text nodes for the bank names and buttons
    let bankItem = document.createElement('li');
    let bankName = document.createTextNode(bank.bank_name + " "); //Concat for button spacing don't know another way

    //creating button element and text node for it
    let bankCodeButton = document.createElement('button');
    let bankCode = document.createTextNode(`Code`);
    let br = document.createElement('br');

    //appends 'code' to the button element
    //button listens for 'click' then alerts browser with appropriate bank code
    bankCodeButton.appendChild(bankCode);
    bankCodeButton.addEventListener('click', ()=> {
      alert(`The Bank Code is ${bank.code}`);
    });

    //appending the text 'li' tag
    bankList.appendChild(bankItem);
    bankItem.appendChild(bankName);
    bankItem.appendChild(bankCodeButton);
    bankList.appendChild(br);
    
  });

  //appending EVERYTHING to the DOM and displays it in the browser
  document.body.appendChild(bankList);

  
}

fetchBanks();




