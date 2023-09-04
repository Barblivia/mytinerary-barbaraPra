import { createAction } from "@reduxjs/toolkit";

export const user_img = createAction('user_img', (obj) => {
    console.log(obj)

    return {
        payload: {
            img: obj.img
        }
    }
})