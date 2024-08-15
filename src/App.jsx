import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || name.startsWith(" ") || password.length < 6) {
      setError(true);
      setSubmitted(false);
    } else {
      setError(false);
      setSubmitted(true);
    }
  };

  console.log(name, password);

  return (
    <div className="flex flex-col items-center pt-20 gap-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-1/3 bg-sky-100 p-6 rounded-md shadow-lg"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="border border-black p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Contraseña</label>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-black p-2"
          />
        </div>
        <button
          type="submit"
          className="border border-black bg-sky-500 rounded-md py-2 font-bold"
        >
          Enviar
        </button>
      </form>

      {error && (
        <p className="font-bold text-red-500">
          Por favor chequea que la información sea correcta
        </p>
      )}
      {submitted && !error && <Card name={name} password={password} />}
    </div>
  );
}

export default App;
