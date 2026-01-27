import {ApiResponse} from '../utils/api-response.js';

const healthcheck = (req, res) => {
    try{
        res.status(200).json(new ApiResponse(200, {message: "Server is Running"}));
    }
    catch(err){
        res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }
};

export {healthcheck};