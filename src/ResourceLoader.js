import axios from 'axios';

class ResourceLoader {
  constructor(serviceUrl) {
    this.serviceUrl = serviceUrl;
  }

  async getAllResources(resource) {
    const resourceUrl = `${this.serviceUrl}/${resource}`;
    const { data } = await axios.get(resourceUrl);
    return data;
  }

  async getResourcesByParams(resource, queryString) {
    const resourceUrl = `${this.serviceUrl}/${resource}/${queryString}`;
    const { data } = await axios.get(resourceUrl);
    return data;
  }

  async getResourceById(resource, id) {
    const url = `${this.serviceUrl}/${resource}/${id}`;
    const { data } = await axios.get(url);
    return data;
  }
}

export default ResourceLoader;
