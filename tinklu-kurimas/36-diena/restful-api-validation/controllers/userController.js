const registerUser = (req, res) => {
    const { email, password, age } = req.body;
  
    // Simulated user registration (replace with DB logic)
    res.status(201).json({ message: 'User registered successfully', data: { email, age } });
  };
  
  const getUserById = (req, res) => {
    const { id } = req.params;
  
    // Simulated users (replace with DB logic)
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];
  
    const user = users.find((user) => user.id === parseInt(id));
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    res.status(200).json({ user });
  };
  
  module.exports = { registerUser, getUserById };
  