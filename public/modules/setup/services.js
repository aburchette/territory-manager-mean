angular.module('setup').service('DatabaseOptions', function(){
    return [
        {value: 'record', label: 'Records', validFields: [
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
        ]},
        {value: 'territory', label: 'Territories', validFields: [
            { name: 'created', type: 'number' },
            { name: 'name', type: 'string' },
            { name: 'polygon', type: 'array string' },
            { name: 'locale', type: 'string' },
            { name: 'notes', type: 'string' }
        ]},
        {value: 'agent', label: 'Agents', validFields: [
            { name: 'created', type: 'number' },
            { name: 'name', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'active', type: 'boolean' }
        ]},
        {value: 'agent-territory-index', label: 'Agent-Territory Index', validFields: [
            { name: 'created', type: 'number' },
            { name: 'agent_id', type: 'number' },
            { name: 'territory_id', type: 'number' },
            { name: 'checkedOut', type: 'number' },
            { name: 'checkedIn', type: 'number' },
        ]},
        {value: 'config', label: 'Configuration', validFields: [
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
            { name: '', type: '' },
        ]}
    ];
});
