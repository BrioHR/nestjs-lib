export const PaginatorConfig = {

  /**
   * Configure the paginator labels return by the mongoose paginate plugin
   */
  custom_labels: {
    totalDocs: "itemCount",
    docs: "data",
    limit: "perPage",
    page: "currentPage",
    nextPage: "nextPage",
    prevPage: "prevPage",
    totalPages: "totalPages",
    pagingCounter: "pagingCounter",
    meta: "metadata"
  },

  /**
   * Configure the list of parameter available for request using the pagination.
   * Parameters are coming form the library mongoose-paginate-v2.
   * Link: https://www.npmjs.com/package/mongoose-paginate-v2
   *
   * For each parameter, you can configure:
   * - is_active: allow the use of this parameter
   * - is_default: define if there is a default value if the value is not set
   *               in the request (is_active needs to be true)
   * - default: if is_default is set, you can choose the value here
   *
   * For the limit parameter, we can also set u pa maximum value.
   */
  available_filters: {
    select: {
      is_active: true,
      is_default: false
    },
    collation: {
      is_active: true,
      is_default: false
    },
    sort: {
      is_active: true,
      is_default: false
    },
    populate: {
      is_active: false,
      is_default: false
    },
    lean: {
      is_active: false
    },
    leanWithId: {
      is_active: false
    },
    offset: {
      // use either offset or page
      is_active: false,
      is_default: false
    },
    page: {
      is_active: true,
      is_default: true,
      default: 1
    },
    limit: {
      is_active: true,
      is_default: true,
      default: 100,
      is_maximum_active: true,
      maximum: 1000
    },
  }
};
