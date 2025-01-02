import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        name: "",
        email: "",
        age: "",
      }, // Initial state
      setUser: (newUser) => set({ user: newUser }), // Action to update state
      clearUser: () =>
        set({
          user: {
            name: "",
            email: "",
            age: "",
          },
        }), // Clear state
    }),
    {
      name: "user-storage", // Key in storage
    }
  )
);

export default useUserStore;

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const useUserStore = create(
//   persist(
//     (set) => ({
//       user: {
//         name: "",
//         email: "",
//         age: "",
//       },
//       setUser: (userData) => set({ user: userData }),
//       clearUser: () =>
//         set({
//           user: {
//             name: "",
//             email: "",
//             age: "",
//           },
//         }),
//     }),
//     {
//       name: "user-storage",
//     }
//   )
// );

// export default useUserStore;
