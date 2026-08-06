useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch("https://api.example.com/user");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);


  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          "https://api.example.com/users"
        );

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();
  }, []);




  async function getUsers() {
    const res = await fetch("/api/users");
    return res.json();
}

//use

import { Suspense, use } from "react";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());

function UserList() {
    const users = use(userPromise);

    return (
        <>
            {users.map(user => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </>
    );
}

export default function App() {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <UserList />
        </Suspense>
    );
}


npm install @tanstack/react-query

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}


import { useQuery } from "@tanstack/react-query";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}



import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

function Users() {
  const queryClient = useQueryClient();

  // GET Users
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
  });

  // POST User
  const addUserMutation = useMutation({
    mutationFn: async (newUser) => {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) throw new Error("Failed to add user");

      return res.json();
    },

    // Refresh the users list
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div>
      <button
        onClick={() =>
          addUserMutation.mutate({
            name: "Rahul",
          })
        }
      >
        Add User
      </button>

      <hr />

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;