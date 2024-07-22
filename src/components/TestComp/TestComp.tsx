import React, { useEffect, useState } from 'react';
import { getData } from '../../services/getData';

function TestComp() {
  const [token, setToken] = useState<string>('waiting...');

  useEffect(() => {
    const getToken = async () => {
      const token = await getData('token');
      console.log(' -- token = ', token);
      return token;
    };

    const token = getToken();
    // setToken(token);
  }, []);

  return (
    <div>
      <p> {token} </p>
    </div>
  );
}

export default TestComp;
