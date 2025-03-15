export type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
};

const users: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: ['admin', 'editor', 'viewer'][Math.floor(Math.random() * 3)] as 'admin' | 'editor' | 'viewer',
}));

function simulateLatency() {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 500 + 300));
}

export async function fetchUsers({ page = 1, limit = 10, sort = 'id', filterRole, search }: { page?: number; limit?: number; sort?: keyof User; filterRole?: User['role'], search: string }) {
  await simulateLatency();

  // filter role
  let filteredUsers = users;
  if (filterRole) {
    filteredUsers = users.filter((user) => user.role === filterRole);
  }

  // search
  if (search) {
    const lowerSearch = search.toLowerCase();
    filteredUsers = filteredUsers.filter(user =>
      Object.values(user).some(value =>
        String(value).toLowerCase().includes(lowerSearch)
      )
    );
  }

  // sort
  filteredUsers.sort((a, b) => (a[sort] > b[sort] ? 1 : -1));

  // pagination
  const start = (page - 1) * limit;
  const paginatedUsers = filteredUsers.slice(start, start + limit);
  const last_page = Math.ceil(filteredUsers.length / limit);

  return {
    data: paginatedUsers,
    total: filteredUsers.length,
    page,
    limit,
    last_page
  };
}

export async function fetchUserById(id: number) {
  await simulateLatency();
  const user = users.find((u) => u.id === id);
  if (!user) throw new Error('User not found');
  return user;
}

export async function updateUser(id: number, data: Partial<User>) {
  await simulateLatency();
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) throw new Error('User not found');
  users[index] = { ...users[index], ...data };
  return users[index];
}
