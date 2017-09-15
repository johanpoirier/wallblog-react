class ItemApi {
  static getAll() {
    return fetch('/api/item').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ItemApi;
