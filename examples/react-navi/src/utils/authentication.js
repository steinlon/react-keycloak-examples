import {map, redirect} from 'navi'

export function withAuthentication(matcher) {
    return map((request, context) =>
        context.isAuthenticated ? matcher : redirect('/')
    )
}
