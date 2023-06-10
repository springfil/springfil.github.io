const user = { name: "springfil" };
const accessToken = "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";

fetch(`https://api.github.com/users/${user.name}`, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Content-Type: "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("aboba");
    }
    return response.json();
  })
  .then((githubUser) => {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 5000);
  });



{
  //переписал на функции
  function fetchGit(user, accessToken) {
    return fetch(`https://api.github.com/users/${user.name}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Content-Type: "application/json",
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error("aboba");
      }
      return response.json();
    });
  }

  function gitAvatar(user) {
    let img = document.createElement("img");
    img.src = user.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 5000);
  }

  const user = { name: "springfil" };
  const accessToken = "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";

  fetchGit(user, accessToken).then((githubUser) => gitAvatar(githubUser));
}
