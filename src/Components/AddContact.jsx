import React, { useState } from "react";

const AddContact = (props) => {
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const handleClick = () => {
    if (props.handleClick) props.handleClick(text, phone);
    setText("");
    setPhone("");
  };
  return (
    <div>
      <div>
        <input
          placeholder="add name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="add phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>ADD</button>
      </div>
    </div>
  );
};
export default AddContact;
