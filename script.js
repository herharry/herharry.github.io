fetch("https://pay.localzoho.com/payouts",{mode: 'no-cors'})
        .then(res => res.json())
        .then(res => this.loadBannerInCarousel(this.formatResponse(res)))
        .catch(err => err);


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

