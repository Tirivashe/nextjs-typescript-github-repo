import axios from 'axios'


interface CancelConfig {
  request: any,
  cancelToken: any
}

let cancelConfig: CancelConfig = {
  request: null,
  cancelToken: null

}


export async function axiosGetCancellable(url: string, config?: {}){
  if(cancelConfig.request){
    cancelConfig.request.cancel("canceled")
  }

  cancelConfig.request = axios.CancelToken.source()
  cancelConfig.cancelToken = cancelConfig.request.token
  Object.assign(cancelConfig, config)
  try {
    const res = await axios.get(url, cancelConfig)
    return res
  } catch (error) {
    if(error.message !== "canceled"){
      throw error
    }
  }
}