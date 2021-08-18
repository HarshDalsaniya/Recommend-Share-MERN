var fs = require('fs');
var jwt = require('jsonwebtoken');
require("dotenv").config();
exports.func = function () {
    return {
        response_format: function (status, message, data ) {
            var response = {};
            response.status = status;
            if (status) {
                response.message = message;
                response.data = data;
                response.errors = {};
            }
            else {
                response.message = message;
                response.errors = { code: 404, message: response.message };
                response.data = {};
            }
            response.meta ={ api_version: 1};
            return response;
        },
        /*
         * get image path for api
         */
        image_not_found_api : function (dir, img, host) {

            img_path = "";
            if (img != '') {
                check_img_path = fs.realpathSync('.') + "/uploads/" + dir + "/" + img;
                var exists = fs.existsSync(check_img_path);
                if (exists) {
                    img_path = "http://" + host + "/" + dir + "/" + img;
                }
            }
            return img_path;
        },
        /*
         * get image path for backend
         */
        image_not_found : function (dir, user_id,img) {
            img_path = "/images/no_image/no_image.jpg";
            if (img != '') {
                check_img_path = fs.realpathSync('.') + "/uploads/user_"+user_id+"/" + dir + "/" + img;
                var exists = fs.existsSync(check_img_path);
                if (exists) {
                    img_path = "/user_"+user_id+"/" + dir + "/" + img;
                }
            }
            return img_path;
        },

         generateAccessToken: function (id) {
            return jwt.sign(id, process.env.SECRET_KEY);
          }
}
}
