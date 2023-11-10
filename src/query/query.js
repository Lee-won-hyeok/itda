import axios from "axios";

// const URL = process.env.REACT_APP_SERVER_ORIGIN;

export const loginSubmit = (data, _el) => {
  axios
    .post(URL + "/user/login", data, {
      withCredentials: true,
    })
    .then((res) => window.location.reload())
    .catch((e) => {
      _el.reset();
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    });
};

export const auth = (cb, success, error) => {
  axios
    .get(URL + "/user/checkcookie", { withCredentials: true })
    .then((res) => {
      cb(success);
    })
    .catch((e) => {
      cb(error);
    });
};

export const duplicateCheckId = (id, cb) => {
  axios
    .get(URL + "/user/id/" + id)
    .then((res) => {
      cb(true);
    })
    .catch((e) => {
      cb(true);
    });
};

export const mobileAuth = (num) => {
  axios
    .get(URL + "/user/phonenum/" + num)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const mobileCert = (num, cb) => {
  axios
    .get(URL + "/user/checknum/" + num)
    .then((res) => {
      cb(true);
    })
    .catch((e) => {
      cb(true);
    });
};

// export const signup = (formdata) => {
//   axios
//     .post(URL + "/user/signup", formdata)
//     .then((res) => console.log(res))
//     .catch((e) => console.log(e));
// };

export const findId = (formdata, cb) => {
  axios
    .post(URL + "/user/findID", formdata)
    .then((res) => {
      cb(false);
    })
    .catch((e) => {
      cb(true);
    });
};

export const findPwd = (formdata, cb) => {
  axios
    .post(URL + "/user/findPW", formdata)
    .then((res) => {
      cb(false);
    })
    .catch((e) => {
      cb(true);
    });
};

export const logout = () => {
  axios
    .get(URL + "/user/logout", {
      withCredentials: true,
    })
    .then((res) =>  window.location.reload())
    .catch((e) => alert("문제있음"));
};

// export const userinfo = () => {
//   axios
//     .get(URL + "/user/userinfo", {
//       withCredentials: true,
//     })
//     .then((res) =>  window.location.reload())
//     .catch((e) => alert("문제있음"));
// };



const userRequestInstance = axios.create({
  baseURL: URL,
  url: "/user/",
  headers: {
    withCredentials: true,
  },
});

const profileRequestInstance = axios.create({
  baseURL: URL,
  url: "/profile/",
  headers: {
    withCredentials: true,
  },
});

const groupRequestInstance = axios.create({
  baseURL: URL,
  url: "/group/",
  headers: {
    withCredentials: true,
  },
});

const joinRequestInstance = axios.create({
  baseURL: URL,
  url: "/mygroup/",
  headers: {
    withCredentials: true,
  },
});

const searchRequestInstance = axios.create({
  baseURL: URL,
  url: "/search/",
  headers: {
    withCredentials: true,
  },
});

export const userInfo = (id) => {
  userRequestInstance.get(id)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
}

export const signup = (formdata) => {
  userRequestInstance.post(null, formdata)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const editUserInfo = (id, formdata) => {
  userRequestInstance.patch(id, formdata)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const removeUserInfo = (id) => {
  userRequestInstance.delete(id)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const getProfile = (id) => {
  profileRequestInstance.get(id)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
};

export const setProfile = (id, formdata) => {
  profileRequestInstance.post(id, formdata)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const removeProfile = (id) => {
  profileRequestInstance.delete(id)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const getGroup = (id) => {
  groupRequestInstance.get(id)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
}

export const addGroup = (formdata) => {
  groupRequestInstance.post(null, formdata)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const editGroup = (id, formdata) => {
  groupRequestInstance.patch(id, formdata)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const removeGroup = (id) => {
  groupRequestInstance.delete(id)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const getMyGroup = (id) => {
  joinRequestInstance.get(id)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const joinGroup = (groupID, userID) => {
  joinRequestInstance.post(groupID, {id: userID})
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const quitGroup = (groupID, userID) => {
  joinRequestInstance.delete(groupID, {id: userID})
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const recommend = () => {
  searchRequestInstance.get()
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const search = (keyword) => {
  searchRequestInstance.get(keyword)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};
