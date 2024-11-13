async function fetchUserData(userId) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
  
      if (!response.ok) {
        throw new Error("User not found");
      }
  
      const userData = await response.json();
  
      console.log(`User Name: ${userData.name}`);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  fetchUserData(10); // Should fetch and log the name of the user with ID 1
  fetchUserData(999); // Should log "User not found" error in the console
  