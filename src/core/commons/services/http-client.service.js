import axios from "axios";
import * as helperService from "../services/helper.service"

import configs from "../../config"

export default class HttpClient {

    resourceUrl
    axiosClient = null
    headers = null
    constructor(resourceBaseName, injectToken = null) {

        this.headers = {
            "Content-type": "application/json",
        }

        if (injectToken) {
            this.headers['Authorization'] = `Bearer ${injectToken}`
        }

        this.axiosClient = axios.create({
            baseURL: configs.API_BASE_URL,
            headers: this.headers
        });

        this.resourceUrl = `/${resourceBaseName}`

    }

    get axios() {
        return this.axiosClient
    }

    async getAll(paginate = null) {
        try {
            let response;
            if (paginate != null) {
                let { page, perPage } = paginate
                page = page ? page : 1
                perPage = perPage ? perPage : 10
                response = await this.axiosClient.get(`${this.resourceUrl}?page=${page}&perPage=${perPage}`)
            } else {
                response = await this.axiosClient.get(this.resourceUrl);
            }
            return response.data
        } catch (error) {
            return helperService.failedHttpResponse()
        }
    }

    async getRequest(urlPath) {
        try {
            const { data } = await this.axiosClient.get(urlPath);
            return data
        } catch (error) {
            return helperService.failedHttpResponse()
        }
    }
    async deleteRequest(urlPath) {
        try {
            const { data } = await this.axiosClient.delete(urlPath);
            return data
        } catch (error) {
            return helperService.failedHttpResponse()
        }
    }

    async postRequest(urlPath, formData) {
        try {
            const { data } = await this.axiosClient.post(urlPath, formData);
            console.log(`Data ->`, data);
            return data
        } catch (error) {
            console.log(error.message);
            return helperService.failedHttpResponse("Oops something went wrong")
        }
    }

    async get(id) {

        try {
            const { data } = await this.axiosClient.get(`${this.resourceUrl}/${id}`);
            return data
        } catch (error) {
            return helperService.failedHttpResponse()
        }
    };

    async create(data) {

        try {
            const { data } = await this.axiosClient.post(`${this.resourceUrl}`, data);
            return data
        } catch (error) {
            return helperService.failedHttpResponse()
        }
    };

    async update(id, data) {

        try {
            const { data } = await this.axiosClient.put(`${this.resourceUrl}/${id}`, data);
            return data
        } catch (error) {
            return helperService.failedHttpResponse()
        }
    };

    async remove(id) {


        try {
            const { data } = await this.axiosClient.delete(`${this.resourceUrl}/${id}`);
            return data
        } catch (error) {
            return helperService.failedHttpResponse()
        }
    };

    async removeAll() {

        try {
            const { data } = await this.axiosClient.delete(`${this.resourceUrl}`);
            return data
        } catch (error) {
            return helperService.failedHttpResponse()
        }
    };

}