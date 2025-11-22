import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      login: (userData, tokenValue) => set({ 
        user: userData, 
        token: tokenValue,
        isAuthenticated: true 
      }),

      logout: () => set({ 
        user: null, 
        token: null, 
        isAuthenticated: false 
      }),

      setUser: (userData) => set({ 
        user: userData, 
        isAuthenticated: !!userData
      }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage), 
      partialize: (state) => ({ 
         user: state.user, 
         token: state.token,
         isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);

export default useAuthStore;