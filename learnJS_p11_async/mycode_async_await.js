fetch("https://api.github.com/users/springfil")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Errorrr >> ", err);
  });
//
let getGitData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/springfil");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getGitData();



///////////////
function sleep(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject("Мало поспал");
    }

    setTimeout(() => resolve(`Поспал ${time}`), time);
  });
}

sleep(1500)
  .then((res) => {
    console.log(res);
    return sleep(1000);
  })
  .then((res) => {
    console.log(res);
    return sleep(500);
  })
  .then((res) => {
    console.log(res);
    return sleep(200);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Ошибка!!!! ", err);
  });

const sleepSession = async () => {
  try {
    const sleep1 = await sleep(1_500);
    console.log(sleep1);

    const sleep2 = await sleep(1_200);
    console.log(sleep2);

    const sleep3 = await sleep(700);
    console.log(sleep3);

    const sleep4 = await sleep(1_000);
    console.log(sleep4);

    const sleep5 = await sleep(300);
    console.log(sleep5);
  } catch (e) {
    console.log("Error: ", e);
  }
};

sleepSession();



//
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

const zopa = async () => {
  try {
    const responses = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);
    const data = await Promise.all(
      responses.map((response) => response.json())
    );
    const [posts, users] = data;

    const result = posts.map((post) => ({
      ...post,
      username: users.find((user) => user.id === post.userId).username ?? "",
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
  } catch (e) {
    console.log(e);
  }
};
zopa();
