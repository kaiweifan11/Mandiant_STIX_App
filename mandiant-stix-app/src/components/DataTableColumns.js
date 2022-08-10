const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Spec Version',
        dataIndex: 'spec_version',
        key: 'spec_version',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Date Created',
        dataIndex: 'created',
        key: 'created',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Date Modified',
        dataIndex: 'modified',
        key: 'modified',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'First Seen',
        dataIndex: 'first_seen',
        key: 'first_seen',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Resource Level',
        dataIndex: 'resource_level',
        key: 'resource_level',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Primary Motivation',
        dataIndex: 'primary_motivation',
        key: 'primary_motivation',
        render: (text) => <div>{text}</div>,
    },
    /*{
        title: 'Aliases',
        dataIndex: 'aliases',
        key: 'aliases',
        render: (aliases) => <div>{aliases[0]}</div>,
    },
    {
        title: 'Threact Actor Types',
        dataIndex: 'threat_actor_types',
        key: 'threat_actor_types',
        render: (threat_actor_types) => <div>{threat_actor_types[0]}</div>,
    },
    {
        title: 'Roles',
        dataIndex: 'roles',
        key: 'roles',
        render: (roles) => <div>{roles[0]}</div>,
    },*/
];

export default columns;
