import { Subscription } from "rxjs"

export interface WriteSite {
    sub: Subscription,
    error: string,
    loading: boolean,
    data: {
        name: string,
        location: string,
        description: string,
        media: []
    }
}