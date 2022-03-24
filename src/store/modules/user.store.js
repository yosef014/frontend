import { userService } from '../../services/user-service'

export const userStore = {
    state: {
        // loggedinUser: userService.getLoggedinUser(),
        loggedinUser: {
            "_id": "u101",
            "fullname": "emil guzlan",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
            "username": "user1",
            "level": "basic/premium",
            "ordersId": ["sdsadmf123"],
            "reviews": [
                {
                    "id": "1234123",
                    "txt": "Very kind and works fast",
                    "rate": 4,
                    "by": {
                        "_id": "u102",
                        "fullname": "user2",
                        "imgUrl": "/img/img2.jpg"
                    }
                }
            ],
        },
        users: [],
        watchedUser: null
    },
    getters: {
        users({ users }) { return users },
        loggedinUser({ loggedinUser }) { return loggedinUser },
        watchedUser({ watchedUser }) { return watchedUser }
    },
    mutations: {
        setLoggedinUser(state, { user }) {
            state.loggedinUser = (user) ? { ...user } : null;
        },
        setWatchedUser(state, { user }) {
            state.watchedUser = user;
        },
        setUser(state, { users }) {
            state.users = users;
        },
        removeUser(state, { userId }) {
            state.users = state.users.filter(user => user._id !== userId)
        },
        setUserPref(state, { user }) {
            state.loggedinUser.color = user.color
            state.loggedinUser.BGColor = user.BGColor
        }
    },
    actions: {
        async login({ commit }, { userCred }) {
            try {
                const user = await userService.login(userCred);
                commit({ type: 'setLoggedinUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { userCred }) {
            try {
                const user = await userService.signup(userCred)
                commit({ type: 'setLoggedinUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }

        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
        async loadUsers({ commit }) {
            try {
                const users = await userService.getUsers();
                // commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('userStore: Error in loadUsers', err)
                throw err
            }
        },
        async loadAndWatchUser({ commit }, { userId }) {
            try {
                const user = await userService.getById(userId);
                commit({ type: 'setWatchedUser', user })
                socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
                socketService.off(SOCKET_EVENT_USER_UPDATED)
                socketService.on(SOCKET_EVENT_USER_UPDATED, user => {
                    commit({ type: 'setWatchedUser', user })
                })
            } catch (err) {
                console.log('userStore: Error in loadAndWatchUser', err)
                throw err
            }
        },
        async removeUser({ commit }, { userId }) {
            try {
                await userService.remove(userId);
                commit({ type: 'removeUser', userId })
            } catch (err) {
                console.log('userStore: Error in removeUser', err)
                throw err
            }
        },
        async updateUser({ commit }, { user }) {
            try {
                let loggedinUser = await userService.update(user);
                commit({ type: 'setLoggedinUser', user })
            } catch (err) {
                console.log('userStore: Error in updateUser', err)
                throw err
            }
        },
        async updateSeller({ commit }, { review }) {
            try {
                seller = await userService.update(review);
            } catch (err) {
                console.log('userStore: Error in updateUser', err)
                throw err
            }
        },
        async updateUserPref({ commit }, { user }) {
            try {
                const updatedUser = await userService.updateUserPref(user)
                commit({ type: 'setUserPref' }, { updatedUser })
            } catch (err) {
                console.log('userStore: Error in increaseScore', err)
                throw err
            }

        }
    }
}