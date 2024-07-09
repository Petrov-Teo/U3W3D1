export const REMOVE_FAVORITE_COMPANY = "REMOVE_FAVORITE_COMPANY";
export const ADD_FAVORITE_COMPANY = "ADD_FAVORITE_COMPANY";
export const INCREMENT = "INCREMENT";

export const RemoveFavoriteAction = (company) => {
  return { type: REMOVE_FAVORITE_COMPANY, payload: company };
};

export const AddFavoriteCompanyAction = (data) => {
  return { type: ADD_FAVORITE_COMPANY, payload: data };
};

export const IncrementAcrion = (value) => {
  return { type: INCREMENT, payload: value };
};
