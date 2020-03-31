
const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = text => {
  div.textContent = text;
};

const checkAuth = () => {
  return Rx.Observable.create(observer => {
    setText("Checking Auth...");
    setTimeout(() => {
      observer.next(true);
    }, 2000);
  }); 
};

const fetchUser = () => {
  return Rx.Observable.create(observer => {
    setText('Fetching User...')
    setTimeout(() => {
      observer.next({name: 'Max'});
    }, 2000);
  });
};
//ES8 syntax
button.addEventListener("click", async () => {
  const isAuth = await checkAuth()
  let user = null;
  if (isAuth) {
    user = await fetchUser()
  }
  setText(user.name)
});