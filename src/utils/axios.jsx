import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2QzMWM4OGYxYmFlOWQ2YTI3NzViMGI3ODIxNzk0NyIsIm5iZiI6MTczMTMxNjk4NC45NDc2ODUsInN1YiI6IjY3MmI2YmNlNTk5ZGEyODk4MDk1NTBmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FfV4SEdpzEtQBntVvEVYbtatdtNwhXP9wOJCWXNbHB4",
      },
});

export default instance;
