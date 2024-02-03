import { useCallback, useEffect, useState } from "react";


// modžda bolje koristiti lambde

// veći problem je što ne koristiš localStorage kroz ContextProvidera
// kada koristiš bez ContextProvider-a ne postoji sharean state između korištenja
// tj ako komponenta A updatea key "key" i komponenta B koristi isti key "key" neće se updateati
// kada bi bilo unutar contexta updateali bi se pravilno
// to je jako bitno kada slažeš dependencye i reaktivnost

//drugi problem je što nemaš modeliran state localStoragea
//što znači da možeš spremiti bilo što u localStorage i da nemaš kontrolu nad njime
//pokazat ću ti dole primjer kako modelirati localStorage
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        //ovako se ne piše json
        const jasonValue = localStorage.getItem(key)
        //nemoj koristiti oneliner ifove uvijek stavljaj blok
        if (jasonValue != null) return JSON.parse(jasonValue)

        if (typeof initialValue === 'function') {
            return (initialValue as () => T)()
            //else nepotreban
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
        //možda je bolje staviti JSON.stringify(value) u dep array zbog toga kako js uspoređuje objekte
    }, [key, value])

    //ovdje korist as const ne as [typof value, typeof setValue] as const ti pretvori array u tuple
    return [value, setValue] as [typeof value, typeof setValue]
}

export interface ILocalStorageModel {
    user?: string;
    token?: string;
    cart?: string;
}

export const useTestLocalStorage = () => {

    const [state, setState] = useState<ILocalStorageModel>({})

    useEffect(() => {
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        const cart = localStorage.getItem('cart')

        setState({ user, token, cart })
    },
        []
    )

    const addItem = useCallback(<K extends keyof ILocalStorageModel>(key: K, value: ILocalStorageModel[K]) => {
        //trebaš za value ispitati kojeg je tipa i na temelju toga adekvatno pretvoriti u string ovo sam stavio samo tako JSON.stringify(value)
        window.localStorage.setItem(key, JSON.stringify(value));
        setState(prevState => ({ ...prevState, [key]: value }))
    },
        []
    )

    const getItem = useCallback(<K extends keyof ILocalStorageModel>(key: K) => state[key], [state])


    return { addItem, getItem, state }
}
