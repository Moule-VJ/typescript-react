import { useState } from "react";

function Component() {
  const [text, setText] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  // Submit Type

  type Person = {
    name: string;
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log("submit");

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const text = formData.get("text") as string;
    const email = formData.get("email") as string;
    const person: Person = {
      name: text,
    };
  };

  return (
    <section>
      <h2>Events Example</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-inuput mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          className="form-input mb-1"
          value={email}
          onChange={handlechange}
        />

        <button type="submit" className="btn btn-block" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
