import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import posts from "../features/posts/postsSlice";
import places from "../features/places/placesSlice"
import incidents from "../features/incidents/incidentsSlice";
import chatbot from "../features/chatbot/chatbotSlice"

export const store = configureStore({
  reducer: {
    auth,
    posts,
    incidents,
    places,
    chatbot
  },
});
