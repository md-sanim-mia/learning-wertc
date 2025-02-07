import { createContext, useContext, useMemo } from "react"
import {io} from "socket.io-client"
const SocketContext=createContext(null)
export const useSocket=()=>{
  const socket=useContext(SocketContext)
  return socket
}
const SocketProvider = ({children}) => {
const Socket=useMemo(()=>io('http://localhost:5000'),[] )
  return (
    <SocketContext.Provider value={Socket}>
        {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
