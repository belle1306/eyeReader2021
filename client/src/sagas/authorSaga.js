import { takeLatest, put } from 'redux-saga/effects';
import { GET_AUTHORS, SET_AUTHORS } from '../redux/types';

// #region - Action Creators
export const getAuthors = (data) => ({
    type: GET_AUTHORS,
    payload: { data }
})

const setAuthors = (data) => ({
    type: SET_AUTHORS,
    payload: data
})

// #region - Fetching APIs
const dummyAuthor = [
    { id: 0, authorName: 'Angelo Urian', avatar: null, email: 'urian.markangelo@gmail.com'}
]

class Authors {
    static async getAuthorsAPI() {
        try {
            return await fetch('https://reqres.in/api/users',{
                method: 'GET'
            })
            .then(response => response.text())
            .then(text => {
                try {
                    return JSON.parse(text);
                } catch (error) {
                    throw {
                        message: 'Unable to process request',
                        code: 1,
                        text
                    }
                }
            })
            .then(response => {
                return response.data || []
            })
            .catch(e => {
                return dummyAuthor
            })
        } catch (e) {
            throw e;
        }
    }
}
// #endregion


// #region - Authors - Get Authors
function* _getAuthors() {
    try {
        const response = yield Authors.getAuthorsAPI();
        let authorsList = [];
        if (response) {
            response.map(data => {
                authorsList.push({
                    id: data.id,
                    authorName: `${data.first_name} ${data.last_name}`,
                    avatar: data.avatar,
                    email: data.email
                })
            })
        }
        yield put (setAuthors(authorsList))
    } catch (error) {
        console.log(error)
        yield put (setAuthors(dummyAuthor))
    }
}

export function* watchGetAuthors() {
    yield takeLatest(GET_AUTHORS, function* doAsync({ payload }) {
        yield _getAuthors(payload)
    })
}
// #endregion