import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './Api'; // Assuming you have a userApi slice

export const store = configureStore({
  reducer: {
    
    [userApi.reducerPath]: userApi.reducer, // Use the reducer path from userApi
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),  // Spread the default middleware
    userApi.middleware,         // Add the userApi middleware
  ],
});



