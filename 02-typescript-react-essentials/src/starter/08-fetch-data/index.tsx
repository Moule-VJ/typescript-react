import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

function Component() {
  const [users, setUSers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const rawData = await response.json();
      console.log(rawData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      setIsError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error...</h3>;
  }

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Fetch Data</h2>\
      {users.map((user) => {
        return <h2>{user.login}</h2>;
      })}
    </div>
  );
}
export default Component;
