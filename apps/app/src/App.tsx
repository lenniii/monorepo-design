import { Button } from '@design/core';
import React, { useEffect, useState } from 'react';

function App() {
  const [count] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div className="App">
      <Button value="Best button" />
    </div>
  );
}

export default App;
