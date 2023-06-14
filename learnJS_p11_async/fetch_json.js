/*
https://jsonplaceholder.typicode.com/
Получить все посты, примешать к ним username юзера, а также общее количество постов
Из этого:
{
    userId: number
    id: number
    title: string
    body: string,
}

Получить вот это:
{
    userId: number
    id: number
    title: string
    body: string,
  username: string
  countUserPost: number
},
*/

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/users"),
])
  .then((responses) => {
    console.log(responses);
    if (responses.ok) {
      throw new Error("aboba");
    }
    return responses;
  })
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then((WTF) => {
    console.log(WTF);
    return WTF;
  })
  .then(([posts, users]) => {
    const result = posts.map((post) => ({
      ...post,
      username: users.find((user) => user.id === post.userId).username,
    }));

    const countUserPost = posts.reduce((acc, post) => {
      if (acc.hasOwnProperty(post.userId)) {
        acc[post.userId]++;
      } else {
        acc[post.userId] = 1;
      }
      return acc;
    }, {});

    result.forEach((post) => {
      post.countUserPost = countUserPost[post.userId];
    });

    console.log(result);
    return result;
  })
  .catch((err) => console.log(err));

