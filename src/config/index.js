export default {
  auth: {
    clientId: 'YShAi5KGQEUP4x1esXHhIEvY5JWzmxmq',
    domain: 'alyoop.auth0.com',
    options: {
      rememberLastLogin: false,
      auth: {
        redirectUrl: `${window.location.origin}/auth`,
        responseType: 'token'
      },
      theme: {
        logo: "https://s3.amazonaws.com/www.alyoop.me/assets/logo-auth0.png",
        primaryColor: '#06D6A0',
        authButtons: {
          "dribbble": {
            primaryColor: "#ea4c89",
            foregroundColor: "#ffffff",
            icon: "https://s3.amazonaws.com/www.alyoop.me/assets/logo-dribbble.svg"
          }
        }
      }
    }
  }
}
