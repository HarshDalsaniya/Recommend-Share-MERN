
export const setCurrentUser = (user) => {
    try {
        if (user) {
            localStorage.setItem('Recommend_Share_current_user', JSON.stringify(user))

        } else {
            localStorage.removeItem('Recommend_Share_current_user');
        }
    } catch (error) {
        console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
    }
};