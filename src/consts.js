const api_ = '/api'
const v1 = `${api_}/v1`
const repository = 'repository'
const auth = 'auth'
const initialize = 'initialize'
const task = 'task'
const directory = 'directory'
const file = 'file'
const remote_config = 'remote_config'
const challenge = 'challenge'
const attachment = 'attachment'
const compose = 'compose'

const api = {
    v1: {
        challenge: `${v1}/${challenge}`,
        attachment: `${v1}/${attachment}`,
        compose: `${v1}/${compose}`,
        auth: `${v1}/${auth}`,
        initialize: `${v1}/${initialize}`,
        task: `${v1}/${task}`,
        directory: `${v1}/${directory}`,
        file: `${v1}/${file}`,
        remote_config: `${v1}/${remote_config}`,
    },
}

export default {
    BaseUrl: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8001' : '',
    api: {
        v1: {
            remote_config: api.v1.remote_config,
            challenge: api.v1.challenge,
            attachment: api.v1.attachment,
            compose: api.v1.compose,
            auth: api.v1.auth,
            initialize: {
                initialize: api.v1.initialize,
                create_user: `${api.v1.initialize}/create_user`,
                end: `${api.v1.initialize}/end`
            },
        },
    },
    Resource: {
        Repository: repository,
    },
    Path: {
        initialize: `/${initialize}`,
        home: `/`,
        dir: {
            path: (id) => `${api.v1.directory}/path/${id}`
        }
    },
    Model: {
        challenge: {
            type: {
                static: 1,
                dynamic: 2,
            }
        },
        flag: {
            type: {
                static: 1,
                dynamic: 2,
            }
        },
        node: {
            type: {
                directory: 0,
                file: 1,
            }
        },
        task: {
            type: {
                OfflineDownload: 0,
            }
        },
        create_directory_node: {
            filename: "",
            parent_node_id: 0,
        },
    },
    Cookie: {
        token: 'token',
        isAdmin: 'is_admin',
        userId: 'user_id'
    }
}
