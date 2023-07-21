"use client";
function Button() {
  const handleClick = async () => {
    await fetch("/api/addUser");
    alert("add User");
  };

  return <button onClick={handleClick}>add User</button>;
}

export default Button;
