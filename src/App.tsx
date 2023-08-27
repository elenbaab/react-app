import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  
  const [alertVisibile, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisibile && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color = "primary" onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}

export default App;
