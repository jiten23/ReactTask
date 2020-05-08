import {Strings} from '../values';

async function apiRequest( url, callback,  callbackFailure, props) {

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
       
        callback(responseJson) 
    })
    .catch( error => {
        callbackFailure(error)
      console.error(error);
    });

}



export function searchLocationBaseDataApi(extraData, callbackSuccess, callbackFailure) {

    apiRequest( Strings.SEARCH_LocationData_API+extraData, callbackSuccess, callbackFailure, null);
}

export function searchLocationBaseDataApiss(extraData, callbackSuccess, callbackFailure, props) {

    apiRequest( Strings.SEARCH_LocationData_API+extraData, callbackSuccess, callbackFailure, null);

}

