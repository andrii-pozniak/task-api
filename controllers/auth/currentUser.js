const currentUser = async (req, res, next) => {
    const { name, email,  } =
      req.user;
  
    res.status(200).json({
      user: {
        name,
        email,
        
      },
    });
  };
  
  module.exports = currentUser;