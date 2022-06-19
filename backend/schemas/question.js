export default {
    name: 'question',
    title: 'Question', 
    type: 'document',
    fields: [
        {
            name: 'number',
            title: 'Number',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'options',
            title: 'Options',
            type: 'array',
            of: [{ type: 'option' }]

        }
    ]
};