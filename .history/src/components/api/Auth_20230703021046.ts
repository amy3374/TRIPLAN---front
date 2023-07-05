import axios from "axios";
import { userState } from "../../redux/reducer/User";
import { resolve } from "path";

export function login(username: string, password: string) {
  return axios({
    url: "http://localhost:8000/login",

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => {
    if (res.status === 200) {
      setItemWithExpireTime("User", JSON.stringify(res.data.user), 500000);
      const storage = JSON.parse(window.localStorage.getItem("User") as string);
      return storage;
    }
    if (res.status === 400)
      return alert("An account with this username/password does not exists.");
  });
}
export function logout() {
  window.localStorage.removeItem("User");
}

export const checkUser = new Promise((resolve, reject) => {
  return JSON.parse(getItemWithExpireTime("User"));
});

// 만료 시간과 함께 데이터를 저장
export function setItemWithExpireTime(
  keyName: string,
  keyValue: any,
  tts: number
) {
  // localStorage에 저장할 객체
  const obj = {
    value: keyValue,
    expire: Date.now() + tts,
  };

  // 객체를 JSON 문자열로 변환
  const objString = JSON.stringify(obj);

  // setItem
  window.localStorage.setItem(keyName, objString);
}

// 만료 시간을 체크하며 데이터 읽기
export function getItemWithExpireTime(keyName: string) {
  // localStorage 값 읽기 (문자열)
  const objString = window.localStorage.getItem(keyName);

  // null 체크
  if (!objString) {
    return null;
  }

  // 문자열을 객체로 변환
  const obj = JSON.parse(objString);

  // 현재 시간과 localStorage의 expire 시간 비교
  if (Date.now() > obj.expire) {
    // 만료시간이 지난 item 삭제
    window.localStorage.removeItem(keyName);

    // null 리턴
    return null;
  }

  // 만료기간이 남아있는 경우, value 값 리턴
  return obj.value;
}
