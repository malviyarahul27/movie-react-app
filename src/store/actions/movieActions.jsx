export { removemovie } from "../reducers/movieSlice";
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    const images = await axios.get(`/movie/${id}/images`);
    const reviews = await axios.get(`/movie/${id}/reviews`);
    const credits = await axios.get(`/movie/${id}/credits`);
    // const translations = await axios.get(`/movie/${id}/translations`);

    let AllDetails = {
      detail: detail.data,
      recommendations: recommendations.data.results,
      externalid: externalid.data,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
      images: images.data,
      reviews: reviews.data.results,
      credits: credits.data,
      //   translations: translations.data,
    };
    dispatch(loadmovie(AllDetails));
    console.log(AllDetails);
  } catch (error) {
    console.log("Error : ", error.message, "error hai bhai ");
  }
};
