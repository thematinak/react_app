import React, { useContext, useState } from "react";

const NotificationContext = React.createContext();
const NotificationHandleContext = React.createContext();

let notifId = 0;
let notifTime = 10000

export function useNotification() {
    return useContext(NotificationContext);
}

function usePushNotif(severity) {
    const dispatcher = useContext(NotificationHandleContext)
    const newNotifId = notifId
    notifId += 1
    return (msg) => {

        dispatcher({
            id: newNotifId,
            severity: severity,
            message: msg
        })

        setTimeout(() => dispatcher(newNotifId), notifTime)
    }
}

export function useInfo() {
    return usePushNotif('INFO')
}

export function useWarn() {
    return usePushNotif('WARN')
}

export function useError() {
    return usePushNotif('ERROR')
}

export function NotificationProvider({ children }) {
    const [notifications, setNotification] = useState([]);

    function notifProccessing(param) {
        if (typeof param === 'number') {
            setNotification((notif) => notif.filter(i => i.id !== param))
        } else if (typeof param === 'object') {
            setNotification((notif) => [...notif, param])
        }
    }
    
    return (
        <NotificationContext.Provider value={notifications}>
            <NotificationHandleContext.Provider value={notifProccessing}>
                {children}
            </NotificationHandleContext.Provider>
        </NotificationContext.Provider>
    )
}

