import axios from "axios";

// export const serverURL = `https://api.theeliteqa.com`;
export const serverURL = `https://d008-115-113-153-66.ngrok-free.app`;

export const getAuthHeaders = () => {
  const headers = {
    Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGE1MDhiMzA5YWQyNTU5ZWMyNjlmYjMiLCJzZXNzaW9uSWQiOiI2NGE2NGE1NzAzOThmZDQxMjRlMzExYTYiLCJpYXQiOjE2ODg2MTk2MDcsImV4cCI6MTc3NTAxOTYwNywiaXNzIjoic29tZTEifQ.wSCtapVYT9tDLLBOv7LE8CJp_PrUOgtSRm8i0BqZtW01n135xDtedniQT4fZy2giLRpVa1vVYQibX0tvzDiTIJwB5pXvo1MITMXoVYpx_nBcPB_8xfBRYTK8EkyidZQuAUhY8JIil0NBX087XLUAGLNwH-I1S7ZGfTi2vdUTS_UneL3qs-0P6x3UV9VKhfH7-5QQSBbH0q2QdFWam9IoyHmKH5jfgMZhzBTB9MwWnBd7W0_k5CKvLKXyiychxKecn5aozIBsS81M2MxzE39jol2Pt0SiL5jh5MO1odog7XDfCCn6tncfKoFOP3TGU5IMsRYIbiB7N7p0hAqumaKcAZUIbn8XUB6vHu1Iq0rv5GrcoxoeXXePhPhm7XKvw7uOm39W4EnqtUgwFzFujUD-vJf6Pb-Jbl1qYcsavTomRYAOfmtPRPUqmLwuHsCGNIOsSWgrdJJNLNH57c8XNooGoQidkSjQjm-bE7XdzTlBq5XS1WuUbQpZ4un2mRlXxHM9OuE3cevVYUKSjGLX17g9XWs-__H_feE0a4TIaqgK5Q0vnsfcsq88TAqnDqMH8eJ0QLKoXwOxRY6rmvLLZpwLpGQ-IpMtIHHhHWwZ-uohXaD9CQGi5c1GAANq1e0jacadswKOnW1ru3VlhHhYHctURfGqsIlBewt-MaUoFxFaATk"}`,
  };
  return { headers };
};

/**
 * Methods
 * 1: GET;
 * 2: POST;
 * 3: PATCH;
 * 4: DELETE;
 * 5: PUT
 */
const APICall = (url, data = {}, method = 1, authorization = true) => {
  return new Promise(async (resolve, reject) => {
    try {
      const finalURL = `${serverURL}${url}`;
      const headers = authorization ? getAuthHeaders() : {};
      let response;
      if (method === 1) {
        response = await axios.get(finalURL, headers);
      } else if (method === 2) {
        response = await axios.post(finalURL, data, headers);
      } else if (method === 3) {
        response = await axios.patch(finalURL, data, headers);
      } else if (method === 4) {
        response = await axios.delete(finalURL, headers);
      } else if (method === 5) {
        response = await axios.put(finalURL, data, headers);
      }
      return resolve(response);
    } catch (error) {
      // console.log(error);
      if (
        error.toString().includes("status code 401") &&
        localStorage.accessToken
      ) {
        // logoutUser().then(() => {
        //   window.location.href = "/./";
        // });
      }
      reject(error);
    }
  });
};
export default APICall;
