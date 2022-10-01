/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSliderItem = /* GraphQL */ `
  query GetSliderItem($id: ID!) {
    getSliderItem(id: $id) {
      id
      title
      description
      image
      bg
      url
      createdAt
      updatedAt
    }
  }
`;
export const listSliderItems = /* GraphQL */ `
  query ListSliderItems(
    $filter: ModelSliderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSliderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        bg
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInstallationService = /* GraphQL */ `
  query GetInstallationService($id: ID!) {
    getInstallationService(id: $id) {
      id
      name
      description
      image
      price
      createdAt
      updatedAt
    }
  }
`;
export const listInstallationServices = /* GraphQL */ `
  query ListInstallationServices(
    $filter: ModelInstallationServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstallationServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        image
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMaintenanceService = /* GraphQL */ `
  query GetMaintenanceService($id: ID!) {
    getMaintenanceService(id: $id) {
      id
      name
      description
      image
      price
      createdAt
      updatedAt
    }
  }
`;
export const listMaintenanceServices = /* GraphQL */ `
  query ListMaintenanceServices(
    $filter: ModelMaintenanceServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaintenanceServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        image
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
