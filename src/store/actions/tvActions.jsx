export { removetv } from "../reducers/tvSlice";
import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
    const images = await axios.get(`/tv/${id}/images`);
    const reviews = await axios.get(`/tv/${id}/reviews`);
    const credits = await axios.get(`/tv/${id}/credits`);
    // const translations = await axios.get(`/tv/${id}/translations`);

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
    dispatch(loadtv(AllDetails));
    console.log(AllDetails);
  } catch (error) {
    console.log("Error : ", error.message, "error hai bhai ");
  }
};
