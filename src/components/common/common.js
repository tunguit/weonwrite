import React, { Component } from 'react'
import axios from 'axios'

class CommonComponent extends Component {

    constructor(props) {
        super(props);
        let SESSION_EXPIRATION = 60 * 24 * 7 // minutes
        this.state = {
            showModal: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
        this.getStorageUser = this.getStorageUser.bind(this);
        this.getToken = this.getToken.bind(this);
        this.saveStorage = this.saveStorage.bind(this);
        this.loadStorage = this.loadStorage.bind(this);
    }

    saveStorage(key, value) {

    }

    loadStorage(key) {

    }

    closeModal() {
        this.setState({ showModal: false })
    }

    openModal() {
        this.setState({ showModal: true })
    }

    isLoggedIn() {
        const existing = this.getToken()
        return existing ? true : false
    }

    getToken() {
        return (typeof window !== 'undefined') ? this.storage.load('app_access_token') : null
    }

    getStorageUser() {
        const user = (typeof window !== 'undefined') ? this.storage.load('app_user') : undefined
        return user || null
    }

    updateStorageUser(data, callback) {
        let storageUser = this.getStorageUser()
        if (Object.keys(data).length > 0) {
            const keys = Object.keys(data)
            for (const i in keys) {
                const key = keys[i]
                storageUser[key] = data[key]
            }
            if (typeof window !== 'undefined') {
                this.storage.save('app_user', storageUser)
            }
        }
        if (callback) {
            callback(storageUser)
        }
    }
}
export default CommonComponent