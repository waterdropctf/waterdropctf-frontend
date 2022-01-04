const api_ = '/api'
const v1 = `${api_}/v1`
const user = 'user'
const repository = 'repository'
const auth = 'auth'
const initialize = 'initialize'
const task = 'task'
const directory = 'directory'
const file = 'file'
const remote_config = 'remote_config'
const challenge = 'challenge'
const instance = 'instance'
const attachment = 'attachment'
const compose = 'compose'
const static_ = 1
const dynamic = 2

const api = {
    v1: {
        user: `${v1}/${user}`,
        challenge: `${v1}/${challenge}`,
        instance: `${v1}/${instance}`,
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
            user: {
                user: api.v1.user,
                init: `${api.v1.user}/init`,
                count: `${api.v1.user}/count`
            },
            remote_config: api.v1.remote_config,
            challenge: api.v1.challenge,
            instance: {
                instance: api.v1.instance,
                item: (id) => `${api.v1.instance}/${id}`,
            },
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
                static: static_,
                dynamic: dynamic,
                options: [
                    {value: static_, text: 'static'},
                    {value: dynamic, text: 'dynamic'},
                ]
            }
        },
        instance: {
            status: {
                created: 1,
                pulled: 2,
                deploying: 3,
                deploy_task_assigned: 4,
                ready: 5,
                removed: 6,
            }
        },
        flag: {
            type: {
                static: static_,
                dynamic: dynamic,
                options: [
                    {value: static_, text: 'static'},
                    {value: dynamic, text: 'dynamic'},
                ]
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
