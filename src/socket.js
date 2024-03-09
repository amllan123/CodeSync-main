import io from 'socket.io-client'

export const initSocket=async() =>{

const options={
    'force new connection':true,
    reconnetionAttempt:'Infinity',
    timeout:10000,
    transports:['websocket'],
}


return io("https://codesyncserver-1.onrender.com",options);

}