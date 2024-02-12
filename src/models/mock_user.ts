const createUserBody = {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        example: 'John Snow',
      },
      email: {
        type: 'string',
        example: 'john.snow@email.com',
      },
      password: {
        type: 'string',
        description: "unencrypted user's password",
        example: '!1234aWe1Ro3$#',
      },
      enabled: {
        type: 'boolean',
        example: true,
      }
    },
  };
  export {createUserBody };