// Promises example
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve('I have succeeded')
    }, 1000);
  } else {
    reject('I have failed');
  }
});

myPromise
  .then(value => value + '!')
  .then(newValue => newValue + '!')
  .then(finalValue => console.log(finalValue))
  .catch(rejectValue => console.log(rejectValue));

// fetch with promise chaining
fetch('https://jsonplaceholder.typicode.com/users')
  .then(usersResponse => usersResponse.json())
  .then(users => {
    const firstUser = users[0];
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(err => console.log('there was an error'));

// async (run in browser console)
  const myAsyncFunction = async () => {
    try {
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await usersResponse.json();
      const secondUser = users[1];
      console.log(secondUser);

      const postsResponse = await fetch(
        'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
      );
      const posts = await postsResponse.json();
      console.log(posts);
    } catch (err) {
      console.log('there was an error');
    }
  }

  myAsyncFunction();