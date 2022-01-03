import {
  REQUEST_SELLER_REQUEST,
  REQUEST_SELLER_SUCCESS,
  REQUEST_SELLER_FAIL,
  REQUEST_SELLER_RESET,
  GET_REQUEST_SELLER_REQUEST,
  GET_REQUEST_SELLER_SUCCESS,
  GET_REQUEST_SELLER_FAIL,
  GET_REQUEST_SELLER_RESET,
  GET_DESC_REQUEST_SELLER_REQUEST,
  GET_DESC_REQUEST_SELLER_SUCCESS,
  GET_DESC_REQUEST_SELLER_FAIL,
  GET_DESC_REQUEST_SELLER_RESET,
  APPROVE_SELLER_REQUEST,
  APPROVE_SELLER_SUCCESS,
  APPROVE_SELLER_FAIL,
} from "../constants/requestConstant";

import axios from "axios";

const URL_API = "http://localhost:5000";

export const createRequest = (request) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_SELLER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${URL_API}/api/requests/newSeller`,
      request,
      config
    );
    console.log(data);

    dispatch({
      type: REQUEST_SELLER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: REQUEST_SELLER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllRequest = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_REQUEST_SELLER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${URL_API}/api/requests/all`, config);

    dispatch({
      type: GET_REQUEST_SELLER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_REQUEST_SELLER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const approveRequest = (requestId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPROVE_SELLER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${URL_API}/api/requests/approve/${requestId}`,
      {},
      config
    );

    dispatch({
      type: APPROVE_SELLER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: APPROVE_SELLER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getRequestById = (requestId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_DESC_REQUEST_SELLER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${URL_API}/api/requests/${requestId}`,
      config
    );

    dispatch({
      type: GET_DESC_REQUEST_SELLER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_DESC_REQUEST_SELLER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
