function saveRecent(project) {
  let recents = JSON.parse(localStorage.getItem("recent")) || [];

  if (!recents.includes(project)) {
    recents.push(project);
    localStorage.setItem("recent", JSON.stringify(recents));
  }
}