
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

export const getCurrentUser = () => {
    let user = null;
    try {
      user =
        localStorage.getItem('Recommend_Share_current_user') != null
          ? JSON.parse(localStorage.getItem('Recommend_Share_current_user'))
          : null;
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js  : getCurrentUser -> error', error);
      user = null;
    }
    return user;
  };