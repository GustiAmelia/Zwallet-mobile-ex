import Axios from 'axios';

export const login = (email,password) => {
  return Axios.post('http://192.168.43.73:5000/auth/login',{email, password});
};
export const register = (username,email,password)=>{
  return Axios.post('http://192.168.43.73:5000/auth/register',{
      username,
      email,
      password,
  });
};

export const updatePin = (pin,username)=>{
  return Axios.patch('http://192.168.43.73:5000/user/updatePin',{
      pin,
      username,
  });
};

export const getUser = ()=>{
  return Axios.get('http://192.168.43.73:5000/user');
};

export const getValidPin = (email,pin)=>{
  return Axios.post('http://192.168.43.73:5000/auth/pin',{
    email,
    pin,
  });
};

export const addDataTransfer = (category,amount,sender_id,receiver_id,note)=>{
  return Axios.post('http://192.168.43.73:5000/transaction',{
    category,
    amount,
    sender_id,
    receiver_id,
    note,
  });
};

export const allTransaction = (id)=>{
  return Axios.get(`http://192.168.43.73:5000/transaction?sender_id=${id}&receiver_id=${id}`);
};

export const updateImg = (id, avatar) => {
  console.log('masuk api')
  let formData = new FormData();
  formData.append('id',id);
  formData.append('avatar', {
    uri: `file://${avatar.path}`,
    // uri: avatar.uri,
    type: avatar.type,
    name: avatar.fileName,
    size: avatar.fileSize,
  });

  const configHeader = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };

  return Axios.patch('http://192.168.43.73:5000/user', formData, configHeader);
};

export const searchContact = (username)=>{
  return Axios.get(`http://192.168.43.73:5000/user/search?username=${username}`);
};
