import * as React from "react";
import { LoadingContext } from "context/loading/loadingContext";
import { ErrorContext } from "context/error/errorContext";
import { AxiosResponse } from "axios";
import { ApiCall, Cookies } from "middleware";
import { LOCALNAME } from "utils/Constant";
import { IError } from "context/error/IError";
import { AlertContext } from "context/alert/alertContext";
import { AlertType } from "context/alert/AlertType";

export const useApi = () => {
  enum ConfigType {
    NoAuth = 'noauth',
    WithAuth = 'withauth'
  }

  const handleConfig = (type: ConfigType) => {
    const token = Cookies.get(LOCALNAME.TOKEN);
    const NoAuth = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const WithAuth = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }

    switch (type) {
      case ConfigType.NoAuth:
        return NoAuth;

      case ConfigType.WithAuth:
        return WithAuth;

      default:
        return;
    }
  }

  const loadingContext = React.useContext(LoadingContext);
  const errorContext = React.useContext(ErrorContext);
  const alertContext = React.useContext(AlertContext);

  const { setLoading, resetLoading } = loadingContext;
  const { setError } = errorContext;
  const { setAlert } = alertContext;

  const handleError = (res: any) => {
    const err: IError = {
      status: res.status,
      statusText: res.statusText,
      message: res.data || res.data.error || `Error - ${res.statusText}`
    }
    setAlert({type: AlertType.Error, message: err.message});
    setError(err);
  }

  const getOnApi = async (routes: string, next: any) => {
    setLoading();
    let res: AxiosResponse<any> = await ApiCall.get(routes, handleConfig(ConfigType.WithAuth)); 
    if (res) {
      if (res.status === 200) {
        next(res);
      } else {
        handleError(res);
      }
      resetLoading();
    }
  }

  // semua func api pake async yak
  const postOnApi = async (routes: string, values: any, withAuth: boolean, next: any) => {
    // set loading
    setLoading();
    // ini gw pake axios buat execute data dari si login tadi, pake await jgn lupa
    // gw bikin pake withAuth ? itu karna post ini dipake bbrp component, ada yang harus punya token dlu baru bisa
    let res: AxiosResponse<any> = await ApiCall.post(routes, values, withAuth ? handleConfig(ConfigType.WithAuth) : handleConfig(ConfigType.NoAuth)); 
    if (res) {
      // kalo hasil dari axios udh ada dan hasilny 200 alias success
      if (res.status === 200) {
        // execute next yg udah dikirim tadi
        next(res);
      } else {
        handleError(res);
      }
      // reset loading
      resetLoading();
    }
  }

  const modifyOnApi = async (routes: string, id: string, values: any, next: any) => {
    setLoading();
    let res: AxiosResponse<any> = await ApiCall.put(routes, id, values, handleConfig(ConfigType.WithAuth)); 
    if (res) {
      if (res.status === 200) {
        next(res);
        setAlert({type: AlertType.Info, message: 'This note has been modified!'});
      } else {
        handleError(res);
      }
      resetLoading();
    }
  }

  const deleteOnApi = async (routes: string, id: string, next: any) => {
    setLoading();
    let res: AxiosResponse<any> = await ApiCall.delete(routes, id, handleConfig(ConfigType.WithAuth));
    if (res) {
      if (res.status === 200) {
        next(res);
        setAlert({type: AlertType.Warning, message: 'Note has been deleted!'});
      } else {
        handleError(res);
      }
      resetLoading();
    }
  }

  return {
    getOnApi,
    postOnApi,
    modifyOnApi,
    deleteOnApi
  }
}
