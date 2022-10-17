import { setActivePinia, createPinia } from "pinia";
import useUserStore from "@/stores/user"


// mock firebase
vi.mock("@/includes/firebase", () => ({
    auth: {
        signInWithEmailAndPassword: () => Promise.resolve()
    }
}))

describe("stores", () => {
    // To avoid leaks. We can reset the Pinia instance the before each function will run a function before a test is executed.
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test("authenticated user", async() => {
        const store = useUserStore()
        
        expect(store.userLoggedIn).not.toBe(true)
        await store.authenticate({})
        expect(store.userLoggedIn).toBe(true)
    })
})