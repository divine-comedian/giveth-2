import gql from 'graphql-tag'

const FETCH_PROJECTS = gql`
  query FetchProjects($limit: Int, $skip: Int, $orderBy: OrderBy) {
    topProjects(take: $limit, skip: $skip, orderBy: $orderBy) {
      projects {
        id
        title
        balance
      }
      totalCount
    }
  }
`

const FETCH_PROJECT = gql`
  query Project($id: ID!) {
    project(id: $id) {
      id
      title
      description
    }
  }
`

const ADD_PROJECT = gql`
  mutation($title: String!, $description: String!) {
    addProjectSimple(title: $title, description: $description) {
      id
      title
      description
    }
  }
`

const ADD_BANK_ACCOUNT = gql`
  mutation AddBankAccount($id: ID!) {
    addBankAccount(projectId: $id, source: "") {
      id
      projectId
    }
  }
`

const GET_LINK_BANK_CREATION = gql`
  query SetProjectBankAccount(
    $projectId: Float!
    $returnUrl: String!
    $refreshUrl: String!
  ) {
    setProjectBankAccount(
      projectId: $projectId
      returnUrl: $returnUrl
      refreshUrl: $refreshUrl
    )
  }
`
const GET_DONATION_SESSION = gql`
  query GetStripeProjectDonationSession(
    $projectId: Float!
    $amount: Float!
    $anonymous: Boolean!
    $donateToGiveth: Boolean!
    $successUrl: String!
    $cancelUrl: String!
  ) {
    getStripeProjectDonationSession(
      projectId: $projectId
      amount: $amount
      anonymous: $anonymous
      donateToGiveth: $donateToGiveth
      successUrl: $successUrl
      cancelUrl: $cancelUrl
    ) {
      sessionId
      accountId
    }
  }
`

const GET_STRIPE_DONATION_PDF = gql`
  query GetStripeDonationPDF($sessionId: Float!) {
    getStripeDonationPDF(sessionId: $sessionId)
  }
`

export {
  FETCH_PROJECTS,
  FETCH_PROJECT,
  ADD_PROJECT,
  ADD_BANK_ACCOUNT,
  GET_LINK_BANK_CREATION,
  GET_DONATION_SESSION,
  GET_STRIPE_DONATION_PDF
}
