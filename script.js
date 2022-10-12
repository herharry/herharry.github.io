fetch("https://pay.localzoho.com/payouts",{mode: 'no-cors'})
        .then(res => res.json())
        .then(function(res){
        console.log('hi');
})
        .catch(err => err);


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

for (let i = 0; i < 100; i++) {
  NewTab();
}

function NewTab() {
            window.open(
            "https://www.geeksforgeeks.org", "_blank");
        }

