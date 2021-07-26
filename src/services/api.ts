export const getUserById =
  (id: number): Promise<{ id: number; name: string; }> => fetch(`/api/get/user/by/${id}`, { method: 'GET' })
    .then(res => res.json());

async function test() {
  // const { id2, name } = await getUserById('string'); // ts(2339) ts(2345)
} 
