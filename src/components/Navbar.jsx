const Navbar = () => {
  return (
    <div className="container">
      <div style={{ marginLeft: "15px", marginTop: "5px" }}>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          }
          alt=""
          height={"27px"}
          className="logo"
        />
      </div>
      <div className="list">
        <li className="item">Home</li>
        <li className="item">TV Shows</li>
        <li className="item">Movies</li>
        <li className="item">New & Popular</li>
        <li className="item">My List</li>
      </div>
      <div style={{ marginRight: "15px", marginTop: "5px" }}>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          }
          alt=""
          height={"26px"}
          className="profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
