import Base64 from "./utils/Base64";
import consts from "./const";
import queryString from "query-string";
import { Alert } from 'react-native';
import FormData from 'FormData';
// work with api goes here

export function getRepositories(token, page, limit) {
    const params = queryString.stringify({
        access_token: token,
        page: page,
        per_page: limit
    });
    return fetch(`https://api.github.com/user/repos?${params}`, {
        method: 'GET',
        headers: consts.BASE_HEADER
    }).then((list) => {
        return list.json()
    })
        .catch((error) => {
            console.log(error);
        });
}

