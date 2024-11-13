async function displayUserName(userId) {
  const userInfoDiv = document.getElementById("user-info");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const userData = await response.json();

    userInfoDiv.innerText = `User Name: ${userData.name}`;
  } catch (error) {
    userInfoDiv.innerText = error.message;
  }
}

displayUserName(1);
