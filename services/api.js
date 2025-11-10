const URLBASE = `/api`

//add user
export const addUser = async (user) => {
  const response = await fetch(`${URLBASE}/auth/register`, 
    {
      method:"POST",
      headers: {
    'Content-Type': 'application/json',
  },
      body: JSON.stringify(user),
      
    }
  )
  return response;
}

export const loginUser = async(user) => {
   const response = await fetch(`${URLBASE}/auth/login`,
    {
      method:"POST",
      headers: {
    'Content-Type': 'application/json',
  },
      body: JSON.stringify(user),
      
    }
   );
   const data = await response.json();
   return data;
}

