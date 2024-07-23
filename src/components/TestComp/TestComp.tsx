import React, { useEffect, useState } from 'react';
import { getData } from '../../services/getData';
import { IToken } from '../../types';

function TestComp() {
  const [token, setToken] = useState<string>('waiting...');

  useEffect(() => {
    const getToken = async () => {
      const token = await getData('/token');
      console.log(' -- token = ', token);
      token?.success && setToken(token.token);
      // return token;
    };

    // const token: <A> = getToken();
    getToken();
    // token?.success && setToken(token.token);
  }, []);

  return (
    <div>
      <p> {token} </p>
    </div>
  );
}

export default TestComp;
